"use client";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImgPromocional from "@/public/images/lp-promocional/img-premios.png";

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const formularioSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  whatsapp: z.string().regex(phoneRegex, "Digite um número de WhatsApp válido"),
  local_qrcode: z.string().min(1, "Selecione onde você escaneou o QR Code"),
});

type FormularioData = z.infer<typeof formularioSchema>;

const FormularioParticipacao = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormularioData>({
    resolver: zodResolver(formularioSchema),
  });

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não for número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara
    let formatted = numbers;
    if (numbers.length <= 11) {
      formatted = numbers.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    }

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const formatted = formatPhoneNumber(value);
    setValue("whatsapp", formatted);
  };

  const onSubmit = async (data: FormularioData) => {
    try {
      // Construindo a URL correta
      const baseUrl = "https://realh.com.br";
      const apiUrl = `${baseUrl}/wp-json/real/v1/submit-participacao`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.nome,
          whatsapp: data.whatsapp,
          local_qrcode: data.local_qrcode,
        }),
      });

      // Tenta ler a resposta como texto primeiro
      const responseText = await response.text();

      let responseData;
      try {
        // Tenta converter o texto em JSON
        responseData = JSON.parse(responseText);
      } catch (e) {
        console.error("Erro ao converter resposta para JSON:", e);
        throw new Error("O servidor retornou uma resposta inválida. Por favor, tente novamente.");
      }

      if (response.ok) {
        setSuccessMessage("Participação registrada com sucesso!");
        reset();
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        throw new Error(responseData?.message || "Erro ao enviar formulário. Por favor, tente novamente.");
      }
    } catch (error: any) {
      console.error("Erro completo:", error);
      setErrorMessage(error?.message || "Erro ao enviar formulário. Por favor, tente novamente mais tarde.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div id="formulario" className="w-full py-12 bg-[#001B3A] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FORMULÁRIO DE PARTICIPAÇÃO</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Banner */}
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <div className="aspect-[580/380] relative">
              <Image src={ImgPromocional.src} alt="Banner Expo Grande 2025" fill className="object-cover" />
            </div>
          </div>

          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nome" className="block mb-1">
                  Nome *
                </label>
                <input type="text" id="nome" {...register("nome")} className="w-full p-2 rounded bg-white text-black" />
                {errors.nome && <span className="text-red-400 text-sm">{errors.nome.message}</span>}
              </div>

              <div>
                <label htmlFor="whatsapp" className="block mb-1">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  {...register("whatsapp")}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.whatsapp && <span className="text-red-400 text-sm">{errors.whatsapp.message}</span>}
              </div>

              <div>
                <label htmlFor="local_qrcode" className="block mb-1">
                  Onde você escaneou o QR Code? *
                </label>
                <select
                  id="local_qrcode"
                  {...register("local_qrcode")}
                  className="w-full p-2 rounded bg-white text-black"
                >
                  <option value="">Informe o local...</option>
                  <option value="radio_difusora_pantanal">Rádio Difusora Pantanal</option>
                  <option value="radio_cidade">Rádio Cidade</option>
                  <option value="estande_grupo_real">Estande Grupo Real</option>
                </select>
                {errors.local_qrcode && <span className="text-red-400 text-sm">{errors.local_qrcode.message}</span>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0093D9] text-white px-6 py-3 rounded-md hover:bg-[#0084C4] transition-colors mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>

            {successMessage && <div className="mt-4 p-3 bg-green-500 text-white rounded">{successMessage}</div>}

            {errorMessage && <div className="mt-4 p-3 bg-red-500 text-white rounded">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioParticipacao;
