import { CMS_CONFIG } from "@/constants/cms-config";

export type LandingPageOptions = {
  heroBackgroundClass?: string;
  metadataDefaults?: {
    title: string;
    description: string;
    siteName?: string;
  };
};

const LANDING_PAGE_OPTIONS: Record<string, LandingPageOptions> = {
  [CMS_CONFIG.SLUG_QUEM_SOMOS]: {
    heroBackgroundClass: "bg-hero-quem-somos bg-bottom",
    metadataDefaults: {
      title: "Quem Somos - Grupo Real",
      description: "40 anos construindo gerações reais.",
      siteName: "Grupo real",
    },
  },
  [CMS_CONFIG.SLUG_CLAUDIO_MARTINS]: {
    metadataDefaults: {
      title: "Professor Doutor Claudio Martins - Grupo Real",
      description: "40 anos construindo gerações reais.",
      siteName: "Grupo Real",
    },
  },
};

export function getLandingPageOptions(slug: string): LandingPageOptions | undefined {
  return LANDING_PAGE_OPTIONS[slug];
}
