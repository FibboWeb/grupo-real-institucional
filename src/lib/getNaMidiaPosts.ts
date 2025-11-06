"use server";

export async function getNaMidiaPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL_API}na-midia?per_page=10&orderby=date&order=desc&_embed=wp:featuredmedia,wp:term,author`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      return {
        posts: [],
        metadata: {
          exibir_sessao: false,
          titulo_da_sessao: "Grupo Real na Mídia",
        },
      };
    }

    const data = await response.json();

    // Buscar metadados do primeiro post (assumindo que os metadados são os mesmos para todos)
    const firstPost = data[0];
    const metadata = {
      exibir_sessao: firstPost?.metadata?.exibir_sessao ?? false,
      titulo_da_sessao: firstPost?.metadata?.titulo_da_sessao || "Grupo Real na Mídia",
    };

    const customData = data.map((post) => {
      return {
        ...post,
        title: post.title.rendered,
        content: post.content.rendered,
        slug: post.link || post.slug || "",
        categories: {
          nodes: post._embedded?.["wp:term"]?.[0] || [],
        },
        featuredImage: {
          node: {
            sourceUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            altText: post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "",
          },
        },
        author: {
          node: {
            name: post.yoast_head_json?.author || "Comunicação Grupo Real",
            slug: post.yoast_head_json?.author
              ? post.yoast_head_json.author
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "") // Remove acentos
                  .replace(/[^a-z0-9]+/g, "-") // Substitui não alfa-numérico por hífens
                  .replace(/^-+|-+$/g, "") // Remove hífens iniciais/finais
              : "realh",
          },
        },
      };
    });

    return {
      posts: customData,
      metadata,
    };
  } catch (error) {
    console.error("Erro ao buscar posts na mídia:", error);
    return {
      posts: [],
      metadata: {
        exibir_sessao: false,
        titulo_da_sessao: "Grupo Real na Mídia",
      },
    };
  }
}

