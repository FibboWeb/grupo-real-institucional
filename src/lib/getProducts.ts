"use server";
export async function getProducts() {
  try {
    const res = await fetch(`${process.env.WP_URL}/produto`, {
      cache: "no-store", // Use 'force-cache' ou 'no-store' dependendo do comportamento desejado
    });
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return error;
  }
}

export async function getProductPerSlug(slug: string): Promise<WordPressPost> {
  try {
    const res = await fetch(`${process.env.WP_URL}/produto?slug=${slug}`, {
      cache: "no-store", // Use 'force-cache' ou 'no-store' dependendo do comportamento desejado
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.error(`Erro ao buscar produto: ${slug}`, error);
    return error.message;
  }
}
