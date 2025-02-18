'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./index.css";

export default function Page() {

  const schema = z.object({
    tipo_usuario: z.enum(["cliente", "colaborador", "fornecedor"], {
      required_error: "Selecione um tipo de usuário."
    }),
    tipo_solicitacao: z.enum(["acessar", "corrigir", "eliminar", "portabilidade"], {
      required_error: "Selecione um tipo de solicitação."
    }),
    nome: z.string().min(3, "Nome é obrigatório."),
    cpf: z.string().regex(/^\d{11}$/, "CPF inválido. Deve conter 11 números."),
    email: z.string().email("Email inválido."),
    concordo_termos:  z.preprocess((val) => val === 'true' || val === true, z.boolean()),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API_V1}atendimento-titular/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      console.log(response);
      if (!response.ok) throw new Error('Erro ao enviar formulário.');
      setSuccessMessage('Formulário enviado com sucesso!');
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
      reset();
      return
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return
    }
  };


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
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <div>
              <p className="text-fb_blue_main font-medium">Tipo de usuário (obrigatório):</p>
              <div className="flex gap-2">
                <input type="radio" name="tipo_usuario" id="cliente" value="cliente" {...register("tipo_usuario")} />
                <label htmlFor="cliente">Cliente</label>
                <input type="radio" name="tipo_usuario" id="colaborador" value="colaborador" {...register("tipo_usuario")}/>
                <label htmlFor="colaborador">Colaborador</label>
                <input type="radio" name="tipo_usuario" id="fornecedor" value="fornecedor" {...register("tipo_usuario")}/>
                <label htmlFor="fornecedor">Fornecedor/Terceiro</label>
              </div>
            </div>
            <div>
              <p className='flex font-medium'>Tipo de solicitação (obrigatório):</p>
              <div className="flex flex-col gap-2 text-fb_text_gray">
                <div>
                  <input type="radio" name="tipo_solicitacao" id="acessar" value="acessar" {...register("tipo_solicitacao")}/>
                  <label htmlFor="acessar">Quero acessar meus dados;</label>
                </div>
                <div>
                  <input type="radio" name="tipo_solicitacao" id="corrigir" value="corrigir" {...register("tipo_solicitacao")}/>
                  <label htmlFor="corrigir">Quero corrigir ou atualizar meus dados;</label>
                </div>
                <div>
                  <input type="radio" name="tipo_solicitacao" id="eliminar" value="eliminar" {...register("tipo_solicitacao")}/>
                  <label htmlFor="eliminar">Gostaria solicitar a anonimização, o bloqueio ou eliminação dos meus Dados;</label>
                </div>
                <div>
                  <input type="radio" name="tipo_solicitacao" id="portabilidade" value="portabilidade" {...register("tipo_solicitacao")}/>
                  <label htmlFor="portabilidade">Gostaria pedir portabilidade dos meus dados;</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="nome">Nome completo (obrigatório):</label>
              <input className="border border-[#c1c1c1] p-2 rounded-xl" type="text" id="nome" name="nome" required {...register("nome")} />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="cpf">CPF (obrigatório):</label>
              <input className="border border-[#c1c1c1] p-2 rounded-xl" type="text" id="cpf" name="cpf" required {...register("cpf")} />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email (obrigatório):</label>
              <input className="border border-[#c1c1c1] p-2 rounded-xl" type="email" id="email" name="email" required {...register("email")} />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="termos" id="termos" required {...register("concordo_termos")}/>
              <label htmlFor="termos">Concordo com os termos e condições</label>
            </div>
            <button content="Enviar" type="submit" className="mx-auto btn-submit py-2 px-4 bg-fb_blue_button text-white rounded-lg w-fit">{ isSubmitting ? "Enviando..." : "Enviar formulário"}</button>
          </form>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        </div>
      </div>
    </main>
  );
}
