<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Admin;

/**
 * Estilos do editor ACF nas páginas institucionais / landing (legibilidade e hierarquia visual).
 */
final class AcfAdminUi
{
    public function register(): void
    {
        add_action('acf/input/admin_enqueue_scripts', [$this, 'enqueue']);
        add_filter('admin_body_class', [$this, 'bodyClass']);
    }

    public function enqueue(): void
    {
        $css = GRNC_PLUGIN_DIR . 'assets/admin/acf-admin.css';

        if (!is_readable($css)) {
            return;
        }

        wp_enqueue_style(
            'grnc-acf-admin',
            GRNC_PLUGIN_URL . 'assets/admin/acf-admin.css',
            [],
            defined('GRNC_VERSION') ? GRNC_VERSION : '1.4.1'
        );
    }

    public function bodyClass(string $classes): string
    {
        if (!function_exists('get_current_screen')) {
            return $classes;
        }

        $screen = get_current_screen();

        if ($screen && $screen->base === 'post' && $screen->post_type === 'page') {
            return $classes . ' grnc-acf-admin';
        }

        return $classes;
    }
}
