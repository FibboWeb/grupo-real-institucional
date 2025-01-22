'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Slider from 'react-slick';
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
      <button onClick={onClick} style={style}>
        <ArrowRight color='black'/>
      </button>
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <button onClick={onClick} style={style}>
        <ArrowLeft color='black'/>
      </button>
    </div>
  );
}

interface Category {
  id: string;
  url: string;
  label: string;
  image_url: StaticImageData;
}

interface SliderNavigationalProps {
  categories: Category[];
}

export default function SliderNavigational({ categories }: SliderNavigationalProps) {
  const sliderRef = useRef(null);

  const settings = {
    orientation: 'horizontal',
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    useTransform: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          <h2 className="text-5xl font-bold text-center">Linha Nutrição</h2>
          <div className="container px-10 lg:w-2/4 lg:px-2 text-center mx-auto">
            <p>
              Oferecemos uma ampla gama de produtos de nutrição animal,
              desenvolvidos para atender às necessidades específicas de cada segmento
              do mercado.
            </p>
          </div>
          <div className={`mx-auto container max-w-full overflow-hidden`}>
            <Slider {...settings} ref={sliderRef} className='max-w-[80%] flex justify-center items-center mx-auto cursor-grab'>
              {categories.map((category) => (
                <div key={category.id} className="flex flex-col gap-6 w-56 h-56">
                  <Link href={category.url} className='flex justify-center'>
                    <Image
                      alt={category.label}
                      src={category.image_url}
                      width={220}
                      height={220}
                      className={'h-56 bg-center object-cover rounded-2xl'}
                    />
                  </Link>
                    <Link
                      href={category.url}
                      className="flex w-full justify-center hover:text-fb_blue text-fb_blue-main hover:no-underline mt-6"
                    >
                      <h3 className="text-lg font-semibold text-fb_blue-main text-center">{category.label}</h3>
                    </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
  );
}
