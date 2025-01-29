import CardProduct from "@/components/CardProdutos";
import { getProducts } from "@/lib/getProducts";
import { notFound } from "next/navigation";
export default async function GridProduct({ slug }) {
  let products
  if (Array.isArray(slug)) {
    slug = slug[0]; // Pega o primeiro valor caso seja um array
  }
  if (slug === "real-h") {
    products = await getProducts(["linha-nutricao", "linha-saude"]);
  } else if (slug === "cmr") {
    products = await getProducts(["linha-saude", "linha-md"]);
  } else {
    products = await getProducts(["linha-homeo-pet", ""]); // Removido string vazia
  }
  if (products) {
    return (
      <>
        <div className="w-full">
          {products.data?.edges.map((edge, index) => (
            <div key={index} className="mb-8 min-h-[520px] items-center">
              {/* Passando os detalhes do produto para o componente CardProduct */}
              <CardProduct product={[edge.node.camposLinhas.gradeProdutos]} />
            </div>
          ))}
        </div>
        <div>{/* <Pagination /> */}</div>
      </>
    );
  } else {
    notFound();
  }
}
