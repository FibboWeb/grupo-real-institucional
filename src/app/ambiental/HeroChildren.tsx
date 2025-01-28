import CiclosClean from "@/public/images/ciclos-clean.webp";
import Image from "next/image";
export default function HeroChildren() {
  return (
    <div>
      <h1 className="flex flex-col text-white text-bold py-4">
        <Image src={CiclosClean} alt="" />
        <strong className="text-3xl lg:text-5xl">Tratar a natureza </strong>
        <strong className="text-3xl lg:text-5xl">Como ela merece.</strong>
      </h1>
    </div>
  );
}
