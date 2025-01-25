import React from "react";
import Image, { StaticImageData } from "next/image";
import InfoSection from "@/components/Layout/InfoSection";
import whiteLeaf from "../../../public/white-leaf.svg";
import imagemHeroCiclos from "../../../public/images/imagem_hero_ciclos.webp";
import ciclosClean from "../../../public/images/ciclos-clean.webp";
import produtosSustentaveis from "../../../public/images/produtos-sustentaveis.webp";
import cicloReciclagem from "../../../public/images/ciclo-reciclagem.webp";
import doacaoDeMedicamentos from "../../../public/images/doacao-de-medicamentos.webp";
import heroTransparencia from "../../../public/images/hero-transparencia.jpg";
import Newsletter from "@/components/Layout/Newsletter";
import InfoCardsSlider from "@/components/Layout/InfoCardsSlider";
import InfoCard from "@/components/Layout/InfoCardsSlider/InfoCard";
import HeroSection from "@/components/Layout/HeroSection";
import Link from "next/link";


export default function CiclosTransparencia() {

  function CardSection({ children }: { children: React.ReactNode }) {
    return (
      <div className="text-fb_text_gray fb_container mx-auto py-4 lg:py-10 relative">
        <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection background={heroTransparencia} imagePath={imagemHeroCiclos} imageMaxHeight={420}>
        <div>
          <Image src={ciclosClean} alt={"ciclo logo"} width={360}></Image>
          <h1 className="flex flex-col text-white text-bold py-4">
            <strong className="text-4xl lg:text-6xl">Tratar a natureza como ela merece.</strong>
          </h1>
          <Link href="#" className="flex flex-row gap-6 items-center font-bold bg-fb_green hover:bg-white border border-fb_green text-white hover:text-fb_green rounded-sm px-4 py-3 text-[15px] w-max duration-300 group">
              Saber Mais
              <svg className="fill-white group-hover:fill-fb_green" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5565 1.2233L12.4765 0.383301L11.6765 0.649967C10.3055 1.12633 8.84136 1.27251 7.40318 1.07663C5.89195 0.842108 4.34513 1.05051 2.94985 1.67663C2.21017 1.9916 1.56102 2.48658 1.0615 3.11651C0.561982 3.74644 0.227962 4.49131 0.0898514 5.2833C-0.0892292 6.30643 0.000359376 7.35852 0.349851 8.33663C0.574888 7.82869 0.837853 7.33842 1.13652 6.86997C1.81398 5.87319 2.7527 5.08209 3.84985 4.5833C4.90681 4.10072 6.06211 3.8724 7.22318 3.91663C6.11796 4.08601 5.06003 4.48331 4.11652 5.0833C3.66159 5.36932 3.2449 5.71207 2.87652 6.1033C2.52437 6.49451 2.21381 6.92125 1.94985 7.37663C1.45429 8.32868 1.10162 9.34851 0.903185 10.4033C0.689319 11.4615 0.573274 12.5372 0.556518 13.6166H1.88985C1.9532 12.6486 2.08464 11.6862 2.28318 10.7366C3.20814 11.2361 4.24542 11.4908 5.29652 11.4766C6.27683 11.476 7.24707 11.2787 8.14985 10.8966C13.2232 8.72997 12.5565 1.5233 12.5565 1.2233Z" fill="inherit"/>
              </svg>
          </Link>
        </div>
      </HeroSection>

      <div className="overflow-hidden py-5 text-2xl bg-fb_green text-white">      
        <InfoCardsSlider>
          <div>
            <div>Mais de 2 Milhões investidos em energia solar</div>
          </div>

          <div>
            <div>Mais de 1 milhão de quilos reciclados</div>
          </div>

          <div>
            <div>Mais de 2 Milhões investidos em energia solar</div>
          </div>

          <div>
            <div>Mais de 1 milhão de quilos reciclados</div>
          </div>

        </InfoCardsSlider>
      </div>

      <div className="bg-hero-section-gray relative bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85 z-0"></div>
        <CardSection>
          <InfoSection
            border={false}
            reverseDesktop={true}
            reverseMobile={false}
            title={"Produtos Sustentáveis"}
            content={"<p>No dia-dia a preocupação com o meio ambiente no Grupo Real H pode ser vista nos campos do Brasil e do exterior. A homeopatia populacional desenvolvida pela empresa, pioneira e líder no segmento, ajuda produtores a cuidar da saúde de seus animais de maneira segura e natural, reduzindo drasticamente os impactos para a natureza.</p>"}
            imagePath={produtosSustentaveis}
            ctaLink="#"
          />
        </CardSection>
      </div>

      <div className="bg-hero-section-gray-palms relative bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85 z-0"></div>
        <CardSection>
          <InfoSection
            border={false}
            reverseDesktop={false}
            reverseMobile={false}
            title={"Ciclos Reciclagem e o Compromisso com a Sustentabilidade"}
            content={"<p>Ciclos Reciclagem reafirma nosso compromisso com a sustentabilidade. Um projeto que envolve nossos colaboradores e clientes e que já retirou do meio ambiente, em 18 anos, mais de 1,3 milhão de quilos de lixo.</p>"}
            imagePath={cicloReciclagem}
            ctaLink="#"
          />
        </CardSection>
      </div>
      
      <div className="bg-hero-section-gray-palms relative bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85 z-0"></div>
        <CardSection>
          <InfoSection
            border={false}
            reverseDesktop={false}
            reverseMobile={false}
            title={"Mais de 2 Milhões de Investimento em energia fotovoltaica"}
            content={"<p>Em 21 de dezembro de 2021 a empresa finalizou o processo de implantação da produção de energia fotovoltaica na planta da unidade industrial de sua matriz em Campo Grande, MS.</p><p>O sistema representa economia da quase totalidade do uso da energia fornecida pela concessionária, o que, por sua vez, representa um impacto bastante benéfico ao meio ambiente.</p>"}
            video={"https://www.youtube.com/embed/Wi_gXVoXPTg"}
            ctaLink="#"
          />
        </CardSection>
      </div>

      <div className="bg-hero-section-gray relative bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85 z-0"></div>
        <CardSection>
          <InfoSection
            border={false}
            reverseDesktop={true}
            reverseMobile={false}
            title={"Doações de Medicamentos para Reabilitação de Animais Silvestres"}
            content={"<p>O Grupo Real H reforça seu compromisso com a sustentabilidade e a preservação da biodiversidade por meio de doações regulares de medicamentos para centros de reabilitação de animais silvestres. Essas contribuições visam apoiar o tratamento e a cura desses animais, desempenhando um papel crucial na recuperação das espécies e na manutenção do equilíbrio ecológico. </p>"}
            imagePath={doacaoDeMedicamentos}
          />
        </CardSection>
      </div>
    </>
  )
}
