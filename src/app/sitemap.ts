import type { MetadataRoute } from 'next';
import { mockPosts, mockFormations } from '@/lib/data';
import { BOUTIQUE_PRODUCTS } from '@/lib/boutiqueData';
import { getAllSeoArticlesList } from '@/lib/seoArticles';

const BASE_URL = 'https://www.baroubagroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr'];

  const staticPages = [
    '',
    '/services',
    '/services/communication-digitale-community-management',
    '/services/developpement-web-plateformes-nextjs',
    '/services/acquisition-publicite-meta-tiktok-ads',
    '/services/tunnels-de-vente-whatsapp',
    '/services/agents-ia-automatisation-metier',
    '/services/ecommerce-expansion-sous-regionale',
    '/services/portails-institutionnels-systemes-critiques',
    '/formations',
    '/boutique',
    '/devis',
    '/portfolio',
    '/blog',
    '/a-propos',
    '/contact',
    '/cgv',
  ];

  const entries: MetadataRoute.Sitemap = [];
  const seoArticles = getAllSeoArticlesList();

  for (const locale of locales) {
    // 1. Static Pages
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' || page === '/blog' || page === '/devis' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page.startsWith('/services/') || page === '/devis' ? 0.95 : 0.85,
      });
    }

    // 2. Boutique Digital Products
    for (const product of BOUTIQUE_PRODUCTS) {
      entries.push({
        url: `${BASE_URL}/${locale}/boutique/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    }

    // 3. Formations
    for (const formation of mockFormations) {
      entries.push({
        url: `${BASE_URL}/${locale}/formations/${formation.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }

    // 4. Featured Core Blog Posts
    for (const post of mockPosts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug.current}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.95,
      });
    }
  }

  // 5. Complete Encyclopedic Knowledge Base (3,045 Articles: 51 High-Authority Pillars + 2,994 Semantic Satellites)
  for (const item of seoArticles) {
    entries.push({
      url: `${BASE_URL}/fr/blog/${item.slug}`,
      lastModified: new Date(item.date),
      changeFrequency: item.isPillar ? 'weekly' : 'monthly',
      priority: item.isPillar ? 0.95 : 0.8,
    });
  }

  return entries;
}
