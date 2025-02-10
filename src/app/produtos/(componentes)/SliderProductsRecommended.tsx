"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";

export default function SliderProductsRecommended({ products, currentProductSlug }) {
  const settings = {
    orientation: "horizontal",
    startAt: 0,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    useTransform: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
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

  // Filtra os produtos para remover o produto atual
  const filteredProducts = products.filter((item) => item.slug !== currentProductSlug);

  return (
    <Slider {...settings}>
      {filteredProducts.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Link
            href={`/produtos/${item.slug}`}
            title={`Ir para a página do produto ${item.title.rendered}`}
          >
            <Image
              src={item._embedded["wp:featuredmedia"][0]?.source_url}
              width={284}
              height={284}
              alt={
                item._embedded["wp:featuredmedia"][0]?.alt
                  ? item._embedded["wp:featuredmedia"][0]?.alt
                  : "Imagem do produto"
              }
              className="w-full h-full object-cover rounded-lg bg-[#E5E7E9]"
            />
          </Link>
          <Link
            href={`/produtos/${item.slug}`}
            title={`Ir para a página do produto ${item.title.rendered}`}
            className="hover:text-fb_blue duration-300"
          >
            <h2 className="text-2xl font-bold">{item.title.rendered}</h2>
          </Link>
          {item.content && item.content.rendered !== "" && (
            <div className="line-clamp-6" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
          )}
        </div>
      ))}
    </Slider>
  );
}
