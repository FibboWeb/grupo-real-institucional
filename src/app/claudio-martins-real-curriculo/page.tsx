import React from "react";
import Accordion from "@/components/Layout/Accordion";
import CardList from "@/components/Layout/CardList";
import InfoSection from "@/components/Layout/InfoSection";
import Newsletter from "@/components/Layout/Newsletter";
import InfoCardsSlider from "@/components/Layout/InfoCardsSlider";
import InfoCard from "@/components/Layout/InfoCardsSlider/InfoCard";
import HeroSection from "@/components/Layout/HeroSection";
import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";

import Claudio1 from "@/public/images/claudio-martins-real-curriculo/claudio-1.webp";
import Claudio2 from "@/public/images/claudio-martins-real-curriculo/claudio-2.webp";
import Claudio3 from "@/public/images/claudio-martins-real-curriculo/claudio-3.webp";
import Claudio4 from "@/public/images/claudio-martins-real-curriculo/claudio-4.webp";
import Claudio5 from "@/public/images/claudio-martins-real-curriculo/claudio-5.webp";
import Claudio6 from "@/public/images/claudio-martins-real-curriculo/claudio-6.webp";
import Claudio7 from "@/public/images/claudio-martins-real-curriculo/claudio-7.webp";
import HeroImage from "@/public/images/claudio-martins-real-curriculo/claudio-martins-hero.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professor Doutor Claudio Martins - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Professor Doutor Claudio Martins - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/claudio-martins-real-curriculo",
    languages: {
      pt: "https://gruporealbr.com.br",
    },
  },
};

