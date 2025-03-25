import Breadcrumb from "@/components/BreadCrumb";
import CardPostHero from "@/components/CardPostHero";
import SliderNavigational from "@/components/icons_slider";
import CardBlog from "@/components/Layout/CardBlogAPI";
import Newsletter from "@/components/Layout/Newsletter";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";
import Pagination from "@/components/Pagination";
import { sliderCategoriasNoticias } from "@/constants/noticiaspage";
import { fetchYoastSEO } from "@/lib/getCategorias";
import { fetchPosts, getLastPostsNoticias } from "@/lib/getPostsNoticiasPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params, searchParams }: Props) {
  let infos;
  infos = await fetchYoastSEO("noticias", "categories");
  const pageParam = (await searchParams).page;
  const page = parseInt(Array.isArray(pageParam) ? pageParam[0] : pageParam || "1");

  if (!infos) {
    notFound();
  }

  return {
    title: `${infos.title}${page === 1 ? "" : ` - Página ${page}`}`,
    description: infos.description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: `${infos.title}${page === 1 ? "" : ` - Página ${page}`}`,
      description: infos.description,
      images: [infos.og_image ? infos.og_image[0].url : ""],
    },
    alternates: {
      canonical: `https://gruporealbr.com.br/noticias${page === 1 ? "" : `?page=${page}`}`,
    },
  };
}

export default async function Noticias({ searchParams }) {
  const page = (await searchParams).page ? parseInt((await searchParams).page, 10) : 1;
  const postsPerPage = 6;

  const { posts, totalPages } = await fetchPosts(page, postsPerPage);
  const heroPostsFetched = await getLastPostsNoticias() ?? { props: { nodes: [] } };
  const heroPosts = heroPostsFetched.props.nodes;
  return (
    <div className="page-noticias fb_container px-2 mb-12 mt-24">
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
        capitalizeLinks
      />
      <div className="herosection flex flex-col lg:flex-row gap-4 lg:max-h-[450px] mb-20">
        <div className="flex flex-col justify-between w-full lg:w-3/12 rounded-2xl bg-fb_gradient text-white min-h-[340px] xl:min-h-[400px] p-12 lg:max-h-[450px]">
          <div className="content">
            <h1 className="text-3xl font-bold mb-7">Notícias</h1>
            <p className="pt-6">
              Fique por dentro de tudo o que acontece no mundo da pecuária. Notícias, eventos, dicas e muito mais...
            </p>
          </div>
        </div>
        <div className="w-full lg:w-9/12 flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col w-full lg:w-1/2 lg:h-[450px]">
            {heroPosts.length > 0 && (
              <CardPostHero
                postImage={heroPosts[0].featuredImage?.node?.sourceUrl || "/images/banners/bg-categories.webp"}
                postImageAlt={heroPosts[0].featured_media?.alt_text || "Imagem do post"}
                postLink={heroPosts[0].slug}
                postCategory={heroPosts[0].categories.nodes[0].name}
                postCategoryLink={heroPosts[0].categories.nodes[0].slug}
                postTitle={heroPosts[0].title}
                blogContext={
                  heroPosts[0].categories.nodes[0].name.toLowerCase() === "artigos" ? "/artigos" : "/noticias"
                }
                customClasses="min-h-[340px] lg:min-h-[450px]"
                loading={true}
              />
            )}
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            {heroPosts.length > 0 && (
              <div className="flex flex-col gap-4 lg:h-[450px]">
                {heroPosts.slice(1).map((post, index) => (
                  <CardPostHero
                    key={index}
                    postImage={post.featuredImage?.node?.sourceUrl}
                    postImageAlt={post.featured_media?.alt_text || "Imagem do post"}
                    postLink={post.slug}
                    postCategory={post.categories.nodes[0].name}
                    postCategoryLink={post.categories.nodes[0].slug}
                    postTitle={post.title}
                    customClasses="h-[48.5%]"
                    blogContext={post.categories.nodes[0].name.toLowerCase() === "artigos" ? "/artigos" : "/noticias"}
                    loading={index < 2 ? true : false}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="icones-navegacionais mb-20">
        <SliderNavigational categories={sliderCategoriasNoticias} title="Navegue por Categoria" isNoticias />
      </div>
      <div className="noticias-content flex flex-col lg:items-start lg:flex-row w-full ap-4 xl:gap-24 my-5">
        <div className="content-cards w-full lg:w-9/12 mb-7">
          <h2 className="font-bold text-fb_blue_main text-3xl lg:text-4xl mb-4">Últimos Posts</h2>
          <div className="grid-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {posts.length === 0 ? (
              <p>Nenhum post encontrado para esta categoria.</p>
            ) : (
              posts.map((post, index) => (
                <CardBlog
                  key={index}
                  blogContext={post.isArtigos ? "/artigos" : "/noticias"}
                  postImage={post.featured_media}
                  postImageAlt={post.featured_media?.alt_text || "Imagem do post"}
                  postLink={post.slug}
                  postTitle={<span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
                  postDescription={{ __html: post.content.rendered }}
                  postDate={post.date}
                  postAuthor={post.author_post_details.name}
                  postAuthorLink={`${post.author_post_details.slug}`}
                />
              ))
            )}
          </div>
          <Pagination slug={"/noticias"} currentPage={page} totalPages={totalPages} isFirstPath />
        </div>
        <div className="sidebar w-full lg:w-1/3">
          <SidebarNoticias />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
