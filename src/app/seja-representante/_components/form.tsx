'use client'
import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the schema for form validation using Zod
const FormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email_do_representante: z.string().email("Email inválido"),
  mensagem: z.string().optional(),
  telefone_principal_do_representante: z.string().min(1, "Telefone é obrigatório"),
  estado: z.string().min(1, "Estado é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  cep: z.string().min(1, "CEP é obrigatório"),
  consentimento: z.preprocess((val) => {
    return ['true', '1', 'on', 'yes', true].includes(val as string | boolean);
    }, z.boolean())
});

type FormData = z.infer<typeof FormSchema>;

// Function to send form data to the WordPress API
async function sendFormData(data: FormData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}representante`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar os dados');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

export default function FormRepresentante() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 mb-6">
        <h2 className="text-white text-2xl md:text-[45px] font-semibold break-all">
          Seja um representante
        </h2>
        <p className="text-white text-lg">
          Junte-se à nossa equipe e faça parte de uma empresa líder no setor de saúde e nutrição animal.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(sendFormData)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="name" className="text-white">Nome <span className="text-red-500">*</span></label>
            <Input
              id="name"
              name="name"
              placeholder="Nome"
              type="text"
              className="bg-white/80"
              required
              {...register('name')}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-row gap-1 text-sm">
            <div className="flex w-full gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="email_do_representante" className="text-white">Email <span className="text-red-500">*</span></label>
                <Input
                  id="email_do_representante"
                  name="email_do_representante"
                  placeholder="Email"
                  type="email"
                  className="bg-white/80"
                  required
                  {...register('email_do_representante')}
                  disabled={isSubmitting}
                /> 
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="telefone_principal_do_representante" className="text-white">Telefone <span className="text-red-500">*</span></label>
                <Input
                  id="telefone_principal_do_representante"
                  name="telefone_principal_do_representante"
                  placeholder="(99) 99999-9999"
                  type="tel"
                  className="bg-white/80"
                  required
                  {...register('telefone_principal_do_representante')}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 text-sm">
            <div className="flex w-full gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="estado" className="text-white">Estado <span className="text-red-500">*</span></label>
                <Input
                  id="estado"
                  name="estado"
                  placeholder="Estado"
                  type="text"
                  className="bg-white/80"
                  required
                  {...register('estado')}
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="cidade" className="text-white">Cidade <span className="text-red-500">*</span></label>
                <Input
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  type="text"
                  className="bg-white/80"
                  required
                  {...register('cidade')}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 text-sm">
            <div className="flex w-full gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="endereco" className="text-white">Endereço <span className="text-red-500">*</span></label>
                <Input
                  id="endereco"
                  name="endereco"
                  placeholder="Endereço"
                  type="text"
                  className="bg-white/80"
                  required
                  {...register('endereco')}
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="cep" className="text-white">CEP <span className="text-red-500">*</span></label>
                <Input
                  id="cep"
                  name="cep"
                  placeholder="CEP"
                  type="text"
                  className="bg-white/80"
                  required
                  {...register('cep')}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="mensagem" className="text-white">Mensagem</label>
            <Textarea
              id="mensagem"
              name="mensagem"
              placeholder="Mensagem"
              className="bg-white/80 min-h-[100px]"
              {...register('mensagem')}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex gap-3 text-sm">
            <input type="checkbox" id="consentimento" name="consentimento" {...register('consentimento')} />
            <label htmlFor="consentimento" className="text-white">Ao enviar a mensagem, você nos autoriza a coletar os seus dados para que possamos contatá-lo. <Link href="/institucional/politica-de-privacidade" className="text-blue-500">Aviso de privacidade</Link></label>
          </div>
        </div>
        <div className="flex py-6">
          <BtnCallToAction content={isSubmitting ? "Enviando..." : "Enviar"} color="fb_blue_button" classCssForBTN="py-6"/>
        </div>
      </form>
    </div>
  )
}
