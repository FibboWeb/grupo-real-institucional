import { getNoticiasPostsMostViewed } from "@/lib/getSidebarContent";
import CardSmBlog from "../Layout/CardSmBlog";

export async function PostsMosView() {
  const posts = await getNoticiasPostsMostViewed();
  return (
    <div>
      <p className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-5">Mais Lidos</p>
      <ul>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <li key={index + 3} className="mb-8">
              <CardSmBlog
                blogContext={post.categories.nodes[0]?.name !== '' ? post.categories.nodes[0]?.name == "Artigos" ? "/artigos/" : "/noticias/" : "/noticias/"}
                postImage={post.featuredImage?.node?.sourceUrl}
                postImageAlt={post.featuredImage?.node?.altText}
                postLink={`${post.slug}`}
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
