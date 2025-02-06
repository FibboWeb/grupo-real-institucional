import ContactForm from "@/components/contato/ContactForm";
import Newsletter from "@/components/Layout/Newsletter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Adress from "./Adress";
import { locations } from "@/constants/locations";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em contato conosco - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Entre em contato conosco - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/contato",
    languages: {
      pt: "https://gruporealbr.com.br/",
    }
  }
};

export default function Page() {
  return (
    <>
      <div className="fb_container mt-[120px] mx-autopy-12">
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
            >
              <Link
                href="https://wa.me/558001009000"
                className="flex"
                target="_blank"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                  SOLICITE UM ORÇAMENTO
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-6 text-3xl font-bold text-navy-900">Como chegar?</h2>
          {locations.map((location) => {
            return (
              <Adress
                key={location.title}
                title={location.title}
                address={location.address}
                iframeSrc={location.iframeSrc}
              />
            );
          })}
        </div>
      </div>
      <Newsletter />
    </>
  );
}
