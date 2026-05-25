import { StaticImageData } from "next/image";
import CiclosLogo from "@/public/icons/ciclos-icon.svg";

import SeloEsgFiems from "@/public/images/transparencia/selo-esg-fiems.png";
import SeloVerde2026Ambiental from "@/public/images/transparencia/selo-verde-2026.png";
import SeloVerde2026Produto from "@/public/images/transparencia/selo-verde-2026-produto-ecologico.png";
import SeloAgroMaisIntegridade from "@/public/images/transparencia/selo-agro-mais-integridade.png";
import SeloGreatPlaceToWork from "@/public/images/transparencia/selo-great-place-to-work.png";
import EmpresaLixoZeroCertificada from "@/public/images/transparencia/empresa-lixo-zero-certificada.png";
import SeloEureciclo from "@/public/images/transparencia/selo-eureciclo.png";

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
      title: "Selo ESG FIEMS",
      content:
        "O Grupo Real foi a primeira empresa a receber o Selo ESG FIEMS, consolidando sua posição de referência em práticas ambientais, sociais e de governança em Mato Grosso do Sul.\n\nEsse reconhecimento evidencia uma gestão estratégica orientada à sustentabilidade, com ações consistentes que promovem responsabilidade corporativa, transparência e geração de valor para toda a cadeia do agro.",
      img: SeloEsgFiems,
    },
    {
      title: "Selo Verde 2026 – Ambientalmente Responsável",
      content:
        "O Grupo Real foi reconhecido com o Selo Verde 2026 na categoria Ambientalmente Responsável, destacando suas práticas voltadas à preservação dos recursos naturais e redução de impactos ambientais.\n\nAs ações reforçam o compromisso com a sustentabilidade, por meio do uso consciente de insumos, gestão eficiente de resíduos e adoção de tecnologias que contribuem para um agro mais equilibrado.",
      img: SeloVerde2026Ambiental,
    },
    {
      title: "Selo Verde 2026 – Produto Ecologicamente Correto",
      content:
        "O Selo Verde 2026 na categoria Produto Ecologicamente Correto reconhece o desenvolvimento de soluções alinhadas à sustentabilidade e ao respeito ao meio ambiente.\n\nEsse reconhecimento evidencia o investimento contínuo do Grupo Real em inovação, garantindo produtos seguros, eficientes e com menor impacto ambiental ao longo de seu ciclo de vida.",
      img: SeloVerde2026Produto,
    },
    {
      title: "Agro+ Integridade (MAPA)",
      content:
        "O Grupo Real participa do programa Agro+ Integridade, do Ministério da Agricultura e Pecuária, que reconhece empresas comprometidas com ética, transparência e boas práticas de governança.\n\nA adesão reforça a atuação responsável da empresa, baseada na integridade dos processos e no respeito às normas, contribuindo para um ambiente de negócios mais confiável no setor agropecuário.",
      img: SeloAgroMaisIntegridade,
    },
    {
      title: "Great Place to Work",
      content:
        "O Grupo Real é certificado como Great Place to Work, reconhecimento que destaca a qualidade do ambiente de trabalho e a confiança construída com seus colaboradores.\n\nA certificação reflete uma cultura organizacional sólida, baseada no respeito, valorização das pessoas e incentivo ao desenvolvimento profissional contínuo.",
      img: SeloGreatPlaceToWork,
    },
    {
      title: "Instituto Lixo Zero Brasil",
      content:
        "O Grupo Real possui certificação do Instituto Lixo Zero Brasil, evidenciando seu compromisso com a gestão eficiente de resíduos e a redução do envio de materiais para aterros sanitários.\n\nPor meio de práticas estruturadas de reciclagem, reaproveitamento e conscientização, a empresa contribui diretamente para a sustentabilidade ambiental e para a construção de uma economia mais circular.",
      img: EmpresaLixoZeroCertificada,
    },
    {
      title: "Certificação Lixo Zero",
      content:
        "Alcançamos 98,1% de destinação correta de resíduos de aterro e incineração, um resultado de excelência que comprova, na prática, o nosso compromisso com a sustentabilidade.",
      img: SeloEureciclo,
    },
  ],
};

export { ContentPostsByCategory };
