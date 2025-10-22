/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vargheseconstruction.vercel.app', // Replace with your domain
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 5000, // optional, split sitemap if too many pages
  changefreq: 'daily', // optional
  priority: 0.7, // optional
  exclude: ['/admin/*', '/secret-page'], // optional: pages to exclude
};
