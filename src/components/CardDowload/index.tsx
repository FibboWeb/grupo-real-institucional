"use client";
import { getDownloads } from "@/lib/getDownloads";
import LogoRealH from "@/public/logo-real-h.png";
import { Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function ListCardDownload({ downloadsData }) {
  const categories = [
    "CMR Saúde Animal",
    "Grupo Real",
    "Homeopet",
    "Batoque",
    "CMR Distribuidora",
    // "Grupo Real Nutrição e Saúde Animal",
  ];

  const [downloads, setDownloads] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  async function handleFilter(category) {
    setSelectedCategory(category);
    if (category) {
      const clearDownloads = await getDownloads();
      console.log("clearDownloads: ",clearDownloads.props, "category: ", category)
      const filteredDownloads = clearDownloads.props.filter((item) => 
        Array.isArray(item.category) && item.category.includes(category)
      );
      setDownloads(filteredDownloads);
    } else {
      async function resetDownloads() {
        const downloadsData = await getDownloads();
        setDownloads(downloadsData.props);
      }
      resetDownloads();
    }
  }

  useEffect(()=> {
  }, [downloads])

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
                  className="object-contain aspect-square"
                />
              </div>
              <div className="flex flex-col min-h-[140px] gap-5 p-4">
                <a href={item.featuredImage?.node?.sourceUrl || LogoRealH} download target="_blank" rel="noopener noreferrer">
                  <Download color="#1986C1" className="h-10 w-10" />
                  <h3 className="font-medium text-2xl">{item.title}</h3>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}