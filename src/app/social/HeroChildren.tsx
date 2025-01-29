import CiclosClean from "@/public/images/ciclos-clean.webp";
import Image from "next/image";
export default function HeroChildren() {
  return (
    <div>
      <h1 className="flex flex-col text-white text-bold py-4">
        <Image src={CiclosClean} alt="" height={150} />
        <strong className="text-3xl lg:text-5xl">Pessoas no centro </strong>
        <strong className="text-3xl lg:text-5xl">de tudo.</strong>
      </h1>
    </div>
  );
}
