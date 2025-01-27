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
import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";


export default function CiclosTransparencia() {

    function CardSection({ children }: { children: React.ReactNode }) {
        return (
            <div className="text-fb_text_gray relative">
                <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroSection backgroundClass={'bg-hero-transparencia'} imagePath={imagemHeroCiclos} imageMaxHeight={420}>
                <div>
                    <Image src={ciclosClean} alt={"ciclo logo"} width={360}></Image>
                    <h1 className="flex flex-col text-white text-bold py-4">
                        <strong className="text-4xl lg:text-6xl">Tratar a natureza como ela merece.</strong>
                    </h1>
                    <BtnCallToAction color={"fb_green_button"} ctaLink={"#"} content={"Assista o vídeo"} />
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

            <CardSection>
                <InfoSection
                    heroBgImage={"bg-hero-section-gray"}
                    badge={"Social"}
                    border={false}
                    reverseDesktop={true}
                    reverseMobile={false}
                    title={"Produtos Sustentáveis"}
                    content={"<p>No dia-dia a preocupação com o meio ambiente no Grupo Real H pode ser vista nos campos do Brasil e do exterior. A homeopatia populacional desenvolvida pela empresa, pioneira e líder no segmento, ajuda produtores a cuidar da saúde de seus animais de maneira segura e natural, reduzindo drasticamente os impactos para a natureza.</p>"}
                    imagePath={produtosSustentaveis}
                    imageMidFullContainer={true}
                    ctaLink={"#"}
                    colorButton={"fb_green_button"}
                    contentButton={"Ler Mais"}
                />
            </CardSection>

            <CardSection>
                <InfoSection
                    heroBgImage={"bg-hero-section-gray-palms"}
                    border={false}
                    reverseDesktop={false}
                    reverseMobile={false}
                    title={"Ciclos Reciclagem e o Compromisso com a Sustentabilidade"}
                    content={"<p>Ciclos Reciclagem reafirma nosso compromisso com a sustentabilidade. Um projeto que envolve nossos colaboradores e clientes e que já retirou do meio ambiente, em 18 anos, mais de 1,3 milhão de quilos de lixo.</p>"}
                    imagePath={cicloReciclagem}
                    ctaLink={"#"}
                    colorButton={"fb_green_button"}
                    contentButton={"Ler Mais"}
                />
            </CardSection>

            <CardSection>
                <InfoSection
                    heroBgImage={"bg-hero-section-gray-palms"}
                    border={false}
                    reverseDesktop={false}
                    reverseMobile={false}
                    title={"Mais de 2 Milhões de Investimento em energia fotovoltaica"}
                    content={"<p>Em 21 de dezembro de 2021 a empresa finalizou o processo de implantação da produção de energia fotovoltaica na planta da unidade industrial de sua matriz em Campo Grande, MS.</p><p>O sistema representa economia da quase totalidade do uso da energia fornecida pela concessionária, o que, por sua vez, representa um impacto bastante benéfico ao meio ambiente.</p>"}
                    youtubeEmbed={"https://www.youtube.com/embed/Injvq5HndBE?si=pSWIpz8eJQk4gDJ4"}
                    ctaLink={"#"}
                    colorButton={"fb_green_button"}
                    contentButton={"Ler Mais"}
                />
            </CardSection>

            <CardSection>
                <InfoSection
                    heroBgImage={"bg-hero-section-gray"}
                    border={false}
                    reverseDesktop={true}
                    reverseMobile={false}
                    title={"Doações de Medicamentos para Reabilitação de Animais Silvestres"}
                    content={"<p>O Grupo Real H reforça seu compromisso com a sustentabilidade e a preservação da biodiversidade por meio de doações regulares de medicamentos para centros de reabilitação de animais silvestres. Essas contribuições visam apoiar o tratamento e a cura desses animais, desempenhando um papel crucial na recuperação das espécies e na manutenção do equilíbrio ecológico. </p>"}
                    imagePath={doacaoDeMedicamentos}
                    colorButton={"fb_green_button"}
                    contentButton={"Ler Mais"}
                />
            </CardSection>
        </>
    )
}