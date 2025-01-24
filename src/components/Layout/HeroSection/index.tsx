import Image from "next/image";
import Link from "next/link";
import ImageTeste from "../../../../public/images/image-hero-section-02.webp";
import ArrowRightSVG from "../../../../public/images/arrow-right.svg";
import { ArrowRightCircleIcon } from "lucide-react";

interface HeroSectionProps {
  children: React.ReactNode;
  anchor?: string;
  ctaLink?: string;
  videoBackground?: boolean;
}

export default function HeroSection({ children, anchor, ctaLink, videoBackground }: HeroSectionProps) {
  return (
    <>
      <div className={`flex justify-center ${videoBackground ? '' : 'bg-hero-image' } w-full bg-no-repeat bg-cover bg-center overflow-hidden`}>
        <div className="w-full h-full bg-[rgba(3,29,58,0.90)] ">
          <div className="fb_container mt-12 sm:mt-32 mb-12">
            <div className="flex flex-col py-12 gap-12 sm:flex-row sm:gap-2">
              <div className="flex flex-1 flex-col justify-center gap-8">
                {children && (
                  <>
                    {children}
                    {ctaLink && (
                      <div className="flex sm:justify-start justify-center">
                        <Link
                          href={ctaLink}
                          className="inline-flex gap-4 bg-blue_button py-3 px-4 rounded text-whitetext-base font-semibold uppercase"
                        >
                          { anchor ? (
                            <span>{ anchor }</span>
                          ) : (
                            <span>Ler mais</span>
                          )}
                          <ArrowRightCircleIcon />
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
