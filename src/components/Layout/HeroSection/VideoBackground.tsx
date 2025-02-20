'use client'
import { isArray } from "@apollo/client/utilities";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";
import ArrowIcon from "@/public/icons/arrow-right.svg";
import ReactPlayer from 'react-player'

type VideoBackgroundProps = {
  children: React.ReactNode;
  src_video?: string;
  anchor?: string;
  ctaLinks?: ctaLinksProps[];
  videoBackground?: boolean;
};

type ctaLinksProps = {
  link: string;
  anchor: string;
  btn_background_color?: string;
};

/**
 * O componente VideoBackground renderiza um fundo de vídeo em tela cheia com uma sobreposição de gradiente opcional,
 * e exibe os componentes filhos em primeiro plano. Ele também suporta renderização de call to action (CTA)
 * botões com links personalizáveis ​​e cores de fundo.
 *
 * @example
 * Exemplo de uso:
 * <VideoBackground
 *    src_video="/video/video-hero.mp4"
 *    ctaLinks={[
 *      { id: "1", anchor: "CONHEÇA NOSSAS MARCAS", link: "/learn-more", btn_background_color: 'bg-blue-600' },
 *    ]}
 *  >
 *  { children }
 * </VideoBackground>
 *
 * @param {VideoBackgroundProps} props - As propriedades do componente VideoBackground.
 * @param {React.ReactNode} props.children - O conteúdo a ser exibido acima do fundo do vídeo.
 * @param {string} [props.src_video] - O URL de origem do vídeo a ser usado como plano de fundo.
 * @param {ctaLinksProps[]} [props.ctaLinks] - Uma matriz de objetos de link CTA, cada um contendo um link, texto âncora,
 * e cor de fundo opcional para o botão.
 * @returns {JSX.Element} O componente VideoBackground renderizado com vídeo, sobreposição de gradiente, filhos e botões de CTA.
 */

const VideoBackground = ({ children, src_video, ctaLinks }: VideoBackgroundProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video controls autoPlay muted loop playsInline preload="auto" poster="/images/noticias/institucional.webp" className="absolute top-0 left-0 w-full h-full object-cover">
        <source  src={src_video} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 bg-fb_gradiente_opacity"></div>
      <div className="relative z-10 text-center text-white lg:w-4/5">
        {children}

        {ctaLinks &&
          (isArray(ctaLinks) ? (
            <div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                {ctaLinks.map((cta, index) => (
                  <BtnCallToAction
                    key={index}
                    content={cta.anchor}
                    ctaLink={cta.link}
                    icon={ArrowIcon}
                    color={index === 0 ? "white" : "fb_blue_button"}
                  />
                ))}
              </div>
            </div>
          ) : null)}
      </div>
    </div>
  );
};

export default VideoBackground;