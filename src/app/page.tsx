"use server";
import BannerCta from "@/components/BannerCTA";
import SliderNavigational from "@/components/icons_slider";
import Newsletter from "@/components/Layout/Newsletter";
import InfoSection from "@/components/Layout/InfoSection";
import ValuesSection from "@/components/ValuesSection";
import { getLastPostsNoticias } from "@/lib/getLastPostsNoticias";
import LastPostsNoticias from "../components/Layout/LastPostsNoticias";
import SliderTestimonials from "@/components/SliderTestimonials";
import {
  ctasLinksHero,
  nossasMarcasInfos,
  sectionValoresInfo,
  sliderCategoriasHome,
  testimoniaslInfo,
} from "@/constants/home";
import VideoBackground from "@/components/Layout/HeroSection/VideoBackground";
import Typewriter from "@/components/WriterWords";

export default async function Home() {
  const queriedLastPostsNoticias = await getLastPostsNoticias();
  const fetchedLastPostsNoticias = queriedLastPostsNoticias.props.nodes;

  return (
    <div className="flex flex-col gap-fb_space-section">
      <section>
        <VideoBackground src_video="/video/video-hero.mp4" ctaLinks={ctasLinksHero}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Por um futuro s{<Typewriter words={["ustentável", "audável", "eguro"]} />} <br /> para todos
          </h1>
          <p className="text-lg md:text-xl mb-6">
            O Grupo REAL reúne marcas que transformam desafios em oportunidades. Descubra nosso compromisso com a
            qualidade e sustentabilidade.
          </p>
        </VideoBackground>
      </section>
      <section className="max-w-full">
        <div className="fb_container overflow-hidden my-12">
          <LastPostsNoticias fetchedLastPosts={fetchedLastPostsNoticias} />
        </div>
      </section>
      <section className="fb_container">
        {/* Nossas marcas */}
        <div className="w-full">
          <h2 className="text-center text-fb_blue_main text-4xl font-bold py-12">Nossas marcas</h2>
        </div>
        <div>
          {nossasMarcasInfos.map((element, index) => (
            <InfoSection
              key={`info-marca-${index}`}
              title={element.title}
              content={element.content}
              imagePath={element.imagePath}
              reverseDesktop={index % 2 === 0 ? false : true}
              reverseMobile={index % 2 === 0 ? false : true}
              ctaLink="#"
            />
          ))}
        </div>
      </section>
      <section>
        <SliderNavigational categories={sliderCategoriasHome} />
      </section>
      <section>
        <div>
          <BannerCta />
        </div>
      </section>
      <section>
        <ValuesSection values={sectionValoresInfo} />
      </section>
      <section>
        <SliderTestimonials testimonial={testimoniaslInfo} />
      </section>
      <section className="fb_container">
        <Newsletter
          sectionTitle="Inscreva-se na nossa newsletter"
          sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail."
        />
      </section>
    </div>
  );
}
