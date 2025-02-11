// Hero
import { ChildrenHeroSection } from "./HeroChildren";

// infinite carousel
import InfiniteCarousel from "@/components/Layout/InfiniteCarousel/InfiniteCarousel";
import { InfiniteCarouselItems } from "./InfiniteCarouselItems";

// info
import InfoSection from "@/components/Layout/InfoSection";

// feature
import FeatureSection from "@/components/Layout/FeatureSection";

// newsletter
import Newsletter from "@/components/Layout/Newsletter";

// big number
import BigNumbersSection from "@/components/Layout/BigNumbersSection/BigNumbersSection";
import { BigNumbersItems } from "./BigNumbersItems";
// images
import CartaoMultibeneficioImg from "@/public/images/social/carta-caju.webp";
import CiclosEsportImg from "@/public/images/social/ciclos-e-o-esporte.webp";
import SolidariedadeImg from "@/public/images/social/ciclos-e-solidarieadewebp.webp";
import CompromissoEducacaoImg from "@/public/images/social/compromisso-educacao.webp";
import EixoSocialImg from "@/public/images/social/eixo-social.webp";
import ReconhecimentoImg from "@/public/images/social/reconhecimento.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ciclos: Social - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Ciclos: Social - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/social",
    languages: {
      pt: "https://gruporealbr.com.br",
    }
  }
};

