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
const RELEASE_DATE_CORE = new Date('2026-11-08T17:00:00.000Z');
const RELEASE_DATE_PSEO = new Date('2026-11-08T16:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/marketing-digital',
    '/communication-digitale',
    '/publicite-facebook',
    '/solutions',
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
    '/politique-de-confidentialite',
  ];

  const entries: MetadataRoute.Sitemap = [];
  const seoArticles = getAllSeoArticlesList();

  // Helper for international alternates
  const makeAlternates = (url: string) => ({
    languages: {
      fr: url,
      'x-default': url,
    },
  });

  // 1. Static Pages & Pillar Hubs
  for (const page of staticPages) {
    const isPillar = page === '' || page === '/marketing-digital' || page === '/communication-digitale' || page === '/publicite-facebook';
    const isServiceOrLead = page.startsWith('/services/') || page === '/devis' || page === '/solutions';
    const url = `${BASE_URL}${page}`;

    entries.push({
      url,
      lastModified: RELEASE_DATE_CORE,
      changeFrequency: isPillar || page === '/blog' || page === '/devis' ? 'daily' : 'weekly',
      priority: isPillar ? 1.0 : isServiceOrLead ? 0.95 : 0.85,
      alternates: makeAlternates(url),
    });
  }

  // 2. Boutique Digital Products
  for (const product of BOUTIQUE_PRODUCTS) {
    const url = `${BASE_URL}/boutique/${product.slug}`;
    entries.push({
      url,
      lastModified: RELEASE_DATE_CORE,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: makeAlternates(url),
    });
  }

  // 3. Formations Hub
  for (const formation of mockFormations) {
    const url = `${BASE_URL}/formations/${formation.slug.current}`;
    entries.push({
      url,
      lastModified: RELEASE_DATE_CORE,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: makeAlternates(url),
    });
  }

  // 4. Featured Core Blog Posts
  for (const post of mockPosts) {
    const url = `${BASE_URL}/blog/${post.slug.current}`;
    entries.push({
      url,
      lastModified: new Date(post.updatedAt || post.publishedAt || RELEASE_DATE_CORE),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: makeAlternates(url),
    });
  }

  // 5. Territorial Authority Hubs (Hub + 12 Countries + 54 Cities)
  const territoiresHubUrl = `${BASE_URL}/territoires`;
  entries.push({
    url: territoiresHubUrl,
    lastModified: RELEASE_DATE_CORE,
    changeFrequency: 'weekly',
    priority: 0.9,
    alternates: makeAlternates(territoiresHubUrl),
  });

  for (const country of TERRITORY_COUNTRIES) {
    const url = `${BASE_URL}/territoires/${country.slug}`;
    entries.push({
      url,
      lastModified: RELEASE_DATE_CORE,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: makeAlternates(url),
    });
  }

  for (const city of TERRITORY_CITIES) {
    const url = `${BASE_URL}/territoires/${city.countrySlug}/${city.slug}`;
    entries.push({
      url,
      lastModified: RELEASE_DATE_CORE,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: makeAlternates(url),
    });
  }

  // 6. FLAT PROGRAMMATIC METIERS & FORMATIONS (858 URLs — Direct at Root)
  // Format: https://www.baroubagroup.com/[metier]-[ville]
  for (const metier of getAllFlatMetierCombos()) {
    const url = `${BASE_URL}/${metier.slug}`;
    // Priority 0.95 for strategic Facebook Ads & top tiers, 0.90 for others
    const isSpecial = metier.slug.includes('publicite-facebook') || metier.slug.includes('campagne-') || metier.slug.includes('ciblage-');
    entries.push({
      url,
      lastModified: RELEASE_DATE_PSEO,
      changeFrequency: isSpecial ? 'daily' : 'weekly',
      priority: isSpecial ? 0.95 : 0.90,
      alternates: makeAlternates(url),
    });
  }

  // 7. FLAT B2B SECTOR SOLUTIONS & PRICING MATRIX (1,980 URLs — Direct at Root)
  // Format: https://www.baroubagroup.com/site-web-pour-[secteur]-[ville]
  // Format: https://www.baroubagroup.com/prix-site-web-[secteur]-[ville]
  for (const b2b of getAllB2bCombos()) {
    const url = `${BASE_URL}/${b2b.slug}`;
    entries.push({
      url,
      lastModified: RELEASE_DATE_PSEO,
      changeFrequency: 'weekly',
      priority: 0.90,
      alternates: makeAlternates(url),
    });
  }

  // 8. Complete Encyclopedic Knowledge Base (3,045 Articles: 51 High-Authority Pillars + 2,994 Semantic Satellites)
  for (const item of seoArticles) {
    const url = `${BASE_URL}/blog/${item.slug}`;
    entries.push({
      url,
      lastModified: new Date(item.date),
      changeFrequency: item.isPillar ? 'weekly' : 'monthly',
      priority: item.isPillar ? 0.95 : 0.80,
      alternates: makeAlternates(url),
    });
  }

  return entries;
}
