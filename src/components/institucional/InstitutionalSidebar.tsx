"use client";

import { FileText, Menu, Phone, Scale, Shield, X, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { InstitutionalMenuIcon } from "@/constants/cms-config";
import { InstitutionalSidebarCategory } from "@/types/institutional-page";
import Image from "next/image";

const ICON_MAP: Record<InstitutionalMenuIcon, LucideIcon> = {
  phone: Phone,
  shield: Shield,
  "file-text": FileText,
  scale: Scale,
};

type Props = {
  categorias: InstitutionalSidebarCategory[];
};

export default function InstitutionalSidebar({ categorias }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const renderIcon = (categoria: InstitutionalSidebarCategory) => {
    if (categoria.iconImageUrl) {
      return (
        <Image
          src={categoria.iconImageUrl}
          alt=""
          width={18}
          height={18}
          className="inline-block object-contain"
          unoptimized
        />
      );
    }

    const Icon = ICON_MAP[categoria.icon] ?? FileText;
    return <Icon size={18} />;
  };

  return (
    <>
      <aside className="hidden md:block w-80 p-4 h-full">
        {categorias.map((categoria, index) => (
          <div key={index} className="mb-4">
            {categoria.titulo ? (
              <p className="font-bold flex gap-2 items-center">
                {renderIcon(categoria)}
                {categoria.titulo}
              </p>
            ) : null}
            <ul className="py-2 text-gray-600">
              {categoria.itens.map((item, i) => (
                <li key={i} className="hover:text-blue-500 my-4 cursor-pointer font-medium">
                  <Link
                    href={item.link}
                    target={item.target || undefined}
                    className={pathName === item.link ? "text-fb_blue" : ""}
                  >
                    {item.anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      <div className="md:hidden px-4 py-4 bg-white w-fit rounded-tr-full rounded-br-full shadow-custom_shadow fixed z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-600 z-50"
          aria-expanded={isOpen}
          aria-label="Menu institucional"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`${isOpen ? "block opacity-100 visible" : "hidden opacity-0 h-0 invisible overflow-hidden"} transition-all duration-300 bg-white rounded-lg py-4 w-80 fixed top-52 shadow-custom_shadow z-50`}
        >
          {categorias.map((categoria, index) => (
            <div key={index} className="my-3 mx-5">
              {categoria.titulo ? (
                <p className="font-bold text-lg mb-4 flex gap-4 items-center">
                  {renderIcon(categoria)}
                  {categoria.titulo}
                </p>
              ) : null}
              <ul className="text-gray-600 flex flex-col gap-3">
                {categoria.itens.map((item, i) => (
                  <li key={i} className="transition duration-300 hover:text-blue-500 font-medium cursor-pointer">
                    <Link
                      href={item.link}
                      target={item.target || undefined}
                      className={pathName === item.link ? "text-fb_blue" : ""}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.anchor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
