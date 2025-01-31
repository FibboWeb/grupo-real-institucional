import Breadcrumb from "@/components/BreadCrumb";
import LastPostsEventos from "@/components/Layout/LastPostsEventos";
import { getLastPostsEventos } from "@/lib/getLastPostsEventos";
import Image from "next/image";

export default async function Historia() {
    const queriedLastPostsEventos = await getLastPostsEventos();
    const fetchedLastPostsEventos = queriedLastPostsEventos.props.nodes;
    function CardSection({ children }: { children: React.ReactNode }) {
        return (
            <section className="max-w-full">
                <div className="fb_container overflow-hidden">
                    {children}
                </div>
            </section>
        )
    }

    return (
        <div className='relative mt-36'>
            <CardSection>
                    <Breadcrumb
                        activeClasses="text-fb_gray_bread"
                        containerClasses="flex py-5"
                        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
                        capitalizeLinks
                    />
            </CardSection>
            <CardSection>
                <div className={`hero-category bg-no-repeat bg-cover bg-center h-56 xl:h-72 rounded-2xl`}>
                    <Image 
                        alt="Real H"
                        src="/images/historia/hero-historia.webp"
                        width={1520}
                        height={320}
                        fetchPriority="high"
                    />
                </div>
            </CardSection>
            <CardSection>
                <div className="flex flex-col py-4 lg:py-8">
                    <h1 className="text-fb_blue_main text-xl lg:text-3xl font-bold text-center pb-2">Confira em breve todos os acontecimentos do evento</h1>
                    <span className="text-[#9A9A9A] font-semibold text-center text-lg w-full">Fotos, vídeos, notícias e muito mais...</span>
                </div>
                <div className="py-8">
                    <LastPostsEventos fetchedLastPosts={fetchedLastPostsEventos} />
                </div>

            </CardSection>
        </div>
    )
};
 
