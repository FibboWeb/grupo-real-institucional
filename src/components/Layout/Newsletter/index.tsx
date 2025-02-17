"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface NewsletterProps {
  sectionTitle?: string;
  sectionDescription?: string;
}

const newsletterSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Digite um e-mail válido."),
});

type NewsLetterFormData = z.infer<typeof newsletterSchema>;

function Newsletter({
  sectionTitle = "Inscreva-se na nossa newsletter",
  sectionDescription = "Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail.",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState<string | null>(null);

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
  
    async function onSubmit(data: NewsLetterFormData) {
      console.log("Enviando comentário...", data);
      try {
        console.log("infos:", email, name);
        const response = await fetch(`https://realh.com.br/wp-json/contact-form-7/v1/contact-forms/27391/feedback`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        });
    
        const data = await response.json();
        console.log(data)
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
           }, 1000);
           reset();
         }
        return data;
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
          <div className="max-w-[768px] flex flex-col justify-center items-center gap-y-8">
            <div className="flex flex-col gap-y-6">
              <div className="font-bold leading-10 text-2xl lg:text-5xl text-white text-center">
                <strong>{sectionTitle}</strong>
              </div>
              <div className="text-white text-center">
                <p>{sectionDescription}</p>
              </div>
            </div>

            <div className="flex max-w-[520px] w-full gap-4 sm:flex-row flex-col">
              <form action={"https://realh.com.br/#wpcf7-f27391-o1"} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-2">
                  <input
                    type="name"
                    placeholder="Digite seu nome"
                    className="w-full text-[#AAAAAA] bg-transparent border border-[#FFFFFF] p-4 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    {...register("name")}
                  />
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="w-full text-[#AAAAAA] bg-transparent border border-[#FFFFFF] p-4 outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email")}
                  />
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
