"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const contactSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
    email: z.string().email("Digite um e-mail válido."),
    mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
      });

      const [successMessage, setSuccessMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

      async function onSubmit(data: ContactFormData) {
        console.log("Enviando comentário...", data);
        try {
          // Envia os dados do formulário para a rota personalizada no WP
          const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API_V1}submit-lead/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
    
          // Verifica a resposta da API
          if (response.status === 200) {
            setSuccessMessage("Obrigado pelo contato, logo entraremos em contato!")
            reset();
          } else {
            setErrorMessage("Ocorreu um erro ao enviar o formulário. Tente novamente.");
          }
        } catch (error) {
          setStatus("Erro ao enviar o formulário. Tente novamente.");
          console.error("Erro:", error);
        }
      }

  const [status, setStatus] = useState("");

  // Função para atualizar os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div>
      <h1 className="text-3xl font-bold">Entre em contato conosco</h1>
      <p className="text-muted-foreground mb-4">Entre em contato com o Grupo Real.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm font-medium">
            Nome *
          </label>
          <Input
            id="nome"
            name="nome"
            placeholder="Nome"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("nome")}
          />
        </div>

        {/* Campo E-mail */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nome@exemplo.com.br"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />
        </div>

        {/* Campo Mensagem */}
        <div>
          <label htmlFor="mensagem" className="mb-2 block text-sm font-medium">
            Mensagem
          </label>
          <Textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem..."
            required
            rows={4}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("mensagem")}
          />
        </div>

        {/* Botão de Envio */}
        <Button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ENVIAR
        </Button>
      </form>

      {/* Status de envio */}
      {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
    </div>
  );
};

export default ContactForm;
