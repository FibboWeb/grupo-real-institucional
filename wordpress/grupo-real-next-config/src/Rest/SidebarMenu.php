<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Rest;

use GrupoReal\NextConfig\Config;
use WP_REST_Request;
use WP_REST_Response;
use WP_Term;

/**
 * GET público da sidebar institucional.
 *
 *   /wp-json/custom
 *   /wp-json/custom/institutional-sidebar
 *
 * Query opcional: ?name=NomeDoMenu&location=grnc_institutional_sidebar
 *
 * wp/v2/menus exige autenticação; o Next lê este endpoint no SSR.
 */
final class SidebarMenu
{
    public function register(): void
    {
        add_action('rest_api_init', [$this, 'registerRoutes']);
    }

    public function registerRoutes(): void
    {
        $args = [
            'methods' => 'GET',
            'permission_callback' => '__return_true',
            'callback' => [$this, 'handle'],
            'args' => [
                'name' => [
                    'type' => 'string',
                    'required' => false,
                    'sanitize_callback' => 'sanitize_text_field',
                ],
                'location' => [
                    'type' => 'string',
                    'required' => false,
                    'sanitize_callback' => 'sanitize_key',
                ],
            ],
        ];

        register_rest_route(Config::REST_NAMESPACE, Config::REST_ROUTE_INDEX, $args);
        register_rest_route(Config::REST_NAMESPACE, Config::REST_ROUTE_SIDEBAR, $args);
    }

    public function handle(WP_REST_Request $request): WP_REST_Response
    {
        $resolved = $this->resolveMenu(
            (string) $request->get_param('name'),
            (string) $request->get_param('location')
        );

        if ($resolved === null) {
            $response = new WP_REST_Response([
                'source' => null,
                'name' => null,
                'items' => [],
            ], 200);
            $response->header('Cache-Control', 'public, max-age=60');

            return $response;
        }

        [$source, $menu] = $resolved;
        $items = wp_get_nav_menu_items($menu->term_id) ?: [];

        $payload = [];

        foreach ($items as $index => $item) {
            $payload[] = [
                'id' => (int) $item->ID,
                'parentId' => (int) $item->menu_item_parent,
                'order' => $index + 1,
                'label' => html_entity_decode((string) $item->title, ENT_QUOTES | ENT_HTML5, 'UTF-8'),
                'url' => $this->frontUrl($item),
                'target' => (string) $item->target,
                'icone' => $this->fieldString(Config::ACF_MENU_ICONE, (int) $item->ID),
                'iconeImagem' => $this->imageUrl((int) $item->ID),
            ];
        }

        $response = new WP_REST_Response([
            'source' => $source,
            'name' => $menu->name,
            'items' => $payload,
        ], 200);
        $response->header('Cache-Control', 'public, max-age=60');

        return $response;
    }

    /**
     * @return array{0: string, 1: WP_Term}|null
     */
    private function resolveMenu(string $requestedName, string $requestedLocation): ?array
    {
        if ($requestedName !== '') {
            $byQueryName = $this->menuByNameOrSlug($requestedName);

            if ($byQueryName instanceof WP_Term) {
                return ['query', $byQueryName];
            }
        }

        $locationSlug = $requestedLocation !== '' ? $requestedLocation : Config::MENU_SIDEBAR_LOCATION;
        $locations = get_nav_menu_locations();
        $locationMenuId = isset($locations[$locationSlug]) ? (int) $locations[$locationSlug] : 0;

        if ($locationMenuId > 0) {
            $fromLocation = wp_get_nav_menu_object($locationMenuId);

            if ($fromLocation instanceof WP_Term) {
                return ['location', $fromLocation];
            }
        }

        $byName = $this->menuByNameOrSlug(Config::MENU_SIDEBAR);

        if ($byName instanceof WP_Term) {
            return ['name', $byName];
        }

        $fallback = $this->menuByNameOrSlug('Institucional');

        if ($fallback instanceof WP_Term) {
            return ['fallback', $fallback];
        }

        return null;
    }

    /**
     * Pages com template Documento apontam para /institucional/{slug} no Next.
     * Links customizados e URLs externas permanecem como o editor cadastrou.
     */
    private function frontUrl(object $item): string
    {
        $object = isset($item->object) ? (string) $item->object : '';
        $objectId = isset($item->object_id) ? (int) $item->object_id : 0;

        if ($object === 'page' && $objectId > 0) {
            $front = Config::frontPathForPage($objectId);

            if (is_string($front)) {
                return $front;
            }
        }

        return isset($item->url) ? (string) $item->url : '';
    }

    private function menuByNameOrSlug(string $value): ?WP_Term
    {
        $byName = wp_get_nav_menu_object($value);

        if ($byName instanceof WP_Term) {
            return $byName;
        }

        $menus = wp_get_nav_menus();

        foreach ($menus as $menu) {
            if (!$menu instanceof WP_Term) {
                continue;
            }

            if (strcasecmp($menu->name, $value) === 0 || strcasecmp($menu->slug, $value) === 0) {
                return $menu;
            }
        }

        return null;
    }

    private function fieldString(string $name, int $itemId): string
    {
        if (!function_exists('get_field')) {
            return '';
        }

        $value = get_field($name, $itemId);

        return is_string($value) ? $value : '';
    }

    private function imageUrl(int $itemId): string
    {
        if (!function_exists('get_field')) {
            return '';
        }

        $value = get_field(Config::ACF_MENU_ICONE_IMAGEM, $itemId);

        if (is_array($value) && !empty($value['url']) && is_string($value['url'])) {
            return $value['url'];
        }

        if (is_numeric($value)) {
            $url = wp_get_attachment_image_url((int) $value, 'full');

            return $url ?: '';
        }

        return is_string($value) ? $value : '';
    }
}
