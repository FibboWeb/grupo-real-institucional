import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import Image, { StaticImageData } from "next/image";
import ArrowRightSVG from "@/public/icons/arrow-right.svg";

/**
 * Props for the HeroSection component.
 *
 * @property {React.ReactNode} children - The content to display inside the HeroSection.
 * @property {string} [ctaLink] - Optional link for the call-to-action button.
 * @property {StaticImageData} [imagePath] - Optional image to display in the HeroSection.
 * @property {number} [imageMaxHeight] - Maximum height for the image.
 * @property {boolean} [imageOnBottom=false] - Whether the image should be displayed at the bottom.
 * @property {string} [backgroundClass="bg-hero-image"] - Background class for styling the HeroSection.
 * @property {string} [boxShadow=""] - Box shadow for the HeroSection.
 */
interface HeroSectionProps {
  children: React.ReactNode;
  ctaLink?: string;
  imagePath?: StaticImageData;
  imageMaxHeight?: number;
  imageOnBottom?: boolean;
  backgroundClass?: string;
  boxShadow?: string;
  btnColor?: "fb_blue_button" | "fb_green_button";
  btnIcon?: StaticImageData;
  btnContent?: string;
}

export default function HeroSection({
  children,
  ctaLink,
  imagePath,
  imageMaxHeight,
  imageOnBottom = false,
  backgroundClass = "bg-hero-image",
  boxShadow,
  btnColor,
  btnIcon,
  btnContent,
}: HeroSectionProps) {
  const shadow = boxShadow || backgroundClass == "bg-hero-image" ? "bg-[rgba(3,29,58,0.90)]" : "bg-[rgba(0,0,0,0.2)]";

  return (
    <>
      <div
        className={[
          backgroundClass + " flex justify-center w-full h-full bg-no-repeat bg-cover bg-center relative",
        ].join("")}
      >
        <div className={` ${shadow} absolute top-0 left-0 right-0 bottom-0 w-full h-inherit`}></div>
        <div className={`fb_container mt-32 relative`}>
          <div className={`flex flex-col gap-12 sm:flex-row sm:gap-2`}>
            <div className={`${imageOnBottom ? "mb-0" : "mb-12"} w-full`}>
              <div
                className={`flex flex-col ${imageOnBottom ? "pt-14 lg:pt-0" : "py-12"} gap-12 sm:flex-row sm:gap-2  `}
              >
                <div className="flex flex-1 flex-col justify-center gap-8">
                  {children && (
                    <>
                      {children}
                      {ctaLink && (
                        <div className="flex sm:justify-start justify-center">
                          <BtnCallToAction ctaLink={ctaLink} content={btnContent} icon={btnIcon} color={btnColor} />
                        </div>
                      )}
                    </>
                  )}
                </div>
                {imagePath && (
                  <div className="flex-1 flex justify-center items-center">
                    <Image src={imagePath} alt="imagem hero" height={imageMaxHeight} color={btnColor} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
