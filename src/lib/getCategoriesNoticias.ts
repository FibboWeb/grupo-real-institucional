export async function fetchCategoryId(slug) {
  const res = await fetch(`${process.env.WP_URL_API}categories?slug=${slug}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar o ID da categoria");
  }

  const data = await res.json();
  if (data.length > 0) {
    return data[0].id;
  }

  throw new Error("Categoria não encontrada");
}

export async function fetchPosts(categoryId, page = 1, postsPerPage = 6) {
  const res = await fetch(
    `${process.env.WP_URL_API}posts?categories=${categoryId}&per_page=${postsPerPage}&page=${page}&_embed=author,wp:featuredmedia`,
    {
      next: { revalidate: 6 },
    },
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar os posts");
  }

  const data = await res.json();
  const totalPosts = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  const postsWithImages = data.map((post) => {
    const postImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
    const postAuthor = post._embedded?.["author"]?.[0]?.name || null;
    const postAuthorLink = post._embedded?.["author"]?.[0]?.slug || null;
    return {
      ...post,
      featured_media: postImage,
      author_post_details: {
        name: postAuthor,
        slug: postAuthorLink,
      },
    };
  });

  return { posts: postsWithImages, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}
