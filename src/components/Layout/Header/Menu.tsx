'use client'
import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import greenLeaf from '../../../../public/green-leaf.svg';

interface MenuProps {
  menuFetched: {
    props: {
      menuItems: {
        edges: {
          node: {
            id: string;
            url: string;
            label: string;
            childItems?: {
              edges: {
                node: {
                  id: string;
                  url: string;
                  label: string;
                };
              }[];
            };
          };
        }[];
      };
    };
  };
}

export default function Menu({ menuFetched }: MenuProps) {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuItens = menuFetched?.props?.menuItems?.edges || [];

  const handleMouseEnter = (id: string | SetStateAction<null>) => {
    if (activeMenu === null) {
      return setActiveMenu(id); // Define o menu ativo
    } else {
      return setActiveMenu(null)
    }
  };

  const handleMouseEntered = (id: string | SetStateAction<null>) => {
    setActiveMenu(id);
  }

  const handleMouseLeave = () => {
    setActiveMenu(null); // Fecha o menu
  };

  return (
    <>
      <div className='flex gap-3'>
          <ul className='hidden xl:flex gap-1 font-bold text-lg items-center text-black lg:mr-6'>
                <li className=''>
                  <button className='flex gap-3 bg-fb_green text-white items-center py-2 px-3 text-center rounded-md font-bold'>
                    Sustentabilidade
                    <Image src={greenLeaf.src} alt='Green Leaf' width={13} height={13} loading='eager'/>
                  </button>
                </li>
            {
              menuItens.map((item) => (
                <li className='flex relative gap-2 px-3 py-1' key={item.node.id}>
                    <a href={item.node.url} className='text-fb_blue_main hover:text-fb_blue duration-300'>
                      {item.node.label}
                    </a>
                    {item.node?.childItems?.edges && item.node?.childItems?.edges.length > 0 && (
                      <div
                        onMouseEnter={() => handleMouseEntered(item.node.id)}
                        onMouseLeave={handleMouseLeave}
                        className=""
                        >
                        <span className={`flex items-center cursor-pointer transition-all duration-300 ${activeMenu === item.node.id ? 'rotate-180 ' : ''}`}>
                          <ChevronDown />
                        </span>
                        <ul className={`w-96 top-3/4 bg-white border absolute sub-menu px-3 py-4 ${activeMenu === item.node.id ? 'block' : 'hidden'} transition-opacity duration-400 left-1/2 transform -translate-x-1/2 rounded-md`}>
                          { item.node.childItems?.edges?.map((subMenu) => (
                          <li 
                            key={subMenu.node.id}
                            className="py-2 px-3"
                          >
                            <a
                            className="text-fb_blue_main hover:text-fb_blue duration-300"
                            href={subMenu.node.url}
                            >
                            {subMenu.node.label}
                            </a>
                          </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </li>
                
              ))
            }
          </ul>
        </div>
        <div className="absolute top-1/4 left-0 right-0 w-100 xl:hidden">
        <button className="float-end block mr-4" onClick={() => setMenuOpen(!menuOpen)}>
            <AlignJustify size={40}/>
          </button>
        {menuOpen && (
            <ul className='origin-top relative container top-5 flex flex-col justify-center gap-4 font-bold text-lg items-center text-black bg-white drop-shadow-md shadow-md rounded-md'>
              {
                menuItens.map((item) => (
                  <li className='flex relative gap-2 px-5 py-3' key={item.node.id}>
                      <a href={item.node.url} className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
                        {item.node.label}
                      </a>
                      {item.node?.childItems?.edges && item.node.childItems?.edges.length > 0 && (
                      <div
                        onClick={() => handleMouseEnter(item.node.id)}
                        className="w-full"
                        >
                        <span className={`flex items-center cursor-pointer transition-all duration-300 ${activeMenu === item.node.id ? 'rotate-180' : ''}`}>
                          <ChevronDown />
                        </span>
                        <ul className={`z-10 bg-white absolute top-full rounded-md shadow-custom_shadow right-0 text-center w-96 left-0 sub-menu px-3 py-4 ${activeMenu === item.node.id ? 'block opacity-100' : 'hidden opacity-0'} bg-accent-neutral transition-all duration-400 left-1/2 transform -translate-x-1/2 rounded-md`}>
                          { item.node.childItems?.edges?.map((subMenu) => (
                          <li 
                            key={subMenu.node.id}
                            className='px-5 py-3'
                          >
                            <a
                            className="text-fb_blue_main hover:text-fb_blue duration-300"
                            href={subMenu.node.url}
                            >
                            {subMenu.node.label}
                            </a>
                          </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))
              }
            </ul>
          )}
        </div>
    </>
  )
}
