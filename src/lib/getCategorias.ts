export async function fetchYoastSEO(slug, context) {
  const url = `${process.env.NEXT_PUBLIC_WP_URL_API}${context}?slug=${slug}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
    }
    const data = await response.json();

    if (data.length > 0 && data[0].yoast_head_json) {
      return data[0].yoast_head_json;
    } else {
      //   throw new Error("Dados não encontrados ou estrutura inesperada.");
      return null;
    }
  } catch (error) {
    console.error("Erro:", error.message);
    return null;
  }
}
