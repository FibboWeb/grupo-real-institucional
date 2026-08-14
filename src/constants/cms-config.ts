/**
 * Contrato espelhado do plugin WordPress
 * wordpress/grupo-real-next-config/src/Config.php
 */
export const CMS_CONFIG = {
  MENU_SIDEBAR: "Institucional Sidebar",
  MENU_SIDEBAR_LOCATION: "grnc_institutional_sidebar",
  REST_NAMESPACE: "custom",
  REST_SIDEBAR_ROUTE: "institutional-sidebar",
  /** Pai agrupador no WP. Não é rota de conteúdo no Next. */
  SLUG_PARENT: "institucional",
  /** Landing Grupo Real H no Next — permanece TSX até a fase 3. */
  SLUG_QUEM_SOMOS: "quem-somos",
  TEMPLATE_DOCUMENTO: "institucional-documento",
  ACF_CONTEUDO: "conteudo",
  ACF_EXIBIR_FORMULARIO: "exibir_formulario",
  ACF_CTAS: "ctas",
  ACF_MENU_ICONE: "icone",
  ACF_MENU_ICONE_IMAGEM: "icone_imagem",
} as const;

/** Slugs que o catch-all /institucional/[slug] não deve tratar como documento. */
export const RESERVED_INSTITUTIONAL_SLUGS = [CMS_CONFIG.SLUG_PARENT, CMS_CONFIG.SLUG_QUEM_SOMOS] as const;

export function isReservedInstitutionalSlug(slug: string): boolean {
  return (RESERVED_INSTITUTIONAL_SLUGS as readonly string[]).includes(slug);
}

export function isDocumentoTemplate(template: unknown): boolean {
  if (typeof template !== "string" || !template) {
    return false;
  }

  return template.replace(/\.php$/, "") === CMS_CONFIG.TEMPLATE_DOCUMENTO;
}

/** Ícones Lucide permitidos no ACF (menu pai). */
export type InstitutionalMenuIcon = "phone" | "shield" | "file-text" | "scale";

export const DEFAULT_MENU_ICONS: Record<string, InstitutionalMenuIcon> = {
  Atendimento: "phone",
  "Nossas políticas": "shield",
};

/**
 * Slug WP histórico → slug público no Next.
 * Não é lista de páginas permitidas: página nova com template Documento
 * já entra em /institucional/{slug} sem alterar este mapa.
 */
export const INSTITUTIONAL_SLUG_ALIASES: Record<string, string> = {
  "politica-da-qualidade": "politica-de-qualidade",
  "politica-privacidade-candidato": "politica-de-privacidade-candidato",
};

export function toFrontInstitutionalSlug(wpSlug: string): string {
  return INSTITUTIONAL_SLUG_ALIASES[wpSlug] ?? wpSlug;
}
