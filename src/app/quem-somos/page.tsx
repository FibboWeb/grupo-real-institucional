import LandingSections from "@/components/institucional/LandingSections";
import { CMS_CONFIG } from "@/constants/cms-config";
import { fetchYoastSEO } from "@/lib/getCategorias";
import { getQuemSomosPage } from "@/lib/getQuemSomos";
import { publicSiteOrigin, yoastToMetadata } from "@/lib/institutional-metadata";
import { Metadata } from "next";

/**
 * Landing Grupo Real H em /quem-somos.
 * Seções vêm do Flexible Content ACF (template Landing), com fallback TSX se ainda estiver vazio.
 */

export async function generateMetadata(): Promise<Metadata> {
  const page = await getQuemSomosPage();
  const yoast = (await fetchYoastSEO(CMS_CONFIG.SLUG_QUEM_SOMOS, "pages")) ?? page.yoast_head_json;
  const origin = publicSiteOrigin();
  const canonical = `${origin}/quem-somos`;

  return yoastToMetadata(yoast as Parameters<typeof yoastToMetadata>[0], {
    title: "Quem Somos - Grupo Real",
    description: "40 anos construindo gerações reais.",
    openGraph: {
      title: "Quem Somos - Grupo Real",
      description: "40 anos construindo gerações reais.",
      images: ["/favicon.ico"],
      locale: "pt_BR",
      siteName: "Grupo real",
      url: canonical,
    },
    alternates: {
      canonical,
      languages: { pt: canonical },
    },
  });
}

export default async function PageAboutUs() {
  const page = await getQuemSomosPage();

  return <LandingSections secoes={page.secoes} heroBackgroundClass="bg-hero-quem-somos bg-bottom" />;
}
