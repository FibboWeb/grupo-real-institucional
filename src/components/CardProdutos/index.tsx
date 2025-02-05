import NotFound from "@/app/not-found";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import ArrowIcon from "@/public/icons/arrow-right.svg";
import placeholder from "@/public/images/img-teste.jpeg";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";


type ImageProductProps = {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  alt: string;
};

type BadgeCategorieProps = {
  children: React.ReactNode;
};

type TitleProductProps = {
  nomeProduto: string;
};

type descriptionProductProps = {
  descriptionProduct: string;
};

type LinkProductProps = {
  children: React.ReactNode;
  link: string;
};

export function ImageProduct({ src, width, height, alt }: ImageProductProps) {
  return (
    <div className="w-[300px] min-h-[355px] md:w-[225px] md:h-[355px] lg:w-full lg:h-full">
      <Suspense fallback={<div className="w-full h-full bg-gray-700 animated-pulse rounded-lg"></div>}>
        <Image
          alt={alt}
          src={src ? src : placeholder}
          width={width ? width : 355}
          height={height ? height : 355}
          className="rounded-lg bg-[#E5E7E9] w-[300px] h-[355px] md:w-[284px] md:h-[355px] lg:w-full lg:h-full lg:mx-0 object-cover"
        />
      </Suspense>
    </div>
  );
}

export function BadgeCategorie({ children }: BadgeCategorieProps) {
  return (
    <>
      <div className="bg-fb_blue text-white py-0.5 px-2 rounded-full w-fit line-clamp-1">{children}</div>
    </>
  );
}

export function TitleProduct({ nomeProduto }: TitleProductProps) {
  return (
    <>
      <h2 className="font-bold text-xl line-clamp-1">{nomeProduto}</h2>
    </>
  );
}

function DescriptionProduct({ descriptionProduct }: descriptionProductProps) {
  return (
    <>
      <div className="text-base leading-5 line-clamp-3" dangerouslySetInnerHTML={{ __html: descriptionProduct }} />
    </>
  );
}

function LinkProduct({ children, link }: LinkProductProps) {
  return (
    <>
      <Link href={link} className="hover:text-fb_blue duration-300">
        {children}
      </Link>
    </>
  );
}

export default function CardProduct({ product }: { product: any[] }) {

  // Ajustar a tipagem da prop
  if (!product || product.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {product.map((item, index) => {
        const imageUrl = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || placeholder;
        const title = item.title?.rendered || "Produto sem nome";
        const description = item.acf?.pra_que_serve || "";
        const link = item.slug || "#";
        const tags = item.class_list
                      .filter(item => item.startsWith('tag-')) // Filtra os itens que começam com "tag-"
                      .map(item => item.replace('tag-', '')) // Remove "tag-" e mantém apenas o conteúdo
                      .map(tag => tag.charAt(0).toUpperCase() + tag.slice(1));

        return (
          <div key={index} className="w-full lg:w-64 h-[580px] flex flex-col gap-8 items-center relative">
            <LinkProduct link={link}>
              <ImageProduct src={imageUrl} alt={title} />
            </LinkProduct>
            <div className="w-4/5 md:w-full flex flex-col gap-2">
              <LinkProduct link={link}>
                <BadgeCategorie>{ tags[0] || "Sem categoria"}</BadgeCategorie>
              </LinkProduct>
              <LinkProduct link={link}>
                <TitleProduct nomeProduto={title} />
                <DescriptionProduct descriptionProduct={description} />
              </LinkProduct> 
            </div>
            <div className="absolute bottom-0">
              <BtnCallToAction 
                key={index}
                content="Ver detalhes"
                ctaLink={`/produtos/${link}`}
                icon={ArrowIcon}
                color={index === 0 ? "white" : "fb_blue_button"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
