import Breadcrumb from "@/components/BreadCrumb";
import Newsletter from "@/components/Layout/Newsletter";
import { fetchAllRepresentantes } from "@/lib/getRepresentantes";
import RepresentantesBanner from "@/public/representantes/representantes-list-banner.webp"; // Fixed import statement
import Image from "next/image";
import MapRepresentantes from "./_components/map";
import RepresentanteWrapper from "./_components/RepresentanteWrapper";
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

export default async function RepresentantesPage() {
  const representantes = await fetchAllRepresentantes();

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
        <RepresentanteWrapper 
          categories={categories}
          representantes={representantes.props}
          categoriasColors={categoriasColors}
        />
      </div>
      <div className="w-full h-full flex flex-col gap-12">
        <h4 className="text-2xl text-center font-bold">Encontre o representante mais próximo de você</h4>
        <MapRepresentantes representantes={representantes.props} />
      </div>
      <Newsletter />
    </div>
  )
}
