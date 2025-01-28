import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

type ImageProductProps = {
  src: string,
  width: number,
  height: number,
  alt: string,
}

type BadgeCategorieProps = {
  children: React.ReactNode
}

type TitleProductProps = {
  nomeProduto: string
}

type descriptionProductProps = {
  descriptionProduct: string
}

type LinkProductProps = {
  children: React.ReactNode
  link: string
}

export function ImageProduct({src, width, height, alt}: ImageProductProps) {
  return (
    <div className="w-[355px] h-[355px] md:w-[227px] md:h-[227px] lg:w-full lg:h-full">
      <Suspense fallback={<div className="w-full h-full bg-gray-300 animated-pulse rounded-lg"></div>}>
        <Image 
          alt={alt}
          src={src}
          width={width}
          height={height}
          className="rounded-lg bg-[#E5E7E9] w-[355px] h-[355px] md:w-[227px] md:h-[227px] mx-auto lg:w-full lg:mx-0 object-cover"
        />
      </Suspense>
    </div>
  )
}

export function BadgeCategorie({ children }: BadgeCategorieProps) {
  return (
    <>
      <div className="bg-fb_blue text-white py-0.5 px-2 rounded-full w-fit">
        {children}
      </div>
    </>
  )

}

export function TitleProduct({ nomeProduto }: TitleProductProps) {
  return (
    <>
      <h2 className="font-bold text-xl">
        {nomeProduto}
      </h2>
    </>
  )
}

function DescriptionProduct({descriptionProduct}: descriptionProductProps) {
  return (
    <>
      <p className="text-base leading-5">
        {descriptionProduct}
      </p>
    </>
  )

}

function LinkProduct({ children, link }: LinkProductProps) {
  return (
    <>
      <Link
        href={link}
        className="hover:text-fb_blue duration-300"
      >
        {children}
      </Link>
    </>
  )
}

type CardProductProps = {
  produto: {
    id: number;
    nomeProduto: string;
    descricao: string;
    imagem: { src: string; alt: string; width: number; height: number; };
    categoria: string;
    link: { link: string; };
  }
}

export default function CardProduct({produto}: CardProductProps) {
  return (
    <div className="w-full lg:w-64 h-auto flex flex-col gap-8 items-center">
      <LinkProduct link={"#"}>
        <ImageProduct {...produto.imagem} />
      </LinkProduct>
      <div className="w-4/5 md:w-full flex flex-col gap-2">
        <LinkProduct link={produto.categoria}>
          <BadgeCategorie>{produto.categoria}</BadgeCategorie>
        </LinkProduct>
        <LinkProduct link={produto.link.link}>
          <TitleProduct nomeProduto={produto.nomeProduto} />
          <DescriptionProduct descriptionProduct={produto.descricao}/>
        </LinkProduct>
      </div>
    </div>
  )
}
