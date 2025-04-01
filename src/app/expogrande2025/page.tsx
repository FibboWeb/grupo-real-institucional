import InfoCards from "@/components/InfoCards";
import ValuesSection from "@/components/ValuesSection";
import { nossasMarcasInfos, sectionValoresInfoCiclos } from "@/constants/expogrande2025";
import ComoParticipar from "@/components/ComoParticipar";
import FormularioParticipacao from "@/components/FormularioParticipacao";

export default function Page() {
  return (
    <div>
      <div className="bg-cover bg-center h-[420px] md:bg-[url('/images/bg-hero-section.webp')] bg-[url('/images/bg-hero-section-mobile.webp')]"></div>
      <ComoParticipar />
      <FormularioParticipacao />
      <section>
        <InfoCards values={nossasMarcasInfos} />
      </section>
      <section className="my-12">
        <ValuesSection values={sectionValoresInfoCiclos} />
      </section>
    </div>
  );
}
