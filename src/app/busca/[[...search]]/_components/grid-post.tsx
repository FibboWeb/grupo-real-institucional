"use client";
import Breadcrumb from "@/components/BreadCrumb";
import CardBlog from "@/components/Layout/CardBlogAPI";
import Pagination from "@/components/Pagination";
import { search } from "@/lib/search";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function GridPost() {
  const searchParams = useSearchParams().get("search");
  const page = parseInt(useSearchParams().get("page") || "1");
  const searchString = searchParams || "";
  const [data, setData] = useState([]);
  const [totalPostsFetched, setTotalPostsFetched] = useState<string>("");
  const [totalPagesFetched, setTotalPagesFetched] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, totalPosts, totalPages } = await search(searchString, page);
        setTotalPostsFetched(totalPosts);
        setTotalPagesFetched(totalPages);
        setData(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchString, page]);

  return (
    <>
      <div className="flex">
        <div className="w-full">
          {/* Breadcrumb */}
          <div>
            <Breadcrumb
              activeClasses="text-fb_gray_bread"
              excludePaths={["categoria"]}
              containerClasses="flex py-5"
              listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
              capitalizeLinks
            />
          </div>

          {/* Título e Contagem de Resultados */}
          <div className="relative mt-3">
            <h1 className="text-xl lg:text-3xl font-bold text-fb_blue_main leading-3">
              Resultados para: <span className="ml-2 font-medium">{searchString}</span>
            </h1>
            <p className="text-sm text-fb_blue_main mt-2">{totalPostsFetched} resultados</p>
          </div>

          {/* Grid de Resultados */}
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-24 mt-4">
            <div
              className={`grid gap-4 w-full ${
                data.length === 0 && !loading ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {/* Skeleton Loader */}
              {loading && Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)}

              {/* Renderização dos Posts */}
              {!loading &&
                data.length > 0 &&
                data.map((post, index) => (
                  <CardBlog
                    key={index}
                    blogContext="/noticias"
                    postImage={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    postImageAlt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "Imagem do post"}
                    postLink={post.slug}
                    postTitle={<span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
                    postDescription={{ __html: post.content.rendered }}
                    postDate={post.date}
                    postAuthor={post._embedded?.["author"]?.[0]?.name || "Comunicação Grupo Real"}
                    postAuthorLink={`/author/${post._embedded?.["author"]?.[0]?.slug}`}
                  />
                ))}

              {/* Mensagem de Nenhum Resultado Encontrado */}
              {!loading && data.length === 0 && (
                <div className="col-span-1 lg:col-span-2 text-center relative mt-11">
                  <h3 className="text-fb_blue_main font-bold text-2xl">Nenhum resultado encontrado</h3>
                  <p className="text-fb_text_gray mt-3">Tente novamente com diferentes palavras ou termos de busca.</p>
                </div>
              )}
            </div>
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-6">
            <Pagination
              currentPage={page}
              totalPages={parseInt(totalPagesFetched)}
              slug={searchString}
              blogContext={`/busca?search=`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Skeleton Card Component
const SkeletonCard = () => {
  return (
    <div className="w-full h-full lg:w-[320px] lg:h-[440px] xl:w-full animate-pulse bg-gray-200 rounded-lg p-4">
      <div className="h-48 bg-gray-300 rounded"></div> {/* Imagem */}
      <div className="h-6 bg-gray-400 rounded w-3/4 my-4"></div> {/* Título */}
      <div className="h-4 bg-gray-400 rounded w-full"></div> {/* Descrição */}
      <div className="h-4 bg-gray-400 rounded w-1/2 mt-2"></div> {/* Data/Autor */}
    </div>
  );
};

export default GridPost;
