"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  // Função para atualizar os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função que processa o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      // Envia os dados do formulário para a rota personalizada no WP
      const response = await axios.post("https://realh.com.br/wp-json/api/v1/submit-lead/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Verifica a resposta da API
      if (response.status === 200) {
        setStatus("Formulário enviado com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus("Ocorreu um erro ao enviar o formulário.");
      }
    } catch (error) {
      setStatus("Erro ao enviar o formulário. Tente novamente.");
      console.error("Erro:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Formulário de Contato</h1>
      <p className="text-muted-foreground mb-4">Entre em contato com o Grupo Real.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm font-medium">
            Nome *
          </label>
          <Input
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="nome@exemplo.com.br"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Digite sua mensagem..."
            required
            rows={4}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
