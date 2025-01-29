"use server";
import BannerCta from "@/components/BannerCTA";
import SliderNavigational from "@/components/icons_slider";
import InfoCards from "@/components/InfoCards";
import VideoBackground from "@/components/Layout/HeroSection/VideoBackground";
import Newsletter from "@/components/Layout/Newsletter";
import SliderTestimonials from "@/components/SliderTestimonials";
import ValuesSection from "@/components/ValuesSection";
import Typewriter from "@/components/WriterWords";
import {
  ctasLinksHero,
  nossasMarcasInfos,
  sectionValoresInfo1,
  sectionValoresInfo2,
  sliderCategoriasHome,
  testimoniaslInfo,
} from "@/constants/home";
import { getLastPostsNoticias } from "@/lib/getLastPostsNoticias";
import LastPostsNoticias from "../components/Layout/LastPostsNoticias";

export default async function Home() {
  const queriedLastPostsNoticias = await getLastPostsNoticias();
  const fetchedLastPostsNoticias = queriedLastPostsNoticias.props.nodes;

  return (
    <div className="flex flex-col gap-fb_space-section">
      <section>
        <VideoBackground src_video="/video/video-hero.mp4" ctaLinks={ctasLinksHero}>
          <div className="fb_container">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Por um futuro s{<Typewriter words={["ustentável", "audável", "eguro"]} />} <br /> para todos
            </h1>
            <p className="text-lg md:text-xl mb-6">
              O Grupo REAL reúne marcas que transformam desafios em oportunidades. Descubra nosso compromisso com a
              qualidade e sustentabilidade.
            </p>
          </div>
        </VideoBackground>
      </section>
      <section>
        <ValuesSection values={sectionValoresInfo1} />
      </section>
      <section className="max-w-full">
        <div className="fb_container overflow-hidden">
          <LastPostsNoticias fetchedLastPosts={fetchedLastPostsNoticias} />
        </div>
      </section>
      <section className="fb_container">
        {/* Nossas marcas */}
        <div className="w-full">
          <h2 className="text-center text-fb_blue_main text-4xl font-bold py-12">Nossas marcas</h2>
        </div>
        <div>
          <InfoCards values={nossasMarcasInfos} />
        </div>
      </section>
      <section>
        <SliderNavigational
          categories={sliderCategoriasHome}
          title="Linha Nutrição"
          text="Oferecemos uma ampla gama de produtos de nutrição animal, desenvolvidos para atender às necessidades
            específicas de cada segmento do mercado."
        />
      </section>
      <section>
        <div>
          <BannerCta />
        </div>
      </section>
      <section>
        <ValuesSection values={sectionValoresInfo2} />
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-fb_blue_main text-4xl font-bold">O que nossos clientes dizem</h2>
        <SliderTestimonials testimonial={testimoniaslInfo} />
      </section>
      <section>
        <Newsletter
          sectionTitle="Inscreva-se na nossa newsletter"
          sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail."
        />
      </section>
    </div>
  );
}
