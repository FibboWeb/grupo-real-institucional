import Breadcrumb from "@/components/BreadCrumb";
import CardBlog from "@/components/Layout/CardBlogAPI";
import Newsletter from "@/components/Layout/Newsletter";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";
import Pagination from "@/components/Pagination";
import { search } from "@/lib/search";

async function page({ params, searchParams }: any) {

  const page = parseInt((await searchParams).page || "1");
  const searchString = (await searchParams).search;
  console.log(searchString)

  const { data, totalPosts, totalPages, categoriesName } = await search(searchString);

  return (
    <main className="relative mt-24 fb_container gap-fb_space-section">
      <div className="flex">
        <div className="w-full">
          <div>
            <Breadcrumb
              activeClasses="text-fb_gray_bread"
              excludePaths={["categoria"]}
              itemName={searchString}
              containerClasses="flex py-5"
              listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
              capitalizeLinks
            />
          </div>
          <div className="relative mt-3">
            <h1 className="text-xl lg:text-3xl font-bold text-fb_blue_main leading-3">
              Resultados para:<span className="ml-2 font-medium">{searchString}</span>
            </h1>
            <p className="text-sm text-fb_blue_main mt-2">{totalPosts} resultados</p>
          </div>
          {/* Imprimir os resultados aqui */}
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-24">
            { data.length === 0 ? (
              <div className="w-full py-4">
                <h2 className="text-2xl font-bold text-fb_blue_main">
                  Nenhum post encontrado para esta busca: <span className="font-medium">{searchString}</span>.
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                  data.map((post, index) => (
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
                  ))
                }
              </div>
            )}
            <div className="lg:w-3/12">
              <SidebarNoticias />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination currentPage={page} totalPages={parseInt(totalPages)} slug={searchString} blogContext={`/busca?search=`} />
      </div>
      <div>
        <Newsletter />
      </div>
    </main>
  );
}

export default page;
