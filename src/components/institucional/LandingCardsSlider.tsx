import InfoCard from "@/components/Layout/InfoCardsSlider/InfoCard";
import InfoCardsSlider from "@/components/Layout/InfoCardsSlider";
import { LandingCardIconItem } from "@/types/quem-somos-page";

type Props = {
  titulo: string;
  cards: LandingCardIconItem[];
};

export default function LandingCardsSlider({ titulo, cards }: Props) {
  if (cards.length === 0) {
    return null;
  }

  return (
    <div className="w-full pt-4 flex flex-col gap-y-4">
      <div className="py-5 lg:py-10 pb-12 flex flex-col gap-7">
        {titulo ? <h2 className="text-2xl font-semibold text-center">{titulo}</h2> : null}
        <div className="w-full min-w-0 px-2 sm:px-4">
          <InfoCardsSlider>
            {cards.map((card, index) => {
              const icone = typeof card.icone === "string" ? card.icone : "";

              return (
                <InfoCard key={`${card.titulo}-${index}`} title={card.titulo} svg={icone || "/certified-clean.svg"}>
                  <div dangerouslySetInnerHTML={{ __html: card.texto }} />
                </InfoCard>
              );
            })}
          </InfoCardsSlider>
        </div>
      </div>
    </div>
  );
}