export default function SocialPage() {
  return (
    <>
      <ChildrenHeroSection />
      <InfiniteCarousel items={InfiniteCarouselItems} />
      <InfoSection
        badge="Social"
        title="Eixo Social do Ciclos Grupo Real: Compromisso com Pessoas e Comunidades"
        content="<p>O Ciclos, <strong>Programa de Sustentabilidade</strong> do Grupo Real, é uma iniciativa estruturada que integra ações voltadas para os pilares social, ambiental e de transparência. Dentro desse contexto, o <strong>Eixo Social</strong> desempenha um papel fundamental ao colocar as pessoas no centro das estratégias da empresa, reforçando o compromisso com a valorização humana, a integração e o apoio à sociedade em momentos cruciais.</p><p>A iniciativa reflete o prop&oacute;sito do Grupo de ir al&eacute;m do &acirc;mbito empresarial, assumindo a responsabilidade de promover impacto positivo nas comunidades onde atua, valorizando as pessoas e contribuindo para um futuro mais inclusivo e sustent&aacute;vel.</p>"
        imagePath={EixoSocialImg}
        border={false}
        color="fb_green_button"
        reverseDesktop={true}
        readMore={true}
      />
      <InfoSection
        badge="Social"
        title="Compromisso com a Educação, Pesquisa e Desenvolvimento"
        content="<p>Uma das frentes de atua&ccedil;&atilde;o do <em>Eixo Social do Ciclos</em> &eacute; o incentivo &agrave; educa&ccedil;&atilde;o, &agrave; pesquisa cient&iacute;fica e ao compartilhamento de conhecimento por meio de eventos acad&ecirc;micos e colabora&ccedil;&otilde;es institucionais. O <strong>Grupo Real</strong> investe ativamente em palestras, simp&oacute;sios e debates, al&eacute;m de apoiar pesquisas inovadoras que contribuem para a evolu&ccedil;&atilde;o da ci&ecirc;ncia e da tecnologia no setor agropecu&aacute;rio. Profissionais renomados, como o Dr. Mario Reck Real, especialista em homeopatia veterin&aacute;ria e Diretor T&eacute;cnico Industrial do Grupo, participa diretamente dessas iniciativas, promovendo a forma&ccedil;&atilde;o de futuros profissionais.</p>
          <p>Um exemplo recente desse investimento &eacute; o trabalho cient&iacute;fico realizado na Universidade Federal de Pelotas (UFPEL), que avaliou o uso do <em>Top Vita Baby</em>, um medicamento homeop&aacute;tico produzido pela CMR, marca do Grupo Real, em bezerras da ra&ccedil;a Holandesa. Os resultados foram expressivos: as bezerras tratadas com o <em>Top Vita Baby</em> apresentaram maior crescimento em altura da cernelha e largura de garupa, mesmo sem altera&ccedil;&atilde;o no consumo de leite. Essa pesquisa tamb&eacute;m destacou o papel dos medicamentos homeop&aacute;ticos como alternativa sustent&aacute;vel e livre de res&iacute;duos, em um contexto onde a resist&ecirc;ncia bacteriana global exige solu&ccedil;&otilde;es inovadoras.</p>
          <p>A cria&ccedil;&atilde;o de bezerras &eacute; uma etapa cr&iacute;tica da pecu&aacute;ria leiteira, com desafios relacionados a doen&ccedil;as como diarreia e broncopneumonia, frequentemente tratadas com antimicrobianos. Nesse cen&aacute;rio, o <em>Top Vita Baby</em> demonstrou ser uma solu&ccedil;&atilde;o promissora, alinhando sa&uacute;de animal, produtividade e sustentabilidade.</p>
          <p>Esse e outros investimentos em pesquisa e desenvolvimento refor&ccedil;am o compromisso do Grupo com a inova&ccedil;&atilde;o e com a promo&ccedil;&atilde;o de uma pecu&aacute;ria mais sustent&aacute;vel. Ao integrar ci&ecirc;ncia, tecnologia e pr&aacute;ticas conscientes, a empresa n&atilde;o apenas transforma o setor agropecu&aacute;rio, mas tamb&eacute;m contribui para um futuro mais equilibrado e respons&aacute;vel, consolidando-se como refer&ecirc;ncia em solu&ccedil;&otilde;es de alta performance para a sa&uacute;de e bem-estar animal.</p>"
        imagePath={CompromissoEducacaoImg}
        border={false}
        color="fb_green_button"
        reverseDesktop={false}
        heroBgImage="bg-bg-ciclos"
        readMore={true}
      />
      <InfoSection
        badge="Social"
        title="Cartão Multibenefícios: Investindo na Qualidade de Vida dos Colaboradores"
        content="Outro destaque do <strong>Eixo Social</strong> é o <strong>compromisso com o bem-estar</strong> dos colaboradores por meio de iniciativas como o Cartão Multibenefícios, que oferece um bônus mensal a ser investido em <strong>alimentação, saúde, educação, cultura</strong> e outras áreas que contribuem para a qualidade de vida de cada funcionário."
        imagePath={CartaoMultibeneficioImg}
        border={false}
        color="fb_green_button"
        reverseDesktop={true}
      />
      <FeatureSection
        backgroundClass="bg-green-featured"
        badge="Integração"
        title="Ciclos Integração"
        content="O <strong>Eixo Social</strong> do Ciclos também se dedica a fortalecer o ambiente interno da empresa por meio de ações que promovem <strong>integração e reconhecimento</strong>. O calendário do <strong>Grupo Real</strong> é repleto de datas comemorativas que celebram a fraternidade e o espírito de equipe, como o <strong>Dia do Trabalhador, Dia das Mães, Dia das Crianças</strong> e a tradicional <strong>Confraternização de Final de Ano</strong>. Essas ocasiões são marcadas por eventos especiais, sorteios de brindes e momentos de celebração, que reforçam os laços entre os colaboradores e contribuem para um ambiente de trabalho mais harmônico e motivador."
        infoSectionImagePath={CiclosEsportImg}
        infoSectionBadge="Social"
        infoSectionTitle="Ciclos e o Esporte"
        infoSectionContent="<p>O Eixo Social do <strong>Ciclos Grupo Real</strong> também se estende ao incentivo ao esporte como ferramenta de inclusão, superação e inspiração. Como parte desse compromisso, o Grupo patrocina <strong>Fernando Rufino</strong>, campeão mundial e paralímpico de paracanoagem, um verdadeiro exemplo de resiliência e conquista. Conhecido como “Cowboy de Aço”, Rufino carrega consigo valores de determinação e força que se alinham aos princípios do <strong>Grupo Real</strong>, servindo como inspiração para colaboradores e comunidades.</p><p>O apoio a Rufino reflete o prop&oacute;sito do Grupo de valorizar o esporte n&atilde;o apenas como uma competi&ccedil;&atilde;o, mas como uma ponte para <strong>transformar vidas e promover o bem-estar</strong>. Essa parceria vai al&eacute;m da vit&oacute;ria nas &aacute;guas, simbolizando a capacidade de vencer desafios e ultrapassar barreiras, um conceito que tamb&eacute;m guia as a&ccedil;&otilde;es sociais e o trabalho di&aacute;rio da empresa.</p>"
        infoSectionColor="fb_green_button"
        infoSectionContentButton="Leia mais"
        infoSectionReverseDesktop={true}
        infoSectionBorder={false}
        infoSectionImageMidFullContainer={true}
        infoSectionReadMore={true}
      />

      <InfoSection
        badge="Solidariedade"
        title="Ciclos Solidariedade"
        content="Além disso, em situações de emergência, o <strong>Grupo Real</strong> atua com <strong>agilidade e solidariedade</strong>, como demonstrado durante as enchentes que devastaram o Rio Grande do Sul em 2024. Por meio de parcerias, como com o Conselho Regional de Medicina Veterinária de Mato Grosso do Sul (CRMV-MS), a empresa realizou a <strong>doação de medicamentos para o tratamento de animais resgatados</strong>, reforçando seu compromisso com a sociedade e com o cuidado à vida, humana e animal."
        imagePath={SolidariedadeImg}
        border={false}
        color="fb_green_button"
        reverseDesktop={false}
      />

      <BigNumbersSection items={BigNumbersItems} />

      <InfoSection
        badge="Prêmio Semestral"
        title="Reconhecimento ao Comprometimento dos Colaboradores"
        content="<p>O <strong>Grupo Real</strong> reafirma seu compromisso com a valorização de seus mais de 300 colaboradores por meio do <strong>Prêmio Semestral</strong>, uma iniciativa integrante do <Strong>Eixo Social</strong> do Ciclos, o Programa de Sustentabilidade da empresa. Essa bonificação é concedida nos meses de fevereiro e agosto como forma de <strong>reconhecer o esforço, a dedicação e o alcance das metas</strong> estabelecidas ao longo do semestre.</p><p>Em 2024, o valor total distribu&iacute;do aos colaboradores ultrapassou R$ 900 mil, sendo mais de R$ 450 mil pagos apenas no in&iacute;cio de agosto. O montante &eacute; calculado com base no desempenho individual e no cumprimento das metas coletivas, resultando em valores que podem superar R$ 3 mil por colaborador.</p>
          <p>Para muitos funcion&aacute;rios, como o programador de produ&ccedil;&atilde;o Amauri Gomes Garcia, essa premia&ccedil;&atilde;o equivale a um 14&deg; sal&aacute;rio, trazendo seguran&ccedil;a financeira e permitindo investimentos pessoais. <strong>&ldquo;Vou investir na minha casa, vou fazer uma troca de padr&atilde;o de luz. Ent&atilde;o esse dinheiro vem numa boa hora e ajuda muito&rdquo;</strong>, destacou Amauri.</p>
          <p>O Pr&ecirc;mio Semestral n&atilde;o apenas representa um est&iacute;mulo ao comprometimento e &agrave; produtividade, mas tamb&eacute;m refor&ccedil;a a cultura de valoriza&ccedil;&atilde;o humana promovida pelo Grupo.</p>"
        imagePath={ReconhecimentoImg}
        border={false}
        color="fb_green_button"
        reverseDesktop={false}
        heroBgImage="bg-bg-ciclos"
        readMore={true}
      />
      <InfoSection
        badge="Prêmio Semestral"
        title="Biblioteca Ciclos Conhecimento: Promovendo Leitura e Sustentabilidade"
        content="<p>A <strong>Biblioteca Ciclos Conhecimento</strong> &eacute; mais uma iniciativa inovadora do Grupo Real, criada para incentivar a leitura, a educa&ccedil;&atilde;o e o reaproveitamento de recursos. Com um acervo composto por livros, revistas e DVDs, oriundos de descartes e doa&ccedil;&otilde;es, o espa&ccedil;o est&aacute; dispon&iacute;vel para todos os colaboradores e visitantes da empresa. N&atilde;o &eacute; necess&aacute;rio cadastro ou autoriza&ccedil;&atilde;o para utilizar o servi&ccedil;o, basta escolher o material desejado e aproveitar.</p>
          <p>O ambiente criativo da biblioteca reflete o compromisso do Grupo com a sustentabilidade. Objetos como geladeiras e fog&otilde;es foram reaproveitados e transformados em arm&aacute;rios para guardar os livros, destacando a import&acirc;ncia do reaproveitamento e da conscientiza&ccedil;&atilde;o ambiental. Al&eacute;m disso, a biblioteca conta com exemplares disponibilizados pela biblioteca itinerante do SESI, ampliando ainda mais as possibilidades de leitura.</p>
          <p>Esse espa&ccedil;o &eacute; mais do que uma simples cole&ccedil;&atilde;o de livros; &eacute; um reflexo da cultura de sustentabilidade e valoriza&ccedil;&atilde;o do conhecimento do Grupo Real, conectando a educa&ccedil;&atilde;o com o cuidado ao meio ambiente e oferecendo uma experi&ecirc;ncia &uacute;nica para seus colaboradores e visitantes.</p>"
        youtubeEmbed="https://www.youtube.com/embed/cDX6va8NGgQ"
        border={false}
        color="fb_green_button"
        reverseDesktop={true}
        heroBgImage="bg-bg-ciclos"
        readMore={true}
      />

      <div className="fb_container">
        <Newsletter />
      </div>
    </>
  );
}
