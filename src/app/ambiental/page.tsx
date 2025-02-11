// Hero
import HeroSection from "@/components/Layout/HeroSection";
import HeroChildren from "./HeroChildren";

// Infinite Carousel
import InfiniteCarousel from "@/components/Layout/InfiniteCarousel/InfiniteCarousel";
import { InfiniteCarouselItems } from "./InfiniteCarouselItems";

// Big numbers section
import BigNumbersSection from "@/components/Layout/BigNumbersSection/BigNumbersSection";
import { BigNumbersItems } from "./BigNumbersItems";

// Partners
import PartnersSection from "@/components/Layout/PartnesSection/PartnersSection";
import { PartnerData } from "./PartnerSectionData";

// Posts by category
import PostsByCategory from "@/components/Layout/PostsByCategory/PostsByCategory";
import { ContentPostsByCategory } from "./PostsByCategoryContent";

// Info section
import InfoSection from "@/components/Layout/InfoSection";

// newsletter
import Newsletter from "@/components/Layout/Newsletter";

// Images
import HeroCiclos from "@/public/images/imagem_hero_ciclos.webp";
import SustentaveisImg from "@/public/images/ambiental/produtosSustentaveisImg.webp";
import CiclosImg from "@/public/images/ambiental/ciclosReciclagem.webp";
import DoacoesImg from "@/public/images/ambiental/doacoes.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ciclos: Ambiental - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Ciclos: Ambiental - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/ambiental",
    languages: {
      pt: "https://gruporealbr.com.br/",
    },
  },
};

export default function PageAmbiental() {
  return (
    <>
      <HeroSection
        children={HeroChildren()}
        backgroundClass="bg-hero-section-ambiental"
        btnColor="fb_green_button"
        imagePath={HeroCiclos}
        btnContent="SAIBA MAIS"
        imageMaxHeight={350}
      />
      <InfiniteCarousel items={InfiniteCarouselItems} />
      <InfoSection
        badge="Ambiental"
        title="Produtos Sustentáveis"
        content="<p>No dia-dia a preocupação com o meio ambiente no Grupo Real pode ser vista nos campos do Brasil e do exterior. A homeopatia populacional desenvolvida pela empresa, pioneira e líder no segmento, ajuda produtores a cuidar da saúde de seus animais de maneira segura e natural, reduzindo drasticamente os impactos para a natureza.<p><p>Exemplos como os das fazendas Espig&atilde;o, no Mato Grossodo Sul, La Triana no Mato Grosso e S&atilde;o Jo&atilde;o da Gl&oacute;ria em Minas Gerais comprovam isso. Nessas tr&ecirc;s propriedades a efici&ecirc;ncia da homeopatia populacional possibilitou a redu&ccedil;&atilde;o de 359 litros de veneno por ano, produtos qu&iacute;micos que deixaram de contaminar o solo e o len&ccedil;ol fre&aacute;tico.</p><p>Na est&acirc;ncia S&atilde;o Jo&atilde;o, em Mato Grosso, os medicamentos homeop&aacute;ticos da Real H levaram &agrave; redu&ccedil;&atilde;o de mais de 12 mil inje&ccedil;&otilde;es intramam&aacute;rias por ano, garantindo um leite de melhor qualidade, com&nbsp;zero&nbsp;res&iacute;duos.</p>"
        color="fb_green_button"
        imagePath={SustentaveisImg}
        heroBgImage="bg-ambiental-sustentaveis-bg"
        border={false}
        reverseDesktop={true}
        readMore={true}
      />

      <BigNumbersSection items={BigNumbersItems} />

      <InfoSection
        badge="Reciclagem"
        title="Ciclos Reciclagem e o Compromisso com a Sustentabilidade"
        content="<p>Ciclos Reciclagem reafirma nosso compromisso com a sustentabilidade. Um projeto que envolve nossos colaboradores e clientes e que já retirou do meio ambiente, em 18 anos, mais de 1,3 milhão de quilos de lixo.</p><p><strong>Reciclar para minimizar o lixo no planeta.</strong></p><p>Quando suas atitudes est&atilde;o em sintonia com o meio ambiente a natureza toda agradece. E a Real H sabe disso. Por isso criou o Ciclos Real H, que desde 2007 desenvolve a consci&ecirc;ncia ambiental em seus colaboradores e ajuda a diminuir o impacto no meio ambiente atrav&eacute;s do destino correto de produtos recicl&aacute;veis.</p>"
        color="fb_green_button"
        imagePath={CiclosImg}
        heroBgImage="bg-bg-ciclos"
        border={false}
        readMore={true}
      />
      <section className="my-12">
        <PostsByCategory
          title={ContentPostsByCategory.title}
          subtitle={ContentPostsByCategory.subtitle}
          subtitleIcon={ContentPostsByCategory.subtitleIcon}
          posts={ContentPostsByCategory.posts}
        />
      </section>
      <PartnersSection
        subtitle={PartnerData.subtitle}
        title={PartnerData.title}
        content={PartnerData.content}
        btnLink={PartnerData.btnLink}
        btnContent={PartnerData.btnContent}
        btnIcon={PartnerData.btnIcon}
        btnColor={PartnerData.btnColor}
        partnesImages={PartnerData.partnesImages}
      />
      <InfoSection
        badge="Energia Solar"
        title="Mais de 2 Milhões de Investimento em energia fotovoltaica"
        content="Ciclos Reciclagem reafirma nosso compromisso com a sustentabilidade. Um projeto que envolve nossos colaboradores e clientes e que já retirou do meio ambiente, em 18 anos, mais de 1,3 milhão de quilos de lixo."
        color="fb_green_button"
        youtubeEmbed="https://www.youtube.com/embed/Injvq5HndBE?si=K7zZQ__xhEed1YhJ"
        heroBgImage="bg-bg-investimento"
        border={false}
      />
      <InfoSection
        badge="Ambiental"
        title="Doações de Medicamentos para Reabilitação de Animais Silvestres"
        content="<p>O Grupo Real reforça seu compromisso com a sustentabilidade e a preservação da biodiversidade por meio de doações regulares de medicamentos para centros de reabilitação de animais silvestres. Essas contribuições visam apoiar o tratamento e a cura desses animais, desempenhando um papel crucial na recuperação das espécies e na manutenção do equilíbrio ecológico.</p><p>Com essa iniciativa, a empresa não só promove a saúde e o bem-estar da fauna silvestre, mas também reafirma seu compromisso com a responsabilidade socioambiental e a conservação da natureza.</p>"
        color="fb_green_button"
        imagePath={DoacoesImg}
        heroBgImage="bg-bg-doacoes"
        border={false}
        reverseDesktop={true}
      />

      <Newsletter />
    </>
  );
}
