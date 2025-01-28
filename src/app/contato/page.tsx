"use client";

import ContactForm from "@/components/contato/ContactForm";
import Newsletter from "@/components/Layout/Newsletter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <div className="fb_container mt-[96px] mx-auto px-4 py-12">
      <div className="grid gap-8 mb-[76px] md:grid-cols-2">
        {/* Left Column - Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Right Column - Service Info */}
        <div>
          <h2 className="mb-6 text-3xl font-bold text-navy-900">Atendimento</h2>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold text-blue-600">Atendimento Comercial</h3>
            <p className="text-xl font-bold">(67) 3028-9000</p>
            <p className="text-gray-600">de segunda à sexta-feira, das 8h às 18h</p>
          </div>

          <Button
            className="mb-8 h-[48px] px-10 bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://wa.me/556730289000")}
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            SOLICITE UM ORÇAMENTO
          </Button>

          <div className="h-[300px] w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.1191349351183!2d-54.57838328490694!3d-20.466643186298672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e73745346597%3A0x43e4f30b749c7f07!2sAv.%20Zil%C3%A1%20Corr%C3%AAa%20Machado%2C%2012068%20-%20Parque%20Res.%20Maria%20Aparecida%20Pedrossian%2C%20Campo%20Grande%20-%20MS%2C%2079046-200!5e0!3m2!1sen!2sbr!4v1620147647000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
