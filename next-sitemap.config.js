/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://sales-marketing.pages.dev',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/protected-page', '/awesome/secret-page'],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path,https://sales-marketing.pages.dev/sitemap.env <config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/additional-page'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

    ],
    additionalSitemaps: [
      'https://example.com/my-custom-sitemap-1.xml',
      'https://example.com/my-custom-sitemap-2.xml',
      'https://example.com/my-custom-sitemap-3.xml',
    ],
  },
}


export default config
