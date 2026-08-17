import { cache } from "react";
import { CMS_CONFIG, isLandingTemplate } from "@/constants/cms-config";
import { QUEM_SOMOS_TIMELINE_EVENTOS } from "@/constants/quem-somos-timeline";
import { quemSomosFallback } from "@/lib/quem-somos-fallback";
import { claudioMartinsFallback } from "@/lib/claudio-martins-fallback";
import {
  LandingAtividadeCard,
  LandingAccordionItem,
  LandingCardIconItem,
  LandingDiretor,
  LandingPageContent,
  LandingSection,
  LandingTimelineEvento,
} from "@/types/quem-somos-page";
import { listInstitutionalLandingPages, type InstitutionalLandingRef } from "@/lib/getPage";

const REVALIDATE_SECONDS = 300;

function stripHtml(title: string): string {
  return title.replace(/<[^>]*>/g, "").trim();
}

function landingFallback(slug: string): LandingPageContent | null {
  if (slug === CMS_CONFIG.SLUG_QUEM_SOMOS) {
    return quemSomosFallback();
  }

  if (slug === CMS_CONFIG.SLUG_CLAUDIO_MARTINS) {
    return claudioMartinsFallback();
  }

  return null;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean {
  return value === true || value === 1 || value === "1";
}

function acfImageUrl(raw: unknown): string {
  if (typeof raw === "string" && raw) {
    return raw;
  }

  if (raw && typeof raw === "object" && "url" in raw) {
    const url = (raw as { url?: unknown }).url;
    if (typeof url === "string") {
      return url;
    }
  }

  return "";
}

function parseIconCards(raw: unknown): LandingCardIconItem[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  const cards: LandingCardIconItem[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const row = item as Record<string, unknown>;
    const titulo = asString(row.titulo);
    const texto = asString(row.texto);

    if (!titulo && !texto) {
      continue;
    }

    cards.push({ icone: acfImageUrl(row.icone), titulo, texto });
  }

  return cards;
}

function parseAccordionItens(raw: unknown): LandingAccordionItem[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  const itens: LandingAccordionItem[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const row = item as Record<string, unknown>;
    const titulo = asString(row.titulo);

    if (!titulo) {
      continue;
    }

    itens.push({
      titulo,
      conteudo: asString(row.conteudo),
      aberto: asBool(row.aberto),
    });
  }

  return itens;
}

function parseCards(raw: unknown): LandingAtividadeCard[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  const cards: LandingAtividadeCard[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const row = item as Record<string, unknown>;
    const titulo = asString(row.titulo);
    const texto = asString(row.texto);

    if (!titulo && !texto) {
      continue;
    }

    cards.push({ icone: acfImageUrl(row.icone), titulo, texto });
  }

  return cards;
}

function parseEventos(raw: unknown): LandingTimelineEvento[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  const eventos: LandingTimelineEvento[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const row = item as Record<string, unknown>;
    const ano = asString(row.ano);
    const titulo = asString(row.titulo);

    if (!ano || !titulo) {
      continue;
    }

    const texto = asString(row.texto);
    const imagem = acfImageUrl(row.imagem);

    eventos.push({
      ano,
      titulo,
      texto: texto || undefined,
      imagem: imagem || undefined,
    });
  }

  return eventos;
}

function parseMembros(raw: unknown): LandingDiretor[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  const membros: LandingDiretor[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const row = item as Record<string, unknown>;
    const nome = asString(row.nome);

    if (!nome) {
      continue;
    }

    const ctaUrl = asString(row.cta_url);

    membros.push({
      foto: acfImageUrl(row.foto),
      nome,
      cargo: asString(row.cargo),
      bio: asString(row.bio),
      ctaUrl: ctaUrl || undefined,
    });
  }

  return membros;
}

function parseSection(raw: unknown): LandingSection | null {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const row = raw as Record<string, unknown>;
  const type = asString(row.acf_fc_layout);

  switch (type) {
    case "hero": {
      const imagem = acfImageUrl(row.imagem);

      return {
        type,
        titulo: asString(row.titulo),
        tituloLinha2: asString(row.titulo_linha2) || undefined,
        subtitulo: asString(row.subtitulo) || undefined,
        texto: asString(row.texto),
        fundo: acfImageUrl(row.fundo) || undefined,
        imagem: imagem || undefined,
        imagemAbaixo: asBool(row.imagem_abaixo),
      };
    }
    case "depoimento":
      return {
        type,
        texto: asString(row.texto),
        imagem: acfImageUrl(row.imagem),
        ctaRotulo: asString(row.cta_rotulo) || "Ler mais",
        ctaUrl: asString(row.cta_url) || "/claudio-martins-real-curriculo",
      };
    case "info_video":
      return {
        type,
        titulo: asString(row.titulo),
        conteudo: asString(row.conteudo),
        youtube: asString(row.youtube),
        inverterDesktop: asBool(row.inverter_desktop),
      };
    case "info_imagem":
      return {
        type,
        titulo: asString(row.titulo),
        conteudo: asString(row.conteudo),
        imagem: acfImageUrl(row.imagem) || undefined,
        inverterDesktop: asBool(row.inverter_desktop),
        lerMais: asBool(row.ler_mais),
        centralizarBotao: asBool(row.centralizar_botao),
      };
    case "atividades":
      return {
        type,
        titulo: asString(row.titulo) || "Nossas Atividades",
        texto: asString(row.texto),
        cards: parseCards(row.cards),
      };
    case "diretoria":
      return {
        type,
        titulo: asString(row.titulo) || "Diretoria",
        membros: parseMembros(row.membros),
      };
    case "timeline":
      return {
        type,
        titulo: asString(row.titulo) || "A História do Grupo Real",
        eventos: parseEventos(row.eventos),
      };
    case "texto":
      return { type, conteudo: asString(row.conteudo) };
    case "cards_slider":
      return {
        type,
        titulo: asString(row.titulo) || "Títulos",
        cards: parseIconCards(row.cards),
      };
    case "cards_lista":
      return {
        type,
        titulo: asString(row.titulo),
        intro: asString(row.intro),
        itens: parseIconCards(row.itens),
      };
    case "accordion":
      return {
        type,
        titulo: asString(row.titulo),
        intro: asString(row.intro),
        itens: parseAccordionItens(row.itens),
      };
    case "newsletter":
      return { type };
    default:
      return null;
  }
}

function parseSecoes(raw: unknown): LandingSection[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  const secoes: LandingSection[] = [];

  for (const item of raw) {
    const secao = parseSection(item);

    if (secao) {
      secoes.push(secao);
    }
  }

  return secoes;
}

function enrichTimelineFallback(secoes: LandingSection[], slug: string): LandingSection[] {
  if (slug !== CMS_CONFIG.SLUG_QUEM_SOMOS) {
    return secoes;
  }

  return secoes.map((secao) => {
    if (secao.type === "timeline" && secao.eventos.length === 0) {
      return { ...secao, eventos: QUEM_SOMOS_TIMELINE_EVENTOS };
    }

    return secao;
  });
}

export const getLandingPage = cache(async (slug: string): Promise<LandingPageContent | null> => {
  const fallback = landingFallback(slug);
  const apiUrl = process.env.NEXT_PUBLIC_WP_URL_API;

  if (!apiUrl) {
    return fallback;
  }

  try {
    const response = await fetch(`${apiUrl}pages?slug=${encodeURIComponent(slug)}&acf_format=standard`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return fallback;
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return fallback;
    }

    const page = data[0];

    if (!isLandingTemplate(page.template)) {
      return fallback;
    }

    const title = stripHtml(page.title?.rendered ?? page.title ?? "");
    const acf = page.acf && typeof page.acf === "object" ? (page.acf as Record<string, unknown>) : {};
    const secoes = enrichTimelineFallback(parseSecoes(acf[CMS_CONFIG.ACF_SECOES]), slug);
    const yoast_head_json = page.yoast_head_json ?? null;

    if (secoes.length === 0) {
      if (fallback) {
        return { ...fallback, yoast_head_json, title: title || fallback.title };
      }

      return null;
    }

    return {
      secoes,
      yoast_head_json,
      title: title || undefined,
    };
  } catch (error) {
    console.error("getLandingPage:", error);
    return fallback;
  }
});

const LANDING_FALLBACK_SLUGS = [CMS_CONFIG.SLUG_QUEM_SOMOS, CMS_CONFIG.SLUG_CLAUDIO_MARTINS] as const;

/** Landings publicáveis: template Landing + ao menos uma seção renderizável (mesma regra da rota). */
export async function listPublishableLandingPages(): Promise<InstitutionalLandingRef[]> {
  const fromWp = await listInstitutionalLandingPages();
  const byPath = new Map(fromWp.map((page) => [page.path, page]));

  const slugs = new Set([
    ...fromWp.map(({ path }) => path.replace(/^\//, "")),
    ...LANDING_FALLBACK_SLUGS,
  ]);

  const publishable: InstitutionalLandingRef[] = [];

  for (const slug of slugs) {
    const page = await getLandingPage(slug);

    if (!page || page.secoes.length === 0) {
      continue;
    }

    const path = `/${slug}`;

    publishable.push({
      path,
      lastModified: byPath.get(path)?.lastModified,
    });
  }

  return publishable;
}
