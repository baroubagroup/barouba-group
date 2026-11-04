import type { MetadataRoute } from 'next';
import { mockPosts, mockFormations } from '@/lib/data';

const BASE_URL = 'https://www.baroubagroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];

  const staticPages = [
    '',
    '/services',
    '/services/intelligence-artificielle',
    '/services/agents-ia',
    '/services/publicite-digitale',
    '/services/developpement-sur-mesure',
    '/services/marketing-digital',
    '/services/tunnels-de-vente',
    '/formations',
    '/blog',
    '/boutique',
    '/portfolio',
    '/a-propos',
    '/contact',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Static Pages
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' || page === '/blog' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : page.startsWith('/services/') ? 0.9 : 0.8,
      });
    }

    // Blog Pillar Articles (High SEO Priority)
    for (const post of mockPosts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug.current}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: 'weekly',
        priority: post.isFeatured ? 0.95 : 0.85,
      });
    }

    // Formations
    for (const formation of mockFormations) {
      entries.push({
        url: `${BASE_URL}/${locale}/formations/${formation.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

  return entries;
}
