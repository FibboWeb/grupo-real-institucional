export async function fetchAllRepresentantes() {
  try {
    const baseUrl = `${process.env.NEXT_PUBLIC_WP_URL_API}representante?per_page=100&_embed=wp:term`;
    let page = 1;
    let totalPages = 1;
    let allRepresentantes: any[] = [];

    while (page <= totalPages) {
      const response = await fetch(`${baseUrl}&page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data || !Array.isArray(data)) {
        console.error("Invalid data structure:", data);
        return { props: [] };
      }

      if (page === 1) {
        totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);
      }

      const representantes = data.map((representante: any) => {
        const categoriaNames =
          representante._embedded?.["wp:term"]?.flatMap((terms: any) =>
            terms.map((term: any) => term.name)
          ) || [];

        return {
          id: representante.id,
          title: representante.title.rendered,
          estado: representante.meta?.estado_do_representante || "",
          endereco: representante.meta?.endereco_do_representante || "",
          pais:
            representante.meta?.pais_representante ||
            representante.meta?.pais_do_representante ||
            "",
          cidade: representante.meta?.cidade_do_representante || "",
          email: representante.meta?.email_do_representante || "",
          latitude: representante.meta?.latitude_representante,
          longitude: representante.meta?.longitude_representante,
          iframeMap: representante.meta?.iframe_map,
          slug: representante.slug,
          categoriaId: categoriaNames,
        };
      });

      allRepresentantes = [...allRepresentantes, ...representantes];
      page++;
    }

    const ordered = allRepresentantes.sort((a, b) => a.title.localeCompare(b.title));
    return { props: ordered };
  } catch (error) {
    console.error("Erro ao buscar representantes:", error);
    return { props: [] };
  }
}
