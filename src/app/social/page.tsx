// Hero
import HeroSection from "@/components/Layout/HeroSection";
import HeroChildren from "./HeroChildren";
import HeroCiclos from "@/public/images/imagem_hero_ciclos.webp";

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
import EixoSocialImg from "@/public/images/social/eixo-social.webp";
import CompromissoEducacaoImg from "@/public/images/social/compromisso-educacao.webp";
import CiclosEsportImg from "@/public/images/social/ciclos-e-o-esporte.webp";
import CartaoMultibeneficioImg from "@/public/images/social/cartao-multibeneficio.webp";
import SolidariedadeImg from "@/public/images/social/ciclos-e-solidarieadewebp.webp";
import ReconhecimentoImg from "@/public/images/social/reconhecimento.webp";
import ytVideoImgMock from "@/public/images/social/yt-video.png";

export default function SocialPage() {
  return (
    <>
      <HeroSection
        children={HeroChildren()}
        backgroundClass="bg-hero-green-leafs"
        ctaLink="#"
        btnColor="fb_green_button"
        imagePath={HeroCiclos}
        btnContent="SAIBA MAIS"
        imageMaxHeight={450}
      />
      <InfiniteCarousel items={InfiniteCarouselItems} />
      <InfoSection
        badge="Social"
        title="Eixo Social do Ciclos Real H: Compromisso com Pessoas e Comunidades"
        content="O Ciclos, <strong>Programa de Sustentabilidade</strong> do Grupo Real, é uma iniciativa estruturada que integra ações voltadas para os pilares social, ambiental e de transparência. Dentro desse contexto, o <strong>Eixo Social</strong> desempenha um papel fundamental ao colocar as pessoas no centro das estratégias da empresa, reforçando o compromisso com a valorização humana, a integração e o apoio à sociedade em momentos cruciais."
        imagePath={EixoSocialImg}
        border={false}
        color="fb_green_button"
        ctaLink="#"
        reverseDesktop={true}
      />
      <InfoSection
        badge="Social"
        title="Compromisso com a Educação, Pesquisa e Desenvolvimento"
        content="Uma das frentes de atuação do <strong>Eixo Social do Ciclos</strong> é o <strong>incentivo à educação</strong>, à pesquisa científica e ao compartilhamento de conhecimento por meio de eventos acadêmicos e colaborações institucionais. O Grupo Real investe ativamente em palestras, simpósios e debates, além de apoiar pesquisas inovadoras que contribuem para a evolução da ciência e da tecnologia no setor agropecuário. Profissionais renomados, como o Dr. Mario Reck Real, especialista em homeopatia veterinária e Diretor Técnico Industrial do Grupo, participa diretamente dessas iniciativas, <strong>promovendo a formação de futuros profissionais.</strong>"
        imagePath={CompromissoEducacaoImg}
        border={false}
        color="fb_green_button"
        ctaLink="#"
        reverseDesktop={false}
        heroBgImage="bg-bg-ciclos"
      />
      <FeatureSection
        backgroundClass="bg-green-featured"
        badge="Integração"
        title="Ciclos Integração"
        content="O <strong>Eixo Social</strong> do Ciclos também se dedica a fortalecer o ambiente interno da empresa por meio de ações que promovem <strong>integração e reconhecimento</strong>. O calendário do <strong>Grupo Real</strong> é repleto de datas comemorativas que celebram a fraternidade e o espírito de equipe, como o <strong>Dia do Trabalhador, Dia das Mães, Dia das Crianças</strong> e a tradicional <strong>Confraternização de Final de Ano</strong>. Essas ocasiões são marcadas por eventos especiais, sorteios de brindes e momentos de celebração, que reforçam os laços entre os colaboradores e contribuem para um ambiente de trabalho mais harmônico e motivador."
        infoSectionImagePath={CiclosEsportImg}
        infoSectionBadge="Social"
        infoSectionTitle="Ciclos e o Esporte"
        infoSectionContent="O Eixo Social do <strong>Ciclos Real H</strong> também se estende ao incentivo ao esporte como ferramenta de inclusão, superação e inspiração. Como parte desse compromisso, o Grupo patrocina <strong>Fernando Rufino</strong>, campeão mundial e paralímpico de paracanoagem, um verdadeiro exemplo de resiliência e conquista. Conhecido como “Cowboy de Aço”, Rufino carrega consigo valores de determinação e força que se alinham aos princípios do <strong>Grupo Real</strong>, servindo como inspiração para colaboradores e comunidades."
        infoSectionCtaLink="#"
        infoSectionColor="fb_green_button"
        infoSectionContentButton="Leia mais"
        infoSectionReverseDesktop={true}
        infoSectionBorder={false}
        infoSectionImageMidFullContainer={true}
      />

      <InfoSection
        badge="Social"
        title="Cartão Multibenefícios: Investindo na Qualidade de Vida dos Colaboradores"
        content="Outro destaque do <strong>Eixo Social</strong> é o <strong>compromisso com o bem-estar</strong> dos colaboradores por meio de iniciativas como o Cartão Multibenefícios, que oferece um bônus mensal a ser investido em <strong>alimentação, saúde, educação, cultura</strong> e outras áreas que contribuem para a qualidade de vida de cada funcionário."
        imagePath={CartaoMultibeneficioImg}
        border={false}
        color="fb_green_button"
        reverseDesktop={false}
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
        content="O <strong>Grupo Real</strong> reafirma seu compromisso com a valorização de seus mais de 300 colaboradores por meio do <strong>Prêmio Semestral</strong>, uma iniciativa integrante do <Strong>Eixo Social</strong> do Ciclos, o Programa de Sustentabilidade da empresa. Essa bonificação é concedida nos meses de fevereiro e agosto como forma de <strong>reconhecer o esforço, a dedicação e o alcance das metas</strong> estabelecidas ao longo do semestre."
        imagePath={ReconhecimentoImg}
        border={false}
        color="fb_green_button"
        ctaLink="#"
        reverseDesktop={false}
        heroBgImage="bg-bg-ciclos"
      />
      <InfoSection
        badge="Prêmio Semestral"
        title="Eixo Social do Ciclos Real H: Compromisso com Pessoas e Comunidades"
        content="O Ciclos, <strong>Programa de Sustentabilidade</strong> do Grupo Real, é uma iniciativa estruturada que integra ações voltadas para os pilares social, ambiental e de transparência. Dentro desse contexto, o <strong>Eixo Social</strong> desempenha um papel fundamental ao colocar as pessoas no centro das estratégias da empresa, reforçando o compromisso com a valorização humana, a integração e o apoio à sociedade em momentos cruciais."
        imagePath={EixoSocialImg}
        border={false}
        color="fb_green_button"
        ctaLink="#"
        reverseDesktop={true}
      />
      <InfoSection
        badge="Prêmio Semestral"
        title="Reconhecimento ao Comprometimento dos Colaboradores"
        content="A <strong>Biblioteca Ciclos Conhecimento</strong>é mais uma iniciativa inovadora do Grupo Real, criada para incentivar a leitura, a educação e o reaproveitamento de recursos. Com um acervo composto por <strong>livros, revistas e DVDs</strong>, oriundos de descartes e <strong>doações</strong>, o espaço está disponível para todos os colaboradores e visitantes da empresa. Não é necessário cadastro ou autorização para utilizar o serviço, basta escolher o material desejado e aproveitar."
        imagePath={ytVideoImgMock}
        border={false}
        color="fb_green_button"
        ctaLink="#"
        reverseDesktop={false}
        heroBgImage="bg-bg-ciclos"
      />

      <Newsletter />
    </>
  );
}
