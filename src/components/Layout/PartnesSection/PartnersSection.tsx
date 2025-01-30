import Image, { StaticImageData } from "next/image";
import PartnerLogo from "@/public/icons/partner-logo.svg";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";

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
            <div>
              <p className="text-base text-white" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          </div>

          {/* <div className="flex justify-center sm:justify-start">
            <BtnCallToAction ctaLink={btnLink} content={btnContent} icon={btnIcon} color={btnColor} />
          </div> */}

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 items-center sm:justify-around">
            {partnesImages.map((partner, index) => (
              <div key={index}>
                <Image src={partner} alt="" key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
