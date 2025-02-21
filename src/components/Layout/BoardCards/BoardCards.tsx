"use client";
import Image, { StaticImageData } from "next/image";
import "./index.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

type Member = {
  img: StaticImageData;
  name: string;
  role: string;
  description?: string;
  ctaLink?: string;
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
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const handleCardClick = (index: number) => {
    // Apenas executa em dispositivos móveis
    if (window.innerWidth < 1024 && index >= 1) {
      setFlippedCards(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ' && index >= 1) {
      e.preventDefault();
      handleCardClick(index);
    }
  };

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
                className={`flip-card overflow-hidden max-w-[100%] h-[630px] mx-auto ${
                  flippedCards[index] ? 'flipped' : ''
                }`}
                key={index}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                tabIndex={0}
                role={member.ctaLink ? "link" : "button"}
                aria-label={`Ver mais informações sobre ${member.name}`}
                aria-pressed={flippedCards[index]}
                {...(member.ctaLink && { href: member.ctaLink })}
              >
                { member.ctaLink ? (
                  <Link
                    href={member.ctaLink}
                    className="flip-card-inner w-full h-full"
                  >
                    <div className="flip-card-inner w-full h-full">
                      {/* Frente do Card */}
                      <div className="flip-card-front">
                        <div className="absolute inset-0 bg-gradient-to-t from-fb_dark-blue to-fb_light-blue rounded-lg z-20"></div>
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
                        <p className="text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: member.description || "" }} />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flip-card-inner w-full h-full">
                    {/* Frente do Card */}
                    <div className="flip-card-front">
                      <div className="absolute inset-0 bg-gradient-to-t from-fb_dark-blue to-fb_light-blue rounded-lg z-20"></div>
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
                      <p className="text-sm 2xl:text-base" dangerouslySetInnerHTML={{ __html: member.description || "" }} />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
