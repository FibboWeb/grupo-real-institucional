import Image, { StaticImageData } from "next/image";
import "./index.css";

type Member = {
  img: StaticImageData;
  name: string;
  role: string;
};

type BoardCardsProps = {
  title?: string;
  members: Member[];
};

export default function BoardCards({ title, members }: BoardCardsProps) {
  return (
    <section className="flex justify-center mb-3">
      <div className="fb_container flex flex-col gap-10 p-5">
        <div>
          <h3 className="text-black font-semibold text-3xl">Diretoria</h3>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <li className="rounded-2xl overflow-hidden h-[450px]" key={index}>
                <a href="" className="h-full">
                  <div className="relative h-full rounded-2xl">
                    <div className="absolute h-full w-full flex items-center justify-center rounded-2xl">
                      <Image src={member.img} alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="relative py-5 px-2 flex flex-col justify-end items-center gap-2 h-full bg-content-board rounded-2xl">
                      <h4 className="text-2xl text-white font-bold">{member.name}</h4>
                      <p className="text-white text-lg font-normal">{member.role}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
