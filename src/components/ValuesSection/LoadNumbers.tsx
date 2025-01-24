"use client";
import { useEffect, useState } from "react";

export type LoadNumbersProps = {
  qtde: number;
  text: string;
};

type LoadNumbersInterface = {
  arrayOfNumbers: LoadNumbersProps[];
};

// Função para formatar o número
const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return `+ ${(num / 1_000_000_000).toFixed(0)} Bilhões${num >= 2_000_000_000 ? "s" : ""}`;
  } else if (num >= 1_000_000) {
    return `+ ${(num / 1_000_000).toFixed(0)} Milhões${num >= 2_000_000 ? "s" : ""}`;
  } else if (num >= 1_000) {
    return `+ ${(num / 1_000).toFixed(0)} Mil`;
  }
  return num.toString();
};

const IncrementingCounter = ({ maxNumber, speed = 100 }: { maxNumber: number; speed?: number }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < maxNumber) {
      const incrementValue = Math.ceil(maxNumber / 100); // Incrementa de forma adaptativa
      const timer = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + incrementValue, maxNumber));
      }, speed);

      return () => clearInterval(timer); // Limpa o timer
    }
  }, [count, maxNumber, speed]);

  return <>{formatNumber(count)}</>;
};

export default function LoadNumbers({ arrayOfNumbers }: LoadNumbersInterface) {
  return (
    <div className="flex h-full justify-between items-center gap-8">
      {arrayOfNumbers.map((number, index) => (
        <div key={index} className="flex flex-col gap-2 items-center justify-center">
          <span className="text-fb_blue_main font-bold text-3xl flex-nowrap">
            <IncrementingCounter maxNumber={number.qtde} speed={30} />
          </span>
          <hr className="w-20 h-[6px] bg-blue_button rounded-full" />
          <p className="text-center text-fb_blue_main font-semibold text-base">{number.text}</p>
        </div>
      ))}
    </div>
  );
}
