import CiclosClean from "@/public/images/ciclos_novo.webp";
import MaoSaindoDaterraImg from "@/public/images/social/mao-saindo-do-solo.webp";
import Image from "next/image";
export default function HeroChildren() {
  return (
    <div className="grid grid-cols-3 justify-center">
      <div>
        <Image src={CiclosClean} alt="" height={150} />
      </div>
      <div>
        <Image src={CiclosClean} alt="logo mao saindo da terra" height={150} />
      </div>
      <div></div>
      {/* <h1 className="flex flex-col text-white text-bold py-4">
        <Image src={CiclosClean} alt="" height={150} />
        <strong className="text-3xl lg:text-5xl">Pessoas no centro </strong>
        <strong className="text-3xl lg:text-5xl">de tudo.</strong>
      </h1> */}
    </div>
  );
}

export function ChildrenHeroSection() {
  return (
    <div className="bg-hero-green-leafs bg-no-repeat bg-cover bg-left-top lg:bg-center relative pt-60 lg:pt-36 h-[821px] lg:h-[500px]">
      <div className="fb_container">
        <div className="fb_container flex flex-col justify-around lg:flex-row justify-self-center items-center absolute bottom-0 gap-6">
          <div className="order-1 min-w-[180px]">
            <Image src={CiclosClean} alt="" width={280} height={108} className="object-cover"/>
          </div>
          <div className="order-3 lg:order-2 flex flex-col-reverse lg:flex-row items-center justify-center float-end" id="image">
            <div className="flex w-full h-[379px] lg:w-[404px] xl:w-[522px] lg:h-[379px]">
              <Image src={MaoSaindoDaterraImg} className="object-cover" alt="logo mao saindo da terra" width={522} height={379} />
            </div>
        </div>
          <div className="order-2 lg:order-3" id="text">
            <h1 className="text-4xl flex flex-col gap-2 w-full">
              <p className="font-semibold text-[#374D25] py-1 px-2 w-fit">TRATANDO A </p>
              <p className="w-fit font-bold bg-[#5B6E4C] text-[#D7E2C1] py-1 px-2">NATUREZA</p>
              <p className="break-words font-medium text-[#374D25] py-1 px-2">COMO ELA MERECE</p>
            </h1>
          </div>
      </div>
    </div>
  </div>
  )
}
