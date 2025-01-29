import { ArrowRightIcon } from "lucide-react";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";

function BannerCta() {
  return (
    <section className="relative fb_container rounded-lg h-auto">
      <div className="bg-banner-cta lg:max-h-96 rounded-2xl bg-center bg-cover">
        <div className="absolute top-[calc(max(.8rem, 50% - 52rem))] sm:top-[calc(max(2rem,50%-52rem))] md:top-[calc(max(4rem,50%-52rem))] lg:top-[calc(max(3.5rem,50%-52rem))] left-[max(3.5rem,calc(50%-52rem))] overflow-hidden"></div>
        <div className="flex flex-col gap-8 h-auto p-5 lg:p-10">
            <div className="flex flex-col gap-1.5">
              <span className="w-fit bg-fb_blue rounded-full text-sm text-white py-1 px-2">ARTIGOS CIENTÍFICOS</span>
              <h2 className="font-bold text-3xl text-white">Inovação e Ciência</h2>
            </div>
            <hr className="h-1 bg-white w-20" />
            <div className="w-4/5 lg:w-1/2">
              <p className="text-base text-white font-normal">
                Neste espaço, você encontrará artigos, publicações e estudos que destacam a eficácia dos produtos, o
                compromisso com a ciência e o impacto positivo na produtividade e no bem-estar dos animais.
              </p>
            </div>
            <div className="rounded-sm">
              <BtnCallToAction ctaLink="#" content="VER TODOS OS ARTIGOS" color="white"></BtnCallToAction>
            </div>
          </div>
      </div>
    </section>
  );
}

export default BannerCta;
