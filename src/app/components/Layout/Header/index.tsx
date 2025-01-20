'use client'
import Image from 'next/image'
import greenLeaf from '../../../../../public/green-leaf.svg'
import logo from '../../../../../public/logo-real-h.png'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'

function Header() {

  const [menuOpen, setMenuOpen] = useState<boolean>();

  return (
    <header className='relative mx-auto container my-4 bg-white px-4 rounded-md flex justify-center items-center shadow-md drop-shadow-md'>
      <div className='flex justify-between items-center w-full max-w-screen-lg'>
        <div>
          <Image src={logo} alt='Logo da empresa' width={140} height={70} loading='eager'/>
        </div>
        <div className='flex gap-3'>
          {/* Menu desktop */}
          <ul className='hidden lg:flex gap-4 font-bold text-lg items-center text-black lg:mr-8'>
            <li className=''>
              <button className='flex gap-3 bg-fb_green text-white items-center py-2 px-3 text-center rounded-md font-bold'>
                Sustentabilidade
                <Image src={greenLeaf.src} alt='Green Leaf' width={13} height={13} loading='eager'/>
              </button>
            </li>
            <li>
              <a href='#' className='text-fb_blue_main hover:text-fb_blue'>
                Institucional
              </a>
            </li>
            <li>
              <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>Produtos</a>
            </li>
            <li>
              <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
                Nossas Marcas
              </a>
            </li>
            <li>
              <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
                Informações
              </a>
            </li>
            <li>
              <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute top-5 left-0 right-0 w-100">
          <button className="float-end block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <AlignJustify />
          </button>
        {menuOpen && (
            <ul className='relative container top-5 flex flex-col gap-4 font-bold text-lg items-center text-black bg-white drop-shadow-md shadow-md'>
              <li>
                <a href='#' className='text-fb_blue_main hover:text-fb_blue'>
            Institucional
                </a>
              </li>
              <li>
                <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>Produtos</a>
              </li>
              <li>
                <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
            Nossas Marcas
                </a>
              </li>
              <li>
                <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
            Informações
                </a>
              </li>
              <li>
                <a href="#" className='text-fb_blue_main hover:text-fb_blue duration-fb_transition_ease'>
            Contato
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header