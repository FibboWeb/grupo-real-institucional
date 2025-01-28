import React from "react";
import Image from "next/image";
import InfoSection from "@/components/Layout/InfoSection";
import EticaLegalidade from "@/public/images/transparencia/etica-legalidade.webp";
import EuReciclo from "@/public/images/transparencia/eu-reciclo.webp";
import Lgpd from "@/public/images/transparencia/lgpd.webp";
import TransparenciaEtica from "@/public/images/transparencia/transparencia-etica.webp";
import CiclosClean from "@/public/images/ciclos-clean.webp";
import HeroSection from "@/components/Layout/HeroSection";
import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";
import FeatureSection from "@/components/Layout/FeatureSection";

export default function CiclosTransparencia() {
  function CardSection({ children }: { children: React.ReactNode }) {
    return (
      <div className="text-fb_text_gray relative">
        <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">{children}</div>
      </div>
    );
  }

  return (
    <>
      <HeroSection backgroundClass={"bg-hero-green-leafs"} imageMaxHeight={420}>
        <div>
          <Image src={CiclosClean} alt={"ciclo logo"} width={360}></Image>
          <h1 className="flex flex-col text-white text-bold py-4">
            <strong className="text-3xl lg:text-5xl">Clareza que inspira confiança. </strong>
            <strong className="text-3xl lg:text-5xl">Ética que transforma tudo.</strong>
          </h1>
          <BtnCallToAction color={"fb_green_button"} ctaLink={"#"} content={"Saber Mais"} />
        </div>
      </HeroSection>

      <CardSection>
        <InfoSection
          badge={"Ética"}
          border={false}
          reverseDesktop={true}
          reverseMobile={false}
          title={"Transparência"}
          content={
            "<p>No <strong>Grupo Real</strong>, a transparência representa também valores como honestidade e ética. A empresa adota práticas rigorosas para garantir que todas as decisões sejam tomadas de forma justa. Através de comitês independentes para assuntos como assédio e proteção de dados, auditorias regulares e políticas claras, o <strong>Grupo Real H</strong> assegura a conformidade com leis e regulamentos, promovendo uma <strong>gestão sustentável e responsável</strong>.</p>"
          }
          imagePath={TransparenciaEtica}
          ctaLink={"#"}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
        />
      </CardSection>

      <CardSection>
        <InfoSection
          heroBgImage={"bg-hero-section-gray-palms"}
          badge="Reciclagem"
          border={false}
          reverseDesktop={false}
          reverseMobile={false}
          title={"Programa “eureciclo”"}
          content={
            "<p>O <strong>Grupo Real</strong> reafirma seu compromisso com a sustentabilidade por meio de ações voltadas para o <strong>Eixo de Transparência do Programa Ciclos</strong>. Um dos exemplos mais significativos é sua parceria com o programa “eureciclo”, que promove a compensação ambiental das embalagens utilizadas em seus produtos, gerando <strong>impacto positivo tanto para o meio ambiente</strong> quanto para o desenvolvimento social e financeiro de comunidades em todo o país.</p>"
          }
          imagePath={EuReciclo}
          imageMidFullContainer={true}
          ctaLink={"#"}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
        />
      </CardSection>

      <CardSection>
        <FeatureSection
          badge={"Reconhecimento"}
          title={"Selo Empresa Amiga dos Animais"}
          content="O Grupo Real foi reconhecido, em 8 de julho de 2024, com o Selo Empresa Amiga dos Animais, uma honraria concedida pela Secretaria do Bem-Estar Animal (SUBEA) da Prefeitura de Campo Grande, MS. O selo, instituído pela Lei 6.472 de 26 de junho de 2020, destaca as ações de responsabilidade social realizadas por empresas privadas que contribuem ativamente para a defesa, saúde e qualidade de vida dos animais."
        >
          <InfoSection
            badge={"Social"}
            title={"Ciclos e o Esporte"}
            content={
              "<p>O Eixo Social do Ciclos Real H também se estende ao incentivo ao esporte como ferramenta de inclusão, superação e inspiração. Como parte desse compromisso, o Grupo patrocina Fernando Rufino, campeão mundial e paralímpico de paracanoagem, um verdadeiro exemplo de resiliência e conquista. Conhecido como “Cowboy de Aço”, Rufino carrega consigo valores de determinação e força que se alinham aos princípios do Grupo Real, servindo como inspiração para colaboradores e comunidades.</p>"
            }
            color={"fb_green_button"}
            imageMidFullContainer={true}
            ctaLink="#"
            contentButton={"Ler Mais"}
          />
        </FeatureSection>
      </CardSection>

      <CardSection>
        <InfoSection
          badge={"Ética"}
          border={false}
          reverseDesktop={false}
          reverseMobile={false}
          title={"Ética e Compromisso com a Legalidade"}
          content={
            "<p>O <strong>Eixo de Transparência do Ciclos</strong>, o Programa de Sustentabilidade do Grupo Real, reflete o compromisso da empresa com a ética, a <strong>legalidade e a responsabilidade social</strong> em todas as suas ações. Esse pilar é sustentado por iniciativas como o Comitê de Ética e os Canais de Ética, que promovem a transparência nas operações e <strong>fortalecem a confiança de colaboradores, clientes e parceiros</strong>.</p>"
          }
          imagePath={EticaLegalidade}
          imageMidFullContainer={true}
          ctaLink={"#"}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
        />
      </CardSection>

      <CardSection>
        <InfoSection
          badge={"LGPD"}
          heroBgImage={"bg-hero-section-gray"}
          border={false}
          reverseDesktop={true}
          reverseMobile={false}
          title={"Transparência no Uso de Cookies e Dados Pessoais"}
          content={
            '<p>No Eixo de Transparência do Ciclos, o Grupo Real também garante a proteção e o respeito aos dados de seus usuários, reforçando seu compromisso com a privacidade e a conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). A empresa adota práticas claras e acessíveis sobre o uso de cookies em seus websites, proporcionando aos usuários controle total sobre as informações coletadas.</p><a href="/politica-de-cookies/">Acesse aqui nossa política de cookies.</a>'
          }
          imagePath={Lgpd}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
        />
      </CardSection>
    </>
  );
}
