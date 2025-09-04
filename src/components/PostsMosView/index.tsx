import { getNoticiasPostsMostViewed } from "@/lib/getSidebarContent";
import CardSmBlog from "../Layout/CardSmBlog";
import { GetPostMostViewedAPI } from "@/graphql/posts";

export async function PostsMosView() {
  const postsAPI = await GetPostMostViewedAPI();

  return (
    <div>
      <p className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-5">Mais Lidos</p>
      <ul>
        {postsAPI.length > 0 ? (
          postsAPI.map((post, index) => (
            <li key={index + 3} className="mb-8">
              <CardSmBlog
                blogContext={post.categories.nodes[0]?.name !== '' ? post.categories.nodes[0]?.name.toLowerCase() === "artigos" ? "/artigos/" : "/noticias/" : "/noticias/"}
                postImage={post.featuredImage?.node?.sourceUrl}
                postImageAlt={post.featuredImage?.node?.altText}
                postLink={post.categories.nodes[0]?.name.toLowerCase() === "artigos" ? `/artigos/${post.slug}` : `/noticias/${post.slug}`}
                postTitle={post.title}
              />
            </li>
          ))
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </ul>
    </div>
  );
}

export default PostsMosView;
