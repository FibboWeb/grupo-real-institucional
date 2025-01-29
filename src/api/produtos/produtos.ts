export const getProducts = async () => {
  try {
    const res = await fetch("https://realh.com.br/wp-json/wp/v2/produto", {
      cache: "no-store", // Use 'force-cache' ou 'no-store' dependendo do comportamento desejado
    });
    const posts = await res.json();
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};
