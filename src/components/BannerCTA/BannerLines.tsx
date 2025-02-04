import { fetchYoastData, getInfoLine } from "@/lib/getSEOLines";
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
}: BannerLinesProps) {

  let infos
  // fetch data
  if (slug_context === "real-h") {
    infos = await getInfoLine(slug_context);
  } else if (slug_context === "cmr") {
    infos = await getInfoLine(slug_context);
  } else if (slug_context === "homeopet") {
    infos = await getInfoLine("linha-homeo-pet");
  }

  console.log("infos buscada",infos)

  return (
    <div className="relative w-full h-[300px] rounded-lg items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-fb_dark-blue to-fb_light-blue rounded-lg"></div>
      <Image
        alt=""
        src={infos?.banner ? infos : imgBackground}
        width={1000}
        height={300}
        className="w-full h-full object-cover rounded-lg border-none bg-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-6 justify-center mx-auto w-full text-white pl-8">
        <h1 className="text-5xl md:text-4xl font-bold">{infos ? infos.yoast_head_json.title : title}</h1>
        <div className="w-full md:w-2/5 min-h-[72px]">{infos ? infos.description : children}</div>
        <div className="w-fit">
          <BtnCallToAction 
            content="Ler mais"
            color="fb_blue_button"
            ctaLink=""
          />
        </div>
      </div>
    </div>
  );
}
