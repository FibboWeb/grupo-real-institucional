'use client';
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function FiltersCategoriesDownloads({categories, handleFilter, openCategory}) {

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section className="grid-col-span-1">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Categorias</h2>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-gray-600 hover:text-gray-900 ${selectedCategory === "" ? "font-bold" : ""}`}
                  onClick={() => handleFilter("")}
                >
                  Todas
                </Button>
              </li>
              {categories.map((category, index) => (
                <li key={index + Math.random()}>
                  <Button
                    variant="ghost"
                    className={`w-fit justify-start text-gray-600 hover:text-gray-900 ${selectedCategory === category ? "font-bold" : ""}`}
                    onClick={() => handleFilter(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </section>
  )
}
