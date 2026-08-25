import Image, { StaticImageData } from "next/image";
import style from "./index.module.css";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import ArrowRightSVG from "@/public/icons/arrow-right.svg";

type Value = {
  img?: StaticImageData | string;
  title: string;
  content: string;
};

function hasSrc(src: StaticImageData | string | undefined): src is StaticImageData | string {
  if (!src) {
    return false;
  }

  return typeof src !== "string" || src.trim() !== "";
}

interface OurValuesProps {
  title: string;
  contentPage: string;
  values: Value[];
  ctaLink?: string;
}

export default function OurValues({ title, contentPage, values, ctaLink }: OurValuesProps) {
  return (
    <section className="fb_container sm:py-12 py-2">
      <div className="flex flex-col md:flex-row gap-10 sm:gap-2 p-5">
        <div className="flex flex-col justify-start flex-1 gap-6">
          <h2 className="font-semibold text-3xl text-[var(--blue-main)]">{title}</h2>
          <div className="text-lg	font-normal	text-[var(--blue-main)]">
            <div
              className={style.containerContent}
              dangerouslySetInnerHTML={{
                __html: contentPage || "<p>Conteudo nao disponivel</p>",
              }}
            />
          </div>
          <div className="flex justify-start">
            {/* <BtnCallToAction ctaLink="" content="LER MAIS" icon={ArrowRightSVG} /> */}
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
            {values.map((value, index) => (
              <div key={index} className=" h-full flex flex-col gap-4 px-4">
                {hasSrc(value.img) ? (
                  <div>
                    <Image src={value.img} alt="" width={80} height={80} className="h-20 w-auto" />
                  </div>
                ) : null}
                <div>
                  <h3 className="text-xl font-semibold text-textDark">{value.title}</h3>
                </div>
                <div>
                  <p className="text-base text-textDark font-normal">{value.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
