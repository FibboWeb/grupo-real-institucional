/**
 * Componente `Breadcrumb`
 *
 * Este componente renderiza uma trilha de navegação (breadcrumb) baseada no caminho atual da URL.
 *
 * @param {ReactNode} [homeElement] - Elemento a ser exibido como o link inicial (home) do breadcrumb.
 * @param {ReactNode} [separatorItem] - Elemento separador entre cada parte do breadcrumb.
 * @param {string} [containerClasses] - Classes CSS para o container do breadcrumb.
 * @param {string} [listClasses] - Classes CSS para cada item da lista do breadcrumb.
 * @param {string} [activeClasses] - Classes CSS para o item ativo do breadcrumb.
 * @param {boolean} [capitalizeLinks] - Indica se os links devem ser capitalizados.
 * @param {string[]} [excludePaths] - Array de caminhos a serem excluídos da trilha de navegação.
 *
 * @returns {JSX.Element} O componente Breadcrumb renderizado.
 */
"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type BreadCrumbProps = {
  homeElement?: ReactNode;
  separatorItem?: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  excludePaths?: string[];
};

function Breadcrumb({
  homeElement,
  separatorItem,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  excludePaths,
}: BreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path && !excludePaths?.includes(path));
  const separator = separatorItem || <span className="text-fb_gray_bread font-bold">/</span>;
  const homePath = homeElement || "Home";

  return (
    <div>
      <nav className={containerClasses}>
        <ul className="flex flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          <li
            className={listClasses}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            itemID={`/`}
          >
            <Link href={"/"} itemProp="item">
              <span itemProp="name">{homePath}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {pathNames.length > 0 && separator}
          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join("/")}`;
            let itemClasses = index === pathNames.length - 1 ? `${listClasses} ${activeClasses}` : listClasses;
            let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
            return (
              <React.Fragment key={index}>
                <li
                  className={itemClasses}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  itemID={href}
                >
                  {index === pathNames.length - 1 ? (
                    <span className="text-fb_gray_bread hover:text-fb_gray_bread cursor-default" itemProp="name">
                      {itemLink}
                    </span>
                  ) : (
                    <Link href={href} itemProp="item">
                      <span itemProp="name">{itemLink}</span>
                    </Link>
                  )}
                  <meta itemProp="position" content={(index + 2).toString()} />
                </li>
                {pathNames.length !== index + 1 && separator}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default Breadcrumb;
