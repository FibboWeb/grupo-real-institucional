import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./index.css";
import WhiteLeafIcon from "@/public/icons/white-leaf.svg";
import ArrowIcon from "@/public/icons/arrow-right.svg";
import { cn } from "@/lib/utils";

interface BtnCallToActionProps {
  ctaLink?: string;
  content: string;
  icon?: StaticImageData;
  color?: "fb_blue_button" | "fb_green_button" | "white";
  onClick?: () => void;
  classCssForBTN?: string;
  showIcon?: boolean;
}

export default function BtnCallToAction({ ctaLink, content, icon, color = "fb_blue_button", onClick, classCssForBTN, showIcon = true  }: BtnCallToActionProps) {
  let text;
  let textHover;
  let bg;
  let bgHover;
  let border;

  if (color == "white") {
    text = "text-fb_blue_button";
    textHover = "hover:text-white";
    bg = "bg-white";
    bgHover = "hover:bg-fb_blue_button";
    border = "border-fb_blue_button";
  } else if (color== "fb_blue_button") {
    text = "text-white";
    textHover = "hover:text-fb_blue_button";
    bg = "bg-fb_blue_button";
    bgHover = "hover:bg-white";
    border = "border-fb_blue_button";
  } else if (color == "fb_green_button") {
    text = "text-white";
    textHover = "hover:text-fb_green_button";
    bg = "bg-fb_green_button";
    bgHover = "hover:bg-white";
    border = "border-fb_green_button";
  }

  let iconBtn;

  if (!icon) {
    iconBtn = color == "fb_green_button" ? WhiteLeafIcon : ArrowIcon;
  } else {
    iconBtn = icon;
  }

  return (
    <>
      {ctaLink ? (
        <Link
          href={ctaLink}
          className={cn([`${text} ${textHover} ${bg} ${bgHover} ${border} group btn-container inline-flex items-center gap-4 py-3 px-4 rounded text-base font-semibold uppercase border border-solid transition-all duration-300`, `${classCssForBTN}`])}
        >
          <span>{content}</span>
          <div className="shrink-0">
            <Image
              src={iconBtn}
              alt="Arrow Icon"
              width={24}
              height={24}
              className={`btn-logo ${color == "white" ? "bg-[#cccccc] group-hover:bg-white" : "filter-image"} ${color == "fb_blue_button" ? "bg-white group-hover:bg-[#cccccc]" : "filter-image"} rounded-full p-1 transition-all duration-300`}
            />
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${text} ${textHover} ${bg} ${bgHover} ${border} group btn-container inline-flex items-center gap-4 py-3 px-4 rounded text-base font-semibold uppercase border border-solid transition-all duration-300`}
        >
          <span>{content}</span>
          { showIcon && (
          <div className="shrink-0">
            <Image
              src={iconBtn}
              alt="Arrow Icon"
              width={24}
              height={24}
              className={`btn-logo ${color == "white" ? "bg-[#cccccc] group-hover:bg-white" : "filter-image"} ${color == "fb_blue_button" ? "bg-white group-hover:bg-[#cccccc]" : "filter-image"}  rounded-full p-1 transition-all duration-300`}
            />
            </div>  
          )}
        </button>
      )}
    </>
  );
}

