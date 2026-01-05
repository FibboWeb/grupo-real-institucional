"use client";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";
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

export default function BannerHome({ banners, configs }: BannerHomeProps) {

// Limpa items vazios do array
const bannersFiltered = banners.filter(banner => banner.mobile.url_imagem !== "" && banner.desktop.url_imagem !== "");

  // Se não há banners ou array vazio, não renderiza nada
  if (!banners || banners.length === 0) {
    return null;
  }

  // Configurações padrão caso não venham da API
  const defaultConfigs = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
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

  // Se há apenas um banner, renderiza sem slider
  if (bannersFiltered.length === 1) {
    const banner = bannersFiltered[0];
    return (
      <div className="relative w-full">
        {banner.mobile.link ? (
          <Link 
            href={banner.mobile.link} 
            target={banner.mobile.target ?? "_blank"} 
            title={banner.mobile.title ?? ""}
            className="block hover:opacity-95 transition-opacity duration-300"
          >
            {/* Desktop Banner */}
            <div className="hidden md:block drop-shadow-sm">
              <Image
                src={banner.desktop.url_imagem}
                alt={banner.desktop.alt || "Banner promocional"}
                width={1920}
                height={600}
                priority
                className="w-full rounded-lg drop-shadow-sm"
                quality={90}
              />
            </div>

            {/* Mobile Banner */}
            <div className="block md:hidden drop-shadow-sm">
              <Image
                src={banner.mobile.url_imagem}
                alt={banner.mobile.alt || "Banner promocional"}
                width={780}
                height={880}
                priority
                className="w-full rounded-lg drop-shadow-sm"
                quality={90}
              />
            </div>
          </Link>
        ) : (
          <>
            {/* Desktop Banner */}
            <div className="hidden md:block drop-shadow-sm">
              <Image
                src={banner.desktop.url_imagem}
                alt={banner.desktop.alt || "Banner promocional"}
                width={1920}
                height={600}
                priority
                className="w-full rounded-lg drop-shadow-sm"
                quality={90}
              />
            </div>

            {/* Mobile Banner */}
            <div className="block md:hidden drop-shadow-sm">
              <Image
                src={banner.mobile.url_imagem}
                alt={banner.mobile.alt || "Banner promocional"}
                width={780}
                height={880}
                priority
                className="w-full rounded-lg drop-shadow-sm"
                quality={90}
              />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {bannersFiltered.map((banner, index) => (
          <div key={index} className="relative">
            {banner.mobile.link ? (
              <Link 
                href={banner.mobile.link} 
                target={banner.mobile.target ?? "_blank"} 
                title={banner.mobile.title ?? ""}
                className="block hover:opacity-95 transition-opacity duration-300"
              >
                {/* Desktop Banner */}
                <div className="hidden md:block">
                  <Image
                    src={banner.desktop.url_imagem}
                    alt={banner.desktop.alt || "Banner promocional"}
                    width={1920}
                    height={600}
                    priority={index === 0}
                    className="w-full rounded-lg"
                    quality={90}
                  />
                </div>

                {/* Mobile Banner */}
                <div className="block md:hidden">
                  <Image
                    src={banner.mobile.url_imagem}
                    alt={banner.mobile.alt || "Banner promocional"}
                    width={780}
                    height={880}
                    priority={index === 0}
                    className="w-full rounded-lg"
                    quality={90}
                  />
                </div>
              </Link>
            ) : (
              <>
                {/* Desktop Banner */}
                <div className="hidden md:block">
                  <Image
                    src={banner.desktop.url_imagem}
                    alt={banner.desktop.alt || "Banner promocional"}
                    width={1920}
                    height={600}
                    priority={index === 0}
                    className="w-full rounded-lg"
                    quality={90}
                  />
                </div>

                {/* Mobile Banner */}
                <div className="block md:hidden">
                  <Image
                    src={banner.mobile.url_imagem}
                    alt={banner.mobile.alt || "Banner promocional"}
                    width={780}
                    height={880}
                    priority={index === 0}
                    className="w-full rounded-lg"
                    quality={90}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
