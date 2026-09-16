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

    /** Redirects do front (plugin Redirection) para o Next — GET /wp-json/custom/front-redirects */
    public const REST_ROUTE_FRONT_REDIRECTS = '/front-redirects';

    /** Página agrupadora no WP. Sem conteúdo público no Next (filhas usam /institucional/{slug}). */
    public const SLUG_PARENT = 'institucional';

    /**
     * Landing Grupo Real H no Next (/quem-somos).
     * No WP essa página hoje costuma ter o slug institucional — precisa ser recriada/renomeada.
     */
    public const SLUG_QUEM_SOMOS = 'quem-somos';

    /** Currículo Claudio Martins — landing Next (/claudio-martins-real-curriculo). */
    public const SLUG_CLAUDIO_MARTINS = 'claudio-martins-real-curriculo';

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

    /** CPT já registrado no WP (CPT UI). Só usamos o slug para permalink/redirect. */
    public const CPT_REPRESENTANTE = 'representante';

    public const PATH_REPRESENTANTES = '/representantes';

    public const CPT_DOWNLOAD = 'download';

    public const TAX_CATEGORIA_DOWNLOAD = 'categoria_download';

    public const PATH_DOWNLOADS = '/downloads';

    public const FRONT_ITEM_QUERY = 'item';

    public const CPT_PRODUTO = 'produto';

    public const TAX_CATEGORIA_PRODUTO = 'categoria_produto';

    public const PATH_PRODUTOS = '/produtos';

    public const PATH_LINHAS = '/linhas';

    public const CPT_LINHAS = 'linhas';

    public const TAX_LINHA = 'linha';

    /**
     * Origem do site público. Filtro: grnc_front_origin.
     */
    public static function frontOrigin(): string
    {
        $origin = apply_filters('grnc_front_origin', 'https://gruporealbr.com.br');

        return is_string($origin) && $origin !== '' ? rtrim($origin, '/') : 'https://gruporealbr.com.br';
    }

    public static function representanteFrontUrl(string $slug): string
    {
        return self::frontUrlWithItem(self::PATH_REPRESENTANTES, $slug);
    }

    public static function downloadFrontUrl(string $slug): string
    {
        return self::frontUrlWithItem(self::PATH_DOWNLOADS, $slug);
    }

    /**
     * Query ?item= sobrevive ao redirect do WP (o # é descartado pelo wp_safe_redirect).
     */
    public static function frontUrlWithItem(string $path, string $slug): string
    {
        $slug = ltrim($slug, '#/');

        return self::frontOrigin() . $path . '?' . self::FRONT_ITEM_QUERY . '=' . rawurlencode($slug) . '#' . $slug;
    }

    public static function produtoFrontUrl(string $slug): string
    {
        return self::frontOrigin() . self::PATH_PRODUTOS . '/' . trim($slug, '/');
    }

    public static function categoriaProdutoFrontUrl(\WP_Term $term): string
    {
        return self::frontOrigin() . self::PATH_LINHAS . '/' . $term->slug;
    }

    /**
     * @return list<string>
     */
    public static function frontLinkedCpts(): array
    {
        return [
            'post',
            'page',
            self::CPT_REPRESENTANTE,
            self::CPT_DOWNLOAD,
            self::CPT_PRODUTO,
            self::CPT_LINHAS,
        ];
    }

    /**
     * @return list<string>
     */
    public static function frontLinkedTaxonomies(): array
    {
        return [
            'category',
            self::TAX_CATEGORIA_DOWNLOAD,
            self::TAX_CATEGORIA_PRODUTO,
            self::TAX_LINHA,
        ];
    }

    public static function isPublicFrontStatus(string $status): bool
    {
        return $status === 'publish';
    }

    /**
     * Slug WP do CPT linhas → path /linhas/{slug} no Next.
     *
     * @return array<string, string>
     */
    public static function linhaCptToFrontSlug(): array
    {
        return [
            'linha-nutricao' => 'real-h',
            'linha-saude' => 'cmr',
            'linha-homeo-pet' => 'homeopet',
        ];
    }

    public static function frontUrlForPost(\WP_Post $post): ?string
    {
        if (!self::isPublicFrontStatus((string) $post->post_status) || $post->post_name === '') {
            return null;
        }

        switch ($post->post_type) {
            case 'post':
                return self::postFrontUrl($post->post_name, self::postIsArtigos((int) $post->ID));
            case 'page':
                $path = self::frontPathForPage((int) $post->ID);

                return $path !== null ? self::frontOrigin() . $path : null;
            case self::CPT_REPRESENTANTE:
                return self::representanteFrontUrl($post->post_name);
            case self::CPT_DOWNLOAD:
                return self::downloadFrontUrl($post->post_name);
            case self::CPT_PRODUTO:
                return self::produtoFrontUrl($post->post_name);
            case self::CPT_LINHAS:
                $map = self::linhaCptToFrontSlug();

                return isset($map[$post->post_name])
                    ? self::frontOrigin() . self::PATH_LINHAS . '/' . $map[$post->post_name]
                    : null;
            default:
                return null;
        }
    }

    public static function frontUrlForTerm(\WP_Term $term): ?string
    {
        if ((int) $term->count < 1 || $term->slug === '') {
            return null;
        }

        switch ($term->taxonomy) {
            case 'category':
                return self::categoryFrontUrl($term);
            case self::TAX_CATEGORIA_DOWNLOAD:
                return self::downloadFrontUrl($term->slug);
            case self::TAX_CATEGORIA_PRODUTO:
                return self::categoriaProdutoFrontUrl($term);
            case self::TAX_LINHA:
                return self::representanteFrontUrl($term->slug);
            default:
                return null;
        }
    }

    public const SLUG_CATEGORY_ARTIGOS = 'artigos';

    public const PATH_NOTICIAS = '/noticias';

    public const PATH_ARTIGOS = '/artigos';

    public const PATH_CATEGORIA = '/categoria';

    public const POST_VIEW_UNPUBLISHED_HINT = 'Só é possível visualizar ao publicar o post';

    public const CATEGORY_VIEW_EMPTY_HINT = 'Só é possível visualizar ao publicar posts nesta categoria';

    public static function categoryFrontUrl(\WP_Term $term): string
    {
        $slugs = [];
        $current = $term;
        $guard = 0;

        while ($current instanceof \WP_Term && $guard < 10) {
            array_unshift($slugs, $current->slug);
            if ((int) $current->parent === 0) {
                break;
            }
            $parent = get_term((int) $current->parent, 'category');
            $current = $parent instanceof \WP_Term ? $parent : null;
            $guard++;
        }

        return self::frontOrigin() . self::PATH_CATEGORIA . '/' . implode('/', $slugs);
    }

    public static function categoryHasPublishedPosts(\WP_Term $term): bool
    {
        return (int) $term->count > 0;
    }

    public static function postIsArtigos(int $postId): bool
    {
        $terms = get_the_category($postId);

        if (!is_array($terms)) {
            return false;
        }

        foreach ($terms as $term) {
            if (isset($term->slug) && $term->slug === self::SLUG_CATEGORY_ARTIGOS) {
                return true;
            }
        }

        return false;
    }

    public static function postFrontUrl(string $slug, bool $isArtigos): string
    {
        $slug = trim($slug, '/');
        $path = $isArtigos ? self::PATH_ARTIGOS : self::PATH_NOTICIAS;

        return self::frontOrigin() . $path . '/' . $slug;
    }

    public static function postIsPublicOnFront(\WP_Post $post): bool
    {
        return self::frontUrlForPost($post) !== null;
    }

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
