"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Post } from "@/types/post";
import { getLastPostsNoticias } from "@/lib/getLastPostsNoticias";
import CardBlog from "../Layout/CardBlog";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";

export function ShadcnCarroussel({ itens }: any) {
  interface LastPostsProps {
    fetchedLastPosts: Post[];
  }

  const [emblaRef] = useEmblaCarousel({ loop: true, align(viewSize, snapSize, index) {
    console.log(viewSize)
    if (index === 0) {
      return 0;
    }
  }, }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  return (
    <div className="flex overflow-hidden flex-col md:flex-row w-full gap-2">
      {/* Card fixo à esquerda */}
      
      {/* Carrossel à direita */}
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            watchSlides: true,
            inViewThreshold: 0.5,
            containScroll: "trimSnaps",
            breakpoints: {
              768: {
                slides: itens.length,
                // gap: 16,
              },
            }

            // breakpoints: [
            //   {
            //     width: 768, // largura minima para este breakpoint
            //     slides: 2, // quantidade de slides a serem exibidas
            //     gap: 16 // espa a entre os slides
            //   }
            // ]
            // Não possui opção para escolher quantidade de slides a serem exibidos
          }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          className="w-ful flex justify-center items-center md:ml-[30px] lg:ml-[120px]"
        >
          <CarouselContent className="ml-0 flex gap-12">
            <div className="py-2 min-w-[280px] sm:min-w-[300px]">
              <div className="flex flex-col justify-between  min-h-[440px] rounded-2xl bg-fb_gradient text-white p-6">
                <div className="content">
                  <h2 className="text-3xl font-bold">Notícias</h2>
                  <p className="pt-6">
                    Fique por dentro de tudo o que acontece no mundo da pecuária. Notícias, eventos, dicas e muito
                    mais...
                  </p>
                </div>
                <div className="w-fit">
                  <BtnCallToAction ctaLink="/noticias" content="IR PARA O BLOG" color="fb_blue_button" />
                </div>
              </div>
            </div>
            {itens.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1 ">
                  <CardBlog
                    key={post.id}
                    blogContext={post.categories.nodes[0].name.toLowerCase() === "artigos" ? "/artigos" : "/noticias"}
                    postImage={post.featuredImage.node.sourceUrl}
                    postImageAlt={post.featuredImage.node.altText}
                    postLink={post.slug}
                    postTitle={post.title}
                    postDescription={{ __html: post.content }}
                    postDate={post.date}
                    postAuthor={post.author.node.name}
                    postAuthorLink={post.author.node.slug}
                    isSlider
                    classCss="flex aspect-square items-center justify-center p-6"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export function CarouselShadcn2({ itens }: any) {
  return (
    <div className="flex overflow-hidden flex-col md:flex-row w-full gap-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          watchSlides: true,
          inViewThreshold: 0.5,
          containScroll: "trimSnaps",
          
          breakpoints: {
            768: {
              slides: itens.length,
              axis: "x",
            },
          }
        }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}

        className="w-full md:ml-[30px] lg:ml-[120px]"
      >
        <CarouselContent className="ml-0 flex gap-12"> {/* Adicione um gap para espaçamento */}
          <div className="py-2 min-w-[280px] sm:min-w-[300px]">
            <div className="flex flex-col justify-between min-h-[440px] rounded-2xl bg-fb_gradient text-white p-6">
              <div className="content">
                <h2 className="text-3xl font-bold">Notícias</h2>
                <p className="pt-6">
                  Fique por dentro de tudo o que acontece no mundo da pecuária. Notícias, eventos, dicas e muito mais...
                </p>
              </div>
              <div className="w-fit">
                <BtnCallToAction ctaLink="/noticias" content="IR PARA O BLOG" color="fb_blue_button" />
              </div>
            </div>
          </div>

          {itens.map((post, index) => (
            <CarouselItem key={index} className="basis-1/4 flex py-2 min-w-[280px] sm:min-w-[300px]">
              <div className="w-[372px] mx-auto">
                <CardBlog
                  key={post.id}
                  blogContext={post.categories.nodes[0].name.toLowerCase() === "artigos" ? "/artigos" : "/noticias"}
                  postImage={post.featuredImage.node.sourceUrl}
                  postImageAlt={post.featuredImage.node.altText}
                  postLink={post.slug}
                  postTitle={post.title}
                  postDescription={{ __html: post.content }}
                  postDate={post.date}
                  postAuthor={post.author.node.name}
                  postAuthorLink={post.author.node.slug}
                  isSlider
                  classCss="w-full flex aspect-square items-center justify-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}


export function CarouselEmbla({ itens }: any) {

}
