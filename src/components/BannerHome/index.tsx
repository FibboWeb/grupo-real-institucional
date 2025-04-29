import Image from 'next/image';

export default function BannerHome({ banner }: { banner: { mobile: Record<string, string>, desktop: Record<string, string> } }) {
  return (
    <div className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <Image
          src={banner.desktop.url_imagem}
          alt="Banner promocional"
          width={1920}
          height={600}
          priority
          className="w-full rounded-lg"
          quality={90}
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <Image
          src={banner.mobile.url_imagem}
          alt="Banner promocional"
          width={780}
          height={880}
          priority
          className="w-full rounded-lg"
          quality={90}
        />
      </div>
    </div>
  );
}
