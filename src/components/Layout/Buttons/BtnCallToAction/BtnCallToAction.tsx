import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./index.css";

interface BtnCallToActionProps {
  ctaLink: string;
  content: string;
  icon: StaticImageData;
}

export default function BtnCallToAction({ ctaLink, content, icon }: BtnCallToActionProps) {
  return (
    <>
      <Link
        href={ctaLink}
        className="btn-container hover:text-blue_button hover:bg-white inline-flex gap-4 bg-blue_button py-3 px-4 rounded text-white	text-base font-semibold uppercase border-solid border-blue_button"
      >
        <span>{content}</span>
        <Image src={icon} alt="Arrow Icon" width={24} height={24} className="btn-logo bg-white rounded-full p-1" />
      </Link>
    </>
  );
}
