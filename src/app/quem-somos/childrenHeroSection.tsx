export default function childrenHeroSection(): React.ReactNode {
  return (
    <div className="flex flex-col gap-6 my-4">
      <h1 className="text-[42px] text-white">Grupo Real</h1>
      <p className="text-white">
        O <strong>Grupo REAL</strong> reúne marcas que transformam desafios em oportunidades. Descubra nosso compromisso
        com a<strong>qualidade e sustentabilidade.</strong>
      </p>
    </div>
  );
}

export function childrenHeroSectionContent() {
  return (
    <div className="flex flex-col gap-6 my-4 w-full md:w-2/5 min-h-[72px]">
      <h1 className="text-[42px] text-white font-bold">Grupo Real</h1>
      <p className="text-white">
        O <strong>Grupo REAL</strong> reúne marcas que transformam desafios em oportunidades. Descubra nosso compromisso
        com a <strong>qualidade e sustentabilidade.</strong>
      </p>
    </div>
  );
}
