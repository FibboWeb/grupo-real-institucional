import { fetchYoastData, getInfoLine, getSEOLines2 } from "@/lib/getSEOLines";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";
import ButtonCTA from "./ButtonCTA";

type BannerLinesProps = {
  slug_context?: string;
  title: string;
  anchor?: string;
  ctaLink?: string;
  imgBackground?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  hiddenTitle?: boolean;
  loading?: boolean;
  contentBTN?: string;
  showCta?: boolean;
  enableClick?: boolean;
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
 * @prop {boolean} [hiddenTitle] - Se o título do banner deve ser ocultado.
 * @prop {boolean} [loading] - Defini o modo de carregamento "lazy" ou "eager".
 * @prop {string} [contentBTN] - Conteúdo do botão de chamada para a ação
 * @prop {boolean} [showCta] - Se o botão de chamada para a ação deve ser exibido
 * @prop {boolean} [enableClick] - Se o botão de chamada para ação deve ser clicável
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
  hiddenTitle = true,
  loading = false,
  contentBTN = "ler mais",
  showCta = true,
  enableClick = false
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

  const { props, urlImagemHero, text, banner01, banner02, textBanner01, textBanner02 } =
  await getSEOLines2(slug_context);

  return (
    <div className="relative w-full h-[320px] rounded-lg items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-fb_dark-blue to-fb_light-blue rounded-lg"></div>
      <Image
        alt=""
        src={imgBackground ? imgBackground : urlImagemHero}
        width={1000}
        height={300}
        loading={loading ? "lazy" : "eager"}
        className="w-full h-full object-cover rounded-lg border-none bg-cover"
      />
      <div className={`${children ? "gap-6" : "gap-20"} absolute inset-0 flex flex-col justify-center mx-auto w-full text-white px-2 sm:px-8 lg:px-8`}>
        <h1 className="text-4xl sm:text-5xl font-bold break-before-column">{title.toLocaleLowerCase() === "nutrição funcional real h" ? `NUTRIÇÃO FUNCIONAL`.concat("\n", "REAL H") : title}</h1>
        { children && (
          <div className="w-full md:w-2/5 min-h-[72px] line-clamp-6" dangerouslySetInnerHTML={{ __html: children }} /> 
        )}
        { showCta && (
          <ButtonCTA
            ctaLink={ctaLink}
            content={contentBTN}
            enableClick={enableClick}
          />
        )}
      </div>
    </div>
  );
}
