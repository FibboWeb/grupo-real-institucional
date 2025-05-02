import ButtonCTA from '@/components/BannerCTA/ButtonCTA'
import BtnCallToAction from '@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import ComoChegar from './ComoChegar'

export default function RepresentanteList({representanteList, openCategory, categoriasColors, category}) {
  return (
    <div className={`flex flex-wrap border-b border-gray-300 ${openCategory === category ? 'animate-fade-in' : ''} pt-4`}>
      {representanteList
        // se a categoria for linha saude renderizar dentro de saúde animal
        .filter((representante) => (representante.categoriaId.includes(category) || (representante.categoriaId.includes("Linha Saúde") && category === "Saúde Animal"))) 
        .map((representante) => (
          <div key={representante.id} className="w-full lg:w-1/2 2xl:w-1/3 p-4 border-b border-gray-300">
            <div className="flex flex-col min-h-[250px] justify-between">
              <h3 className="text-2xl font-semibold mb-2">{representante.title.replace("&#038;", "&").replace("&#8211;", ".")}</h3>
              <div className="inline-block">
                {representante.categoriaId && representante.categoriaId.filter(item => item !== "Linha Saúde").map((item, index) => (
                  <span key={item} className={`text-base ${categoriasColors[item]}`}>
                    {item}{index < representante.categoriaId.length - 1 && item !== "Saúde Animal" ? " - " : ""}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <p className="text-sm text-fb_gray_bread">
                  Brasil / {representante.estado} / {representante.cidade}
                </p>
                <p className="text-sm text-fb_gray_bread">{representante.endereco}</p>
                <p className="text-sm text-fb_gray_bread break-all">{representante.email}</p>
              </div>
              <div>
                <ComoChegar 
                  endereco={representante.endereco}
                  cidade={representante.cidade}
                  estado={representante.estado}
                  latitude={representante.latitude}
                  longitude={representante.longitude}
                  iframe={representante.iframeMap}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
