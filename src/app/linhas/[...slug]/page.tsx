"use server";
import BannerLines from "@/components/BannerCTA/BannerLines";
import Breadcrumb from "@/components/BreadCrumb";

import Newsletter from "@/components/Layout/Newsletter";
import { fetchYoastSEO } from "@/lib/getCategorias";
import { getSEOLines2 } from "@/lib/getSEOLines";
import image01 from "@/public/images/banners/boi-no-pasto.webp";
import image02 from "@/public/images/banners/carne-vermelha-cortada.webp";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import GridProduct from "../(componentes)";
import { text } from "stream/consumers";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * Generates metadata for a linhas page, including:
 * - title
 * - description
 * - robots (index, follow, max-snippet, max-image-preview)
 * - openGraph (images)
 * - alternates (canonical)
 *
 * Extends parent metadata with openGraph images and alternates canonical URL
 *
 * @param {Props} _props - not used
 * @returns {Metadata} generated metadata
 */

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  // read route params
  let slug = (await params).slug;
  const pageParam = (await searchParams).page;
  const page = parseInt(Array.isArray(pageParam) ? pageParam[0] : pageParam || "1");
  let lineInfo;
  // fetch data
  if (slug[0] === "real-h") {
    lineInfo = await fetchYoastSEO("linha-nutricao", "linhas");
  } else if (slug[0] === "cmr") {
    lineInfo = await fetchYoastSEO("linha-saude", "linhas");
  } else if (slug[0] === "homeopet") {
    lineInfo = await fetchYoastSEO("linha-homeo-pet", "linhas");
  }

  if (!lineInfo) {
    notFound();
  }

  return {
    title: `${lineInfo.title}${page === 1 ? "" : ` - Página ${page}`}`,
    description: lineInfo.description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: `${lineInfo.title}${page === 1 ? "" : ` - Página ${page}`}`,
      description: lineInfo.description,
      images: [lineInfo.og_image ? lineInfo.og_image[0].url : ""],
    },
    alternates: {
      canonical: `https://gruporealbr.com.br/linhas/${slug[0]}${page === 1 ? "" : `?page=${page}`}`,
    },
  };
}

export default async function PageLinhas({ params, searchParams }) {
  // read route params 'slug'
  const slug = (await params).slug;
  // read query params
  const page = parseInt((await searchParams).page || "1");

  const { props, banner01, banner02, textBanner01, textBanner02, linkBanner01, linkBanner02, urlImagemHero } = await getSEOLines2(slug[0]);
  console.log("textos ", textBanner01, textBanner02);

  return (
    <section className="relative mt-24">
      <div className="fb_grid-products flex flex-col">
        <div>
          <Breadcrumb
            activeClasses="text-fb_gray_bread"
            containerClasses="flex py-5"
            listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
            capitalizeLinks
            excludePaths={["linhas"]}
          />
        </div>
        <div>
          <BannerLines slug_context={slug[0]} title={props[0].name} children={props[0].description} imgBackground={urlImagemHero} />
        </div>
        <div className="my-16 flex justify-center items-center">
          <GridProduct slug={slug} searchParams={page} />
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 mb-20">
          <BannerLines
            title={textBanner01}
            hiddenTitle={false}
            contentBTN={`Conheça o catálogo`}
            imgBackground={banner01 ? banner01 : image02.src}
            // children={textBanner01 ? textBanner01 : ""}
            ctaLink={linkBanner01 ? linkBanner01 : ""}
          />
          <BannerLines
            title={textBanner02}
            contentBTN={`Conheça o catálogo`}
            hiddenTitle={false}
            imgBackground={banner02 ? banner02 : image02.src}
            // children={textBanner02 ? textBanner02 : ""}
            ctaLink={linkBanner02 ? linkBanner02 : ""}
          />
        </div>
        <div>
          <Newsletter />
        </div>
      </div>
    </section>
  );
}
