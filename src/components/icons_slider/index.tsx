"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <button className="relative -top-full" onClick={onClick} style={style}>
        <ArrowRight color="black" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`}>
      <button className="relative -top-full" onClick={onClick} style={style}>
        <ArrowLeft color="black" />
      </button>
    </div>
  );
}

interface Category {
  id: string;
  url?: string;
  label?: string;
  image_url: StaticImageData;
}

interface SliderNavigationalProps {
  categories: Category[];
  title?: string;
  text?: string;
  isNoticias?: boolean;
}

/**
 * SliderNavigational componente renderiza um slider navegacional.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Category[]} props.categories - Um array com os objetos a serem renderizados.
 * @param {props.categories.id} props.categories.id - Identificador do objeto.
 * @param {props.categories.url} props.categories.url - URL da imagem da categoria.
 * @param {props.categories.label} props.categories.label - Label da categoria.
 *
 * @returns {JSX.Element} Um slider que renderiza as imagens e links das categorias.
 *
 * @example
 * Exemplo de uso:
 * <SliderNavigational categories={categories} />
 *
 * @description
 * O slider e responsivo e tem vários pontos de quebra de acordo com o tamanho da tela.
 * Setas direcionais personalizadas.
 */
export default function SliderNavigational({ categories, title, text, isNoticias }: SliderNavigationalProps) {
  const sliderRef = useRef(null);

  const settings = {
    orientation: "horizontal",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    useTransform: true,
    dots: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-full flex flex-col gap-8">
        <h2 className={`${isNoticias ? "text-3xl" : "text-4xl"} font-bold text-center text-fb_blue_main`}>{title}</h2>
        {text && (
          <div className="container px-10 lg:w-2/4 lg:px-2 text-center mx-auto">
            <p>{text}</p>
          </div>
        )}
        <div className={`mx-auto ${isNoticias ? " " : "container"} max-w-full overflow-hidden`}>
          <Slider
            {...settings}
            ref={sliderRef}
            className={`${isNoticias ? "max-w-[100%]" : "max-w-[80%]"} flex justify-center items-center mx-auto cursor-grab`}
          >
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col mx-auto gap-6 w-[140px] min-h-[140px] px-8">
                  
                {category.url && (
                  <Link href={category.url} className="flex justify-center">
                  <Image
                    alt={category.label}
                    src={category.image_url}
                    width={220}
                    height={220}
                    className={"h-56 bg-center object-cover rounded-2xl"}
                  />
                </Link>) : (
                  <Link
                  href={category.url}
                  className="flex w-full justify-center hover:text-fb_blue text-fb_blue-main hover:no-underline mt-6"
                >
                  <h3 className="text-lg font-semibold text-fb_blue-main text-center">{category.label}</h3>
                </Link>
                )}
                { category.label && (
                  <h3 className="text-lg font-semibold hover:text-fb_blue text-fb_blue-main text-center">{category.label}</h3>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
