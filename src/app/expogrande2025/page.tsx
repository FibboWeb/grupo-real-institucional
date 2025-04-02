import InfoCards from "@/components/InfoCards";
import ValuesSection from "@/components/ValuesSection";
import { nossasMarcasInfos, sectionValoresInfoCiclos } from "@/constants/expogrande2025";
import ComoParticipar from "@/components/ComoParticipar";
import FormularioParticipacao from "@/components/FormularioParticipacao";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="relative w-full bg-[#001B3A]">
        <div className="relative w-screen">
          <Image
            src="/images/lp-promocional/expograndebanner.png"
            alt="Banner Expo Grande"
            width={1920}
            height={620}
            className="hidden md:block w-full h-auto"
            priority
            quality={100}
          />
          <Image
            src="/images/lp-promocional/expograndebannermobile.png"
            alt="Banner Expo Grande"
            width={1920}
            height={620}
            className="block md:hidden w-full h-auto"
            priority
            quality={100}
          />
        </div>
      </div>
      <ComoParticipar />
      <FormularioParticipacao />
      <section>
        <InfoCards values={nossasMarcasInfos} />
      </section>
      <section className="my-12">
        <ValuesSection values={sectionValoresInfoCiclos} />
      </section>
    </>
  );
}
