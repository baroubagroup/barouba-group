import type { MetadataRoute } from 'next';
import { mockPosts, mockFormations } from '@/lib/data';
import { BOUTIQUE_PRODUCTS } from '@/lib/boutiqueData';
import { getAllSeoArticlesList } from '@/lib/seoArticles';
import { getAllB2bCombos } from '@/lib/solutionsData';
import { getAllFlatMetierCombos } from '@/lib/flatPseoData';
import { 
  TERRITORY_COUNTRIES, 
  TERRITORY_CITIES 
} from '@/lib/territoriesData';

const BASE_URL = 'https://www.baroubagroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/marketing-digital',
    '/communication-digitale',
    '/publicite-facebook',
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
    '/sako-barou',
    '/contact',
    '/cgv',
    '/politique-de-confidentialite',
  ];

  const entries: MetadataRoute.Sitemap = [];
  const seoArticles = getAllSeoArticlesList();

  // 1. Static Pages
  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' || page === '/blog' || page === '/devis' ? 'daily' : 'weekly',
      priority: page === '' || page === '/marketing-digital' || page === '/communication-digitale' || page === '/publicite-facebook' ? 1.0 : page.startsWith('/services/') || page === '/devis' ? 0.95 : 0.85,
    });
  }

  // 2. Boutique Digital Products
  for (const product of BOUTIQUE_PRODUCTS) {
    entries.push({
      url: `${BASE_URL}/boutique/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // 3. Formations Hub
  for (const formation of mockFormations) {
    entries.push({
      url: `${BASE_URL}/formations/${formation.slug.current}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  }

  // 4. Featured Core Blog Posts
  for (const post of mockPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug.current}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  }

  // 5. Territorial Authority Hubs (Hub + 12 Countries + 54 Cities)
  entries.push({
    url: `${BASE_URL}/territoires`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  for (const country of TERRITORY_COUNTRIES) {
    entries.push({
      url: `${BASE_URL}/territoires/${country.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  for (const city of TERRITORY_CITIES) {
    entries.push({
      url: `${BASE_URL}/territoires/${city.countrySlug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // 6. FLAT PROGRAMMATIC METIERS & FORMATIONS (858 URLs — Direct at Root)
  // Format: https://www.baroubagroup.com/[metier]-[ville]
  for (const metier of getAllFlatMetierCombos()) {
    entries.push({
      url: `${BASE_URL}/${metier.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  }

  // 7. FLAT B2B SECTOR SOLUTIONS & PRICING MATRIX (1,980 URLs — Direct at Root)
  // Format: https://www.baroubagroup.com/site-web-pour-[secteur]-[ville]
  // Format: https://www.baroubagroup.com/prix-site-web-[secteur]-[ville]
  for (const b2b of getAllB2bCombos()) {
    entries.push({
      url: `${BASE_URL}/${b2b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  }

  // 8. Complete Encyclopedic Knowledge Base (3,045 Articles: 51 High-Authority Pillars + 2,994 Semantic Satellites)
  for (const item of seoArticles) {
    entries.push({
      url: `${BASE_URL}/blog/${item.slug}`,
      lastModified: new Date(item.date),
      changeFrequency: item.isPillar ? 'weekly' : 'monthly',
      priority: item.isPillar ? 0.95 : 0.8,
    });
  }

  return entries;
}
