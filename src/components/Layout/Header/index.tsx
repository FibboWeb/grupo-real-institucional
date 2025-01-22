import Image from 'next/image';
import logo from '../../../../public/logo-real-h.png'
import Link from 'next/link';
import Menu from './Menu';
import { getMenus } from '@/lib/getMenus';

async function Header() {

  const menuFetched = await getMenus('FB Menu Site');

  return (
    <header className='relative mx-auto fb_container my-4 bg-white lg:px-4 rounded-md flex justify-between items-center shadow-custom_shadow drop-shadow-md'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <Link href='/' rel='Página inicial' title='Visite a página inicial' tabIndex={0}>
            <Image src={logo} alt='Logo da empresa' width={140} height={70} loading='eager'/>
          </Link>
        </div>
        <Menu 
          menuFetched={menuFetched}
        />
      </div>
    </header>
  )
}

export default Header