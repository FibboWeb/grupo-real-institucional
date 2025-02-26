import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
import Newsletter from "@/components/Layout/Newsletter"
import HeroSection from "@/components/Layout/HeroSection"
import HeroImage from "@/public/representantes/seja-representante.webp"
import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction"
import FormRepresentante from "./_components/form"

export default function Page() {
  return (
    <div className=" from-blue-950 to-blue-900">

      {/* Main Content */}
      <main>
        {/* Forms Section */}
        <div className="">
          <HeroSection heroCssExtra={"pt-32 bg-top"} backgroundClass={"bg-seja-representante"} imageMaxHeight={580} imageOnBottom={true} boxShadow={"bg-[rgba(3,29,58,0.85)]"}>
            <div className="flex flex-wrap md:flex-nowrap items-start w-full gap-10 pb-16">
                {/* Left Column */}
                <div className="text-white w-full md:w-1/2">
                  <h1 className="text-4xl font-bold mb-4">Grupo Real</h1>
                  <p className="text-gray-300">
                    O Grupo Real, onde marcos que transformam, desafios em oportunidades. Conheça nossa história com parcerias sólidas e sustentáveis.
                  </p>
                </div>

                {/* Right Column - Form */}
                <FormRepresentante />
            </div>
          </HeroSection>
        </div>

        {/* Newsletter Section */}
        <div className="fb_container">
          <Newsletter />
        </div>
      </main>
    </div>
  )
}
