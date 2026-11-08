import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const disallowedPaths = [
    '/api/',
    '/_next/data/',
    '/admin/',
    '/admin/*',
    '/connexion',
    '/studio/',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: disallowedPaths,
      },
      // Explicitly allow leading AI search & generative crawlers (GEO - Generative Engine Optimization)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'Bytespider',
          'CCBot',
          'Diffbot',
        ],
        allow: '/',
        disallow: disallowedPaths,
      },
    ],
    sitemap: 'https://www.baroubagroup.com/sitemap.xml',
    host: 'https://www.baroubagroup.com',
  };
}
