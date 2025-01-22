"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import styles from "./index.module.css";

export interface FaqHeading {
  tagName: "h2" | "h3" | "h4" | "h5" | "h6";
}

function Accordion({
  title,
  faqHeading = { tagName: "h2" },
  children,
}: {
  title: string;
  faqHeading?: FaqHeading;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const TagName = faqHeading.tagName;

  return (
    <div className={[styles.accordion, "w-full border-b border-gray-300 pt-2"].join(" ")}>
      <button
        className="w-full relative text-left pe-4 py-2 bg-transparent border-none outline-none cursor-pointer flex gap-4 items-center no-wrap"
        onClick={() => {
          console.log("ishi");
          setIsOpen(!isOpen);
        }}
        type="button"
      >
        <div className="rounded-full bg-fb_blue w-7 h-7 text-white shrink-0 flex justify-center items-center">
          {isOpen ? <Minus /> : <Plus />}
        </div>
        <strong className={[styles.accordionTitle, "text-lg"].join(" ")}>
          <TagName>{title}</TagName>
        </strong>
      </button>
      <div
        className={[
          styles.accordionContent,
          `overflow-hidden transition-all duration-300 ${isOpen ? "visible max-h-[10000px] opacity-100 ps-11 pe-4" : "invisible max-h-0 opacity-0"} py-1`,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
