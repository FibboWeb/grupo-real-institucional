import Image from "next/image";
import Link from "next/link";

interface CardBlogProps {
  postImage?: string;
  postImageAlt?: string;
  postLink?: string;
  postTitle?: string;
  postDescription?: { __html: string};
  postDate?: string;
  postMonthDate?: string;
  postAuthor?: string;
  postAuthorLink?: string;
}


function CardBlog({ 
    postImage,
    postImageAlt,
    postLink,
    postTitle,
    postDescription,
    postDate,
    postAuthor,
    postAuthorLink 
}: CardBlogProps) {


  const truncateDescription = (description: string, limit: number = 100) => {
    const plainText = description.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanedText = plainText.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    if (cleanedText.length > limit) {
      const truncatedText = cleanedText.substring(0, limit);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.substring(0, lastSpaceIndex) + "...";
    }
  
    return cleanedText;
  };
  
  const formatDate = (date: string, type: "day" | "month") => {
    const dateObj = new Date(date);
    const currentDate = new Date();
    if (type === "day") {
      return dateObj.getDate();
    } else if (type === "month") {
      return dateObj.toLocaleString("default", { month: "short" }).replace(/\.$/, "");
    }
  };
  

  return (
    <div className="post-card relative w-80 rounded-2xl shadow-custom_shadow transform hover:scale-[1.02] duration-300 bg-white">
      <Link href={postLink ? postLink : "#" }>
        <Image
          src={postImage ? postImage : "/images/capa-post-test.webp"}
          alt={postImageAlt ? postImageAlt : "Post featured"}
          width={320}
          height={279}
          className="w-full h-56 object-cover rounded-t-2xl"
        />
        <div className="date-container absolute top-[39.2%] right-[6.5%] bg-white flex flex-col justify-end shadow-custom_shadow w-16 h-16 rounded-lg text-sm font-extrabold uppercase text-center">
            <p className="post-date text-xl mb-[5px]">{ postDate ? formatDate(postDate, "day") : "" }</p>
            <p className="post-date-month bg-fb_blue text-white rounded-b-lg">{ postDate ? formatDate(postDate, "month") : "" }</p>
        </div>
      </Link>
      <div className="card-post-content p-6">
        <Link href={postAuthorLink ? postAuthorLink : "#"} className="author-info flex gap-2 text-sm font-medium text-fb_gray">
            <Image
                src={"/author-icon.svg"}
                alt={"Post author link"}
                width={16}
                height={16}
                className="w-5 h-5"
            />
            <p className="author-name">{postAuthor}</p>
        </Link>
        <Link href={postLink ? postLink : "#"}>
            <p className="text-lg leading-5 font-bold mt-4 text-fb_blue_main line-clamp-3 min-h-[60px]">{postTitle}</p>
            <div className="post-description mt-2 text-[15px] min-h-16 leading-5 text-fb_gray">
              {postDescription && (
                <p>{truncateDescription(postDescription.__html, 100)}</p>
              )}
            </div>
        </Link>
      </div>
    </div>
  );
}

export default CardBlog;
