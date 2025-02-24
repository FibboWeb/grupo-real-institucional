import { Metadata } from "next";
import { Form } from "./_components/Form";
import "./index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atendimento ao Titular - Grupo Real",
  description: "Atendimento ao Titular",
  openGraph: {
    title: "Atendimento ao Titular - Grupo Real",
    description: "Atendimento ao Titular",
    images: [
      { url: "/images/logo-realh.png" },
    ],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "/institucional/atendimento-ao-titular",
    languages: {
      pt: "https://gruporealbr.com.br/institucional/atendimento-ao-titular",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const metadata: Metadata = {
  title: "Atendimento ao Titular - Grupo Real",
  description: "Atendimento ao Titular",
  openGraph: {
    title: "Atendimento ao Titular - Grupo Real",
    description: "Atendimento ao Titular",
    images: [
      { url: "/images/logo-realh.png" },
    ],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "/institucional/atendimento-ao-titular",
    languages: {
      pt: "https://gruporealbr.com.br/institucional/atendimento-ao-titular",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {

  


  return (
    <main className='relative fb_container'>
      <div className="flex flex-col gap-fb_space-section text-[#333333] text-lg mb-5">
        <div>
          <h1 className="text-3xl font-bold text-center">Atendimento ao Titular</h1>
        </div>
        <div className="flex flex-col gap-5">
          <p>Este é o Formulário de Solicitação de Atendimento aos Titulares da REAL H, onde oferecemos a você a oportunidade de exercer um dos seus direitos previstos na Lei Geral de Proteção de Dados nº. 13.709/2018 (LGPD).</p>
          <p>Para realizar as solicitações nos termos da LGPD, é necessário preencher o Formulário abaixo:</p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </main>
  );
}
