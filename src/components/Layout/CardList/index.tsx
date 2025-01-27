import React from "react";
import Image from "next/image";
import style from "./index.module.css";

export interface FaqHeading {
  tagName: "h2" | "h3" | "h4" | "h5" | "h6";
}

function CardList({
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
    <div className={[style.cardIcon, "w-full border-b border-gray-300 pt-3 flex gap-4 items-start pb-3"].join(" ")}>
      <Image src={svg} width={58} height={58} alt="" />
      <div>
        <strong>
          <TagName>{title}</TagName>
        </strong>
        <div className={[`overflow-hidden transition-all duration-300`].join(" ")}>{children}</div>
      </div>
    </div>
  );
}

export default CardList;
