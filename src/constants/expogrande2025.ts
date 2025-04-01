// Sessões das marcas
import iconMarca03 from "@/public/images/logos/logo-crm-colorido.webp";
import iconMarca01 from "@/public/images/logos/logo-real-h-colorido.webp";
import imgMarca01 from "@/public/images/home/brand-section/real_h.webp";
import imgMarca03 from "@/public/images/home/brand-section/cmr_saude.webp";
import imgValor02 from "@/public/images/home/value-section/nova-imagem-ciclos.webp";

import { LoadNumbersProps } from "@/components/ValuesSection/LoadNumbers";

export const nossasMarcasInfos = [
  {
    title: "Seu resultado é o nosso compromisso",
    icon: iconMarca01,
    text: "O máximo desempenho é alcançado através da Nutrição Funcional da Real H. Seu portfólio de produtos é criteriosamente formulado e fabricado com matérias-primas de excelência. Por meio de um atendimento personalizado, a empresa adota as melhores estratégias nutricionais para alcançar os objetivos de seus clientes.",
    ctaLink: "#",
    image: imgMarca01,
    badge_text: "NUTRIÇÃO",
    cta: {
      link: "/linhas/real-h",
      anchor: "Veja noso catálogo",
    },
  },
  {
    title: "Aqui seu ganho é REAL",
    icon: iconMarca03,
    text: "A CMR Saúde Animal oferece um portfólio amplo de soluções para a pecuária nacional, visando eficiência e excelência. Seus produtos resolvem desafios do campo, com objetivos específicos, excelentes resultados e retorno sobre investimento, reduzindo a necessidade de manejo e otimizando a mão de obra.",
    ctaLink: "#",
    image: imgMarca03,
    badge_text: "SAÚDE",
    cta: {
      link: "/linhas/cmr",
      anchor: "Veja noso catálogo",
    },
    bg_image: "bg-cmr-saude",
    border: true,
  },
];

export const sectionValoresInfoCiclos = [
  {
    title:
      "Produzir mais e melhor também é ser sustentável. Conheça nosso programa de sustentabilidade e faça a melhor escolha.",
    qtde: 10,
    image: imgValor02,
    border: false,
    // icon: imgIcon02,
    session_numbers: [
      { qtde: 1_400_000, text: "De resíduos destinados para a reciclagem" },
      { qtde: 94, text: "De adesão ao programa pelos colaboradores" },
      { qtde: 18, text: "Anos de programa em pleno funcionamento" },
    ] as LoadNumbersProps[],
    cta: {
      link: "/ambiental",
      anchor: "Saiba mais",
    },
  },
];
