<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Rest;

/**
 * Garante que pages exponham meta de template na REST (ACF depende de show_in_rest nos grupos).
 */
final class PageFields
{
    public function register(): void
    {
        add_action('rest_api_init', [$this, 'registerPageMeta']);
    }

    public function registerPageMeta(): void
    {
        register_rest_field('page', 'template', [
            'get_callback' => static function (array $object): string {
                return get_page_template_slug((int) $object['id']) ?: '';
            },
            'schema' => [
                'type' => 'string',
                'context' => ['view', 'edit'],
            ],
        ]);
    }
}
