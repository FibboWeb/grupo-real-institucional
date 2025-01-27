import React from "react";
import Image from "next/image";

export interface FaqHeading {
  tagName: "h2" | "h3" | "h4" | "h5" | "h6";
}

function InfoCard({
  svg,
  title,
  faqHeading = { tagName: "h3" },
  children,
}: {
  svg: string;
  faqHeading?: FaqHeading;
  title: string;
  children: React.ReactNode;
}) {
  const TagName = faqHeading.tagName;

  return (
    <div className="max-w-[380px] p-4 h-full">
      <div
        className={["w-full rounded-2xl shadow-custom_shadow pt-3 flex flex-col gap-4 items-start p-4 h-full"].join(
          " ",
        )}
      >
        <Image src={svg} width={58} height={58} alt="" />
        <strong className="text-2xl text-fb_blue">
          <TagName>{title}</TagName>
        </strong>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default InfoCard;
