<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Theme;

use GrupoReal\NextConfig\Config;

final class PageTemplates
{
    public function register(): void
    {
        add_filter('theme_page_templates', [$this, 'addTemplate']);
        add_filter('template_include', [$this, 'resolveTemplate'], 99);
    }

    /** @param array<string, string> $templates */
    public function addTemplate(array $templates): array
    {
        $templates[Config::TEMPLATE_DOCUMENTO] = Config::TEMPLATE_DOCUMENTO_LABEL;
        $templates[Config::TEMPLATE_LANDING] = Config::TEMPLATE_LANDING_LABEL;

        return $templates;
    }

    public function resolveTemplate(string $template): string
    {
        if (!is_page()) {
            return $template;
        }

        $slug = get_page_template_slug(get_queried_object_id());

        if ($slug === Config::TEMPLATE_DOCUMENTO) {
            $pluginTemplate = GRNC_PLUGIN_DIR . 'templates/institucional-documento.php';

            if (is_readable($pluginTemplate)) {
                return $pluginTemplate;
            }
        }

        if ($slug === Config::TEMPLATE_LANDING) {
            $pluginTemplate = GRNC_PLUGIN_DIR . 'templates/institucional-landing.php';

            if (is_readable($pluginTemplate)) {
                return $pluginTemplate;
            }
        }

        return $template;
    }
}
