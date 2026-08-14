import { StaticImageData } from "next/image";

export type CmsImage = string | StaticImageData;

export type LandingHeroSection = {
  type: "hero";
  titulo: string;
  texto: string;
  fundo?: CmsImage;
};

export type LandingDepoimentoSection = {
  type: "depoimento";
  texto: string;
  imagem: CmsImage;
  ctaRotulo: string;
  ctaUrl: string;
};

export type LandingInfoVideoSection = {
  type: "info_video";
  titulo: string;
  conteudo: string;
  youtube: string;
  inverterDesktop: boolean;
};

export type LandingInfoImagemSection = {
  type: "info_imagem";
  titulo: string;
  conteudo: string;
  imagem?: CmsImage;
  inverterDesktop: boolean;
  lerMais: boolean;
};

export type LandingAtividadeCard = {
  icone: CmsImage;
  titulo: string;
  texto: string;
};

export type LandingAtividadesSection = {
  type: "atividades";
  titulo: string;
  texto: string;
  cards: LandingAtividadeCard[];
};

export type LandingDiretor = {
  foto: CmsImage;
  nome: string;
  cargo: string;
  bio: string;
  ctaUrl?: string;
};

export type LandingDiretoriaSection = {
  type: "diretoria";
  titulo: string;
  membros: LandingDiretor[];
};

export type LandingTimelineSection = {
  type: "timeline";
  titulo: string;
  url: string;
};

export type LandingTextoSection = {
  type: "texto";
  conteudo: string;
};

export type LandingNewsletterSection = {
  type: "newsletter";
};

export type LandingSection =
  | LandingHeroSection
  | LandingDepoimentoSection
  | LandingInfoVideoSection
  | LandingInfoImagemSection
  | LandingAtividadesSection
  | LandingDiretoriaSection
  | LandingTimelineSection
  | LandingTextoSection
  | LandingNewsletterSection;

export type LandingPageContent = {
  secoes: LandingSection[];
  yoast_head_json?: Record<string, unknown> | null;
};

/** @deprecated use LandingPageContent */
export type QuemSomosContent = LandingPageContent;
