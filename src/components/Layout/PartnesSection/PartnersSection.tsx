import Image, { StaticImageData } from "next/image";
import PartnerLogo from "@/public/icons/partner-logo.svg";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import ReadMoreText from "@/components/ReadMoreText";

interface PartnerSection {
  title: string;
  subtitle: string;
  content: string;
  btnLink?: string;
  btnContent;
  btnIcon: StaticImageData;
  btnColor: "fb_green_button" | "fb_blue_button";
  partnesImages: StaticImageData[];
}

export default function PartnerSection({
  title,
  subtitle,
  content,
  btnLink,
  btnContent,
  btnIcon,
  btnColor,
  partnesImages,
}: PartnerSection) {
  return (
    <section className="bg-partner-background bg-no-repeat bg-cover bg-center py-12">
      <div className="fb_container sm:px-0 px-5">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-2">
                <Image src={PartnerLogo} alt="" />
                <p className="text-xl text-white font-bold text-center">{subtitle}</p>
              </div>
              <h2 className="text-3xl text-white font-bold text-center">{title}</h2>
            </div>
            <div className="flex justify-center">
              <div className={`h-1 w-20 bg-[#00A833] mt-4 mb-4`}></div>
            </div>
            <div className="text-base text-white">
              <ReadMoreText htmlContent={content} readMore={true} color={"fb_green_button"}></ReadMoreText>
            </div>
          </div>

          {/* <div className="flex justify-center sm:justify-start">
            <BtnCallToAction ctaLink={btnLink} content={btnContent} icon={btnIcon} color={btnColor} />
          </div> */}

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 lg:gap-10 items-center justify-around">
            {partnesImages.map((partner, index) => (
              <div 
                key={index} 
                className={`rounded-2xl w-[308px] h-[175px] sm:w-[306px] sm:h-[160px] ${
                  index !== 2 
                    ? "bg-white p-4 shadow-lg flex items-center justify-center" 
                    : "overflow-hidden"
                }`}
              >
                <Image 
                  src={partner} 
                  alt="" 
                  className={`rounded-2xl ${
                    index === 2 
                      ? "w-full h-full object-cover" 
                      : "max-w-full max-h-full object-contain"
                  }`}
                  width={306}
                  height={148}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
