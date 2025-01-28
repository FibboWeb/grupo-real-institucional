export async function fetchPosts(authorId, page = 1, postsPerPage = 6) {
  const res = await fetch(
    `${process.env.WP_URL_API}posts?author=${authorId}&per_page=${postsPerPage}&page=${page}&_embed=wp:featuredmedia`,
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
    return {
      ...post,
      featured_media: postImage,
    };
  });

  return { posts: postsWithImages, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}

export async function fetchAuthorData(authorSlug) {
  const authorRes = await fetch(`${process.env.WP_URL_API}users?slug=${authorSlug}`);
  const authorData = await authorRes.json();
  return authorData.length > 0 ? authorData[0] : null;
}
