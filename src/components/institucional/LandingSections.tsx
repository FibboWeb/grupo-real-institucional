import BoardCards from "@/components/Layout/BoardCards/BoardCards";
import Depoiments from "@/components/Layout/Depoiments";
import HeroSection from "@/components/Layout/HeroSection";
import InfoSection from "@/components/Layout/InfoSection";
import Newsletter from "@/components/Layout/Newsletter";
import OurValues from "@/components/Layout/OurValuesSection/OurValues";
import Timeline from "@/components/Layout/Timeline/Timeline";
import { LandingSection } from "@/types/quem-somos-page";
import "./institutional-content.css";

type Props = {
  secoes: LandingSection[];
  heroBackgroundClass?: string;
};

function renderSection(secao: LandingSection, index: number, heroBackgroundClass?: string) {
  switch (secao.type) {
    case "hero": {
      const fundo = typeof secao.fundo === "string" ? secao.fundo : undefined;

      return (
        <HeroSection
          key={`hero-${index}`}
          backgroundClass={heroBackgroundClass ?? "bg-hero-image"}
          backgroundImageUrl={fundo}
        >
          <div className="flex flex-col gap-6 my-4 w-full md:w-2/5 min-h-[72px]">
            {secao.titulo ? <h1 className="text-[42px] text-white font-bold">{secao.titulo}</h1> : null}
            {secao.texto ? (
              <div className="text-white" dangerouslySetInnerHTML={{ __html: secao.texto }} />
            ) : null}
          </div>
        </HeroSection>
      );
    }
    case "depoimento":
      return (
        <div key={`depoimento-${index}`} className="bg-backgroundPage">
          <Depoiments
            content={secao.texto}
            image={secao.imagem}
            ctaLink={secao.ctaUrl}
            ctaLabel={secao.ctaRotulo}
          />
        </div>
      );
    case "info_video":
      return (
        <div key={`info-video-${index}`} className="bg-backgroundPage">
          <InfoSection
            title={secao.titulo}
            content={secao.conteudo}
            youtubeEmbed={secao.youtube}
            reverseDesktop={secao.inverterDesktop}
            reverseMobile={false}
          />
        </div>
      );
    case "info_imagem":
      return (
        <div key={`info-imagem-${index}`} className="bg-backgroundPage">
          <InfoSection
            title={secao.titulo}
            content={secao.conteudo}
            imagePath={secao.imagem}
            reverseDesktop={secao.inverterDesktop}
            reverseMobile={false}
            readMore={secao.lerMais}
          />
        </div>
      );
    case "atividades":
      return (
        <div key={`atividades-${index}`} className="bg-backgroundPage">
          <OurValues
            title={secao.titulo}
            contentPage={secao.texto}
            values={secao.cards.map((card) => ({
              img: card.icone,
              title: card.titulo,
              content: card.texto,
            }))}
          />
        </div>
      );
    case "diretoria":
      return (
        <div key={`diretoria-${index}`} className="bg-backgroundPage pb-8">
          <BoardCards
            title={secao.titulo}
            members={secao.membros.map((membro) => ({
              img: membro.foto,
              name: membro.nome,
              role: membro.cargo,
              description: membro.bio,
              ctaLink: membro.ctaUrl,
            }))}
          />
        </div>
      );
    case "timeline":
      return (
        <section key={`timeline-${index}`} className="py-8">
          <Timeline title={secao.titulo} embedUrl={secao.url} />
        </section>
      );
    case "texto":
      return (
        <section key={`texto-${index}`} className="fb_container py-8">
          <div
            className="flex flex-col gap-4 text-[#333333] institutional-content"
            dangerouslySetInnerHTML={{ __html: secao.conteudo }}
          />
        </section>
      );
    case "newsletter":
      return (
        <section key={`newsletter-${index}`} className="fb_container pt-10 pb-20">
          <Newsletter />
        </section>
      );
    default:
      return null;
  }
}

export default function LandingSections({ secoes, heroBackgroundClass }: Props) {
  return (
    <section className="flex flex-col">
      {secoes.map((secao, index) => renderSection(secao, index, heroBackgroundClass))}
    </section>
  );
}
