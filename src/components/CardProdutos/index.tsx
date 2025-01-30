import NotFound from "@/app/not-found";
import { CardProductPropsAPI } from "@/types/produto";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import placeholder from "@/public/images/img-teste.jpeg";

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
      <div className="bg-fb_blue text-white py-0.5 px-2 rounded-full w-fit">{children}</div>
    </>
  );
}

export function TitleProduct({ nomeProduto }: TitleProductProps) {
  return (
    <>
      <h2 className="font-bold text-xl">{nomeProduto}</h2>
    </>
  );
}

function DescriptionProduct({ descriptionProduct }: descriptionProductProps) {
  return (
    <>
      <div className="text-base leading-5" dangerouslySetInnerHTML={{ __html: descriptionProduct }} />
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

  const productList = product.flat();
  if (product) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {productList.map(
          (
            item,
            index, // Mapear o array de produtos
          ) => (
            <div key={index} className="w-full lg:w-64 h-auto flex flex-col gap-8 items-center">
              <LinkProduct link={item?.linkProduto ? item?.linkProduto : "#"}>
                {/* Acessar as propriedades do item */}
                <ImageProduct
                  src={item?.imagem?.node?.link || placeholder}
                  alt={item?.titulo ? item?.titulo : "Imagem do produto"}
                />
              </LinkProduct>
              <div className="w-4/5 md:w-full flex flex-col gap-2">
                <LinkProduct link={item?.linkProduto ? item?.linkProduto : "#"}>
                  <BadgeCategorie>{item?.textoTag}</BadgeCategorie>
                </LinkProduct>
                <LinkProduct link={item?.linkProduto ? item?.linkProduto : "#"}>
                  <TitleProduct nomeProduto={item?.titulo} />
                  <DescriptionProduct descriptionProduct={item?.peso ? item?.peso : ""} />
                </LinkProduct>
              </div>
            </div>
          ),
        )}
      </div>
    );
  } else {
    NotFound;
  }
}
