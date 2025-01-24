// CategoriaPage.tsx
import { getCategoriesNoticias } from "@/lib/getCategoriesNoticias";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import CardBlog from "@/components/Layout/CardBlog";
import Pagination from "@/components/Pagination";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";

interface CategoriaPageProps {
  params: {
    categoria?: string[];
    page?: string;
  };
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { categoria, page } = await params;
  const slug = categoria?.length > 0 ? categoria[categoria.length - 1] : "";
  const postsPerPage = 6;
  const currentPage = page ? parseInt(page) : 1;

  const { category, posts, total, hasMore, hasPrevious, startCursor, endCursor } = await getCategoriesNoticias(
    slug,
    postsPerPage,
    currentPage,
  );
  if (!category) {
    notFound();
  }

  const totalPages = Math.ceil(total / postsPerPage);
  return (
    <div className="fb_container px-2 mb-12">
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        excludePaths={["categoria"]}
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
        capitalizeLinks
      />
      <div className="hero-category bg-fb_category_image bg-no-repeat bg-cover bg-center h-56 xl:h-60 rounded-2xl mb-12">
        <div className="w-full h-full bg-black bg-opacity-60 flex justify-center items-center rounded-2xl">
          <h1 className="font-bold text-4xl lg:text-5xl text-white">{category.name}</h1>
        </div>
      </div>

      <div className="category-content flex w-full gap-4 xl:gap-24">
        <div className="content-cards w-9/12 mb-7">
          <h2 className="font-bold text-fb_blue_main text-3xl lg:text-4xl mb-4">Últimos Posts</h2>
          {/* <p className="text-sm text-fb_gray mb-4">Total de posts nesta categoria: {total}</p>{" "} */}
          <div className="grid-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {posts.length > 0 ? (
              posts.map((post: any) => (
                <CardBlog
                  key={post.id}
                  postImage={post.featuredImage?.node.sourceUrl}
                  postImageAlt={post.featuredImage?.node.altText || "Imagem do post"}
                  postLink={post.slug}
                  postTitle={post.title}
                  postDescription={{ __html: post.content }}
                  postDate={post.date}
                  postAuthor={post.author?.node.name}
                  postAuthorLink={post.author?.node.slug}
                />
              ))
            ) : (
              <p>Nenhum post encontrado.</p>
            )}
          </div>
        </div>
        <div className="sidebar w-1/3">
          <SidebarNoticias />
        </div>
      </div>

      {/* Paginação */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasPrevious={hasPrevious}
        hasMore={hasMore}
        slug={slug}
      />
    </div>
  );
}
