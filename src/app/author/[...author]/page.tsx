import Breadcrumb from "@/components/BreadCrumb";
import Newsletter from "@/components/Layout/Newsletter";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";
import CardBlog from "@/components/Layout/CardBlogAPI";
import AuthorBox from "@/components/Layout/AuthorBox";
import { ChevronLeft, ChevronRight } from "lucide-react";

async function fetchPosts(authorId, page = 1, postsPerPage = 6) {
  const res = await fetch(
    `https://realh.com.br/wp-json/wp/v2/posts?author=${authorId}&per_page=${postsPerPage}&page=${page}`,
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
  return { posts: data, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}
async function fetchAuthorData(authorSlug: string) {
  const authorRes = await fetch(`https://realh.com.br/wp-json/wp/v2/users?slug=${authorSlug}`);
  const authorData = await authorRes.json();
  return authorData.length > 0 ? authorData[0] : null;
}

export default async function PaginatedPosts({
  params,
  searchParams,
}: {
  params: { author?: string[] };
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1");
  const postsPerPage = 6;

  const authorSlugs = params.author || [];

  if (authorSlugs.length === 0) {
    return <p>Nenhum autor especificado.</p>;
  }

  const authorSlug = authorSlugs[authorSlugs.length - 1];

  // Buscar os dados do autor
  const author = await fetchAuthorData(authorSlug);

  if (!author) {
    return <p>Autor não encontrado.</p>;
  }

  const authorName = author.name;
  const authorBio = author.description || "Biografia não disponível";

  const authorId = author.id;

  const { posts, totalPosts, totalPages } = await fetchPosts(authorId, page, postsPerPage);

  const generatePaginationLinks = () => {
    const paginationLinks = [];
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, page + 2);

    if (startPage > 1) {
      paginationLinks.push(
        <a key={1} href={`/author/${authorSlug}`} className="px-4 py-2 border rounded hover:bg-gray-200">
          1
        </a>,
      );
      if (startPage > 2) {
        paginationLinks.push(
          <span key="ellipsis1" className="px-2 py-2">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationLinks.push(
        <a
          key={i}
          href={i === 1 ? `/author/${authorSlug}` : `/author/${authorSlug}?page=${i}`}
          className={`px-2 py-2 border rounded ${i === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
        >
          {i}
        </a>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationLinks.push(
          <span key="ellipsis2" className="px-2 py-2">
            ...
          </span>,
        );
      }
      paginationLinks.push(
        <a
          key={totalPages}
          href={`/author/${authorSlug}?page=${totalPages}`}
          className="px-2 py-2 border rounded hover:bg-gray-200"
        >
          {totalPages}
        </a>,
      );
    }

    return paginationLinks;
  };

  return (
    <div className="fb_container px-2 mb-12 mt-24">
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        excludePaths={["author"]}
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
        capitalizeLinks
      />
      <div className="author-hero mb-8">
        <AuthorBox authorName={authorName} authorBio={authorBio} />
      </div>
      <div className="category-content flex flex-col lg:items-start lg:flex-row w-full gap-4 xl:gap-24 mb-5">
        <div className="content-cards w-full lg:w-9/12 mb-7">
          <h2 className="font-bold text-fb_blue_main text-3xl lg:text-4xl mb-4">Últimos Posts</h2>
          <div className="grid-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {posts.length === 0 ? (
              <p>Nenhum post encontrado.</p>
            ) : (
              posts.map((post, index) => (
                <CardBlog
                  key={index + 4}
                  blogContext="/noticias"
                  postImage={post.featured_media ? post.featured_media.source_url : null}
                  postImageAlt={post.featured_media?.alt_text || "Imagem do post"}
                  postLink={post.slug}
                  postTitle={<span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
                  postDescription={{ __html: post.excerpt.rendered }}
                  postDate={post.date}
                  postAuthor={authorName}
                  postAuthorLink={authorSlug}
                />
              ))
            )}

            <div className="flex justify-center  items-center mt-6 space-x-2">
              {page > 1 && (
                <a
                  href={page === 2 ? `/author/${authorSlug}` : `/author/${authorSlug}?page=${page - 1}`}
                  className="px-2 py-2 border rounded hover:bg-gray-200"
                >
                  <ChevronLeft />
                </a>
              )}
              {generatePaginationLinks()}
              {page < totalPages && (
                <a
                  href={`/author/${authorSlug}?page=${page + 1}`}
                  className="px-2 py-2 border rounded hover:bg-gray-200"
                >
                  <ChevronRight />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="sidebar w-full lg:w-1/3">
          <SidebarNoticias />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
