import Link from "next/link";
import Image from "next/image";
import { CardBlogProps } from "@/types/post";

function CardPostHero({
  postImage,
  postImageAlt,
  postLink,
  postTitle,
  postCategory,
  postCategoryLink,
  customClasses,
  blogContext,
  loading = false,
}: CardBlogProps) {
  return (
    <div className={`relative rounded-2xl ${!customClasses ? "h-full" : customClasses}`}>
      <Image
        className={`h-full w-full rounded-2xl object-cover ${!customClasses ? "h-full" : customClasses}`}
        src={postImage}
        alt={postImageAlt}
        width={200}
        height={200}
        loading={loading ? "eager" : "lazy"}
      />
      <Link
        href={blogContext ? `${blogContext}/${postLink}` : `/noticias/${postLink}`}
        className="flex flex-col justify-end absolute bottom-0 left-0 right-0 h-full px-9 py-6 rounded-2xl bg-fb_gradient_posts"
      >
        <div className="badge">
          <p
            className="text-white px-4 py-0 bg-fb_blue_button
            rounded-full text-sm w-fit"
            // href={`/categoria/${postCategoryLink || "#"}`}
          >
            {postCategory}
          </p>
        </div>
        <p className="text-lg font-bold text-white mt-2">{postTitle}</p>
      </Link>
    </div>
  );
}

export default CardPostHero;
