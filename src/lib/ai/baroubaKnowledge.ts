// Barouba Group Official Knowledge Base
// Source de vérité absolue pour l'Assistant IA & le Moteur Déterministe

export interface KnowledgeItem {
  id: string;
  category: 'services' | 'tarifs' | 'agence' | 'formations' | 'contact' | 'methodologie';
  keywords: string[];
  question: string;
  answer: string;
  ctaText?: string;
  ctaLink?: string;
}

export const BAROUBA_KNOWLEDGE: KnowledgeItem[] = [
  {
    id: 'presentation-agence',
    category: 'agence',
    keywords: ['qui', 'êtes-vous', 'agence', 'barouba', 'group', 'présentation', 'société', 'ouagadougou', 'burkina', 'sarl'],
    question: "Qui est BAROUBA GROUP ?",
    answer: "BAROUBA INTERNATIONAL GROUP est une SARL d'ingénierie numérique et de stratégie digitale basée à Ouagadougou, au Burkina Faso. Nous concevons des plateformes web haute performance en Next.js, pilotons la communication digitale et le Community Management d'entreprises, orchestrons l'achat publicitaire Meta et TikTok Ads, déployons des tunnels de vente WhatsApp et intégrons des agents IA pour automatiser les processus métier.",
    ctaText: "Découvrir nos services",
    ctaLink: "/services"
  },
  {
    id: 'services-liste',
    category: 'services',
    keywords: ['services', 'offres', 'prestations', 'que faites-vous', 'proposez', 'solutions', 'domaines'],
    question: "Quels sont les services proposés par BAROUBA GROUP ?",
    answer: "BAROUBA GROUP intervient sur 8 pôles d'expertise majeurs :\n1. Communication Digitale & Community Management (gestion professionnelle de pages, modération 7j/7, création de Reels/TikTok)\n2. Développement Web & Plateformes Next.js 16 haute performance\n3. Acquisition & Publicité Payante (Media Buying Meta & TikTok Ads)\n4. Tunnels de Vente & Vente Conversationnelle WhatsApp\n5. Automatisation Métier & Agents IA Autonomes\n6. E-Commerce & Expansion Sous-Régionale (Cash on Delivery)\n7. Formations & Accompagnement aux Métiers du Numérique\n8. Portails Institutionnels & Systèmes Critiques.",
    ctaText: "Voir tous nos services",
    ctaLink: "/services"
  },
  {
    id: 'tarifs-philosophie',
    category: 'tarifs',
    keywords: ['prix', 'tarif', 'tarifs', 'coût', 'combien', 'devis', 'chiffrage', 'budget', 'fcfa'],
    question: "Quels sont vos tarifs pour un projet ou une prestation ?",
    answer: "Chez BAROUBA GROUP, toutes nos prestations sont **100% sur mesure**. Nous ne proposons pas de grille tarifaire rigide ou générique, car chaque entreprise possède des besoins, une maturité et des objectifs spécifiques. Notre démarche commence toujours par un audit diagnostic gratuit. Nos propositions s'adaptent ensuite aux réalités économiques locales en Francs CFA (XOF) avec des modalités échelonnées transparentes.",
    ctaText: "Demander un devis sur mesure",
    ctaLink: "/contact"
  },
  {
    id: 'community-management',
    category: 'services',
    keywords: ['community', 'management', 'cm', 'page', 'facebook', 'tiktok', 'instagram', 'réseaux', 'sociaux', 'gestion', 'modération'],
    question: "Comment fonctionne votre service de Community Management ?",
    answer: "Notre pôle Communication Digitale refuse le simple postage d'images amateur. Nous appliquons une méthodologie rigoureuse en 5 étapes :\n• Audit de positionnement et benchmark concurrentiel à Ouagadougou\n• Matrice éditoriale à 4 piliers (Éducation, Preuve sociale, Vente directe, Culture de marque)\n• Production audiovisuelle mobile (Reels et TikTok verticaux captivants)\n• Modération active 7j/7 avec réponse sous 15 minutes et transfert vers WhatsApp\n• Rapports mensuels d'attribution et de ROI chiffré.",
    ctaText: "Voir l'offre Community Management",
    ctaLink: "/services/communication-digitale-community-management"
  },
  {
    id: 'developpement-web',
    category: 'services',
    keywords: ['site', 'web', 'internet', 'création', 'nextjs', 'react', 'vitrine', 'ecommerce', 'développement', 'application'],
    question: "Comment concevez-vous les sites web chez BAROUBA GROUP ?",
    answer: "Nous développons des plateformes web sur mesure avec Next.js et React, garantissant des temps de chargement instantanés (moins de 1,2 seconde), même sur les connexions mobiles 3G/4G au Burkina Faso. Chaque site intègre l'optimisation SEO locale pour Ouagadougou et Bobo-Dioulasso, la conformité mobile à 100%, et des passerelles directes de closing WhatsApp et paiements sécurisés.",
    ctaText: "Voir notre pôle Ingénierie Web",
    ctaLink: "/services/developpement-web-plateformes-nextjs"
  },
  {
    id: 'media-buying-ads',
    category: 'services',
    keywords: ['publicité', 'ads', 'facebook ads', 'tiktok ads', 'media buying', 'campagne', 'sponsorisé', 'acquisition', 'leads'],
    question: "Gérez-vous la publicité sponsorisée (Meta Ads, TikTok Ads) ?",
    answer: "Oui, notre pôle Acquisition & Media Buying conçoit et pilote des campagnes publicitaires ciblées avec fort retour sur investissement (ROAS). Nous prenons en charge la création des vidéos et visuels publicitaires persuasifs, le ciblage précis sur Ouagadougou, Bobo-Dioulasso et la sous-région, la gestion des budgets publicitaires et le tracking des conversions pour générer des prospects qualifiés prêts à acheter.",
    ctaText: "Voir l'offre Media Buying",
    ctaLink: "/services/acquisition-publicite-meta-tiktok-ads"
  },
  {
    id: 'tunnels-whatsapp',
    category: 'services',
    keywords: ['whatsapp', 'tunnel', 'vente', 'closing', 'automatisation whatsapp', 'wa.me', 'catalogue'],
    question: "Qu'est-ce qu'un tunnel de vente WhatsApp ?",
    answer: "Au Burkina Faso et en Afrique de l'Ouest, WhatsApp est le principal canal d'encaissement et de conversion. Nos tunnels de vente WhatsApp relient directement vos publicités et votre site web à des conversations pré-qualifiées sur WhatsApp, équipées de messages d'accueil instantanés, de catalogues interactifs, de scripts de closing persuasifs et d'une gestion fluide des commandes en espèces ou par Mobile Money.",
    ctaText: "Découvrir les Tunnels WhatsApp",
    ctaLink: "/services/tunnels-de-vente-whatsapp"
  },
  {
    id: 'formations-academy',
    category: 'formations',
    keywords: ['formation', 'formations', 'apprendre', 'cours', 'certifiant', 'academy', 'marketing digital', 'métiers'],
    question: "Proposez-vous des formations aux métiers du numérique ?",
    answer: "Absolument. BAROUBA ACADEMY propose des formations intensives et certifiantes axées sur la pratique réelle : Community Management & Social Selling, Media Buying Meta/TikTok, E-commerce africain, Intelligence Artificielle & Automatisation, Tunnels de Vente. Les formations se déroulent en présentiel à Ouagadougou et en ligne pour la sous-région et la diaspora.",
    ctaText: "Consulter le catalogue des formations",
    ctaLink: "/formations"
  },
  {
    id: 'localisation-contact',
    category: 'contact',
    keywords: ['où', 'adresse', 'siège', 'bureau', 'ouaga', 'ouagadougou', 'téléphone', 'contact', 'whatsapp', 'numéro'],
    question: "Où se trouvent vos bureaux et comment vous contacter ?",
    answer: "BAROUBA INTERNATIONAL GROUP SARL a son siège à Ouagadougou, au Burkina Faso, et intervient dans toute la sous-région (Côte d'Ivoire, Sénégal, Mali, Niger, Togo, Bénin) ainsi qu'auprès de la diaspora. Vous pouvez nous contacter directement sur WhatsApp pour une réponse en moins de 15 minutes en journée, ou via notre formulaire de contact en ligne.",
    ctaText: "Contacter l'agence",
    ctaLink: "/contact"
  },
  {
    id: 'delais-livraison',
    category: 'methodologie',
    keywords: ['délai', 'délais', 'temps', 'durée', 'combien de temps', 'livraison'],
    question: "Quels sont les délais d'exécution d'un projet ?",
    answer: "Les délais dépendent de l'envergure du projet :\n• Cadrage stratégique et plan d'action : sous 24h à 48h ouvrées\n• Mise en place d'un tunnel WhatsApp ou campagne publicitaire : 5 à 10 jours ouvrés\n• Prise en main et lancement d'un Community Management : 7 jours ouvrés\n• Création d'un site web vitrine ou e-commerce Next.js : 2 à 4 semaines\n• Portails complexes et systèmes sur-mesure : 4 à 8 semaines avec jalons de recette.",
    ctaText: "Planifier un cadrage gratuit",
    ctaLink: "/contact"
  }
];

