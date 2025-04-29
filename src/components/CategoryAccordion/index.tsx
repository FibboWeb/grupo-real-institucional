"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CategoryAccordion({ categories = [] }) {
  const [openCategories, setOpenCategories] = useState({});

  const toggleSubcategories = (categoryId) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryId]: !prevOpenCategories[categoryId],
    }));
  };

  const filteredCategories = categories.filter((category) => category.slug !== "nao-categorizado" && category.slug !== "pecuaria-forte");

  return (
    <ul className="ml-5">
      {categories.length > 0 ? (
        filteredCategories.map((category) => (
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
              {category.children?.nodes.length > 0 && (
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openCategories[category.databaseId] ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>
            {category.children?.nodes.length > 0 && (
              <ul
                className={`ml-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategories[category.databaseId] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
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
        <p>Nenhuma subcategoria encontrada.</p>
      )}
    </ul>
  );
}
