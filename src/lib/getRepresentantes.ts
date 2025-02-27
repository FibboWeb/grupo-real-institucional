import { unstable_cache } from "next/cache";

const getCachedRepresentantes = unstable_cache(
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}representante?per_page=100`, {
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
    const representantes = await Promise.all(data.map(async (representante) => {
      const categoriaName = await getCategorieName(representante.linha[0]);
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
    }));

    return representantes;
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

    console.log("wp:term",data[0]._embedded['wp:term']?.[0]?.[0].name);

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
    return { props: representantes };
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
