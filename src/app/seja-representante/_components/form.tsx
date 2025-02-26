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
  email: z.string().email("Email inválido"),
  mensagem: z.string().optional(),
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
        <h2 className="text-white text-[45px] font-semibold">
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
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="email" className="text-white">Email <span className="text-red-500">*</span></label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="bg-white/80"
              required
              {...register('email')}
              disabled={isSubmitting}
            />
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
