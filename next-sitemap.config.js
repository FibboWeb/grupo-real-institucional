/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://gruporealbr.com.br",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  additionalSitemaps: [
    "https://gruporealbr.com.br/sitemap/produtos.xml", // 🔥 Adiciona o sitemap dinâmico dos produtos
    "https://gruporealbr.com.br/sitemap/posts.xml", // 🔥 Adiciona o sitemap dinâmico dos produtos
  ],
};

module.exports = config;
