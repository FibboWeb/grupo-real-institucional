import Breadcrumb from "@/components/BreadCrumb";
import LastPostsNoticias from "@/components/Layout/LastPostsNoticias"
import { getLastPostsNoticias } from "@/lib/getLastPostsNoticias";

export default async function Historia() {
    const queriedLastPostsNoticias = await getLastPostsNoticias();
    const fetchedLastPostsNoticias = queriedLastPostsNoticias.props.nodes;
    function CardSection({ children }: { children: React.ReactNode }) {
        return (
            <div className="text-fb_text_gray relative">
                <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10">{children}</div>
            </div>
        )
    }

    return (
        <div className='relative mt-36'>
            <section className="max-w-full">
                <div className="fb_container overflow-hidden">
                    <Breadcrumb
                        activeClasses="text-fb_gray_bread"
                        containerClasses="flex py-5"
                        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
                        capitalizeLinks
                    />
                </div>
            </section>
            <section className="max-w-full">
                <div className="fb_container overflow-hidden">
                    <div className="flex flex-col py-4">
                        <h1 className="text-fb_blue_main text-xl lg:text-3xl font-bold text-center">Confira em breve todos os acontecimentos do evento</h1>
                        <span className="text-[#9A9A9A] font-semibold text-center text-lg w-full">Fotos, vídeos, notícias e muito mais...</span>
                    </div>
                    <LastPostsNoticias fetchedLastPosts={fetchedLastPostsNoticias} />
                </div>
            </section>
        </div>
    )
}