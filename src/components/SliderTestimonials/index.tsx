"use client";
import { PlayIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [player, setPlayer] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const thumbnailUrl = `/images/quem-somos/foto_de_cima_da_fabrica.webp`;

  const handleVideoOpen = (videoUrl: string) => {
    if (selectedVideo === videoUrl) {
      handleCloseModal();
    } else {
      setSelectedVideo(videoUrl);
      setIsPlaying(false);
    }
  };

  const handlePlayerReady = (event: YouTubeEvent) => {
    setPlayer(event.target);
  };

  const handlePlayerStateChange = (event: YouTubeEvent) => {
    const playerState = event.data;
    if (playerState === YouTube.PlayerState.PAUSED) {
      setIsPlaying(false);
    } else if (playerState === YouTube.PlayerState.PLAYING) {
      setIsPlaying(true);
    }
  };

  const handleCloseModal = () => {
    if (player && selectedVideo) {
      player.pauseVideo();
    }
    setIsPlaying(false);
    setSelectedVideo(null);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      const timeout = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 500); // Tempo suficiente para evitar conflito com o clique inicial
  
      document.body.style.overflow = 'hidden';
  
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedVideo, handleClickOutside]);

  const opts: YouTubeProps['opts'] = {
    height: '515',
    width: '100%',
    playerVars: {
      autoplay: 1, // Força o autoplay ao abrir o modal,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      origin: 'http://localhost:3001'
    },
  };

  return (
    <div className="fb_container ">
      {Array.isArray(testimonial) ? (
        <div>
          <Slider {...settings} ref={sliderRef}>
            {testimonial.map((item, index) => (
              <div key={index} className={`w-1/2 ${item.videoUrl ? "cursor-pointer" : ""}`} onClick={() => handleVideoOpen(item.videoUrl)}>
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
        <div className="fixed inset-0 pt-14 bottom-0 z-50 flex items-center justify-center bg-black/80">
          <div 
            ref={modalRef}
            className="relative w-full max-w-4xl mx-4"
          >            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative">
                {isPlaying ? (
                  <YouTube
                    videoId={selectedVideo}
                    opts={opts}
                    onReady={handlePlayerReady}
                    onStateChange={handlePlayerStateChange}
                    className="w-full rounded-lg"
                    iframeClassName="w-full h-[400px] rounded-lg"
                  />
                ) : (
                  <div 
                    className="relative h-[400px] cursor-pointer" 
                    onClick={() => setIsPlaying(true)}
                  >
                    <Image
                      src={thumbnailUrl}
                      alt="Thumbnail do vídeo"
                      className="w-full h-full rounded-lg object-cover"
                      width={1000}
                      height={515}
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg transition-opacity hover:bg-black/60">
                      <button 
                        className="transform transition-transform hover:scale-110"
                        aria-label="Reproduzir vídeo"
                      >
                        <div className="bg-white rounded-full p-2">
                          <PlayIcon className="text-fb_blue" size={48} />
                        </div>
                      </button>
                    </div>
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
