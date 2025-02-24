import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Cookies - Grupo Real",
  description: "Aviso de Cookies",
  openGraph: {
    title: "Aviso de Cookies - Grupo Real",
    description: "Aviso de Cookies",
    images: [
      { url: "/images/logo-realh.png" },
    ],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "/institucional/politica-de-cookies",
    languages: {
      pt: "https://gruporealbr.com.br/institucional/politica-de-cookies",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PageCookies() {
  return (
    <main className="fb_container relative gap-fb_space-section mb-5">
      <div className="flex flex-col gap-fb_space-section">
        <div>
          <h1 className="text-3xl font-bold text-center">Aviso de Cookies</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#333333]">
          <div className="flex flex-col gap-2">
            <p>
              Para garantir que o nosso website funcione adequadamente e possa fornecer uma experiência agradável,
              utilizamos cookies, assim como a maioria dos websites.
            </p>
            <p>
              Você poderá escolher quais tipos de cookies deseja consentir ao navegar em nosso site, através das
              configurações de privacidade.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">1. O que são Cookies?</h2>
            <p>
              Um cookie é um pequeno arquivo de computador enviado por um site para o navegador do usuário quando este
              visita o site. Ele armazena informações como credenciais de login, itens do carrinho de compras, entre
              outros.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">2. Categorias de Cookies</h2>

            <h3 className="text-lg font-medium text-fb_blue_main ml-2">
              2.1. De acordo com a Responsabilidade pela Gestão
            </h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <strong>Cookies Próprios:</strong> Definidos diretamente pelo site visitado.
              </li>
              <li>
                <strong>Cookies de Terceiros:</strong> Criados por domínios diferentes do site acessado.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-fb_blue_main ml-2">2.2. De acordo com a Necessidade</h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <strong>Cookies Necessários:</strong> Essenciais para o funcionamento do site.
              </li>
              <li>
                <strong>Cookies Não Necessários:</strong> Sua desativação não impede a navegação.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-fb_blue_main ml-2">2.3. De acordo com a Finalidade</h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <strong>Cookies Analíticos:</strong> Acompanham o desempenho do site.
              </li>
              <li>
                <strong>Cookies de Funcionalidade:</strong> Armazenam preferências do usuário.
              </li>
              <li>
                <strong>Cookies de Publicidade:</strong> Exibem anúncios personalizados.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-fb_blue_main ml-2">2.4. De acordo com o Período de Retenção</h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <strong>Cookies de Sessão:</strong> Expiram ao fechar o navegador.
              </li>
              <li>
                <strong>Cookies Persistentes:</strong> Permanecem por um período determinado.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">3. Base Legal para o Tratamento de Cookies</h2>
            <p>
              A coleta de dados por meio de cookies pode ser amparada pela Lei Geral de Proteção de Dados (LGPD), com
              base no consentimento do usuário ou no legítimo interesse.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">4. Lista de Cookies Utilizados</h2>

            <h3 className="text-lg font-medium text-fb_blue_main ml-2">4.1. Cookies de Domínio Próprio</h3>
            <table className="w-full border border-fb_gray">
              <thead>
                <tr className="border border-fb_gray">
                  <th className="border border-fb_gray break-words">Site Base</th>
                  <th className="border border-fb_gray break-words">Nome</th>
                  <th className="border border-fb_gray break-words">Domínio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-fb_gray">
                  <td className="border border-fb_gray break-words">homeopet.com.br</td>
                  <td className="border border-fb_gray break-words">_ga</td>
                  <td className="border border-fb_gray break-words">.homeopet.<br/>com.br</td>
                </tr>
                <tr className="border border-fb_gray">
                  <td className="border border-fb_gray break-words">lojavirtual.realh.com.br</td>
                  <td className="border border-fb_gray break-words">_fbp</td>
                  <td className="border border-fb_gray break-words">.realh.com.br</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-medium text-fb_blue_main ml-2">4.2. Cookies de Domínio Externo</h3>
            <table className="w-full border border-fb_gray">
              <thead>
                <tr className="border border-fb_gray">
                  <th className="border border-fb_gray">Site Base</th>
                  <th className="border border-fb_gray">Nome</th>
                  <th className="border border-fb_gray">Domínio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-fb_gray">
                  <td className="border border-fb_gray">realh.com.br</td>
                  <td className="border border-fb_gray">_GRECAPTCHA</td>
                  <td className="border border-fb_gray">www.google<br/>.com</td>
                </tr>
                <tr className="border border-fb_gray">
                  <td className="border border-fb_gray">realh.com.br</td>
                  <td className="border border-fb_gray">fr</td>
                  <td className="border border-fb_gray">facebook.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">5. Gerenciamento de Cookies</h2>
            <p>
              Você pode gerenciar os cookies nas configurações do seu navegador ou em dispositivos móveis. Também é
              possível ativar a opção {"Não Rastrear"}.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">6. Atualização do Aviso de Cookies</h2>
            <p>
              Este aviso pode ser alterado para garantir conformidade com a LGPD. Sempre informaremos sobre mudanças e
              versões atualizadas.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">7. Dúvidas</h2>
            <p>
              Se tiver dúvidas, entre em contato pelo e-mail <a href="mailto:lgpd@realh.com.br">lgpd@realh.com.br</a>.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Versão 1.0 - Dezembro/2023</p>
          </div>
        </div>
      </div>
    </main>
  );
}
