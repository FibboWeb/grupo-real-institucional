"use client";

import { useState } from "react";
import PostDataNewsletter from "@/api/Newsletter/PostDataNewsletter";

interface NewsletterProps {
  sectionTitle: string;
  sectionDescription: string;
}

function Newsletter({ sectionTitle, sectionDescription }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  async function handleSubmit() {
    if (!email) {
      setResponse("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      const res = await PostDataNewsletter(email);
      setResponse("Inscrição realizada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setResponse("Erro ao realizar inscrição. Tente novamente.");
    }
  }

  return (
    <div className="w-full h-full container mx-auto bg-newsletter-image bg-no-repeat bg-cover bg-center sm:rounded-2xl my-0.5">
      <div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(3,29,58,0.90)] sm:rounded-2xl lg:p-16 p-8">
        <div className="max-w-[768px] flex flex-col justify-center items-center gap-y-8">
          <div className="flex flex-col gap-y-6">
            <div className="font-bold leading-10 text-5xl text-white text-center">
              <h4>{sectionTitle}</h4>
            </div>
            <div className="text-white text-center">
              <p>{sectionDescription}</p>
            </div>
          </div>

          <div className="flex max-w-[520px] w-full gap-4 sm:flex-row flex-col">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full text-[#AAAAAA] bg-transparent border border-[#FFFFFF] p-4 outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button className="w-full h-full bg-white text-black p-2" onClick={handleSubmit}>
                Inscrever-se
              </button>
            </div>
          </div>
          <div className="h-2">
            {response && (
              <div className="mt-4 text-white text-center">
                <p>{response}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
