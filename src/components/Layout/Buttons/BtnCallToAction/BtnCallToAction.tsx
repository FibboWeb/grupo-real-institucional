import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./index.css";
import WhiteLeafIcon from "@/public/icons/white-leaf.svg";
import ArrowIcon from "@/public/icons/arrow-right.svg";

interface BtnCallToActionProps {
  ctaLink: string;
  content: string;
  icon?: StaticImageData;
  color?: "fb_blue_button" | "fb_green_button";
}

export default function BtnCallToAction({ ctaLink, content, icon, color = "fb_blue_button" }: BtnCallToActionProps) {
  const textHover = color == "fb_blue_button" ? "hover:text-fb_blue_button" : "hover:text-fb_green_button";
  const bg = color == "fb_blue_button" ? "bg-fb_blue_button" : "bg-fb_green_button";
  const border = color == "fb_blue_button" ? "border-fb_blue_button" : "border-fb_green_button";

  let iconBtn;

  if (!icon) {
    iconBtn = color == "fb_blue_button" ? ArrowIcon : WhiteLeafIcon;
  } else {
    iconBtn = icon;
  }

  return (
    <>
      <Link
        href={ctaLink}
        className={`${textHover} ${bg} ${border} group btn-container hover:bg-white inline-flex gap-4 py-3 px-4 rounded text-white	text-base font-semibold uppercase border border-solid transition-all duration-300`}
      >
        <span>{content}</span>
        <Image
          src={iconBtn}
          alt="Arrow Icon"
          width={24}
          height={24}
          className={`btn-logo ${color == "fb_blue_button" ? 'bg-white group-hover:bg-[#cccccc]' : 'filter-image' }  rounded-full p-1 transition-all duration-300`}
        />
      </Link>
    </>
  );
}
