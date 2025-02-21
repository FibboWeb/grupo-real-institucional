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
  description?: string;
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
      breakpoint: 830,
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
              <li 
                className="flip-card overflow-hidden sm:max-w-[90%] max-w-[95%] h-[450px]" 
                key={index}
                tabIndex={0}
                role="button"
                aria-label={`Ver mais informações sobre ${member.name}`}
              >
                <div className="flip-card-inner w-full h-full">
                  {/* Frente do Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fb_dark-blue to-fb_light-blue rounded-lg z-20"></div>
                  <div className="flip-card-front">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      className="object-cover w-full h-full rounded-2xl"
                      priority
                    />
                    {/* Overlay com nome e cargo */}
                    <div className="absolute z-50 bottom-0 left-0 right-0 p-4 text-white rounded-b-2xl">
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p className="text-lg font-normal">{member.role}</p>
                    </div>
                  </div>

                  {/* Verso do Card */}
                  <div className="flip-card-back text-white bg-fb_blue_main from-fb_dark-blue to-fb_light-blue">
                    {/* <h4 className="text-2xl font-bold mb-4">{member.name}</h4>
                    <p className="text-lg font-normal mb-2">{member.role}</p> */}
                    <p className="text-base">
                      {member.description}
                    </p>
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
