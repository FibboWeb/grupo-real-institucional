/**
 * @description Componente que renderiza um slider com posts do CPT "Na Mídia"
 * @param {NaMidiaSliderProps} props
 * @prop {Post[]} fetchedPosts - Array de posts
 * @returns {JSX.Element}
 * @example
 *  <NaMidiaSlider fetchedPosts={fetchedPosts} />
 */
/**
 * @typedef {Object} NaMidiaSliderProps
 * @property {Post[]} fetchedPosts - Array de posts
 * @typedef {Object} Post
 * @property {string} id - ID do post
 * @property {string} title - Título do post
 * @property {string} content - Conteúdo do post
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
import CardBlog from "../CardBlog";
import "./naMidiaSlider.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface NaMidiaSliderProps {
  fetchedPosts: Post[];
  sectionTitle?: string;
  textoApoio?: any;
}

function NaMidiaSlider({ fetchedPosts, sectionTitle = "Grupo Real na Mídia", textoApoio = {} }: NaMidiaSliderProps) {
  const settings = {
    slidesToShow: 5.7,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 2300,
        settings: {
          slidesToShow: 5.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3.75,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 3.55,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2.13,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-center text-fb_blue_main text-4xl font-bold py-2">
        {sectionTitle}
      </h2>
      {textoApoio && (
        <div className="text-center text-fb_blue_main">
          { textoApoio.includes("<") ? (
            <p dangerouslySetInnerHTML={{ __html: textoApoio }} />
          ) : (
            <p>{textoApoio}</p>
          )}
        </div>
      )}
      <div className="na-midia-slider" style={{ width: "100%" }}>
        <Slider {...settings}>
          {fetchedPosts &&
            fetchedPosts.length > 0 &&
            fetchedPosts.map((post: Post) => (
              <CardBlog
                key={post.id || Math.random().toString()}
                blogContext="/na-midia"
                postImage={post.featuredImage?.node.sourceUrl}
                postImageAlt={post.featuredImage?.node.altText}
                postLink={post.slug}
                postTitle={post.title}
                postDescription={{ __html: post.content }}
                postDate={post.date}
                postAuthor={post.author?.node.name}
                postAuthorLink={post.author?.node.slug}
                isSlider
              />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default NaMidiaSlider;

