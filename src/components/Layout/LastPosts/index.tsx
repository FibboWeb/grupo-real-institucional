"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CardBlog from "../CardBlog";
import type { Post } from "@/types/post";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
interface LastPostsProps {
  fetchedLastPosts: Post[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <button className="right-7" onClick={onClick} style={style}>
        <ArrowRight color='black'/>
      </button>
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <button onClick={onClick} style={style}>
        <ArrowLeft color='black'/>
      </button>
    </div>
  );
}

function LastPosts( { fetchedLastPosts } : LastPostsProps) {

  const settings = {
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="flex flex-row gap-6">
      <div className="p-2">
        <div className="flex flex-col justify-between w-80 rounded-2xl bg-fb_gradient text-white h-full p-12">
          <div className="content">
            <h2 className="text-3xl font-bold">Notícias</h2>
            <p className="pt-6">
              Fique por dentro de tudo o que acontece no mundo da pecuária. Notícias, eventos, dicas e muito mais...
            </p>
          </div>
          <Link href="/blog">IR PARA O BLOG</Link>
        </div>
      </div>
      <div className="min-h-[400px] overflow-hidden" style={{ width: "75%" }}>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
}

export default LastPosts;
