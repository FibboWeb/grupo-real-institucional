import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Button } from "../ui/button";
import { ArrowRightCircle } from "lucide-react";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";
import ArrowIcon from "@/public/icons/arrow-right.svg";

type ValuesSectionProps = {
  values: {
    title: string;
    icon?: StaticImageData;
    text?: string;
    image: StaticImageData;
    border?: boolean;
    badge_text?: string;
    cta: {
      link: string;
      anchor: string;
    };
  }[];
};

/**
 * ValuesSection componente renderiza uma seção com vários valores.
 *
 * @param {ValuesSectionProps} props - As propriedades do componente.
 * @param {ValuesSectionProps.values} props.values - Um array com os valores a ser renderizado.
 * @param {ValuesSectionProps.values.title} props.values.title - O titulo da seção.
 * @param {ValuesSectionProps.values.icon} props.values.icon - O icone é uma propriedade opcional.
 * @param {ValuesSectionProps.values.text} props.values.text - O texto é uma propriedade opcional.
 * @param {ValuesSectionProps.values.image} props.values.image - A imagem do componente.
 * @param {ValuesSectionProps.values.border} props.values.border - As imagens com fundo branco, ficam estranhas.
 * @param {ValuesSectionProps.values.badge_text} props.values.badge_text - O texto do badge.
 *
 * @returns {JSX.Element} Uma sessão modular que renderiza duas colunas uma com a imagem e outra com titulo, icone, texto mais os numeros de sessão.
 *
 * @example
 * Exemplo de uso:
 * <ValuesSection values={values} />
 *
 * @description
 * O componente renderiza uma seção com múltiplos valores, com um título, um ícone, um texto, uma imagem e um componente LoadNumbers.
 */
function InfoCards({ values }: ValuesSectionProps) {
  return (
    <div className="w-full max-h-full">
      {values.map((value, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between gap-24 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center py-12`}
        >
          <div className={` ${value.border ? "shadow-custom_shadow w-full lg:w-1/2" : "w-full lg:w-1/2"} `}>
            <Suspense fallback={<div className="w-full h-full bg-gray-300 animated-pulse rounded-lg"></div>}>
              <Image
                src={value.image}
                alt={value.title}
                width={600}
                height={475}
                className="rounded-lg h-auto object-cover object-top-center"
              />
            </Suspense>
          </div>
          <div className="w-full flex flex-col gap-6 lg:w-1/2">
            {value.icon && (
              <Image src={value.icon} alt={value.title} width={225} height={140} className="object-cover" />
            )}
            {value.badge_text && (
              <span className="bg-fb_blue text-white py-0.5 px-2 rounded-full w-fit">{value.badge_text}</span>
            )}
            {value.title && <h2 className="font-bold text-fb_blue_main text-3xl">{value.title}</h2>}
            <div className="w-full flex flex-col justify-between gap-6">
              {value.text && <div className="w-full" dangerouslySetInnerHTML={{ __html: value.text }} />}
            </div>
            {value.cta && (
              <div className="w-fit">
                <BtnCallToAction content={value.cta.anchor} ctaLink={value.cta.link} icon={ArrowIcon} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
