"use server";
import BannerLines from "@/components/BannerCTA/BannerLines";
import Breadcrumb from "@/components/BreadCrumb";

import { fetchYoastData } from "@/lib/getSEOLines";
import image01 from "@/public/images/banners/boi-no-pasto.webp";
import image03 from "@/public/images/banners/cao-e-gato.webp";
import image02 from "@/public/images/banners/carne-vermelha-cortada.webp";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import GridProduct from "../(componentes)";
import { fetchYoastSEO } from "@/lib/getCategorias";
import Newsletter from "@/components/Layout/Newsletter";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

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

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  let slug = (await params).slug
  
  let lineInfo
  // fetch data
  if (slug[0] === "real-h") {
    lineInfo = await fetchYoastSEO("linha-nutricao","linhas");
  } else if (slug[0] === "cmr") {
    lineInfo = await fetchYoastSEO("linha-saude","linhas");
  } else if (slug[0] === "homeopet") {
    lineInfo = await fetchYoastSEO("linha-homeo-pet","linhas"); 
  }

  if (!lineInfo) {
    notFound()
  }
 
  return {
    title: lineInfo.title,
    description: lineInfo.description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: lineInfo.title,
      description: lineInfo.description,
      images: [ lineInfo.og_image ? lineInfo.og_image[0].url : '' ],
    },
    alternates: {
      canonical: `https://gruporealbr.com.br/linhas/${slug[0]}`,
    },
  }
}

export default async function PageLinhas({ params, searchParams }) {
  // read route params 'slug'
  const slug = (await params).slug
  // read query params
  const page = parseInt((await searchParams).page || "1");

  return (
    <section className="relative mt-24">
      <div className="fb_container flex flex-col">
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
          <BannerLines slug_context={slug[0]} title="Linha Nutrição" imgBackground={image01.src}>
            <p>
              A <strong>Grupo Real</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
              há <strong>40 anos</strong> ao lado do produtor
            </p>
          </BannerLines>
        </div>
        <div className="my-16 flex justify-center items-center">
          <GridProduct slug={slug} searchParams={page} />
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 mb-20">
          <BannerLines title="Linha Nutrição" imgBackground={image02.src}>
            <p>
              A <strong>Grupo Real</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
              há <strong>40 anos</strong> ao lado do produtor
            </p>
          </BannerLines>
          <BannerLines title="Linha Nutrição" imgBackground={image03.src}>
            <p>
              A <strong>Grupo Real</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
              há <strong>40 anos</strong> ao lado do produtor
            </p>
          </BannerLines>
        </div>
        <div>
          <Newsletter
            
          />
        </div>
      </div>
    </section>
  );
}
