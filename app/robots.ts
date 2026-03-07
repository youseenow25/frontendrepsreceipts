import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin23456ergdfxdzrdm5/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin23456ergdfxdzrdm5/',
          '/login',
          '/register',
        ],
      },
    ],
    sitemap: 'https://www.repsreceipts.com/sitemap.xml',
  }
}
