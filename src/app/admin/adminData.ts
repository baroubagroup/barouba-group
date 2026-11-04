// Données officielles d'administration et CRM — BAROUBA GROUP SARL

export interface Inscription {
  id: string;
  name: string;
  email: string;
  phone: string;
  formation: string;
  date: string;
  status: 'nouveau' | 'contacte' | 'inscrit' | 'annule';
  city?: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  date: string;
  status: 'nouveau' | 'lu' | 'repondu';
  city?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  status: 'publie' | 'brouillon';
  readTime: number;
}

export interface Formation {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  level: string;
  isAvailable: boolean;
}

export interface Produit {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  isFeatured: boolean;
}

export interface Projet {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
}

// Inscriptions officielles aux formations
export const demoInscriptions: Inscription[] = [
  { id: 'ins-1', name: 'Moussa Traoré', email: 'moussa.traore@gmail.com', phone: '+226 70 23 45 67', formation: 'Intelligence Artificielle & Création Visuelle Publicitaire', date: '2026-02-18', status: 'inscrit', city: 'Ouagadougou' },
  { id: 'ins-2', name: 'Fatou Ouédraogo', email: 'fatou.oued@agrico-faso.bf', phone: '+226 76 89 12 34', formation: 'Community Management & Réseaux Sociaux', date: '2026-02-20', status: 'nouveau', city: 'Bobo-Dioulasso' },
  { id: 'ins-3', name: 'Ibrahima Sawadogo', email: 'sawadogo.ib@sahel-logistics.com', phone: '+226 65 43 21 09', formation: 'Marketing Digital & Media Buying (Meta & TikTok)', date: '2026-02-19', status: 'contacte', city: 'Koudougou' },
  { id: 'ins-4', name: 'Aïssata Koné', email: 'kone.aissata@ci-transit.ci', phone: '+225 07 12 34 56 78', formation: 'E-Commerce & Vente en Ligne Afrique', date: '2026-02-21', status: 'nouveau', city: 'Abidjan' },
  { id: 'ins-5', name: 'Abdoulaye Diallo', email: 'abdou.diallo@banco.bf', phone: '+226 78 90 12 45', formation: 'Tunnels de Vente & Psychologie CRO', date: '2026-02-17', status: 'inscrit', city: 'Ouagadougou' },
  { id: 'ins-6', name: 'Mariam Zongo', email: 'mariam.zongo@faso-mode.com', phone: '+226 60 11 22 33', formation: 'Accompagnement Métiers du Numérique Sur-Mesure', date: '2026-02-22', status: 'contacte', city: 'Ouaga 2000' },
];

// Messages reçus via le formulaire de contact officiel
export const demoMessages: Message[] = [
  { 
    id: 'msg-1', 
    name: 'Boubacar Kaboré', 
    email: 'b.kabore@sahel-transit.bf', 
    phone: '+226 70 88 99 00', 
    subject: 'Déploiement Plateforme Web Next.js & Tracking CAPI', 
    message: 'Bonjour BAROUBA GROUP, notre société de transit à Ouagadougou souhaite refondre sa plateforme web en Next.js 16 avec tracking CAPI pour nos campagnes publicitaires. Pouvons-nous caler un cadrage opérationnel sur WhatsApp ?', 
    date: '2026-02-22', 
    status: 'nouveau',
    city: 'Ouagadougou'
  },
  { 
    id: 'msg-2', 
    name: 'Aminata Sanou', 
    email: 'direction@polyclinique-esperance.bf', 
    phone: '+226 75 44 33 22',
    subject: 'Gestion Stratégique Réseaux Sociaux & Image de Marque', 
    message: 'Bonjour, nous souhaitons confier le Community Management et la création visuelle IA de notre clinique à Bobo-Dioulasso à votre équipe. Merci de nous transmettre vos formules d’accompagnement.', 
    date: '2026-02-21', 
    status: 'lu',
    city: 'Bobo-Dioulasso'
  },
  { 
    id: 'msg-3', 
    name: 'Christian Yao', 
    email: 'c.yao@abidjan-distribution.ci', 
    phone: '+225 05 67 89 01 23', 
    subject: 'Tunnel de Vente WhatsApp & E-Commerce Agroalimentaire', 
    message: 'Bonjour BAROUBA GROUP, nous distribuons des produits agroalimentaires en Côte d’Ivoire et nous souhaitons brancher un tunnel Next.js avec commande WhatsApp 1-clic et encaissement Orange/Wave.', 
    date: '2026-02-20', 
    status: 'repondu',
    city: 'Abidjan'
  },
];

