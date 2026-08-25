<?php
/**
 * Template headless — conteúdo renderizado no Next.js.
 */
declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

// Redireciona visitantes humanos para o front Next quando configurado.
$frontUrl = getenv('NEXT_PUBLIC_URL_HOST') ?: '';

if ($frontUrl !== '' && !defined('REST_REQUEST') && !wp_is_json_request()) {
    $slug = get_post_field('post_name', get_queried_object_id());
    $front = trailingslashit(untrailingslashit($frontUrl));

    if ($slug === 'quem-somos') {
        wp_safe_redirect($front . 'quem-somos', 302);
        exit;
    }

    wp_safe_redirect($front . 'institucional/' . $slug, 302);
    exit;
}

// Fallback mínimo para preview no WP.
get_header();
echo '<main><p>Conteúdo desta página é exibido no site Next.js.</p></main>';
get_footer();
