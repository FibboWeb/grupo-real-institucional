<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Rest;

use GrupoReal\NextConfig\Config;
use WP_REST_Request;
use WP_REST_Response;

/**
 * GET público de todas as regras ativas do plugin Redirection para o front Next.
 *
 *   GET /wp-json/custom/front-redirects
 *
 * Origem: path relativo (/noticias/…) ou URL do front / do CMS (o path é extraído).
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
     * @return list<array{source: string, destination: string, permanent: bool, regex: bool}>
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
     * @return array{source: string, destination: string, permanent: bool, regex: bool}|null
     */
    private function mapRedirectionItem(array $item): ?array
    {
        $actionType = (string) ($item['action_type'] ?? 'url');

        if ($actionType !== '' && $actionType !== 'url') {
            return null;
        }

        $isRegex = !empty($item['regex']);
        $rawSource = (string) ($item['url'] ?? $item['match_url'] ?? '');
        $source = $this->normalizeFrontSource($rawSource, $isRegex);

        if ($source === null) {
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
            'regex' => $isRegex,
        ];
    }

    private function normalizeFrontSource(string $raw, bool $isRegex = false): ?string
    {
        $raw = trim($raw);

        if ($raw === '') {
            return null;
        }

        if (preg_match('#^https?://#i', $raw)) {
            $parsed = wp_parse_url($raw);
            $host = isset($parsed['host']) ? strtolower((string) $parsed['host']) : '';

            if (!$this->isAllowedSourceHost($host)) {
                return null;
            }

            $path = isset($parsed['path']) && $parsed['path'] !== '' ? $parsed['path'] : '/';
            $query = isset($parsed['query']) && $parsed['query'] !== '' ? '?' . $parsed['query'] : '';

            return $path . $query;
        }

        if ($isRegex) {
            return $raw;
        }

        if ($raw[0] !== '/') {
            $raw = '/' . $raw;
        }

        return $raw;
    }

    private function isAllowedSourceHost(string $host): bool
    {
        $host = strtolower(preg_replace('/^www\./', '', $host) ?? $host);

        $candidates = [
            Config::frontOrigin(),
            home_url(),
            site_url(),
        ];

        $allowed = [];

        foreach ($candidates as $origin) {
            $parsedHost = wp_parse_url($origin, PHP_URL_HOST);

            if (is_string($parsedHost) && $parsedHost !== '') {
                $allowed[] = strtolower(preg_replace('/^www\./', '', $parsedHost) ?? $parsedHost);
            }
        }

        $allowed = apply_filters('grnc_front_redirect_source_hosts', array_values(array_unique($allowed)));

        if (!is_array($allowed)) {
            return false;
        }

        foreach ($allowed as $allowedHost) {
            if (!is_string($allowedHost) || $allowedHost === '') {
                continue;
            }

            $normalized = strtolower(preg_replace('/^www\./', '', $allowedHost) ?? $allowedHost);

            if ($normalized === $host) {
                return true;
            }
        }

        return false;
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
