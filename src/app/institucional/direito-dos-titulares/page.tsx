import React from "react";

export default function PageDireitoDosTitular() {
  return (
    <main className="fb_container relative gap-fb_space-section mb-5">
      <div className="flex flex-col gap-fb_space-section">
        <div>
          <h1 className="text-3xl font-bold text-center">Lei Geral de Proteção de Dados (LGPD)</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#333333]">
          <div className="flex flex-col gap-2">
            <p>
              A Lei Geral de Proteção de Dados sob nº 13.709/2018, também conhecida pela sigla LGPD é a primeira
              legislação do Brasil que trata especificamente do uso de dados pessoais de pessoas naturais desde o
              momento da sua coleta até a efetiva eliminação, com base nos princípios da privacidade, transparência,
              finalidade, dentre outros.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">O que são dados pessoais?</h2>
            <p>
              O conceito de dado pessoal adotado é bastante amplo, uma vez que será qualificado como qualquer dado,
              isolado ou em conjunto com outros dados, que possa ou tenha o potencial de tornar a pessoa identificada ou
              identificável, tais como: nome completo, CPF, CNH, RG, endereço residencial, endereço eletrônico, data de
              nascimento, imagem, geolocalização, IP (Internet Protocol), dentre outras.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">O que são dados pessoais sensíveis?</h2>
            <p>
              São conceituados como aqueles que podem dar uma conotação discriminatória. A LGPD indica uma lista dos
              dados pessoais considerados sensíveis e dizem respeito aos dados sobre origem racial ou étnica, convicção
              religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou
              político, dado referente à saúde ou à vida sexual, e dado genético ou biométrico.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">O que significa tratar os dados pessoais?</h2>
            <p>
              Tratamento é qualquer operação realizada com um dado pessoal que se inicia com a coleta, classificação,
              utilização, compartilhamento, reprodução, processamento, arquivamento, armazenamento até o efetivo
              descarte.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">Quem são os Agentes de Tratamento?</h2>
            <p>São duas figuras consideradas:</p>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <strong>O Controlador:</strong> que é a empresa/organização que toma as decisões em relação aos dados
                pessoais e é o responsável por definir quando e como os dados serão coletados, para quais finalidades
                serão utilizados, onde e por quanto tempo serão armazenados etc.
              </li>
              <li>
                <strong>O Operador dos dados:</strong> representado pela empresa/organização que realiza o processamento
                de dados pessoais sob as ordens do Controlador. Assim, ele está proibido de tomar suas próprias decisões
                acerca do tratamento destes dados.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">Quem são os titulares?</h2>
            <p>
              Trata-se de uma pessoa física que detém a propriedade dos dados pessoais, qualificando-se como: cliente,
              fornecedor, representante comercial, prestador de serviço, o candidato a uma das vagas de emprego, o
              colaborador e seu dependente na condição de filho, cônjuge ou companheiro, o usuário do website, enfim,
              toda pessoa física que venha a manter alguma relação com a REAL H pela qual há o envolvimento de dados
              pessoais.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">Bases Legais da LGPD</h2>
            <h3 className="text-lg font-medium text-fb_blue_main ml-2">
              O que são bases Legais de Tratamento de Dados?
            </h3>
            <p>
              São hipóteses da LGPD que autorizam o tratamento de dados pessoais. Importante destacar que a relação de
              bases legais que a LGPD cita são taxativas – isso significa dizer que não existe nenhuma outra hipótese,
              além das expressamente descritas ali. A lei prevê que para uma pessoa (física ou jurídica) realizar
              qualquer operação com um dado pessoal – seja coletar, transmitir ou processar — é necessário ter, pelo
              menos uma base legal que legitime o tratamento desses dados, dentre elas: Consentimento, Execução de
              Contrato, Obrigação Legal ou Regulatória, Legítimo Interesse, Execução de Políticas Públicas, Exercício de
              Direito em Processos Judiciais, Administrativos ou Arbitral, Proteção da Vida, Tutela da Saúde e, por fim,
              Proteção ao Crédito.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">Princípios da LGPD</h2>
            <h3 className="text-lg font-medium text-fb_blue_main ml-2">
              Quais princípios a LGPD exige que os dados tratados estejam em conformidade?
            </h3>
            <p>
              Os princípios são orientações gerais, decorrentes das exigências de equidade, de justiça ou de moralidade.
              No campo da proteção dos dados pessoais, são padrões de boas práticas que sua empresa deve aplicar em
              todos os fluxos e práticas envolvendo dados pessoais.
            </p>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <h4 className="font-semibold">Finalidade:</h4>
                <p>
                  O tratamento de cada informação pessoal deve ser feito para fins específicos, legítimos, explícitos e
                  previamente informados. Ou seja, as empresas devem explicar ao usuário para que usarão cada um dos
                  dados pessoais coletados.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Adequação:</h4>
                <p>
                  Este princípio está amplamente vinculado ao da finalidade, pois prevê o tratamento dos dados somente
                  pode ocorrer quando houver compatibilidade com as finalidades informadas ao titular, de acordo com o
                  contexto do tratamento, ou seja, dados devem ser tratados apenas para a finalidade que foi informada
                  ao usuário.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Necessidade:</h4>
                <p>
                  O princípio da necessidade guarda relação direta com a finalidade e a adequação, uma vez que a coleta
                  e utilização de dados pessoais deve se restringir ao mínimo necessário para a realização das
                  finalidades pretendidas pela instituição empresarial.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Transparência:</h4>
                <p>
                  Quando a LGPD exige transparência quanto ao tratamento dos dados pessoais, em verdade, impõem ao
                  Controlador que preste informações claras, precisas e facilmente acessíveis ao titular, observados os
                  segredos comercial e industrial.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Livre Acesso:</h4>
                <p>
                  Para que a lei possa ser efetiva os titulares devem ter a possibilidade de controlar o uso de seus
                  dados pessoais (fundamento da autodeterminação afirmativa), para isso é necessário ser garantido a ele
                  o livre acesso aos seus dados bem como sobre a sua integridade.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Qualidade dos Dados:</h4>
                <p>
                  O princípio da qualidade dos dados garante aos titulares exatidão, clareza, relevância e atualização
                  dos dados, de acordo com a necessidade e para o cumprimento da finalidade de seu tratamento.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Segurança:</h4>
                <p>
                  A segurança compreende nas medidas técnicas e administrativas aptas a proteger os dados pessoais de
                  acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração,
                  comunicação ou difusão. Atua junto ao princípio da prevenção, vez que se realiza a contratação de
                  mecanismos de segurança exatamente para mitigar e poder prevenir de eventuais incidentes.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Prevenção:</h4>
                <p>
                  O princípio da prevenção determina a adoção de posturas preventivas e medidas proativas e não reativas
                  de modo a evitar incidentes de violação à privacidade.
                </p>
                <p>
                  O tratamento de dados não pode ser realizado para fins discriminatórios, ilícitos ou abusivos. Não se
                  pode ter exclusão de titulares de dados pessoais no momento de seu tratamento de dados por
                  determinadas características, sejam elas de origem racial ou étnica, opinião política, religião ou
                  convicções, geolocalização, filiação sindical, estado genético ou de saúde ou orientação sexual.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Responsabilização e Prestação de Contas:</h4>
                <p>
                  O princípio da responsabilização e da prestação de contas dispõe que o agente tratador dos dados
                  pessoais (controlador ou operador), deverá demonstrar todas as medidas eficazes e capazes de comprovar
                  o cumprimento da LGPD e, ainda, a eficácia das medidas aplicadas.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-fb_blue_main">Direitos dos Titulares de Dados</h2>
            <ul className="flex flex-col gap-3 ml-2">
              <li>
                <h4 className="font-semibold">Confirmação da existência de tratamento:</h4>
                <p>
                  A LGPD garante aos titulares de dados, o direito a confirmar se uma empresa realiza o tratamento de
                  seus dados pessoais, pela qual a resposta, deve ser apresentada de forma imediata e de maneira
                  simplificada, ou por meio de declaração “clara e completa”, que indique a origem dos dados, os
                  critérios usados e a finalidade do tratamento. O prazo para a resposta no formato completo é de até 15
                  dias contados a partir da data do requerimento.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Acesso aos dados:</h4>
                <p>
                  Além de saber se a empresa trata seus dados pessoais, o titular também pode solicitar o direito ao
                  acesso aos dados. Ou seja, é possível obter uma cópia dos dados pessoais que a empresa possui em seus
                  arquivos. Da mesma forma que a confirmação de tratamento, o acesso também pode ser respondido de forma
                  imediata e simplificada ou por meio de declaração completa no prazo de até 15 dias contados da data do
                  requerimento.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Correção de dados:</h4>
                <p>
                  Outro direito do titular de dados é solicitar à empresa a correção de dados pessoais incompletos,
                  inexatos ou desatualizados. É o caso, por exemplo, de uma atualização de endereço, número de telefone
                  ou estado civil.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Anonimização, bloqueio ou eliminação de dados:</h4>
                <p>
                  O titular de dados possui o direito de solicitar a anonimização (processo que torna um dado impossível
                  de ser vinculado a um indivíduo), bloqueio ou eliminação de dados quando eles forem “desnecessários,
                  excessivos ou tratados em desconformidade” com a lei.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Portabilidade dos dados:</h4>
                <p>
                  A LGPD prevê ainda que o titular de dados pode solicitar a portabilidade dos dados, ou seja, a
                  transferência das suas informações pessoais a outro fornecedor de serviço ou produto. Neste caso,
                  entretanto, é preciso esclarecer que a REAL H cumpre com obrigações legais e regulatórias.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Eliminação dos dados tratados com consentimento:</h4>
                <p>
                  Este direito será exercido quando o titular dos dados consentiu com o tratamento, porém, mudou de
                  ideia e não quer mais que a empresa trate seus dados pessoais. No entanto, há situações em que esse
                  direito não poderá ser exercido, como o caso em que a instituição empresarial necessita conservar os
                  dados para cumprir obrigação legal ou regulatória.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Informações sobre o compartilhamento de dados:</h4>
                <p>
                  A LGPD preza, neste e em outros pontos da lei, pela transparência. Desta forma, é direito do titular
                  saber exatamente com quem o controlador está compartilhando seus dados.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Informação sobre a possibilidade de não fornecer consentimento:</h4>
                <p>
                  A LGPD trouxe a premissa de que o consentimento para o tratamento dos dados pessoais deve ser pedido e
                  concedido de forma clara, transparente e totalmente livre. Para isso, o titular de dados tem o direito
                  de ser informado sobre a possibilidade de não fornecer o consentimento e de quais as consequências
                  caso o consentimento seja negado. É o caso, por exemplo, de um usuário que é convidado a consentir ou
                  não com o uso de cookies em um site. Se o não consentimento for prejudicar a experiência de navegação
                  ou impedir o acesso a algumas ferramentas, o usuário deve ser informado disso.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
