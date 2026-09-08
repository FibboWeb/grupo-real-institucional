'use client';
import React, { useEffect, useState } from 'react'
import RepresentanteList, { representanteNaCategoria } from './RepresentanteList'
import { ChevronDownIcon } from 'lucide-react'
import FiltersCategoriesDownloads from '@/app/downloads/_components/FiltersCategoriesDownloads';

function slugDaUrl(initialItem?: string) {
  if (initialItem) {
    return initialItem;
  }
  if (typeof window === 'undefined') {
    return '';
  }
  return decodeURIComponent(window.location.hash.replace(/^#/, '')).trim();
}

const LINHA_ITEM_SLUG: Record<string, string> = {
  "nutricao-animal": "Nutrição Animal",
  "saude-animal": "Saúde Animal",
  homeopet: "Homeopet",
};

function categoriaDoSlug(slug: string, representantes, categories: string[]) {
  if (!slug) {
    return null;
  }
  if (LINHA_ITEM_SLUG[slug] && categories.includes(LINHA_ITEM_SLUG[slug])) {
    return LINHA_ITEM_SLUG[slug];
  }
  const byName = categories.find(
    (category) => category.toLowerCase() === slug.toLowerCase()
  );
  if (byName) {
    return byName;
  }
  const representante = representantes.find((item) => item.slug === slug);
  if (!representante) {
    return null;
  }
  return categories.find((category) => representanteNaCategoria(representante, category)) ?? null;
}

export default function RepresentanteWrapper({categories, representantes, categoriasColors, initialItem = ''}) {
  const [openCategory, setOpenCategory] = useState(
    () => categoriaDoSlug(initialItem, representantes, categories)
  );

  const handleOpen = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  useEffect(() => {
    const aplicar = () => {
      const slug = slugDaUrl(initialItem);
      const categoria = categoriaDoSlug(slug, representantes, categories);
      if (!categoria) {
        return;
      }
      setOpenCategory(categoria);
      window.setTimeout(() => {
        const el = document.querySelector(`[data-representante-slug="${CSS.escape(slug)}"]`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    };

    aplicar();
    window.addEventListener('hashchange', aplicar);
    return () => window.removeEventListener('hashchange', aplicar);
  }, [categories, representantes, initialItem]);

  return (
    <>
      <FiltersCategoriesDownloads
        categories={categories}
        handleFilter={handleOpen}
        openCategory={openCategory}
      />
      <section className="flex flex-col gap-4 w-full">
        {categories.map((category, index) => (
          <div key={category + index} id={openCategory === category ? 'representante-aberto' : undefined}>
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
            <div className={`w-full ${openCategory === category ? 'block' : 'max-h-0 invisible h-0 overflow-hidden'}`} data-state={openCategory === category ? 'open' : 'closed'}>
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
