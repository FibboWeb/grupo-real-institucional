import DownloadsBanner from "@/public/images/downloads/downloads-banner.jpg";
import Image from "next/image";
import Newsletter from "@/components/Layout/Newsletter";
import Breadcrumb from "@/components/BreadCrumb";
import { ListCardDownload } from "@/components/CardDowload";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads de catálogo e logos - Grupo Real",
  description: "40 anos construindo gerações reais.",
  openGraph: {
    title: "Downloads de catálogo e logos - Grupo Real",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo Real",
  },
  alternates: {
    canonical: "https://gruporealbr.com.br/downloads",
    languages: {
      pt: "https://gruporealbr.com.br/",
    },
  },
};

export default function DownloadsPage() {
  return (
    <div className="fb_container mt-[96px] min-h-screen mb-10">
      {/* Breadcrumb */}
      <div>
        <Breadcrumb
          activeClasses="text-fb_gray_bread"
          excludePaths={["produtos"]}
          containerClasses="flex py-5"
          listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
          capitalizeLinks
        />
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
        <ListCardDownload />
      </div>
      <Newsletter />
    </div>
  );
}
