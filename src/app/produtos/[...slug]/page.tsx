import BannerLines from "@/components/BannerCTA/BannerLines";
import Breadcrumb from "@/components/BreadCrumb";
import { BadgeCategorie } from "@/components/CardProdutos";
import Accordion from "@/components/Layout/Accordion";
import { Button } from "@/components/ui/button";
import image03 from "@/public/images/banners/cao-e-gato.webp";
import image02 from "@/public/images/banners/carne-vermelha-cortada.webp";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SliderProductsRecommended from "../(componentes)/SliderProductsRecommended";
import Newsletter from "@/components/Layout/Newsletter";

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
export default async function PageProduct() {
  const image = await fetch("https://realh.com.br/wp-json/wp/v2/media/40443");

  const imageUrl = await image.json();
  const mock = [
    {
      id: 10,
      nomeProduto: "REBANHO PEC",
      short_descricao: "Suplemento mineral adensado para bovinos de corte",
      long_descricao:
        "Oferece tecnologia 3D (sincronismo de proteína e energia no rúmen, por meio da degradação de proteína).",
      imagem: {
        src: "https://realh.com.br/wp-content/uploads/2024/10/REBANHO-PEC-min.png",
        alt: "Imagem do produto",
        width: 284,
        height: 355,
      },
      categoria: "REBANHO",
      link: { link: "#" },
    },
  ];

  return (
    <div className="relative mt-36">
      <div className="fb_container gap-fb_space-section">
        <div>
          <Breadcrumb />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 fb_container gap-8">
          <div className="mx-auto">
            <Suspense fallback={<div className="w-full h-full bg-gray-300 animated-pulse rounded-lg"></div>}>
              <Image
                src={imageUrl.source_url}
                width={400}
                height={400}
                alt={mock[0].imagem.alt}
                className="rounded-lg bg-[#E5E7E9] object-cover"
              />
            </Suspense>
          </div>
          <div className="mx-auto flex flex-col gap-2">
            <div>
              <BadgeCategorie>{mock[0].categoria}</BadgeCategorie>
            </div>
            <div>
              <h1 className="font-bold text-3xl">{mock[0].nomeProduto}</h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col w-full gap-2">
                <h2 className="text-xl font-bold leading-7">{mock[0].short_descricao}</h2>
                <p className="text-base leading-6">{mock[0].long_descricao}</p>
              </div>
              <div>
                <Button className="w-full lg:w-auto h-12 px-10 bg-fb_green hover:bg-green-700">
                  <Link
                    href="https://wa.me/556730289000"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Solicite um orçamento pelo whatsapp"
                    className="flex gap-4"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    SOLICITE UM ORÇAMENTO
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Para que serve?</h3>
                  <p>Indicado para animais nas fases de cria, recria e engorda, principalmente no período da seca.</p>
                </div>
                <div>
                  <Accordion title="Modo de usar" faqHeading={{ tagName: "h3" }} active={true}>
                    <p>
                      Produto de pronto uso que deve estar sempre disponível no cocho, devendo ser fornecido puro aos
                      animais; Consumo é estimado em 60 g/100 Kg/ Peso corporal (PC).
                    </p>
                  </Accordion>
                  <Accordion title="Indicações" faqHeading={{ tagName: "h3" }}>
                    <p>
                      Produto de pronto uso que deve estar sempre disponível no cocho, devendo ser fornecido puro aos
                      animais; Consumo é estimado em 60 g/100 Kg/ Peso corporal (PC).
                    </p>
                  </Accordion>
                  <Accordion title="Dúvidas" faqHeading={{ tagName: "h3" }}>
                    <p>
                      Produto de pronto uso que deve estar sempre disponível no cocho, devendo ser fornecido puro aos
                      animais; Consumo é estimado em 60 g/100 Kg/ Peso corporal (PC).
                    </p>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col gap-8 my-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-fb_blue_main">Produtos similares</h2>
              <hr className="w-20 h-[6px] bg-fb_blue_main rounded-full" />
            </div>
            <div className="w-full">
              <SliderProductsRecommended />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 mb-20">
            <BannerLines title="Linha Nutrição" imgBackground={image02.src}>
              <p>
                A <strong>Real H</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
                há <strong>40 anos</strong> ao lado do produtor
              </p>
            </BannerLines>
            <BannerLines title="Linha Nutrição" imgBackground={image03.src}>
              <p>
                A <strong>Real H</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
                há <strong>40 anos</strong> ao lado do produtor
              </p>
            </BannerLines>
          </div>
        </div>
        <div>
          <Newsletter
            sectionTitle="Inscreva-se na nossa newsletter"
            sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail."
          />
        </div>
      </div>
    </div>
  );
}
