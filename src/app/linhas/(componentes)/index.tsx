import CardProduct from "@/components/CardProdutos";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/getProducts";
import { notFound } from "next/navigation";
export default async function GridProduct({ slug }) {
  let products
  if (Array.isArray(slug)) {
    slug = slug[0]; // Pega o primeiro valor caso seja um array
  }
  if (slug === "real-h") {
    // 67 e 65
    products = await getProducts(["linha-nutricao", "linha-equino-h"],);
  } else if (slug === "cmr") {
    // 68 e 66
    products = await getProducts(["linha-saude", "linha-md"]);
  } else {
    // 64
    products = await getProducts(["linha-homeo-pet", ""]); // Removido string vazia
  }
  
    return (
      <>
        <div className="w-full">
          {products.data?.edges.map((edge, index) => (
            <div key={index} className="mb-8 min-h-[600px] items-center">
              {/* Passando os detalhes do produto para o componente CardProduct */}
              <CardProduct product={[edge.node.camposLinhas.gradeProdutos]} />
            </div>
          ))}
          <div>
            <Pagination
              currentPage={products.data?.pageInfo.currentPage}
              totalPages={products.data?.pageInfo.totalPages}
              blogContext={`/linhas/${slug}`}
            />
          </div>
        </div>
      </>
    );  
    // return (
    //   <>
    //     <div className="w-full">
    //         {products.map((edge, index) => (
    //                   <div key={index} className="mb-8 min-h-[600px] items-center">
    //                     {/* Passando os detalhes do produto para o componente CardProduct */}
    //                     <CardProduct product={[edge]} />
    //                   </div>))}
    //                 <div>
    //                   <Pagination
    //                     currentPage={products.data?.pageInfo.currentPage}
    //                     totalPages={products.data?.pageInfo.totalPages}
    //                     blogContext={`/linhas/${slug}`}
    //                   />
    //                 </div>
    //               </div>
    //   </>
    // );  
}


