<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Import;

use GrupoReal\NextConfig\Config;
use WP_Error;

/**
 * Importa pacotes de landing (Flexible Content secoes) a partir de imports/*.php ou imports/*.json.
 */
final class LandingImporter
{
    /** @var array<string, int> */
    private array $mediaCache = [];

    /**
     * @return list<array{id: string, title: string, description: string, slug: string}>
     */
    public static function discover(): array
    {
        $packages = [];

        foreach (array_merge(
            glob(GRNC_PLUGIN_DIR . 'imports/*.php') ?: [],
            glob(GRNC_PLUGIN_DIR . 'imports/*.json') ?: []
        ) as $path) {
            $data = self::loadPackageFromPath($path);

            if ($data === null || empty($data['id'])) {
                continue;
            }

            $packages[$data['id']] = [
                'id' => (string) $data['id'],
                'title' => (string) ($data['title'] ?? $data['id']),
                'description' => (string) ($data['description'] ?? ''),
                'slug' => (string) ($data['slug'] ?? $data['id']),
            ];
        }

        return array_values($packages);
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function loadPackage(string $id): ?array
    {
        $php = GRNC_PLUGIN_DIR . 'imports/' . $id . '.php';
        $json = GRNC_PLUGIN_DIR . 'imports/' . $id . '.json';

        if (is_readable($php)) {
            return self::loadPackageFromPath($php);
        }

        if (is_readable($json)) {
            return self::loadPackageFromPath($json);
        }

        return null;
    }

    /**
     * @return array{post_id: int, created: bool, message: string}|WP_Error
     */
    public function import(string $id): array|WP_Error
    {
        if (!function_exists('update_field')) {
            return new WP_Error('grnc_no_acf', 'ACF não está ativo.');
        }

        $package = self::loadPackage($id);

        if ($package === null) {
            return new WP_Error('grnc_package_missing', 'Pacote de importação não encontrado.');
        }

        $slug = sanitize_title((string) ($package['slug'] ?? $id));
        $title = sanitize_text_field((string) ($package['title'] ?? $slug));
        $template = (string) ($package['template'] ?? Config::TEMPLATE_LANDING);
        $secoes = $package['secoes'] ?? [];

        if (!is_array($secoes) || $secoes === []) {
            return new WP_Error('grnc_empty_secoes', 'O pacote não contém seções para importar.');
        }

        [$postId, $created] = $this->resolvePage($slug, $title, $template);

        if ($postId <= 0) {
            return new WP_Error('grnc_page_failed', 'Não foi possível criar ou localizar a página.');
        }

        $this->mediaCache = [];
        $acfSecoes = [];

        foreach ($secoes as $row) {
            if (!is_array($row)) {
                continue;
            }

            $layout = isset($row['acf_fc_layout']) ? (string) $row['acf_fc_layout'] : '';

            if ($layout === '') {
                continue;
            }

            unset($row['acf_fc_layout']);
            $acfSecoes[] = array_merge(
                ['acf_fc_layout' => $layout],
                $this->resolveRowFields($row)
            );
        }

        update_field(Config::ACF_SECOES, $acfSecoes, $postId);

        $this->applyYoast($postId, $package['yoast'] ?? null);

        $action = $created ? 'criada e preenchida' : 'atualizada';

        return [
            'post_id' => $postId,
            'created' => $created,
            'message' => sprintf('Página "%s" (%s) %s com %d seções.', $title, $slug, $action, count($acfSecoes)),
        ];
    }

    /**
     * @return array{0: int, 1: bool}
     */
    private function resolvePage(string $slug, string $title, string $template): array
    {
        $existing = get_page_by_path($slug);

        if ($existing instanceof \WP_Post) {
            wp_update_post([
                'ID' => $existing->ID,
                'post_title' => $title,
                'post_status' => 'publish',
            ]);
            update_post_meta($existing->ID, '_wp_page_template', $template);

            return [(int) $existing->ID, false];
        }

        $postId = wp_insert_post([
            'post_type' => 'page',
            'post_status' => 'publish',
            'post_title' => $title,
            'post_name' => $slug,
            'post_content' => '',
        ], true);

        if (is_wp_error($postId)) {
            return [0, false];
        }

        update_post_meta((int) $postId, '_wp_page_template', $template);

        return [(int) $postId, true];
    }

    /**
     * @param array<string, mixed> $row
     * @return array<string, mixed>
     */
    private function resolveRowFields(array $row): array
    {
        $resolved = [];

        foreach ($row as $key => $value) {
            $resolved[$key] = $this->resolveValue($value);
        }

        return $resolved;
    }

    private function resolveValue(mixed $value): mixed
    {
        if (is_string($value)) {
            if (str_starts_with($value, 'asset:')) {
                return $this->importAsset(substr($value, 6));
            }

            if (preg_match('#^https?://#i', $value)) {
                return $this->importUrl($value);
            }

            return $value;
        }

        if (is_array($value)) {
            if ($this->isList($value)) {
                return array_map(fn ($item) => is_array($item) ? $this->resolveRowFields($item) : $this->resolveValue($item), $value);
            }

            return $this->resolveRowFields($value);
        }

        return $value;
    }

    private function importAsset(string $relativePath): int
    {
        $relativePath = ltrim(str_replace('\\', '/', $relativePath), '/');
        $cacheKey = 'asset:' . $relativePath;

        if (isset($this->mediaCache[$cacheKey])) {
            return $this->mediaCache[$cacheKey];
        }

        $absolute = GRNC_PLUGIN_DIR . 'imports/assets/' . $relativePath;

        if (!is_readable($absolute)) {
            return 0;
        }

        $attachmentId = $this->uploadLocalFile($absolute);

        if ($attachmentId > 0) {
            $this->mediaCache[$cacheKey] = $attachmentId;
        }

        return $attachmentId;
    }

    private function importUrl(string $url): int
    {
        if (isset($this->mediaCache[$url])) {
            return $this->mediaCache[$url];
        }

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';

        $tmp = download_url($url);

        if (is_wp_error($tmp)) {
            return 0;
        }

        $file = [
            'name' => basename(parse_url($url, PHP_URL_PATH) ?: 'import.jpg'),
            'tmp_name' => $tmp,
        ];

        $attachmentId = media_handle_sideload($file, 0);

        if (is_wp_error($attachmentId)) {
            @unlink($tmp);

            return 0;
        }

        $this->mediaCache[$url] = (int) $attachmentId;

        return (int) $attachmentId;
    }

    private function uploadLocalFile(string $absolutePath): int
    {
        $filename = basename($absolutePath);
        $existing = get_posts([
            'post_type' => 'attachment',
            'post_status' => 'inherit',
            'posts_per_page' => 1,
            'meta_query' => [
                [
                    'key' => '_grnc_import_source',
                    'value' => md5_file($absolutePath) ?: $filename,
                ],
            ],
            'fields' => 'ids',
        ]);

        if (!empty($existing[0])) {
            return (int) $existing[0];
        }

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';

        $contents = file_get_contents($absolutePath);

        if ($contents === false) {
            return 0;
        }

        $upload = wp_upload_bits($filename, null, $contents);

        if (!empty($upload['error'])) {
            return 0;
        }

        $fileType = wp_check_filetype($filename, null);
        $attachmentId = wp_insert_attachment([
            'post_mime_type' => $fileType['type'] ?: 'application/octet-stream',
            'post_title' => sanitize_file_name(pathinfo($filename, PATHINFO_FILENAME)),
            'post_content' => '',
            'post_status' => 'inherit',
        ], $upload['file']);

        if (is_wp_error($attachmentId) || !$attachmentId) {
            return 0;
        }

        $metadata = wp_generate_attachment_metadata((int) $attachmentId, $upload['file']);
        wp_update_attachment_metadata((int) $attachmentId, $metadata);
        update_post_meta((int) $attachmentId, '_grnc_import_source', md5_file($absolutePath) ?: $filename);

        return (int) $attachmentId;
    }

    /**
     * @param mixed $yoast
     */
    private function applyYoast(int $postId, mixed $yoast): void
    {
        if (!is_array($yoast)) {
            return;
        }

        if (!empty($yoast['title']) && is_string($yoast['title'])) {
            update_post_meta($postId, '_yoast_wpseo_title', $yoast['title']);
        }

        if (!empty($yoast['description']) && is_string($yoast['description'])) {
            update_post_meta($postId, '_yoast_wpseo_metadesc', $yoast['description']);
        }

        if (!empty($yoast['canonical']) && is_string($yoast['canonical'])) {
            update_post_meta($postId, '_yoast_wpseo_canonical', $yoast['canonical']);
        }
    }

    /**
     * @return array<string, mixed>|null
     */
    private static function loadPackageFromPath(string $path): ?array
    {
        if (str_ends_with($path, '.php')) {
            $data = include $path;

            return is_array($data) ? $data : null;
        }

        if (str_ends_with($path, '.json')) {
            $raw = file_get_contents($path);

            if ($raw === false) {
                return null;
            }

            $data = json_decode($raw, true);

            return is_array($data) ? $data : null;
        }

        return null;
    }

    /**
     * @param array<mixed> $value
     */
    private function isList(array $value): bool
    {
        if ($value === []) {
            return true;
        }

        return array_keys($value) === range(0, count($value) - 1);
    }
}
