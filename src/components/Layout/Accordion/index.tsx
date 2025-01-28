"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import styles from "./index.module.css";

/**
 * Props do componente Accordion
 * @prop {string} title - Título do accordion
 * @prop {FaqHeading} [faqHeading={tagName: 'h2'}] - Tag para o título do accordion
 * @prop {React.ReactNode} children - Conteúdo do accordion
 * @prop {boolean} [active=false] - Se o accordion começa aberto ou fechado
 */
export interface FaqHeading {
  tagName: "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Componente de accordion
 * @example
 * <Accordion title="Título do accordion">Conteúdo do accordion</Accordion>
 * @example
 * <Accordion title="Título do accordion" faqHeading={{tagName: 'h3'}} active={true}>Conteúdo do accordion</Accordion>
 */
function Accordion({
  title,
  faqHeading = { tagName: "h2" },
  children,
  active = false,
}: {
  title: string;
  faqHeading?: FaqHeading;
  children: React.ReactNode;
  active?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(active === undefined ? false : active);

  const TagName = faqHeading.tagName;

  return (
    <div className={[styles.accordion, "w-full border-b border-gray-300 pt-2"].join(" ")}>
      <button
        className="w-full relative text-left pe-4 py-2 bg-transparent border-none outline-none cursor-pointer flex gap-4 items-center no-wrap"
        onClick={() => {
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
          `overflow-hidden transition-all duration-300 ${isOpen ? "visible max-h-[10000px] opacity-100 ps-11 pe-4" : "invisible max-h-0 opacity-0 pe-11 ps-4"} py-1`,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;

