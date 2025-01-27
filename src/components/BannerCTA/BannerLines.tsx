import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type BannerLinesProps = {
  title: string;
  anchor?: string;
  ctaLink?: string;
  imgBackground?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function BannerLines({ title, anchor, ctaLink, imgBackground, children, className, id }: BannerLinesProps) {
  return (
    <div className='relative w-full h-[300px] rounded-lg items-center'>
      <div className='absolute inset-0 bg-gradient-to-r from-fb_dark-blue to-fb_light-blue rounded-lg'></div>
      <Image 
        alt=''
        src={imgBackground}
        width={1000}
        height={300}
        className='w-full h-full object-cover rounded-lg border-none bg-cover'
      />
      <div className="absolute inset-0 flex flex-col gap-6 justify-center mx-auto w-full text-white pl-8">
        <h1 className="text-5xl md:text-4xl font-bold">{title}</h1>
        <div>
          {children}
        </div>
        <button className="w-fit flex font-bold gap-6 items-center bg-fb_blue px-2 py-3 rounded">
          Ler mais <ArrowRight className="bg-white text-fb_blue rounded-full" />
        </button>
      </div>

    </div>
  )
}