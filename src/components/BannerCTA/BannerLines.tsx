import { fetchYoastData, getInfoLine, getSEOLines2 } from "@/lib/getSEOLines";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";

type BannerLinesProps = {
  slug_context?: string;
  title: string;
  anchor?: string;
  ctaLink?: string;
  imgBackground?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  hiddenTitle?: boolean;
};

/**
 * @description
 * O componente BannerLines é um banner que renderiza um título, uma descrição e um botão de chamada para ação.
 * Ele é usado nas linhas de produtos da Farmabrand.
 * @param {BannerLinesProps} props
 * @prop {string} [slug_context] - Slug do contexto da página (linha de produtos).
 * @prop {string} title - Título do banner.
 * @prop {string} [anchor] - Âncora do botão de chamada para ação.
 * @prop {string} [ctaLink] - Link do botão de chamada para ação.
 * @prop {string} [imgBackground] - URL da imagem do background do banner.
 * @prop {React.ReactNode} children - Conteúdo do banner.
 * @prop {string} [className] - Nome da classe CSS do banner.
 * @prop {string} [id] - ID do banner.
 *
 * @example
 *  <BannerLines
 *    slug_context="linha-nutricao"
 *    title="Linha Nutrição"
 *    children={<p>Este é um exemplo de descrição do banner.</p>}
 *    className="bg-fb_dark-blue"
 *    id="banner-nutricao"
 *  />
 */
export default async function BannerLines({
  slug_context,
  title,
  anchor,
  ctaLink,
  imgBackground,
  children,
  className,
  id,
  hiddenTitle = true
}: BannerLinesProps) {
  let infos;
  let infos2;
  // fetch data
  if (slug_context === "real-h") {
    infos = await getInfoLine(slug_context);
  } else if (slug_context === "cmr") {
    infos = await getInfoLine(slug_context);
  } else if (slug_context === "homeopet") {
    infos = await getInfoLine(slug_context);
  }
  
  const { props, urlImagemHero, text, banner01, banner02, textBanner01, textBanner02 } = await getSEOLines2(slug_context);
  console.log("infos buscada", urlImagemHero);

  return (
    <div className="relative w-full h-[320px] rounded-lg items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-fb_dark-blue to-fb_light-blue rounded-lg"></div>
      <Image
        alt=""
        src={urlImagemHero ? urlImagemHero : imgBackground}
        width={1000}
        height={300}
        className="w-full h-full object-cover rounded-lg border-none bg-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-6 justify-center mx-auto w-full text-white pl-8">
        { infos && (
          <h1 className="text-5xl md:text-4xl font-bold">{ hiddenTitle ? infos.yoast_head_json.title : title}</h1>
        )}
        <div className="w-full md:w-2/5 min-h-[72px]" dangerouslySetInnerHTML={{ __html: text || "" }} />
        <div className="w-fit">
          <BtnCallToAction content="Ler mais" color="fb_blue_button" />
        </div>
      </div>
    </div>
  );
}

export async function BannerLinesFooter({
  slug_context,
  title,
  anchor,
  ctaLink,
  imgBackground,
  children,
  className,
  id,
  hiddenTitle = true
}: BannerLinesProps) {
  let infos;
  let infos2;
  // fetch data
  if (slug_context === "real-h") {
    infos = await getInfoLine(slug_context);
  } else if (slug_context === "cmr") {
    infos = await getInfoLine(slug_context);
  } else if (slug_context === "homeopet") {
    infos = await getInfoLine(slug_context);
  }
  
  const { props, urlImagemHero, text, banner01, banner02, textBanner01, textBanner02 } = await getSEOLines2(slug_context);
  console.log("infos buscada", urlImagemHero);

  return (
    <div className="relative w-full h-[320px] rounded-lg items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-fb_dark-blue to-fb_light-blue rounded-lg"></div>
      <Image
        alt=""
        src={imgBackground ? imgBackground : urlImagemHero}
        width={1000}
        height={300}
        className="w-full h-full object-cover rounded-lg border-none bg-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-6 justify-center mx-auto w-full text-white pl-8">
          <h2 className="text-5xl md:text-4xl font-bold">{title}</h2>
        <div className="w-full md:w-2/5 min-h-[72px]" dangerouslySetInnerHTML={{ __html: children || "" }} />
        <div className="w-fit">
          <BtnCallToAction content="Ler mais" color="fb_blue_button" />
        </div>
      </div>
    </div>
  );
}
