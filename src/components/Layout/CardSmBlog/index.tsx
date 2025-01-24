import Image from "next/image";
import Link from "next/link";

interface CardBlogProps {
  blogContext?: string;
  postImage?: string;
  postImageAlt?: string;
  postLink?: string;
  postTitle?: string;
}

function CardSmBlog(CardBlogProps: CardBlogProps) {
  return (
    <div className="card-sm-post flex flex-row flex-nowrap gap-3">
      <div className="image-sm">
        <Link className="w-full" href={CardBlogProps.postLink || ""}>
          <Image
            className="min-w-[154px] h-[110px] object-cover rounded-2xl"
            src={CardBlogProps.postImage || ""}
            alt={CardBlogProps.postImageAlt || ""}
            width={154}
            height={110}
          />
        </Link>
      </div>
      <div className="content-sm">
        <Link
          className="text-fb_gray_bread hover:text-fb_blue duration-300 font-semibold"
          href={(CardBlogProps.blogContext || "") + (CardBlogProps.postLink || "")}
        >
          <p>{CardBlogProps.postTitle || ""}</p>
        </Link>
      </div>
    </div>
  );
}

export default CardSmBlog;
