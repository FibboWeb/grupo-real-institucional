"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DownloadsBanner from "@/public/images/downloads/downloads-banner.jpg";
import LogoRealH from "@/public/images/downloads/logo-realh.png";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Newsletter from "@/components/Layout/Newsletter";

import { getDownloads } from "@/lib/getDownloads";

const categories = [
  "CMR Saúde Animal",
  "Grupo Real (Institucional)",
  "Homeopet",
  "Institucional",
  "Grupo Real Nutrição e Saúde Animal",
  "Grupo Real Nutrição e Saúde Animal",
];

export default function DownloadsPage() {
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
    <div className="fb_container mt-[96px] min-h-screen mb-10">
      {/* Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Downloads</span>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative h-[200px] w-full">
        <Image src={DownloadsBanner} alt="Cattle background" fill className="object-cover brightness-50 rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Downloads</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Categories Sidebar */}
          <div className="space-y-4">
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
                    className={`w-full justify-start text-gray-600 hover:text-gray-900 ${
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
          <div className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
      </div>
      <Newsletter />
    </div>
  );
}
