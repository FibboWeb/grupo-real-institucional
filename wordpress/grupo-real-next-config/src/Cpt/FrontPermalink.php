<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Cpt;

use GrupoReal\NextConfig\Config;

/**
 * Permalink único: CPT/taxonomia → URL do Next só se publicado / com itens.
 */
final class FrontPermalink
{
    public function register(): void
    {
        add_filter('post_link', [$this, 'filterPostLink'], 10, 2);
        add_filter('page_link', [$this, 'filterPageLink'], 10, 2);
        add_filter('post_type_link', [$this, 'filterPostTypeLink'], 10, 2);
        add_filter('term_link', [$this, 'filterTermLink'], 10, 3);
        add_action('template_redirect', [$this, 'redirectFront']);
        add_filter('wpseo_canonical', [$this, 'filterYoastUrl']);
        add_filter('wpseo_opengraph_url', [$this, 'filterYoastUrl']);
    }

    public function filterPostLink(string $permalink, \WP_Post $post): string
    {
        return $this->maybeFrontPost($permalink, $post);
    }

    public function filterPageLink(string $link, $postId): string
    {
        $post = get_post((int) $postId);

        return $post instanceof \WP_Post ? $this->maybeFrontPost($link, $post) : $link;
    }

    public function filterPostTypeLink(string $postLink, \WP_Post $post): string
    {
        return $this->maybeFrontPost($postLink, $post);
    }

    /**
     * @param \WP_Term|int $term
     */
    public function filterTermLink(string $termlink, $term, string $taxonomy): string
    {
        if (!in_array($taxonomy, Config::frontLinkedTaxonomies(), true)) {
            return $termlink;
        }

        $term = $term instanceof \WP_Term ? $term : get_term((int) $term, $taxonomy);

        if (!$term instanceof \WP_Term) {
            return $termlink;
        }

        $front = Config::frontUrlForTerm($term);

        return $front ?? $termlink;
    }

    public function redirectFront(): void
    {
        if (is_singular()) {
            $post = get_queried_object();

            if ($post instanceof \WP_Post) {
                $front = Config::frontUrlForPost($post);

                if ($front !== null) {
                    wp_redirect($front, 301);
                    exit;
                }
            }

            return;
        }

        if (!is_category() && !is_tax()) {
            return;
        }

        $term = get_queried_object();

        if (!$term instanceof \WP_Term) {
            return;
        }

        $front = Config::frontUrlForTerm($term);

        if ($front !== null) {
            wp_redirect($front, 301);
            exit;
        }
    }

    public function filterYoastUrl(?string $url): ?string
    {
        if (is_singular()) {
            $post = get_queried_object();

            if ($post instanceof \WP_Post) {
                $front = Config::frontUrlForPost($post);

                return $front ?? $url;
            }
        }

        if (is_category() || is_tax()) {
            $term = get_queried_object();

            if ($term instanceof \WP_Term) {
                $front = Config::frontUrlForTerm($term);

                return $front ?? $url;
            }
        }

        return $url;
    }

    private function maybeFrontPost(string $current, \WP_Post $post): string
    {
        if (!in_array($post->post_type, Config::frontLinkedCpts(), true)) {
            return $current;
        }

        $front = Config::frontUrlForPost($post);

        return $front ?? $current;
    }
}
