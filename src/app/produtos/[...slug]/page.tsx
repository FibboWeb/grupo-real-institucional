import BannerLines from "@/components/BannerCTA/BannerLines";
import Breadcrumb from "@/components/BreadCrumb";
import Accordion from "@/components/Layout/Accordion";
import Newsletter from "@/components/Layout/Newsletter";
import { Button } from "@/components/ui/button";
import { fetchYoastSEO } from "@/lib/getCategorias";
import { getProductPerSlug, getProducts } from "@/lib/getProducts";
import image03 from "@/public/images/banners/cao-e-gato.webp";
import image02 from "@/public/images/banners/carne-vermelha-cortada.webp";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SliderProductsRecommended from "../(componentes)/SliderProductsRecommended";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;
  const infos = await fetchYoastSEO(slug, "produtos");

  return {
    title: infos.title,
    description: infos.description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: infos.title,
      description: infos.description,
      images: [infos.og_image ? infos.og_image[0].url : ""],
    },
    alternates: {
      canonical: `https://gruporealbr.com.br/produtos/${slug}`,
    },
  };
}

/**
 * PageProduct component
 *
 * This component renders a single product page with information about the product
 * and recommended similar products.
 *
 * @returns {JSX.Element} The rendered component.
 * @example
 * <PageProduct />
 */
export default async function PageProduct({ params }) {
  const { slug } = await params;
  const product = await getProductPerSlug(slug);
  console.log(product[0]);
  const productsRecommendations = await getProducts(product[0].categoria_produto, 1, 8);
  if (product.length <= 0) {
    return notFound();
  }

  return (
    <div className="relative mt-24">
      <div className="fb_container gap-fb_space-section flex flex-col">
        <div>
          <Breadcrumb
            activeClasses="text-fb_gray_bread"
            excludePaths={["produtos"]}
            itemName={product[0]?.title?.rendered}
            containerClasses="flex py-5"
            listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
            capitalizeLinks
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Suspense fallback={<div className="w-full h-full bg-gray-300 animated-pulse rounded-lg"></div>}>
              <Image
                src={product[0]._embedded["wp:featuredmedia"][0].link}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 768px"
                alt={`$Imagem do produto ${product[0]?.title?.rendered}`}
                className="rounded-lg bg-[#E5E7E9] object-cover mx-auto"
                loading="eager"
              />
            </Suspense>
          </div>
          <div className="mx-auto flex flex-col gap-2">
            <div>
              <h1 className="font-bold text-3xl">{product[0]?.title?.rendered}</h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col w-full gap-2">
                <h2 className="text-xl font-bold leading-7">{product[0]?.acf?.subtitulo}</h2>
              </div>
              <div>
                { product[0]?.acf?.link_do_produto ? (
                  <Button className="w-full lg:w-auto h-12 px-10 bg-fb_green hover:bg-green-700">
                    <Link
                      href={`${product[0]?.acf?.link_do_produto}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Solicite um orçamento pelo whatsapp"
                      className="flex gap-4"
                    >
                      CLIQUE AQUI E COMPRE ONLINE
                    </Link>
                </Button>
                ) : (
                  <Button className="w-full lg:w-auto h-12 px-10 bg-fb_green hover:bg-green-700">
                    <Link
                    href={`https://wa.me/5508001009000?text=Ol%C3%A1%20estou%20entrando%20em%20contato%20para%20falar%20referente%20ao%20produto%20${product[0]?.title?.rendered}%2C%20que%20vi%20no%20site.%20Link%20do%20produto%20 https://gruporealbr.com.br/produtos/${product[0]?.slug}  `}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Solicite um orçamento pelo whatsapp"
                    className="flex gap-4"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    SOLICITE UM ORÇAMENTO
                    </Link>
                  </Button>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Para que serve?</h3>
                  <p>{product[0]?.acf?.pra_que_serve}</p>
                </div>
                <div>
                  {product[0]?.acf?.modo_de_usar && (
                    <Accordion title="Modo de usar" faqHeading={{ tagName: "h3" }} active={true}>
                      <p>{product[0]?.acf?.modo_de_usar}</p>
                    </Accordion>
                  )}
                  {product[0]?.acf?.vantagens_do_uso && (
                    <Accordion title="Vantagens de uso" faqHeading={{ tagName: "h3" }} active={true}>
                      <p>{product[0]?.acf?.vantagens_do_uso}</p>
                    </Accordion>
                  )}
                  {product[0]?.acf?.duvidas && (
                    <Accordion title="Dúvidas" faqHeading={{ tagName: "h3" }} active={true}>
                      <p>{product[0]?.acf?.duvidas}</p>
                    </Accordion>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full flex flex-col gap-8 my-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-fb_blue_main">Produtos similares</h2>
              <hr className="w-20 h-[6px] bg-fb_blue_main rounded-full" />
            </div>
            <div className="w-full my-6 ">
              <SliderProductsRecommended products={productsRecommendations.products} currentProductSlug={slug} />
            </div>
          </div>
        </div>
        <div>
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
        </div>
        <div>
          <Newsletter
            sectionTitle="Inscreva-se na nossa newsletter"
            sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos diretamente no seu e-mail."
          />
        </div>
      </div>
    </div>
  );
}
