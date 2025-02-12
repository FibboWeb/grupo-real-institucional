export async function search(search: string, page = 1) {
  const encodedString = encodeURI(search);
  console.log(encodedString);
  try {
    const response = await fetch(
      `https://realh.com.br/wp-json/wp/v2/posts?search=${encodedString}&per_page=10&page=${page}&_embed=wp:featuredmedia,wp:term=1,author`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response: ", response);

    const categoriesName = [];
    const totalPages = response.headers.get("X-WP-TotalPages");
    const totalPosts = response.headers.get("X-WP-Total");
    const data = await response.json();
    console.log(data)
    data.map(async (value, index, array) => {
      const res = await fetch(`https://realh.com.br/wp-json/wp/v2/categories?include=${value.categories[0]}&_embed=author`);
      const categoriesFetched = await res.json();
      categoriesName.push(categoriesFetched[0].name);
    });
    return { data, totalPages, totalPosts, categoriesName };
  } catch (error) {
    console.log(error);
  }
}
