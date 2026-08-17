import { StaticImageData } from "next/image";

export type CmsImage = string | StaticImageData;

export type LandingHeroSection = {
  type: "hero";
  titulo: string;
  tituloLinha2?: string;
  subtitulo?: string;
  texto: string;
  fundo?: CmsImage;
  imagem?: CmsImage;
  imagemAbaixo?: boolean;
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
  centralizarBotao: boolean;
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

export type LandingTimelineEvento = {
  ano: string;
  titulo: string;
  texto?: string;
  imagem?: CmsImage;
};

export type LandingTimelineSection = {
  type: "timeline";
  titulo: string;
  eventos: LandingTimelineEvento[];
};

export type LandingTextoSection = {
  type: "texto";
  conteudo: string;
};

export type LandingNewsletterSection = {
  type: "newsletter";
};

export type LandingCardIconItem = {
  icone: CmsImage;
  titulo: string;
  texto: string;
};

export type LandingCardsSliderSection = {
  type: "cards_slider";
  titulo: string;
  cards: LandingCardIconItem[];
};

export type LandingCardsListaSection = {
  type: "cards_lista";
  titulo: string;
  intro: string;
  itens: LandingCardIconItem[];
};

export type LandingAccordionItem = {
  titulo: string;
  conteudo: string;
  aberto: boolean;
};

export type LandingAccordionSection = {
  type: "accordion";
  titulo: string;
  intro: string;
  itens: LandingAccordionItem[];
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
  | LandingCardsSliderSection
  | LandingCardsListaSection
  | LandingAccordionSection
  | LandingNewsletterSection;

export type LandingPageContent = {
  secoes: LandingSection[];
  yoast_head_json?: Record<string, unknown> | null;
  title?: string;
};

/** @deprecated use LandingPageContent */
export type QuemSomosContent = LandingPageContent;
