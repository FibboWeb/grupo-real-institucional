import Breadcrumb from "@/components/BreadCrumb";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";
import Newsletter from "@/components/Layout/Newsletter";
import AuthorBox from "@/components/Layout/AuthorBox";
import { getPostDetails } from "@/lib/getPostNoticiasDetails";
import SocialShare from "@/components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./post.css";
import { Metadata } from "next";
import { fetchYoastSEO } from "@/lib/getCategorias";
import CommentBox from "../_components/CommentBox";
import { getComments } from "@/lib/getComments";
type Props = {
  params: Promise<{ post: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * Generates metadata for a linhas page, including:
 * - title
 * - description
 * - robots (index, follow, max-snippet, max-image-preview)
 * - openGraph (images)
 * - alternates (canonical)
 *
 * Extends parent metadata with openGraph images and alternates canonical URL
 *
 * @param {Props} _props - not used
 * @returns {Metadata} generated metadata
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).post;

  // fetch data
  const infos = await fetchYoastSEO(slug, "posts");

  if (!infos) {
    notFound();
  }

  return {
    title: infos.title,
    description: infos.description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: infos.title,
      description: infos.description,
      images: [infos.og_image ? infos.og_image[0].url : ""],
    },
    alternates: {
      canonical: `https://gruporealbr.com.br/noticias/${slug[0]}`,
    },
  };
}

export default async function PostPage({ params }) {
  const postSlug = (await params).post[0];
  const fetchedPost = await getPostDetails(postSlug);
  const post = fetchedPost.props.post;
  const postComments = await getComments(post.id);
  console.log("Comentários do post: ", postComments.props);
  if (!postSlug) {
    return notFound();
  }
  return (
    <div className="fb_container px-2 mb-12 mt-24">
      <Breadcrumb
        activeClasses="text-fb_gray_bread"
        containerClasses="flex py-5"
        listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 "
        itemName={post.title}
        capitalizeLinks
      />
      <div className="hero-post h-60 xl:h-80 rounded-2xl mb-12">
        <Image
          src={post.featuredImage?.node.sourceUrl || "/images/banners/bg-categories.webp"}
          alt={post.featuredImage?.node.altText || post.title}
          width={1250}
          height={320}
          className="rounded-2xl w-full h-60 xl:h-80 object-cover"
        />
      </div>
      <div className="category-content flex flex-col  lg:items-start lg:flex-row  w-full gap-4 xl:gap-24 mb-5">
        <div className="post w-full lg:w-9/12 mb-7">
          <h1 className="font-bold text-3xl text-fb_blue_main">{post.title}</h1>
          <div className="postDetails flex items-center gap-4">
            <div className="date my-4">
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })}
            </div>
            <div className="badge-category bg-fb_blue_button text-white px-4 rounded-lg">
              <Link href={`/categoria/${post.categories.edges[0].node.slug || "artigos"}`}>
                {post.categories.edges[0].node.name || "Artigos"}
              </Link>
            </div>
          </div>
          <div className="post-content mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
          <SocialShare
            postTitle={post.title}
            postUrl={post.slug}
            postImage={
              post.featuredImage?.node.sourceUrl
                ? post.featuredImage?.node.sourceUrl
                : "/images/banners/bg-categories.webp"
            }
            blogContext={"noticias/"}
          />
          <AuthorBox
            authorName={post.author.node.name || "RealH"}
            authorBio={post.author.node?.description || ""}
            isSinglePage
            authorLink={post.author.node.slug}
          />
          <div className="my-12">
            <CommentBox
              comments={postComments.props}
              idPost={post.databaseId}
            />
          </div>
        </div>
        <div className="sidebar w-full lg:w-1/3">
          <SidebarNoticias />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
