<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Acf;

use GrupoReal\NextConfig\Config;

/**
 * Registra field groups ACF free a partir de JSON versionado no plugin.
 * Não usa Local JSON do ACF Pro — apenas acf_add_local_field_group().
 */
final class JsonLoader
{
    public function register(): void
    {
        add_action('acf/init', [$this, 'loadFieldGroups']);
    }

    public function loadFieldGroups(): void
    {
        if (!function_exists('acf_add_local_field_group')) {
            return;
        }

        $dir = GRNC_PLUGIN_DIR . 'acf-json/';

        if (!is_dir($dir)) {
            return;
        }

        $files = glob($dir . '*.json') ?: [];

        foreach ($files as $file) {
            $json = file_get_contents($file);

            if ($json === false) {
                continue;
            }

            $group = json_decode($json, true);

            if (!is_array($group)) {
                continue;
            }

            acf_add_local_field_group($this->prepareGroup($group));
        }
    }

    /** @return list<string> */
    public static function expectedGroupKeys(): array
    {
        return [Config::ACF_GROUP_PAGE, Config::ACF_GROUP_MENU, Config::ACF_GROUP_LANDING];
    }

    /**
     * @param array<string, mixed> $group
     * @return array<string, mixed>
     */
    private function prepareGroup(array $group): array
    {
        if (empty($group['fields']) || !is_array($group['fields'])) {
            return $group;
        }

        $group['fields'] = array_map(function ($field) {
            return is_array($field) ? $this->prepareField($field) : $field;
        }, $group['fields']);

        return $group;
    }

    /**
     * ACF Pro 6.5 espera layouts indexados pela key (`layout_*`), min/max vazios = ilimitado.
     * `max: 0` no JSON pode ser lido como “máximo zero seções” e some o botão Adicionar.
     *
     * @param array<string, mixed> $field
     * @return array<string, mixed>
     */
    private function prepareField(array $field): array
    {
        if (($field['type'] ?? '') !== 'flexible_content') {
            return $field;
        }

        if (($field['min'] ?? null) === 0 || ($field['min'] ?? null) === '0') {
            $field['min'] = '';
        }

        if (($field['max'] ?? null) === 0 || ($field['max'] ?? null) === '0') {
            $field['max'] = '';
        }

        if (empty($field['layouts']) || !is_array($field['layouts'])) {
            return $field;
        }

        $normalized = [];

        foreach ($field['layouts'] as $layout) {
            if (!is_array($layout) || empty($layout['name'])) {
                continue;
            }

            if (empty($layout['key'])) {
                $layout['key'] = 'layout_grnc_' . sanitize_key((string) $layout['name']);
            }

            if (!isset($layout['min']) || $layout['min'] === 0 || $layout['min'] === '0') {
                $layout['min'] = '';
            }

            if (!isset($layout['max']) || $layout['max'] === 0 || $layout['max'] === '0') {
                $layout['max'] = '';
            }

            if (!empty($layout['sub_fields']) && is_array($layout['sub_fields'])) {
                foreach ($layout['sub_fields'] as $i => $sub) {
                    if (!is_array($sub)) {
                        continue;
                    }

                    $layout['sub_fields'][$i]['parent'] = $field['key'] ?? '';
                    $layout['sub_fields'][$i]['parent_layout'] = $layout['key'];
                    $layout['sub_fields'][$i]['menu_order'] = $i;

                    if (($sub['name'] ?? null) === '') {
                        $layout['sub_fields'][$i]['name'] = 'aviso';
                    }
                }
            }

            $normalized[$layout['key']] = $layout;
        }

        $field['layouts'] = $normalized;

        return $field;
    }
}
