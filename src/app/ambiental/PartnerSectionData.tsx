import { StaticImageData } from "next/image";
import LeafIcon from "@/public/icons/LeafIcon.svg";
import FazendoPiriquitoLogo from "@/public/images/periquitos.webp";
import GeneticaAditivaLogo from "@/public/images/genetica.webp";
import FazendaSantaFe from "@/public/images/REALH_bannerSANTAFEDOCORIXINHO.jpg";

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
    "<p>O Grupo Real, por meio do seu programa de sustentabilidade <strong>Ciclos Grupo Real</strong>, segue ampliando iniciativas voltadas à preservação ambiental e à inovação sustentável no agronegócio. O programa possui parcerias estratégicas com propriedades de destaque, como a <strong>Genética Aditiva</strong>, a <strong>Fazenda Santa Fé do Corixinho</strong>, no Pantanal, e a <strong>Fazenda Periquitos</strong>, reforçando seu compromisso com a gestão responsável de resíduos e o reaproveitamento de materiais no campo.</p><p>Essas colabora&ccedil;&otilde;es s&atilde;o parte de um esfor&ccedil;o cont&iacute;nuo para transformar o setor agropecu&aacute;rio em um modelo de sustentabilidade. As fazendas parceiras j&aacute; implementaram pr&aacute;ticas de reciclagem, possibilitando a destina&ccedil;&atilde;o correta de res&iacute;duos s&oacute;lidos e a conscientiza&ccedil;&atilde;o de colaboradores sobre a import&acirc;ncia de a&ccedil;&otilde;es ambientalmente respons&aacute;veis.</p><p>O Ciclos Real H fornece suporte t&eacute;cnico e promove campanhas educativas para engajar os parceiros na ado&ccedil;&atilde;o de solu&ccedil;&otilde;es sustent&aacute;veis. Essas a&ccedil;&otilde;es v&atilde;o desde o reaproveitamento de res&iacute;duos at&eacute; iniciativas que refor&ccedil;am a economia circular nas opera&ccedil;&otilde;es agropecu&aacute;rias, reduzindo os impactos ambientais.</p><p>Com estas parcerias, o Grupo Real reafirma sua lideran&ccedil;a no desenvolvimento de um agroneg&oacute;cio mais sustent&aacute;vel, provando que a uni&atilde;o de for&ccedil;as entre empresas e fazendas pode criar um futuro mais respons&aacute;vel e inovador.</p>",
  btnLink: "#",
  btnContent: "LER MAIS",
  btnIcon: LeafIcon,
  btnColor: "fb_green_button",
  partnesImages: [FazendoPiriquitoLogo, GeneticaAditivaLogo, FazendaSantaFe],
};

export { PartnerData };
