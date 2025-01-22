import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

function BannerCta() { 
  return (
    <section className='relative fb_container rounded-lg h-auto'>
      <div className='bg-banner-cta h-[430px] lg:max-h-96 rounded-2xl bg-center bg-cover overflow-hidden'>
        <div className="absolute top-[calc(max(2rem,50%-52rem))] lg:top-[calc(max(3.5rem,50%-52rem))] container left-[max(3.5rem,calc(50%-52rem))]">
          <div className='flex flex-col gap-8 h-auto'>
            <div className='flex flex-col gap-1.5'>
              <span className='w-fit bg-fb_blue rounded-full text-sm text-white py-1 px-2'>ARTIGOS CIENTÍFICOS</span>
              <h2 className='font-bold text-3xl text-white'>Inovação e Ciência</h2>
            </div>
            <hr className='h-1 bg-white w-20'/>
            <div className='w-4/5 lg:w-1/2'>
              <p className='text-base text-white font-normal'>
              Neste espaço, você encontrará artigos, publicações e estudos que destacam a eficácia dos produtos, o compromisso com a ciência e o impacto positivo na produtividade e no bem-estar dos animais.
              </p>
            </div>
            <div className='rounded-sm'>
              <button className='flex py-3 px-4 gap-6 rounded-sm bg-white text-fb_blue ml-4 lg:ml-0'>
                VER TODOS OS ARTIGOS <ArrowRightIcon className='rounded-full bg-[#CCCCCC]'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerCta