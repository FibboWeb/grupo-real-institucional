<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Admin;

use GrupoReal\NextConfig\Config;

/**
 * Rascunho, privado, lixeira e futuros: um aviso só, sem tooltip.
 * Publicado: link do Next (target blank fica no FrontLinkTarget).
 */
final class UnpublishedView
{
    public function register(): void
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueue']);
        add_action('admin_bar_menu', [$this, 'hideViewWhenUnpublished'], 999);
        add_filter('post_row_actions', [$this, 'replaceRowView'], 10, 2);
        add_filter('get_sample_permalink_html', [$this, 'noticeOnSamplePermalink'], 10, 2);

        foreach (Config::frontLinkedTaxonomies() as $taxonomy) {
            add_filter($taxonomy . '_row_actions', [$this, 'replaceTermRowView'], 10, 2);
        }
    }

    public function enqueue(string $hook): void
    {
        if (!in_array($hook, ['post.php', 'post-new.php', 'edit.php', 'edit-tags.php', 'term.php'], true)) {
            return;
        }

        $screen = function_exists('get_current_screen') ? get_current_screen() : null;

        if (!$screen) {
            return;
        }

        $isPost = in_array($screen->post_type, Config::frontLinkedCpts(), true)
            && in_array($hook, ['post.php', 'post-new.php', 'edit.php'], true);
        $isTerm = in_array((string) $screen->taxonomy, Config::frontLinkedTaxonomies(), true);

        if (!$isPost && !$isTerm) {
            return;
        }

        $blocked = ($isPost && $this->currentPostBlocked())
            || ($isTerm && $this->currentTermBlocked());

        wp_enqueue_style(
            'grnc-post-view',
            GRNC_PLUGIN_URL . 'assets/admin/post-view.css',
            [],
            defined('GRNC_VERSION') ? GRNC_VERSION : '1.7.0'
        );
        wp_enqueue_script(
            'grnc-post-view',
            GRNC_PLUGIN_URL . 'assets/admin/post-view.js',
            [],
            defined('GRNC_VERSION') ? GRNC_VERSION : '1.7.0',
            true
        );
        wp_localize_script('grnc-post-view', 'grncPostView', [
            'hint' => $isTerm ? Config::CATEGORY_VIEW_EMPTY_HINT : Config::POST_VIEW_UNPUBLISHED_HINT,
            'blocked' => $blocked,
        ]);
    }

    /**
     * @param \WP_Admin_Bar $bar
     */
    public function hideViewWhenUnpublished($bar): void
    {
        if (!is_admin()) {
            return;
        }

        $term = $this->editorTerm();

        if ($term instanceof \WP_Term && Config::frontUrlForTerm($term) === null) {
            $bar->remove_node('view');

            return;
        }

        $post = $this->editorPost();

        if ($post instanceof \WP_Post
            && in_array($post->post_type, Config::frontLinkedCpts(), true)
            && Config::frontUrlForPost($post) === null
        ) {
            $bar->remove_node('view');
        }
    }

    /**
     * @param array<string, string> $actions
     * @return array<string, string>
     */
    public function replaceRowView(array $actions, \WP_Post $post): array
    {
        if (!in_array($post->post_type, Config::frontLinkedCpts(), true)
            || Config::frontUrlForPost($post) !== null
        ) {
            return $actions;
        }

        unset($actions['view']);
        $actions['grnc_view'] = '<span class="grnc-view-notice">'
            . esc_html(Config::POST_VIEW_UNPUBLISHED_HINT)
            . '</span>';

        return $actions;
    }

    /**
     * @param array<string, string> $actions
     * @return array<string, string>
     */
    public function replaceTermRowView(array $actions, \WP_Term $term): array
    {
        if (!in_array($term->taxonomy, Config::frontLinkedTaxonomies(), true)
            || Config::frontUrlForTerm($term) !== null
        ) {
            return $actions;
        }

        unset($actions['view']);
        $actions['grnc_view'] = '<span class="grnc-view-notice">'
            . esc_html(Config::CATEGORY_VIEW_EMPTY_HINT)
            . '</span>';

        return $actions;
    }

    public function noticeOnSamplePermalink(string $html, $postId): string
    {
        $post = get_post((int) $postId);

        if (!$post instanceof \WP_Post
            || !in_array($post->post_type, Config::frontLinkedCpts(), true)
            || Config::frontUrlForPost($post) !== null
        ) {
            return $html;
        }

        if (strpos($html, 'grnc-view-notice') !== false) {
            return $html;
        }

        return $html . '<p class="grnc-view-notice">' . esc_html(Config::POST_VIEW_UNPUBLISHED_HINT) . '</p>';
    }

    private function currentPostBlocked(): bool
    {
        $post = $this->editorPost();

        return $post instanceof \WP_Post
            && in_array($post->post_type, Config::frontLinkedCpts(), true)
            && Config::frontUrlForPost($post) === null;
    }

    private function currentTermBlocked(): bool
    {
        $term = $this->editorTerm();

        return $term instanceof \WP_Term && Config::frontUrlForTerm($term) === null;
    }

    private function editorTerm(): ?\WP_Term
    {
        $tagId = isset($_GET['tag_ID']) ? (int) $_GET['tag_ID'] : 0;

        if ($tagId < 1) {
            return null;
        }

        $taxonomy = isset($_GET['taxonomy']) ? sanitize_key((string) $_GET['taxonomy']) : 'category';

        if (!in_array($taxonomy, Config::frontLinkedTaxonomies(), true)) {
            return null;
        }

        $term = get_term($tagId, $taxonomy);

        return $term instanceof \WP_Term ? $term : null;
    }

    private function editorPost(): ?\WP_Post
    {
        $postId = isset($_GET['post']) ? (int) $_GET['post'] : 0;

        if ($postId < 1) {
            global $post;

            return $post instanceof \WP_Post ? $post : null;
        }

        $post = get_post($postId);

        return $post instanceof \WP_Post ? $post : null;
    }
}
