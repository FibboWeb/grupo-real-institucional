import { LoadNumbersProps } from "@/components/ValuesSection/LoadNumbers";
import img01 from "@/public/icons-slider/linha-01.webp";
import img02 from "@/public/icons-slider/linha-02.webp";
import img03 from "@/public/icons-slider/linha-03.webp";
import img04 from "@/public/icons-slider/linha-04.webp";
import img05 from "@/public/icons-slider/linha-05.webp";

// Sessões das marcas
import imgMarca01 from "@/public/images/moca-e-cavalo.webp";
import imgMarca02 from "@/public/images/mulher-segurando-cachorro.webp";
import imgMarca03 from "@/public/images/veterinaria-e-fazendeiro-_1_.webp";
import iconMarca01 from "@/public/images/logos/logo-real-h-colorido.webp";
import iconMarca02 from "@/public/images/logos/homeopet-logo-colorido.webp";
import iconMarca03 from "@/public/images/logos/logo-crm-colorido.webp";

// Sessões dos valores
import imgIcon02 from "@/public/images/ciclos_novo.webp";
import imgValor01 from "@/public/images/home/40-anos-de-historia.webp";
import imgValor02 from "@/public/images/imagem_ambiental.webp";

import avatar3 from "@/public/images/avatar/leonardo-de-carvalho.jpg";
import avatar2 from "@/public/images/avatar/leonardo-pereira.jpg";
import avatar1 from "@/public/images/avatar/sr-claudecir.jpg";

export const ctasLinksHero = [
  { id: "1", anchor: "CONHEÇA NOSSAS MARCAS", link: "/learn-more", btn_background_color: "bg-blue-600" },

  { id: "2", anchor: "FALE CONOSCO", link: "/get-started", btn_background_color: "bg-gray-400" },
];

export const sliderCategoriasHome = [
  {
    id: "1",
    label: "Linha Nutrição",
    url: "/linhas/real-h/",
    image_url: img01,
  },
  {
    id: "2",
    label: "Linha Saúde",
    url: "/linhas/cmr/",
    image_url: img02,
  },
  {
    id: "3",
    label: "Homeopet",
    url: "/linhas/homeopet/",
    image_url: img03,
  },
  {
    id: "4",
    label: "Linha Equino H",
    url: "/linhas/real-h/",
    image_url: img04,
  },
  {
    id: "5",
    label: "Linha MD",
    url: "/linhas/cmr/",
    image_url: img05,
  },
];

export const nossasMarcasInfos = [
  {
    title: "Seu resultado é o nosso compromisso",
    icon: iconMarca01,
    text: "Com quatro décadas de experiência, a REAL H se destaca no mercado de nutrição animal, oferecendo soluções eficazes e inovadoras.",
    ctaLink: "#",
    image: imgMarca01,
    badge_text: "NUTRIÇÃO",
    cta: {
      link: "#",
      anchor: "IR PARA A LOJA",
    },
  },
  {
    title: "Cuidado de verdade pro seu pet é com a HomeoPet",
    icon: iconMarca02,
    text: "Com 15 anos de experiência, a Homeopet se destaca por oferecer soluções seguras e eficazes para a saúde dos pequenos animais. Nosso compromisso é promover o bem-estar e a qualidade de vida dos pets.",
    ctaLink: "#",
    image: imgMarca02,
    badge_text: "SAÚDE",
    cta: {
      link: "#",
      anchor: "IR PARA A LOJA",
    },
  },
  {
    title: "Aqui seu ganho é REAL",
    icon: iconMarca03,
    text: "A CMR é uma marca que homenageia o legado do Prof. Dr. Claudio Martins Real. Com mais de 40 anos de experiência, oferecemos soluções que promovem a saúde e o bem-estar dos animais.",
    ctaLink: "#",
    image: imgMarca03,
    badge_text: "SAÚDE",
    cta: {
      link: "#",
      anchor: "IR PARA A LOJA",
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
    icon: imgIcon02,
    session_numbers: [
      { qtde: 330, text: "Empregos diretos" },
      { qtde: 1_500, text: "Empregos indireto" },
      { qtde: 200_000, text: "Clientes atendidos" },
    ] as LoadNumbersProps[],
  },
];

export const testimoniaslInfo = [
  {
    testimonial:
      "Eu sempre digo para os meus amigos: siga as recomendações de um bom técnico. E quando a gente fala de nutrição a gente está falando da Real H",
    name: "Sr. Claudecir Scarmagnani",
    empresa: "Cliente desde 2001",
    avatar: avatar1,
  },
  {
    testimonial:
      "Tudo que a gente precisou da Real até hoje, que foi solicitado, o pessoal sempre ajudou a gente, Dr. Claudio, pessoal da parte técnica, principalmente, estão mais amiúde aqui com a gente",
    name: "Leonardo Pereira",
    empresa: "Grupo ACP filhos e Netos",
    avatar: avatar2,
  },
  {
    testimonial:
      "Trabalhar na Real H é gratificante, tenho orgulho de fazer parte deste time de alta performance, equipe motivada e unida para superar qualquer desafio",
    name: "Leonardo de Carvalho",
    empresa: "Gerente Comercial - desde 2007 ",
    avatar: avatar3,
  },
];
