"use client";
import dynamic from "next/dynamic";

// Importando Slider dinamicamente para garantir que seja renderizado apenas no cliente
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image, { StaticImageData } from "next/image";

type Item = {
  icon: StaticImageData;
  content: string;
};

interface InifiniteCarouselProps {
  items: Item[];
  slidesToShowProp?: number;
  speedSlidesProp?: number;
  color?: "fb_green" | "fb_blue";
}

const InifiniteCarousel = ({
  items,
  slidesToShowProp,
  speedSlidesProp = 4500,
  color = "fb_green",
}: InifiniteCarouselProps) => {
  let bgColor = color === "fb_green" ? "bg-fb_green" : "bg-fb_blue";
  let slidesToShowConfig;

  if (!slidesToShowProp) {
    slidesToShowConfig = 2;

    if (items.length > 2) {
      slidesToShowConfig = Math.min(3, items.length);
    }

    if (items.length > 6) {
      slidesToShowConfig = Math.min(4, items.length);
    }
  } else {
    slidesToShowConfig = slidesToShowProp;
  }

  const settings = {
    infinite: true,
    speed: speedSlidesProp,
    slidesToShow: slidesToShowConfig,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    touchMove: false,
    focusOnSelect: false,
    swipe: false,
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
          slidesToShow: slidesToShowConfig,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`${bgColor} py-5 w-full overflow-hidden h-[76px]`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row gap-4 items-center">
              {item.icon && (
                <div>
                  <Image src={item.icon} alt="" width={24} />
                </div>
              )}
              <div>
                <p className="text-2xl text-white font-bold">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InifiniteCarousel;
