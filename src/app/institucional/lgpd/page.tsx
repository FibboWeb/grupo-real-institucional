import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lei Geral de Proteção de Dados (LGPD) - Grupo Real",
  description: "Lei Geral de Proteção de Dados (LGPD)",
  openGraph: {
    title: "Lei Geral de Proteção de Dados (LGPD) - Grupo Real",
    description: "Lei Geral de Proteção de Dados (LGPD)",
    images: [
      { url: "/images/logo-realh.png" },
    ],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "/institucional/lgpd",
    languages: {
      pt: "https://gruporealbr.com.br/institucional/lgpd",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PageLGPD() {
  return (
    <main className="fb_container relative gap-fb_space-section">
      <div className="flex flex-col gap-fb_space-section">
        <div>
          <h1 className="text-3xl font-bold text-center">Lei Geral de Proteção de Dados (LGPD)</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#333333]">
          <p>
            Trabalhamos de acordo com as melhores práticas de segurança e privacidade, e para isso reforçamos o
            compromisso de tratar os dados pessoais dos clientes e usuários sob os princípios da transparência e
            responsabilidade.
          </p>
          <p>
            Aqui, você poderá conhecer um pouco melhor sobre a Lei Geral de Proteção de Dados (LGPD) e seus principais
            aspectos, além de compreender como nós cuidamos dos seus dados e como você pode exercer os direitos sobre
            seus dados, conferidos pela LGPD.
          </p>
        </div>
        <div>
          {/* Links para as outras páginas. */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:columns-auto flex-col md:flex-row gap-4 w-fit mx-auto lg:mx-0 mb-4 flex-wrap">
            <BtnCallToAction
              ctaLink="/institucional/politica-de-privacidade"
              content="Política de privacidade"
              color="fb_blue_button"
              key="politica_de_privacidade"
              classCssForBTN="justify-between flex-1"
            />
            <BtnCallToAction
              ctaLink="/institucional/politica-de-cookies"
              content="Política de cookies"
              color="fb_blue_button"
              key="politica_de_cookies"
              classCssForBTN="justify-between flex-1"
            />
            <BtnCallToAction
              ctaLink="/institucional/direito-dos-titulares"
              content="Direito dos titulares"
              color="fb_blue_button"
              key="direito_dos_titulares"
              classCssForBTN="justify-between flex-1"
            />
            <BtnCallToAction
              ctaLink="/institucional/atendimento-ao-titular"
              content="Atendimento ao titular"
              color="fb_blue_button"
              key="atendimento_ao_titulares"
              classCssForBTN="justify-between flex-1"
            />
            <BtnCallToAction
              ctaLink="https://www.contatoseguro.com.br/pt/gruporealh/"
              content="Canal de Ética"
              color="fb_blue_button"
              key="canal_de_etica"
              classCssForBTN="justify-between flex-1"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
