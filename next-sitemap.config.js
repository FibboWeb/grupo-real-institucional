/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://gruporealbr.com.br",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [
    "/sitemap/*",
    "/institucional",
    "/institucional/*",
    "/produtos",
    "/produtos/*",
    "/linhas",
    "/linhas/*",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `https://gruporealbr.com.br/sitemap/posts.xml`,
      `https://gruporealbr.com.br/sitemap/institucional.xml`,
    ],
  },
};
