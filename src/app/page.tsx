"use server"
import { getLastPostsNoticias } from "@/lib/getLastPostsNoticias";
import LastPostsNoticias from "../components/Layout/LastPostsNoticias";
import BannerCta from "@/components/BannerCTA";
import SliderNavigational from "@/components/icons_slider";
import { nossasMarcasInfos, sliderCategoriasHome } from "@/constants/home";
import Newsletter from "@/components/Layout/Newsletter";
import InfoSection from "@/components/Layout/InfoSection";

export default async function Home() {
  const queriedLastPostsNoticias = await getLastPostsNoticias();
  const fetchedLastPostsNoticias = queriedLastPostsNoticias.props.nodes;

  return (
    <div className="flex flex-col gap-12">
      <section className="max-w-full">
        <div className="fb_container overflow-hidden my-12">
          <LastPosts fetchedLastPosts={fetchedLastPosts} />
        </div>
      </section>
      <section className="fb_container">
        {/* Nossas marcas */}
        <div className="w-full">
          <h2 className="text-center text-fb_blue_main text-4xl font-bold py-12">
            Nossas marcas
          </h2>
        </div>
        <div>
          { nossasMarcasInfos.map((element, index) => (
            <InfoSection 
              key={`info-marca-${index}`}
              title={ element.title }
              content={ element.content }
              imagePath={ element.imagePath }
              reverseDesktop={ (index % 2 === 0) ? false : true }
              reverseMobile={ (index % 2 === 0) ? false : true }
              ctaLink="#"
            />
          )) }
        </div>
      </section>
      <section>
        <SliderNavigational 
          categories={sliderCategoriasHome}
        />  
      </section>
      <section>
        <div>
          <BannerCta />
        </div>
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
