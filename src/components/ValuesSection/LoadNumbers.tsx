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
    return `+ ${(num / 1_000_000_000).toFixed(0)} Bi${num >= 2_000_000_000 ? "s" : ""}`;
  } else if (num >= 1_000_000) {
    return `+ ${(num / 1_000_000).toFixed(1)} Mi${num >= 2_000_000 ? "s" : ""}`;
  } else if (num >= 1_000) {
    return `+ ${(num / 1_000).toFixed(1)} Mil`;
  } else if (num <= 100 && num >= 20) {
    return `${num} %`;
  } else if (num <= 20) {
    return `${num} Anos`;
  }
  return num.toString().replace(/\.0\b/g, "");
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

  // se numero for igual a 2.0 formatar para ficar só 2, caso não exibir as casas decimais exemplo 2.4
  const formattedCount = count.toFixed(1).replace(/\.0\b/g, "");

  return formatNumber(Number(formattedCount));
};

export default function LoadNumbers({ arrayOfNumbers }: LoadNumbersInterface) {
  return (
    <div className="flex h-full w-full justify-between items-start gap-2 md:gap-8">
      {arrayOfNumbers.map((number, index) => (
        <div key={index} className="flex flex-col gap-2 items-center justify-center w">
          <span className="text-fb_blue_main text-center font-bold text-2xl md:text-3xl flex-nowrap">
            <IncrementingCounter maxNumber={number.qtde} speed={30} />
          </span>
          <hr className="w-20 h-[6px] bg-fb_blue_button rounded-full" />
          <p className="min-w-50 w-full text-center text-fb_blue_main font-semibold text-sm md:text-base">
            {number.text}
          </p>
        </div>
      ))}
    </div>
  );
}
