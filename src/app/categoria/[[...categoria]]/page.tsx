import Breadcrumb from "@/components/BreadCrumb";

<<<<<<<< HEAD:src/app/categoria/[[...categoria]]/page.tsx
export default async function CategoryPage({ params, searchParams }) {
  const page = parseInt(searchParams.page || "1");
  const postsPerPage = 6;
  const categorySlug = params.categoria[params.categoria.length - 1];
  const category = await fetchCategoryId(categorySlug);
  const categoryId = category.categoryId;
  const isArtigos = category.categoryName === "Artigos" ? true : false;

  if (!categorySlug) {
    return notFound();
  }
  const { posts, totalPages } = await fetchPosts(categoryId, page, postsPerPage);
========
export default function PageCategory() {
>>>>>>>> 3f21c44c93960ff1455cc52e2b93d8e223837622:src/app/noticias/categoria/[[...categoria]]/page.tsx
  return (
    <div>
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        excludePaths={["categoria"]}
        itemName={category.categoryName}
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
        capitalizeLinks
      />
<<<<<<<< HEAD:src/app/categoria/[[...categoria]]/page.tsx
      <div
        className={`hero-category bg-fb_category_image bg-no-repeat bg-cover bg-center h-56 xl:h-60 rounded-2xl mb-12`}
      >
        <div className={`w-full h-full bg-black bg-opacity-40 flex justify-center items-center rounded-2xl`}>
          <h1 className="font-bold text-4xl lg:text-5xl text-white">{category.categoryName}</h1>
        </div>
      </div>
      <div className="category-content flex flex-col lg:items-start lg:flex-row w-full gap-4 xl:gap-24 mb-5">
        <div className="content-cards w-full lg:w-9/12 mb-7">
          <h2 className="font-bold text-fb_blue_main text-3xl lg:text-4xl mb-4">Últimos Posts</h2>
          <div className="grid-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {posts.length === 0 ? (
              <p>Nenhum post encontrado para esta categoria.</p>
            ) : (
              posts.map((post, index) => (
                <CardBlog
                  key={index}
                  blogContext={isArtigos ? "/artigos" : "/noticias"}
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
          <Pagination blogContext={"/categoria"} currentPage={page} totalPages={totalPages} slug={categorySlug} />
        </div>
        <div className="sidebar w-full lg:w-1/3">
          <SidebarNoticias />
        </div>
      </div>
      <Newsletter />
========
      <h1>Categoria</h1>
>>>>>>>> 3f21c44c93960ff1455cc52e2b93d8e223837622:src/app/noticias/categoria/[[...categoria]]/page.tsx
    </div>
  );
}
