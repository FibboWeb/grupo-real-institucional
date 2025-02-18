import "./index.css";

export default function Page() {
  return (
    <main className='relative mt-32 fb_container'>
      <div className="flex flex-col gap-fb_space-section text-[#333333] text-lg mb-5">
        <div>
          <h1 className="text-3xl font-bold text-center">Atendimento ao Titular</h1>
        </div>
        <div className="flex flex-col gap-5">
          <p>Este é o Formulário de Solicitação de Atendimento aos Titulares da REAL H, onde oferecemos a você a oportunidade de exercer um dos seus direitos previstos na Lei Geral de Proteção de Dados nº. 13.709/2018 (LGPD).</p>
          <p>Para realizar as solicitações nos termos da LGPD, é necessário preencher o Formulário abaixo:</p>
        </div>
        <div>
          <form action="/atendimento-ao-titular/#wpcf7-f32302-p32316-o1" method="post" className='flex flex-col gap-6'>
            <div>
              <p className="text-fb_blue_main font-medium">Tipo de usuário (obrigatório):</p>
              <div className="flex gap-2">
                <input type="radio" name="tipo_usuario" id="cliente" value="cliente" />
                <label htmlFor="cliente">Cliente</label>
                <input type="radio" name="tipo_usuario" id="colaborador" value="colaborador" />
                <label htmlFor="colaborador">Colaborador</label>
                <input type="radio" name="tipo_usuario" id="fornecedor" value="fornecedor" />
                <label htmlFor="fornecedor">Fornecedor/Terceiro</label>
              </div>
            </div>
            <div>
              <p className='flex font-medium'>Tipo de solicitação (obrigatório):</p>
              <div className="flex flex-col gap-2 text-fb_text_gray">
                <div>
                  <input type="radio" name="tipo_solicitacao" id="acessar" value="acessar" />
                  <label htmlFor="acessar">Quero acessar meus dados;</label>
                </div>
                <div>
                  <input type="radio" name="tipo_solicitacao" id="corrigir" value="corrigir" />
                  <label htmlFor="corrigir">Quero corrigir ou atualizar meus dados;</label>
                </div>
                <div>
                  <input type="radio" name="tipo_solicitacao" id="eliminar" value="eliminar" />
                  <label htmlFor="eliminar">Gostaria solicitar a anonimização, o bloqueio ou eliminação dos meus Dados;</label>
                </div>
                <div>
                  <input type="radio" name="tipo_solicitacao" id="portabilidade" value="portabilidade" />
                  <label htmlFor="portabilidade">Gostaria pedir portabilidade dos meus dados;</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="nome">Nome completo (obrigatório):</label>
              <input className="border border-[#c1c1c1] p-2 rounded-xl" type="text" id="nome" name="nome" required />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="cpf">CPF (obrigatório):</label>
              <input className="border border-[#c1c1c1] p-2 rounded-xl" type="text" id="cpf" name="cpf" required />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email (obrigatório):</label>
              <input className="border border-[#c1c1c1] p-2 rounded-xl" type="email" id="email" name="email" required />
            </div>
            <div>
              <input type="checkbox" name="termos" id="termos" required />
              <label htmlFor="termos">Concordo com os termos e condições</label>
            </div>
            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
