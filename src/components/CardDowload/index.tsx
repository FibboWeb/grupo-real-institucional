'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import LogoRealH from "@/public/logo-real-h.png";
import { Button } from "../ui/button";
import { getDownloads } from "@/lib/getDownloads";
import { Card, CardContent } from "../ui/card";
import { Download } from "lucide-react";

export function ListCardDownload() {

  const categories = [
    "CMR Saúde Animal",
    "Grupo Real (Institucional)",
    "Homeopet",
    "Institucional",
    "Grupo Real Nutrição e Saúde Animal",
    // "Grupo Real Nutrição e Saúde Animal",
  ];

  const [downloads, setDownloads] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {
    async function fetchDownloads() {
      const downloadsData = await getDownloads();
      setDownloads(downloadsData.props);
    }

    fetchDownloads();
  }, []);
  
    async function handleFilter(category) {
      setSelectedCategory(category);
      if (category) {
        const clearDownloads = await getDownloads();
        const filteredDownloads = clearDownloads.props.filter((item) => item.categories.includes(category));
        setDownloads(filteredDownloads);
      } else {
        async function resetDownloads() {
          const downloadsData = await getDownloads();
          setDownloads(downloadsData.props);
        }
        resetDownloads();
      }
    }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Categories Sidebar */}
      <div className="col-span-1 space-y-4 w-fit">
        <h2 className="text-xl font-semibold">Categorias</h2>
        <ul className="space-y-2">
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start text-gray-600 hover:text-gray-900 ${
                selectedCategory === "" ? "font-bold" : ""
              }`}
              onClick={() => handleFilter("")}
            >
              Todas
            </Button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Button
                variant="ghost"
                className={`w-fit justify-start text-gray-600 hover:text-gray-900 ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => handleFilter(category)}
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {downloads.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[140px]">
                <Image
                  src={item.featuredImage?.node?.sourceUrl || LogoRealH}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-h-[140px] gap-5 p-4">
                <a href={item.camposBanners.node.mediaItemUrl} download target="_blank" rel="noopener noreferrer">
                  <Download color="#1986C1" className="h-10 w-10" />
                  <h3 className="font-medium text-2xl">{item.title}</h3>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}