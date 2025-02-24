import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Politica de privacidade - Grupo Real",
  description: "Politica de privacidade",
  openGraph: {
    title: "Politica de privacidade - Grupo Real",
    description: "Politica de privacidade",
    images: [
      { url: "/images/banners/bg-categories.webp" },
    ],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "/institucional/politica-de-privacidade",
    languages: {
      pt: "https://gruporealbr.com.br/institucional/politica-de-privacidade",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PagePrivacidade() {
  return (
    <main className="fb_container relative gap-fb_space-section">
      <div className="flex flex-col gap-fb_space-section">
        <div>
          <h1 className="text-3xl font-bold text-center flex">Seja bem-vindo ao Portal LGPD do Grupo Real</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#333333]">
          <h2 className="text-xl font-semibold text-fb_blue_main text-center">AVISO DE PRIVACIDADE</h2>
          <p>Seja bem vindo(a) ao grupo de empresas Real H!</p>
          <p>
            O presente documento intitulado Aviso de Privacidade foi elaborado para você cliente, colaborador, prestador
            de serviço, representante, distribuidor autorizado ou simples usuário do website das empresas REAL H, a fim
            de que se possa oferecer o máximo de transparência à forma com a qual os dados pessoais serão tratados ao
            longo de todo o ciclo de vida, desde o momento da coleta, compartilhamento, reutilização até a efetiva
            eliminação, em atendimento à conformidade exigida pela Lei Geral de Proteção de Dados nº 13.709/2018 (LGPD).
          </p>
          <ol className="flex flex-col gap-3">
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">1. DAS INFORMAÇÕES ÚTEIS</h2>
              <div>
                <p>
                  A Real H é representada por um grupo de empresas que exercem atividades comerciais voltadas à nutrição e
                  saúde animal e no âmbito da Lei Geral de Proteção de Dados, será qualificada como predominantemente
                  Controladora, na medida que impõe decisões sobre os dados pessoais pela quais têm a obrigação de
                  tratamento:
                </p>
              </div>
              <div className="h-auto w-full">
                <Image
                  src="/images/institucional/tabela-real-cia-cmr-laboratorio-cnpj.webp"
                  alt="Imagem com os CNPJ da empresas Real H e CMR Láboratorios"
                  width={400}
                  height={300}
                  sizes="(min-width: 424px) width: 600px;"
                  className="w-full h-[400px] mx-auto object-contain object-center"
                />
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">2. DO ENCARREGADO DE PROTEÇÃO DE DADOS</h2>
              <div>
                <p>
                  O Encarregado de Proteção de Dados é o responsável escolhido pelas empresas REAL H para atuar como canal
                  de comunicação entre o Controlador, os titulares de dados (clientes, representantes, fornecedores e
                  colaboradores) e a Autoridade Nacional de Proteção de Dados (ANPD), quando necessário e será
                  representado por:
                </p>
              </div>
              <div>
                <p>
                  Encarregado de Proteção de Dados as a service: Deborah Francielle Mesquita Polsaque Alves Sociedade
                  Individual de Advocacia CNPJ 34.283.369/0001-70 E-mail de contato: lgpd@realh.com.br
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">3. DAS DEFINIÇÕES.</h2>
              <div>
                <p>
                  Para facilitar a leitura e compreensão do presente Aviso de Privacidade, as empresas REAL H apresentam
                  abaixo, algumas definições importantes trazidas pela Lei Geral de Proteção de Dados:
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-auto">
                  <Image
                    src="/images/institucional/infografico-1.webp"
                    alt="Imagem com os CNPJ da empresas Real H e CMR Láboratorios"
                    width={400}
                    height={300}
                    sizes="(min-width: 768px) width: 600px;"
                    className="h-[300px] md:h-[600px] md:w-full mx-auto object-contain"
                  />
                </div>
                <div className="h-auto">
                  <Image
                    src="/images/institucional/infografico-2.webp"
                    alt="Imagem com os CNPJ da empresas Real H e CMR Láboratorios"
                    width={300}
                    height={300}
                    sizes="(min-width: 768px) width: 600px;"
                    className="h-[300px] md:h-[600px] md:w-full mx-auto object-contain"
                  />
                </div>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">
                4. DAS BASES LEGAIS PARA O TRATAMENTO DE DADOS
              </h2>
              <div>
                Tendo em vista as atividades desenvolvidas pela Controladora no ramo da nutrição e saúde animal,
                cumpre-se esclarecer que todas as atividades de tratamento devem estar obrigatoriamente pautadas em uma
                das bases legais inseridas na Lei Geral de Proteção de Dados. Para o tratamento envolvendo dados
                pessoais, as bases estão descrita nos artigos 7º:
              </div>
                <ol className="flex flex-col gap-3 mt-3 mx-6">
                  <li>
                    <span className="font-bold">I</span>. Mediante o fornecimento de consentimento pelo titular;
                  </li>
                  <li>
                    <span className="font-bold">II</span>. Para o cumprimento de obrigação legal ou regulatória pelo
                    controlador;
                  </li>
                  <li>
                    <span className="font-bold">III</span>. Pela administração pública, para o tratamento e uso
                    compartilhado de dados necessários à execução de políticas públicas previstas em leis e regulamentos
                    ou respaldadas em contratos, convênios ou instrumentos congêneres, observadas as disposições do
                    Capítulo IV desta Lei;
                  </li>
                  <li>
                    <span className="font-bold">IV</span>. Para a realização de estudos por órgão de pesquisa,
                    garantida, sempre que possível, a anonimização dos dados pessoais;
                  </li>
                  <li>
                    <span className="font-bold">V</span>. Quando necessário para a execução de contrato ou de
                    procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular
                    dos dados;
                  </li>
                  <li>
                    <span className="font-bold">VI</span>. Para o exercício regular de direitos em processo judicial,
                    administrativo ou arbitral, esse último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei
                    de Arbitragem);
                  </li>
                  <li>
                    <span className="font-bold">VII</span>. Para a proteção da vida ou da incolumidade física do titular
                    ou de terceiro;
                  </li>
                  <li>
                    <span className="font-bold">VIII</span>. Para a tutela da saúde, exclusivamente, em procedimento
                    realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária;
                  </li>
                  <li>
                    <span className="font-bold">IX</span>. Quando necessário para atender aos interesses legítimos do
                    controlador ou de terceiro, exceto no caso de prevalecerem direitos e liberdades fundamentais do
                    titular que exijam a proteção dos dados pessoais; ou
                  </li>
                  <li>
                    <span className="font-bold">X</span>. Para a proteção do crédito, inclusive quanto ao disposto na
                    legislação pertinente.
                  </li>
                </ol>
            </li>
            <li>
              <p>Para o tratamento envolvendo dados pessoais sensíveis, as bases estão descrita nos artigos 11º:</p>
              <ol className="flex flex-col gap-3 mt-3 mx-6">
                <li>
                  <span className="font-bold">I</span>. Quando o titular ou seu responsável legal consentir, de forma
                  específica e destacada, para finalidades específicas (inciso I da LGPD);
                </li>
                <li>
                  <span className="font-bold">II</span>. sem fornecimento de consentimento do titular, nas hipóteses em
                  que for indispensável para:
                </li>
              </ol>
            </li>
            <li>
              <ol className="flex flex-col gap-3 mt-3 mx-6">
                <li>
                  <p>
                    <span className="font-bold">a)</span> cumprimento de obrigação legal ou regulatória pelo
                    controlador;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">b)</span> tratamento compartilhado de dados necessários à execução, pela
                    administração pública, de políticas públicas previstas em leis ou regulamentos;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">c)</span> realização de estudos por órgão de pesquisa, garantida, sempre
                    que possível, a anonimização dos dados pessoais sensíveis;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">d)</span> exercício regular de direitos, inclusive em contrato e em
                    processo judicial, administrativo e arbitral, este último nos termos da Lei nº 9.307, de 23 de
                    setembro de 1996 (Lei de Arbitragem) ;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">e)</span> proteção da vida ou da incolumidade física do titular ou de
                    terceiro;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">f)</span> tutela da saúde, exclusivamente, em procedimento realizado por
                    profissionais de saúde, serviços de saúde ou autoridade sanitária; ou
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">g)</span> garantia da prevenção à fraude e à segurança do titular, nos
                    processos de identificação e autenticação de cadastro em sistemas eletrônicos, resguardados os
                    direitos mencionados no art. 9º desta Lei e exceto no caso de prevalecerem direitos e liberdades
                    fundamentais do titular que exijam a proteção dos dados pessoais.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">
                5. DAS BASES LEGAIS PARA O TRATAMENTO DE DADOS PESSOAIS SENSÍVEIS – ART. 11
              </h2>
              <p>
                Tendo em vista as atividades desenvolvidas pela Controladora no ramo da nutrição e saúde animal,
                cumpre-se esclarecer que todas as atividades de tratamento de dados pessoais sensíveis devem estar
                obrigatoriamente pautadas em uma das bases legais inseridas na Lei Geral de Proteção de Dados.
              </p>
            </li>
            <li>
              <p>
                I. Quando o titular ou seu responsável legal consentir, de forma específica e destacada, para
                finalidades específicas (inciso I da LGPD);
              </p>
            </li>
            <li>
              <p>II. sem fornecimento de consentimento do titular, nas hipóteses em que for indispensável para:</p>
              <ol className="flex flex-col gap-3 mt-3 mx-6">
                <li>
                  <p>
                    <span className="font-bold">a)</span> cumprimento de obrigação legal ou regulatória pelo
                    controlador;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">b)</span> tratamento compartilhado de dados necessários à execução, pela
                    administração pública, de políticas públicas previstas em leis ou regulamentos;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">c)</span> realização de estudos por órgão de pesquisa, garantida, sempre
                    que possível, a anonimização dos dados pessoais sensíveis;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">d)</span> exercício regular de direitos, inclusive em contrato e em
                    processo judicial, administrativo e arbitral, este último nos termos da Lei nº 9.307, de 23 de
                    setembro de 1996 (Lei de Arbitragem) ;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">e)</span> proteção da vida ou da incolumidade física do titular ou de
                    terceiro;
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">f)</span> tutela da saúde, exclusivamente, em procedimento realizado por
                    profissionais de saúde, serviços de saúde ou autoridade sanitária; ou
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">g)</span> garantia da prevenção à fraude e à segurança do titular, nos
                    processos de identificação e autenticação de cadastro em sistemas eletrônicos, resguardados os
                    direitos mencionados no art. 9º desta Lei e exceto no caso de prevalecerem direitos e liberdades
                    fundamentais do titular que exijam a proteção dos dados pessoais.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">
                6. DAS ATIVIDADES DE TRATAMENTO DOS DADOS PESSOAIS
              </h2>
              <p>
                O tratamento de dados pessoais envolvendo a atividade de prestação de serviços do grupo de empresas REAL
                H ocorre nas mais diversas relações em face do titular de dados, pelas quais, considera-se:
              </p>
              <ol className="flex flex-col gap-3 mt-3 mx-6">
                <li className="flex flex-col gap-3">
                  <p>
                    <span className="font-bold">a)</span> Da Navegação no Website – Aba “Seja Representante”
                  </p>
                  <p>
                    Disponibiliza-se no website institucional da REAL H (https://realh.com.br/seja-representante/ ) um
                    formulário de cadastro para qualquer pessoa se candidatar a trabalhar como um representante
                    comercial, mediante a coleta dos dados pessoais:
                  </p>
                  <div className="flex flex-col gap-2">
                    <p>✔ Nome;</p>
                    <p>✔ E-mail;</p>
                    <p>✔ Telefone;</p>
                    <p>✔ Estado;</p>
                    <p>✔ Cidade;</p>
                    <p>✔ Arquivo (eventual documento enviado pelo usuário)</p>
                  </div>
                  <p>
                    FINALIDADE: Estas informações são necessárias para fins de verificar a viabilidade e a possibilidade
                    da contratação do representante para desenvolver atividades comerciais devidas em face dos produtos
                    das empresas REAL H.
                  </p>
                  <p>
                    BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares
                    relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º,
                    inciso V da LGPD).
                  </p>
                  <p>
                    <strong>❖</strong> OBS: Poderá haver outros dados e documentos necessários para que a relação
                    comercial seja devidamente contratada.
                  </p>
                </li>
              </ol>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">
                b) Da Navegação no Website – Aba “Representante”
              </h2>
              <p>
                Na navegação na aba “Representantes”, as empresas REAL H oportunizam aos usuários o acesso a dados de
                diversas empresas e pessoas físicas que foram assim, pelos quais se apresentam mediante:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome Pessoal ou da Empresa;</p>
                <p>✔ Endereço completo com Cidade e Estado</p>
                <p>✔ Telefone/Celular;</p>
                <p>✔ E-mail;</p>
              </div>
              <p>
                FINALIDADE: Estas informações são necessárias para fins de atender aos anseios do titular de dados que
                desejem contatar alguns dos nossos representantes devidamente cadastrados.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados
                ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
              <p>
                <strong>❖</strong> OBS: Os representantes possuem contrato devidamente assinado em que contém,
                inclusive, ciência acerca da publicização dos seus dados no website, para fins de melhor
                comercialização.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">c)Da Navegação no Website – Aba “Contato”</h2>
              <p>
                Esta é uma opção fornecida ao titular que deseje obter maiores informações acerca das atividades
                comerciais ou qualquer outra informação, mediante o envio dos seguintes dados:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome;</p>
                <p>✔ E-mail;</p>
                <p>✔ Telefone;</p>
                <p>✔ Celular;</p>
                <p>✔ Estado;</p>
                <p>✔ Cidade;</p>
                <p>✔ Assunto;</p>
                <p>✔ Mensagem;</p>
              </div>
              <p>
                FINALIDADE: Disponibilizar uma forma de comunicação entre as empresas REAL H e usuários em face de
                solicitações, respostas, manifestações e informações correspondentes.
              </p>
              <p>BASE LEGAL: Mediante o fornecimento do consentimento do titular (artigo 7º, inciso I da LGPD).</p>
              <p>
                <strong>❖</strong> OBS: O contato mediante ligação demandará igualmente a coleta de informações, as
                quais permanecerão gravadas em URA de atendimento virtual.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">
                d) Da navegação no Website – “ Recebimento de notícias e ofertas”.
              </h2>
              <p>
                Para os usuários que desejarem receber notícias e ofertas das empresas REAL H, deverão apresentar alguns
                dados:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome;</p>
                <p>✔ E-mail;</p>
              </div>
              <p>FINALIDADE: Enviar informações que envolvam as atividades comerciais das empresas REAL H.</p>
              <p>BASE LEGAL: Mediante o fornecimento do consentimento do titular (artigo 7º, inciso I da LGPD).</p>
            </li>
            <li className="flex flex-col gap-2">
              <h2>e) Da navegação no Website – “Trabalhe Conosco”</h2>
              <p>
                As empresas REAL H estão sempre em busca de profissionais que querem participar do quadro de
                colaboradores. Para isso, há necessidade de alguns dados:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Primeiro nome;</p>
                <p>✔ Sobrenome;</p>
                <p>✔ Data de Nascimento;</p>
                <p>✔ E-mail;</p>
                <p>✔ Celular;</p>
                <p>✔ Senha com 8 caracteres</p>
                <p>✔ Currículo</p>
              </div>
              <p>
                FINALIDADE: Cadastrar candidatos a uma das oportunidades de emprego, mediante um cadastro prévio tanto
                ao banco de dados quanto para algumas vagas já determinadas.
              </p>
              <p>
                BASE LEGAL: Em se tratando de banco de talentos, a base legal aplicada será mediante o fornecimento do
                consentimento (artigo 7º, inciso I da LGPD). Já para uma das vagas específicas, a base legal aplicada
                será a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte
                o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
              <p>
                <strong>❖</strong> Há também a possibilidade de o usuário fazer seu cadastro mediante login com a conta
                de redes sociais com uma conta do google ou da rede LinkedIn.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">
                f) Da navegação no Website – Aba “Loja Virtual”
              </h2>
              <p>
                Para os usuários que desejarem realizar compras através do e-commerce disponibilizado pelas empresas
                REAL H, haverá a necessidade de realizar um cadastro, com as seguintes informações se pessoa física:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ E-mail</p>
                <p>✔ Senha;</p>
                <p>✔ CPF;</p>
                <p>✔ Inscrição Estadual;</p>
                <p>✔ Inscrição Estadual;</p>
                <p>✔ Sobrenome;</p>
                <p>✔ Telefone;</p>
                <p>✔ Celular;</p>
                <p>✔ CEP;</p>
                <p>✔ Número;</p>
                <p>✔ Bairro;</p>
                <p>✔ Cidade;</p>
                <p>✔ Estado;</p>
              </div>
              <p>
                FINALIDADE: Realizar um contrato de compra e venda de produtos através de uma loja virtual e realizar
                sua entrega mediante frete.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados
                ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD) e
                para o cumprimento de obrigação legal ou regulatória (artigo 7º, inciso II).
              </p>
              <p>
                <strong>❖</strong> OBS: Os mesmos dados deverão ser coletados em face daquele que ficará responsável
                pelo recebimento dos produtos, caso o endereço para a entrega seja diferente daquele mencionado nas
                informações pessoais.
              </p>
              <p>
                Para os dados de cartão de crédito, as empresas REAL H não terão acesso, uma vez que são repassados
                diretamente ao gateway de pagamento.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">
                g) Da navegação no Website – Ícone “Estamos online”
              </h2>
              <p>
                As empresas REAL H disponibilizam ainda, através da navegação no website, um ícone que integra o usuário
                diretamente com a plataforma de troca de mensagens instantâneas – WhatsApp, a qual haverá a necessidade
                do acesso ao:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome;</p>
                <p>✔ Celular;</p>
              </div>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados
                ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
              <p>
                <strong>❖</strong> OBS: No decorrer do atendimento, poderá ser necessário a coleta de outras informações
                para atender aos anseios do usuário.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">
                h) Da aquisição de produtos de forma presencial através dos Representantes
              </h2>
              <p>
                A venda de nossos produtos exigem a coleta de diversas informações dada à necessidade da relação
                comercial firmada, sendo:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome;</p>
                <p>✔ E-mail;</p>
                <p>✔ Telefone;</p>
                <p>✔ Celular;</p>
                <p>✔ Data de Nascimento;</p>
                <p>✔ RG;</p>
                <p>✔ CPF;</p>
                <p>✔ Inscrição estadual;</p>
                <p>✔ Endereço residencial;</p>
                <p>✔ Endereço de entrega;</p>
                <p>✔ Assinatura digital;</p>
              </div>
              <p>
                FINALIDADE: Operacionalizar a compra e venda de produtos comercializados pelas empresas REAL H,
                inclusive, em alguns casos, mediante a liberação de crédito à prazo.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados
                ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">i) Da atividade “Logística”</h2>
              <p>
                Nos casos em que há a necessidade de realizar o transporte das mercadorias comercializadas pelas
                empresas REAL H, coleta-se os seguintes dados dos motoristas:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome;</p>
                <p>✔ RG;</p>
                <p>✔ CPF;</p>
                <p>✔ CNH;</p>
                <p>✔ Celular;</p>
                <p>✔ Endereço residencial;</p>
                <p>✔ Número do PIS</p>
              </div>
              <p>
                FINALIDADE: Operacionalizar a entrega dos produtos adquiridos pelos clientes da REAL H, mediante frete
                próprio ou contratado de terceiros.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados
                ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-fb_blue_main">j) Da contratação de um Fornecedor</h2>
              <p>
                A contratação de fornecedores de produtos ou serviços será realizada mediante contrato e com a coleta
                dos seguintes dados: pessoais:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome;</p>
                <p>✔ Endereço;</p>
                <p>✔ RG;</p>
                <p>✔ CPF;</p>
                <p>✔ E-mail;</p>
                <p>✔ Dados bancários;</p>
              </div>
              <p>
                FINALIDADE: Informações necessárias para firmar um contrato entre as partes, decorrente de direitos e
                obrigações.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou diligências preliminares relacionadas ao
                contrato do qual seja parte o titular, a pedido do titular de dados (artigo 7º, inciso V da LGPD);
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <p>
                <strong>k) Das relações trabalhistas</strong>
              </p>
              <p>
                Em se tratando do tratamento de dados envolvendo os nossos colaboradores, necessário esclarecer que
                coletamos todos os dados exigidos por Lei aplicada e necessários para que seja estabelecida de forma
                lícita e devida a relação empregatícia, a saber:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome Completo;</p>
                <p>✔ CPF;</p>
                <p>✔ Telefone/Celular;</p>
                <p>✔ Data de Nascimento;</p>
                <p>✔ Número de Inscrição no INSS</p>
                <p>✔ Sexo;</p>
                <p>✔ Naturalidade;</p>
                <p>✔ Nacionalidade;</p>
                <p>✔ Nome da Mãe;</p>
                <p>✔ Nome do Pai;</p>
                <p>✔ Data de Nascimento;</p>
                <p>✔ E-mail;</p>
                <p>✔ Endereço Completo;</p>
                <p>✔ Cidade;</p>
                <p>✔ Bairro;</p>
                <p>✔ Currículo;</p>
                <p>✔ Exames Admissionais, Periódicos e Demissionais;</p>
                <p>✔ Carteira Nacional de Habilitação para aqueles que ocupam cargo de motoristas;</p>
                <p>✔ Carteira de Trabalho – CTPS</p>
                <p>✔ Dados Bancários para fins de cumprimento com os encargos salariais;</p>
                <p>✔ Certidão de Casamento;</p>
                <p>✔ Certidão de Nascimento dos filhos;</p>
              </div>
              <p>
                FINALIDADE: Informações necessárias para efetivar o registro do colaborador frente aos seus direitos
                trabalhistas inseridos em Lei.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato (artigo 7º, inciso V da LGPD) e; Para o
                cumprimento de Obrigação Legal (artigo 7º, inciso II da LGPD).
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">l) Do Relações de mídias com o Cliente</h2>
              <p>
                A RealH realiza com seus clientes, entrevista, podcast, lives e por vezes, coleta depoimentos acerca dos
                seus produtos utilizados e satisfação do resultado. Pode ocorrer das imagens do cliente serem coletadas
                em sua propriedade rural.
              </p>
              <p>
                Para tanto, todos os dados que serão utilizados serão editados por equipe técnica própria e divulgados
                através dos mais diversos meios de comunicação televisiva, internet, plataforma de terceiros como
                Youtube e sistemas internos com os colaboradores correspondentes à área de comércio.
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome Completo;</p>
                <p>✔ Imagem;</p>
                <p>✔ Voz;</p>
                <p>✔ Endereço;</p>
              </div>
              <p>FINALIDADE: Informações necessárias para realizar gravar e editar os vídeos que serão publicizados.</p>
              <p>BASE LEGAL: Mediante o fornecimento do consentimento pelo titular (artigo 7º, inciso I da LGPD).</p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">m) Da prospecção de clientes inativos</h2>
              <p>
                As empresas Real H possuem uma atividade voltada aos clientes inativados há mais de 180 dias, em que
                através de ligações e conversas por WhatsApp ou por e-mail, busca-se entender o motivo pela qual o
                titular está sem adquirir os produtos que até então eram habituais e com isso, oferecer uma oportunidade
                de negócios mediante oportunidades e até mesmo eventuais descontos para novas compras. Com isso tem-se
                acesso aos seguintes dados:
              </p>
              <div className="flex flex-col gap-2">
                <p>✔ Nome completo;</p>
                <p>✔ E-mail;</p>
                <p>✔ Telefone/WhatsApp;</p>
                <p>✔ Data de Nascimento;</p>
                <p>✔ CPF;</p>
                <p>✔ Endereço;</p>
                <p>✔ Inscrição Estadual;</p>
                <p>✔ CNPJ;</p>
                <p>✔ Nome da Propriedade;</p>
                <p>✔ Geolocalização da propriedade rural;</p>
                <p>✔ Número da Ficha como cliente</p>
              </div>
              <p>
                FINALIDADE: recuperar o titular como cliente ativo, mediante novas
                <br />
                aquisições.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a atender aos interesses legítimos do controlador ou de terceiro,
                exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos
                dados pessoais (artigo 7º, inciso IX da LGPD)
              </p>
              <p>
                OBS: A atividade de tratamento foi submetida a um teste de ponderação fundamentado no Legitimate
                Interests Assessement – LIA, em que se apurou a finalidade no tratamento, a legitimidade, necessidade,
                balanceamento e, principalmente, as salvaguardas quanto ao processo.
              </p>
              <p>
                Com isso, implementou-se mecanismos de oposição (opt-out) diante de eventual solicitação por parte do
                titular.
              </p>
              <p>
                Independentemente das atividades descritas, pelas quais, inclusive, poderá decorrer outras não listadas,
                as empresas REAL H esclarecem que toda a atividade de tratamento envolvendo dados pessoais será cumprida
                de forma a atender aos princípios éticos, pautados na transparência, finalidade e adequação, desde a
                coleta até a efetiva eliminação.
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">
                7. Dos Dados Pessoais de Crianças e Adolescentes
              </h2>
              <p>
                Não há coleta intencional de dados de crianças e/ou adolescentes quando do uso ou cadastro dos serviços
                disponibilizados em nosso website, pela qual fica condicionado à maioridade civil, atualmente vigente no
                Brasil, como todo aquele que possuir 18 (dezoito) anos.
              </p>
              <aside>
                <strong>Nota especial:</strong>
                <p>
                  Recomendamos aos pais e responsáveis legais das crianças e adolescentes que verifiquem e monitorem o
                  uso pelos seus filhos do nosso website, para garantir que não haja o compartilhamento dos dados
                  pessoais conosco. Caso seja assim constatado, solicitamos gentilmente que nos contate e reporte o fato
                  para providências.
                </p>
              </aside>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">8. Compartilhamento dos Dados Pessoais</h2>
              <p>
                Não será compartilhado e tampouco divulgado qualquer dado pessoal sem o consentimento do seu titular,
                exceto quando houver o atendimento a uma exigência legal ou regulatória...
              </p>
              <ul className="flex flex-col gap-3 mt-3 mx-6">
                <li>
                  <strong>Prestadores de serviços ou fornecedores:</strong> Dados podem ser compartilhados com terceiros
                  sob contrato, como transportadoras, correios e contabilidade.
                </li>
                <li>
                  <strong>Instituições financeiras:</strong> Para transações de pagamento e emissão de boletos.
                </li>
                <li>
                  <strong>Liberação de crédito:</strong> Compartilhamento com órgãos como SCPC e Serasa.
                </li>
                <li>
                  <strong>Atendimento ao titular:</strong> Contato via telefone, e-mail e WhatsApp com medidas de
                  segurança adequadas.
                </li>
                <li>
                  <strong>Obrigações fiscais e tributárias:</strong> Envio de dados a entidades governamentais para
                  emissão de notas fiscais e impostos.
                </li>
                <li>
                  <strong>Publicização de eventos:</strong> Divulgação de imagens e informações em mídias digitais.
                </li>
                <li>
                  <strong>Softwares e plataformas de gestão:</strong> Utilização de sistemas informatizados para
                  administração comercial.
                </li>
                <li>
                  <strong>Entidades públicas:</strong> Envio de dados para cumprimento de obrigações legais.
                </li>
                <li>
                  <strong>Legítimo interesse:</strong> Compartilhamento para ações de apoio e promoção da empresa.
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">9. Segurança e Confidencialidade dos Dados</h2>
              <p>Diversas medidas de segurança foram implementadas, incluindo:</p>
              <ul className="flex flex-col gap-3 mt-3 mx-6">
                <li>Proteção contra acesso não autorizado;</li>
                <li>Controle de acesso restrito a dados pessoais;</li>
                <li>Criação de políticas internas de governança e segurança;</li>
                <li>Monitoramento e proteção tecnológica como firewall e backups.</li>
              </ul>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">10. Direitos dos Titulares dos Dados Pessoais</h2>
              <p>Os titulares possuem os seguintes direitos conforme a LGPD:</p>
              <ul className="flex flex-col gap-3 mt-3 mx-6">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso, correção e eliminação de dados desnecessários;</li>
                <li>Informação sobre compartilhamento de dados;</li>
                <li>Revogação do consentimento e oposição ao tratamento indevido.</li>
              </ul>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">12. Transferência Internacional</h2>
              <p>
                Os dados são armazenados em locais seguros, podendo ser utilizados em nuvem. Caso haja transferência
                internacional, será garantida a conformidade com as leis aplicáveis.
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">13. Término do Tratamento dos Dados</h2>
              <p>O tratamento de dados será encerrado nos seguintes casos:</p>
              <ul className="flex flex-col gap-3 mt-3 mx-6">
                <li>Finalidade alcançada;</li>
                <li>Violação das normas da LGPD;</li>
                <li>Solicitação do titular para exclusão de dados.</li>
              </ul>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">14. Legislação Aplicável</h2>
              <p>
                Esta política segue a Lei Geral de Proteção de Dados nº 13.709/2018 e eventuais conflitos serão
                resolvidos no foro da Comarca de Campo Grande – Mato Grosso do Sul.
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-fb_blue_main">15. Alterações</h2>
              <p>
                Este aviso poderá sofrer atualizações para aprimoramento contínuo. Última atualização: 08 de dezembro de
                2023, <br /> versão 2.0.
              </p>
            </li>
          </ol>
        </div>
        <div></div>
      </div>
    </main>
  );
}
