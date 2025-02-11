import FeatureSection from "@/components/Layout/FeatureSection";
import HeroSection from "@/components/Layout/HeroSection";
import InfoSection from "@/components/Layout/InfoSection";
import Image from "next/image";
import React from "react";

import CiclosClean from "@/public/images/ciclos-clean.webp";
import EticaLegalidade from "@/public/images/transparencia/etica-legalidade.webp";
import EuReciclo from "@/public/images/transparencia/eu-reciclo.webp";
import Lgpd from "@/public/images/transparencia/lgpd.webp";
import ManAndDog from "@/public/images/transparencia/man-and-dog.webp";
import TransparenciaEtica from "@/public/images/transparencia/transparencia-etica.webp";

import InifiniteCarousel from "@/components/Layout/InfiniteCarousel/InfiniteCarousel";
import { InfiniteCarouselItems } from "./InfiniteCarouselItems";

import PostsByCategory from "@/components/Layout/PostsByCategory/PostsByCategory";
import { Metadata } from "next";
import { ContentPostsByCategory } from "./PostsByCategoryContent";

export const metadata: Metadata = {
  title: "Ciclos: Transparência - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Ciclos: Transparência - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/ciclos-transparencia",
    languages: {
      pt: "https://gruporealbr.com.br",
    }
  }
};

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
        <div className="flex flex-col gap-5">
          <div>
            <Image src={CiclosClean} alt={"ciclo logo"} width={360}></Image>
            <h1 className="flex flex-col text-white text-bold py-4">
              <strong className="text-3xl lg:text-5xl">Clareza que inspira confiança. </strong>
              <strong className="text-3xl lg:text-5xl">Ética que transforma tudo.</strong>
            </h1>
          </div>
          <div>{/* <BtnCallToAction color={"fb_green_button"} ctaLink={"#"} content={"Saiba Mais"} /> */}</div>
        </div>
      </HeroSection>
      <InifiniteCarousel items={InfiniteCarouselItems} />

      <CardSection>
        <InfoSection
          badge={"Ética"}
          border={false}
          reverseDesktop={true}
          reverseMobile={false}
          title={"Transparência"}
          content={
            "<p>No <strong>Grupo Real</strong>, a transparência representa também valores como honestidade e ética. A empresa adota práticas rigorosas para garantir que todas as decisões sejam tomadas de forma justa. Através de comitês independentes para assuntos como assédio e proteção de dados, auditorias regulares e políticas claras, o <strong>Grupo Real</strong> assegura a conformidade com leis e regulamentos, promovendo uma <strong>gestão sustentável e responsável</strong>.</p>"
          }
          imagePath={TransparenciaEtica}
          // ctaLink={"#"}
          imageMidFullContainer={true}
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
          content={'<p>O <strong>Grupo Real</strong> reafirma seu compromisso com a sustentabilidade por meio de a&ccedil;&otilde;es voltadas para o Eixo de Transpar&ecirc;ncia do Programa Ciclos. Um dos exemplos mais significativos &eacute; sua parceria com o programa <strong>"eureciclo"</strong>, que promove a compensa&ccedil;&atilde;o ambiental das embalagens utilizadas em seus produtos, gerando impacto positivo tanto para o meio ambiente quanto para o desenvolvimento social e financeiro de comunidades em todo o pa&iacute;s.</p><p>Essa parceria vai al&eacute;m da simples compensa&ccedil;&atilde;o de res&iacute;duos. Ao investir diretamente na cadeia de reciclagem, o Grupo Real fortalece cooperativas de catadores e operadores de reciclagem, promovendo a economia circular e oferecendo melhores condi&ccedil;&otilde;es para os trabalhadores envolvidos. Essa iniciativa demonstra a responsabilidade do Grupo com o cumprimento da Pol&iacute;tica Nacional de Res&iacute;duos S&oacute;lidos, garantindo seguran&ccedil;a jur&iacute;dica e transpar&ecirc;ncia em suas opera&ccedil;&otilde;es.</p><p>O Relat&oacute;rio de Impacto eureciclo &eacute; uma ferramenta poderosa que tangibiliza os resultados das a&ccedil;&otilde;es realizadas pelo Grupo Real, evidenciando o impacto socioambiental e os avan&ccedil;os obtidos. Mais do que uma exig&ecirc;ncia legal, o relat&oacute;rio &eacute; uma prova do compromisso do Grupo em criar um futuro sustent&aacute;vel, equilibrando a preserva&ccedil;&atilde;o do meio ambiente e o desenvolvimento socioecon&ocirc;mico.</p><p>Desde 2020, a parceria com o programa eureciclo permite que o Grupo Real n&atilde;o apenas reduza sua pegada ambiental, mas tamb&eacute;m lidere iniciativas transformadoras, posicionando-se como uma protagonista em sustentabilidade.</p>'}
          imagePath={EuReciclo}
          imageMidFullContainer={false}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
          readMore={true}
        />
      </CardSection>

      <FeatureSection
        backgroundClass="bg-green-featured"
        badge={"Reconhecimento"}
        title={"Selo Empresa Amiga dos Animais"}
        content="O Grupo Real foi reconhecido, em 8 de julho de 2024, com o Selo Empresa Amiga dos Animais, uma honraria concedida pela Secretaria do Bem-Estar Animal (SUBEA) da Prefeitura de Campo Grande, MS. O selo, instituído pela Lei 6.472 de 26 de junho de 2020, destaca as ações de responsabilidade social realizadas por empresas privadas que contribuem ativamente para a defesa, saúde e qualidade de vida dos animais."
        infoSectionImagePath={ManAndDog}
        infoSectionBorder={false}
        infoSectionReverseDesktop={true}
        infoSectionContent={
          "<p>O reconhecimento reflete o compromisso do Grupo Real com práticas que promovem o bem-estar animal, alinhando-se aos valores de sustentabilidade e cuidado integral que estão no centro de suas iniciativas. O selo também reforça a dedicação da empresa em atuar de forma ética e socialmente responsável, impactando positivamente não apenas os animais, mas também as comunidades ao seu redor.</p><p>Essa conquista é mais uma evidência do papel protagonista do Grupo Real na construção de um futuro mais equilibrado, sustentável e comprometido com a preservação da vida animal.</p>"
        }
        infoSectionColor={"fb_green_button"}
        infoSectionImageMidFullContainer={true}
        // infoSectionCtaLink="#"
        infoSectionContentButton={"Ler Mais"}
      />

      <section className="bg-[#F6F6F6] py-4 lg:py-8">
        <PostsByCategory
          title={ContentPostsByCategory.title}
          subtitle={ContentPostsByCategory.subtitle}
          subtitleIcon={ContentPostsByCategory.subtitleIcon}
          centerTitle={true}
          posts={ContentPostsByCategory.posts}
          clampPostContent={false}
        />
      </section>

      <CardSection>
        <InfoSection
          badge={"Ética"}
          border={false}
          reverseDesktop={false}
          reverseMobile={false}
          title={"Ética e Compromisso com a Legalidade"}
          content={
            "<p>O <strong>Eixo de Transparência do Ciclos</strong>, o Programa de Sustentabilidade do Grupo Real, reflete o compromisso da empresa com a ética, a <strong>legalidade e a responsabilidade social</strong> em todas as suas ações. Esse pilar é sustentado por iniciativas como o Comitê de Ética e os Canais de Ética, que promovem a transparência nas operações e <strong>fortalecem a confiança de colaboradores, clientes e parceiros</strong>.</p><p>O <strong>Comit&ecirc; de &Eacute;tica</strong> do Grupo Real &eacute; composto por um grupo de profissionais qualificados e independentes, com autonomia para atuar em defesa da &eacute;tica e da legalidade. Esse comit&ecirc; segue as melhores pr&aacute;ticas de <em>compliance</em>, baseando suas decis&otilde;es no respeito &agrave;s legisla&ccedil;&otilde;es vigentes e aos termos de aceite firmados pelos colaboradores. Al&eacute;m disso, o Comit&ecirc; de &Eacute;tica opera em alinhamento com o C&oacute;digo de Conduta da empresa, garantindo que cada a&ccedil;&atilde;o reflita os valores do Grupo Real.</p><p>Os <strong>Canais de &Eacute;tica</strong>, administrados pela Contato Seguro, uma empresa terceirizada e independente, s&atilde;o ferramentas essenciais para promover a transpar&ecirc;ncia e a integridade no ambiente corporativo. Por meio desses canais, qualquer pessoa pode denunciar comportamentos inadequados, como ass&eacute;dio, bullying, fraudes e outras irregularidades. As manifesta&ccedil;&otilde;es s&atilde;o tratadas com total isen&ccedil;&atilde;o e sigilo, recebendo triagem, an&aacute;lise e recomenda&ccedil;&otilde;es de provid&ecirc;ncias que s&atilde;o deliberadas pelo Comit&ecirc; de &Eacute;tica.</p><p>Grupo Real mantem uma ampla campanha para divulgar os Canais de &Eacute;tica entre seus colaboradores e parceiros. A a&ccedil;&atilde;o inclui a entrega de folders informativos, fixa&ccedil;&atilde;o de cartazes em &aacute;reas comuns, comunica&ccedil;&otilde;es via e-mail e plataformas de comunica&ccedil;&atilde;o, entre outros. Essa mobiliza&ccedil;&atilde;o refor&ccedil;ou o compromisso da empresa com a transpar&ecirc;ncia e a cria&ccedil;&atilde;o de um ambiente de trabalho seguro e &eacute;tico.</p>"
          }
          imagePath={EticaLegalidade}
          imageMidFullContainer={false}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
          readMore={true}
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
            '<p>No Eixo de Transparência do Ciclos, o Grupo Real também garante a proteção e o respeito aos dados de seus usuários, reforçando seu compromisso com a privacidade e a conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). A empresa adota práticas claras e acessíveis sobre o uso de cookies em seus websites, proporcionando aos usuários controle total sobre as informações coletadas.</p><a href="/politica-de-cookies/" class="underline">Acesse aqui nossa política de cookies.</a><p>Os cookies, pequenos arquivos enviados pelo site para o navegador do usu&aacute;rio, s&atilde;o usados para oferecer uma experi&ecirc;ncia de navega&ccedil;&atilde;o personalizada, como lembrar prefer&ecirc;ncias, armazenar itens no carrinho de compras e permitir an&uacute;ncios direcionados. Para garantir total transpar&ecirc;ncia, o Grupo Real classifica os cookies em categorias, como cookies necess&aacute;rios, de funcionalidade, anal&iacute;ticos e de publicidade, detalhando suas finalidades e os per&iacute;odos de reten&ccedil;&atilde;o das informa&ccedil;&otilde;es.</p><p>Al&eacute;m disso, o Grupo Real oferece ferramentas que permitem ao usu&aacute;rio gerenciar os cookies diretamente no site, nos navegadores ou por meio de dispositivos m&oacute;veis. &Eacute; poss&iacute;vel ativar a op&ccedil;&atilde;o "N&atilde;o Rastrear" no navegador, refor&ccedil;ando a autonomia do usu&aacute;rio sobre o rastreamento de sua navega&ccedil;&atilde;o.</p><p>A pol&iacute;tica de cookies est&aacute; dispon&iacute;vel no website da empresa, incluindo uma lista detalhada dos cookies utilizados e suas finalidades, como os cookies do dom&iacute;nio <strong>lojavirtual.realh.com.br</strong> e integra&ccedil;&otilde;es com plataformas como Google e Facebook. Essa abordagem, al&eacute;m de garantir a conformidade legal, refor&ccedil;a o compromisso do Grupo Real em estabelecer rela&ccedil;&otilde;es de confian&ccedil;a com seus p&uacute;blicos, promovendo pr&aacute;ticas &eacute;ticas e respons&aacute;veis.</p><p>Para d&uacute;vidas ou informa&ccedil;&otilde;es adicionais, os usu&aacute;rios podem entrar em contato com o Encarregado de Prote&ccedil;&atilde;o de Dados por meio do e-mail <strong><a rel="noopener" href="mailto:lgpd@realh.com.br">lgpd@realh.com.br</a></strong> ou acessar o Portal da Privacidade dispon&iacute;vel nos sites do Grupo.</p><p>Essa pol&iacute;tica demonstra como o Grupo Real une tecnologia e responsabilidade, promovendo uma experi&ecirc;ncia digital segura e transparente para seus usu&aacute;rios, em alinhamento com os princ&iacute;pios &eacute;ticos e sustent&aacute;veis do Programa Ciclos.</p>'
          }
          imagePath={Lgpd}
          color={"fb_green_button"}
          contentButton={"Ler Mais"}
          readMore={true}
        />
      </CardSection>
    </>
  );
}
