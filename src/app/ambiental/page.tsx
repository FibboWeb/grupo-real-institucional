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

export default function PageAmbiental() {
  return (
    <>
      <HeroSection
        children={HeroChildren()}
        backgroundClass="bg-hero-green-leafs"
        ctaLink="#"
        btnColor="fb_green_button"
        imagePath={HeroCiclos}
        btnContent="SAIBA MAIS"
      />
      <InfiniteCarousel items={InfiniteCarouselItems} />
      <InfoSection
        badge="Ambiental"
        title="Produtos Sustentáveis"
        content="No dia-dia a preocupação com o meio ambiente no Grupo Real H pode ser vista nos campos do Brasil e do exterior. A homeopatia populacional desenvolvida pela empresa, pioneira e líder no segmento, ajuda produtores a cuidar da saúde de seus animais de maneira segura e natural, reduzindo drasticamente os impactos para a natureza."
        color="fb_green_button"
        imagePath={SustentaveisImg}
        ctaLink="#"
        heroBgImage="bg-ambiental-sustentaveis-bg"
        border={false}
        reverseDesktop={true}
      />

      <BigNumbersSection items={BigNumbersItems} />

      <InfoSection
        badge="Reciclagem"
        title="Ciclos Reciclagem e o Compromisso com a Sustentabilidade"
        content="Ciclos Reciclagem reafirma nosso compromisso com a sustentabilidade. Um projeto que envolve nossos colaboradores e clientes e que já retirou do meio ambiente, em 18 anos, mais de 1,3 milhão de quilos de lixo."
        color="fb_green_button"
        imagePath={CiclosImg}
        ctaLink="#"
        heroBgImage="bg-bg-ciclos"
        border={false}
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
        ctaLink="#"
        heroBgImage="bg-bg-investimento"
        border={false}
      />
      <InfoSection
        badge="Ambiental"
        title="Doações de Medicamentos para Reabilitação de Animais Silvestres"
        content="O Grupo Real H reforça seu compromisso com a sustentabilidade e a preservação da biodiversidade por meio de doações regulares de medicamentos para centros de reabilitação de animais silvestres. Essas contribuições visam apoiar o tratamento e a cura desses animais, desempenhando um papel crucial na recuperação das espécies e na manutenção do equilíbrio ecológico. "
        color="fb_green_button"
        imagePath={DoacoesImg}
        ctaLink="#"
        heroBgImage="bg-bg-doacoes"
        border={false}
        reverseDesktop={true}
      />

      <Newsletter />
    </>
  );
}