// Catalogue des Formations d'Élite BAROUBA GROUP
export const demoFormations: Formation[] = [
  { id: 'f1', title: 'Community Management & Réseaux Sociaux', category: 'Gestion de Pages', price: '150 000 FCFA', duration: '4 semaines', level: 'Tous niveaux', isAvailable: true },
  { id: 'f2', title: 'Marketing Digital & Media Buying (Meta & TikTok)', category: 'Publicité Payante', price: '250 000 FCFA', duration: '6 semaines', level: 'Intermédiaire', isAvailable: true },
  { id: 'f3', title: 'E-Commerce & Vente en Ligne Afrique', category: 'Commerce Digital', price: '200 000 FCFA', duration: '4 semaines', level: 'Tous niveaux', isAvailable: true },
  { id: 'f4', title: 'Intelligence Artificielle & Création Visuelle Publicitaire', category: 'IA Générative', price: '300 000 FCFA', duration: '5 semaines', level: 'Tous niveaux', isAvailable: true },
  { id: 'f5', title: 'Tunnels de Vente & Psychologie CRO', category: 'Haute Conversion', price: '250 000 FCFA', duration: '4 semaines', level: 'Avancé', isAvailable: true },
  { id: 'f6', title: 'Accompagnement & Coaching Métiers du Numérique', category: 'Sur-Mesure', price: 'Sur Devis', duration: '3 mois', level: 'Dirigeants & PME', isAvailable: true },
];

// Articles piliers et guides SEO
export const demoBlog: BlogPost[] = [
  { id: '1', title: 'Guide Ultime : Dominer le Marché du Media Buying Meta & TikTok en Afrique de l’Ouest en 2026', excerpt: 'Comment générer un ROAS supérieur à 6 sur Ouagadougou et Abidjan malgré les restrictions iOS et la saturation des créatives publicitaires.', category: 'Media Buying & Ads', date: '2026-02-15', status: 'publie', readTime: 18 },
  { id: '2', title: 'Pourquoi Next.js 16 et le Passage en Caisse WhatsApp Écrasent WordPress et Shopify au Sahel', excerpt: 'Analyse comparative détaillée : vitesse mobile en 3G, conversion Cash-on-Delivery et synchronisation wa.me sans friction.', category: 'Développement Web', date: '2026-02-10', status: 'publie', readTime: 15 },
  { id: '3', title: 'L’Intelligence Artificielle Générative au Service des Marques Africaines : Révolutionner le Photoréalisme', excerpt: 'Comment calibrer Midjourney v6 et Flux pour sublimer les teints mélanodermes sahéliens et concevoir des mockups de classe mondiale.', category: 'Intelligence Artificielle', date: '2026-02-05', status: 'publie', readTime: 14 },
];

// Produits de la Boutique BAROUBA GROUP SARL
export const demoProduits: Produit[] = [
  { id: 'p1', title: 'Pack Tunnel E-Commerce Next.js 16 Haute Vente', description: 'Architecture Next.js 16 pré-configurée avec passage en caisse 1-clic et synchronisation WhatsApp instantanée.', price: '65 000 FCFA', category: 'Template', isFeatured: true },
  { id: 'p2', title: 'Barouba Prompt Engine 2026 — Arsenal IA & Prompts Maîtres', description: 'Plus de 350 prompts calibrés Midjourney v6, Flux et Claude pour photoréalisme sahélien et copywriting ouest-africain.', price: '30 000 FCFA', category: 'Outil IA', isFeatured: true },
  { id: 'p3', title: 'Kit Tracking Serveur CAPI Meta & TikTok (Anti-iOS14)', description: 'Scripts serveur Cloudflare Workers pour capturer 100% de vos conversions publicitaires sans aucune perte.', price: '50 000 FCFA', category: 'Tracking', isFeatured: true },
  { id: 'p4', title: 'Contrat Maintenance & Sécurité Cloud VIP', description: 'Surveillance proactive 24/7, sauvegardes redondées quotidiennes et assistance technique prioritaire sous 1h.', price: '85 000 FCFA/mois', category: 'Abonnement', isFeatured: false },
];

// Réalisations et études de cas
export const demoProjets: Projet[] = [
  { id: 'pr1', title: 'Sahel Agro-Business — Refonte E-Commerce & Tunnel WhatsApp', description: 'Plateforme Next.js 16 avec passage en caisse 1-clic et synchronisation automatique vers les livreurs à Ouagadougou (+340% de commandes).', category: 'Site Web', technologies: ['Next.js 16', 'TypeScript', 'WhatsApp API', 'Orange Money'] },
  { id: 'pr2', title: 'Cabinet d’Audit UEMOA — Portail Institutionnel Sécurisé', description: 'Portail corporate haute autorité avec espace client chiffré et prise de rendez-vous automatisée pour Ouagadougou, Bobo et Abidjan.', category: 'Application', technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'] },
  { id: 'pr3', title: 'Campagne Acquisition & Tracking CAPI — Cosmétiques Bio FASO', description: 'Mise en place de l’API de Conversions Cloudflare Workers et pilotage de 12M FCFA de budget publicitaire Meta & TikTok (ROAS 6.2x).', category: 'Media Buying', technologies: ['Meta CAPI', 'TikTok Pixel', 'Cloudflare Workers', 'Google Analytics 4'] },
];
