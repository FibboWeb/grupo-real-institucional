import {
  CMS_CONFIG,
  INSTITUTIONAL_SLUG_ALIASES,
  isDocumentoTemplate,
  isReservedInstitutionalSlug,
  toFrontInstitutionalSlug,
} from "@/constants/cms-config";
import { InstitutionalCta, InstitutionalPage, InstitutionalPageAcf } from "@/types/institutional-page";

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

export async function getPage(slug: string): Promise<InstitutionalPage | null> {
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
}

/** Slugs de pages com template Documento — usado no SSG, não é whitelist de rotas. */
export async function listInstitutionalDocumentSlugs(): Promise<string[]> {
  const apiUrl = process.env.NEXT_PUBLIC_WP_URL_API;

  if (!apiUrl) {
    return [];
  }

  const slugs = new Set<string>();

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
        if (!item || typeof item !== "object") {
          continue;
        }

        const page = item as { slug?: unknown; template?: unknown };
        const wpSlug = typeof page.slug === "string" ? page.slug : "";

        if (!wpSlug || !isDocumentoTemplate(page.template) || isReservedInstitutionalSlug(wpSlug)) {
          continue;
        }

        slugs.add(toFrontInstitutionalSlug(wpSlug));
      }

      pageNum += 1;
    } while (pageNum <= totalPages);
  } catch (error) {
    console.error("listInstitutionalDocumentSlugs:", error);
  }

  return [...slugs];
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
