import { StaticImageData } from "next/image";
import CiclosLogo from "@/public/icons/ciclos-icon.svg";
// Icons
import ReciclagemWhiteIcon from "@/public/icons/reciclagem-icon-white.svg";
import CiclosEnergiaSolarIcon from "@/public/icons/ciclos-energia-solar.svg";
import CiclosEletronicosIcon from "@/public/icons/ciclos-eletronicos.svg";

// Examples
import ImgExample from "@/public/images/img-example.webp";
import ImgExample2 from "@/public/images/img-example-2.webp";
import ImgExample3 from "@/public/images/img-example-3.webp";

type Post = {
  icon: StaticImageData;
  title: string;
  content: string;
  img: StaticImageData;
  link: string;
};

interface PostsByCategoryProps {
  title: string;
  subtitle: string;
  subtitleIcon: StaticImageData;
  posts: Post[];
}

const ContentPostsByCategory: PostsByCategoryProps = {
  title: "Tratando a Natureza como Ela Merece !",
  subtitle: "Ciclos",
  subtitleIcon: CiclosLogo,
  posts: [
    {
      icon: ReciclagemWhiteIcon,
      title: "Reciclagem",
      content:
        "Em mais de 16 anos de ação o Ciclos já coletou,  separou, armazenou e encaminhou para reciclagem mais de 1 milhão de Kg de recicláveis.",
      img: ImgExample,
      link: "#",
    },
    {
      icon: CiclosEnergiaSolarIcon,
      title: "Ciclos Energia Solar",
      content:
        "A Real H investiu cerca de R$ 2 milhões para a implantação de placas para a geração de energia fotovoltaicas em suas unidades industriais.",
      img: ImgExample2,
      link: "#",
    },
    {
      icon: CiclosEletronicosIcon,
      title: "Ciclos Eletrônicos",
      content:
        "Os equipamentos que são substituídos, como computadores e celulares, são doados para instituições, universidades ou empresas especializadas em reaproveitamento desses materiais;Os equipamentos que são substituídos, como computadores e celulares, são doados para instituições, universidades ou empresas especializadas em reaproveitamento desses materiais;",
      img: ImgExample3,
      link: "#",
    },
    {
      icon: ReciclagemWhiteIcon,
      title: "Reciclagem",
      content:
        "Em mais de 16 anos de ação o Ciclos já coletou,  separou, armazenou e encaminhou para reciclagem mais de 1 milhão de Kg de recicláveis.",
      img: ImgExample,
      link: "#",
    },
    {
      icon: CiclosEnergiaSolarIcon,
      title: "Ciclos Energia Solar",
      content:
        "A Real H investiu cerca de R$ 2 milhões para a implantação de placas para a geração de energia fotovoltaicas em suas unidades industriais.",
      img: ImgExample2,
      link: "#",
    },
    {
      icon: CiclosEletronicosIcon,
      title: "Ciclos Eletrônicos",
      content:
        "Os equipamentos que são substituídos, como computadores e celulares, são doados para instituições, universidades ou empresas especializadas em reaproveitamento desses materiais;",
      img: ImgExample3,
      link: "#",
    },
  ],
};

export { ContentPostsByCategory };