export default function ClaudioMartinsReal() {
  function CardSection({ children }: { children: React.ReactNode }) {
    return (
      <div className="text-fb_text_gray fb_container mx-auto py-3 lg:py-6">
        <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">{children}</div>
      </div>
    );
  }

  return (
    <>
      <HeroSection imagePath={HeroImage} imageMaxHeight={580} imageOnBottom={true}>
        <div className="flex flex-col items-start gap-10">
          <div>
            <h1 className="flex flex-col text-white">
              <strong className="text-2xl lg:text-4xl">Professor Doutor </strong>
              <strong className="text-4xl lg:text-6xl">Claudio Martins Real</strong>
            </h1>
            <strong className="text-2xl lg:text-4xl text-white">Fundador do Grupo Real</strong>
          </div>
          {/* <BtnCallToAction color={"fb_blue_button"} ctaLink={"#"} content={"Saber Mais"} /> */}
        </div>
      </HeroSection>

      <InfoSection
        reverseDesktop={true}
        reverseMobile={false}
        title={"Uma Origem Promissora"}
        content={
          "<p>O professor Doutor Claudio Martins Real nasceu em 11 de fevereiro de 1926, no município de Capão do Leão, na época, 4º Distrito de Pelotas. Formou-se em Medicina Veterinária na Escola de Agronomia e Medicina da UFRGS. Com 24 anos, tornou-se o Professor Catedrático mais jovem do País.</p>"
        }
        imagePath={Claudio1}
      />

      <InfoSection
        reverseDesktop={false}
        reverseMobile={false}
        title={"Pioneiro da Homeopatia Populacional"}
        content={
          "<p>Por influência do pai, Francisco Real, tornou-se defensor e estudioso da Homeopatia, quebrando paradigma ao usar a terapêutica em rebanhos pela primeira vez. Foi, portanto, o precursor e criador do termo Homeopatia Populacional.</p>"
        }
        imagePath={Claudio2}
      />

      <InfoSection
        reverseDesktop={true}
        reverseMobile={false}
        title={"A Fundação da Grupo Real e o Legado em Continuidade"}
        content={
          "<p>Trabalhou como professor até 1993, quando, após aposentar-se, fundou, junto com os filhos, a Grupo Real. Até hoje o professor dedica-se com entusiasmo ao estudo da Homeopatia e da Medicina Veterinária.</p>"
        }
        imagePath={Claudio3}
      />

      <div className="w-full pt-4 flex flex-col gap-y-4">
        <div className="py-5 lg:py-10 overflow-hidden gap-7 flex flex-col">
          <h2 className="text-2xl font-semibold text-center">Títulos</h2>
          <InfoCardsSlider>
            <InfoCard
              title={"Presidente da Academia Sul-mato-grossense de Medicina Veterinária"}
              svg={"/certified-clean.svg"}
            >
              <p>Empossado Primeiro Presidente da Academia Sul-mato-grossense de Medicina Veterinária - 2018</p>
            </InfoCard>
            <InfoCard title={"“Professor Emérito” da UFRGS"} svg={"/certified-clean.svg"}>
              <p>
                A indicação à honraria, iniciativa do diretor da Faculdade de Veterinária, Emerson Contesini, levou em
                conta a trajetória notável do homenageado como professor, pesquisador, empreendedor e pioneiro em
                atividades na UFRGS e em sociedades de classe, divulgando a alargando conhecimentos de sua área - 2015.
              </p>
            </InfoCard>
            <InfoCard title={"“Cidadão Campo-grandense”"} svg={"/certified-clean.svg"}>
              <p>
                Concedido pelo Legislativo municipal de Campo Grande em reconhecimento aos relevantes serviços prestados
                em prol da melhoria da qualidade de vida do povo e do desenvolvimento da cidade - 2015.
              </p>
            </InfoCard>
            <InfoCard title={"Personalidade Descendente"} svg={"/certified-clean.svg"}>
              <p>
                No Dia da Comunidade Portuguesa (10 de junho) foi homenageado como “
                <strong>Personalidade Descendente</strong>” em reconhecimento aos relevantes serviços prestados à
                sociedade campo-grandense - 2013.
              </p>
            </InfoCard>
            <InfoCard title={"Relevantes Serviços"} svg={"/certified-clean.svg"}>
              <p>Título concedido pela Sociedade de Veterinária do Distrito Federal – 1998.</p>
            </InfoCard>
            <InfoCard title={"Relevantes Serviços"} svg={"/certified-clean.svg"}>
              <p>Título concedido pela SOVERGS. Sociedade de Veterinária do Rio Grande do Sul – 1999</p>
            </InfoCard>
            <InfoCard title={"Precursor da Homeopatia Veterinária Brasileira"} svg={"/certified-clean.svg"}>
              <p>Título outorgado pela ABMVH. Associação Brasileira dos Médicos veterinários Homeopatas. SP – 2000.</p>
            </InfoCard>
            <InfoCard title={"Sócio Honorário"} svg={"/certified-clean.svg"}>
              <p>Título concedido pela Sociedade de Medicina Veterinária do Rio Grande do Sul, SOVERGS – 2005.</p>
            </InfoCard>
            <InfoCard title={"Membro Honorário"} svg={"/certified-clean.svg"}>
              <p>Título concedido pela Academia de Medicina Veterinária do Rio Grande do Sul – 2007.</p>
            </InfoCard>
            <InfoCard title={"Comenda do Mérito Veterinário” no grau de Comendador."} svg={"/certified-clean.svg"}>
              <p>Título concedido pela Sociedade Brasileira de Medicina Veterinária – 2007.</p>
            </InfoCard>
            <InfoCard title={"Prêmio Paulo Dacorso Filho"} svg={"/certified-clean.svg"}>
              <p>
                Maior distinção a ser concedida para um Med. Veterinário. O Prêmio foi concedido pelo Conselho Federal
                de Medicina Veterinária – 2007
              </p>
            </InfoCard>
            <InfoCard title={"Grã Cruz do Mérito Veterinário Brasileiro"} svg={"/certified-clean.svg"}>
              <p>Título concedido pela Sociedade Brasileira de Medicina Veterinária – 2010</p>
            </InfoCard>
          </InfoCardsSlider>
        </div>
      </div>

      <CardSection>
        <div className="w-full lg:w-5/12 pt-4 flex flex-col gap-y-4 justify-center">
          <h2 className="text-3xl font-semibold">Diplomas</h2>
          <p>
            O Professor Doutor Claudio Martins Real acumulou ao longo de sua trajetória acadêmica e profissional uma
            coleção notável de diplomas e reconhecimentos. Formado em Medicina Veterinária pela UFRGS, destacou-se por
            sua dedicação à pesquisa e ao ensino, além de ter sido o Professor Catedrático mais jovem do Brasil.
          </p>
        </div>

        <div className="w-full lg:w-7/12 pt-4 flex flex-col gap-y-4 justify-center">
          <CardList svg={"/dog.svg"} title="Médico Veterinário">
            <p>Diplomado pela Escola de Agronomia e Veterinária da Universidade Federal do Rio Grande do Sul, 1948.</p>
          </CardList>
          <CardList svg={"/degree.svg"} title="Diploma de Láurea em Veterinária">
            <p>Obtido no Curso de Graduação da então Escola de Agronomia e Veterinária de Porto Alegre RS em 1948.</p>
          </CardList>
          <CardList svg={"/certified.svg"} title="Docente livre">
            <p>
              em Patologia e Clínica Médica dos Animais Domésticos - obtido em Concurso Público de Títulos e Provas,
              1952, na mesma Instituição.
            </p>
          </CardList>
        </div>
      </CardSection>

      <InfoSection
        reverseDesktop={true}
        reverseMobile={false}
        title={"Atividades Docentes"}
        content="<ul>
          <li>UFRGS - Universidade Federal do Rio Grande do Sul.</li>
          <li>Professor Catedrático de Patologia e Clínica Médica na Faculdade de Veterinária, 1949-1981. Sendo que no período de 1949 - 1950 foi Professor Assistente da disciplina.</li>
          <li>Professor Assistente, em tempo integral, na Cadeira de Patologia Clinica Médica dos Animais Domésticos na Escola de Agronomia e Veterinária de Porto Alegre de 1949 a 1950.</li>
          <li>Professor Catedrático interino na Cadeira de Patologia e Clínica dos Animais Domésticos da Escola de Agronomia e Veterinária de 1950 a 1968.</li>
          <li>Professor Catedr&aacute;tico efetivo na mesma disciplina, a partir de 1968.</li>
          <li>Professor respons&aacute;vel pelas disciplinas de &ldquo;Patologia e Cl&iacute;nica M&eacute;dica I, II, II&rdquo; a partir de 1972.</li>
          <li>Professor respons&aacute;vel pela disciplina de &ldquo;Patologia e Cl&iacute;nica da Reprodu&ccedil;&atilde;o&rdquo; de 1973 a 1981.</li>
          <li>Em P&oacute;s-Gradua&ccedil;&atilde;o respons&aacute;vel pelas disciplinas de &ldquo;Patologia e Cl&iacute;nica da Reprodu&ccedil;&atilde;o&rdquo; 1975 a 1979.</li>
          <li>Em P&oacute;s-Gradua&ccedil;&atilde;o Professor respons&aacute;vel pela disciplina da &ldquo;Patologia e Cl&iacute;nica M&eacute;dica I&rdquo; e II, &ldquo;Patologia e Cl&iacute;nica da Reprodu&ccedil;&atilde;o I e II&rdquo;, &ldquo;Problemas de Cl&iacute;nica de Grandes Animais&rdquo; &ndash; 1977.</li>
          <li>UFPR &ndash; Universidade Federal do Paran&aacute;</li>
          <li>Disciplina de &ldquo;Fisiopatologia da Reprodu&ccedil;&atilde;o&rdquo; -1978</li>
          <li>FUNBA &ndash; Funda&ccedil;&atilde;o Universidade de Bag&eacute;/RS</li>
          <li>Ministrou a disciplina &ldquo;Patologia e Cl&iacute;nica da Reprodu&ccedil;&atilde;o das F&ecirc;meas&rdquo; no curso de Tecnologia da Reprodu&ccedil;&atilde;o realizado no curso de veterin&aacute;ria da Funda&ccedil;&atilde;o Universidade de Bag&eacute;, convenio FUNBA/PRODERS, Bag&eacute; &ndash; RS &ndash; 1981.</li>
          <li>UFMS &ndash; Universidade Federal do Mato Grosso do Sul.</li>
          <li>Professor Titular de &ldquo;Patologia e Cl&iacute;nica M&eacute;dica&rdquo; do Curso de Veterin&aacute;ria 1981-1993.</li>
          <li>Ministrou em Curso Especial de Ver&atilde;o a disciplina &ldquo;Cl&iacute;nica M&eacute;dica dos Animais Dom&eacute;sticos II&rdquo;. 1981 &ndash; 1982.</li>
          <li>Ministrou em Curso regular as disciplinas de &ldquo;Cl&iacute;nica M&eacute;dica dos animais Dom&eacute;sticos I&rdquo; e a &ldquo;Cl&iacute;nica M&eacute;dica dos Animais Dom&eacute;sticos IV&rdquo; &ndash; 1982.</li>
          <li>Professor da disciplina de &ldquo;Cl&iacute;nica M&eacute;dica e Terap&ecirc;utica dos Animais Dom&eacute;sticos I&rdquo;. 1984.</li>
        </ul>
        <p>E ainda respons&aacute;vel por:</p>
        <ul>
          <li>Disciplina de Endocrinologia Cl&iacute;nica &ndash; Curso de Especializa&ccedil;&atilde;o &ndash; 1981</li>
          <li>Disciplina de Fisiopatologia da Reprodu&ccedil;&atilde;o II na gradua&ccedil;&atilde;o &ndash; 1990</li>
          <li>APH/IFL Associa&ccedil;&atilde;o Paulista de Homeopatia, SP e Instituto Fran&ccedil;ois Lamasson.</li>
          <li>Aulas de Homeopatia para M&eacute;dicos Veterin&aacute;rios &ndash; 1986 &ndash; 1993.</li>
        </ul>
        "
        readMore={true}
        imagePath={Claudio4}
        centerButton={true}
      />

      <CardSection>
        <div className="w-full lg:w-5/12 pt-4 flex flex-col justify-center gap-y-4 items-start">
          <h2 className="text-3xl font-semibold">Distinções Universitárias</h2>
          <p>Além da Láurea, já referida, obtida no Curso de Graduação em 1948, as seguintes:</p>
          <div className="flex justify-center lg:justify-start w-full">
            {/* <BtnCallToAction ctaLink="#" content="Ver Mais" /> */}
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <Accordion
            faqHeading={{ tagName: "h3" }}
            title={"11 vezes Homenageado por turmas de Formandos Curso de Medicina Veterinária"}
            active={true}
          >
            <p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p>
            <ul>
              <li>UFRGS - 1959, 54, 56, 61, 62, 63, 73, 75 e 76.</li>
              <li>UFMS - 1985 e 1986.</li>
            </ul>
          </Accordion>
          <Accordion
            faqHeading={{ tagName: "h3" }}
            title={"03 vezes Homenageado de Honra da turma de formandos do Curso de Veterinária"}
          >
            <p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p>
            <ul>
              <li>UFRGS - 1979.</li>
              <li>UFMS - 1982 e 1993.</li>
            </ul>
          </Accordion>
          <Accordion
            faqHeading={{ tagName: "h3" }}
            title={"10 vezes Paraninfo de turma de formandos do Curso de Veterinária"}
          >
            <p>da Faculdade de Agronomia e Veterinária da UFRGS.</p>
            <ul>
              <li>UFRGS - 1951, 53,64, 65, 66, 67, 69, 70, 72, 74.</li>
            </ul>
          </Accordion>
        </div>
      </CardSection>

      <InfoSection
        reverseDesktop={false}
        reverseMobile={false}
        title={"Sociedades Científicas e Profissionais"}
        content="<ul>
          <li>SOVERGS - Sociedade de Veterinária do Rio Grande do Sul desde 1947;</li>
          <li>SBPC - Sociedade Brasileira pelo Progresso da Ciência - 1950;</li>
          <li>CHF - Centre Homeopatique de France - 1949-1956;</li>
          <li>APH - Associação Paulista de Homeopatia, desde 1985 - 2000;</li>
          <li>ABMVH - Associação Brasileira de Médicos Veterinários Homeopatas, desde 1993;</li>
          <li>IAVH - International Association for Veterinary Homeopaty, desde 1994.</li>
        </ul>"
        imagePath={Claudio5}
      />

      <InfoSection
        reverseDesktop={true}
        reverseMobile={false}
        title={"Cursos Teses e Orientação de Teses"}
        content="<p>15 cursos frequentados (dois no exterior):</p>
<ul>
<li>Thieartzlich Hocshule, Hannover RFA &ndash; 1976.</li>
<li>Michigan State University, USA &ndash; 1977.</li>
</ul>
<p>18 cursos ministrados;</p>
<p><strong>Teses defendidas:</strong></p>
<p>Para o Concurso de Doc&ecirc;ncia Livre<br />&ldquo;O F&iacute;gado na Intoxica&ccedil;&atilde;o Aguda pelo Tetracloreto de Carbono&rdquo; &ndash; 1951.</p>
<p>Para o Concurso de C&aacute;tedra<br />&ldquo;Contribui&ccedil;&atilde;o ao Estudo da Esterilidade da Vaca Leiteira no Rio Grande do Sul&rdquo; &ndash; 1954.</p>
<p>12 orienta&ccedil;&otilde;es de teses de P&oacute;s Gradua&ccedil;&atilde;o (pesquisas);</p>
<p>190 confer&ecirc;ncias e Palestras proferidas.</p>
<p><strong>P&uacute;blico Alvo:</strong></p>
<p>M&eacute;dicos Veterin&aacute;rios, M&eacute;dicos, Zootecnistas, alunos e pecuaristas.</p>
<p><strong>Locais:</strong></p>
<p>Congressos Profissionais, Universidades, Associa&ccedil;&otilde;es de Classe, Semanas acad&ecirc;micas, Associa&ccedil;&otilde;es de Criadores, Sindicatos e Federa&ccedil;&otilde;es.</p>
<p><strong>Assuntos:</strong></p>
<p>&Eacute;tica Profissional, Homeopatia Veterin&aacute;ria, Cl&iacute;nica M&eacute;dica, Manejo Reprodutivo, Fertilidade em Gado de Corte e de Leite, Cruzamento Industrial, Desmame Interrompido, Mortandade de Vacas (Centro-Oeste), Doen&ccedil;as Metab&oacute;licas, Doen&ccedil;as Carenciais, Mineraliza&ccedil;&atilde;o de Bovinos, Rela&ccedil;&atilde;o C&aacute;lcio-F&oacute;sforo nos resultados Zoot&eacute;cnicos, Homeopatia Populacional.</p>
<p><strong>No Exterior:</strong></p>
<p>Na XXVIII Exposi&ccedil;&atilde;o Internacional do Prado, Uruguay, 1979, sobre o uso da &ldquo;T&eacute;cnica do Desmame Interrompido&rdquo;.</p>
<p>No II Congresso de Veterin&aacute;rios da L&iacute;ngua Portuguesa, Lisboa, Portugal, 1980, sobre &ldquo;Desmame Interrompido&rdquo;.</p>
<p>No V Congresso Internacional de M&eacute;dicos Veterin&aacute;rios Homeopatas Paris, Fran&ccedil;a, 1996, sobre &ldquo;Homeopatia Populacional&rdquo;. Congresso promovido pela IAVH.</p>"
        imagePath={Claudio6}
        readMore={true}
        centerButton={true}
      />

      <InfoSection
        reverseDesktop={false}
        reverseMobile={false}
        title={"Congressos, Simpósios e Trabalhos Publicados"}
        content="<ul>
        <li>106 participações em Congressos Nacionais;</li>
        <li>05 participações em Congressos Internacionais;</li>
        <li>34 trabalhos Originais Publicados, sobre: Clínica Médica, Clínica da Reprodução, Manejo, e em Terapêutica Homeopática, sendo dois em ”L'homeopathie Française”. Paris - 1954 e 1955.</li>
        </ul>"
        imagePath={Claudio7}
      />

      <div className="fb_container">
        <Newsletter
          sectionTitle={"Inscreva-se na nossa newsletter"}
          sectionDescription={
            "Receba novidades as informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail."
          }
        />
      </div>
    </>
  );
}
