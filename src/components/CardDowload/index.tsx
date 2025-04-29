"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import LogoRealH from "@/public/logo-real-h.png";
import { Button } from "../ui/button";
import { getDownloads } from "@/lib/getDownloads";
import { Card, CardContent } from "../ui/card";
import { Download } from "lucide-react";
import Link from "next/link";

export function ListCardDownload() {
  const categories = [
    "CMR Saúde",
    "Grupo Real",
    "Homeopet",
    "Real H",
  ];

  const [allDownloads, setAllDownloads] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchDownloads() {
      const { props } = await getDownloads();
      setAllDownloads(props.edges);
    }
    fetchDownloads();
  }, []);

  const filteredDownloads = useMemo(() => {
    if (!selectedCategory) return allDownloads;
    return allDownloads.filter((item) => 
      item.node.category.includes(selectedCategory)
    );
  }, [selectedCategory, allDownloads]);

  function handleFilter(category: string) {
    setSelectedCategory(category);
  }

  console.log("downloads", filteredDownloads)

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
                onClick={() => handleFilter(category)}
                disabled={allDownloads.filter((item) => item.node.category.includes(category)).length === 0}
              >
                {category} ({allDownloads.filter((item) => item.node.category.includes(category)).length})
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDownloads.map((item, index) => (
          <Card key={item.node.id} className="overflow-hidden drop-shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-[140px] flex items-center justify-center">
                <Image
                  src={item.node.featuredImage?.node?.sourceUrl || LogoRealH}
                  alt={item.node.title}
                  width={230}
                  height={200}
                  loading={index <= 2 ? "eager" : "lazy"}
                  className="object-contain aspect-square items-center justify-center p-4"
                />
              </div>
              <div className="flex flex-col min-h-[110px] max-h-[100px] gap-5 p-4 bg-gray-200">
                <Link className="flex items-center gap-2" href={item.node.featuredImage?.node?.sourceUrl || LogoRealH} download target="_blank" rel="noopener noreferrer">
                  <Download color="#1986C1" className="h-10 w-10" />
                  <h3 className="font-medium text-xl flex-1">{item.node.title}</h3>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
