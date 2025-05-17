import { LoadNumbersProps } from "@/components/ValuesSection/LoadNumbers";
import img01 from "@/public/icons-slider/batoque-transportadora.png";
import img02 from "@/public/icons-slider/real-h.png";
import img03 from "@/public/icons-slider/logo-cmr-2.png";
import img04 from "@/public/icons-slider/logo-homeo-pet.png";
import img05 from "@/public/icons-slider/cmr-saude.png";
import img06 from "@/public/icons-slider/ciclos-logo.png";

// Sessões das marcas
import iconMarca02 from "@/public/images/logos/homeopet-logo-colorido.webp";
import iconMarca03 from "@/public/images/logos/logo-crm-colorido.webp";
import iconMarca01 from "@/public/images/logos/logo-real-h-colorido.webp";
import imgMarca01 from "@/public/images/home/brand-section/real_h.webp";
import imgMarca03 from "@/public/images/home/brand-section/cmr_saude.webp";
import imgMarca02 from "@/public/images/home/brand-section/homeopet.webp";

// Sessões dos valores
import imgIcon02 from "@/public/images/ciclos_novo.webp";
import imgValor01 from "@/public/images/home/40-anos-de-historia.png";
import imgValor02 from "@/public/images/home/value-section/nova-imagem-ciclos.webp";

import avatar4 from "@/public/images/home/testimonials/avatar-daniel-barbosa.webp";
import avatar3 from "@/public/images/avatar/leonardo-de-carvalho.jpg";
import avatar2 from "@/public/images/avatar/leonardo-pereira.jpg";
import avatar1 from "@/public/images/avatar/sr-claudecir.jpg";

export const ctasLinksHero = [
  { id: "1", anchor: "CONHEÇA NOSSAS MARCAS", link: "#slider-brand", btn_background_color: "bg-blue-600" },

  { id: "2", anchor: "FALE CONOSCO", link: "/contato", btn_background_color: "bg-gray-400" },
];

export const sliderCategoriasHome = [
  {
    id: "1",
    image_url: img01,
    label: "Batoque Transportadora",
    width_card: 180,
    height_card: 180,
  },
  {
    id: "2",
    image_url: img02,
    label: "Grupo Real",
    width_card: 180,
    height_card: 180,
  },
  {
    id: "3",
    image_url: img03,
    label: "CMR",
    width_card: 180,
    height_card: 180,
  },
  {
    id: "4",
    image_url: img04,
    label: "HomeoPet",
    width_card: 180,
    height_card: 180,
  },
  {
    id: "5",
    image_url: img05,
    label: "CMR Saude",
    width_card: 180,
    height_card: 180,
  },
  {
    id: "6",
    image_url: img06,
    label: "Ciclos",
    width_card: 180,
    height_card: 180,
  },
];

export const nossasMarcasInfos = [
  {
    title: "Seu resultado é o nosso compromisso",
    icon: iconMarca01,
    text: "Com quatro décadas de experiência, a Grupo Real se destaca no mercado de nutrição animal, oferecendo soluções eficazes e inovadoras.",
    ctaLink: "#",
    image: imgMarca01,
    badge_text: "NUTRIÇÃO",
    cta: {
      link: "/linhas/real-h",
      anchor: "COMPRE ONLINE",
    },
  },
  {
    title: "Aqui seu ganho é REAL",
    icon: iconMarca03,
    text: "A CMR é uma marca que homenageia o legado do Prof. Dr. Claudio Martins Real. Há 40 anos oferecemos soluções que promovem a saúde, o bem-estar e a produtividade dos animais.",
    ctaLink: "#",
    image: imgMarca03,
    badge_text: "SAÚDE",
    cta: {
      link: "https://www.cmrsaude.com.br/",
      anchor: "COMPRE ONLINE",
      target: "_blank",
    },
    bg_image: "bg-cmr-saude",
    border: true,
  },
  {
    title: "Cuidado de verdade pro seu pet",
    icon: iconMarca02,
    text: "Há mais de 15 anos no mercado, a Homeopet se destaca por oferecer soluções seguras e eficazes para a saúde dos pequenos animais. Nosso compromisso é promover o bem-estar e a qualidade de vida dos pets.",
    ctaLink: "#",
    image: imgMarca02,
    badge_text: "SAÚDE",
    cta: {
      link: "https://www.homeopet.com.br/",
      target: "_blank",
      anchor: "COMPRE ONLINE",
    },
  },
];

export const sectionValoresInfo1 = [
  {
    title: "Construindo gerações reais",
    qtde: 10,
    text: "Há 40 anos, iniciamos uma jornada sobre as terras férteis da agropecuária, movidos por um sonho audacioso: transformar o potencial do campo em realidade, com saúde, bem-estar e prosperidade.",
    image: imgValor01,
    reverter: true,
    cta: {
      link: "/historia",
      anchor: "CONFIRA OS DETALHES DO EVENTO",
    },
  },
];

export const sectionValoresInfo2 = [
  {
    title: "Tratar a natureza como ela merece.",
    qtde: 10,
    image: imgValor02,
    border: false,
    // icon: imgIcon02,
    session_numbers: [
      { qtde: 1_400_000, text: "de lixo destinado para a reciclagem." },
      { qtde: 2_000, text: "de investimentos em energia fotovoltaica. " },
      { qtde: 18, text: "Anos De atuação do Ciclos Reciclagem" },
    ] as LoadNumbersProps[],
    cta: {
      link: "/ambiental",
      anchor: "Saiba mais",
    },
  },
];

export const testimoniaslInfo = [
  {
    testimonial:
      '"Eu sempre digo para os meus amigos: siga as recomendações de um bom técnico. E quando a gente fala de nutrição a gente está falando da Grupo Real".',
    name: "Sr. Claudecir Scarmagnani",
    empresa: "Cliente desde 2001",
    avatar: avatar1,
    videoUrl: "4PHDPnGO22g",
  },
  {
    testimonial:
      '"Tudo que a gente precisou da Real até hoje, que foi solicitado, o pessoal sempre ajudou a gente, Dr. Claudio, pessoal da parte técnica, principalmente, estão mais amiúde aqui com a gente."',
    name: "Leonardo Pereira.",
    empresa: "Grupo ACP filhos e Netos",
    avatar: avatar2,
    videoUrl: "8XliBVCZXVo",
  },
  {
    testimonial:
      '"Trabalhar na Grupo Real é gratificante, tenho orgulho de fazer parte deste time de alta performance, equipe motivada e unida para superar qualquer desafio".',
    name: "Leonardo de Carvalho",
    empresa: "Gerente Comercial - desde 2007 ",
    avatar: avatar3,
    videoUrl: "hdge1p2ve54",
  },
  {
    testimonial:
      '"A Real H está completando 40 anos e eu conheço à 39. (...) Eu usei e com resultado, então eu posso dar o testemunho como produtor."',
    name: "Daniel de Barbosa Ingold",
    empresa: "Diretor-Presidente Agência Estadual Defesa Sanitária Animal e Vegetal (Iagro)",
    avatar: avatar4,
    videoUrl: "",
  },
];
