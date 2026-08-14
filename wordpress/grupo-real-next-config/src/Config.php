<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig;

/**
 * Contrato compartilhado com o Next.js (src/constants/cms-config.ts).
 */
final class Config
{
    public const MENU_SIDEBAR = 'Institucional Sidebar';

    /** Location registrada em Aparência → Menus. */
    public const MENU_SIDEBAR_LOCATION = 'grnc_institutional_sidebar';

    /** REST público do Next (sem GraphQL). GET /wp-json/custom e /wp-json/custom/institutional-sidebar */
    public const REST_NAMESPACE = 'custom';

    public const REST_ROUTE_INDEX = '/';

    public const REST_ROUTE_SIDEBAR = '/institutional-sidebar';

    /** Página agrupadora no WP. Sem conteúdo público no Next (filhas usam /institucional/{slug}). */
    public const SLUG_PARENT = 'institucional';

    /**
     * Landing Grupo Real H no Next (/quem-somos).
     * No WP essa página hoje costuma ter o slug institucional — precisa ser recriada/renomeada.
     */
    public const SLUG_QUEM_SOMOS = 'quem-somos';

    public const TEMPLATE_DOCUMENTO = 'institucional-documento';

    public const TEMPLATE_DOCUMENTO_LABEL = 'Documento institucional (Next)';

    public const TEMPLATE_LANDING = 'institucional-landing';

    public const TEMPLATE_LANDING_LABEL = 'Landing institucional (Next)';

    public const ACF_GROUP_LANDING = 'group_page_landing';

    public const ACF_SECOES = 'secoes';

    /**
     * Templates registrados pelo plugin. Nessas pages o editor nativo do WP some —
     * o cliente só edita ACF (Wysiwyg / campos).
     *
     * @return list<string>
     */
    public static function pluginTemplates(): array
    {
        return [self::TEMPLATE_DOCUMENTO, self::TEMPLATE_LANDING];
    }

    public static function isPluginTemplate(?string $slug): bool
    {
        return is_string($slug) && $slug !== '' && in_array($slug, self::pluginTemplates(), true);
    }

    public const ACF_GROUP_PAGE = 'group_page_institucional';

    public const ACF_GROUP_MENU = 'group_menu_item_icone';

    public const ACF_CONTEUDO = 'conteudo';

    public const ACF_EXIBIR_FORMULARIO = 'exibir_formulario';

    public const ACF_CTAS = 'ctas';

    public const ACF_MENU_ICONE = 'icone';

    public const ACF_MENU_ICONE_IMAGEM = 'icone_imagem';

    /**
     * Slugs que o catch-all /institucional/[slug] do Next NÃO deve renderizar.
     *
     * @return list<string>
     */
    public static function reservedFrontSlugs(): array
    {
        return [self::SLUG_PARENT, self::SLUG_QUEM_SOMOS];
    }

    /**
     * Path público no Next para uma page WP, ou null se não for institucional.
     * Qualquer page com template Documento vira /institucional/{slug}.
     */
    public static function frontPathForPage(int $pageId): ?string
    {
        $slug = get_post_field('post_name', $pageId);

        if (!is_string($slug) || $slug === '') {
            return null;
        }

        if (in_array($slug, self::reservedFrontSlugs(), true)) {
            return '/' . $slug;
        }

        $template = get_page_template_slug($pageId);

        if ($template === self::TEMPLATE_DOCUMENTO) {
            return '/institucional/' . $slug;
        }

        if ($template === self::TEMPLATE_LANDING) {
            return '/' . $slug;
        }

        return null;
    }
}
