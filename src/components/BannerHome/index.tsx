"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface BannerItem {
  mobile: {
    url_imagem: string;
    link?: string;
    target?: string;
    title?: string;
    alt?: string;
  };
  desktop: {
    url_imagem: string;
    link?: string;
    target?: string;
    title?: string;
    alt?: string;
  };
}

interface SliderConfig {
  speed: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
}

interface BannerHomeProps {
  banners: BannerItem[];
  configs?: SliderConfig;
}

function BannerSlide({ banner, priority = false }: { banner: BannerItem; priority?: boolean }) {
  const content = (
    <>
      <div className="hidden md:block drop-shadow-sm">
        <Image
          src={banner.desktop.url_imagem}
          alt={banner.desktop.alt || "Banner promocional"}
          width={1920}
          height={600}
          priority={priority}
          className="w-full rounded-lg drop-shadow-sm"
          quality={90}
        />
      </div>
      <div className="block md:hidden drop-shadow-sm">
        <Image
          src={banner.mobile.url_imagem}
          alt={banner.mobile.alt || "Banner promocional"}
          width={780}
          height={880}
          priority={priority}
          className="w-full rounded-lg drop-shadow-sm"
          quality={90}
        />
      </div>
    </>
  );

  if (banner.mobile.link) {
    return (
      <Link
        href={banner.mobile.link}
        target={banner.mobile.target ?? "_blank"}
        title={banner.mobile.title ?? ""}
        className="block hover:opacity-95 transition-opacity duration-300"
      >
        {content}
      </Link>
    );
  }

  return <>{content}</>;
}

export default function BannerHome({ banners, configs }: BannerHomeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bannersFiltered = banners.filter(
    (banner) => banner.mobile.url_imagem !== "" && banner.desktop.url_imagem !== ""
  );

  if (!banners || banners.length === 0 || bannersFiltered.length === 0) {
    return null;
  }

  const defaultConfigs = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const sliderConfigs = configs || defaultConfigs;

  const settings = {
    dots: bannersFiltered.length > 1,
    infinite: bannersFiltered.length > 1,
    speed: sliderConfigs.speed,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: bannersFiltered.length > 1 ? sliderConfigs.autoplay : false,
    autoplaySpeed: sliderConfigs.autoplaySpeed,
    pauseOnHover: sliderConfigs.pauseOnHover,
    arrows: bannersFiltered.length > 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  if (bannersFiltered.length === 1) {
    return (
      <div className="relative w-full">
        <BannerSlide banner={bannersFiltered[0]} priority />
      </div>
    );
  }

  // SSR / pré-hidratação: todos os links no HTML para o Google
  if (!mounted) {
    return (
      <div className="relative w-full">
        <div className="overflow-hidden">
          {bannersFiltered.map((banner, index) => (
            <div key={index} className={index === 0 ? "relative" : "sr-only"}>
              <BannerSlide banner={banner} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {bannersFiltered.map((banner, index) => (
          <div key={index} className="relative">
            <BannerSlide banner={banner} priority={index === 0} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
