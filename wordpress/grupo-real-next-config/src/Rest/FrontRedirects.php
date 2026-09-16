<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Rest;

use GrupoReal\NextConfig\Config;
use WP_REST_Request;
use WP_REST_Response;

/**
 * GET público dos redirects do front (produtos/linhas) cadastrados no plugin Redirection.
 *
 *   GET /wp-json/custom/front-redirects
 *
 * O Next.js lê este endpoint no middleware (e no next.config no build).
 * No CMS, cadastre a origem como path relativo (/produtos/…) ou URL do front.
 */
final class FrontRedirects
{
    public function register(): void
    {
        add_action('rest_api_init', [$this, 'registerRoutes']);
    }

    public function registerRoutes(): void
    {
        register_rest_route(
            Config::REST_NAMESPACE,
            ltrim(Config::REST_ROUTE_FRONT_REDIRECTS, '/'),
            [
                'methods' => 'GET',
                'permission_callback' => '__return_true',
                'callback' => [$this, 'handle'],
            ]
        );
    }

    public function handle(WP_REST_Request $request): WP_REST_Response
    {
        $redirects = $this->collectFromRedirectionPlugin();

        $response = new WP_REST_Response(['redirects' => $redirects], 200);
        $response->header('Cache-Control', 'public, max-age=300');

        return $response;
    }

    /**
     * @return list<array{source: string, destination: string, permanent: bool}>
     */
    private function collectFromRedirectionPlugin(): array
    {
        if (!class_exists('Red_Item')) {
            return [];
        }

        $groupId = apply_filters('grnc_front_redirect_group_id', null);
        $out = [];
        $page = 0;
        $perPage = 200;

        while ($page < 50) {
            $filterBy = ['status' => 'enabled'];

            if (is_int($groupId) && $groupId > 0) {
                $filterBy['group'] = $groupId;
            }

            $offset = $page * $perPage;
            $result = \Red_Item::get_filtered([
                'per_page' => $perPage,
                'page' => $page,
                'offset' => $offset,
                'limit' => $perPage,
                'filterBy' => $filterBy,
            ]);

            $items = is_array($result['items'] ?? null) ? $result['items'] : [];

            if ($items === []) {
                break;
            }

            foreach ($items as $item) {
                $mapped = $this->mapRedirectionItem($this->itemToArray($item));

                if ($mapped !== null) {
                    $out[] = $mapped;
                }
            }

            if (count($items) < $perPage) {
                break;
            }

            $page++;
        }

        return $out;
    }

    /**
     * @return array<string, mixed>
     */
    private function itemToArray(mixed $item): array
    {
        if (is_array($item)) {
            return $item;
        }

        if (is_object($item)) {
            if (method_exists($item, 'to_json')) {
                $json = $item->to_json();

                if (is_array($json) && $json !== []) {
                    return $json;
                }
            }

            if (method_exists($item, 'to_api')) {
                $api = $item->to_api();

                if (is_array($api) && $api !== []) {
                    return $api;
                }
            }

            if (method_exists($item, 'get_url')) {
                return [
                    'url' => (string) $item->get_url(),
                    'match_url' => method_exists($item, 'get_match_url') ? (string) $item->get_match_url() : '',
                    'action_type' => method_exists($item, 'get_action_type') ? (string) $item->get_action_type() : 'url',
                    'action_code' => method_exists($item, 'get_action_code') ? (int) $item->get_action_code() : 301,
                    'action_data' => method_exists($item, 'get_action_data') ? $item->get_action_data() : '',
                    'regex' => method_exists($item, 'is_regex') && $item->is_regex(),
                ];
            }
        }

        return [];
    }

    /**
     * @param array<string, mixed> $item
     * @return array{source: string, destination: string, permanent: bool}|null
     */
    private function mapRedirectionItem(array $item): ?array
    {
        $actionType = (string) ($item['action_type'] ?? 'url');

        if ($actionType !== '' && $actionType !== 'url') {
            return null;
        }

        if (!empty($item['regex'])) {
            return null;
        }

        $rawSource = (string) ($item['url'] ?? $item['match_url'] ?? '');
        $source = $this->normalizeFrontSource($rawSource);

        if ($source === null) {
            return null;
        }

        if (!$this->isProductOrLinePath($source)) {
            return null;
        }

        $destination = $this->destinationUrl($item);

        if ($destination === null || $destination === '') {
            return null;
        }

        $code = (int) ($item['action_code'] ?? 301);

        return [
            'source' => $source,
            'destination' => $destination,
            'permanent' => $code === 301 || $code === 308,
        ];
    }

    private function normalizeFrontSource(string $raw): ?string
    {
        $raw = trim($raw);

        if ($raw === '') {
            return null;
        }

        if (preg_match('#^https?://#i', $raw)) {
            $parsed = wp_parse_url($raw);
            $host = isset($parsed['host']) ? strtolower((string) $parsed['host']) : '';
            $frontHost = wp_parse_url(Config::frontOrigin(), PHP_URL_HOST);

            if (!is_string($frontHost) || $frontHost === '' || strtolower($frontHost) !== $host) {
                return null;
            }

            $path = isset($parsed['path']) && $parsed['path'] !== '' ? $parsed['path'] : '/';
            $query = isset($parsed['query']) && $parsed['query'] !== '' ? '?' . $parsed['query'] : '';

            return $path . $query;
        }

        if ($raw[0] !== '/') {
            $raw = '/' . $raw;
        }

        return $raw;
    }

    private function isProductOrLinePath(string $source): bool
    {
        $path = strtok($source, '?') ?: $source;

        return str_starts_with($path, Config::PATH_PRODUTOS . '/')
            || $path === rtrim(Config::PATH_PRODUTOS, '/')
            || str_starts_with($path, Config::PATH_LINHAS . '/')
            || $path === rtrim(Config::PATH_LINHAS, '/');
    }

    /**
     * @param array<string, mixed> $item
     */
    private function destinationUrl(array $item): ?string
    {
        $candidates = [
            $item['action_data'] ?? null,
            $item['action_url'] ?? null,
            $item['target'] ?? null,
        ];

        foreach ($candidates as $candidate) {
            $url = $this->extractUrl($candidate);

            if ($url !== null) {
                return $url;
            }
        }

        return null;
    }

    private function extractUrl(mixed $data): ?string
    {
        if (is_string($data)) {
            $trimmed = trim($data);

            if ($trimmed === '') {
                return null;
            }

            if (preg_match('#^https?://#i', $trimmed) || str_starts_with($trimmed, '/')) {
                return $trimmed;
            }

            $decoded = json_decode($trimmed, true);

            if (is_array($decoded)) {
                return $this->extractUrl($decoded);
            }

            if (function_exists('is_serialized') && is_serialized($trimmed)) {
                $unserialized = @unserialize($trimmed, ['allowed_classes' => false]);

                return $this->extractUrl($unserialized);
            }

            return null;
        }

        if (!is_array($data)) {
            return null;
        }

        $url = $data['url'] ?? $data['target'] ?? null;

        if (is_array($url)) {
            return $this->extractUrl($url);
        }

        return is_string($url) && $url !== '' ? $url : null;
    }
}
