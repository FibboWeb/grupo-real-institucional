import Image, { StaticImageData } from "next/image";
import style from "./index.module.css";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import ArrowRightSVG from "@/public/icons/arrow-right.svg";

interface InfoSectionProps {
  heroBgImage?: string;
  badge?: string;
  title?: string;
  content: string;
  ctaLink?: string;
  imagePath?: StaticImageData;
  imageMidFullContainer?: boolean;
  youtubeEmbed?: string;
  reverseMobile?: boolean;
  reverseDesktop?: boolean;
  border?: boolean;
  color?: "fb_blue_button" | "fb_green_button";
  contentButton?: string;
}

/**
 * Componente `InfoSection`
 *
 * Seção de informações que pode ser reutilizada e ordenada conforme a necessidade, além disso pode possuir um cta.
 *
 * @component
 * @example
 * // Exemplo de uso do componente Button
 *  <InfoSection
 *       reverseDesktop={false}
 *      reverseMobile={false}
 *      title="Title"
 *      content="<p>conteudo em html</p>"
 *      imagePath={ImageTeste} // imagem importada  do public
 *      ctaLink="#"
 *      youtubeEmbed="https://www.youtube.com/embed/VIDEO_ID"
 *    />
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} [props.heroBgImage] - URL da imagem de background da seção.
 * @param {string} [props.badge] - Texto do badge que aparece acima do título.
 * @param {string} props.title - O titulo do componente.
 * @param {string} props.content - conteúdo em html que será exibido no componente.
 * @param {string} [props.ctaLink] - Link para o botão de CTA.
 * @param {string} [props.youtubeEmbed] - Link para o embed do vídeo do youtube.
 * @param {StaticImageData} [props.imagePath] - Imagem principal do componente.
 * @param {boolean} [props.imageMidFullContainer] - Se true, a imagem ocupará toda a largura da tela.
 * @param {boolean} [props.reverseMobile] - Controla a direção da coluna no componente na versão mobile.
 * @param {boolean} [props.reverseDesktop] - Controla a direção do componente na versão desk.
 * @param {boolean} [props.border] - Se true, a imagem terá uma borda.
 * @param {"fb_blue_button" | "fb_green_button"} [props.color] - Cor do botão de CTA.
 * @param {string} [props.contentButton] - Texto do botão de CTA.
 * @param {boolean} [props.reverseMobile] - Controla a direção da coluna no componente na versão mobile
 * @param {boolean} [props.reverseDesktop] - Controla a direção do componente na versão desk
 *
 * @returns {JSX.Element} O botão renderizado.
 */

function InfoSection({
  heroBgImage,
  badge,
  title,
  content,
  ctaLink,
  imagePath,
  imageMidFullContainer = false,
  youtubeEmbed,
  reverseMobile = false,
  reverseDesktop = false,
  border = true,
  color = "fb_blue_button",
  contentButton = "Leia mais",
}: InfoSectionProps) {
  const MobileClass = reverseMobile ? "flex-col" : "flex-col-reverse";
  const desktopClass = reverseDesktop ? "sm:flex-row" : "sm:flex-row-reverse";
  const paddingClass = reverseDesktop ? "sm:pl-12" : "sm:pr-12";
  const divBar = color == "fb_blue_button" ? "bg-[rgba(3,29,58,0.90)]" : "bg-fb_green";

  return (
    <div className={`${heroBgImage ? `${heroBgImage} relative bg-center bg-cover` : ""}`}>
      {heroBgImage && <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85 z-0"></div>}
      <div className={`w-full h-full ${!imageMidFullContainer ? "fb_container mx-auto" : ""} relative`}>
        <div
          className={`flex flex-wrap lg:flex-nowrap ${desktopClass} ${MobileClass} ${imageMidFullContainer ? "" : "py-4 lg:py-8"}`}
        >
          {youtubeEmbed ? (
            <div className="flex-1 flex justify-center items-center p-2 aspect-[16/9] w-full h-auto">
              <iframe
                loading="lazy"
                className="rounded-tl-[16px] rounded-br-[16px] overflow-hidden aspect-[16/9] w-full h-auto"
                src={youtubeEmbed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className={`flex-1 flex ${reverseDesktop ? "justify-start" : "justify-end"} items-center rounded-2xl ${!imageMidFullContainer ? "p-2" : 'h-inherit w-full'}`}>
              <Image
                src={imagePath}
                alt=""
                className={`${border ? "shadow-shadow_image_info_section" : ""} ${imageMidFullContainer ? "h-full w-full object-cover" : "rounded-2xl"}`}
              />
            </div>
          )}

          <div
            className={`flex flex-col justify-center flex-1 pb-12 pt-12 gap-6 ${paddingClass} ${imageMidFullContainer ? "fb_container mx-auto p-0 sm:px-8" : ""}`}
          >
            <div>
              {badge && color == "fb_green_button" && (
                <div className="flex gap-1 py-1">
                  <Image src={"/icons/plant-sprout.svg"} width={"12"} height={"12"} alt="broto de planta"></Image>
                  <div className="text-xl text-fb_green text-uppercase font-semibold">{badge}</div>
                </div>
              )}
              <h2 className="font-semibold text-3xl text-[var(--blue-main)]">{title}</h2>
              <div className={`h-1 w-20 ${divBar} mt-4 mb-4`}></div>
              <div className="text-lg font-normal text-[var(--blue-main)]">
                <div
                  className={style.containerContent}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </div>
            </div>
            {ctaLink && (
              <div className="flex justify-start">
                <BtnCallToAction ctaLink={ctaLink} content={contentButton} icon={ArrowRightSVG} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
