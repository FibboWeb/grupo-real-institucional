"use server";
import { getProducts } from "@/api/produtos/produtos";
import CardProduct from "@/components/CardProdutos";
import { mockProducts } from "@/constants/linhas";

export default async function GridProduct() {
  const products = await getProducts();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-center w-full">
        {mockProducts.map((product) => (
          <div key={product.id} className="mb-8">
            <CardProduct produto={product} />
          </div>
        ))}
      </div>
      <div>{/* <Pagination  /> */}</div>
    </>
  );
}
