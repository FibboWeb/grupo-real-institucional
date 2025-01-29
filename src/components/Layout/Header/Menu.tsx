"use client";
import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import greenLeaf from "../../../../public/green-leaf.svg";
import menuItems from "@/lib/menuItems";

export interface MenuNode {
  id: string;
  url: string;
  label: string;
  childItems?: {
    edges: {
      node: {
        id: string;
        url: string;
        label: string;
        edges?: {
          id: string;
          url: string;
          label: string;
        }[];
      };
    }[];
  } | null;
}

export interface MenuItems {
  node: MenuNode;
}

const menuSustentabilidade = [
  {
    link: "/ambiental",
    anchor: "Ambiental",
  },
  {
    anchor: "Social",
    link: "/social",
  },
  {
    anchor: "Transparência",
    link: "/ciclos-transparencia",
  },
];

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const menuItens = menuFetched?.props?.menuItems?.edges || [];

  const handleMouseEnter = (id: string | SetStateAction<null>) => {
    if (activeMenu === null) {
      return setActiveMenu(id as string); // Define o menu ativo
    } else {
      return setActiveMenu(null);
    }
  };

  const handleMouseEnterSubMenu = (id: string | SetStateAction<null>) => {
    if (activeDropdown === null) {
      return setActiveDropdown(id as string); // Define o menu ativo
    } else {
      return setActiveDropdown(null);
    }
  };

  const handleMouseEntered = (id: string | SetStateAction<null>) => {
    setActiveMenu(id as string);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null); // Fecha o menu
  };

  return (
    <>
      <div className="flex gap-3">
        <ul className="hidden xl:flex gap-1 font-bold text-lg items-center text-black lg:mr-6">
          <li
            className=""
            id="sustentabilidade"
            onMouseEnter={() => handleMouseEntered("sustentabilidade")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex gap-3 bg-fb_green text-white items-center py-2 px-3 text-center rounded-md font-bold relative">
              Sustentabilidade
              <Image src={greenLeaf.src} alt="Green Leaf" width={13} height={13} loading="eager" />
            </button>
            <ul
              className={`w-96 top-3/4 bg-white border absolute sub-menu px-3 py-4 ${activeMenu === "sustentabilidade" ? "block" : "hidden"} transition-opacity duration-400 rounded-md`}
            >
              {menuSustentabilidade.map((subMenu) => (
                <li key={subMenu.anchor} className="py-2 px-3">
                  <a className="text-fb_blue_main hover:text-fb_blue duration-300" href={subMenu.link}>
                    {subMenu.anchor}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {menuItems.map((item) => (
            <li
              className="flex relative gap-2 px-3 py-1"
              key={item.node.id}
              onMouseEnter={() => handleMouseEntered(item.node.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.node.url} className="text-fb_blue_main hover:text-fb_blue duration-300">
                {item.node.label}
              </a>
              {item.node?.childItems?.edges && item.node?.childItems?.edges.length > 0 && (
                <div className="">
                  <span
                    className={`flex items-center cursor-pointer transition-all duration-300 ${activeMenu === item.node.id ? "rotate-180 " : ""}`}
                  >
                    <ChevronDown />
                  </span>
                  <ul
                    className={`w-96 top-3/4 bg-white border absolute sub-menu px-3 py-4 ${activeMenu === item.node.id ? "block" : "hidden"} transition-opacity duration-400 left-1/2 transform -translate-x-1/2 rounded-md`}
                  >
                    {item.node.childItems?.edges?.map((subMenu) => (
                      <li key={subMenu.node.id} className="py-2 px-3">
                        <a className="flex text-fb_blue_main hover:text-fb_blue duration-300" href={subMenu.node.url}>
                          {subMenu.node.label}{" "}
                          {subMenu.node?.edges && subMenu.node?.edges.length > 0 && (
                            <>
                              <span
                                className={`flex items-center cursor-pointer transition-all duration-300 ${activeMenu === subMenu.node.id ? "rotate-180 " : ""}`}
                              >
                                <ChevronDown />
                              </span>
                              <ul
                                className={`sub-sub-menu ${activeMenu === subMenu.node.id ? "block" : "hidden"} transition-opacity duration-400`}
                              >
                                {subMenu.node?.edges?.map((subSubMenu) => (
                                  <li key={subSubMenu.id} className="py-2 px-3">
                                    <a
                                      className="text-fb_blue_main hover:text-fb_blue duration-300"
                                      href={subSubMenu.url}
                                    >
                                      {subSubMenu.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-end xl:hidden">
        <div className="absolute top-1/4 right-0 w-full">
          <button className="float-end block mr-4" onClick={() => setMenuOpen(!menuOpen)}>
            <AlignJustify size={40} />
          </button>
          {menuOpen && (
            <ul className="origin-top relative container top-5 flex flex-col justify-center gap-4 font-bold text-lg items-center text-black bg-white drop-shadow-md shadow-md rounded-md">
              <li
                className=""
                id="sustentabilidade"
                onMouseEnter={() => handleMouseEntered("sustentabilidade")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex gap-3 bg-fb_green text-white items-center py-2 px-3 text-center rounded-md font-bold relative">
                  Sustentabilidade
                  <Image src={greenLeaf.src} alt="Green Leaf" width={13} height={13} loading="eager" />
                  <div
                    onClick={() => handleMouseEnter("sustentabilidade")}
                    className="w-fit right-0 top-1/4 items-center"
                  >
                    <span
                      className={`flex items-center cursor-pointer transition-all duration-300 ${activeMenu === "sustentabilidade" ? "rotate-180" : ""}`}
                    >
                      <ChevronDown />
                    </span>
                    <ul
                      className={`w-96 top-3/4 bg-white z-50 border absolute sub-menu px-3 py-4 ${activeMenu === "sustentabilidade" ? "block" : "hidden"} transition-opacity duration-400  transform left-1/2 -translate-x-2/4 rounded-md`}
                    >
                      {menuSustentabilidade.map((subMenu) => (
                        <li key={subMenu.anchor} className="py-2 px-3">
                          <a className="text-fb_blue_main hover:text-fb_blue duration-300" href={subMenu.link}>
                            {subMenu.anchor}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </li>
              {menuItems.map((item) => (
                <li className="flex relative gap-2" key={item.node.id}>
                  <a
                    href={item.node.url}
                    className="w-full inline-block text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease px-10 py-3"
                  >
                    {item.node.label}
                  </a>
                  {item.node?.childItems?.edges && item.node.childItems?.edges.length > 0 && (
                    <div
                      onClick={() => handleMouseEnter(item.node.id)}
                      className="w-fit absolute right-0 top-1/4 items-center"
                    >
                      <span
                        className={`flex items-center cursor-pointer transition-all duration-300 ${activeMenu === item.node.id ? "rotate-180" : ""}`}
                      >
                        <ChevronDown />
                      </span>
                      <ul
                        className={`z-10 bg-white absolute top-full rounded-md shadow-custom_shadow text-center w-80 md:w-96 sub-menu px-3 py-4 ${activeMenu === item.node.id ? "block opacity-100" : "hidden opacity-0"} bg-accent-neutral transition-all duration-400 transform left-1/2 -translate-x-3/4 rounded-md`}
                      >
                        {item.node.childItems?.edges?.map((subMenu) => (
                          <li key={subMenu.node.id} className="px-5 py-3">
                            <a className="text-fb_blue_main hover:text-fb_blue duration-300" href={subMenu.node.url}>
                              {subMenu.node.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
