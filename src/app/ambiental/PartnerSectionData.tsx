import { StaticImageData } from "next/image";
import LeafIcon from "@/public/icons/LeafIcon.svg";
import FazendoPiriquitoLogo from "@/public/images/fazenda-piriquitos.webp";
import GeneticaAditivaLogo from "@/public/images/genetica-aditiva.webp";
import FazendaSantaFe from "@/public/images/fazenda-santa-fe.webp";

interface PartnerDataType {
  title: string;
  subtitle: string;
  content: string;
  btnLink: string;
  btnContent;
  btnIcon: StaticImageData;
  btnColor: "fb_green_button" | "fb_blue_button";
  partnesImages: StaticImageData[];
}

const PartnerData: PartnerDataType = {
  subtitle: "Parceria",
  title: "Fazendas Parceiras",
  content:
    "O Grupo Real, por meio do seu programa de sustentabilidade <strong>Ciclos Grupo Real</strong>, segue ampliando iniciativas voltadas à preservação ambiental e à inovação sustentável no agronegócio. O programa possui parcerias estratégicas com propriedades de destaque, como a <strong>Genética Aditiva</strong>, a <strong>Fazenda Santa Fé do Corixinho</strong>, no Pantanal, e a <strong>Fazenda Periquitos</strong>, reforçando seu compromisso com a gestão responsável de resíduos e o reaproveitamento de materiais no campo.",
  btnLink: "#",
  btnContent: "LER MAIS",
  btnIcon: LeafIcon,
  btnColor: "fb_green_button",
  partnesImages: [FazendoPiriquitoLogo, GeneticaAditivaLogo, FazendaSantaFe],
};

export { PartnerData };
