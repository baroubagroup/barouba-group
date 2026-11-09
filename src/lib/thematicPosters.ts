/**
 * Module d'attribution intelligente des 10 Affiches Officielles BAROUBA GROUP
 * Pour OpenGraph (WhatsApp, Facebook, Twitter, LinkedIn), Google Images & Hero Articles
 */

export interface ThematicPoster {
  id: number;
  theme: string;
  headline: string;
  src: string;
  ogSrc: string;
  width: number;
  height: number;
  alt: string;
  keywords: string[];
}

export const THEMATIC_POSTERS: Record<number, ThematicPoster> = {
  1: {
    id: 1,
    theme: 'Communication Digitale & Réseaux Sociaux',
    headline: 'COMMUNICATION DIGITALE 360°',
    src: '/images/affiches/affiche-01-communication-digitale-reseaux-sociaux-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-01-communication-digitale-reseaux-sociaux-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Communication Digitale, Community Management 7j/7 et Visibilité au Burkina Faso',
    keywords: [
      'reseaux-sociaux', 'community-management', 'facebook', 'instagram', 'tiktok',
      'social-media', 'communication-digitale', 'visibilite', 'influence', 'moderation',
      'page-facebook', 'compte-tiktok', 'reels', 'publications'
    ],
  },
  2: {
    id: 2,
    theme: 'Ingénierie Web & Plateformes Next.js 16',
    headline: 'VOTRE SITE WEB ULTRA-RAPIDE',
    src: '/images/affiches/affiche-02-developpement-web-plateforme-nextjs-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-02-developpement-web-plateforme-nextjs-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Création de Sites Web et Plateformes Métiers Next.js ultra-rapides au Burkina Faso',
    keywords: [
      'site-web', 'creation-site', 'developpement-web', 'nextjs', 'react', 'plateforme-web',
      'vitrine', 'application-web', 'vitesse-web', 'nom-de-domaine', 'developpeur', 'site-internet',
      'hebergement', 'seo-technique'
    ],
  },
  3: {
    id: 3,
    theme: 'Publicité & Acquisition Meta & TikTok Ads',
    headline: 'MULTIPLIEZ VOS VENTES EN LIGNE',
    src: '/images/affiches/affiche-03-publicite-facebook-meta-ads-burkina-faso.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-03-publicite-facebook-meta-ads-burkina-faso-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Publicité Meta Ads, TikTok Ads et Acquisition Rentable à Ouagadougou et Bobo-Dioulasso',
    keywords: [
      'publicite', 'meta-ads', 'facebook-ads', 'tiktok-ads', 'google-ads', 'budget-publicitaire',
      'roas', 'acquisition', 'campagne-ads', 'media-buyer', 'sponsorise', 'sponsoriser', 'visibilite-payante'
    ],
  },
  4: {
    id: 4,
    theme: 'Tunnels de Vente Hybrides & Closing WhatsApp',
    headline: 'FERMETURE DE VENTES SUR WHATSAPP',
    src: '/images/affiches/affiche-04-tunnel-de-vente-fermeture-whatsapp-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-04-tunnel-de-vente-fermeture-whatsapp-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Tunnels de Vente Hybrides, Scripts de Closing et Conversion WhatsApp au Sahel',
    keywords: [
      'whatsapp', 'tunnel-de-vente', 'closing', 'relance', 'vente-whatsapp', 'conversion',
      'prospects', 'whatsapp-business', 'script-vente', 'fermeture', 'leads'
    ],
  },
  5: {
    id: 5,
    theme: 'Intelligence Artificielle & Automatisation 24/7',
    headline: "L'INTELLIGENCE ARTIFICIELLE AU BURKINA",
    src: '/images/affiches/affiche-05-intelligence-artificielle-agents-whatsapp-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-05-intelligence-artificielle-agents-whatsapp-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Agents IA, Automatisation Métier et Intégration WhatsApp Cloud 24/7',
    keywords: [
      'intelligence-artificielle', 'ia', 'chatgpt', 'agent-ia', 'automatisation',
      'bot-whatsapp', 'workflows', 'prompt', 'deepseek', 'llm', 'robots', 'recherche-de-documents'
    ],
  },
  6: {
    id: 6,
    theme: 'Formations Certifiantes & BAROUBA ACADEMY',
    headline: 'FORMEZ-VOUS AUX MÉTIERS DU FUTUR',
    src: '/images/affiches/affiche-06-formation-certifiante-marketing-digital-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-06-formation-certifiante-marketing-digital-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA ACADEMY : Formations Pratiques Certifiantes en Marketing Digital, IA et E-Commerce',
    keywords: [
      'formation', 'academie', 'academy', 'apprendre', 'certification', 'cours',
      'etudiant', 'diplome', 'coaching', 'mentorat', 'certificat'
    ],
  },
  7: {
    id: 7,
    theme: 'E-Commerce & Expansion Commerciale',
    headline: 'VENDEZ PARTOUT AU BURKINA',
    src: '/images/affiches/affiche-07-ecommerce-vente-en-ligne-logistique-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-07-ecommerce-vente-en-ligne-logistique-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Boutiques E-Commerce, Vente en Ligne et Logistique au Burkina Faso',
    keywords: [
      'ecommerce', 'e-commerce', 'boutique-en-ligne', 'livraison', 'stock', 'panier',
      'paiement-en-ligne', 'mobile-money', 'boutique-whatsapp', 'coursier', 'vente-en-ligne'
    ],
  },
  8: {
    id: 8,
    theme: 'Portails Institutionnels & Systèmes Critiques',
    headline: 'SÉCURITÉ & PERFORMANCE ABSOLUE',
    src: '/images/affiches/affiche-08-systemes-critiques-portails-entreprises-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-08-systemes-critiques-portails-entreprises-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Portails Sécurisés, Systèmes d’Information Critiques et Conformité CIL/OHADA',
    keywords: [
      'systemes-critiques', 'portail', 'dsi', 'securite', 'cybersecurite', 'chiffrement',
      'conformite', 'cil', 'ohada', 'serveur', 'haute-disponibilite', 'gouvernance', 'audit'
    ],
  },
  9: {
    id: 9,
    theme: 'Solutions Digitales Métiers & PME',
    headline: 'DIGITALISEZ VOTRE ENTREPRISE',
    src: '/images/affiches/affiche-09-solutions-digitales-entreprises-pme-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-09-solutions-digitales-entreprises-pme-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Logiciels Métiers pour Cliniques, Boutiques, Ateliers, Quincailleries et PME',
    keywords: [
      'pressing', 'couture', 'clinique', 'medical', 'quincaillerie', 'superette',
      'alimentation', 'pme', 'restaurant', 'boutique', 'metier', 'facturation',
      'recus-thermiques', 'gestion-de-stock', 'logiciel-de-caisse', 'atelier'
    ],
  },
  10: {
    id: 10,
    theme: 'Cabinet Technologique BAROUBA GROUP (Officiel)',
    headline: 'LE CABINET TECHNOLOGIQUE N°1',
    src: '/images/affiches/affiche-10-barouba-group-cabinet-technologique-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-10-barouba-group-cabinet-technologique-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Cabinet N°1 du Marketing Digital, Web & IA au Burkina Faso',
    keywords: [
      'barouba', 'barouba-group', 'cabinet', 'technologie', 'transformation',
      'strategie', 'agence', 'sako', 'entreprise'
    ],
  },
};

