import CardProduct from "@/components/CardProdutos";
import { getProducts } from "@/lib/getProducts";
export default async function GridProduct() {
  const products = await getProducts(["linha-nutricao", "linha-saude"]);
  return (
    <>
      <div className="w-full">
        {products.data?.edges.map((edge, index) => (
          <div key={index} className="mb-8 min-h-[520px]">
            {/* Passando os detalhes do produto para o componente CardProduct */}
            <CardProduct product={[edge.node.camposLinhas.gradeProdutos]} />
          </div>
        ))}
      </div>
      <div>{/* <Pagination /> */}</div>
    </>
  );
}
