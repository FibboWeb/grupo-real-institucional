"use server";
import BannerCta from "@/components/BannerCTA";
import SliderNavigational from "@/components/icons_slider";
import InfoCards from "@/components/InfoCards";
import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";
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
import { getLastPostsHomeopet, getLastPostsNoticias } from "@/lib/getLastPostsNoticias";
import { ArrowRight } from "lucide-react";
import LastPostsNoticias from "../components/Layout/LastPostsNoticias";

export default async function Home() {
  const queriedLastPostsNoticias = (await getLastPostsNoticias()) || { props: { nodes: [] } };
  const postsHomeoPet = (await getLastPostsHomeopet()) || { props: { nodes: [] } };
  const fetchedLastPostsNoticias = queriedLastPostsNoticias.props.nodes ?? [];
  const fetchedLastPostsHomeoPet = postsHomeoPet.props?.nodes ?? [];

  const postsMesclados = [
    ...fetchedLastPostsHomeoPet,
    ...fetchedLastPostsNoticias
  ].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <div className="flex flex-col gap-fb_space-section">
      <section>
        <VideoBackground src_video="/video/DRONE_OTIMIZADO-1.mp4" ctaLinks={ctasLinksHero}>
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              Por um futuro <br className="block md:hidden" />s
              {<Typewriter words={["ustentável", "audável", "eguro"]} />} <br className="block md:hidden" />
              <span> para todos</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              O Grupo REAL reúne marcas que transformam desafios em oportunidades.<br/> Descubra nosso compromisso com a
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
          <LastPostsNoticias fetchedLastPosts={postsMesclados ?? []} />
        </div>
      </section>
      <section className="">
        {/* Nossas marcas */}
        <div className="w-full">
          <h2 className="text-center text-fb_blue_main text-4xl font-bold py-12">Nossas marcas</h2>
        </div>
        <div id="slider-brand">
          <InfoCards values={nossasMarcasInfos} />
        </div>
      </section>
      <section>
        <SliderNavigational
          categories={sliderCategoriasHome}
          title="Conheça todas as marcas do Grupo Real"
          text="Oferecemos uma ampla gama de soluções sustentáveis em saúde e nutrição animal, além de logística e parcerias comerciais."
        />
      </section>
      <section>
        <div>
          <BannerCta />
        </div>
      </section>
      <section className="fb_container">
        <ValuesSection values={sectionValoresInfo2} />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-center text-fb_blue_main text-4xl font-bold">Depoimentos</h2>
        <SliderTestimonials testimonial={testimoniaslInfo} />
      </section>
      <section className="fb_container flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 my-2">
        <div className="flex flex-col justify-start items-center my-2 gap-4">
          <h3 className="text-xl md:text-3xl font-bold text-center">Acesse nosso CMR de vendas</h3>
          <BtnCallToAction
            ctaLink="https://realh-crmagro.viasoftcloud.com.br/crm-web/login.xhtml"
            content="Acesso Restrito"
            color="fb_blue_button"
            classCssForBTN="text-white w-fit hover:text-black"
            showIcon={false}
          />
        </div>
        <div className="flex flex-col justify-items-start items-center my-2 md:pl-4 gap-4">
          <h3 className="text-xl md:text-3xl font-bold text-center">INTREGRA - Universidade corporativa Grupo Real</h3>
          <BtnCallToAction
            ctaLink="https://integra.realh.com.br/login/"
            content="Acesso Restrito"
            classCssForBTN="text-white w-fit hover:text-black bg-red-500 hover:bg-red-600 hover:text-white border-transparent"
            showIcon={false}
            color="red-500"
            icon={<ArrowRight className="bg-white text-red-500 rounded-full p-1" strokeWidth={3}/>}
          />
        </div>
      </section>
      <section className="fb_container">
        <Newsletter
          sectionTitle="Inscreva-se na nossa newsletter"
          sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos diretamente no seu e-mail."
        />
      </section>
    </div>
  );
}
