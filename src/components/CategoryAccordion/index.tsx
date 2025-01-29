"use client";

import Link from "next/link";
import { useState } from "react";

export default function CategoryAccordion({ categories = [] }) {
  const [openCategories, setOpenCategories] = useState({});

  const toggleSubcategories = (categoryId) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryId]: !prevOpenCategories[categoryId],
    }));
  };

  return (
    <ul className="ml-5">
      {categories.length > 0 ? ( // Verifica se há categorias antes de mapear
        categories.map((category) => (
          <li key={category.databaseId} className="category-item mb-[2px]">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSubcategories(category.databaseId)}
            >
              <Link
                className="text-fb_gray_bread hover:text-fb_blue duration-300 font-semibold"
                href={`/categoria/${category.slug}`}
              >
                {category.name}
              </Link>
              {category.children?.nodes.length > 0 && <span className="ml-2">+</span>}
            </div>
            {category.children?.nodes.length > 0 && (
              <ul className={`ml-8 ${openCategories[category.databaseId] ? "" : "hidden"}`}>
                {category.children.nodes.map((child) => (
                  <li key={child.databaseId} className="subcategory-item mb-[2px]">
                    <Link
                      className="text-fb_gray_bread hover:text-fb_blue duration-300 font-semibold"
                      href={`/categoria/${category.slug}/${child.slug}`}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))
      ) : (
        <p>Nenhuma subcategoria encontrada.</p> // Exibe uma mensagem caso não haja subcategorias
      )}
    </ul>
  );
}
