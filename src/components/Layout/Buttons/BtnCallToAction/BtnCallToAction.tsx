import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./index.css";

interface BtnCallToActionProps {
  ctaLink: string;
  content: string;
  icon: StaticImageData;
  color?: 'fb_blue_button' | 'fb_green_button';
}

export default function BtnCallToAction({ ctaLink, content, icon, color = 'fb_blue_button' }: BtnCallToActionProps) {
  const textHover = `hover:text-${color}`;
  const bg = `bg-${color}`;
  const border = `border-${color}`;

  return (
    <>
      <Link
        href={ctaLink}
        className={[textHover + bg + border +  "group btn-container hover:bg-white inline-flex gap-4 py-3 px-4 rounded text-white	text-base font-semibold uppercase border border-solid transition-all duration-300"].join(" ")}
      >
        <span>{content}</span>
        <Image src={icon} alt="Arrow Icon" width={24} height={24} className="btn-logo bg-white group-hover:bg-[#cccccc] rounded-full p-1 transition-all duration-300" />
      </Link>
    </>
  );
}
