<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Admin;

use GrupoReal\NextConfig\Acf\JsonLoader;
use GrupoReal\NextConfig\Config;
use GrupoReal\NextConfig\Pages\SlugMap;

final class StatusPage
{
    public function register(): void
    {
        add_action('admin_menu', [$this, 'addMenu']);
        add_action('admin_notices', [$this, 'conflictNotice']);
    }

    public function addMenu(): void
    {
        add_menu_page(
            'Grupo Real / Next',
            'Grupo Real / Next',
            'manage_options',
            'grnc-status',
            [$this, 'render'],
            'dashicons-admin-site-alt3',
            58
        );
    }

    public function conflictNotice(): void
    {
        if (!current_user_can('manage_options') || !SlugMap::parentSlugConflictsWithQuemSomos()) {
            return;
        }

        echo '<div class="notice notice-warning"><p><strong>Grupo Real / Next:</strong> a página com slug <code>institucional</code> ainda é a landing Grupo Real H. ';
        echo 'Renomeie o slug para <code>quem-somos</code> (Páginas → edição rápida) e só então crie uma <em>nova</em> página pai <code>institucional</code> para as políticas. ';
        echo 'O front Next continua em <code>/quem-somos</code> — não altere essa rota agora.</p></div>';
    }

    public function render(): void
    {
        if (!current_user_can('manage_options')) {
            return;
        }

        $acfActive = class_exists('ACF');
        $acfPro = defined('ACF_PRO') && ACF_PRO;
        $menuExists = (bool) wp_get_nav_menu_object(Config::MENU_SIDEBAR);
        $locations = get_nav_menu_locations();
        $locationAssigned = !empty($locations[Config::MENU_SIDEBAR_LOCATION]);
        $groupsLoaded = function_exists('acf_get_local_field_groups')
            ? count(array_intersect(
                JsonLoader::expectedGroupKeys(),
                array_column(acf_get_local_field_groups(), 'key')
            ))
            : 0;

        $quemSomos = SlugMap::findPageBySlug(Config::SLUG_QUEM_SOMOS);
        $parent = SlugMap::findPageBySlug(Config::SLUG_PARENT);
        $conflict = SlugMap::parentSlugConflictsWithQuemSomos();
        $parentOk = $parent && !$conflict;

        echo '<div class="wrap"><h1>Grupo Real — Configurador Next.js</h1>';
        echo '<table class="widefat striped" style="max-width:720px;margin-top:1rem">';
        echo $this->row('ACF (free) ativo', $acfActive ? 'Sim' : 'Não — instale Advanced Custom Fields', $acfActive);
        echo $this->row(
            'ACF Pro (Repeater + Flexible Content)',
            $acfPro ? 'Sim' : 'Não — CTAs (Repeater) e seções da landing (Flexible Content) exigem o Pro',
            $acfPro
        );
        echo $this->row(
            'Field groups locais',
            $groupsLoaded . ' / ' . count(JsonLoader::expectedGroupKeys()),
            $groupsLoaded === count(JsonLoader::expectedGroupKeys())
        );
        echo $this->row(
            'Menu "' . esc_html(Config::MENU_SIDEBAR) . '"',
            $menuExists ? 'Criado' : 'Crie em Aparência → Menus (nome exato) ou atribua outro menu à location',
            $menuExists || $locationAssigned
        );
        echo $this->row(
            'Location "' . esc_html(Config::MENU_SIDEBAR) . '"',
            $locationAssigned
                ? 'Menu atribuído'
                : 'Atribua um menu à location em Aparência → Menus → Gerenciar localizações',
            $locationAssigned
        );
        echo $this->row(
            'REST GET /wp-json/' . esc_html(Config::REST_NAMESPACE),
            rest_url(Config::REST_NAMESPACE . Config::REST_ROUTE_INDEX),
            true
        );
        echo $this->row(
            'Página /quem-somos (Grupo Real H)',
            $quemSomos
                ? 'Slug ' . esc_html(Config::SLUG_QUEM_SOMOS) . ' existe (ID ' . (int) $quemSomos->ID . ')'
                : 'Ainda não existe — renomeie a página atual (slug institucional) para quem-somos',
            (bool) $quemSomos
        );
        echo $this->row(
            'Página pai /institucional',
            $conflict
                ? 'Conflito: slug institucional ainda é a landing Grupo Real H'
                : ($parentOk ? 'Pai agrupador criado (ID ' . (int) $parent->ID . ')' : 'Crie depois de existir /quem-somos'),
            (bool) $parentOk
        );
        echo '</table>';

        echo '<h2 style="margin-top:2rem">Ordem segura (não quebra o Next)</h2><ol>';
        echo '<li>O site Next continua servindo <code>/quem-somos</code> pelo TSX. Não apague essa rota.</li>';
        echo '<li>No WP, edite a página <strong>Grupo Real H</strong> (slug atual <code>institucional</code>) e mude o slug para <code>quem-somos</code>. Salve. Não mude o template para Documento institucional.</li>';
        echo '<li>Crie uma <strong>nova</strong> página <code>Institucional</code> (slug <code>institucional</code>) só como pai — sem Wysiwyg, sem template documento.</li>';
        echo '<li>Crie páginas filhas com template <strong>' . esc_html(Config::TEMPLATE_DOCUMENTO_LABEL) . '</strong> e pai Institucional. O Next publica em <code>/institucional/{slug}</code> sem lista fixa de slugs.</li>';
        echo '<li>Preencher ACF <code>' . esc_html(Config::ACF_CONTEUDO) . '</code>, incluir no menu <strong>Institucional Sidebar</strong> e Yoast (canonical no domínio público).</li>';
        echo '</ol></div>';
    }

    private function row(string $label, string $value, bool $ok): string
    {
        $icon = $ok ? '✅' : '⚠️';

        return '<tr><td><strong>' . esc_html($label) . '</strong></td><td>' . $icon . ' ' . esc_html($value) . '</td></tr>';
    }
}
