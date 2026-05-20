"use client";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";

// Importando Slider dinamicamente para garantir que seja renderizado apenas no cliente
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

type Post = {
  icon?: StaticImageData;
  title: string;
  content: string;
  img: StaticImageData;
  link?: string;
};

interface PostsByCategoryProps {
  title: string;
  subtitle: string;
  subtitleIcon: StaticImageData;
  posts: Post[];
  centerTitle?: boolean;
  clampPostContent?: boolean;
}

/** Impede o Slick de capturar o gesto quando o usuário interage com texto (seleção/cópia). */
function SelectableTextZone({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const stopCarouselDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={className}
      onMouseDown={stopCarouselDrag}
      onTouchStart={stopCarouselDrag}
    >
      {children}
    </div>
  );
}

function PostContent({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const paragraphs = content.split(/\n+/).filter((p) => p.trim());

  const selectClass = "select-text";

  if (paragraphs.length <= 1) {
    return <p className={`${selectClass} ${className ?? ""}`}>{paragraphs[0] ?? content}</p>;
  }

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`${selectClass} ${index > 0 ? "mt-4" : ""}`}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function PostCard({
  post,
  clampPostContent,
}: {
  post: Post;
  clampPostContent: boolean;
}) {
  const contentClass = `text-[#666] font-medium text-lg leading-[27px] ${clampPostContent ? "line-clamp-5" : ""} overflow-hidden`;

  const card = (
    <div className="flex flex-col gap-7 border border-[#F7F6EE] border-t-[5px] border-t-fb_green rounded-2xl bg-[#F7F6EE] py-6 px-5 hover:border hover:border-t-[5px] hover:border-fb_green select-text">
      <div>
        {post.icon ? (
          <div>
            <Image src={post.icon} alt="" className="bg-fb_green p-4 rounded-full" width={80} />
          </div>
        ) : (
          <PostFeaturedImage src={post.img} alt="" />
        )}
        <SelectableTextZone className="pt-4">
          <h3 className="select-text text-[#373737] font-bold text-[28px]">{post.title}</h3>
          <div className="h-1 w-20 bg-fb_green mt-4 mb-4" />
          <PostContent content={post.content} className={contentClass} />
        </SelectableTextZone>
      </div>
      {post.icon && <PostFeaturedImage src={post.img} alt="" />}
    </div>
  );

  if (post.link) {
    return (
      <a href={post.link} className="max-w-[95%] block h-full">
        {card}
      </a>
    );
  }

  return <div className="max-w-[95%] h-full">{card}</div>;
}

/** Caixa única para selos/logos — altura fixa + object-fit para não distorcer. */
function PostFeaturedImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-neutral-900/5 sm:h-[228px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) min(92vw, 400px), (max-width: 1024px) 42vw, 31vw"
        className="object-contain p-4 sm:p-5"
      />
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  draggable: true,
  touchMove: true,
  focusOnSelect: false,
  swipe: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function PostsByCategory({
  title,
  subtitle,
  subtitleIcon,
  posts,
  centerTitle = false,
  clampPostContent = true,
}: PostsByCategoryProps) {
  return (
    <section>
      <div className="fb_container flex gap-8 flex-col py-12">
        <div>
          <div className={`flex flex-row gap-2 ${centerTitle ? "justify-center" : "justify-start"}`}>
            <Image src={subtitleIcon} alt="" />
            <p className="text-xl text-fb_green font-bold">{subtitle}</p>
          </div>
          <div className={`flex flex-row gap-2 ${centerTitle ? "justify-center" : "justify-start"}`}>
            <h2 className="text-3xl text-[#373737] font-bold leading-[48px]">{title}</h2>
          </div>
        </div>

        <Slider {...settings}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} clampPostContent={clampPostContent} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
