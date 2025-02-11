import Image, { StaticImageData } from "next/image";
import InfoSection from "../InfoSection";

interface FeatureSectionProps {
  backgroundClass?: string;
  badge?: string;
  title?: string;
  content?: string;
  infoSectionHeroBgImage?: string;
  infoSectionBadge?: string;
  infoSectionTitle?: string;
  infoSectionContent: string;
  infoSectionCtaLink?: string;
  infoSectionImagePath?: StaticImageData;
  infoSectionImageMidFullContainer?: boolean;
  infoSectionYoutubeEmbed?: string;
  infoSectionReverseMobile?: boolean;
  infoSectionReverseDesktop?: boolean;
  infoSectionBorder?: boolean;
  infoSectionColor?: "fb_blue_button" | "fb_green_button";
  infoSectionContentButton?: string;
  infoSectionReadMore?: boolean;
}

export default function FeatureSection({
  backgroundClass,
  badge,
  title,
  content,
  infoSectionHeroBgImage,
  infoSectionBadge,
  infoSectionTitle,
  infoSectionContent,
  infoSectionCtaLink,
  infoSectionImagePath,
  infoSectionImageMidFullContainer = false,
  infoSectionYoutubeEmbed,
  infoSectionReverseMobile = false,
  infoSectionReverseDesktop = false,
  infoSectionBorder = true,
  infoSectionColor = "fb_blue_button",
  infoSectionContentButton = "Leia mais",
  infoSectionReadMore = false,
}: FeatureSectionProps) {
  return (
    <div className="relative">
      <div
        className={`${backgroundClass} absolute left-0 right-0 top-0 bottom-0 bg-cover md:bg-contain bg-no-repeat`}
      ></div>
      <div className="w-full h-full fb_container mx-auto relative">
        <div className={`flex flex-col flex-wrap lg:flex-nowrap py-4 lg:py-8 items-center gap-5`}>
          <div className="flex flex-col items-center">
            {badge && (
              <div className="flex gap-1 py-1 w-fit">
                {backgroundClass == "bg-green-featured" ? (
                  <Image src={"/icons/white-plant-sprout.svg"} width={"12"} height={"12"} alt="broto de planta"></Image>
                ) : (
                  <Image src={"/icons/plant-sprout.svg"} width={"12"} height={"12"} alt="broto de planta"></Image>
                )}
                <div
                  className={`text-xl ${backgroundClass == "bg-green-featured" ? "text-white" : "text-fb_green"} text-uppercase font-semibold`}
                >
                  {badge}
                </div>
              </div>
            )}
            {title && (
              <h2
                className={`font-semibold text-3xl ${backgroundClass == "bg-green-featured" ? "text-white" : "text-[var(--blue-main)]"} w-fit`}
              >
                {title}
              </h2>
            )}
            <div className={`h-1 w-20 bg-fb_green mt-4 mb-4`}></div>
            {content && (
              <p
                className="text-base text-white"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></p>
            )}
          </div>
          <div className="rounded-3xl overflow-hidden bg-white shadow-custom_shadow">
            <InfoSection
              heroBgImage={infoSectionHeroBgImage}
              badge={infoSectionBadge}
              title={infoSectionTitle}
              content={infoSectionContent}
              ctaLink={infoSectionCtaLink}
              imagePath={infoSectionImagePath}
              imageMidFullContainer={infoSectionImageMidFullContainer}
              youtubeEmbed={infoSectionYoutubeEmbed}
              reverseMobile={infoSectionReverseMobile}
              reverseDesktop={infoSectionReverseDesktop}
              border={infoSectionBorder}
              color={infoSectionColor}
              contentButton={infoSectionContentButton}
              readMore={infoSectionReadMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
