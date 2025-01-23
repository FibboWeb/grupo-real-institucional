import React from "react";
import Accordion from "../../components/Layout/Accordion";
import CardList from '@/components/Layout/CardList';
import InfoSection from "@/components/Layout/InfoSection";
import claudio1 from "../../../public/images/claudio-1.jpg";
import claudio2 from "../../../public/images/claudio-2.jpg";
import claudio4 from "../../../public/images/claudio-4.jpg";
import claudio5 from "../../../public/images/claudio-5.jpg";
import Newsletter from "@/components/Layout/Newsletter";
import InfoCardsSlider from "@/components/Layout/InfoCardsSlider";
import Slider from "react-slick";
import InfoCard from "@/components/Layout/InfoCardsSlider/InfoCard";


export default function ClaudioMartinsReal() {

  function CardSection({ children }: { children: React.ReactNode }) {
    return (
      <div className="faq-info text-fb_text_gray fb_container mx-auto py-4 lg:py-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hero-section bg-fb_blue_main text-white -mt-[102px]">
        <div className="fb_container mx-auto py-[102px]">
          <h1 className="flex flex-col">
            <strong className="text-2xl lg:text-4xl">Professor Doutor </strong>
            <strong className="text-4xl lg:text-6xl">Claudio Martins Real</strong>
          </h1>
          <strong className="text-2xl lg:text-4xl">Fundador do Grupo Real</strong>
        </div>
      </div>

      <CardSection>
        <InfoSection
          reverseDesktop={true}
          reverseMobile={false}
          title="Uma Origem Promissora"
          content="<p>O professor Doutor Claudio Martins Real nasceu em 11 de fevereiro de 1926, no município de Capão do Leão, na época, 4º Distrito de Pelotas. Formou-se em Medicina Veterinária na Escola de Agronomia e Medicina da UFRGS. Com 24 anos, tornou-se o Professor Catedrático mais jovem do País.</p>"
          imagePath={claudio1}
        />
      </CardSection>

      <CardSection>
        <InfoSection
          reverseDesktop={false}
          reverseMobile={false}
          title="Pioneiro da Homeopatia Populacional"
          content="<p>Por influência do pai, Francisco Real, tornou-se defensor e estudioso da Homeopatia, quebrando paradigma ao usar a terapêutica em rebanhos pela primeira vez. Foi, portanto, o precursor e criador do termo Homeopatia Populacional.</p>"
          imagePath={claudio2}
        />
      </CardSection>

      <CardSection>
        <InfoSection
          reverseDesktop={true}
          reverseMobile={false}
          title="A Fundação da Real H e o Legado em Continuidade"
          content="<p>Trabalhou como professor até 1993, quando, após aposentar-se, fundou, junto com os filhos, a  Real H. Até hoje o professor dedica-se com entusiasmo ao estudo da Homeopatia e da Medicina Veterinária.</p>"
          imagePath={claudio1}
        />
      </CardSection>

      <div className="py-5 lg:py-10 ps-5 overflow-hidden gap-7 flex flex-col">
        <h2 className="text-2xl font-semibold text-center">Títulos</h2>
          <InfoCardsSlider>
            <InfoCard title="Presidente da Academia Sul-mato-grossense de Medicina Veterinária" svg={'/certified-clean.svg'}>
              <p>Empossado  Primeiro Presidente da Academia Sul-mato-grossense de Medicina Veterinária  – 2018</p>
            </InfoCard>
            <InfoCard title="“Professor Emérito” da UFRGS" svg={'/certified-clean.svg'}>
              <p>A indicação à honraria, iniciativa do diretor da Faculdade de Veterinária, Emerson Contesini, levou em conta a trajetória notável do homenageado como professor, pesquisador, empreendedor e pioneiro em atividades na UFRGS e em sociedades de classe, divulgando a alargando conhecimentos de sua área – 2015.</p>
            </InfoCard>
            <InfoCard title="“Cidadão Campo-grandense”" svg={'/certified-clean.svg'}>
              <p>Concedido pelo Legislativo municipal de Campo Grande em reconhecimento aos relevantes serviços prestados em prol da melhoria da qualidade de vida do povo e do desenvolvimento da cidade – 2015.</p>
            </InfoCard>
            <InfoCard title="Personalidade Descendente" svg={'/certified-clean.svg'}>
              <p>No Dia da Comunidade Portuguesa (10 de junho) foi homenageado como “<strong>Personalidade Descendente</strong>” em reconhecimento aos relevantes serviços prestados à sociedade campo-grandense – 2013.</p>
            </InfoCard>
          </InfoCardsSlider>
      </div>

      <CardSection>
        <div className="w-full lg:w-5/12 pt-4 flex flex-col gap-y-4">
          <h2 className="text-3xl font-semibold">Diplomas</h2>
          <p>O Professor Doutor Claudio Martins Real acumulou ao longo de sua trajetória acadêmica e profissional uma coleção notável de diplomas e reconhecimentos. Formado em Medicina Veterinária pela UFRGS, destacou-se por sua dedicação à pesquisa e ao ensino, além de ter sido o Professor Catedrático mais jovem do Brasil.</p>
        </div>
        <div className="w-full lg:w-7/12">
          <CardList svg={"/dog.svg"} title="Médico Veterinário">
            <p>Diplomado pela Escola de Agronomia e Veterinária da Universidade Federal do Rio Grande do Sul, 1948.</p>
          </CardList>
          <CardList svg={"/degree.svg"} title="Diploma de Láurea em Veterinária">
            <p>Obtido no Curso de Graduação da então Escola de Agronomia e Veterinária de Porto Alegre RS em 1948.</p>
          </CardList>
          <CardList svg={"/certified.svg"} title="Docente livre">
            <p>em Patologia e Clínica Médica dos Animais Domésticos – obtido em Concurso Público de Títulos e Provas, 1952, na mesma Instituição.</p>
          </CardList>
        </div>
      </CardSection>

      <CardSection>
        <InfoSection
          reverseDesktop={true}
          reverseMobile={false}
          title="Atividades Docentes"
          content="<ul>
            <li>UFRGS – Universidade Federal do Rio Grande do Sul.</li>
            <li>Professor Catedrático de Patologia e Clínica Médica na Faculdade de Veterinária, 1949-1981. Sendo que no período de 1949 – 1950 foi Professor Assistente da disciplina.</li>
            <li>Professor Assistente, em tempo integral, na Cadeira de Patologia Clinica Médica dos Animais Domésticos na Escola de Agronomia e Veterinária de Porto Alegre de 1949 a 1950.</li>
            <li>Professor Catedrático interino na Cadeira de Patologia e Clínica dos Animais Domésticos da Escola de Agronomia e Veterinária de 1950 a 1968.</li>
          </ul>"
          imagePath={claudio4}
          ctaLink="#"
        />
      </CardSection>

      <CardSection>
        <div className="w-full lg:w-5/12 pt-4 flex flex-col gap-y-4">
          <h2 className="text-3xl font-semibold">Distinções Universitárias</h2>
          <p>Além da Láurea, já referida, obtida no Curso de Graduação em 1948, as seguintes:</p>
        </div>
        <div className="w-full lg:w-7/12">
          <Accordion faqHeading={{ tagName: "h3" }} title="11 vezes Homenageado por turmas de Formandos Curso de Medicina Veterinária" active={true}>
            <p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p>
            <ul>
              <li>UFRGS – 1959, 54, 56, 61, 62, 63, 73, 75 e 76.</li>
              <li>UFMS – 1985 e 1986.</li>
            </ul>
          </Accordion>
          <Accordion faqHeading={{ tagName: "h3" }} title="03 vezes Homenageado de Honra da turma de formandos do Curso de Veterinária">
            <p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p>
            <ul>
              <li>UFRGS – 1979.</li>
              <li>UFMS – 1982 e 1993.</li>
            </ul>
          </Accordion>
          <Accordion faqHeading={{ tagName: "h3" }} title="10 vezes Paraninfo de turma de formandos do Curso de Veterinária">
            <p>da Faculdade de Agronomia e Veterinária da UFRGS.</p>
            <ul>
              <li>UFRGS – 1951, 53,64, 65, 66, 67, 69, 70, 72, 74.</li>
            </ul>
          </Accordion>
        </div>
      </CardSection>

      <CardSection>
        <InfoSection
          reverseDesktop={false}
          reverseMobile={false}
          title="Sociedades Científicas e Profissionais"
          content="<ul>
            <li>SOVERGS – Sociedade de Veterinária do Rio Grande do Sul desde 1947;</li>
            <li>SBPC – Sociedade Brasileira pelo Progresso da Ciência – 1950;</li>
            <li>CHF – Centre Homeopatique de France – 1949-1956;</li>
            <li>APH – Associação Paulista de Homeopatia, desde 1985 – 2000;</li>
            <li>ABMVH – Associação Brasileira de Médicos Veterinários Homeopatas, desde 1993;</li>
            <li>IAVH – International Association for Veterinary Homeopaty, desde 1994.</li>
          </ul>"
          imagePath={claudio5}
        />
      </CardSection>

      <CardSection>
        <InfoSection
          reverseDesktop={true}
          reverseMobile={false}
          title="Cursos Teses e Orientação de Teses"
          content="<ul>
            <li>15 cursos frequentados (dois no exterior);</li>
            <li>Thieartzlich Hocshule, Hannover RFA - 1976.Michigan State University, USA – 1977.</li>
            <li>18 cursos ministrados;</li>
            <li>Teses defendidas: Para o Concurso de Docência Livre “O Fígado na Intoxicação Aguda pelo Tetracloreto de Carbono” – 1951.</li>
          </ul>"
          imagePath={claudio4}
          ctaLink="#"
        />
      </CardSection>

      <CardSection>
        <InfoSection
          reverseDesktop={false}
          reverseMobile={false}
          title="Congressos, Simpósios e Trabalhos Publicados"
          content="<ul>
          <li>106 participações em Congressos Nacionais;</li>
          <li>05 participações em Congressos Internacionais;</li>
          <li>34 trabalhos Originais Publicados, sobre: Clínica Médica, Clínica da Reprodução, Manejo, e em Terapêutica Homeopática, sendo dois em ”L’homeopathie Française”. Paris – 1954 e 1955.</li>
          </ul>"
          imagePath={claudio5}
        />
      </CardSection>

      <CardSection>
        <Newsletter
          sectionTitle="Inscreva-se na nossa newsletter"
          sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail."
        />
      </CardSection>
    </>
  )
}
