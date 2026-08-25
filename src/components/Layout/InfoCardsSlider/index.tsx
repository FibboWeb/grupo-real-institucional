"use client";
import { Children, ReactNode, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const sliderSettings = {
  className: "info-cards-slider",
  dotsClass: "slick-dots info-cards-dots",
  customPaging: () => <span className="info-cards-dot" aria-hidden="true" />,
  speed: 450,
  slidesToShow: 6.25,
  slidesToScroll: 1,
  swipeToSlide: true,
  touchThreshold: 8,
  draggable: true,
  useTransform: true,
  autoplay: true,
  autoplaySpeed: 4500,
  pauseOnHover: true,
  dots: true,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: true,
      },
    },
    {
      breakpoint: 1660,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: true,
      },
    },
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
  ],
};

function CardsTrack({ children }: { children: ReactNode }) {
  return (
    <div className="info-cards-slider">
      <div className="info-cards-ssr-track">
        {Children.map(children, (child, index) => (
          <div key={index} className="info-cards-ssr-slide">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCardsSlider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <CardsTrack>{children}</CardsTrack>;
  }

  return <Slider {...sliderSettings}>{children}</Slider>;
}

export default InfoCardsSlider;
