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
  patterns: RegExp[];
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
    patterns: [
      /community[-\s]management/i,
      /gestion[-\s]de[-\s]pages/i,
      /r[eé]seaux[-\s]sociaux/i,
      /social[-\s]media/i,
      /communication[-\s]digitale/i,
      /mod[eé]ration/i,
      /e[-\s]?r[eé]putation/i,
      /bad[-\s]buzz/i,
      /influence/i,
      /visibilit[eé]/i,
      /page[-\s]facebook/i,
      /compte[-\s]tiktok/i,
    ],
  },
  2: {
    id: 2,
    theme: 'Ingénierie Web, SEO & Plateformes Next.js 16',
    headline: 'VOTRE SITE WEB ULTRA-RAPIDE',
    src: '/images/affiches/affiche-02-developpement-web-plateforme-nextjs-burkina.webp',
    ogSrc: 'https://www.baroubagroup.com/images/affiches/affiche-02-developpement-web-plateforme-nextjs-burkina-og.jpg',
    width: 1920,
    height: 1072,
    alt: 'BAROUBA GROUP : Création de Sites Web, SEO et Plateformes Métiers Next.js au Burkina Faso',
    patterns: [
      /cr[eé]ation[-\s]site/i,
      /site[-\s]web/i,
      /site[-\s]internet/i,
      /d[eé]veloppement[-\s]web/i,
      /plateforme[-\s]web/i,
      /next\.?js/i,
      /r[eé]f[eé]rencement/i,
      /\bseo\b/i,
      /google[-\s]maps/i,
      /google[-\s]my[-\s]business/i,
      /nom[-\s]de[-\s]domaine/i,
      /h[eé]bergement/i,
      /application[-\s]web/i,
      /d[eé]veloppeur/i,
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
    patterns: [
      /publicit[eé]/i,
      /m[eé]dia[-\s]buying/i,
      /meta[-\s]ads/i,
      /facebook[-\s]ads/i,
      /tiktok[-\s]ads/i,
      /google[-\s]ads/i,
      /budget[-\s]publicitaire/i,
      /\broas\b/i,
      /acquisition/i,
      /campagne[-\s]ads/i,
      /sponsoris/i,
      /achat[-\s]m[eé]dia/i,
      /tracking[-\s]capi/i,
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
    patterns: [
      /tunnel[-\s]de[-\s]vente/i,
      /tunnels[-\s]de[-\s]vente/i,
      /closing/i,
      /conversion/i,
      /\bcro\b/i,
      /taux[-\s]de[-\s]conversion/i,
      /vente[-\s]whatsapp/i,
      /script[-\s]de[-\s]vente/i,
      /whatsapp[-\s]business/i,
      /pages?[-\s]de[-\s]vente/i,
      /copywriting/i,
      /prospects/i,
      /relance/i,
      /fermeture/i,
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
    patterns: [
      /intelligence[-\s]artificielle/i,
      /\bagents?[-\s]ia\b/i,
      /\bia\b(?![-_\w])/i,
      /chatgpt/i,
      /deepseek/i,
      /\bllm\b/i,
      /automatisation/i,
      /bot[-\s]whatsapp/i,
      /workflows/i,
      /prompt[-\s]engineering/i,
      /no[-\s]code/i,
      /low[-\s]code/i,
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
    patterns: [
      /\bformations?\b/i,
      /acad[eé]mie/i,
      /academy/i,
      /certification/i,
      /certifiante/i,
      /\bcours\b/i,
      /\bcoaching\b/i,
      /mentorat/i,
      /apprendre/i,
      /dipl[oô]me/i,
      /m[eé]tiers[-\s]du[-\s]num[eé]rique/i,
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
    patterns: [
      /e[-\s]?commerce/i,
      /boutique[-\s]en[-\s]ligne/i,
      /vente[-\s]en[-\s]ligne/i,
      /panier[-\s]d['’]achat/i,
      /paiement[-\s]en[-\s]ligne/i,
      /livraison/i,
      /coursier/i,
      /gestion[-\s]des[-\s]stocks/i,
      /catalogue[-\s]produits/i,
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
    patterns: [
      /syst[eé]mes?[-\s]critiques?/i,
      /portail/i,
      /\bdsi\b/i,
      /cybers[eé]curit[eé]/i,
      /chiffrement/i,
      /\bcil\b/i,
      /\bohada\b/i,
      /haute[-\s]disponibilit[eé]/i,
      /r[eé]seaux[-\s]informatiques/i,
      /vid[eé]osurveillance/i,
      /c[aâ]blage/i,
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
    patterns: [
      /pressing/i,
      /couture/i,
      /clinique/i,
      /m[eé]dical/i,
      /quincaillerie/i,
      /sup[eé]rette/i,
      /alimentation[-\s]g[eé]n[eé]rale/i,
      /restaurant/i,
      /re[çc]us?[-\s]thermiques/i,
      /gestion[-\s]commerciale/i,
      /logiciel[-\s]de[-\s]caisse/i,
      /pos[-\s]tactile/i,
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
    patterns: [
      /barouba/i,
      /sako/i,
      /cabinet/i,
      /transformation[-\s]digitale/i,
      /strat[eé]gie/i,
      /gouvernance/i,
    ],
  },
};

/**
 * Associe intelligemment un article à l'une des 10 affiches officielles
 * en utilisant des expressions régulières strictes (évite les faux positifs sur 'ia')
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
  
  // Priorité absolue au slug et au titre
  const primaryText = `${rawSlug} ${postOrSlug.title || ''}`;
  const fullText = [
    rawSlug,
    rawCategory,
    postOrSlug.title || '',
    postOrSlug.excerpt || '',
    ...(postOrSlug.metaKeywords || []),
  ].join(' ');

  // 1. Barouba spécifique (Histoire, identité, gouvernance) -> Pôle 10
  if (/barouba[-\s]histoire|barouba$|qui[-\s]est[-\s]barouba/i.test(primaryText)) {
    return THEMATIC_POSTERS[10];
  }

  // 2. Tunnels de Vente & CRO -> Pôle 04 (AVANT les autres pour ne pas être intercepté !)
  for (const p of THEMATIC_POSTERS[4].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[4];
  }

  // 3. Publicité en Ligne, Media Buying & Ads -> Pôle 03
  for (const p of THEMATIC_POSTERS[3].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[3];
  }

  // 4. Ingénierie Web & SEO (Référencement) -> Pôle 02
  for (const p of THEMATIC_POSTERS[2].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[2];
  }

  // 5. Métiers PME réels (Pressing, Couture, Clinique, Caisse) -> Pôle 09
  for (const p of THEMATIC_POSTERS[9].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[9];
  }

  // 6. E-Commerce & Boutiques -> Pôle 07
  for (const p of THEMATIC_POSTERS[7].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[7];
  }

  // 7. Intelligence Artificielle STRICTE (IA isolée, ChatGPT, Agents) -> Pôle 05
  for (const p of THEMATIC_POSTERS[5].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[5];
  }

  // 8. Formations & Certification -> Pôle 06
  for (const p of THEMATIC_POSTERS[6].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[6];
  }

  // 9. Communication Digitale & Réseaux Sociaux -> Pôle 01
  for (const p of THEMATIC_POSTERS[1].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[1];
  }

  // 10. Systèmes Critiques & Portails DSI -> Pôle 08
  for (const p of THEMATIC_POSTERS[8].patterns) {
    if (p.test(primaryText)) return THEMATIC_POSTERS[8];
  }

  // Second passage sur fullText si primaryText n'a rien donné
  for (const p of THEMATIC_POSTERS[4].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[4];
  for (const p of THEMATIC_POSTERS[3].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[3];
  for (const p of THEMATIC_POSTERS[2].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[2];
  for (const p of THEMATIC_POSTERS[9].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[9];
  for (const p of THEMATIC_POSTERS[7].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[7];
  for (const p of THEMATIC_POSTERS[5].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[5];
  for (const p of THEMATIC_POSTERS[6].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[6];
  for (const p of THEMATIC_POSTERS[1].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[1];
  for (const p of THEMATIC_POSTERS[8].patterns) if (p.test(fullText)) return THEMATIC_POSTERS[8];

  // Fallback Cabinet Technologique N°1
  return THEMATIC_POSTERS[10];
}
