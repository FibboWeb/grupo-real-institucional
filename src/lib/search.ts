const API_URL = process.env.NEXT_PUBLIC_WP_URL_API;

export async function search(search: string, page = 1) {
  const encodedString = encodeURI(search);
  try {
    const response = await fetch(
      `${API_URL}posts?search=${encodedString}&per_page=10&page=${page}&_embed=wp:featuredmedia,wp:term=1,author`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const categoriesName = [];
    const totalPages = response.headers.get("X-WP-TotalPages");
    const totalPosts = response.headers.get("X-WP-Total");
    const data = await response.json();
    data.map(async (value, index, array) => {
      const res = await fetch(
        `${API_URL}categories?include=${value.categories[0]}&_embed=author`,
      );
      const categoriesFetched = await res.json();
      categoriesName.push(categoriesFetched[0].name);
    });
    return { data, totalPages, totalPosts, categoriesName };
  } catch (error) {
    console.error(error);
  }
}
