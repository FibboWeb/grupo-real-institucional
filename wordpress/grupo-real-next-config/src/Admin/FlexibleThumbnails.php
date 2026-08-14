<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Admin;

/**
 * Preview skeleton dos layouts no seletor de seções.
 * Callbacks do ACF não podem ter tipos rígidos: o 4º arg de layout_title
 * vem como int ou a string "acfcloneindex" (PHP 8 fatal).
 */
final class FlexibleThumbnails
{
    public function register(): void
    {
        add_action('acf/input/admin_enqueue_scripts', [$this, 'enqueue']);
        add_filter('acf/fields/flexible_content/layout_title', [$this, 'layoutTitle'], 10, 4);
        add_filter('acf/fields/flexible_content/no_value_message', [$this, 'emptyMessage'], 10, 2);
    }

    public function enqueue(): void
    {
        $version = defined('GRNC_VERSION') ? GRNC_VERSION : '1.3.3';
        $css = GRNC_PLUGIN_DIR . 'assets/admin/flexible-layouts.css';
        $js = GRNC_PLUGIN_DIR . 'assets/admin/flexible-layouts.js';

        if (is_readable($css)) {
            wp_enqueue_style(
                'grnc-flexible-layouts',
                GRNC_PLUGIN_URL . 'assets/admin/flexible-layouts.css',
                [],
                $version
            );
        }

        if (is_readable($js)) {
            $deps = ['jquery'];

            if (wp_script_is('acf-pro-input', 'registered')) {
                $deps[] = 'acf-pro-input';
            } elseif (wp_script_is('acf-input', 'registered')) {
                $deps[] = 'acf-input';
            }

            wp_enqueue_script(
                'grnc-flexible-layouts',
                GRNC_PLUGIN_URL . 'assets/admin/flexible-layouts.js',
                $deps,
                $version,
                true
            );
        }
    }

    /**
     * @param mixed $message
     * @param mixed $field
     */
    public function emptyMessage($message = '', $field = []): string
    {
        if (!is_array($field) || ($field['key'] ?? '') !== 'field_grnc_qs_secoes') {
            return is_string($message) ? $message : '';
        }

        return 'Clique aqui para adicionar a primeira seção.';
    }

    /**
     * @param mixed $title
     * @param mixed $field
     * @param mixed $layout
     * @param mixed $i
     */
    public function layoutTitle($title = '', $field = [], $layout = [], $i = 0): string
    {
        $title = is_string($title) ? $title : '';

        if (!is_array($layout)) {
            return $title;
        }

        $labels = [
            'hero' => 'Hero',
            'depoimento' => 'Depoimento',
            'info_video' => 'Texto + vídeo',
            'info_imagem' => 'Texto + imagem',
            'atividades' => 'Cards (missão/valores)',
            'diretoria' => 'Diretoria / cards',
            'timeline' => 'Linha do tempo',
            'texto' => 'Texto livre',
            'newsletter' => 'Newsletter',
        ];

        $name = isset($layout['name']) ? (string) $layout['name'] : '';
        $base = $labels[$name] ?? $title;

        $extra = '';

        if (function_exists('get_sub_field')) {
            $titulo = get_sub_field('titulo');
            $nome = get_sub_field('nome');

            if (is_string($titulo) && trim($titulo) !== '') {
                $extra = trim($titulo);
            } elseif (is_string($nome) && trim($nome) !== '') {
                $extra = trim($nome);
            }
        }

        if ($extra === '') {
            return $base;
        }

        return $base . ' — ' . wp_strip_all_tags($extra);
    }
}
