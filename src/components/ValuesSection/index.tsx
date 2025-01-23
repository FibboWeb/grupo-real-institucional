import Image, { StaticImageData } from "next/image"
import React from "react"
import LoadNumbers, { LoadNumbersProps } from "./LoadNumbers"

type ValuesSectionProps = {
  values: {
    title: string,
    icon?: StaticImageData,
    text?: string | React.ReactNode,
    image: StaticImageData,
    border?: boolean,
    session_numbers: LoadNumbersProps[],
  }[]
}

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
 * @param {ValuesSectionProps.values.session_numbers} props.values.session_numbers - O número que aparece nas sessões.
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
function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <div className="w-full max-h-full">
      {values.map((value, index) => (
        <div key={index} className={`fb_container flex flex-col justify-between gap-24 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center py-12`}>
          <div className={` ${value.border ? "shadow-custom_shadow w-full lg:w-1/2" : "lg:w-1/2 w-full"} `}>
            <Image 
              src={value.image}
              alt={value.title}
              width={600}
              height={475}
              className="rounded-lg h-[475px] object-[inherit]"
            />
          </div>
          <div className="w-full flex flex-col gap-6 lg:w-1/2">
            { value.icon && (
              <Image 
                src={value.icon}
                alt={value.title}
                width={375}
                height={140}
              />
            )}
            { value.title && (
              <h2 
                className="font-bold text-fb_blue_main text-3xl"
              >
                {value.title}
              </h2>
            )}
            <div className="w-full flex flex-col justify-between gap-6">
              { value.text && (
                <div className="w-full" dangerouslySetInnerHTML={{ __html: value.text }}></div>
              )}
              <div className="min-h-28">
                <LoadNumbers
                  arrayOfNumbers={value.session_numbers}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ValuesSection
