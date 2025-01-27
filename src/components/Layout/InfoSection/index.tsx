import { StaticImageData } from "next/image";
import Image from "next/image";
import style from "./index.module.css";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import ArrowRightSVG from "@/public/icons/arrow-right.svg";

interface InfoSectionProps {
  title: string;
  content: string;
  ctaLink?: string;
  imagePath: StaticImageData;
  reverseMobile?: boolean;
  reverseDesktop?: boolean;
  border?: boolean;
  color?: string;
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
 *    />
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - O titulo do componente.
 * @param {string} props.content - conteúdo em html que será exibido no componente.
 * @param {string} [props.ctaLink] - Link para o botão de CTA.
 * @param {StaticImageData} [props.imagePath] - Imagem principal do componente.
 * @param {boolean} [props.reverseMobile] - Controla a direção da coluna no componente na versão mobile
 * @param {boolean} [props.reverseDesktop] - Controla a direção do componente na versão desk
 *
 * @returns {JSX.Element} O botão renderizado.
 */

function InfoSection({
  title,
  content,
  ctaLink,
  imagePath,
  reverseMobile = false,
  reverseDesktop = false,
  border = true,
  color = "fb_blue_button",
}: InfoSectionProps) {
  const MobileClass = reverseMobile ? "flex-col" : "flex-col-reverse";
  const desktopClass = reverseDesktop ? "sm:flex-row" : "sm:flex-row-reverse";
  const paddingClass = reverseDesktop ? "sm:pl-12" : "sm:pr-12";
  return (
    <>
      <div className="w-full h-full fb_container mx-auto">
        <div className={`flex ${desktopClass} ${MobileClass} sm:p-0 p-5`}>
          <div
            className={`flex-1 flex ${reverseDesktop ? "justify-start" : "justify-end"} items-center rounded-2xl p-2`}
          >
            <Image
              src={imagePath}
              alt=""
              className={`rounded-2xl ${border ? "shadow-shadow_image_info_section" : ""}`}
            />
          </div>
          <div className={`flex flex-col justify-center flex-1 pb-12 pt-12 gap-6 ${paddingClass}`}>
            <div>
              <h2 className="font-semibold text-3xl text-[var(--blue-main)]">{title}</h2>
              <div className="h-1 w-20 bg-[rgba(3,29,58,0.90)] mt-4 mb-4"></div>
              <div className="text-lg	font-normal	text-[var(--blue-main)]">
                <div
                  className={style.containerContent}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </div>
            </div>
            {ctaLink && (
              <div className="flex sm:justify-start justify-center">
                <BtnCallToAction color={color} ctaLink={ctaLink} content="Leia mais" icon={ArrowRightSVG} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
