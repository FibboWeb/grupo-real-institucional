import Link from "next/link";
import Image from "next/image";

interface BannerSidebarProps {
  ImagemBanner: string;
  urlCta: string;
}

function BannerSidebar({ ImagemBanner, urlCta }: BannerSidebarProps) {
  return (
    <div className="banner-sidebar mb-4">
      <Link href={urlCta}>
        <Image src={ImagemBanner} alt="Banner Sidebar" width={380} height={200} loading={"lazy"} />
      </Link>
    </div>
  );
}

export default BannerSidebar;
