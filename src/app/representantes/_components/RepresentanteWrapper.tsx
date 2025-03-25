'use client';
import React, { useState } from 'react'
import RepresentanteList from './RepresentanteList'
import { ChevronDownIcon } from 'lucide-react'
import FiltersCategoriesDownloads from '@/app/downloads/_components/FiltersCategoriesDownloads';

export default function RepresentanteWrapper({categories, representantes, categoriasColors}) {
  const [openCategory, setOpenCategory] = useState(null);

   const handleOpen = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <>
      <FiltersCategoriesDownloads 
        categories={categories}
        handleFilter={handleOpen}
        openCategory={openCategory}
      />
      <section className="flex flex-col gap-4 w-full">
        {categories.map((category, index) => (
          <div key={category + index}>
            <div className="cursor-pointer w-full justify-between items-center flex border border-fb_blue_main hover:border-fb_blue_main/80 rounded-lg p-4 hover:relative hover:scale-[101%] hover:drop-shadow-lg transition duration-400 delay-100 ease-in-out" onClick={() => handleOpen(category)}>
              <h2 
                key={index + category}
                className="text-xl font-semibold"
              >
                {category}
              </h2>
              <span>
                <ChevronDownIcon className={`w-6 h-6 ${ openCategory === category ? 'rotate-180' : ''} transition-transform duration-300 ease-in-out`} />
              </span>
            </div>
            <div className={`w-full ${openCategory === category ? 'block transition-all duration-300 ease-in-out' : 'max-h-0 invisible h-0 w-0 overflow-hidden'}`} data-state={openCategory === category ? 'open' : 'closed'}>
              <RepresentanteList 
                representanteList={representantes}
                openCategory={openCategory}
                category={category}
                categoriasColors={categoriasColors}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
