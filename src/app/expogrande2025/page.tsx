import InfoCards from "@/components/InfoCards";
import ValuesSection from "@/components/ValuesSection";
import { nossasMarcasInfos, sectionValoresInfoCiclos } from "@/constants/expogrande2025";
import ComoParticipar from "@/components/ComoParticipar";
import FormularioParticipacao from "@/components/FormularioParticipacao";

export default function Page() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/images/bg-hero-section.webp')" }}
        className="bg-cover bg-center h-[420px]"
      ></div>
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
