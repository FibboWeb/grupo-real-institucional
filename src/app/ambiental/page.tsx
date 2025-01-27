import InfiniteCarousel from "@/components/Layout/InfiniteCarousel/InfiniteCarousel";
import { InfiniteCarouselItems } from "./InfiniteCarouselItems";
import BigNumbersSection from "@/components/Layout/BigNumbersSection/BigNumbersSection";
import { BigNumbersItems } from "./BigNumbersItems";
import PartnersSection from "@/components/Layout/PartnesSection/PartnersSection";
import { PartnerData } from "./PartnerSectionData";

export default function PageAmbiental() {
  return (
    <section className="mt-20">
      <h1>Page ambiental</h1>
      <InfiniteCarousel items={InfiniteCarouselItems} />
      <BigNumbersSection items={BigNumbersItems} />
      <PartnersSection
        subtitle={PartnerData.subtitle}
        title={PartnerData.title}
        content={PartnerData.content}
        btnLink={PartnerData.btnLink}
        btnContent={PartnerData.btnContent}
        btnIcon={PartnerData.btnIcon}
        partnesImages={PartnerData.partnesImages}
      />
    </section>
  );
}
