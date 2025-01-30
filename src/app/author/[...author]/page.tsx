import Breadcrumb from "@/components/BreadCrumb";
import Newsletter from "@/components/Layout/Newsletter";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";
import CardBlog from "@/components/Layout/CardBlogAPI";
import AuthorBox from "@/components/Layout/AuthorBox";
import { fetchPosts, fetchAuthorData } from "@/lib/getAuthorPosts";
import Pagination from "@/components/Pagination";
import { notFound } from "next/navigation";

export default async function AuthorPage({ params, searchParams }) {
  const page = parseInt(searchParams.page || "1");
  const postsPerPage = 6;
  const authorSlug = params.author[0];
  const author = await fetchAuthorData(authorSlug);
  const authorName = author.name;
  const authorBio = author.description || "Biografia não disponível";
  const authorId = author.id;

  if (!authorSlug) {
    return notFound();
  }

  const { posts, totalPages } = await fetchPosts(authorId, page, postsPerPage);
  return (
    <div className="fb_container px-2 mb-12 mt-24">
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        excludePaths={["author"]}
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
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
              <p>Nenhum post encontrado para este autor.</p>
            ) : (
              posts.map((post, index) => (
                <CardBlog
                  key={index}
                  blogContext={post.isArtigos ? "/artigos" : "/noticias"}
                  postImage={post.featured_media}
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
          </div>
          <Pagination blogContext={"/author"} currentPage={page} totalPages={totalPages} slug={authorSlug} />
        </div>
        <div className="sidebar w-full lg:w-1/3">
          <SidebarNoticias />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
