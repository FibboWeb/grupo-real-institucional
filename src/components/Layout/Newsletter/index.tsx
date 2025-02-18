"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface NewsletterProps {
  sectionTitle?: string;
  sectionDescription?: string;
}

const newsletterSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Digite um e-mail válido."),
  consent: z.preprocess((val) => val === 'true' || val === true, z.boolean())
});

type NewsLetterFormData = z.infer<typeof newsletterSchema>;

function Newsletter({
  sectionTitle = "Inscreva-se na nossa newsletter",
  sectionDescription = "Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail.",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [consent, setConsent] = useState(false);

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<NewsLetterFormData>({
      resolver: zodResolver(newsletterSchema),
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
/**
 * Faz um requisição para o endpoint da Newsletter
 * 
 * Envia os dados preenchidos do formulário para o endpoint
 *
 * @param {NewsLetterFormData} data - Os dados do formulário, vem do zod.
 * @returns {Promise<any>} A response da API após a requisição.
 */

    async function onSubmit(data: NewsLetterFormData) {
      console.log("Enviando comentário...", data);
      try {
        const { email, nome, consent } = data
        const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API_V1}subscribe-newsletter/`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, consent }),
        });
    
        const responseData = await response.json();
        console.log(responseData)
        if(!response) {
           setErrorMessage("Erro ao enviar o formulário, por favor tente novamente.");
           setTimeout(() => {
             setErrorMessage("");
           }, 1000);
           return
         } else {
           setSuccessMessage("Inscrição enviada com sucesso!");
           setTimeout(() => {
             setSuccessMessage("");
           }, 2500);
           reset();
         }
        return responseData;
      } catch (err) {
        setErrorMessage(err.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 1000);
        console.error("Erro ao enviar o formulário:", err);
      }
    }

  return (
    <div className="w-full h-full mx-auto py-12 rounded-2xl">
      <div className="bg-newsletter-image bg-no-repeat bg-cover bg-center rounded-2xl my-0.5">
        <div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(3,29,58,0.90)] rounded-2xl lg:p-16 py-16 px-6">
          <div className="flex flex-col justify-center items-center gap-y-8">
            <div className="flex flex-col gap-y-6">
              <div className="font-bold leading-10 text-3xl lg:text-5xl text-white text-center">
                <strong>{sectionTitle}</strong>
              </div>
              <div className="text-white text-center">
                <p>{sectionDescription}</p>
              </div>
            </div>

            <div className="flex w-full lg:w-2/3 mx-auto gap-4 sm:flex-row flex-col">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-2">
                  <input
                    type="name"
                    placeholder="Digite seu nome"
                    className="w-full text-[#AAAAAA] bg-transparent border border-[#FFFFFF] p-4 outline-none"
                    onChange={(e) => setNome(e.target.value)}
                    {...register("nome")}
                  />
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="w-full text-[#AAAAAA] bg-transparent border border-[#FFFFFF] p-4 outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email")}
                  />
                </div>
                <div className="flex gap-3 text-white">
                  <input type="checkbox" name="consent" id="consent" {...register("consent")} onChange={(e) => setConsent(e.target.checked)}/>
                  <label htmlFor="consent" className="text-sm text-neutral-400">Ao enviar a mensagem, você nos autoriza a coletar os seus dados para que possamos contatá-lo e entender melhor seus objetivos com a mensagem, nos termos do nosso <Link href={"/politica-de-privacidade"} className="text-fb_blue hover:text-fb_blue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Aviso de Privacidade</Link></label>
                </div>
                <Button
                  className="px-3 py-6 bg-fb_blue hover:bg-fb_blue text-white font-bold text-base"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </form>
              <div>
              </div>
            </div>
            <div className="h-2">
              {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
