<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Pages;

use GrupoReal\NextConfig\Config;
use WP_Post;

final class SlugMap
{
    public static function findPageBySlug(string $slug): ?WP_Post
    {
        $pages = get_posts([
            'name' => $slug,
            'post_type' => 'page',
            'post_status' => ['publish', 'draft', 'pending', 'private'],
            'numberposts' => 1,
        ]);

        return $pages[0] ?? null;
    }

    /**
     * Slug institucional ainda aponta para a landing Grupo Real H (conflito).
     */
    public static function parentSlugConflictsWithQuemSomos(): bool
    {
        $quemSomos = self::findPageBySlug(Config::SLUG_QUEM_SOMOS);
        $institucional = self::findPageBySlug(Config::SLUG_PARENT);

        return $institucional instanceof WP_Post && !($quemSomos instanceof WP_Post);
    }
}
