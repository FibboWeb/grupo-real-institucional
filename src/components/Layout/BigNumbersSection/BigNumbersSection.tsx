import Image, { StaticImageData } from "next/image";

type Item = {
  icon?: StaticImageData;
  title?: string;
  content?: string;
};

interface BigNumbersSectionProps {
  items: Item[];
}

export default function BigNumbersSection({ items }: BigNumbersSectionProps) {
  return (
    <section className="bg-[#4FC372] py-12 px-5 sm:px-0">
      <div className="fb_container w-full flex flex-col sm:flex-row justify-between gap-8 sm:gap-0">
        {items.map((item, index) => (
          <div className="flex flex-col gap-2 items-center justify-start sm:w-[25%]" key={index}>
            {item.icon && <Image src={item.icon} alt={`${item.title}`} className="bg-white p-4 rounded-full" width={70} />}
            {item.title && <h3 className="text-white text-3xl font-bold">{item.title}</h3>}
            {item.content && <p className="text-white font-medium text-lg text-center uppercase">{item.content}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
