import { getLastPosts } from "@/lib/getLastPosts";
import CardBlog from "../CardBlog";

interface Post {
  id: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug: string;
  title: string;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
      slug: string;
    };
  };
}

const queriedLastPosts = await getLastPosts();
const fetchedLastPosts = queriedLastPosts.props.nodes;

function LastPosts() {
  return (
    <div className="fb_container">
      {fetchedLastPosts.map((post: Post) => (
        <CardBlog
          key={post.id}
          postImage={post.featuredImage.node.sourceUrl}
          postImageAlt={post.featuredImage.node.altText}
          postLink={post.slug}
          postTitle={post.title}
          postDescription={{ __html: post.content }}
          postDate={post.date}
          postAuthor={post.author.node.name}
          postAuthorLink={post.author.node.slug}
        />
      ))}
    </div>
  );
}

export default LastPosts;
