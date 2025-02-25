"use client";
import Image, { StaticImageData } from "next/image";
import { Suspense, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";
import { PlayIcon, XIcon } from "lucide-react";
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

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
    console.log(isPlaying);
    if (selectedVideo === videoUrl) {
      setSelectedVideo(null);
      setIsPlaying(false);
      // how to control the iframe?
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
    if (player) {
      player.pauseVideo();
    }
    setIsPlaying(false);
    setSelectedVideo(null);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  const opts: YouTubeProps['opts'] = {
    height: '515',
    width: '100%',
    playerVars: {
      autoplay: isPlaying ? 1 : 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  const memoizedTestimonials = useMemo(() => testimonial, [testimonial]);

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
        <div 
          className="fixed inset-0 pt-14 bottom-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleClickOutside}
        >
          <div 
            ref={modalRef}
            className="relative w-full max-w-4xl mx-4"
          >
            <button 
              onClick={handleCloseModal}
              className="absolute right-0 text-white hover:text-fb_green transition-colors"
              aria-label="Fechar vídeo"
            >
              <XIcon size={24} />
            </button>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative">
                {isPlaying ? (
                  <YouTube
                    videoId={selectedVideo} // Extract video ID from URL
                    opts={opts}
                    onReady={handlePlayerReady}
                    onStateChange={handlePlayerStateChange}
                    className="w-full rounded-lg"
                    iframeClassName="w-full h-[515px] rounded-lg"
                  />
                ) : (
                  <div 
                    className="relative h-[515px] cursor-pointer" 
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
                        <PlayIcon className="text-fb_green" size={64} />
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
