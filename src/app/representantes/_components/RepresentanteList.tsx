import React from 'react'

export default function RepresentanteList({representanteList, openCategory, categoriasColors, category}) {
  return (
    <div className={`flex flex-wrap border-b border-gray-300 ${openCategory === category ? 'animate-fade-in' : ''}`}>
      {representanteList
        // se a categoria for linha saude renderizar dentro de saúde animal
        .filter((representante) => (representante.categoriaId.includes(category) || (representante.categoriaId.includes("Linha Saúde") && category === "Saúde Animal"))) 
        .map((representante) => (
          <div key={representante.title} className="w-full lg:w-1/2 2xl:w-1/3 p-4 border-b border-gray-300">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold mb-2">{representante.title.replace("&#038;", "&").replace("&#8211;", ".")}</h3>
              <div className="inline-block">
                {representante.categoriaId && representante.categoriaId.filter(item => item !== "Linha Saúde").map((item, index) => (
                  <span key={item} className={`text-base ${categoriasColors[item]}`}>
                    {item}{index < representante.categoriaId.length - 1 && item !== "Saúde Animal" ? " - " : ""}
                  </span>
                ))}
              </div>
              <p className="text-sm text-fb_gray_bread">
                Brasil / {representante.estado} / {representante.cidade}
              </p>
              <p className="text-sm text-fb_gray_bread">{representante.endereco}</p>
              <p className="text-sm text-fb_gray_bread">{representante.email}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
