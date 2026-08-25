"use client";

import Accordion from "@/components/Layout/Accordion";
import { LandingAccordionItem } from "@/types/quem-somos-page";

type Props = {
  titulo: string;
  intro: string;
  itens: LandingAccordionItem[];
};

export default function LandingAccordionSection({ titulo, intro, itens }: Props) {
  if (!titulo && !intro && itens.length === 0) {
    return null;
  }

  return (
    <div className="text-fb_text_gray fb_container mx-auto py-3 lg:py-6">
      <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">
        <div className="w-full lg:w-5/12 pt-4 flex flex-col justify-center gap-y-4 items-start">
          {titulo ? <h2 className="text-3xl font-semibold">{titulo}</h2> : null}
          {intro ? <div dangerouslySetInnerHTML={{ __html: intro }} /> : null}
        </div>
        <div className="w-full lg:w-7/12">
          {itens.map((item, index) => (
            <Accordion key={`${item.titulo}-${index}`} faqHeading={{ tagName: "h3" }} title={item.titulo} active={item.aberto}>
              <div dangerouslySetInnerHTML={{ __html: item.conteudo }} />
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
