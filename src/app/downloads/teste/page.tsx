export async function generateMetadata({ searchParams }: { searchParams: { page?: string } }) {
  const page = searchParams.page || "1";
  const canonicalUrl = `https://realh.com.br/teste${page > "1" ? `?page=${page}` : ""}`;

  return {
    title: `Posts - Página ${page}`,
    description: `Confira os últimos posts. Página ${page}.`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

async function fetchPosts(page = 1, postsPerPage = 10) {
  const res = await fetch(`https://realh.com.br/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar os posts");
  }

  const data = await res.json();
  const totalPosts = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  return { posts: data, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}

// Componente principal
export default async function PaginatedPosts({ searchParams }) {
  const page = parseInt(searchParams.page || "1");
  const postsPerPage = 10;

  const { posts, totalPosts, totalPages } = await fetchPosts(page, postsPerPage);

  const generatePaginationLinks = () => {
    const paginationLinks = [];
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, page + 2);

    for (let i = startPage; i <= endPage; i++) {
      paginationLinks.push(
        <a
          key={i}
          href={`?page=${i}`}
          className={`px-4 py-2 border rounded ${i === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
        >
          {i}
        </a>,
      );
    }

    return paginationLinks;
  };

  return (
    <div className="p-4 my-[100px]">
      {/* Total de Posts */}
      <h1 className="text-2xl font-bold mb-4">Total de Posts: {totalPosts}</h1>

      {/* Lista de Posts */}
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{post.title.rendered}</h2>
              <p className="text-gray-600">
                <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Leia mais
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Paginação */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Botão Anterior */}
        {page > 1 && (
          <a href={`?page=${page - 1}`} className="px-4 py-2 border rounded hover:bg-gray-200">
            Anterior
          </a>
        )}

        {/* Links de Paginação */}
        {generatePaginationLinks()}

        {/* Botão Próxima */}
        {page < totalPages && (
          <a href={`?page=${page + 1}`} className="px-4 py-2 border rounded hover:bg-gray-200">
            Próxima
          </a>
        )}
      </div>
    </div>
  );
}
