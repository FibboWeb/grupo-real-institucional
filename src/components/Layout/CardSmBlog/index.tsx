import Image from "next/image";
import Link from "next/link";

interface CardBlogProps {
  blogContext?: string;
  postImage?: string;
  postImageAlt?: string;
  postLink?: string;
  postTitle?: string;
}

function buildPostHref(blogContext?: string, postLink?: string) {
  if (!postLink) return "#";

  // Já veio como URL absoluta ou caminho completo
  if (postLink.startsWith("http") || postLink.startsWith("/")) {
    return postLink;
  }

  const base = (blogContext || "/noticias").replace(/\/$/, "");
  return `${base}/${postLink}`;
}

function CardSmBlog({
  blogContext,
  postImage,
  postImageAlt,
  postLink,
  postTitle,
}: CardBlogProps) {
  const href = buildPostHref(blogContext, postLink);

  return (
    <div className="card-sm-post flex flex-row flex-nowrap gap-3">
      <div className="image-sm">
        <Link className="w-full" href={href}>
          <Image
            className="min-w-[154px] h-[110px] object-cover rounded-2xl"
            src={postImage || "/images/capa-post-test.webp"}
            alt={postImageAlt || postTitle || "Imagem do post"}
            width={154}
            height={110}
          />
        </Link>
      </div>
      <div className="content-sm">
        <Link
          className="text-fb_gray_bread hover:text-fb_blue duration-300 font-semibold"
          href={href}
        >
          <p className="line-clamp-4 min-h-[70px]">{postTitle || ""}</p>
        </Link>
      </div>
    </div>
  );
}

export default CardSmBlog;
