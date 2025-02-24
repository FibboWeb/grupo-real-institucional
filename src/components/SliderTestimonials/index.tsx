"use client";
import Image, { StaticImageData } from "next/image";
import { Suspense, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";
import { PlayIcon } from "lucide-react";

type testimonialProps = {
  testimonial: string;
  name: string;
  empresa: string;
  avatar: string | StaticImageData;
  videoUrl: string; // Added videoUrl property
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
  autoplay: true,
  autoplaySpeed: 4500,
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
        slidesToShow: 1,
        slidesToScroll: 1,
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const thumbnailUrl = `/images/quem-somos/foto_de_cima_da_fabrica.webp`;

  const handleVideoOpen = (videoUrl: string) => {
    if (selectedVideo === videoUrl) {
      setSelectedVideo(null);
      setIsPlaying(false);
    } else {
      setSelectedVideo(videoUrl);
      setIsPlaying(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <div className="fb_container ">
      {Array.isArray(testimonial) ? (
        <div>
          <Slider {...settings} ref={sliderRef}>
            {testimonial.map((item, index) => (
              <div key={index} className="w-1/2 cursor-pointer" onClick={() => handleVideoOpen(item.videoUrl)}>
                <div className="flex flex-col justify-between h-[350px] lg:h-[280px] border border-[#CCCCCC] rounded-lg px-4 lg:px-5 pt-7 pb-10 group bg-custom-gradient duration-500 transition-colors">
                  <div className="w-full">
                    <p className="text-base text-[#666666] transition-colors group-hover:text-white duration-200 line-clamp-6">
                      {item.testimonial}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <p className="text-lg lg:text-2xl font-bold transition-colors group-hover:text-white duration-200">
                        {item.name}
                      </p>
                      <p className="text-sm lg:text-lg text-fb_blue transition-colors group-hover:text-white duration-200 break-words">
                        {item.empresa}
                      </p>
                    </div>
                    <div className="h-[100px] w-[100px] flex-shrink-0 rounded-full relative overflow-hidden">
                      <Suspense
                        fallback={<div className="w-full h-full bg-gray-700 animated-pulse rounded-full"></div>}
                      >
                        <Image
                          alt={`Foto do ${item.name}`}
                          src={item.avatar ? item.avatar : "/author-icon.svg"}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                        />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="fb_container flex gap-5">
          <div className="w-1/2 group-[card-hover]:">
            <div className="flex group-hover:cursor-grabbing flex-col gap-9 border border-[#CCCCCC] rounded-lg px-14 pt-14 pb-8" onClick={() => handleVideoOpen(testimonial.videoUrl)}>
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
      {selectedVideo && (
        <div className="relative inset-0 flex items-center justify-center mt-10">
          <div className="relative w-full max-w-4xl">
            <div className="absolute top-0 right-0 p-2">
              <button className="text-white" onClick={handleCloseModal} aria-label="Close video modal">X</button>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('/images/quem-somos/foto_de_cima_da_fabrica.webp')` }}>
                {isPlaying ? (
                  <iframe
                    ref={iframeRef}
                    className="w-full h-[515px] rounded-lg"
                    src={`${selectedVideo}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="h-[515px] relative cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <Image
                      src={thumbnailUrl}
                      alt="Thumbnail do vídeo"
                      className="w-full rounded-lg object-cover"
                      width={1000}
                      height={1000}
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg" aria-label="Play video">
                      <PlayIcon className="text-fb_green font-bold text-4xl" size={48} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
