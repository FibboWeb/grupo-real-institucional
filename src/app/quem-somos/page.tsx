import React from "react";

// Hero section
import HeroSection from "@/components/Layout/HeroSection";
import childrenHeroSection from "./childrenHeroSection";

// Depoiments
import Depoiments from "@/components/Layout/Depoiments";
import ClaudioImage from "@/public/images/claudio-martins-real-curriculo/claudio-1.webp";

// Info sections
import InfoSection from "@/components/Layout/InfoSection";
import { infoSectionsContents } from "./infoSectionContents";

// Board cards
import BoardCards from "@/components/Layout/BoardCards/BoardCards";
import { members } from "./BoardCardsContents";

// Our values
import OurValues from "@/components/Layout/OurValuesSection/OurValues";
import { OurValuesContent, content } from "./OurValuesContents";

// Timeline
import Timeline from "@/components/Layout/Timeline/Timeline";

// Newsletter
import Newsletter from "@/components/Layout/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Quem Somos - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/quem-somos",
    languages: {
      pt: "https://gruporealbr.com.br/",
    }
  }
};

export default function PageAboutUs() {
  const conteudo =
    "“Aquilo que eu aprendi na juventude, vendo meu pai curar pessoas, hoje nós estamos aplicando nos rebanhos”, Claudio Martins Real, Presidente e Fundador da Grupo Real. ";
  return (
    <section className="flex flex-col">
      <HeroSection children={childrenHeroSection()} backgroundClass="bg-hero-quem-somos" />
      <section className="bg-backgroundPage pb-8 flex flex-col gap-5">
        <Depoiments content={conteudo} image={ClaudioImage} />
        <InfoSection
          title={infoSectionsContents.marcas.title}
          content={infoSectionsContents.marcas.content}
          youtubeEmbed="https://www.youtube.com/embed/ED_3lipxogY?si=-E2bf9nqCad3h8AV"
          reverseDesktop={infoSectionsContents.marcas.reverseDesktop}
          reverseMobile={infoSectionsContents.marcas.revereverseMobile}
        />

        <OurValues title="Nossas Atividades" contentPage={content} values={OurValuesContent} />

        <InfoSection
          title={infoSectionsContents.fundadores.title}
          content={infoSectionsContents.fundadores.content}
          imagePath={infoSectionsContents.fundadores.img}
          reverseDesktop={infoSectionsContents.fundadores.reverseDesktop}
          reverseMobile={infoSectionsContents.fundadores.revereverseMobile}
          readMore={infoSectionsContents.fundadores.readMore}
        />

        <InfoSection
          title={infoSectionsContents.nutricao.title}
          content={infoSectionsContents.nutricao.content}
          imagePath={infoSectionsContents.nutricao.img}
          reverseDesktop={infoSectionsContents.nutricao.reverseDesktop}
          reverseMobile={infoSectionsContents.nutricao.revereverseMobile}
        />
        <InfoSection
          title={infoSectionsContents.grande_animais.title}
          content={infoSectionsContents.grande_animais.content}
          imagePath={infoSectionsContents.grande_animais.img}
          reverseDesktop={infoSectionsContents.grande_animais.reverseDesktop}
          reverseMobile={infoSectionsContents.grande_animais.revereverseMobile}
        />
        <InfoSection
          title={infoSectionsContents.homeo_pet.title}
          content={infoSectionsContents.homeo_pet.content}
          imagePath={infoSectionsContents.homeo_pet.img}
          reverseDesktop={infoSectionsContents.homeo_pet.reverseDesktop}
          reverseMobile={infoSectionsContents.homeo_pet.revereverseMobile}
        />
        <InfoSection
          title={infoSectionsContents.laboratorio.title}
          content={infoSectionsContents.laboratorio.content}
          imagePath={infoSectionsContents.laboratorio.img}
          reverseDesktop={infoSectionsContents.laboratorio.reverseDesktop}
          reverseMobile={infoSectionsContents.laboratorio.revereverseMobile}
        />
        <InfoSection
          title={infoSectionsContents.redeAtendimento.title}
          content={infoSectionsContents.redeAtendimento.content}
          imagePath={infoSectionsContents.redeAtendimento.img}
          reverseDesktop={infoSectionsContents.redeAtendimento.reverseDesktop}
          reverseMobile={infoSectionsContents.redeAtendimento.revereverseMobile}
        />

        <BoardCards title="Diretoria" members={members} />
      </section>
      <section className="py-8">
        <Timeline />
      </section>

      <section className="bg-backgroundPage pt-10 pb-20">
        <Newsletter />
      </section>
    </section>
  );
}
