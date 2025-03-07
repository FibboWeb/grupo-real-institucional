import { unstable_cache } from "next/cache";

const getCachedRepresentantes = unstable_cache(
  async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}representante?per_page=100&_embed=wp:term`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Mapeia os representantes para pegar apenas os campos necessários
      const representantes = data.map((representante) => {
        const categoriaName = representante._embedded['wp:term']?.[0]?.[0].name || ""; // Obtendo o nome da categoria diretamente do wp:term
        return {
          id: representante.id, // Adicionando o ID do representante
          title: representante.title.rendered, // Nome do representante
          estado: representante.meta?.estado_do_representante || "",
          endereco: representante.meta?.endereco_do_representante || "",
          pais: representante.meta?.pais_do_representante || "",
          cidade: representante.meta?.cidade_do_representante || "",
          email: representante.meta?.email_do_representante || "",
          categoriaId: categoriaName
        };
      });
      return representantes;
    } catch (error) {
      console.error("Erro ao buscar representantes:", error);
      return { props: [] };
    }
  },
  ["representantes-cache"],
  { revalidate: 86400 } // Revalidar a cada 24 horas
);

export async function getRepresentantes() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}representante?per_page=100&_embed=wp:term`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();

    // Mapeia os representantes para pegar apenas os campos necessários
    const representantes = data.map((representante) => {
      // Pega todas as categorias do representante, pois ele pode vender mais de uma linha
      const categoriaNames = representante._embedded?.['wp:term']?.map(terms => {
        return terms.map(term => term.name); // Mapeia cada array interno para pegar o nome
      }).flat() || []; // Use .flat() para transformar o array de arrays em um único array
      return {
        id: representante.id, // Adicionando o ID do representante
        title: representante.title.rendered, // Nome do representante
        estado: representante.meta?.estado_do_representante || "",
        endereco: representante.meta?.endereco_do_representante || "",
        pais: representante.meta?.pais_do_representante || "",
        cidade: representante.meta?.cidade_do_representante || "",
        email: representante.meta?.email_do_representante || "",
        categoriaId: categoriaNames // Armazenando todas as categorias
      };
    });
    const ordered = representantes.sort((a, b) => a.title.localeCompare(b.title));
    return { props: ordered };
  } catch (error) {
    console.error("Erro ao buscar representantes:", error);
    return { props: [] };
  }
}

async function getCategorieName(id: number) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}linha/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    return data.name;
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);
    return "";
  }
}