/**
 * Associe intelligemment un article à l'une des 10 affiches officielles
 */
export function getThematicPoster(postOrSlug: {
  slug?: { current: string } | string;
  category?: { title?: string; slug?: string | { current: string } } | string | any;
  metaKeywords?: string[];
  title?: string;
  excerpt?: string;
  [key: string]: any;
}): ThematicPoster {
  const rawSlug = typeof postOrSlug.slug === 'object' ? postOrSlug.slug?.current : postOrSlug.slug || '';
  const rawCategory = typeof postOrSlug.category === 'object' ? postOrSlug.category?.title || '' : postOrSlug.category || '';
  const textPool = [
    rawSlug,
    rawCategory,
    postOrSlug.title || '',
    postOrSlug.excerpt || '',
    ...(postOrSlug.metaKeywords || []),
  ].join(' ').toLowerCase();

  // 1. Priorité aux cas spécifiques PME Métiers (Pôle 09) : pressing, couture, clinique, etc.
  for (const kw of THEMATIC_POSTERS[9].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[9];
  }

  // 2. Priorité IA (Pôle 05)
  for (const kw of THEMATIC_POSTERS[5].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[5];
  }

  // 3. Priorité WhatsApp & Tunnels (Pôle 04)
  for (const kw of THEMATIC_POSTERS[4].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[4];
  }

  // 4. Priorité Publicité Ads (Pôle 03)
  for (const kw of THEMATIC_POSTERS[3].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[3];
  }

  // 5. Priorité Création Web & Next.js (Pôle 02)
  for (const kw of THEMATIC_POSTERS[2].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[2];
  }

  // 6. Priorité Formation & Academy (Pôle 06)
  for (const kw of THEMATIC_POSTERS[6].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[6];
  }

  // 7. Priorité E-Commerce (Pôle 07)
  for (const kw of THEMATIC_POSTERS[7].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[7];
  }

  // 8. Priorité Systèmes Critiques & Portails (Pôle 08)
  for (const kw of THEMATIC_POSTERS[8].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[8];
  }

  // 9. Priorité Réseaux Sociaux & CM (Pôle 01)
  for (const kw of THEMATIC_POSTERS[1].keywords) {
    if (textPool.includes(kw)) return THEMATIC_POSTERS[1];
  }

  // 10. Fallback Institutionnel BAROUBA GROUP (Pôle 10)
  return THEMATIC_POSTERS[10];
}
