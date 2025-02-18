/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://gruporealbr.com.br",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/sitemap/posts", "/sitemap/produtos"], // Exclui os sitemaps dinâmicos da geração automática
  robotsTxtOptions: {
    additionalSitemaps: [
      `https://gruporealbr.com.br/sitemap/produtos.xml`,
      `https://gruporealbr.com.br/sitemap/posts.xml`,
    ],
  },
};
