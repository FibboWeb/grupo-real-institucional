import Image from "next/image";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import ImageTeste from "../../../../public/images/image-hero-section-02.webp";
import ArrowRightSVG from "../../../../public/images/arrow-right.svg";

interface HeroSectionProps {
  children: React.ReactNode;
  ctaLink?: string;
}

export default function HeroSection({ children, ctaLink }: HeroSectionProps) {
  return (
    <>
      <div className="flex justify-center bg-hero-image w-full h-full bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-[rgba(3,29,58,0.90)] ">
          <div className="fb_container mt-12 sm:mt-32 mb-12">
            <div className="flex flex-col py-12 gap-12 sm:flex-row sm:gap-2">
              <div className="flex flex-1 flex-col justify-center gap-8">
                {children && (
                  <>
                    {children}
                    {ctaLink && (
                      <div className="flex sm:justify-start justify-center">
                        <BtnCallToAction ctaLink="#" content="Leia mais" icon={ArrowRightSVG} />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="flex-1 flex justify-center items-center">
                <Image src={ImageTeste} alt="Imagem de teste" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
