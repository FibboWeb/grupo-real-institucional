import React from "react";

// Hero section
import HeroSection from "@/components/Layout/HeroSection";
import childrenHeroSection from "./childrenHeroSection";

// Depoiments
import Depoiments from "@/components/Layout/Depoiments";
import ClaudioImage from "../../../public/images/claudio-1.jpg";

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

export default function PageAboutUs() {
  const ctaLinkString = "www.google.com";
  const conteudo =
    "“Aquilo que eu aprendi na juventude, vendo meu pai curar pessoas, hoje nós estamos aplicando nos rebanhos”, Claudio Martins Real, Presidente e Fundador da Real H. ";
  return (
    <section className="flex flex-col gap-5">
      <HeroSection children={childrenHeroSection()} ctaLink={ctaLinkString} />
      <Depoiments content={conteudo} image={ClaudioImage} />
      <InfoSection
        title={infoSectionsContents.marcas.title}
        content={infoSectionsContents.marcas.content}
        imagePath={infoSectionsContents.marcas.img}
        reverseDesktop={infoSectionsContents.marcas.reverseDesktop}
        reverseMobile={infoSectionsContents.marcas.revereverseMobile}
      />

      <OurValues title="Nossas Atividades" contentPage={content} values={OurValuesContent} />

      <InfoSection
        title={infoSectionsContents.fundadores.title}
        content={infoSectionsContents.fundadores.content}
        ctaLink={infoSectionsContents.fundadores.ctaLink}
        imagePath={infoSectionsContents.fundadores.img}
        reverseDesktop={infoSectionsContents.fundadores.reverseDesktop}
        reverseMobile={infoSectionsContents.fundadores.revereverseMobile}
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

      <Timeline />
    </section>
  );
}
