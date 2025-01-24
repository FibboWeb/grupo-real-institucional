import BannerLines from "@/components/BannerCTA/BannerLines";
import Breadcrumb from "@/components/BreadCrumb";

import image01 from "@/public/images/bois-no-pasto.webp"
import image02 from "@/public/images/saude.webp"
import image03 from "@/public/images/cao-e-gato.webp"

export default function PageLinhas() {
  return (
    <section className="relative mt-36">
      <div className="fb_container flex flex-col gap-fb_space-section">
        <div>
          <Breadcrumb />
        </div>
        <div>
          <BannerLines 
            title="Linha Nutrição"
            imgBackground={image01.src}
          >
            <p>A <strong>Real H</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
            há <strong>40 anos</strong> ao lado do produtor</p>
          </BannerLines>
        </div>
        <div>
          {/* Grid de produtos */}
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 mb-20">
        <BannerLines 
            title="Linha Nutrição"
            imgBackground={image02.src}
          >
            <p>A <strong>Real H</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
            há <strong>40 anos</strong> ao lado do produtor</p>
          </BannerLines>
          <BannerLines 
            title="Linha Nutrição"
            imgBackground={image03.src}
          >
            <p>A <strong>Real H</strong>, empresa de <strong>Nutrição e Saúde Animal</strong>
            há <strong>40 anos</strong> ao lado do produtor</p>
          </BannerLines>
        </div>
      </div>
    </section>
  )
}
