import CardList from "@/components/Layout/CardList";
import { LandingCardIconItem } from "@/types/quem-somos-page";

type Props = {
  titulo: string;
  intro: string;
  itens: LandingCardIconItem[];
};

export default function LandingCardsLista({ titulo, intro, itens }: Props) {
  if (!titulo && !intro && itens.length === 0) {
    return null;
  }

  return (
    <div className="text-fb_text_gray fb_container mx-auto py-3 lg:py-6">
      <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">
        <div className="w-full lg:w-5/12 pt-4 flex flex-col gap-y-4 justify-center">
          {titulo ? <h2 className="text-3xl font-semibold">{titulo}</h2> : null}
          {intro ? <div dangerouslySetInnerHTML={{ __html: intro }} /> : null}
        </div>
        <div className="w-full lg:w-7/12 pt-4 flex flex-col gap-y-4 justify-center">
          {itens.map((item, index) => {
            const icone = typeof item.icone === "string" ? item.icone : "/certified.svg";

            return (
              <CardList key={`${item.titulo}-${index}`} svg={icone} title={item.titulo}>
                <div dangerouslySetInnerHTML={{ __html: item.texto }} />
              </CardList>
            );
          })}
        </div>
      </div>
    </div>
  );
}
