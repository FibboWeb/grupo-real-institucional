"use client";
import Image, { StaticImageData } from "next/image";
import "./index.css";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

type Member = {
  img: StaticImageData;
  name: string;
  role: string;
};

type BoardCardsProps = {
  title?: string;
  members: Member[];
};

const settings = {
  orientation: "horizontal",
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  useTransform: true,
  autoplay: true,
  autoplaySpeed: 4500,
  dots: true,
  responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
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
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function BoardCards({ title, members }: BoardCardsProps) {
  return (
    <section className="flex justify-center mb-3">
      <div className="fb_container flex flex-col gap-10 p-5">
        <div>
          <h3 className="text-black font-semibold text-3xl">Diretoria</h3>
        </div>
        <div>
          <Slider {...settings}>
            {members.map((member, index) => (
              <li className="rounded-2xl overflow-hidden sm:max-w-[90%] max-w-[95%] h-[450px]" key={index}>
                <a href="" className="h-full">
                  <div className="relative h-full rounded-2xl">
                    <div className="absolute h-full w-full flex items-center justify-center rounded-2xl">
                      <Image src={member.img} alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="relative py-5 px-2 flex flex-col justify-end items-center gap-2 h-full bg-content-board rounded-2xl">
                      <h4 className="text-2xl text-white font-bold">{member.name}</h4>
                      <p className="text-white text-lg font-normal">{member.role}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
