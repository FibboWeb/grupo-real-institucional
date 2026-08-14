<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Theme;

use GrupoReal\NextConfig\Config;

/**
 * Templates do plugin: Gutenberg off + editor de texto nativo do WP oculto.
 * O cliente edita só os campos ACF (Wysiwyg), sem dois editores na mesma tela.
 */
final class Editor
{
    public function register(): void
    {
        add_filter('use_block_editor_for_post', [$this, 'disableBlockEditor'], 10, 2);
        add_action('load-post.php', [$this, 'hideNativeEditor']);
        add_action('load-post-new.php', [$this, 'hideNativeEditor']);
        add_action('add_meta_boxes', [$this, 'removeEditorMetabox'], 99, 2);
        add_action('admin_head', [$this, 'hideEditorCss']);
        add_action('admin_footer', [$this, 'printTemplateWatcher']);
        add_filter('acf/get_field_group', [$this, 'forceHideNativeContent']);
    }

    public function disableBlockEditor(bool $useBlockEditor, \WP_Post $post): bool
    {
        if ($post->post_type !== 'page') {
            return $useBlockEditor;
        }

        if (Config::isPluginTemplate(get_page_template_slug($post->ID))) {
            return false;
        }

        return $useBlockEditor;
    }

    public function hideNativeEditor(): void
    {
        if (!$this->currentScreenIsPluginPage()) {
            return;
        }

        remove_post_type_support('page', 'editor');
    }

    /**
     * @param string $postType
     */
    public function removeEditorMetabox($postType, $post = null): void
    {
        if ($postType !== 'page' || !($post instanceof \WP_Post)) {
            return;
        }

        if (!Config::isPluginTemplate(get_page_template_slug($post->ID))) {
            return;
        }

        remove_meta_box('postdivrich', 'page', 'normal');
        remove_post_type_support('page', 'editor');
    }

    public function hideEditorCss(): void
    {
        if (!$this->currentScreenIsPluginPage()) {
            return;
        }

        echo '<style id="grnc-hide-native-editor">
            #postdivrich,
            #wp-content-wrap,
            #wp-content-editor-container,
            #wp-content-editor-tools,
            .block-editor,
            .edit-post-visual-editor { display: none !important; }
        </style>';
    }

    public function printTemplateWatcher(): void
    {
        $screen = function_exists('get_current_screen') ? get_current_screen() : null;

        if (!$screen || !in_array($screen->base, ['post', 'page'], true) || $screen->post_type !== 'page') {
            return;
        }

        $templates = wp_json_encode(Config::pluginTemplates());
        ?>
<script>
(function ($) {
  if (!$) return;
  var templates = <?php echo $templates; ?>;
  function isPluginTemplate(val) {
    return templates.indexOf(val) !== -1;
  }
  function toggleNativeEditor() {
    var val = $('#page_template').val() || $('select[name="page_template"]').val() || '';
    $('#postdivrich, #wp-content-wrap').toggle(!isPluginTemplate(val));
  }
  $(document).on('change', '#page_template, select[name="page_template"]', toggleNativeEditor);
  toggleNativeEditor();
})(window.jQuery);
</script>
        <?php
    }

    /**
     * Garante hide_on_screen.the_content nos grupos ACF ligados a templates do plugin.
     *
     * @param array<string, mixed> $group
     * @return array<string, mixed>
     */
    public function forceHideNativeContent(array $group): array
    {
        $locations = $group['location'] ?? [];

        foreach ($locations as $orGroup) {
            foreach ($orGroup as $rule) {
                if (($rule['param'] ?? '') === 'page_template'
                    && Config::isPluginTemplate((string) ($rule['value'] ?? ''))
                ) {
                    $hidden = $group['hide_on_screen'] ?? [];
                    if (!in_array('the_content', $hidden, true)) {
                        $hidden[] = 'the_content';
                    }
                    $group['hide_on_screen'] = $hidden;

                    return $group;
                }
            }
        }

        return $group;
    }

    private function currentScreenIsPluginPage(): bool
    {
        $postId = isset($_GET['post']) ? (int) $_GET['post'] : 0;

        if ($postId < 1) {
            return false;
        }

        $post = get_post($postId);

        if (!$post instanceof \WP_Post || $post->post_type !== 'page') {
            return false;
        }

        return Config::isPluginTemplate(get_page_template_slug($postId));
    }
}
