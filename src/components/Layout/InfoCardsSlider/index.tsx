"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function InfoCardsSlider({ children }: { children: React.ReactNode }) {
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
          slidesToShow: 3.5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.75,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default InfoCardsSlider;
