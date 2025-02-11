export async function fetchYoastSEO(slug, context) {
  const url = `https://realh.com.br/wp-json/wp/v2/${context}?slug=${slug}`;
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