export const SYSTEM_PROMPT_BAROUBA = `Tu es "Barouba AI Advisor", l'assistant d'ingénierie et de conseil stratégique officiel de BAROUBA INTERNATIONAL GROUP SARL.

CONTEXTE DE L'AGENCE :
- Forme juridique : BAROUBA INTERNATIONAL GROUP SARL, Société à Responsabilité Limitée de droit burkinabè régie par l'OHADA.
- Siège : Ouagadougou, Burkina Faso.
- Zone d'intervention : Burkina Faso (Ouagadougou, Bobo-Dioulasso, Koudougou), Côte d'Ivoire, Sénégal, Mali, Niger, Togo, Bénin et diaspora.
- Les 8 Pôles de Services :
  1. Communication Digitale & Community Management (gestion professionnelle de pages, modération 7j/7, Reels/TikTok)
  2. Conception Web & Next.js 16 (haute vitesse 3G/4G, mobile-first, SEO local)
  3. Acquisition & Media Buying (Meta Ads, TikTok Ads avec fort ROI)
  4. Tunnels de Vente & Social Selling WhatsApp (closing rapide, intégration Mobile Money)
  5. Automatisation Métier & Agents IA (gain de temps, workflows N8N, CRM)
  6. E-Commerce & Expansion Sous-Régionale (Cash on Delivery, réduction des retours)
  7. Formations & Accompagnement aux Métiers du Numérique (Barouba Academy certifiante)
  8. Portails Institutionnels & Systèmes Critiques (sécurité, conformité État)
- Tarification : 100% SUR MESURE. Pas de grille tarifaire fixe ou rigide affichée. Toujours recommander un cadrage ou audit stratégique gratuit préalable sur WhatsApp.

CONSIGNES STRICTES DE RÉPONSE :
1. ZÉRO INVENTION NI HALLUCINATION : Réponds STRICTEMENT en te basant sur les données ci-dessus. Si une question sort du périmètre de l'agence (ex: météo, politique générale, prix fantaisistes, code médical), réponds poliment que tu es spécialisé dans les solutions digitales de BAROUBA GROUP et invite l'utilisateur à contacter l'équipe technique sur WhatsApp.
2. Tonalité : Professionnelle, chaleureuse, précise, technologique et bienveillante.
3. Contexte local : Connaissance parfaite du marché burkinabè et ouest-africain (FCFA, Orange Money, Moov Money, réalités de connexion mobile).
4. Longueur : Réponses synthétiques, structurées avec des puces si nécessaire, sans verbiage inutile.
5. Appel à l'action : Termine régulièrement en suggérant d'échanger directement avec un consultant sur WhatsApp pour étudier leur situation concrète.`;
