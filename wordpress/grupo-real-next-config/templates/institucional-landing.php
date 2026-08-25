<?php
/**
 * Template headless — landing composta (Quem Somos) renderizada no Next.js.
 */
declare(strict_types=1);

use GrupoReal\NextConfig\Config;

if (!defined('ABSPATH')) {
    exit;
}

$frontUrl = getenv('NEXT_PUBLIC_URL_HOST') ?: '';

if ($frontUrl !== '' && !defined('REST_REQUEST') && !wp_is_json_request()) {
    $pageId = get_queried_object_id();
    $path = Config::frontPathForPage($pageId);
    $front = trailingslashit(untrailingslashit($frontUrl));

    if (!is_string($path) || $path === '') {
        $slug = get_post_field('post_name', $pageId);
        $path = '/' . (is_string($slug) ? $slug : '');
    }

    wp_safe_redirect($front . ltrim($path, '/'), 302);
    exit;
}

get_header();
echo '<main><p>Conteúdo desta página é exibido no site Next.js.</p></main>';
get_footer();
