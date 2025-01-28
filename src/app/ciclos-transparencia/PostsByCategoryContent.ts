import { StaticImageData } from "next/image";
import CiclosLogo from "@/public/icons/ciclos-icon.svg";

// Examples
import GptwWhite from "@/public/images/transparencia/gtpw-white.webp";
import AmigaDosAnimais from "@/public/images/transparencia/amiga-dos-animais.webp";
import EuRecicloSelo from "@/public/images/transparencia/eu-reciclo-selo.webp";

type Post = {
  icon?: StaticImageData;
  title: string;
  content: string;
  img: StaticImageData;
  link?: string;
};

interface PostsByCategoryProps {
  title: string;
  subtitle: string;
  subtitleIcon: StaticImageData;
  posts: Post[];
}

const ContentPostsByCategory: PostsByCategoryProps = {
  title: "Nossas certificações e reconhecimentos",
  subtitle: "Certificações",
  subtitleIcon: CiclosLogo,
  posts: [
    {
      title: "Selo GPTW",
      content:
        "Somos certificados pela GPTW como um ótimo lugar para se trabalhar",
      img: GptwWhite,
    },
    {
      title: "Selo Empresa Amiga dos Animais",
      content:
        "O Selo Empresa Amiga dos Animais é concedido em reconhecimento público às ações de responsabilidade social desenvolvidas por empresas privadas, no intuito de contribuir para a defesa, a saúde e a melhoria da qualidade de vida dos animais.",
      img: AmigaDosAnimais,
    },
    {
      title: "Selo Eu Reciclo",
      content:
        "Desde 2020 o Grupo Real H faz parte das empresas com o selo Eu Reciclo, gerando impactos positivos da compensação ambiental das embalagens geradas pela empresa. As ações contribuem para a preservação do meio ambiente, além de impulsionar o desenvolvimento social e financeiro.",
      img: EuRecicloSelo,
    }
  ],
};

export { ContentPostsByCategory };
