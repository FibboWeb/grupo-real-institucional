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

const settings = {
  infinite: true,
  speed: 800,
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
            <a href={post.link} key={index} className="max-w-[95%]">
              <div className="flex flex-col gap-7 border border-[#F7F6EE] border-t-[5px] border-t-fb_green rounded-2xl bg-[#F7F6EE] py-6 px-5 hover:border hover:border-t-[5px] hover:border-fb_green">
                <div>
                  {post.icon ? (
                    <div>
                      <Image src={post.icon} alt="" className="bg-fb_green p-4 rounded-full" width={80} />
                    </div>
                  ) : (
                    <div>
                      <Image src={post.img} alt="" className="rounded-lg w-full" />
                    </div>
                  )}
                  <div className="pt-4">
                    <h3 className="text-[#373737] font-bold text-[28px]">{post.title}</h3>
                    <div className={`h-1 w-20 bg-fb_green mt-4 mb-4`}></div>
                    <p
                      className={`text-[#666] font-medium text-lg leading-[27px] ${clampPostContent ? "line-clamp-5" : ""} overflow-hidden`}
                    >
                      {post.content}
                    </p>
                  </div>
                </div>
                {post.icon && (
                  <div>
                    <Image src={post.img} alt="" className="rounded-lg w-full" />
                  </div>
                )}
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
}
