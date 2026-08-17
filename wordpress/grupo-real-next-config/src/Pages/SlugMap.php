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

    public static function registerAdminNotices(): void
    {
        add_action('admin_notices', [self::class, 'renderParentSlugConflictNotice']);
    }

    public static function renderParentSlugConflictNotice(): void
    {
        if (!current_user_can('manage_options') || !self::parentSlugConflictsWithQuemSomos()) {
            return;
        }

        echo '<div class="notice notice-warning"><p><strong>Grupo Real — Next Config:</strong> a página com slug <code>institucional</code> ainda é a landing Grupo Real H. ';
        echo 'Renomeie o slug para <code>quem-somos</code> (Páginas → edição rápida) e só então crie uma <em>nova</em> página pai <code>institucional</code> para as políticas. ';
        echo 'O front Next continua em <code>/quem-somos</code> — não altere essa rota agora.</p></div>';
    }
}
