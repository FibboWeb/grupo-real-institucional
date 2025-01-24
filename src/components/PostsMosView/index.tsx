import { getNoticiasPostsMostViewed } from "@/lib/getSidebarContent";

export async function PostsMosView() {
  const posts = await getNoticiasPostsMostViewed();

  return (
    <div>
      <h2 className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-3">Posts Mais Visualizados</h2>
      <ul>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <li key={index + 3} className="mb-2">
              <a href={`/post/${post.slug}`} target="_blank" rel="noopener noreferrer">
                {post.title} - {post.viewCount} visualizações
              </a>
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
