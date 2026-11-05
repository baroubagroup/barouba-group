import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/data/',
          '/admin/',
          '/admin/*',
          '/connexion',
          '/studio/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/data/',
          '/admin/',
          '/admin/*',
          '/connexion',
          '/studio/',
        ],
      },
    ],
    sitemap: 'https://www.baroubagroup.com/sitemap.xml',
  };
}
