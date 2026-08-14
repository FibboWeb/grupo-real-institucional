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

            acf_add_local_field_group($group);
        }
    }

    /** @return list<string> */
    public static function expectedGroupKeys(): array
    {
        return [Config::ACF_GROUP_PAGE, Config::ACF_GROUP_MENU];
    }
}
