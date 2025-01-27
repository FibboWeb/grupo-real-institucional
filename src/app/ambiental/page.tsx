import InfiniteCarousel from "@/components/Layout/InfiniteCarousel/InfiniteCarousel";
import { InfiniteCarouselItems } from "./InfiniteCarouselItems";
import BigNumbersSection from "@/components/Layout/BigNumbersSection/BigNumbersSection";
import { BigNumbersItems } from "./BigNumbersItems";

export default function PageAmbiental() {
  return (
    <section className="mt-20">
      <h1>Page ambiental</h1>
      <InfiniteCarousel items={InfiniteCarouselItems} />
      <BigNumbersSection items={BigNumbersItems} />
    </section>
  );
}
