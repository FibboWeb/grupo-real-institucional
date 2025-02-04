/**
 * @description Componente que renderiza um slider com as últimas postagens do blog
 * @param {LastPostsProps} props
 * @prop {Post[]} fetchedLastPosts - Array de posts
 * @returns {JSX.Element}
 * @example
 *  <LastPosts fetchedLastPosts={fetchedLastPosts} />
 */
/**
 * @typedef {Object} LastPostsProps
 * @property {Post[]} fetchedLastPosts - Array de posts
 * @typedef {Object} Post
 * @property {string} id - ID do post
 * @property {string} title - T tulo do post
 * @property {string} content - Conte do do post
 * @property {string} date - Data do post
 * @property {string} slug - Slug do post
 * @property {string} featuredImage.node.sourceUrl - URL da imagem do post
 * @property {string} featuredImage.node.altText - Texto alternativo da imagem do post
 * @property {string} author.node.name - Nome do autor do post
 * @property {string} author.node.slug - Slug do autor do post
 */

"use client";
import type { Post } from "@/types/post";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import CardBlog from "../CardBlog";
import "./lastPost.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
interface LastPostsProps {
  fetchedLastPosts: Post[];
}

function LastPostsEventos({ fetchedLastPosts }: LastPostsProps) {
  const settings = {
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 2.45,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-10">
      <div className="py-2">
        <div className="flex flex-col justify-between w-full lg:w-80 rounded-2xl bg-fb_gradient text-white min-h-80 lg:min-h-[440px] p-12">
          <div className="content">
            <h2 className="text-3xl font-bold">Eventos</h2>
            <p className="pt-6">Fique por dentro de tudo o que acontece nos eventos do Grupo Real...</p>
          </div>
          <BtnCallToAction ctaLink="/categoria/eventos" color="fb_blue_button" content="IR PARA EVENTOS" />
        </div>
      </div>
      <div className="last-post-slider" style={{ width: "75%" }}>
        <Slider {...settings}>
          {fetchedLastPosts &&
            fetchedLastPosts.map((post: Post) => (
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
                isSlider
              />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default LastPostsEventos;
