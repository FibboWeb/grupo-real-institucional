'use client'
import Breadcrumb from "@/components/BreadCrumb";
import Newsletter from "@/components/Layout/Newsletter";
import { Button } from "@/components/ui/button";
import { getRepresentantes } from "@/lib/getRepresentantes";
import RepresentantesBanner from "@/public/representantes/representantes-list-banner.webp"; // Fixed import statement
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./index.css";

const categories = [
  "Nutrição Animal",
  "Saúde Animal",
  "Homeopet",
];

const categoriasColors = {
  "Nutrição Animal": "text-red-500",
  "Saúde Animal": "text-blue-500",
  "Homeopet": "text-purple-500",
}

export default function RepresentantesPage() {
  
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [representantes, setRepresentantes] = useState([]);

  useEffect(() => {
    async function fetchRepresentantes() {
      const representantesList = await getRepresentantes();
      setRepresentantes(representantesList.props);
    }

    fetchRepresentantes();
  }, []);

  async function handleFilter(category) {
    setSelectedCategory(category);
    const representantesList = await getRepresentantes();
    const allRepresentantes = representantesList;
    if (category) {
      const filteredRepresentantes = allRepresentantes.props.filter((item) => item.categoriaName.includes(category));
      setRepresentantes(filteredRepresentantes);
    } else {
      setRepresentantes(allRepresentantes.props);
    }
  }  
  const handleOpen = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  console.log(representantes);

  return (
    <div className="fb_container mt-[96px] min-h-screen mb-10">
      <div>
        <Breadcrumb
          activeClasses="text-fb_gray_bread"
          excludePaths={["produtos"]}
          containerClasses="flex py-5"
          listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
          capitalizeLinks
        />
      </div>
      <div className="relative h-[300px] w-full">
        <Image loading="eager" src={RepresentantesBanner} alt="Cattle background" fill className="object-cover brightness-50 rounded-lg bg-top" />
        <div className="absolute inset-0 flex items-center justify-center bg-fb_blue_main opacity-70 rounded-lg">
          <h1 className="text-4xl font-bold text-white break-all">Representantes</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 my-12">
        <section className="grid-col-span-1">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Categorias</h2>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  disabled
                  className={`w-full justify-start text-gray-600 hover:text-gray-900 ${selectedCategory === "" ? "font-bold" : ""}`}
                  onClick={() => handleFilter("")}
                >
                  Todas
                </Button>
              </li>
              {categories.map((category, index) => (
                <li key={index + Math.random()}>
                  <Button
                    disabled
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
        <section className="flex flex-col gap-4 w-full">          
          {categories.map((category, index) => (
            <div key={category + index}>
              <div className="cursor-pointer w-full justify-between items-center flex border border-fb_blue_main hover:border-fb_blue_main/80 rounded-lg p-4 hover:relative hover:scale-[101%] hover:-top-2 hover:drop-shadow-lg transition duration-400 ease-in-out" onClick={() => handleOpen(category)}>
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
              <div className="w-full border " data-state={ openCategory === category ? 'open' : 'closed'}>
                <div className="flex flex-wrap border-b border-gray-300 animate-accordion-down">
                  {representantes
                  // se a categoria for linha saude renderizar dentro de saúde animal
                    .filter((representante) => (representante.categoriaId.includes(category) || (representante.categoriaId.includes("Linha Saúde") && category === "Saúde Animal"))) 
                    .map((representante) => (
                      <div key={representante.title} className="w-full lg:w-1/2 2xl:w-1/3 p-4 border-b border-gray-300">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-semibold mb-2">{representante.title.replace("&#038;", "&").replace("&#8211;", ".")}</h3>
                          <div className="inline-block">
                            { representante.categoriaId && representante.categoriaId.filter(item => item !== "Linha Saúde").map((item, index) => (
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
              </div>
            </div>
          ))}
        </section>
      </div>
      <Newsletter />
    </div>
  )
}
