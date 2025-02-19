"use client";
import Breadcrumb from "@/components/BreadCrumb";
import { Menu, PhoneIcon, ShieldIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function InstitutionalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const categorias = [
    {
      titulo: "Atendimento",
      icon: <PhoneIcon size={18} />,
      itens: [
        {
          anchor: "Direito dos titulares",
          link: "/institucional/direito-dos-titulares",
        },
        {
          anchor: "Atendimento ao titular",
          link: "/institucional/atendimento-ao-titular",
        },
      ],
    },
    {
      titulo: "Nossas políticas",
      icon: <ShieldIcon size={18} />,
      itens: [
        {
          anchor: "LGPD",
          link: "/lgpd",
        },
        {
          anchor: "Política de Cookies",
          link: "/institucional/politica-de-cookies",
        },
        {
          anchor: "Política de Privacidade",
          link: "/institucional/politica-de-privacidade",
        },
        {
          anchor: "Política de Qualidade",
          link: "/institucional/politica-de-qualidade",
        },
      ],
    },
  ];
  

  return (
    <div className="flex flex-col fb_container">
      <div className="flex flex-1">
        <main className="bg-white relative">
          <div className="mt-24">
            <Breadcrumb
              activeClasses="text-fb_gray_bread"
              containerClasses="flex py-5"
              listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
              capitalizeLinks
              excludePaths={["institucional"]}
            />
          </div>
          <div className="flex flex-1 flex-col md:flex-row gap-6 relative">
            {/* <aside className="hidden md:block w-64 p-4">
              <div className="w-full flex flex-row lg:flex-col">
                <p className="text-lg font-bold flex gap-3 items-center my-4"><PhoneIcon size={18} /> Atendimento</p>
                <ul className="flex flex-col font-medium gap-4 my-4">
                  <li className="hover:text-fb_blue hover:underline aria-[current=active]:text-blue-600 active:text-fb_blue">
                    <Link
                      href={"/institucional/direito-dos-titulares"}
                      target="_blank"                
                    >Direito dos titulares
                    </Link>
                  </li>
                  <li className="hover:text-fb_blue hover:underline">
                    <Link
                      href={"/institucional/direito-dos-titulares"}
                      target="_blank"
                    >Atendimento aos titulares
                    </Link>
                  </li>
                </ul>
                <p className="text-lg font-bold flex gap-3 items-center my-4"><ShieldCheck size={18} /> Nossas políticas</p>
                <ul className="flex flex-col font-medium gap-4">
                  <li className="hover:text-fb_blue hover:underline">
                    <Link
                      href={"/institucional/lgpd"}
                      className="active:text-fb_blue"               
                    >LGPD
                    </Link>
                  </li>
                  <li className="hover:text-fb_blue hover:underline active:text-fb_blue">
                    <Link
                      href={"/institucional/politica-de-cookies"}                
                    >Politica de Cookies
                    </Link>
                  </li>
                  <li className="hover:text-fb_blue hover:underline">
                  <Link
                      href={"/institucional/politica-de-privacidade"}                
                    >Politica de Privacidade
                    </Link>
                  </li>
                  <li className="hover:text-fb_blue hover:underline">
                  <Link
                      href={"/institucional/politica-de-qualidade"}
                    >Politica de Qualidade
                    </Link>
                  </li>
                  <li className="hover:text-fb_blue hover:underline">
                  <Link
                      href={"/institucional/direito-dos-titulares"}                
                    >Direito dos Titulares
                    </Link>
                  </li>
                </ul>
              </div>
            </aside> */}
            {/* Menu lateral desktop */}
            <aside className="hidden md:block w-80 p-4 h-full">
              {categorias.map((categoria, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold flex gap-2">{categoria.icon} {categoria.titulo}</h3>
                  <ul className="py-2 text-gray-600">
                    {categoria.itens.map((item, i) => (
                      <li key={i} className="hover:text-blue-500 my-4 cursor-pointer font-medium">
                        <Link
                          href={`${categoria.itens[i].link}`}
                          className={`${pathName === `${categoria.itens[i].link}` ? "text-fb_blue" : ""}`}
                        >
                          {item.anchor}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>

            {/* Menu suspenso no mobile */}
            <div className="md:hidden px-4 py-4 bg-white p-4 w-fit rounded-tr-full rounded-br-full shadow-custom_shadow fixed z-50">
              {/* Botão para abrir o menu */}
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 text-gray-600 z-50">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Dropdown */}
                <div className={ `${isOpen ? "block opacity-100 visible" : "hidden opacity-0 h-0 invisible overflow-hidden"} transition-all duration-300 bg-white rounded-lg py-4 w-80 fixed top-52 shadow-custom_shadow z-50`}>
                  {categorias.map((categoria, index) => (
                    <div key={index} className="my-3 mx-5">
                      <h3 className="font-bold text-lg mb-4 flex gap-4">{categoria.titulo}</h3>
                      <ul className="text-gray-600 flex flex-col gap-3">
                        {categoria.itens.map((item, i) => (
                          <li key={i} className="transition duration-300 hover:text-blue-500 font-medium cursor-pointer">
                            <Link href={`${categoria.itens[i].link}`} className={`${pathName === `${categoria.itens[i].link}` ? "text-fb_blue" : ""}`}>
                              {item.anchor}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
            </div>
            <div className="w-full">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
