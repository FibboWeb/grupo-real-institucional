'use client'
import { mockProducts } from '@/constants/linhas';
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css"

export default function SliderProductsRecommended() {

  const settings = {
    orientation: "horizontal",
    startAt: 0,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    useTransform: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
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
    <Slider {...settings}>
      {mockProducts.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Image 
            src={item.imagem.src}
            width={284}
            height={item.imagem.height}
            alt={item.imagem.alt}
            className='w-full h-full object-cover rounded-lg bg-[#E5E7E9]'
          />
          <h2 className='text-2xl font-bold'>{item.nomeProduto}</h2>
          <p>{item.descricao}</p>
        </div>
      ))}
    </Slider>
  )
}