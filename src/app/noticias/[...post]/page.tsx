import Breadcrumb from "@/components/BreadCrumb";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";
import Newsletter from "@/components/Layout/Newsletter";
import AuthorBox from "@/components/Layout/AuthorBox";
import { getPostDetails } from "@/lib/getPostNoticiasDetails";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const postSlug = params.post[0];
  const fetchedPost = await getPostDetails(postSlug);
  const post = fetchedPost.props.post;
  console.log(post);
  return (
    <div className="fb_container px-2 mb-12 mt-24">
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
        itemName={post.title}
        capitalizeLinks
      />
      <div className="hero-post bg-no-repeat bg-cover bg-center h-60 xl:h-80 rounded-2xl mb-12">
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText ? post.featuredImage.node.altText : post.title}
          width={1250}
          height={320}
          className="rounded-2xl w-full h-60 xl:h-80 object-cover"
        />
      </div>
      <div className="category-content flex flex-col  lg:items-start lg:flex-row  w-full gap-4 xl:gap-24 mb-5">
        <div className="post w-full lg:w-9/12 mb-7">
          <h1 className="font-bold text-3xl text-fb_blue_main">{post.title}</h1>
          <div className="postDetails">
            <div className="date my-2">
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })}
            </div>
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <AuthorBox authorName="John Doe" authorBio="John is a seasoned writer with over 10 years of experience." />
        </div>
        <div className="sidebar w-full lg:w-1/3">
          <SidebarNoticias />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
