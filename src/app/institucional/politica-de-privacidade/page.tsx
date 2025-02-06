import BtnCallToAction from '@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction'
import Image from 'next/image'

export default function PagePrivacidade() {
  return (
    <main className="fb_container relative mt-24 gap-fb_space-section">
      <div className="flex flex-col gap-fb_space-section">
        <div>
          <h1 className="text-3xl font-bold text-center">Seja bem-vindo ao Portal LGPD da REAL H!</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#333333]">
          <h2 className="text-xl font-semibold text-fb_blue_main">
            AVISO DE PRIVACIDADE
          </h2>
          <p>Seja bem vindo(a) ao grupo de empresas Real H!</p>
          <p>
            O presente documento intitulado Aviso de Privacidade foi elaborado para você cliente, colaborador, prestador de serviço, representante, distribuidor autorizado ou simples usuário do website das empresas REAL H, a fim de que se possa oferecer o máximo de transparência à forma com a qual os dados pessoais serão tratados ao longo de todo o ciclo de vida, desde o momento da coleta, compartilhamento, reutilização até a efetiva eliminação, em atendimento à conformidade exigida pela Lei Geral de Proteção de Dados nº 13.709/2018 (LGPD).
          </p>
          <ol className="flex flex-col gap-3">
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">1. DAS INFORMAÇÕES ÚTEIS</h2>
              <p>
                A Real H é representada por um grupo de empresas que exercem atividades comerciais voltadas à nutrição e saúde animal e no âmbito da Lei Geral de Proteção de Dados, será qualificada como predominantemente Controladora, na medida que impõe decisões sobre os dados pessoais pela quais têm a obrigação de tratamento: 
              </p>
              <div className="h-auto w-full">
                <Image 
                  src="/images/institucional/tabela-real-cia-cmr-laboratorio-cnpj.webp"
                  alt="Imagem com os CNPJ da empresas Real H e CMR Láboratorios"
                  width={400}
                  height={300}
                  sizes='(min-width: 424px) width: 600px;'
                  className='w-full h-[400px] mx-auto object-contain object-center'
                />
              </div>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">2. DO ENCARREGADO DE PROTEÇÃO DE DADOS</h2>
              <p>O Encarregado de Proteção de Dados é o responsável escolhido pelas empresas REAL H para atuar como canal de comunicação entre o Controlador, os titulares de dados (clientes, representantes, fornecedores e colaboradores) e a Autoridade Nacional de Proteção de Dados (ANPD), quando necessário e será representado por:</p>
              <p>
              Encarregado de Proteção de Dados as a service: Deborah Francielle Mesquita Polsaque Alves Sociedade Individual de Advocacia
CNPJ 34.283.369/0001-70
E-mail de contato: lgpd@realh.com.br
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">3. DAS DEFINIÇÕES.</h2>
              <p>Para facilitar a leitura e compreensão do presente Aviso de Privacidade, as empresas REAL H apresentam abaixo, algumas definições importantes trazidas pela Lei Geral de Proteção de Dados:
              </p>
              <div className="flex flex-col gap-2">
                <div className="h-auto">
                  <Image 
                    src="/images/institucional/infografico-1.webp"
                    alt="Imagem com os CNPJ da empresas Real H e CMR Láboratorios"
                    width={400}
                    height={300}
                    sizes='(min-width: 768px) width: 600px;'
                    className='h-[300px] md:h-[600px] md:w-full mx-auto object-contain'
                  />
                </div>
                <div className="h-auto">
                  <Image 
                    src="/images/institucional/infografico-2.webp"
                    alt="Imagem com os CNPJ da empresas Real H e CMR Láboratorios"
                    width={300}
                    height={300}
                    sizes='(min-width: 768px) width: 600px;'
                    className='h-[300px] md:h-[600px] md:w-full mx-auto object-contain'
                  />
                </div>
              </div>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">4. DAS BASES LEGAIS PARA O TRATAMENTO DE DADOS</h2>
              <p>
              Tendo em vista as atividades desenvolvidas pela Controladora no ramo da nutrição e saúde animal, cumpre-se esclarecer que todas as atividades de tratamento devem estar obrigatoriamente pautadas em uma das bases legais inseridas na Lei Geral de Proteção de Dados.

Para o tratamento envolvendo dados pessoais, as bases estão descrita nos artigos 7º:
              <ol className="flex flex-col gap-3 mx-4">
                <li>
                  I. Mediante o fornecimento de consentimento pelo titular;
                </li>
                <li>
                  II. Para o cumprimento de obrigação legal ou regulatória pelo controlador;
                </li>
                <li>
                  III. Pela administração pública, para o tratamento e uso compartilhado de dados necessários à execução de políticas públicas previstas em leis e regulamentos ou respaldadas em contratos, convênios ou instrumentos congêneres, observadas as disposições do Capítulo IV desta Lei;
                </li>
                <li>
                  IV. Para a realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;
                </li>
                <li>
                  V. Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados;
                </li>
                <li>
                  VI. Para o exercício regular de direitos em processo judicial, administrativo ou arbitral, esse último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem);
                </li>
                <li>
                  VII. Para a proteção da vida ou da incolumidade física do titular ou de terceiro;
                </li>
                <li>
                  VIII. Para a tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária;
                </li>
                <li>
                  IX. Quando necessário para atender aos interesses legítimos do controlador ou de terceiro, exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais; ou
                </li>
                <li>
                  X. Para a proteção do crédito, inclusive quanto ao disposto na legislação pertinente.
                </li>
              </ol>
              </p>
            </li>
            <li>
              <p>
                Para o tratamento envolvendo dados pessoais sensíveis, as bases estão descrita nos artigos 11º:
              </p>
              <ol className='flex flex-col gap-3 mx-4'>
                <li>
                  I. Quando o titular ou seu responsável legal consentir, de forma específica e destacada, para finalidades específicas (inciso I da LGPD);
                </li>
                <li>
                  II. sem fornecimento de consentimento do titular, nas hipóteses em que for indispensável para:
                </li>
              </ol>
            </li>
            <li>
              <ol className='flex flex-col gap-3 mx-4'>
                <li>
                  <p>
                    a) cumprimento de obrigação legal ou regulatória pelo controlador;
                  </p>
                </li>
                <li>
                  <p>
                    b) tratamento compartilhado de dados necessários à execução, pela administração pública, de políticas públicas previstas em leis ou regulamentos;
                  </p>
                </li>
                <li>
                  <p>
                    c) realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais sensíveis;
                  </p>
                </li>
                <li>
                  <p>
                    d) exercício regular de direitos, inclusive em contrato e em processo judicial, administrativo e arbitral, este último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem) ;
                  </p>
                </li>
                <li>
                  <p>
                    e) proteção da vida ou da incolumidade física do titular ou de terceiro;
                  </p>
                </li>
                <li>
                  <p>
                    f) tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária; ou
                  </p>
                </li>
                <li>
                  <p>
                    g) garantia da prevenção à fraude e à segurança do titular, nos processos de identificação e autenticação de cadastro em sistemas eletrônicos, resguardados os direitos mencionados no art. 9º desta Lei e exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">5. DAS BASES LEGAIS PARA O TRATAMENTO DE DADOS PESSOAIS SENSÍVEIS – ART. 11</h2>
              <p>Tendo em vista as atividades desenvolvidas pela Controladora no ramo da nutrição e saúde animal, cumpre-se esclarecer que todas as atividades de tratamento de dados pessoais sensíveis devem estar obrigatoriamente pautadas em uma das bases legais inseridas na Lei Geral de Proteção de Dados.</p>
            </li>
            <li>
              <p>I. Quando o titular ou seu responsável legal consentir, de forma específica e destacada, para finalidades específicas (inciso I da LGPD);</p>
            </li>
            <li>
              <p>II. sem fornecimento de consentimento do titular, nas hipóteses em que for indispensável para:</p>
              <ol>
                <li>
                  <p>a) cumprimento de obrigação legal ou regulatória pelo controlador;</p>
                </li>
                <li>
                  <p>b) tratamento compartilhado de dados necessários à execução, pela administração pública, de políticas públicas previstas em leis ou regulamentos;</p>
                </li>
                <li>
                  <p>c) realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais sensíveis;</p>
                </li>
                <li>
                  <p>d) exercício regular de direitos, inclusive em contrato e em processo judicial, administrativo e arbitral, este último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem) ;</p>
                </li>
                <li>
                  <p>e) proteção da vida ou da incolumidade física do titular ou de terceiro;</p>
                </li>
                <li>
                  <p>f) tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária; ou</p>
                </li>
                <li>
                  <p>g) garantia da prevenção à fraude e à segurança do titular, nos processos de identificação e autenticação de cadastro em sistemas eletrônicos, resguardados os direitos mencionados no art. 9º desta Lei e exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais.</p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">
                6. DAS ATIVIDADES DE TRATAMENTO DOS DADOS PESSOAIS
              </h2>
              <p>
                O tratamento de dados pessoais envolvendo a atividade de prestação de serviços do grupo de empresas REAL H ocorre nas mais diversas relações em face do titular de dados, pelas quais, considera-se:
              </p>
              <ol>
                <li>
                  <p>
                    a) Da Navegação no Website – Aba “Seja Representante”
                  </p>
                  <p>
                    Disponibiliza-se no website institucional da REAL H (https://realh.com.br/seja-representante/ ) um formulário de cadastro para qualquer pessoa se candidatar a trabalhar como um representante comercial, mediante a coleta dos dados pessoais:
                  </p>
                  <div className='flex flex-col gap-3'>
                    <p>
                      ✔ Nome;
                    </p>
                    <p>
                      ✔ E-mail;
                    </p>
                    <p>
                      ✔ Telefone;
                    </p>
                    <p>
                      ✔ Estado;
                    </p>
                    <p>
                      ✔ Cidade;
                    </p>
                    <p>
                      ✔ Arquivo (eventual documento enviado pelo usuário)
                    </p>
                  </div>
                  <p>
                    FINALIDADE: Estas informações são necessárias para fins de verificar a viabilidade e a possibilidade da contratação do representante para desenvolver atividades comerciais devidas em face dos produtos das empresas REAL H.
                  </p>
                  <p>BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).</p>
                  <p>
                    ❖ OBS: Poderá haver outros dados e documentos necessários para que a relação comercial seja devidamente contratada.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">b) Da Navegação no Website – Aba “Representante”</h2>
              <p>
                Na navegação na aba “Representantes”, as empresas REAL H oportunizam aos usuários o acesso a dados de diversas empresas e pessoas físicas que foram assim, pelos quais se apresentam mediante:
              </p>
              <div className='flex flex-col gap-3'>
                <p>
                  ✔ Nome Pessoal ou da Empresa;
                </p>
                <p>
                  ✔ Endereço completo com Cidade e Estado
                </p>
                <p>
                  ✔ Telefone/Celular;
                </p>
                <p>
                  ✔ E-mail;
                </p>
              </div>
              <p>
                FINALIDADE: Estas informações são necessárias para fins de atender aos anseios do titular de dados que desejem contatar alguns dos nossos representantes devidamente cadastrados.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
              <p>
                ❖ OBS: Os representantes possuem contrato devidamente assinado em que contém, inclusive, ciência acerca da publicização dos seus dados no website, para fins de melhor comercialização.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">
                c) Da Navegação no Website – Aba “Contato”
              </h2>
              <p>
                Esta é uma opção fornecida ao titular que deseje obter maiores informações acerca das atividades comerciais ou qualquer outra informação, mediante o envio dos seguintes dados:
              </p>
              <div className='flex flex-col gap-3'>
                <p>
                  ✔ Nome;
                </p>
                <p>
                  ✔ E-mail;
                </p>
                <p>
                  ✔ Telefone;
                </p>
                <p>
                  ✔ Celular;
                </p>
                <p>
                  ✔ Estado;
                </p>
                <p>
                  ✔ Cidade;
                </p>
                <p>
                  ✔ Assunto;
                </p>
                <p>
                  ✔ Mensagem;
                </p>
              </div>
              <p>
                FINALIDADE: Disponibilizar uma forma de comunicação entre as empresas REAL H e usuários em face de solicitações, respostas, manifestações e informações correspondentes.
              </p>
              <p>BASE LEGAL: Mediante o fornecimento do consentimento do titular (artigo 7º, inciso I da LGPD).</p>
              <p>❖ OBS: O contato mediante ligação demandará igualmente a coleta de informações, as quais permanecerão gravadas em URA de atendimento virtual.</p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">
                d) Da navegação no Website – “ Recebimento de notícias e ofertas”.
              </h2>
              <p>
                Para os usuários que desejarem receber notícias e ofertas das empresas REAL H, deverão apresentar alguns dados:
              </p>
              <div>
                <p>
                  ✔ Nome;
                </p>
                <p>
                  ✔ E-mail;
                </p>
              </div>
              <p>FINALIDADE: Enviar informações que envolvam as atividades comerciais das empresas REAL H.</p>
              <p>BASE LEGAL: Mediante o fornecimento do consentimento do titular (artigo 7º, inciso I da LGPD).</p>
            </li>
            <li>
              <h2>e) Da navegação no Website – “Trabalhe Conosco”</h2>
              <p>As empresas REAL H estão sempre em busca de profissionais que querem participar do quadro de colaboradores. Para isso, há necessidade de alguns dados:</p>
              <div>
                <p>
                  ✔ Primeiro nome;
                </p>
                <p>
                  ✔ Sobrenome;
                </p>
                <p>
                  ✔ Data de Nascimento;
                </p>
                <p>
                  ✔ E-mail;
                </p>
                <p>
                  ✔ Celular;
                </p>
                <p>
                  ✔ Senha com 8 caracteres
                </p>
                <p>
                  ✔ Currículo
                </p>
              </div>
              <p>FINALIDADE: Cadastrar candidatos a uma das oportunidades de emprego, mediante um cadastro prévio tanto ao banco de dados quanto para algumas vagas já determinadas.</p>
              <p>
                BASE LEGAL: Em se tratando de banco de talentos, a base legal aplicada será mediante o fornecimento do consentimento (artigo 7º, inciso I da LGPD). Já para uma das vagas específicas, a base legal aplicada será a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).
              </p>
              <p>
                ❖ Há também a possibilidade de o usuário fazer seu cadastro mediante login com a conta de redes sociais com uma conta do google ou da rede LinkedIn.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">f) Da navegação no Website – Aba “Loja Virtual”</h2>
              <p>
                Para os usuários que desejarem realizar compras através do e-commerce disponibilizado pelas empresas REAL H, haverá a necessidade de realizar um cadastro, com as seguintes informações se pessoa física:
              </p>
              <div>
                <p>
                  ✔ E-mail
                </p>
                <p>
                  ✔ Senha;
                </p>
                <p>
                  ✔ CPF;
                </p>
                <p>
                  ✔ Inscrição Estadual;
                </p>
                <p>
                ✔ Inscrição Estadual;
                </p>
                <p>
                ✔ Sobrenome;
                </p>
                <p>
                ✔ Telefone;
                </p>
                <p>
                ✔ Celular;
                </p>
                <p>
                ✔ CEP;
                </p>
                <p>
                ✔ Número;
                </p>
                <p>
                ✔ Bairro;
                </p>
                <p>
                ✔ Cidade;
                </p>
                <p>
                  ✔ Estado;
                </p>
              </div>
              <p>
                FINALIDADE: Realizar um contrato de compra e venda de produtos através de uma loja virtual e realizar sua entrega mediante frete.
              </p>
              <p>
                BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD) e para o cumprimento de obrigação legal ou regulatória (artigo 7º, inciso II).
              </p>
              <p>❖ OBS: Os mesmos dados deverão ser coletados em face daquele que ficará responsável pelo recebimento dos produtos, caso o endereço para a entrega seja diferente daquele mencionado nas informações pessoais.</p>
              <p>Para os dados de cartão de crédito, as empresas REAL H não terão acesso, uma vez que são repassados diretamente ao gateway de pagamento.</p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">g) Da navegação no Website – Ícone “Estamos online”</h2>
              <p>As empresas REAL H disponibilizam ainda, através da navegação no website, um ícone que integra o usuário diretamente com a plataforma de troca de mensagens instantâneas – WhatsApp, a qual haverá a necessidade do acesso ao:</p>
              <div>
                <p>✔ Nome;</p>
                <p>✔ Celular;</p>
              </div>
              <p>BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).</p>
              <p>❖ OBS: No decorrer do atendimento, poderá ser necessário a coleta de outras informações para atender aos anseios do usuário.</p>
            </li>
            <li>
              <h2>h) Da aquisição de produtos de forma presencial através dos Representantes</h2>
              <p>A venda de nossos produtos exigem a coleta de diversas informações dada à necessidade da relação comercial firmada, sendo:</p>
              <div>
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
              <p>FINALIDADE: Operacionalizar a compra e venda de produtos comercializados pelas empresas REAL H, inclusive, em alguns casos, mediante a liberação de crédito à prazo.</p>
              <p>BASE LEGAL: Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados (artigo 7º, inciso V da LGPD).</p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-fb_blue_main">i) Da atividade “Logística”</h2>
            </li>
          </ol>
        </div>
        <div>
          {/* Links para as outras páginas. */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-4 w-fit mx-auto lg:mx-0 mb-4">
            <BtnCallToAction
              ctaLink="/institucional/politica-de-privacidade"
              content="Política de privacidade"
              color='fb_blue_button'
              key="politica_de_privacidade"
              classCssForBTN='justify-between'
            />
            <BtnCallToAction
              ctaLink="/institucional/politica-de-cookies"
              content="Política de cookies"
              color='fb_blue_button'
              key="politica_de_cookies"
              classCssForBTN='justify-between'
            />
            <BtnCallToAction
              ctaLink="/institucional/direito-dos-titulares"
              content="Direito dos titulares"
              color='fb_blue_button'
              key="direito_dos_titulares"
              classCssForBTN='justify-between'
            />
            <BtnCallToAction
              ctaLink="/institucional/atendimento-ao-titular"
              content="Atendimento ao titular"
              color='fb_blue_button'
              key="atendimento_ao_titulares"
              classCssForBTN='justify-between'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
