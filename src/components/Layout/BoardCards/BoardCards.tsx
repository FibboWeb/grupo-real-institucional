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
  // autoplay: true,
  // autoplaySpeed: 4500,
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
      breakpoint: 1024,
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
        <div className="w-full">
          <Slider {...settings}>
            {members.map((member, index) => (
              <li className="flip-card overflow-hidden sm:max-w-[90%] max-w-[95%] h-[450px]" key={index}>
                <div className="flip-card-inner w-full">
                  {/* Frente do Card */}
                  <div className="absolute h-full w-full flex items-center justify-center rounded-2xl">
                    <Image src={member.img} alt={member.name} className="object-cover w-full h-full" />
                  </div>
              
                  <div>
                    {/* Elemento para telas maiores que 768px (md:flex) */}
                    <div className="hidden md:flex md:flex-col card-overlay bg-content-board text-white">
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p className="text-lg font-normal">{member.role}</p>
                    </div>

                    {/* Elemento para telas menores que 768px (md:hidden) */}
                    <div className="md:hidden h-full absolute flex flex-col justify-end text-white bg-content-board px-2 w-full">
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p className="text-lg font-normal">{member.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
