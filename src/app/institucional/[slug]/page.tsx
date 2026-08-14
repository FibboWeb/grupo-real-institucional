import InstitutionalPageContent from "@/components/institucional/InstitutionalPageContent";
import { isReservedInstitutionalSlug } from "@/constants/cms-config";
import { fetchYoastSEO } from "@/lib/getCategorias";
import { getPage, listInstitutionalDocumentSlugs } from "@/lib/getPage";
import { institutionalFallbackMetadata, yoastToMetadata } from "@/lib/institutional-metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await listInstitutionalDocumentSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (isReservedInstitutionalSlug(slug)) {
    notFound();
  }
  const page = await getPage(slug);

  if (!page) {
    return institutionalFallbackMetadata(slug, slug.replace(/-/g, " "));
  }

  const yoast = (await fetchYoastSEO(slug, "pages")) ?? (page.yoast_head_json as Record<string, unknown> | null);
  const fallback = institutionalFallbackMetadata(slug, page.title);

  return yoastToMetadata(yoast as Parameters<typeof yoastToMetadata>[0], fallback);
}

export default async function InstitutionalCmsPage({ params }: Props) {
  const { slug } = await params;

  if (isReservedInstitutionalSlug(slug)) {
    notFound();
  }
  const page = await getPage(slug);

  if (!page?.acf?.conteudo) {
    notFound();
  }

  return <InstitutionalPageContent page={page} />;
}
