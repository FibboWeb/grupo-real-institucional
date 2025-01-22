import React from 'react'
import Accordion from "../../components/Layout/Accordion";
import CardList from '@/components/Layout/CardList';

export default function ClaudioRealMartins() {
  return (
    <>
      <div className="hero-section bg-fb_blue_main text-white">
        <div className="fb_container mx-auto py-5">
          <h1 className="flex flex-col">
            <strong className="text-4xl">Professor Doutor </strong> 
            <strong className="text-6xl">Claudio Martins Real</strong>
          </h1>
          <strong className="text-4xl">Fundador do Grupo Real</strong>
        </div>
      </div>
      <div className="faq-info text-fb_text_gray fb_container mx-auto py-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
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
        </div>

      </div>
      <div className="faq-info text-fb_text_gray fb_container mx-auto py-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-5/12 pt-4 flex flex-col gap-y-4">
            <h2 className="text-3xl font-semibold">Distinções Universitárias</h2>
            <p>Além da Láurea, já referida, obtida no Curso de Graduação em 1948, as seguintes:</p>
          </div>
          <div className="w-full lg:w-7/12">
            <Accordion faqHeading={{ tagName: "h3" }} title="11 vezes Homenageado por turmas de Formandos Curso de Medicina Veterinária">
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
        </div>

      </div>
    </>
  )
}