import Breadcrumb from "@/components/BreadCrumb";
import LastPostsEventos from "@/components/Layout/LastPostsEventos";
import { getLastPostsEventos } from "@/lib/getLastPostsEventos";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "40 Anos de história - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "40 Anos de história - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/historia",
    languages: {
      pt: "https://gruporealbr.com.br",
    },
  },
};

export default async function Historia() {
  const queriedLastPostsEventos = await getLastPostsEventos();
  const fetchedLastPostsEventos = queriedLastPostsEventos.props.nodes;
  function CardSection({ children }: { children: React.ReactNode }) {
    return (
      <section className="max-w-full">
        <div className="fb_container overflow-hidden">{children}</div>
      </section>
    );
  }

  return (
    <div className="relative mt-24">
      <CardSection>
        <Breadcrumb
          activeClasses="text-fb_gray_bread"
          containerClasses="flex py-5"
          listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
          capitalizeLinks
        />
      </CardSection>
      <CardSection>
        <div className={`hero-category bg-no-repeat bg-center bg-cover h-auto xl:h-72`}>
          <Image
            alt="Grupo Real"
            src="/images/historia/banner_40_anos.webp"
            width={1520}
            height={320}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fetchPriority="high"
            className="h-[250px] md:h-64 xl:h-72 rounded-2xl object-cover object-center"
          />
        </div>
      </CardSection>
      <CardSection>
        <div className="flex flex-col py-4 lg:py-8">
          <h1 className="text-fb_blue_main text-xl lg:text-3xl font-bold text-center pb-2">
            Celebre conosco 4 décadas de história.
          </h1>
          <span className="text-[#9A9A9A] font-semibold text-center text-lg w-full">
            Fotos, vídeos, notícias e muito mais...
          </span>
        </div>
        <div className="py-8">
          <LastPostsEventos fetchedLastPosts={fetchedLastPostsEventos} />
        </div>
      </CardSection>
    </div>
  );
}
