"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import LogoRealH from "@/public/images/logos/logo-real-h-colorido.webp";
import LogoCMR from "@/public/images/logos/logo-crm-colorido.webp";
import LogoGrupoReal from "@/public/images/logos/logo-real-h.png";
import LogoHomeopet from "@/public/images/logos/homeopet-logo-colorido.webp";
import { Button } from "../ui/button";
import { getDownloads } from "@/lib/getDownloads";
import { Card, CardContent } from "../ui/card";
import { Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ListCardDownload() {
  const categories = [
    "CMR Saúde",
    "Grupo Real",
    "Homeopet",
    "Real H",
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (id: number) => {
    setActiveTab(id);
  }

  const tabsCategories = [
    {
      id: 1,
      name: "CMR Saúde",
      image: LogoCMR,
    },
    {
      id: 2,
      name: "Grupo Real",
      image: LogoGrupoReal,
    },
    {
      id: 3,
      name: "Homeopet",
      image: LogoHomeopet,
    },
    {
      id: 4,
      name: "Real H",
      image: LogoRealH,
    }
  ]

  const [allDownloads, setAllDownloads] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchDownloads() {
      const { props } = await getDownloads();
      setAllDownloads(props);
    }
    fetchDownloads();
  }, []);

  const filteredDownloads = useMemo(() => {
    if (!selectedCategory) return allDownloads;
    return allDownloads.filter((item) => 
      item.node.category.includes(selectedCategory)
    );
  }, [selectedCategory, allDownloads]);

  function handleFilter(category: string, id: number) {
    setActiveTab(id);
    setSelectedCategory(category);
  }

  console.log("downloads", filteredDownloads)

  return (
    <>
      <div className="flex flex-wrap gap-7 items-center justify-center pb-10">
      <div className="flex w-full items-center justify-center gap-4 px-2">
        <h2 className="text-xl font-semibold text-center ">Clique abaixo para encontrar o material<br/> sobre cada marca!</h2>
      </div>
        {tabsCategories.map((category) => (
          <div 
            onClick={() => handleFilter(category.name, category.id)}
            key={category.id } className={cn([`flex flex-col cursor-pointer items-center justify-center gap-2 border rounded-2xl py-4 px-6 h-44 hover:drop-shadow-lg duration-300`, activeTab === category.id && category.name === selectedCategory ? "bg-gray-100" : "bg-white"])}>
            <Image src={category.image.src} alt={category.name} className="h-40 object-contain" width={100} height={100} />
            <button className="w-full h-10">
              <span className={cn([`text-gray-600`, activeTab === category.id && category.name === selectedCategory ? "font-bold" : ""])}>{category.name}</span>
            </button>
          </div>
        ))}
      </div>
      { selectedCategory !== "" && (
      <>  
      <div className="flex w-full items-center justify-center gap-4 py-8">
        <h2 className="text-xl font-semibold text-center ">Confira os catálogos e logos de cada marca!</h2>
      </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          {/* <div className="col-span-1 space-y-4 w-fit">
            <h2 className="text-xl font-semibold">Categorias</h2>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-gray-600 hover:text-gray-900 ${
                    selectedCategory === "" ? "font-bold" : ""
                  }`}
                  onClick={() => handleFilter("", 0)}
                >
                  Todas ({allDownloads.length})
                </Button>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    className={`w-fit justify-start text-gray-600 hover:text-gray-900 ${
                      selectedCategory === category ? "font-bold" : ""
                    }`}
                    onClick={() => handleFilter(category, 0)}
                    disabled={allDownloads.filter((item) => item.node.category.includes(category)).length === 0}
                  >
                    {category} ({allDownloads.filter((item) => item.node.category.includes(category)).length})
                  </Button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Downloads Grid */}
            <div className="w-full flex flex-wrap gap-8 mx-auto items-center justify-center">
            {filteredDownloads.map((item, index) => (
              <Card key={item.node.id} className="overflow-hidden drop-shadow-lg w-full md:w-[300px] lg:w-[400px]">
                <CardContent className="p-0">
                  <div className="relative h-[140px] flex items-center justify-center">
                    <Image
                      src={item.node.featuredImage?.node?.sourceUrl || LogoRealH}
                      alt={item.node.title}
                      title={item.node.title}
                      width={230}
                      height={200}
                      loading={index <= 2 ? "eager" : "lazy"}
                      className="object-contain aspect-square items-center justify-center p-4"
                    />
                  </div>
                  <div className="flex flex-col min-h-[115px] max-h-[100px] gap-5 p-4 bg-gray-200">
                    <Link className="flex items-center gap-2" href={item.node.featuredImage?.node?.sourceUrl || LogoRealH} download={item.node.title} target="_blank" rel="noopener noreferrer">
                      <Download color="#1986C1" className="h-10 w-10" />
                      <h3 className="font-medium text-xl flex-1">{item.node.title}</h3>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </>
      )}
    </>
  );
}