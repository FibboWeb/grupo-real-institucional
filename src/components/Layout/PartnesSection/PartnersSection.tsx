import Image, { StaticImageData } from "next/image";
import PartnerLogo from "@/public/icons/partner-logo.svg";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";

interface PartnerSection {
  subtitle: string;
  title: string;
  content: string;
  btnLink: string;
  btnIcon: StaticImageData;
  btnContent;
  partnesImages: StaticImageData[];
}

export default function PartnerSection({
  subtitle,
  title,
  content,
  btnLink,
  btnContent,
  btnIcon,
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
                <p className="text-xl text-white font-bold">{subtitle}</p>
              </div>
              <h2 className="text-3xl text-white font-bold">{title}</h2>
            </div>
            <div className="h-1 w-20 bg-[rgba(0, 168, 51, 1)] mt-4 mb-4"></div>
            <div>
              <p className="text-base text-white" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start">
            <BtnCallToAction ctaLink={btnLink} content={btnContent} icon={btnIcon} />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 items-center sm:justify-around">
            {partnesImages.map((partner, index) => (
              <Image src={partner} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
