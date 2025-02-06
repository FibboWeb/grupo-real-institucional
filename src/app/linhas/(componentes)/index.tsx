import CardProduct from "@/components/CardProdutos";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/getProducts";
import { notFound } from "next/navigation";

export default async function GridProduct({ slug, searchParams }) {
  let pageNumber = searchParams
  let products: any;
  let totalPages: number;
  let totalProducts: number;
  if (Array.isArray(slug)) {
    slug = slug[0]; // Pega o primeiro valor caso seja um array
  }
  let idConsultado: number;
  const idReal = 735;
  const idCMR = 763;
  const idHomeopet = 764;
  if (slug === "real-h") {
    idConsultado = idReal;
    ({ products, totalPages, totalProducts } = await getProducts(idConsultado, pageNumber));
  } else if (slug === "cmr") {
    idConsultado = idCMR;
    ({ products, totalPages, totalProducts } = await getProducts(idConsultado, pageNumber));
  } else if (slug === "homeopet"){
    idConsultado = idHomeopet;
    ({ products, totalPages, totalProducts } = await getProducts(idConsultado, pageNumber));
  } else {
    return notFound();
  }

  return (
    <div className="w-full flex flex-wrap">
      <CardProduct product={products} />
      <div className="w-full justify-center items-center">
        <Pagination blogContext={`/linhas`} currentPage={pageNumber} totalPages={totalPages} slug={slug} />
      </div>
    </div>
  );

}


