import LandingSections from "@/components/institucional/LandingSections";
import { getLandingPage, listPublishableLandingPages } from "@/lib/getLandingPage";
import { buildLandingMetadata } from "@/lib/landing-page-metadata";
import { getLandingPageOptions } from "@/lib/landing-page-options";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Landings institucionais (template ACF `institucional-landing`) na raiz do site.
 * Rotas estáticas existentes (ex.: /contato) têm prioridade sobre este segmento dinâmico.
 */
export async function generateStaticParams() {
  const pages = await listPublishableLandingPages();

  return pages.map(({ path }) => ({ slug: path.replace(/^\//, "") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return buildLandingMetadata(slug);
}

export default async function InstitutionalLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getLandingPage(slug);

  if (!page || page.secoes.length === 0) {
    notFound();
  }

  const options = getLandingPageOptions(slug);

  return (
    <LandingSections secoes={page.secoes} heroBackgroundClass={options?.heroBackgroundClass} />
  );
}
