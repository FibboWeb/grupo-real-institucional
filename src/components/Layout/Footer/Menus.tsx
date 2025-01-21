"use client"
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Menus( {menusList} ) {
    return (
        <div className="container mx-auto w-100 flex lg:flex-row flex-col justify-between">
          {menusList.map((menu, index) => {
            const [isOpen, setIsOpen] = useState(false);
            const menuItems = menu?.props?.menuItems?.edges || [];
            const menuName = menu?.props.name;

            return (
              <div className="menu-section mt-2 lg:mt-0" key={index}>
                <p
                  className="flex text-xl justify-between text-fb_blue font-bold uppercase py-2 lg:p-0 w-full text-left"
                  onClick={() => setIsOpen(!isOpen)}>
                    {menuName}
                    <span className={`flex items-center cursor-pointer lg:hidden transition-all duration-300 ${ !isOpen ? "rotate-0" : "rotate-180"}`}>
                        <ChevronDown />
                    </span>
                </p>
                <ul className={`${ isOpen ? "max-h-[500px]" : "max-h-0" } lg:max-h-full overflow-hidden transition-all duration-500 ease-in-out`}>
                  {menuItems.map((item) => (
                    <li key={item.node.id}>
                      <Link
                        className="text-lg text-white font-bold hover:text-fb_blue duration-300"
                        href={item.node.url}
                      >
                        {item.node.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
    );
}