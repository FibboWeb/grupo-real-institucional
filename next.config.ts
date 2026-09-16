import type { NextConfig } from "next";

/** Sitemaps removidos → índice principal (301). Regras do WP ficam no middleware (limite da Vercel: 1024 redirects no next.config). */
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
    return legacySitemapRedirects;
  },
};

export default nextConfig;
