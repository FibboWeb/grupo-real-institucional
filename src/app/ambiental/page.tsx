import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";
import HeroSection from "@/components/Layout/HeroSection";
import Image from "next/image";
import CiclosClean from "@/public/images/ciclos-clean.webp";
import HeroImage from "@/public/images/claudio-martins-hero.webp";

export default function Ambiental() {
  return (
    <HeroSection backgroundClass={"bg-hero-green-leafs"} imageMaxHeight={420} imagePath={HeroImage}>
      <div>
        <Image src={CiclosClean} alt={"ciclo logo"} width={360}></Image>
        <h1 className="flex flex-col text-white text-bold py-4">
          <strong className="text-3xl lg:text-5xl">Clareza que inspira confiança. </strong>
          <strong className="text-3xl lg:text-5xl">Ética que transforma tudo.</strong>
        </h1>
        <BtnCallToAction color={"fb_green_button"} ctaLink={"#"} content={"Saber Mais"} />
      </div>
    </HeroSection>
  );
}
