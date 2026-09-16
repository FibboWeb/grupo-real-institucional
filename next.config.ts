import type { NextConfig } from "next";
import { getProductLineRedirects, toNextConfigRedirects } from "./src/lib/product-line-redirects";

/** Sitemaps removidos → índice principal (301). */
const legacySitemapRedirects = [
  {
    source: "/sitemap/produtos.xml",
    destination: "/sitemap.xml",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.jp", "realh.com.br", "conteudo.realh.com.br", "conteudo.homeopet.com.br", "conteudo.pecuariaforte.com.br"],
    unoptimized: true,
  },
  poweredByHeader: false,
  async redirects() {
    const productLineRedirects = toNextConfigRedirects(await getProductLineRedirects());
    return [...legacySitemapRedirects, ...productLineRedirects];
  },
};

export default nextConfig;
