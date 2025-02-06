export async function fetchQuerySearch(search: string, page = 1) {
  const encodedString = encodeURI(search);
  const response = await fetch(`${process.env.WP_URL_API}posts?search=${encodedString}&per_page=10&page=${page}&_embed=wp:featuredmedia,wp:term=1,author`);
  const categoriesName = []

  console.log(response.url)
  const totalPages = response.headers.get("X-WP-TotalPages");
  const totalPosts = response.headers.get("X-WP-Total");
  const data = await response.json();
 data.map( async (value, index, array) => {
    const res = await fetch(`${process.env.WP_URL_API}categories?include=${value.categories[0]}&_embed=author`)
    const categoriesFetched = await res.json()
    categoriesName.push(categoriesFetched[0].name)
  })
  return { data, totalPages, totalPosts, categoriesName };
}