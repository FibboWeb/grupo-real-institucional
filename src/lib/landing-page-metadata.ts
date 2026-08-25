import { fetchYoastSEO } from "@/lib/getCategorias";
import { getLandingPage } from "@/lib/getLandingPage";
import { getLandingPageOptions } from "@/lib/landing-page-options";
import { publicSiteOrigin, yoastToMetadata } from "@/lib/institutional-metadata";
import { Metadata } from "next";

export async function buildLandingMetadata(slug: string): Promise<Metadata> {
  const page = await getLandingPage(slug);

  if (!page) {
    return {};
  }

  const options = getLandingPageOptions(slug);
  const yoast = (await fetchYoastSEO(slug, "pages")) ?? page.yoast_head_json;
  const origin = publicSiteOrigin();
  const canonical = `${origin}/${slug}`;
  const defaults = options?.metadataDefaults ?? {
    title: page.title ? `${page.title} - Grupo Real` : "Grupo Real",
    description: "40 anos construindo gerações reais.",
    siteName: "Grupo Real",
  };

  return yoastToMetadata(yoast as Parameters<typeof yoastToMetadata>[0], {
    title: defaults.title,
    description: defaults.description,
    openGraph: {
      title: defaults.title,
      description: defaults.description,
      images: ["/favicon.ico"],
      locale: "pt_BR",
      siteName: defaults.siteName ?? "Grupo Real",
      url: canonical,
    },
    alternates: {
      canonical,
      languages: { pt: canonical },
    },
  });
}
