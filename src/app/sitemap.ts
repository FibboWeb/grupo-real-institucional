'use server'

import { getDownloads } from '@/lib/getDownloads'
import { getAllPosts } from '@/lib/getPosts'
import { getAllProducts } from '@/lib/getProducts'
import type { MetadataRoute } from 'next'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

export async function generateSitemaps() {
  return [{ id: 'produtos' }, { id: 'posts' }]
}

// Função para buscar e armazenar os produtos em cache
const getCachedProducts = unstable_cache(async () => {
  const { data } = await getAllProducts()
  return data.map((product) => ({
    url: `${process.env.URL_HOST}produtos/${product.node.slug}`,
    lastModified: new Date(),
    changefreq: 'daily' as const,
  }))
}, ['sitemap-products'], { revalidate: 86400 }) // Atualiza a cada 24h

// Função para buscar e armazenar os posts em cache
const getCachedPosts = unstable_cache(async () => {
  const { data } = await getAllPosts()
  return data.map((post) => ({
    url: `${process.env.URL_HOST}${post.categories.nodes[0]?.slug !== 'artigos' ? 'noticias' : 'artigos'}/${post.slug}`,
    lastModified: new Date(),
    changefreq: 'daily' as const,
  }))
}, ['sitemap-posts'], { revalidate: 86400 }) // Atualiza a cada 24h


export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  if (id === 'produtos') {
    return await getCachedProducts()
  } else if (id === 'posts') {
    return await getCachedPosts()
  } else {
    return notFound()
  }
}
