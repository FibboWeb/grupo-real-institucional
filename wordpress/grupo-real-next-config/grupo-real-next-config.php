<?php
/**
 * Plugin Name: Grupo Real — Next Config
 * Description: Configurador central do headless Next.js (ACF free, templates institucionais, menus, REST).
 * Version: 1.3.3
 * Author: Grupo Real / Agência
 * Text Domain: grupo-real-next-config
 * Requires Plugins: advanced-custom-fields
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

define('GRNC_VERSION', '1.3.3');
define('GRNC_PLUGIN_FILE', __FILE__);
define('GRNC_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('GRNC_PLUGIN_URL', plugin_dir_url(__FILE__));

require_once GRNC_PLUGIN_DIR . 'src/Autoloader.php';

GrupoReal\NextConfig\Autoloader::register(GRNC_PLUGIN_DIR . 'src/');

add_action('plugins_loaded', static function (): void {
    GrupoReal\NextConfig\Plugin::instance()->boot();
});
