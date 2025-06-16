import { NextRequest } from "next/server";
import type { MetadataRoute } from "next";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { getAllPosts } from "@/lib/getPosts";
import { getAllProducts } from "@/lib/getProducts";

const urlHost = process.env.NEXT_PUBLIC_URL_HOST;

export async function generateStaticParams() {
  return [{ id: "produtos.xml" }, { id: "posts.xml" }];
}

// Cache dos dados...
const getCachedProducts = unstable_cache(
  async () => {
      const { data } = await getAllProducts();
      return data.map(product => ({
          url: `https://gruporeal.com.br/produtos/${product.node.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "daily" as const,
      }));
  },
  ["sitemap-products"],
  { revalidate: 86400 },
);

const getCachedPosts = unstable_cache(
  async () => {
      const { data } = await getAllPosts();
      return data.map(post => ({
            url: `https://gruporeal.com.br/${post.categories.nodes[0]?.slug !== "artigos" ? "noticias" : "artigos"}/${post.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "daily" as const,
      }));
  },
  ["sitemap-posts"],
  { revalidate: 86400 },
);

export async function GET(req :NextRequest,{ params }: { params: Promise<{ id: string }>}) {
  let sitemapData;
  
  try {
    const { id } = await params
   if( id === 'produtos.xml'){
       sitemapData= await getCachedProducts();
   }
   else if( id === 'posts.xml'){
       sitemapData= await getCachedPosts();
   }
   else{
       return notFound();
   }

    const xml=`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapData.map(entry=>`
            <url>
                <loc>${entry.url}</loc>
                <lastmod>${entry.lastModified}</lastmod>
                <changefreq>${entry.changeFrequency}</changefreq>
            </url>`).join('\n')}
    </urlset>`;

    return new Response(xml,{
        headers:{
            'Content-Type':'application/xml'
        }
    });
  } catch (error) {
    return notFound();
  }
}