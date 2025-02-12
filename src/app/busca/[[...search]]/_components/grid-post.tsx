'use client'
import Breadcrumb from "@/components/BreadCrumb";
import CardBlog from "@/components/Layout/CardBlogAPI";
import Pagination from "@/components/Pagination";
import { search } from "@/lib/search";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


function GridPost() {
    const searchParams = useSearchParams().get("search");
    const page = parseInt(useSearchParams().get("page")) || 1;
    const searchString = searchParams || ""
    const [data, setData] = useState([]);
    const [totalPostsFetched, setTotalPostsFetched] = useState<string>("");
    const [totalPagesFetched, setTotalPagesFetched] = useState<string>("");
    
    useEffect(() => {
      async function fetchData() {
        const { data, totalPosts, totalPages } = await search(searchString, parseInt(page));
        setData(data);
        setTotalPostsFetched(totalPosts);
        setTotalPagesFetched(totalPages);
      }
      fetchData();
    }, []);
    
    console.log(data)
    console.log(searchString)

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div>
            <Breadcrumb
              activeClasses="text-fb_gray_bread"
              excludePaths={["categoria"]}
              // itemName={searchString[0]}
              containerClasses="flex py-5"
              listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
              capitalizeLinks
            />
          </div>
          <div className="relative mt-3">
            <h1 className="text-xl lg:text-3xl font-bold text-fb_blue_main leading-3">
              Resultados para:<span className="ml-2 font-medium">{searchString}</span>
            </h1>
            <p className="text-sm text-fb_blue_main mt-2">{totalPostsFetched} resultados</p>
          </div>
          {/* Imprimir os resultados aqui */}
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((post, index) => (
                <CardBlog
                  key={index}
                  blogContext={"/noticias"}
                  postImage={post._embedded?.['wp:featuredmedia'][0].source_url}
                  postImageAlt={post._embedded?.['wp:featuredmedia'][0].alt_text || "Imagem do post"}
                  postLink={post.slug}
                  postTitle={<span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
                  postDescription={{ __html: post.content.rendered }}
                  postDate={post.date}
                  postAuthor={post._embedded?.["author"][0]?.name}
                  postAuthorLink={`/author/${post._embedded?.["author"][0].slug}`}
                />
              ))}
            </div>
            
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination currentPage={parseInt(page)} totalPages={parseInt(totalPagesFetched)} slug={searchString} blogContext={`/busca?search=`} />
      </div>
    </>
  )
    
}

export default GridPost;