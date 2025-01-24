import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ImageTeste from "../../../../public/images/image-hero-section-02.webp";
import ArrowRightSVG from "../../../../public/images/arrow-right.svg";

interface HeroSectionProps {
  children: React.ReactNode;
  ctaLink?: string;
  imagePath?: StaticImageData
  imageMaxHeight?: number
  imageOnBottom?: boolean
}

export default function HeroSection({ children, ctaLink, imagePath, imageMaxHeight, imageOnBottom = false }: HeroSectionProps) {
  return (
    <>
      <div className="flex justify-center bg-hero-image w-full h-full bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-[rgba(3,29,58,0.90)] ">
          <div className={`fb_container mt-12 sm:mt-32 ${imageOnBottom ? 'mb-0' : 'mb-12'}`}>
            <div className={`flex flex-col ${imageOnBottom ? 'pt-14 lg:pt-0' : 'py-12'} gap-12 sm:flex-row sm:gap-2`}>
              <div className="flex flex-1 flex-col justify-center gap-8">
                {children && (
                  <>
                    {children}
                    {ctaLink && (
                      <div className="flex sm:justify-start justify-center">
                        <Link
                          href={ctaLink}
                          className="inline-flex gap-4 bg-blue_button py-3 px-4 rounded text-white	text-base font-semibold uppercase"
                        >
                          <span>Ler mais</span>
                          <Image
                            src={ArrowRightSVG}
                            alt="Arrow Icon"
                            width={24}
                            height={24}
                            className="bg-white rounded-full p-1"
                          />
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="flex-1 flex justify-center items-center">
                <Image src={imagePath} alt="imagem hero" height={imageMaxHeight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
