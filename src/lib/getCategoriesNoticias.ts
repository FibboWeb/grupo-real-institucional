export async function fetchCategoryId(slug) {
  const res = await fetch(`${process.env.WP_URL_API}categories?slug=${slug}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar o ID da categoria");
  }

  const data = await res.json();
  if (data.length > 0) {
    const parentCategory = data[0];
    const subcategoriesRes = await fetch(`${process.env.WP_URL_API}categories?parent=${parentCategory.id}`);

    if (!subcategoriesRes.ok) {
      throw new Error("Erro ao buscar subcategorias");
    }

    const subcategories = await subcategoriesRes.json();
    const subcategoryIds = subcategories.map((sub) => sub.id);

    return {
      categoryId: [parentCategory.id, ...subcategoryIds],
      categoryName: parentCategory.name,
    };
  }

  throw new Error("Categoria não encontrada");
}

export async function fetchPosts(categoryIds, page = 1, postsPerPage = 6) {
  const categoryIdsString = Array.isArray(categoryIds) ? categoryIds.join(",") : categoryIds;

  const res = await fetch(
    `${process.env.WP_URL_API}posts?categories=${categoryIdsString}&per_page=${postsPerPage}&page=${page}&_embed=author,wp:featuredmedia`,
    {
      next: { revalidate: 3600 },
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
