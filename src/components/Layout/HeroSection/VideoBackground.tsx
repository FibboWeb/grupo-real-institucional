'use client'
import ArrowIcon from "@/public/icons/arrow-right.svg";
import { isArray } from "@apollo/client/utilities";
import { useEffect, useRef, useState } from "react";
import BtnCallToAction from "../Buttons/BtnCallToAction/BtnCallToAction";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      if (!videoRef.current) return;

      try {
        // Garantir que o vídeo está mutado (requisito para autoplay)
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        
        // Tenta iniciar o vídeo
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Erro ao iniciar o vídeo:", error);
        // Tenta reproduzir novamente em caso de erro
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.error("Retry failed:", e));
          }
        }, 1000);
      }
    };

    // Executa playVideo imediatamente e também adiciona como listener
    playVideo();

    // Adiciona listeners para garantir que o vídeo continue rodando
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current && videoRef.current.paused) {
        playVideo();
      }
    };

    const handleFocus = () => {
      if (videoRef.current && videoRef.current.paused) {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-no-repeat aspect-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/noticias/institucional.webp"
        aria-hidden="true"
      >
        <source src={src_video} type="video/mp4" />
        <p className="sr-only">Seu navegador não suporta vídeos HTML5.</p>
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
