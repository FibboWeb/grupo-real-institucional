import { QUEM_SOMOS_TIMELINE_EVENTOS } from "@/constants/quem-somos-timeline";
import ClaudioImage from "@/public/images/claudio-martins-real-curriculo/claudio-1.webp";
import { members } from "@/app/quem-somos/BoardCardsContents";
import { infoSectionsContents } from "@/app/quem-somos/infoSectionContents";
import { OurValuesContent, content as atividadesTexto } from "@/app/quem-somos/OurValuesContents";
import { LandingPageContent, LandingSection } from "@/types/quem-somos-page";

export function quemSomosFallbackSections(): LandingSection[] {
  return [
    {
      type: "hero",
      titulo: "Grupo Real",
      texto:
        "<p>O <strong>Grupo REAL</strong> reúne marcas que transformam desafios em oportunidades. Descubra nosso compromisso com a <strong>qualidade e sustentabilidade.</strong></p>",
    },
    {
      type: "depoimento",
      texto:
        "“Aquilo que eu aprendi na juventude, vendo meu pai curar pessoas, hoje nós estamos aplicando nos rebanhos”, Claudio Martins Real, Presidente e Fundador da Grupo Real. ",
      imagem: ClaudioImage,
      ctaRotulo: "Ler mais",
      ctaUrl: "/claudio-martins-real-curriculo",
    },
    {
      type: "info_video",
      titulo: infoSectionsContents.marcas.title,
      conteudo: infoSectionsContents.marcas.content,
      youtube: "https://www.youtube.com/embed/ozdbcqp_FOY",
      inverterDesktop: true,
    },
    {
      type: "atividades",
      titulo: "Nossas Atividades",
      texto: atividadesTexto,
      cards: OurValuesContent.map((item) => ({
        icone: item.img,
        titulo: item.title,
        texto: item.content,
      })),
    },
    ...[
      infoSectionsContents.fundadores,
      infoSectionsContents.nutricao,
      infoSectionsContents.grande_animais,
      infoSectionsContents.homeo_pet,
      infoSectionsContents.laboratorio,
      infoSectionsContents.redeAtendimento,
    ].map((bloco) => ({
      type: "info_imagem" as const,
      titulo: bloco.title,
      conteudo: bloco.content,
      imagem: bloco.img,
      inverterDesktop: bloco.reverseDesktop,
      lerMais: "readMore" in bloco ? Boolean(bloco.readMore) : false,
      centralizarBotao: false,
    })),
    {
      type: "diretoria",
      titulo: "Diretoria",
      membros: members.map((member) => ({
        foto: member.img,
        nome: member.name,
        cargo: member.role,
        bio: member.description ?? "",
        ctaUrl: "ctaLink" in member && typeof member.ctaLink === "string" ? member.ctaLink : undefined,
      })),
    },
    {
      type: "timeline",
      titulo: "A História do Grupo Real",
      eventos: QUEM_SOMOS_TIMELINE_EVENTOS,
    },
    { type: "newsletter" },
  ];
}

export function quemSomosFallback(): LandingPageContent {
  return { secoes: quemSomosFallbackSections() };
}
