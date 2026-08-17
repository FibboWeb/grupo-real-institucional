import { cache } from "react";
import { CMS_CONFIG, isLandingTemplate } from "@/constants/cms-config";
import { QUEM_SOMOS_TIMELINE_EVENTOS } from "@/constants/quem-somos-timeline";
import { quemSomosFallback } from "@/lib/quem-somos-fallback";
import {
  LandingAtividadeCard,
  LandingDiretor,
  LandingPageContent,
  LandingSection,
  LandingTimelineEvento,
} from "@/types/quem-somos-page";

const REVALIDATE_SECONDS = 300;

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

function parseCards(raw: unknown): LandingAtividadeCard[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const row = item as Record<string, unknown>;
      const titulo = asString(row.titulo);
      const texto = asString(row.texto);

      if (!titulo && !texto) {
        return null;
      }

      return { icone: acfImageUrl(row.icone), titulo, texto };
    })
    .filter((item): item is LandingAtividadeCard => item !== null);
}

function parseEventos(raw: unknown): LandingTimelineEvento[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const row = item as Record<string, unknown>;
      const ano = asString(row.ano);
      const titulo = asString(row.titulo);

      if (!ano || !titulo) {
        return null;
      }

      const texto = asString(row.texto);
      const imagem = acfImageUrl(row.imagem);

      return {
        ano,
        titulo,
        texto: texto || undefined,
        imagem: imagem || undefined,
      };
    })
    .filter((item): item is LandingTimelineEvento => item !== null);
}

function parseMembros(raw: unknown): LandingDiretor[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const row = item as Record<string, unknown>;
      const nome = asString(row.nome);

      if (!nome) {
        return null;
      }

      const ctaUrl = asString(row.cta_url);

      return {
        foto: acfImageUrl(row.foto),
        nome,
        cargo: asString(row.cargo),
        bio: asString(row.bio),
        ctaUrl: ctaUrl || undefined,
      };
    })
    .filter((item): item is LandingDiretor => item !== null);
}

function parseSection(raw: unknown): LandingSection | null {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const row = raw as Record<string, unknown>;
  const type = asString(row.acf_fc_layout);

  switch (type) {
    case "hero":
      return {
        type,
        titulo: asString(row.titulo),
        texto: asString(row.texto),
        fundo: acfImageUrl(row.fundo) || undefined,
      };
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

  return raw.map(parseSection).filter((item): item is LandingSection => item !== null);
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

export const getLandingPage = cache(async (slug: string): Promise<LandingPageContent> => {
  const fallback = slug === CMS_CONFIG.SLUG_QUEM_SOMOS ? quemSomosFallback() : { secoes: [] };
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

    const acf = page.acf && typeof page.acf === "object" ? (page.acf as Record<string, unknown>) : {};
    const secoes = enrichTimelineFallback(parseSecoes(acf[CMS_CONFIG.ACF_SECOES]), slug);

    if (secoes.length === 0) {
      return { ...fallback, yoast_head_json: page.yoast_head_json ?? null };
    }

    return {
      secoes,
      yoast_head_json: page.yoast_head_json ?? null,
    };
  } catch (error) {
    console.error("getLandingPage:", error);
    return fallback;
  }
});

export const getQuemSomosPage = cache(async (): Promise<LandingPageContent> => {
  return getLandingPage(CMS_CONFIG.SLUG_QUEM_SOMOS);
});
