<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Admin;

use GrupoReal\NextConfig\Config;

/**
 * Evita que o Wysiwyg do ACF remova ou reescreva tags <p> nos templates do plugin.
 */
final class WysiwygConfig
{
    public function register(): void
    {
        add_action('acf/init', [$this, 'disableAutopOnAcfContent'], 20);
        add_filter('acf/load_field/type=wysiwyg', [$this, 'loadField'], 20);
        add_filter('wp_editor_settings', [$this, 'editorSettings'], 20, 2);
        add_filter('tiny_mce_before_init', [$this, 'tinymceInit'], 20);
        add_filter('teeny_mce_before_init', [$this, 'tinymceInit'], 20);
        add_filter('acf/update_value/type=wysiwyg', [$this, 'preserveHtml'], 1, 3);
        add_filter('acf/format_value/type=wysiwyg', [$this, 'preserveHtml'], 1, 3);
    }

    public function disableAutopOnAcfContent(): void
    {
        remove_filter('acf_the_content', 'wpautop');
        remove_filter('acf_the_content', 'shortcode_unautop');
    }

    /**
     * @param array<string, mixed> $field
     * @return array<string, mixed>
     */
    public function loadField(array $field): array
    {
        if (!$this->isPluginWysiwygField($field)) {
            return $field;
        }

        $field['new_lines'] = '';

        return $field;
    }

    /**
     * @param array<string, mixed> $settings
     * @return array<string, mixed>
     */
    public function editorSettings(array $settings, string $editorId): array
    {
        if (!$this->isAcfEditorId($editorId) || !$this->isInstitutionalPageContext()) {
            return $settings;
        }

        $settings['wpautop'] = false;

        if (!isset($settings['tinymce'])) {
            $settings['tinymce'] = [];
        }

        if ($settings['tinymce'] === true) {
            $settings['tinymce'] = [];
        }

        if (is_array($settings['tinymce'])) {
            $settings['tinymce']['wpautop'] = false;
            $settings['tinymce']['forced_root_block'] = 'p';
            $settings['tinymce']['force_p_newlines'] = true;
            $settings['tinymce']['force_br_newlines'] = false;
            $settings['tinymce']['remove_linebreaks'] = false;
            $settings['tinymce']['convert_newlines_to_brs'] = false;
            $settings['tinymce']['verify_html'] = false;
        }

        return $settings;
    }

    /**
     * @param array<string, mixed> $init
     * @return array<string, mixed>
     */
    public function tinymceInit(array $init): array
    {
        if (!$this->isInstitutionalPageContext()) {
            return $init;
        }

        $init['wpautop'] = false;
        $init['forced_root_block'] = 'p';
        $init['force_p_newlines'] = true;
        $init['force_br_newlines'] = false;
        $init['remove_linebreaks'] = false;
        $init['convert_newlines_to_brs'] = false;
        $init['verify_html'] = false;
        $init['indent'] = true;
        $init['entity_encoding'] = 'raw';
        $init['valid_elements'] = '*[*]';

        return $init;
    }

    /**
     * @param mixed $value
     * @param mixed $postId
     * @param array<string, mixed> $field
     */
    public function preserveHtml($value, $postId, array $field): mixed
    {
        if (!$this->isPluginWysiwygField($field) || !is_string($value)) {
            return $value;
        }

        return $value;
    }

    /**
     * @param array<string, mixed> $field
     */
    private function isPluginWysiwygField(array $field): bool
    {
        $key = isset($field['key']) ? (string) $field['key'] : '';

        return str_starts_with($key, 'field_grnc_');
    }

    private function isAcfEditorId(string $editorId): bool
    {
        return str_contains($editorId, 'acf');
    }

    private function isInstitutionalPageContext(): bool
    {
        if (!is_admin()) {
            return false;
        }

        if (!function_exists('get_current_screen')) {
            return false;
        }

        $screen = get_current_screen();

        if (!$screen || $screen->post_type !== 'page') {
            return false;
        }

        if (!in_array($screen->base, ['post', 'page'], true)) {
            return false;
        }

        $postId = isset($_GET['post']) ? (int) $_GET['post'] : 0;

        if ($postId > 0) {
            return Config::isPluginTemplate(get_page_template_slug($postId));
        }

        $template = isset($_GET['page_template']) ? sanitize_text_field(wp_unslash((string) $_GET['page_template'])) : '';

        if ($template !== '' && Config::isPluginTemplate($template)) {
            return true;
        }

        return isset($_POST['post_ID']) && Config::isPluginTemplate(get_page_template_slug((int) $_POST['post_ID']));
    }
}
