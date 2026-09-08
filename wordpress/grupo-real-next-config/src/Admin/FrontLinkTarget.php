<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Admin;

use GrupoReal\NextConfig\Config;

/**
 * Links do admin que apontam para o Next abrem em nova aba.
 */
final class FrontLinkTarget
{
    public function register(): void
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueue']);
        add_action('admin_bar_menu', [$this, 'blankAdminBarView'], 1000);
        add_filter('post_row_actions', [$this, 'blankRowView'], 30, 2);
        add_filter('get_sample_permalink_html', [$this, 'blankSamplePermalink'], 30, 2);

        foreach (Config::frontLinkedTaxonomies() as $taxonomy) {
            add_filter($taxonomy . '_row_actions', [$this, 'blankTermRowView'], 30, 2);
        }
    }

    public function enqueue(): void
    {
        wp_enqueue_script(
            'grnc-front-links',
            GRNC_PLUGIN_URL . 'assets/admin/front-links.js',
            [],
            defined('GRNC_VERSION') ? GRNC_VERSION : '1.5.9',
            true
        );
        wp_localize_script('grnc-front-links', 'grncFrontLinks', [
            'origin' => Config::frontOrigin(),
        ]);
    }

    /**
     * @param \WP_Admin_Bar $bar
     */
    public function blankAdminBarView($bar): void
    {
        $node = $bar->get_node('view');

        if (!$node || empty($node->href) || !$this->isFrontUrl((string) $node->href)) {
            return;
        }

        $meta = is_array($node->meta) ? $node->meta : [];
        $meta['target'] = '_blank';
        $node->meta = $meta;
        $bar->add_node((array) $node);
    }

    /**
     * @param array<string, string> $actions
     * @return array<string, string>
     */
    public function blankRowView(array $actions, \WP_Post $post): array
    {
        return $this->addBlankToViewAction($actions);
    }

    /**
     * @param array<string, string> $actions
     * @return array<string, string>
     */
    public function blankTermRowView(array $actions, \WP_Term $term): array
    {
        return $this->addBlankToViewAction($actions);
    }

    public function blankSamplePermalink(string $html, $postId): string
    {
        return $this->addBlankToAnchors($html);
    }

    /**
     * @param array<string, string> $actions
     * @return array<string, string>
     */
    private function addBlankToViewAction(array $actions): array
    {
        if (!isset($actions['view']) || !is_string($actions['view'])) {
            return $actions;
        }

        $actions['view'] = $this->addBlankToAnchors($actions['view']);

        return $actions;
    }

    private function addBlankToAnchors(string $html): string
    {
        $origin = Config::frontOrigin();

        return (string) preg_replace_callback(
            '/<a\s([^>]*href=(["\'])([^"\']+)\2[^>]*)>/i',
            static function (array $matches) use ($origin): string {
                $href = $matches[3];

                if (strpos($href, $origin) !== 0) {
                    return $matches[0];
                }

                $attrs = $matches[1];

                if (stripos($attrs, 'target=') === false) {
                    $attrs .= ' target="_blank"';
                }

                if (stripos($attrs, 'rel=') === false) {
                    $attrs .= ' rel="noopener noreferrer"';
                }

                return '<a ' . $attrs . '>';
            },
            $html
        );
    }

    private function isFrontUrl(string $url): bool
    {
        return strpos($url, Config::frontOrigin()) === 0;
    }
}
