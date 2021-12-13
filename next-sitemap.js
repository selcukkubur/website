const siteUrl = `https://www.courier.com`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/blog/tags/*"],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/docs/sitemap.xml`],
  },
};
