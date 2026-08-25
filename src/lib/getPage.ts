import {
  CMS_CONFIG,
  INSTITUTIONAL_SLUG_ALIASES,
  isDocumentoTemplate,
  isLandingTemplate,
  isReservedInstitutionalSlug,
  toFrontInstitutionalSlug,
  toFrontLandingPath,
} from "@/constants/cms-config";
import { InstitutionalCta, InstitutionalPage, InstitutionalPageAcf } from "@/types/institutional-page";
import { cache } from "react";

const REVALIDATE_SECONDS = 300;

function stripHtml(title: string): string {
  return title.replace(/<[^>]*>/g, "").trim();
}

function normalizeCtaUrl(url: string): string {
  if (!url) {
    return "";
  }

  if (/^(https?:\/\/|mailto:|tel:|#|\/)/i.test(url)) {
    return url;
  }

  return `/${url.replace(/^\/+/, "")}`;
}

function parseCta(raw: unknown): InstitutionalCta | null {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const group = raw as Record<string, unknown>;
  const rotulo = typeof group.rotulo === "string" ? group.rotulo.trim() : "";
  const rawUrl = typeof group.url === "string" ? group.url.trim() : "";
  const url = normalizeCtaUrl(rawUrl);

  if (!rotulo || !url) {
    return null;
  }

  const target = group.target === "_blank" ? "_blank" : "_self";

  return { rotulo, url, target };
}

function parseCtas(raw: unknown): InstitutionalCta[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw.map(parseCta).filter((cta): cta is InstitutionalCta => cta !== null);
}

function parseAcf(raw: Record<string, unknown> | undefined): InstitutionalPageAcf {
  if (!raw) {
    return {};
  }

  const acf: InstitutionalPageAcf = {};

  const conteudoRaw = raw[CMS_CONFIG.ACF_CONTEUDO];
  if (typeof conteudoRaw === "string") {
    acf.conteudo = conteudoRaw;
  }

  const exibirFormulario = raw[CMS_CONFIG.ACF_EXIBIR_FORMULARIO];
  if (exibirFormulario === true || exibirFormulario === 1 || exibirFormulario === "1") {
    acf.exibir_formulario = true;
  }

  const ctas = parseCtas(raw[CMS_CONFIG.ACF_CTAS]);
  if (ctas.length > 0) {
    acf.ctas = ctas;
  }

  return acf;
}

export function extractCtasFromAcf(acf: InstitutionalPageAcf): InstitutionalCta[] {
  return acf.ctas ?? [];
}

export const getPage = cache(async (slug: string): Promise<InstitutionalPage | null> => {
  if (isReservedInstitutionalSlug(slug)) {
    return null;
  }
  const apiUrl = process.env.NEXT_PUBLIC_WP_URL_API;

  if (!apiUrl) {
    console.error("getPage: NEXT_PUBLIC_WP_URL_API não configurada");
    return null;
  }

  const candidates = wpSlugCandidates(slug);

  for (const candidate of candidates) {
    const page = await fetchWpPage(apiUrl, candidate);

    if (page) {
      return page;
    }
  }

  return null;
});

export type InstitutionalDocumentRef = {
  slug: string;
  lastModified?: string;
};

export type InstitutionalLandingRef = {
  path: string;
  lastModified?: string;
};

type WpPageListItem = {
  slug?: unknown;
  template?: unknown;
  modified_gmt?: unknown;
  modified?: unknown;
};

function parseLastModified(page: WpPageListItem): string | undefined {
  return typeof page.modified_gmt === "string"
    ? page.modified_gmt
    : typeof page.modified === "string"
      ? page.modified
      : undefined;
}

const fetchAllWpPages = cache(async (): Promise<WpPageListItem[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_WP_URL_API;

  if (!apiUrl) {
    return [];
  }

  const pages: WpPageListItem[] = [];

  try {
    let pageNum = 1;
    let totalPages = 1;

    do {
      const response = await fetch(`${apiUrl}pages?per_page=100&page=${pageNum}`, {
        next: { revalidate: REVALIDATE_SECONDS },
      });

      if (!response.ok) {
        break;
      }

      totalPages = Number(response.headers.get("X-WP-TotalPages") || 1);
      const data: unknown = await response.json();

      if (!Array.isArray(data)) {
        break;
      }

      for (const item of data) {
        if (item && typeof item === "object") {
          pages.push(item as WpPageListItem);
        }
      }

      pageNum += 1;
    } while (pageNum <= totalPages);
  } catch (error) {
    console.error("fetchAllWpPages:", error);
  }

  return pages;
});

/** Pages com template Documento — usado no SSG e no sitemap. Não é whitelist de rotas. */
export async function listInstitutionalDocumentPages(): Promise<InstitutionalDocumentRef[]> {
  const pages = new Map<string, InstitutionalDocumentRef>();

  for (const item of await fetchAllWpPages()) {
    const wpSlug = typeof item.slug === "string" ? item.slug : "";

    if (!wpSlug || !isDocumentoTemplate(item.template) || isReservedInstitutionalSlug(wpSlug)) {
      continue;
    }

    const slug = toFrontInstitutionalSlug(wpSlug);
    pages.set(slug, { slug, lastModified: parseLastModified(item) });
  }

  return [...pages.values()];
}

/** Pages com template Landing no WP (não filtra seções — use listPublishableLandingPages). */
export async function listInstitutionalLandingPages(): Promise<InstitutionalLandingRef[]> {
  const pages = new Map<string, InstitutionalLandingRef>();

  for (const item of await fetchAllWpPages()) {
    const wpSlug = typeof item.slug === "string" ? item.slug : "";

    if (!wpSlug || !isLandingTemplate(item.template)) {
      continue;
    }

    const path = toFrontLandingPath(wpSlug);

    if (!path) {
      continue;
    }

    pages.set(path, { path, lastModified: parseLastModified(item) });
  }

  return [...pages.values()];
}

export async function listInstitutionalDocumentSlugs(): Promise<string[]> {
  const pages = await listInstitutionalDocumentPages();

  return pages.map((page) => page.slug);
}

function wpSlugCandidates(frontSlug: string): string[] {
  const aliases = Object.entries(INSTITUTIONAL_SLUG_ALIASES)
    .filter(([, mapped]) => mapped === frontSlug)
    .map(([wpSlug]) => wpSlug);

  return [...new Set([frontSlug, ...aliases])];
}

async function fetchWpPage(apiUrl: string, slug: string): Promise<InstitutionalPage | null> {
  try {
    const response = await fetch(`${apiUrl}pages?slug=${encodeURIComponent(slug)}&acf_format=standard`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    const page = data[0];

    if (!isDocumentoTemplate(page.template)) {
      return null;
    }

    const acf = parseAcf(page.acf);
    const rendered = typeof page.content?.rendered === "string" ? page.content.rendered.trim() : "";

    // Páginas antigas do WP às vezes trazem <form> no content.rendered.
    // O formulário de atendimento é o React AtendimentoTitularForm, não esse HTML.
    if (!acf.conteudo && rendered && !/<form\b/i.test(rendered)) {
      acf.conteudo = rendered;
    }

    if (!acf.conteudo) {
      return null;
    }

    return {
      id: page.id,
      slug: page.slug,
      title: stripHtml(page.title?.rendered ?? page.title ?? ""),
      acf,
      yoast_head_json: page.yoast_head_json ?? null,
    };
  } catch (error) {
    console.error("getPage:", error);
    return null;
  }
}
