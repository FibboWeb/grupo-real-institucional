import { NextRequest } from "next/server";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { getAllPosts } from "@/lib/getPosts";
import { listInstitutionalDocumentPages } from "@/lib/getPage";
import { listPublishableLandingPages } from "@/lib/getLandingPage";
const SITEMAP_SITE_ORIGIN = "https://gruporealbr.com.br";

export async function generateStaticParams() {
  return [{ id: "posts.xml" }, { id: "institucional.xml" }];
}

const getCachedPosts = unstable_cache(
  async () => {
      const { data } = await getAllPosts();
      return data.map(post => ({
            url: `https://gruporealbr.com.br/${post.categories.nodes[0]?.slug !== "artigos" ? "noticias" : "artigos"}/${post.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "daily" as const,
      }));
  },
  ["sitemap-posts"],
  { revalidate: 86400 },
);

const getCachedInstitutional = unstable_cache(
  async () => {
    const [landings, documents] = await Promise.all([
      listPublishableLandingPages(),
      listInstitutionalDocumentPages(),
    ]);

    const landingEntries = landings.map((page) => ({
      url: `${SITEMAP_SITE_ORIGIN}${page.path}`,
      lastModified: page.lastModified ?? new Date().toISOString(),
      changeFrequency: "weekly" as const,
    }));

    const documentEntries = documents.map((page) => ({
      url: `${SITEMAP_SITE_ORIGIN}/institucional/${page.slug}`,
      lastModified: page.lastModified ?? new Date().toISOString(),
      changeFrequency: "weekly" as const,
    }));

    return [...landingEntries, ...documentEntries];
  },
  ["sitemap-institutional-v2"],
  { revalidate: 3600 },
);

export async function GET(req :NextRequest,{ params }: { params: Promise<{ id: string }>}) {
  let sitemapData;
  
  try {
    const { id } = await params
   if( id === 'posts.xml'){
       sitemapData= await getCachedPosts();
   }
   else if( id === 'institucional.xml'){
       sitemapData= await getCachedInstitutional();
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