"use client";
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";

type testimonialProps = {
  testimonial: string;
  name: string;
  empresa: string;
};

type testimonialCardProps = {
  testimonial: testimonialProps | testimonialProps[];
};

const settings = {
  orientation: "horizontal",
  speed: 500,
  spacing: 20,
  slidesToShow: 2,
  slidesToScroll: 1,
  useTransform: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 2,
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

export default function SliderTestimonials({ testimonial }: testimonialCardProps) {
  const sliderRef = useRef(null);

  return (
    <div className="fb_container ">
      {Array.isArray(testimonial) ? (
        <div className="gap-5">
          <Slider {...settings} ref={sliderRef}>
            {testimonial.map((item, index) => (
              <div key={index} className="w-1/2 cursor-grab">
                <div className="flex flex-col gap-9 border border-[#CCCCCC] rounded-lg px-14 pt-14 pb-8 transition-all duration-500 group bg-custom-gradient">
                  <div className="w-full">
                    <p className="text-base text-[#666666] group-hover:text-white">{item.testimonial}</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-3xl font-bold group-hover:text-white">{item.name}</p>
                      <p className="text-lg text-fb_blue group-hover:text-white">{item.empresa}</p>
                    </div>
                    <Image alt="" src={"/author-icon.svg"} width={75} height={75} className="rounded-full" />
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="fb_container flex gap-5">
          <div className="w-1/2 group-[card-hover]:">
            <div className="flex group-hover:cursor-grabbing flex-col gap-9 border border-[#CCCCCC] rounded-lg px-14 pt-14 pb-8">
              <div className="w-full">
                <p className="text-base text-[#666666]">{testimonial.testimonial}</p>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <p className="text-3xl font-bold">{testimonial.name}</p>
                  <p className="text-lg text-fb_blue">{testimonial.empresa}</p>
                </div>
                <Image alt="" src={"/author-icon.svg"} width={76} height={76} className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
