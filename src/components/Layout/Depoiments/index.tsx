import Image, { StaticImageData } from "next/image";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";

interface DepoimentsProps {
  image?: StaticImageData | string;
  content: string;
  ctaLink?: string;
  ctaLabel?: string;
}

function hasSrc(src: StaticImageData | string | undefined): src is StaticImageData | string {
  if (!src) {
    return false;
  }

  return typeof src !== "string" || src.trim() !== "";
}

export default function Depoiments({
  image,
  content,
  ctaLink = "/claudio-martins-real-curriculo",
  ctaLabel = "Ler mais",
}: DepoimentsProps) {
  return (
    <>
      <div className="flex justify-center items-center py-8">
        <div className="fb_container flex flex-col-reverse sm:flex-row sm:gap-12 gap-8 items-center p-5">
          <div className="w-full h-full">
            {hasSrc(image) ? (
              <div className="flex justify-center items-center">
                <Image
                  src={image}
                  alt=""
                  width={212}
                  height={282}
                  className="rounded-2xl shadow-shadow_image_info_section h-[282px] w-auto"
                />
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-5 sm:pr-28 sm:py-12">
            <p className="text-3xl font-semibold mx-auto">{content}</p>
            <BtnCallToAction classCssForBTN="w-fit" content={ctaLabel} ctaLink={ctaLink} />
          </div>
        </div>
      </div>
    </>
  );
}
