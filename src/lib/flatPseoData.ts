// FLAT PSEO ENGINE — BAROUBA GROUP
// Direct Flat URLs at Root: https://www.baroubagroup.com/[service]-[ville]
// Modeled for Maximum Google Search Intent Authority (Style Paul Maxime Dossou)

import { 
  TERRITORY_COUNTRIES, 
  TERRITORY_CITIES, 
  TerritoryCity, 
  TerritoryCountry,
  TerritoryService,
  TERRITORY_SERVICES,
  getCountryBySlug,
  getCityBySlug
} from './territoriesData';

export interface FlatMetierDeliverable {
  title: string;
  desc: string;
}

export interface FlatMetierFaq {
  question: string;
  answer: string;
}

export interface FlatMetierTemplate {
  prefix: string;
  name: string;
  shortTitle: string;
  badge: string;
  iconType: string;
  h1: string;
  hook: string;
  description: string;
  deliverables: FlatMetierDeliverable[];
  benefits: string[];
  faq: FlatMetierFaq[];
}

export const FLAT_METIERS: FlatMetierTemplate[] = [
  // 0. AGENCE DE MARKETING DIGITAL (CŒUR DE RECHERCHE NATIONALE)
  {
    prefix: 'agence-marketing-digital',
    name: 'Agence de Marketing Digital & Acquisition Performance',
    shortTitle: 'Agence Marketing Digital',
    badge: 'Cabinet N°1 Marketing Digital',
    iconType: 'trending-up',
    h1: 'Agence de Marketing Digital N°1 à {location}',
    hook: 'Propulsez votre chiffre d’affaires à {location} avec le leader du marketing digital au Burkina Faso : campagnes publicitaires Meta & TikTok à fort ROAS, tunnels WhatsApp automatisés, création web ultra-rapide et résultats contractuellement garantis.',
    description: "À {location}, les entreprises qui dominent leur marché ne se contentent plus de bricolage ou de publications aléatoires sur les réseaux sociaux. BAROUBA GROUP déploie un système d'ingénierie marketing complet conçu pour générer des flux ininterrompus de clients qualifiés : ciblage publicitaire chirurgical, community management d'autorité 7j/7, tunnels de vente WhatsApp et plateformes Next.js 16 se chargeant en moins de 0.8s. Sous la direction de Monsieur SAKO BAROU BEN OUMAR, chaque intervention est encadrée par un contrat officiel avec engagement de performance.",
    deliverables: [
      {
        title: 'Stratégie Multicanale 360° & Audit de Positionnement',
        desc: 'Diagnostic approfondi de votre marché à {location}, identification de vos avantages concurrentiels et feuille de route opérationnelle chiffrée.',
      },
      {
        title: 'Media Buying Haute Précision Meta & TikTok Ads',
        desc: 'Campagnes publicitaires rentabilisées, scripts vidéo percutants, tracking CAPI et scaling progressif orienté pur bénéfice net.',
      },
      {
        title: 'Tunnels WhatsApp Cloud API & Séquences de Closing',
        desc: 'Parcours d’achat direct en 1 clic connectant vos publicités à WhatsApp pour transformer les prospects en acheteurs sans friction.',
      },
      {
        title: 'Community Management & Visuels de Prestige 7j/7',
        desc: 'Animation quotidienne de vos pages Facebook, Instagram et LinkedIn avec une ligne éditoriale haut de gamme renforçant votre autorité.',
      },
    ],
    benefits: [
      'Statut de marque dominante et incontestée sur votre secteur à {location}',
      'Multiplication par 3 à 5 de votre retour sur investissement publicitaire (ROAS)',
      'Flux constant de prospects chauds orientés directement sur votre WhatsApp commercial',
      'Contrat de prestation officiel avec garanties juridiques et techniques fermes',
    ],
    faq: [
      {
        question: 'Pourquoi BAROUBA GROUP est-elle considérée comme la meilleure agence de marketing digital à {location} ?',
        answer: "Parce que nous combinons ingénierie logicielle Next.js de pointe, maîtrise chirurgicale du media buying africain, tunnels de vente WhatsApp exclusifs et une gouvernance éthique contractuellement engagée sous la direction de M. SAKO BAROU BEN OUMAR.",
      },
      {
        question: 'Quel retour sur investissement peut-on attendre de vos campagnes à {location} ?',
        answer: 'Nos stratégies visent un ROAS (retour sur dépenses publicitaires) moyen supérieur à 3.5x, en éliminant les dépenses superflues et en ciblant les acheteurs solvables de votre zone.',
      },
      {
        question: 'Combien de temps faut-il pour observer les premiers résultats concrets ?',
        answer: 'Nos premiers flux de prospects qualifiés arrivent généralement dans les 48 à 72 heures suivant le lancement des premières campagnes publicitaires et tunnels de vente.',
      },
    ],
  },

  // 00. SERVICES DE MARKETING DIGITAL GÉNÉRAL
  {
    prefix: 'marketing-digital',
    name: 'Marketing Digital Stratégique & Croissance Commerciale',
    shortTitle: 'Marketing Digital',
    badge: 'Ingénierie Marketing & Rentabilité',
    iconType: 'target',
    h1: 'Marketing Digital à {location} : Stratégies & Résultats Chiffrés',
    hook: 'Dominez les recherches Google, attirez des acheteurs qualifiés et automatisez vos ventes à {location} grâce à notre méthodologie d’ingénierie marketing éprouvée au Burkina Faso et en Afrique de l’Ouest.',
    description: "Le marketing digital à {location} exige une parfaite maîtrise des réalités locales : connexion internet mobile 3G/4G, prédominance absolue de WhatsApp et encaissements par Mobile Money (Orange Money, Moov Money, Wave). BAROUBA GROUP conçoit des écosystèmes marketing complets alliant acquisition payante, référencement naturel local, modération active et tunnels d’achat instantanés pour maximiser la rentabilité de chaque franc CFA investi.",
    deliverables: [
      {
        title: 'Génération Continue de Prospects Qualifiés (Leads B2B & B2C)',
        desc: 'Mise en place d’aimants à prospects et formulaires rapides captant les coordonnées d’acheteurs prêts à commander à {location}.',
      },
      {
        title: 'Campagnes Publicitaires Rentables Meta & TikTok Ads',
        desc: 'Création de visuels et vidéos captivants ciblant précisément votre clientèle locale et la diaspora burkinabè.',
      },
      {
        title: 'Parcours d’Achat Mobile Money & WhatsApp en 1 Clic',
        desc: 'Élimination des paniers abandonnés en guidant instantanément l’acheteur vers la confirmation et le règlement sécurisé.',
      },
      {
        title: 'Tableau de Bord de Pilotage & Tracking Analytique Précis',
        desc: 'Suivi transparent du coût par prospect (CPL), du coût d’acquisition client (CAC) et de vos marges nettes.',
      },
    ],
    benefits: [
      'Croissance prévisible et mesurable de votre chiffre d’affaires à {location}',
      'Zéro dépendance aux méthodes de vente artisanales ou au bouche-à-oreille passif',
      'Gain de temps massif pour votre équipe grâce aux automatisations commerciales',
      'Reporting transparent hebdomadaire et interlocuteur senior dédié',
    ],
    faq: [
      {
        question: 'Comment adapter le marketing digital aux spécificités de {location} ?',
        answer: 'En supprimant les formulaires complexes des sites occidentaux au profit de tunnels ultra-rapides (< 0.8s) reliés à WhatsApp et aux paiements Mobile Money locaux.',
      },
      {
        question: 'Quels sont les leviers de marketing digital les plus rentables au Burkina Faso ?',
        answer: 'Le trio gagnant au Sahel repose sur la publicité ciblée Meta Ads (Facebook/Instagram), le closing personnalisé sur WhatsApp et un référencement Google Maps / SEO local solide.',
      },
      {
        question: 'Quel budget consacrer au marketing digital pour une PME à {location} ?',
        answer: 'Nous construisons des plans évolutifs adaptés à votre trésorerie, avec des formules d’entrée permettant de générer des bénéfices réinvestissables dès le premier mois.',
      },
    ],
  },
  // 1. CRÉATION DE SITE WEB
  {
    prefix: 'creation-site-web',
    name: 'Création de Sites Web & Plateformes Métiers Next.js 16',
    shortTitle: 'Création de Site Web',
    badge: 'Ingénierie Web Haute Performance',
    iconType: 'globe',
    h1: 'Création de Site Web & Plateforme Next.js à {location}',
    hook: 'Développez une présence digitale dominante à {location} avec un site web Next.js 16 ultra-rapide (< 0.8s), optimisé pour Google et conçu pour convertir vos visiteurs en clients fidèles.',
    description: "À {location}, un site internet lent sur réseau mobile 3G/4G fait fuir plus de 60% de vos clients potentiels. BAROUBA GROUP conçoit des plateformes Next.js 16 sur-mesure combinant Server-Side Rendering (SSR), encaissement direct par Mobile Money (Orange Money, Moov, Wave) et référencement Google chirurgical taillé pour dominer les recherches à {location}.",
    deliverables: [
      {
        title: 'Architecture Next.js 16 & Vercel Edge Network',
        desc: 'Chargement en moins de 0.8s, note Google PageSpeed A+ et disponibilité 99.99% garantie sans ralentissement.',
      },
      {
        title: 'Balisage SEO Local Chirurgical & Schema.org',
        desc: 'Positionnement prioritaire sur les requêtes Google ciblées à {location} pour capter les prospects au moment de leur recherche.',
      },
      {
        title: 'Paiements Sécurisés Mobile Money & CB',
        desc: 'Intégration fluide Orange Money, Moov Money et Wave avec émission instantanée de reçus et notifications automatiques.',
      },
      {
        title: 'Design Afro-Tech Haute Couture & UX Mobile',
        desc: "Interface ergonomique et luxueuse reflétant le standing de votre entreprise, 100% optimisée pour les écrans de smartphones.",
      },
    ],
    benefits: [
      'Multiplication par 3 de votre taux de conversion visiteur-client',
      'Affichage instantané même en cas de réseau mobile faible à {location}',
      'Propriété intégrale du code source et accompagnement technique dédié',
      'Garantie contractuelle de livraison sous 10 à 21 jours ouvrés (Contrat SARL officiel)',
    ],
    faq: [
      {
        question: 'Pourquoi choisir Next.js plutôt que WordPress à {location} ?',
        answer: "Sur les réseaux mobiles d'Afrique de l'Ouest et Centrale, WordPress est souvent lourd et vulnérable. Next.js 16 précompile des pages ultra-légères qui se chargent instantanément, garantissant le meilleur score SEO sur Google.",
      },
      {
        question: 'Comment se déroule la collaboration à distance avec vos équipes ?',
        answer: 'BAROUBA GROUP combine cadrage digitalisé (visio, espace client, WhatsApp VIP) et déplacements sur site lors des étapes de livraison stratégiques.',
      },
      {
        question: 'Puis-je modifier mes textes et contenus en toute autonomie ?',
        answer: "Oui, chaque site est livré avec un tableau de bord intuitif et une formation vidéo personnalisée pour votre équipe.",
      },
    ],
  },

  // 2. MEDIA BUYER & PUBLICITÉ ADS
  {
    prefix: 'media-buyer',
    name: 'Media Buyer & Publicité Haute Performance (Meta & TikTok Ads)',
    shortTitle: 'Media Buyer & Publicité Ads',
    badge: 'Acquisition Payante & Scaling ROAS',
    iconType: 'target',
    h1: 'Media Buyer à {location} : Rentabilité & Scaling Publicitaire',
    hook: 'Confiez la rentabilité de vos campagnes publicitaires à {location} à un Media Buyer certifié : scaling prévisible, créatives percutantes et élimination du gaspillage de budget.',
    description: "À {location}, diffuser des publicités sans méthode rigoureuse revient à jeter son argent par la fenêtre. BAROUBA GROUP applique une méthode d'ingénierie publicitaire orientée pur retour sur investissement (ROAS). Nous structurons vos campagnes Facebook Ads, Instagram Ads et TikTok Ads avec un ciblage précis, la configuration du Pixel et de la Conversion API (CAPI), ainsi que des créatives vidéo à fort impact.",
    deliverables: [
      {
        title: 'Architecture de Campagnes TOFU / MOFU / BOFU',
        desc: 'Structure éprouvée pour tester méthodiquement, isoler et scaler les angles marketing les plus rentables.',
      },
      {
        title: 'Tracking Avancé Meta Pixel & Conversion API (CAPI)',
        desc: 'Mesure fiable à 100% des conversions pour contourner les blocages navigateurs et nourrir l’algorithme.',
      },
      {
        title: 'Direction Artistique & Scripts Vidéo Haute Conversion',
        desc: 'Rédaction de scripts psychologiques percutants et montage de formats verticaux adaptés aux usages mobiles de {location}.',
      },
      {
        title: 'Pilotage Budgétaire Quotidien & A/B Testing',
        desc: 'Surveillance active du CPA, optimisation des enchères et scaling progressif sans dégradation de la marge nette.',
      },
    ],
    benefits: [
      'Multiplication de votre retour sur investissement publicitaire (ROAS > 3.5x moyen constaté)',
      'Élimination définitive du gaspillage sur des audiences non qualifiées',
      'Capacité d’accélérer vos ventes à {location} et vers toute la sous-région',
      'Reporting hebdomadaire transparent et échange direct avec votre Media Buyer assigné',
    ],
    faq: [
      {
        question: 'Quel budget publicitaire minimum faut-il pour démarrer à {location} ?',
        answer: 'Nous préconisons un budget média de départ d’au moins 150 000 à 300 000 FCFA par mois pour permettre aux algorithmes de sortir rapidement de la phase d’apprentissage et de cibler vos acheteurs idéaux.',
      },
      {
        question: 'Comment évitez-vous les blocages de comptes publicitaires ?',
        answer: 'Nous respectons scrupuleusement les politiques publicitaires Meta et TikTok, utilisons des Business Managers vérifiés et des méthodes de paiement sécurisées.',
      },
      {
        question: 'Prenez-vous en charge la création des visuels et vidéos ?',
        answer: 'Oui, notre pôle créatif conçoit l’intégralité des créatives (scripts vidéo, montages verticaux, carrousels) pour maximiser le taux de clic.',
      },
    ],
  },

  // 3. COMMUNITY MANAGER
  {
    prefix: 'community-manager',
    name: 'Community Management & Stratégie de Gestion de Page Facebook & Réseaux Sociaux',
    shortTitle: 'Community Manager & Réseaux Sociaux',
    badge: 'Branding & Engagement Communautaire',
    iconType: 'users',
    h1: 'Community Manager à {location} : Stratégie & Animation Sociale',
    hook: 'Propulsez la notoriété et la réputation de votre entreprise à {location} avec un Community Manager dédié : stratégie éditoriale, visuels haut de gamme et animation quotidienne engagée.',
    description: "À {location}, une page Facebook abandonnée ou mal animée détruit la crédibilité de votre marque. BAROUBA GROUP prend en main votre communication sociale : calendrier éditorial mensuel, création de contenus visuels et vidéos soignés, modération réactive 7j/7 et animation stratégique pour convertir vos abonnés en clients fidèles et ambassadeurs.",
    deliverables: [
      {
        title: 'Stratégie Éditoriale & Planning de Publication Mensuel',
        desc: 'Définition des piliers de contenu (autorité, preuve sociale, éducation, vente) et programmation aux heures de forte affluence à {location}.',
      },
      {
        title: 'Création Graphique Haute Couture & Formats Reels',
        desc: 'Visuels soignés conformes à votre charte graphique et formats vidéos courts captant immédiatement l’attention.',
      },
      {
        title: 'Modération Active & Gestion des Messages Privés',
        desc: 'Réponses rapides et commerciales aux commentaires et messages privés pour ne manquer aucune opportunité de vente.',
      },
      {
        title: 'Rapports Mensuels d’Engagement & Croissance',
        desc: 'Analyse synthétique de l’engagement, de la portée organique et des retombées commerciales concrètes sur {location}.',
      },
    ],
    benefits: [
      'Image de marque professionnelle valorisant immédiatement votre entreprise',
      'Gain de temps précieux pour votre équipe qui se concentre sur son cœur de métier',
      'Fédération d’une communauté engagée autour de vos offres et services',
      'Veille concurrentielle continue sur le marché de {location}',
    ],
    faq: [
      {
        question: 'Combien de publications réalisez-vous par semaine à {location} ?',
        answer: 'Selon la formule choisie, nous publions 3 à 5 posts stratégiques par semaine, alternant vidéos courtes, visuels d’autorité et témoignages.',
      },
      {
        question: 'Fournissez-vous vous-mêmes les photos et visuels ?',
        answer: 'Nous pouvons valoriser vos photos d’équipe et chantiers ou concevoir des créations graphiques originales haut de gamme adaptées à votre domaine.',
      },
      {
        question: 'Comment gérez-vous les demandes de prix dans les commentaires ?',
        answer: 'Nous appliquons un script d’accueil courtois qui réoriente discrètement le prospect vers la messagerie privée ou votre WhatsApp commercial.',
      },
    ],
  },

  // 4. CONCEPTION DE TUNNEL DE VENTE
  {
    prefix: 'conception-tunnel-de-vente',
    name: 'Conception de Tunnels de Vente Haute Conversion & Vente d’Offres en Ligne',
    shortTitle: 'Tunnel de Vente & Vente en Ligne',
    badge: 'Architecture de Conversion & Vente',
    iconType: 'layers',
    h1: 'Conception de Tunnel de Vente à {location} : Vente en Ligne Automatisée',
    hook: 'Automatisez la vente de vos produits, services et formations à {location} grâce à un tunnel de conversion sur-mesure conçu pour transformer vos visiteurs en acheteurs confirmés.',
    description: "Un simple site vitrine informe, mais un tunnel de vente vend. À {location}, nous concevons des parcours clients chirurgicalement optimisés pour éliminer toute hésitation : page de capture percutante, vidéo de vente persuasive (VSL), bon de commande direct avec paiements Mobile Money et CB, et séquences d’upsell pour maximiser la valeur moyenne par transaction.",
    deliverables: [
      {
        title: 'Copywriting Persuasif & Psychologie d’Achat',
        desc: 'Rédaction percutante ciblant les désirs profonds et objections de vos acheteurs à {location} pour déclencher l’acte d’achat.',
      },
      {
        title: 'Pages de Capture & Vidéos de Vente (VSL) Ultra-Rapides',
        desc: 'Landing pages ergonomiques codées en Next.js, se chargeant en moins d’une seconde sur mobile.',
      },
      {
        title: 'Checkout Optimisé & Passerelles Mobile Money Intégrées',
        desc: 'Paiement en Francs CFA en 1 clic par Orange Money, Moov Money, Wave et carte bancaire avec reçu immédiat.',
      },
      {
        title: 'Système d’Upsell & Récupération de Paniers Abandonnés',
        desc: 'Offres complémentaires stratégiques pour augmenter le panier moyen de 25% à 45% et relances automatiques.',
      },
    ],
    benefits: [
      'Génération de ventes automatisée 24h/24 sans dépendre d’échanges manuels interminables',
      'Idéal pour vendre offres d’accompagnement, formations, abonnements et produits physiques',
      'Expérience d’achat fluide adaptée aux usages mobiles de {location}',
      'Propriété intégrale de votre système de vente sans abonnement logiciel mensuel hors de prix',
    ],
    faq: [
      {
        question: 'Quelle est la différence fondamentale entre un site web et un tunnel de vente ?',
        answer: 'Un site internet standard propose de multiples menus et choix qui dispersent l’attention. Un tunnel de vente ne présente qu’une seule trajectoire guidée : faire passer le prospect d’inconnu à client acheteur qualifié.',
      },
      {
        question: 'Peut-on vendre des produits physiques ou seulement des formations ?',
        answer: 'Nos tunnels de vente s’appliquent avec succès aux produits physiques (cosmétiques, mode, électronique), tout comme aux services d’entreprises, immobilier et formations.',
      },
      {
        question: 'Le tunnel fonctionne-t-il sur les connexions internet mobiles lentes à {location} ?',
        answer: 'Oui, grâce à notre technologie Next.js déployée sur CDN Edge, nos pages de vente s’affichent instantanément même en réseau 3G dégradé.',
      },
    ],
  },

  // 5. EXPERT WHATSAPP BUSINESS API
  {
    prefix: 'expert-whatsapp-business-api',
    name: 'Expert WhatsApp Business API & Automatisation Messagerie Entreprise Meta',
    shortTitle: 'WhatsApp Business API Certifié',
    badge: 'Partenaire Intégrateur Meta Officiel',
    iconType: 'message-square',
    h1: 'Expert WhatsApp Business API à {location} : Compte Officiel Certifié',
    hook: 'Passez au niveau supérieur de la relation client à {location} avec l’API officielle WhatsApp Cloud : badge vert vérifié, zéro risque de bannissement et boîte de réception multi-agents.',
    description: "L’usage d’outils WhatsApp non officiels ou de scripts de spam expose votre entreprise à {location} au blocage définitif de vos numéros de téléphone commerciaux. BAROUBA GROUP déploie pour vous l’infrastructure officielle Meta WhatsApp Business API Cloud : vérification d’entreprise Meta, obtention du badge vert certifié, campagnes de notifications de masse conformes et intégration avec vos outils métiers pour gérer des milliers de conversations simultanément.",
    deliverables: [
      {
        title: 'Vérification d’Entreprise Meta Business & Badge Vert',
        desc: 'Montage et validation complète de votre dossier d’entreprise auprès des équipes Meta pour obtenir le statut officiel vérifié.',
      },
      {
        title: 'Déploiement de l’API WhatsApp Cloud Haute Performance',
        desc: 'Connexion directe aux serveurs Meta sans passerelle intermédiaire, garantissant une délivrabilité de 100% et zéro temps d’arrêt.',
      },
      {
        title: 'Boîte de Réception Partagée Multi-Utilisateurs',
        desc: 'Permettez à l’ensemble de votre équipe commerciale et support à {location} de répondre en même temps sur le même numéro officiel.',
      },
      {
        title: 'Modèles de Messages Approuvés & Notifications Ciblées',
        desc: 'Création de templates officiels conformes Meta pour envoyer notifications de commande, rappels de rendez-vous et offres promotionnelles.',
      },
    ],
    benefits: [
      'Protection intégrale de votre actif commercial : zéro risque de blocage par Meta',
      'Affichage immédiat du nom officiel de votre entreprise avec badge vert sans enregistrement préalable',
      'Organisation centralisée de vos échanges clients avec attribution de tickets et historique archivé',
      'Capacité d’absorber des pics d’activité massifs sans dégradation du temps de réponse',
    ],
    faq: [
      {
        question: 'Pourquoi abandonner l’application WhatsApp Business classique au profit de l’API à {location} ?',
        answer: 'L’application gratuite est bridée à un petit nombre d’appareils et bloque immédiatement le numéro en cas d’envois multiples. L’API officielle offre des utilisateurs illimités, une sécurité absolue et des automatisations avancées conformes.',
      },
      {
        question: 'Pouvons-nous conserver notre numéro de téléphone professionnel actuel ?',
        answer: 'Oui, nous pouvons faire migrer votre numéro existant vers l’API Cloud officielle dès que votre compte Business Manager Meta est validé.',
      },
      {
        question: 'Quels sont les coûts des messages appliqués par Meta ?',
        answer: 'Meta facture les conversations par tranches de 24 heures selon des barèmes transparents très abordables. Nous paramétrons vos flux pour optimiser chaque franc CFA dépensé.',
      },
    ],
  },

  // 6. STRATÉGIE & ACQUISITION DIGITALE
  {
    prefix: 'strategie-acquisition-digitale',
    name: 'Stratégie & Consultation en Acquisition Digitale pour Dirigeants & PME',
    shortTitle: 'Stratégie & Acquisition Digitale',
    badge: 'Conseil Stratégique & Croissance B2B',
    iconType: 'trending-up',
    h1: 'Stratégie d’Acquisition Digitale à {location} pour Dirigeants & PME',
    hook: 'Structurez un moteur d’acquisition client robuste et pérenne à {location} : audit approfondi, arbitrage des canaux marketing et plan d’action pragmatique pour générer des prospects qualifiés.',
    description: "Multiplier les actions marketing désordonnées à {location} est la cause première de la stagnation des entreprises. BAROUBA GROUP intervient en tant que cabinet conseil stratégique en acquisition digitale : nous analysons votre coût d’acquisition client (CAC), modélisons la valeur vie de vos clients (LTV) et concevons un plan d’accélération sur-mesure combinant SEO, publicité payante, création de contenu et closing commercial.",
    deliverables: [
      {
        title: 'Audit Approfondi de votre Écosystème Commercial & Digital',
        desc: 'Diagnostic rigoureux de vos flux de prospects actuels, identification des points de fuite et leviers sous-exploités à {location}.',
      },
      {
        title: 'Plan Stratégique d’Acquisition Multicanale 90 Jours',
        desc: 'Feuille de route claire précisant les canaux prioritaires, les budgets préconisés et les objectifs chiffrés.',
      },
      {
        title: 'Modélisation Financière CAC, LTV & Marges Opérationnelles',
        desc: 'Calcul rigoureux des seuils de rentabilité pour chaque canal afin de garantir que chaque franc CFA investi génère du bénéfice net.',
      },
      {
        title: 'Sessions de Cadrage Stratégique & Pilotage Délégué',
        desc: 'Accompagnement direct du dirigeant et des équipes pour piloter le déploiement opérationnel et lever les blocages tactiques.',
      },
    ],
    benefits: [
      'Visibilité prévisible sur votre volume de prospects entrants chaque semaine',
      'Économies substantielles grâce à l’élimination des dépenses marketing non rentables',
      'Synergie totale entre votre communication, votre marketing et vos équipes de vente',
      'Appui d’experts chevronnés maîtrisant les réalités du tissu économique de {location}',
    ],
    faq: [
      {
        question: 'À qui s’adresse cette consultation stratégique en acquisition à {location} ?',
        answer: 'Elle s’adresse aux directeurs généraux, gérants de PME/PMI et fondateurs d’entreprises ambitieuses qui veulent structurer leur croissance et dépasser leurs plafonds de verre commerciaux.',
      },
      {
        question: 'Combien de temps dure la phase de cadrage et d’audit initial ?',
        answer: 'L’audit approfondi et la feuille de route stratégique sont finalisés en 14 à 21 jours ouvrés, accompagnés d’une restitution détaillée en séance de travail avec votre direction.',
      },
      {
        question: 'Votre cabinet prend-il également en charge l’exécution des plans préconisés ?',
        answer: 'Oui, BAROUBA GROUP dispose des spécialistes internes (media buyers, développeurs, copywriters) pour assurer l’exécution technique clé en main de l’ensemble de la stratégie.',
      },
    ],
  },

  // 7. RÉFÉRENCEMENT SEO LOCAL
  {
    prefix: 'referencement-seo-local',
    name: 'Référencement SEO Local & Domination Google Maps',
    shortTitle: 'SEO Local & Référencement Google',
    badge: 'Visibilité Organique Première Page',
    iconType: 'search',
    h1: 'Référencement SEO Local & Google Maps à {location}',
    hook: 'Positionnez votre établissement au sommet des résultats de recherche Google et Google Maps à {location}. Captez les clients locaux prêts à acheter au moment précis de leur recherche.',
    description: "Lorsque des clients recherchent vos services à {location}, c’est sur Google qu’ils regardent en premier. Si votre entreprise n’apparaît pas dans les trois premières positions de Google Maps ou dans les résultats naturels locaux, ce sont vos concurrents directs qui encaissent. BAROUBA GROUP déploie une stratégie SEO locale complète : optimisation de votre fiche Google Business Profile, balisage Schema.org géolocalisé, netlinking de proximité et création de contenus d’autorité locale.",
    deliverables: [
      {
        title: 'Optimisation & Certification Google Business Profile',
        desc: 'Configuration exhaustive de votre fiche d’établissement, géolocalisation chirurgicale, choix des catégories d’activité et photos professionnelles.',
      },
      {
        title: 'Balisage Schema.org LocalBusiness & On-Page SEO',
        desc: 'Structuration technique de votre site web pour indiquer sans ambiguïté aux robots Google votre implantation et vos zones d’intervention à {location}.',
      },
      {
        title: 'Citations Locales & Netlinking d’Autorité Panafricain',
        desc: 'Inscription dans les annuaires d’entreprises fiables et création de signaux de pertinence géographique renforçant votre autorité locale.',
      },
      {
        title: 'Système de Récolte Proactive des Avis Clients 5 Étoiles',
        desc: 'Mise en place de processus automatisés pour accumuler des avis élogieux réguliers qui rassurent les prospects et boostent votre classement.',
      },
    ],
    benefits: [
      'Afflux régulier d’appels téléphoniques et de visites de prospects qualifiés sans budget publicitaire au clic',
      'Confiance immédiate des acheteurs grâce aux avis clients vérifiés et à la présence sur la carte',
      'Visibilité pérenne qui continue de travailler pour votre entreprise jour et nuit pendant des années',
      'Domination incontestée sur vos concurrents locaux qui négligent encore leur référencement',
    ],
    faq: [
      {
        question: 'Sous quel délai peut-on espérer grimper dans Google Maps à {location} ?',
        answer: 'Sur les requêtes locales ciblées, des améliorations significatives de positionnement et d’appels entrants s’observent couramment entre 4 et 8 semaines après la mise à niveau de la fiche.',
      },
      {
        question: 'Faut-il posséder un local ouvert au public pour bénéficier du SEO local à {location} ?',
        answer: 'Non, les entreprises de services intervenant au domicile ou dans les locaux de leurs clients peuvent configurer une zone de desserte spécifique sans afficher publiquement leur adresse résidentielle.',
      },
      {
        question: 'Le résultat est-il pérenne si l’on arrête d’optimiser le site ?',
        answer: 'Contrairement à la publicité qui s’éteint dès que le budget s’arrête, les positions acquises en SEO local restent très stables dans le temps avec un minimum d’entretien régulier.',
      },
    ],
  },

  // 8. AGENTS IA & AUTOMATISATION
  {
    prefix: 'agents-ia-automatisation',
    name: 'Agents IA & Automatisation des Processus Métiers',
    shortTitle: 'Agents IA & Automatisation Entreprise',
    badge: 'Intelligence Artificielle Opérationnelle',
    iconType: 'cpu',
    h1: 'Agents IA & Automatisation Entreprise à {location}',
    hook: 'Automatisez votre service client, la qualification de vos prospects et votre gestion interne à {location} grâce à des agents IA connectés à vos outils métiers et bases de données.',
    description: "Ne perdez plus aucun prospect à {location} à cause d'une réponse tardive ou d'une surcharge administrative. BAROUBA GROUP déploie des agents intelligents entraînés sur votre catalogue et vos procédures internes, capables de répondre 24h/24, de calculer des devis personnalisés et de synchroniser vos commandes sans intervention humaine.",
    deliverables: [
      {
        title: 'Agent Conversationnel Métier 24h/24',
        desc: 'Compréhension du langage naturel, réponse instantanée aux questions fréquentes et qualification commerciale des prospects jour et nuit.',
      },
      {
        title: 'Workflows d’Automatisation Inter-Logiciels',
        desc: 'Connexion fluide entre messageries, CRM, ERP, Google Sheets et logiciels de facturation pour éliminer la saisie manuelle et les erreurs.',
      },
      {
        title: 'Générateur Automatique de Devis & Factures',
        desc: 'Calcul instantané des tarifs selon les critères du client et envoi automatique du document PDF officiel certifié.',
      },
      {
        title: 'Synchronisation des Données & Tableaux de Bord de Gestion',
        desc: 'Mise à jour en temps réel des stocks, des rendez-vous et des encaissements dans vos outils de pilotage centralisés.',
      },
    ],
    benefits: [
      'Disponibilité commerciale ininterrompue 24h/24 et 7j/7 pour capter tous les prospects',
      'Réduction drastique des coûts opérationnels et du temps passé sur des tâches répétitives sans valeur',
      'Zéro prospect perdu grâce à des temps de réponse inférieurs à 30 secondes',
      'Intégration sur-mesure respectant scrupuleusement la confidentialité de vos données d’entreprise',
    ],
    faq: [
      {
        question: 'L’IA est-elle capable de comprendre les expressions et le contexte local de {location} ?',
        answer: 'Oui, nos modèles sont ajustés pour comprendre le français d’Afrique de l’Ouest et Centrale, les formulations courantes et les termes spécifiques à votre secteur d’activité.',
      },
      {
        question: 'Que se passe-t-il si un client pose une question complexe ou imprévue ?',
        answer: 'L’agent IA détecte ses limites de confiance et bascule immédiatement et proprement la conversation vers un conseiller humain de votre équipe.',
      },
      {
        question: 'Mes données d’entreprise et celles de mes clients sont-elles protégées ?',
        answer: 'Absolument. Nous appliquons des protocoles de chiffrement stricts et vos données internes ne sont jamais utilisées pour entraîner des modèles publics tiers.',
      },
    ],
  },

  // 9. FORMATION DIGITALE & IA (GÉNÉRALE)
  {
    prefix: 'formation',
    name: 'Formations Professionnelles Métiers du Web & IA (Barouba Academy)',
    shortTitle: 'Formations Certifiantes Web & IA',
    badge: 'Barouba Academy — Cursus d’Élite',
    iconType: 'graduation',
    h1: 'Formations Professionnelles Web, Marketing & IA à {location}',
    hook: 'Montez en compétences à {location} avec des formations 100% pratiques aux métiers les plus recherchés : développement Next.js, prompt engineering, marketing digital et automatisation.',
    description: "Le marché du travail à {location} recherche des profils qualifiés capables de déployer des solutions digitales concrètes. BAROUBA GROUP forme étudiants, cadres, entrepreneurs et salariés à travers des cursus certifiants intensifs, animés par des ingénieurs et experts en activité.",
    deliverables: [
      {
        title: 'Programmes 100% Axés sur la Pratique & Projets Réels',
        desc: 'Chaque module débouche sur la réalisation de projets concrets directement utilisables en entreprise ou en freelance.',
      },
      {
        title: 'Certificat Professionnel d’Aptitude BAROUBA GROUP',
        desc: 'Attestation officielle valorisant votre expertise auprès des recruteurs et donneurs d’ordres nationaux et internationaux.',
      },
      {
        title: 'Accompagnement & Mentorat VIP Post-Formation',
        desc: 'Accès direct aux formateurs pour débloquer vos difficultés et perfectionner vos compétences après le cursus.',
      },
      {
        title: 'Boîte à Outils, Code Source & Prompts Prêts à l’Emploi',
        desc: 'Fourniture de bibliothèques de code, templates de tunnels et scripts IA pour accélérer vos propres projets sans repartir de zéro.',
      },
    ],
    benefits: [
      'Acquisition de compétences immédiatement monétisables sur le marché du travail',
      'Possibilité de suivre en présentiel ou en ligne depuis {location} avec support réactif',
      'Paiement échelonné en FCFA disponible par Mobile Money',
      'Accès exclusif à la communauté des alumni et opportunités d’affaires du réseau',
    ],
    faq: [
      {
        question: 'Faut-il avoir des prérequis en informatique pour suivre les cours à {location} ?',
        answer: 'Nos formations comportent des parcours débutants complets et des modules avancés. Une simple familiarité avec l’ordinateur et une forte motivation suffisent pour démarrer.',
      },
      {
        question: 'Les cours sont-ils compatibles avec un emploi du temps professionnel ?',
        answer: 'Oui, nous proposons des créneaux en cours du soir et le week-end, ainsi qu’un accès e-learning flexible pour progresser à votre propre rythme.',
      },
      {
        question: 'Le certificat est-il reconnu par les entreprises et recruteurs ?',
        answer: 'Le certificat BAROUBA GROUP atteste de la validation de compétences techniques réelles sur des projets concrets, ce qui constitue le meilleur gage d’employabilité.',
      },
    ],
  },

  // 10. FORMATION MEDIA BUYING SPÉCIFIQUE
  {
    prefix: 'formation-media-buying',
    name: 'Formation Intensive Media Buying & Publicité Facebook / TikTok Ads',
    shortTitle: 'Formation Media Buying Ads',
    badge: 'Barouba Academy — Spécialisation Ads',
    iconType: 'target',
    h1: 'Formation Media Buying & Publicité Meta / TikTok Ads à {location}',
    hook: 'Devenez un Media Buyer d’élite à {location} : maîtrisez le Business Manager Meta, TikTok Ads, le tracking CAPI, le copywriting publicitaire et le scaling de campagnes rentables.',
    description: "La compétence de Media Buyer est la plus recherchée et la plus lucrative du marketing digital contemporain. À {location}, apprenez à gérer des budgets publicitaires professionnels, à générer des ROAS supérieurs à 4x et à décrocher des contrats de gestion publicitaire auprès des PME et e-commerçants.",
    deliverables: [
      {
        title: 'Maîtrise Complète du Business Manager & TikTok Ads Center',
        desc: 'Configuration professionnelle, sécurisation des comptes et contournement des restrictions.',
      },
      {
        title: 'Création de Vidéos Publicitaires Percutantes & Hooks',
        desc: 'Apprentissage des structures narratives qui captent l’attention et déclenchent l’achat compulsif.',
      },
      {
        title: 'Tracking Avancé CAPI, Pixel & Tableaux de Bord de Scaling',
        desc: 'Installation sans code et avec code des pixels et analyse des métriques clés (CTR, CPM, CPA, ROAS).',
      },
      {
        title: 'Méthodologie pour Décrocher ses Premiers Clients Entreprises',
        desc: 'Modèles de contrats de prestation, grilles tarifaires et pitch commercial pour signer des mandats de gestion.',
      },
    ],
    benefits: [
      'Compétence immédiatement rentable permettant de générer des revenus en freelance ou en agence',
      'Études de cas réelles sur des campagnes ayant généré des millions de FCFA de chiffre d’affaires',
      'Accès à notre bibliothèque privée de créatives publicitaires à fort taux de conversion',
      'Certification officielle Media Buyer délivrée après soutenance de projet réel',
    ],
    faq: [
      {
        question: 'Combien gagne un Media Buyer freelance à {location} ?',
        answer: 'Un Media Buyer compétent facture généralement entre 150 000 et 500 000 FCFA par client et par mois en honoraire fixe, souvent complété par un pourcentage sur le chiffre d’affaires généré.',
      },
      {
        question: 'Faut-il disposer d’un budget publicitaire personnel pour suivre la formation ?',
        answer: 'Non, les ateliers pratiques s’appuient sur des comptes de démonstration et des études de cas guidées par le formateur.',
      },
      {
        question: 'La formation est-elle accessible aux débutants complets à {location} ?',
        answer: 'Oui, nous partons des fondamentaux du marketing direct avant d’aborder les techniques de ciblage algorithmique avancées.',
      },
    ],
  },

  // 11. FORMATION COMMUNITY MANAGEMENT
  {
    prefix: 'formation-community-management',
    name: 'Formation Complète Community Management & Gestion de Page Facebook Pro',
    shortTitle: 'Formation Community Management',
    badge: 'Barouba Academy — Spécialisation Réseaux Sociaux',
    iconType: 'users',
    h1: 'Formation Community Manager & Stratégie Social Media à {location}',
    hook: 'Apprenez à gérer professionnellement les réseaux sociaux d’entreprises à {location} : stratégie de contenu, création graphique percutante, montage de Reels et modération commerciale.',
    description: "Toutes les entreprises de {location} ont besoin d’animer leurs réseaux sociaux, mais très peu savent le faire avec méthode. Cette formation certifiante vous transforme en Community Manager stratégique capable de concevoir des calendriers éditoriaux engageants, de monter des vidéos courtes et de transformer une audience en clients payants.",
    deliverables: [
      {
        title: 'Stratégie de Contenu & Calendrier Éditorial Mensuel',
        desc: 'Définition des piliers de contenu, choix des tonalités de marque et planification rigoureuse.',
      },
      {
        title: 'Création Visuelle avec Canva Pro & Suite Adobe',
        desc: 'Principes de composition graphique, typographie, palettes de couleurs et retouche d’images percutantes.',
      },
      {
        title: 'Tournage & Montage de Reels / TikTok sur Smartphone',
        desc: 'Techniques de tournage au téléphone, sous-titrage dynamique et effets de transition captivants.',
      },
      {
        title: 'Modération & Closing Commercial dans la Messagerie',
        desc: 'Scripts de réponse pour transformer les simples demandes de prix en commandes effectives.',
      },
    ],
    benefits: [
      'Métier à forte demande permettant de travailler pour plusieurs entreprises en simultané',
      'Portfolio concret de réalisations graphiques et vidéo constitué dès la fin du cursus',
      'Maîtrise des outils d’automatisation et d’intelligence artificielle pour créer du contenu 5x plus vite',
      'Certificat d’Aptitude Professionnelle BAROUBA GROUP reconnu par les recruteurs',
    ],
    faq: [
      {
        question: 'Un ordinateur est-il obligatoire pour suivre cette formation à {location} ?',
        answer: 'Un ordinateur portable est recommandé pour les modules de stratégie et graphisme, mais de nombreux ateliers de montage vidéo s’effectuent directement sur smartphone.',
      },
      {
        question: 'Trouve-t-on facilement des clients à {location} en tant que CM ?',
        answer: 'Oui, boutiques, restaurants, cliniques, écoles et agences recherchent continuellement des personnes fiables pour alimenter leurs pages Facebook et Instagram.',
      },
      {
        question: 'La formation inclut-elle l’utilisation de l’IA (ChatGPT, Midjourney) ?',
        answer: 'Absolument. Nous vous apprenons à rédiger des prompts professionnels pour générer des idées de posts, des scripts vidéo et des visuels en quelques secondes.',
      },
    ],
  },

  // 12. FORMATION CRÉATION DE SITE WEB
  {
    prefix: 'formation-creation-site-web',
    name: 'Formation Création de Sites Web Modernes & Plateformes Next.js',
    shortTitle: 'Formation Création Site Web',
    badge: 'Barouba Academy — Spécialisation Ingénierie Web',
    iconType: 'globe',
    h1: 'Formation Création de Sites Web & Next.js à {location}',
    hook: 'Apprenez à concevoir des sites internet ultra-rapides et des plateformes web modernes à {location} : HTML/CSS, React, Next.js, intégration Mobile Money et hébergement cloud.',
    description: "Développez l’une des compétences techniques les plus valorisées au monde. À {location}, apprenez à coder des sites web professionnels sans lenteur, sécurisés et connectés aux moyens de paiement africains, capables de rivaliser avec les meilleures plateformes internationales.",
    deliverables: [
      {
        title: 'Fondations du Web Moderne (HTML5, CSS3, JavaScript ES6+)',
        desc: 'Bases solides en programmation web, design responsive et bonnes pratiques de codage.',
      },
      {
        title: 'Framework React & Next.js 16 (App Router & SSR)',
        desc: 'Architecture de composants, Server Components et optimisation maximale de la vitesse de chargement.',
      },
      {
        title: 'Intégration d’API & Passerelles Mobile Money',
        desc: 'Connexion aux passerelles de paiement (Orange Money, Moov, Wave) et formulaires de devis dynamiques.',
      },
      {
        title: 'Déploiement Continu sur Vercel & Référencement SEO',
        desc: 'Mise en ligne en production, gestion de domaines personnalisés et balisage pour les moteurs de recherche.',
      },
    ],
    benefits: [
      'Capacité de concevoir et vendre des sites web facturés entre 250 000 et 1 500 000 FCFA',
      'Accès aux technologies les plus modernes (Next.js, TypeScript) adoptées par les géants de la tech',
      'Projet complet de site web professionnel mis en ligne et fonctionnel à l’issue de la formation',
      'Mentorat technique direct assuré par les développeurs seniors de BAROUBA GROUP',
    ],
    faq: [
      {
        question: 'Faut-il être fort en mathématiques pour apprendre à coder des sites web à {location} ?',
        answer: 'Non, le développement web moderne repose avant tout sur la logique, la rigueur et la créativité. Aucune compétence avancée en mathématiques n’est requise.',
      },
      {
        question: 'En combien de temps peut-on devenir opérationnel ?',
        answer: 'Avec un travail régulier et nos ateliers pratiques, vous êtes en mesure de livrer vos premiers sites web fonctionnels en 6 à 8 semaines.',
      },
      {
        question: 'Cette formation prépare-t-elle au travail en télétravail international ?',
        answer: 'Oui, Next.js et React sont les technologies les plus recherchées par les entreprises européennes et nord-américaines recrutant des développeurs en freelance ou remote.',
      },
    ],
  },

  // 13. FORMATION TUNNELS DE VENTE
  {
    prefix: 'formation-tunnel-de-vente',
    name: 'Formation Architecte de Tunnels de Vente & Systèmes de Conversion',
    shortTitle: 'Formation Tunnels de Vente',
    badge: 'Barouba Academy — Spécialisation Vente & Tunnels',
    iconType: 'layers',
    h1: 'Formation Conception de Tunnels de Vente à {location}',
    hook: 'Maîtrisez l’art de concevoir des entonnoirs de conversion automatiques à {location} : pages de vente hypnotiques, psychologie d’achat, séquences d’emailing et closing de prospects.',
    description: "Savoir créer un tunnel de vente est le secret le mieux gardé des entrepreneurs à succès. À {location}, découvrez comment architecturer un système qui attire des inconnus, les qualifie, les éduque et les convertit en clients acheteurs 24h/24, sans avoir besoin d’échanger manuellement des heures durant.",
    deliverables: [
      {
        title: 'Psychologie de Conversion & Rédaction Persuasive (Copywriting)',
        desc: 'Structure d’une offre irrésistible, leviers psychologiques d’urgence et traitement des objections.',
      },
      {
        title: 'Conception Technique de Landing Pages & VSL',
        desc: 'Mise en page ergonomique, intégration de vidéos de vente percutantes et formulaires de capture optimisés.',
      },
      {
        title: 'Séquences Automatisées de Relance (Email / SMS / WhatsApp)',
        desc: 'Workflows de relance des prospects tièdes et récupération des commandes abandonnées.',
      },
      {
        title: 'Optimisation du Panier Moyen (Upsells, Downsells, Order Bumps)',
        desc: 'Techniques concrètes pour maximiser le revenu généré par chaque acheteur dès son premier passage en caisse.',
      },
    ],
    benefits: [
      'Compétence d’élite permettant de multiplier les ventes de n’importe quel produit ou service',
      'Capacité de vendre vos propres offres ou de proposer cette prestation à forte valeur ajoutée aux entreprises',
      'Modèles et templates de tunnels de conversion prêts à l’emploi fournis aux participants',
      'Attestation de compétences reconnue délivrée par BAROUBA GROUP',
    ],
    faq: [
      {
        question: 'Cette formation est-elle utile pour un commerçant de produits physiques à {location} ?',
        answer: 'Absolument. Les tunnels de vente sont redoutables pour vendre des cosmétiques, des vêtements, de l’électronique ou des compléments alimentaires en gros volumes.',
      },
      {
        question: 'Faut-il savoir coder pour construire des tunnels de conversion ?',
        answer: 'Non, nous vous formons sur des constructeurs de tunnels ergonomiques et intuitifs ne nécessitant aucune ligne de code pour être opérationnel immédiatement.',
      },
      {
        question: 'La formation aborde-t-elle le paiement par Mobile Money en Afrique ?',
        answer: 'Oui, nous consacrons un module complet à l’intégration des passerelles Orange Money, Wave et Moov pour encaisser en direct en Francs CFA.',
      },
    ],
  },
  // 14. PUBLICITÉ FACEBOOK ADS
  {
    prefix: 'publicite-facebook-ads',
    name: 'Publicité Facebook & Instagram Ads (Meta)',
    shortTitle: 'Publicité Facebook Ads',
    badge: 'Media Buying Rentable',
    iconType: 'trending-up',
    h1: 'Publicité Facebook Ads à {location} : Ventes & ROAS Élevé',
    hook: 'Multipliez vos ventes avec la publicité Facebook et Instagram Ads à {location}. Ciblage précis des acheteurs solvables et génération continue de prospects qualifiés.',
    description: "La publicité Facebook et Meta Ads à {location} exige un paramétrage scientifique : création de visuels et vidéos percutants, installation du pixel et de l'API de conversions (CAPI), et ciblage géographique chirurgical. BAROUBA GROUP optimise chaque franc investi pour garantir un ROAS supérieur à 3.5x.",
    deliverables: [
      {
        title: 'Ciblage d’Audience Solvable & Buyer Persona à {location}',
        desc: 'Identification des segments démographiques et centres d’intérêt ayant le pouvoir d’achat le plus élevé.',
      },
      {
        title: 'Conception de Visuels & Scripts Vidéos Captivants',
        desc: 'Création graphique de haute qualité et formats publicitaires éprouvés pour maximiser le taux de clic.',
      },
      {
        title: 'Tracking Serveur CAPI & Pilotage par les Données',
        desc: 'Installation propre évitant les pertes de données iOS/Android et mesurant le coût réel par vente.',
      },
      {
        title: 'Optimisation Continue & Scaling des Campagnes Rentables',
        desc: 'Ajustement quotidien des enchères pour baisser le coût d’acquisition et augmenter le bénéfice net.',
      },
    ],
    benefits: [
      'Génération continue d’acheteurs prêts à commander sur votre marché',
      'Coût par prospect (CPL) maîtrisé et auditable chaque semaine',
      'Connexion directe vers votre WhatsApp commercial pour un closing rapide',
      'Reporting transparent hebdomadaire et suivi direct avec le media buyer',
    ],
    faq: [
      {
        question: 'Quel budget publicitaire Facebook Ads prévoir à {location} ?',
        answer: 'Nous conseillons un budget de test dès 5 000 à 10 000 FCFA par jour pour valider la rentabilité avant de monter en puissance.',
      },
      {
        question: 'En combien de temps les résultats apparaissent-ils ?',
        answer: 'Les premiers prospects qualifiés arrivent dans les 24 à 48 heures suivant la validation de la campagne.',
      },
    ],
  },
  // 15. PUBLICITÉ TIKTOK ADS
  {
    prefix: 'publicite-tiktok-ads',
    name: 'Publicité TikTok Ads & Acquisition Vidéo',
    shortTitle: 'Publicité TikTok Ads',
    badge: 'Acquisition Virale & Vidéo',
    iconType: 'trending-up',
    h1: 'Publicité TikTok Ads à {location} : Ventes & Notoriété Immédiate',
    hook: 'Exploitez la puissance de TikTok Ads à {location}. Création de vidéos percutantes, acquisition virale et vente directe vers WhatsApp Business.',
    description: "TikTok est devenu le canal le plus dynamique en Afrique de l'Ouest pour capter l'attention et déclencher des achats impulsifs. BAROUBA GROUP conçoit des vidéos publicitaires natives au format vertical et déploie des campagnes de conversion reliant directement TikTok à votre WhatsApp.",
    deliverables: [
      {
        title: 'Tournage & Montage de Vidéos Natives TikTok',
        desc: 'Formats vidéos verticaux respectant les codes de la plateforme avec des accroches puissantes dès les 3 premières secondes.',
      },
      {
        title: 'Configuration du Pixel TikTok & Événements de Conversion',
        desc: 'Paramétrage analytique complet pour tracker les vues, clics et initiations d’achat.',
      },
      {
        title: 'Tests A/B des Hooks & Créatifs Publicitaires',
        desc: 'Multiplication des angles marketing pour identifier rapidement les créatifs les plus rentables.',
      },
      {
        title: 'Tunnels de Vente Directs vers WhatsApp Business',
        desc: 'Redirection fluide en 1 clic pour convertir l’attention des spectateurs en commandes concrètes.',
      },
    ],
    benefits: [
      'Coût par clic et par vue nettement inférieur aux canaux publicitaires traditionnels',
      'Forte viralité auprès de la jeunesse et des jeunes actifs de {location}',
      'Ventes directes en livraison contre remboursement ou Mobile Money',
      'Suivi chiffré des conversions et du coût par commande générée',
    ],
    faq: [
      {
        question: 'Quels produits fonctionnent le mieux sur TikTok Ads à {location} ?',
        answer: 'La mode, la beauté, la restauration, la formation, l’électronique et les services innovants obtiennent des taux de conversion exceptionnels.',
      },
      {
        question: 'Faut-il avoir déjà un compte TikTok populaire pour faire de la pub ?',
        answer: 'Non, les publicités sponsorisées TikTok Ads touchent directement des milliers d’utilisateurs qualifiés sans dépendre de vos abonnés existants.',
      },
    ],
  },
  // 16. TUNNELS DE VENTE WHATSAPP
  {
    prefix: 'tunnel-vente-whatsapp',
    name: 'Tunnels de Vente WhatsApp & Mobile Money',
    shortTitle: 'Tunnel de Vente WhatsApp',
    badge: 'Closing & Vente 1-Clic',
    iconType: 'chat',
    h1: 'Tunnel de Vente WhatsApp à {location} : Ventes Directes en 1 Clic',
    hook: 'Automatisez vos ventes sur WhatsApp à {location}. Transformez vos visiteurs en clients payants avec nos tunnels et paiements Mobile Money intégrés.',
    description: "En Afrique de l'Ouest, 90% des décisions d'achat se concluent sur WhatsApp. BAROUBA GROUP crée des tunnels de vente ultra-rapides (< 0.8s) qui guident le prospect de la publicité jusqu'à la commande ferme sur WhatsApp, avec encaissement Mobile Money sécurisé.",
    deliverables: [
      {
        title: 'Landing Page Monoproduit Ultra-Véloce (< 0.8s)',
        desc: 'Page de capture épurée présentant l’offre de manière irrésistible sans temps de chargement bloquant.',
      },
      {
        title: 'Connexion à l’API WhatsApp Cloud & Panier Pré-rempli',
        desc: 'Le client clique et retrouve immédiatement son message de commande rédigé prêt à l’envoi.',
      },
      {
        title: 'Intégration Mobile Money : Orange, Moov & Wave',
        desc: 'Passerelles de paiement locales sécurisées pour encaisser instantanément en Francs CFA.',
      },
      {
        title: 'Scripts de Closing Commercial & Relances Automatisées',
        desc: 'Protocoles de vente persuasifs pour transformer chaque demande d’information en vente encaissée.',
      },
    ],
    benefits: [
      'Élimination totale des abandons de panier constatés sur les sites e-commerce classiques',
      'Taux de conversion élevé de 15% à 25% entre la visite de la page et le message WhatsApp',
      'Gain de temps massif pour vos commerciaux grâce aux informations pré-remplies',
      'Encaissement immédiat et sécurisé sans risque d’impayé',
    ],
    faq: [
      {
        question: 'Pourquoi préférer WhatsApp à un site e-commerce traditionnel à {location} ?',
        answer: 'Parce que les acheteurs locaux préfèrent échanger avec un conseiller humain et payer par Mobile Money plutôt que de remplir de longs formulaires avec carte bancaire.',
      },
      {
        question: 'Peut-on synchroniser WhatsApp avec notre stock ?',
        answer: 'Oui, chaque commande confirmée peut être automatiquement enregistrée dans votre fichier de stock ou votre CRM.',
      },
    ],
  },
  // 17. RÉFÉRENCEMENT NATUREL SEO
  {
    prefix: 'referencement-naturel-seo',
    name: 'Référencement Naturel Google (SEO Local & National)',
    shortTitle: 'Référencement SEO',
    badge: '1ère Page Google Garantie',
    iconType: 'target',
    h1: 'Référencement Naturel SEO à {location} : Dominez la 1ère Page Google',
    hook: 'Positionnez votre site en 1ère page de Google à {location}. Stratégie SEO locale, optimisation technique et domination des mots-clés de votre secteur.',
    description: "Être visible sur Google au moment exact où vos clients recherchent vos services à {location} est l'investissement marketing le plus rentable sur le long terme. BAROUBA GROUP déploie un SEO technique d'élite : vitesse < 0.8s, balisage Schema.org, pages territoriales et netlinking d'autorité.",
    deliverables: [
      {
        title: 'Audit Technique & Optimisation Core Web Vitals',
        desc: 'Correction des erreurs d’indexation, optimisation de la vitesse mobile et architecture sémantique.',
      },
      {
        title: 'Optimisation Google Business Profile Local à {location}',
        desc: 'Configuration complète pour apparaître en tête du pack local Google Maps avec avis clients valorisés.',
      },
      {
        title: 'Production de Contenus Piliers d’Autorité',
        desc: 'Articles stratégiques et landing pages ciblant les requêtes de recherche les plus rentables.',
      },
      {
        title: 'Balisage Sémantique Schema.org & Micro-Données',
        desc: 'Structuration du code pour déclencher les résultats enrichis (Rich Snippets) et FAQ Google.',
      },
    ],
    benefits: [
      'Flux continu de prospects qualifiés gratuits sans dépendre du budget publicitaire',
      'Statut d’autorité de référence incontesté face à vos concurrents locaux',
      'Visibilité permanente 24h/24 et 7j/7 sur mobile et ordinateur',
      'Trafic hautement intentionniste avec taux de signature élevé',
    ],
    faq: [
      {
        question: 'Combien de temps pour atteindre la 1ère page Google à {location} ?',
        answer: 'Sur des requêtes locales ciblées, nos clients atteignent le top 3 en 4 à 8 semaines grâce à notre vitesse technique et notre maillage chirurgical.',
      },
      {
        question: 'Le SEO remplace-t-il la publicité payante ?',
        answer: 'Ils sont complémentaires : la publicité apporte des ventes immédiates dès demain, tandis que le SEO sécurise votre rentabilité sur plusieurs années sans coût par clic.',
      },
    ],
  },
  // 18. MARKETING DIGITAL IMMOBILIER
  {
    prefix: 'marketing-digital-immobilier',
    name: 'Marketing Digital pour Promoteurs & Agences Immobilières',
    shortTitle: 'Marketing Digital Immobilier',
    badge: 'Spécial Immobilier & Parcelles',
    iconType: 'building',
    h1: 'Marketing Digital Immobilier à {location} : Vendez Vos Terrains & Villas',
    hook: 'Stratégie marketing digital pour agences immobilières et promoteurs à {location}. Vendez vos parcelles et villas à la clientèle locale et à la diaspora.',
    description: "Le secteur immobilier à {location} exige une communication de grand standing et une confiance absolue. BAROUBA GROUP déploie des tunnels d'acquisition dédiés aux terrains, lotissements et promotions immobilières, ciblant les cadres locaux et la diaspora burkinabè en Europe, aux USA et en Afrique.",
    deliverables: [
      {
        title: 'Visuels & Vidéos Aériennes de Promotion Immobilière',
        desc: 'Mise en valeur cinématique des parcelles, plans de bornage et projets de construction.',
      },
      {
        title: 'Campagnes Publicitaires Ciblées Diaspora Burkinabè',
        desc: 'Ciblage des ressortissants en France, Italie, USA, Côte d’Ivoire ayant une capacité d’épargne immédiate.',
      },
      {
        title: 'Tunnel de Qualification & Prise de Rendez-vous',
        desc: 'Formulaire de vérification de la solvabilité avant transmission des dossiers aux commerciaux.',
      },
      {
        title: 'Brochures Commerciales Numériques Téléchargeables',
        desc: 'Plaquettes PDF de présentation des programmes avec plan de financement et contact direct WhatsApp.',
      },
    ],
    benefits: [
      'Accélération spectaculaire de la commercialisation de vos lotissements et villas',
      'Filtrage rigoureux pour ne traiter qu’avec des acquéreurs solvables et décidés',
      'Canal direct d’acquisition auprès de la diaspora burkinabè à fort pouvoir d’achat',
      'Protection de la réputation de votre agence grâce à une communication certifiée',
    ],
    faq: [
      {
        question: 'Comment touchez-vous la diaspora intéressée par l’immobilier à {location} ?',
        answer: 'Nous ciblons géographiquement les résidents burkinabè et ouest-africains en Europe et en Amérique avec des preuves juridiques rassurantes.',
      },
      {
        question: 'Quels documents devez-vous recevoir pour lancer la campagne ?',
        answer: 'Les plans de lotissement, photos/vidéos du site, documents de conformité et conditions de paiement.',
      },
    ],
  },
  // 19. MARKETING DIGITAL COMMERCE
  {
    prefix: 'marketing-digital-commerce',
    name: 'Marketing Digital pour Boutiques & Commerces de Détail',
    shortTitle: 'Marketing Digital Commerces',
    badge: 'Vente en Ligne & Boutiques',
    iconType: 'credit-card',
    h1: 'Marketing Digital pour Commerces à {location} : Ventes & Commandes 7j/7',
    hook: 'Boostez le chiffre d’affaires de votre boutique ou commerce à {location} grâce au marketing digital, à la livraison rapide et aux commandes WhatsApp.',
    description: "Pour les boutiques de prêt-à-porter, cosmétiques, électronique ou alimentation à {location}, le digital permet de multiplier les ventes bien au-delà des clients de passage. BAROUBA GROUP installe une mécanique d'acquisition continue générant des commandes quotidiennes en boutique et en livraison.",
    deliverables: [
      {
        title: 'Mise en Valeur Visuelle & Vidéos Produits',
        desc: 'Shooting et formats vidéos démonstratifs mettant en avant les bénéfices et la qualité des articles.',
      },
      {
        title: 'Campagnes Publicitaires Locales de Chalandise',
        desc: 'Ciblage des quartiers et zones de chalandise immédiates à {location} pour attirer des clients en boutique.',
      },
      {
        title: 'Système de Commande WhatsApp & Organisation des Livraisons',
        desc: 'Prise de commande rapide avec localisation GPS transmise aux livreurs partenaires.',
      },
      {
        title: 'Fidélisation & Offres Spéciales sur Base Clients',
        desc: 'Campagnes de relance par WhatsApp et SMS pour générer des réachats réguliers sans frais publicitaires.',
      },
    ],
    benefits: [
      'Multiplication par 2 à 4 du volume de commandes mensuelles en boutique et livraison',
      'Écoulement rapide des stocks sans devoir brader vos marges commerciales',
      'Création d’un fichier client propriétaire pour des ventes récurrentes',
      'Notoriété locale dominante dans votre quartier et votre ville',
    ],
    faq: [
      {
        question: 'Comment organiser les livraisons à {location} ?',
        answer: 'Nous intégrons des protocoles simples avec vos livreurs habituels et confirmons l’adresse par géolocalisation WhatsApp.',
      },
      {
        question: 'Ce service est-il adapté à une boutique qui débute ?',
        answer: 'Oui, nous proposons des packs d’entrée très abordables conçus pour s’autofinancer dès les premières semaines.',
      },
    ],
  },
  // 20. FORMATION MARKETING DIGITAL
  {
    prefix: 'formation-marketing-digital',
    name: 'Formation Certifiante en Marketing Digital & Acquisition',
    shortTitle: 'Formation Marketing Digital',
    badge: 'Académie & Compétences Métier',
    iconType: 'school',
    h1: 'Formation en Marketing Digital à {location} : Pratique & Certifiante',
    hook: 'Rejoignez la meilleure formation en marketing digital à {location}. Pratique intensive sur Facebook Ads, création de contenu et closing WhatsApp.',
    description: "La formation de BAROUBA GROUP à {location} s'adresse aux entrepreneurs, étudiants et responsables marketing souhaitant maîtriser les compétences les plus recherchées du marché : media buying rentabilisé, community management d'élite, tunnels WhatsApp et création de sites web modernes.",
    deliverables: [
      {
        title: 'Pratique Intensive sur Projets Réels',
        desc: 'Chaque participant configure et lance ses propres campagnes sous la supervision directe de nos experts.',
      },
      {
        title: 'Boîte à Outils & Modèles de Tunnels Fournis',
        desc: 'Accès à nos templates de pages de capture, scripts de vente et prompts d’intelligence artificielle.',
      },
      {
        title: 'Accompagnement & Résolution des Blocages',
        desc: 'Assistance personnalisée pour sécuriser vos comptes publicitaires et optimiser votre rentabilité.',
      },
      {
        title: 'Attestation de Compétences Reconnue BAROUBA GROUP',
        desc: 'Délivrance d’un certificat attestant de votre maîtrise opérationnelle des leviers du digital.',
      },
    ],
    benefits: [
      'Compétences hautement valorisables sur le marché de l’emploi ou pour votre propre entreprise',
      'Autonomie totale pour piloter vos budgets sans dépendre d’agences extérieures',
      'Intégration d’un réseau professionnel actif d’entrepreneurs et de media buyers',
      'Accès aux mises à jour régulières sur les nouvelles fonctionnalités publicitaires',
    ],
    faq: [
      {
        question: 'Faut-il des prérequis techniques pour s’inscrire à {location} ?',
        answer: 'Aucun prérequis informatique particulier : savoir utiliser un smartphone et un ordinateur suffit, tout est expliqué pas à pas.',
      },
      {
        question: 'La formation se déroule-t-elle en ligne ou en présentiel ?',
        answer: 'Nous proposons des sessions présentielles à Ouagadougou et Bobo-Dioulasso, ainsi qu’un format hybride en ligne avec suivi direct.',
      },
    ],
  },
  // 21. COMMUNICATION DIGITALE STRATÉGIQUE
  {
    prefix: 'communication-digitale',
    name: 'Communication Digitale Stratégique & Image de Marque',
    shortTitle: 'Communication Digitale',
    badge: 'Cabinet N°1 Communication Digitale',
    iconType: 'share-2',
    h1: 'Communication Digitale à {location} : Rayonnement & Notoriété',
    hook: 'Sublimez l’image de votre entreprise à {location}. Stratégie de marque haut de gamme, création de contenus visuels et modération active 7j/7 au Burkina Faso et en Afrique de l’Ouest.',
    description: "La communication digitale à {location} ne se résume pas à poster des images. BAROUBA GROUP construit votre autorité de marque : ligne éditoriale captivante, création graphique de prestige, gestion de communauté 7j/7 et protection proactive contre les bad buzz pour installer la confiance auprès de vos clients et partenaires.",
    deliverables: [
      {
        title: 'Direction Artistique de Prestige & Chartes Graphiques',
        desc: 'Conception d’une identité visuelle singulière et valorisante, déclinable sur tous vos supports digitaux.',
      },
      {
        title: 'Calendrier Éditorial & Formats Vidéos Verticaux (Reels, TikTok)',
        desc: 'Planification mensuelle des prises de parole avec production de formats courts à forte rétention d’attention.',
      },
      {
        title: 'Modération des Commentaires & Réponses aux DMs 7j/7',
        desc: 'Présence continue pour répondre aux questions de votre communauté en moins de 15 minutes.',
      },
      {
        title: 'Rapports Mensuels d’Engagement & Croissance d’Audience',
        desc: 'Analyse transparente des indicateurs de notoriété, d’interaction et d’attachement à la marque.',
      },
    ],
    benefits: [
      'Statut de marque leader respectée et admirée à {location}',
      'Fidélisation renforcée de votre communauté et attachement émotionnel à l’entreprise',
      'Protection intégrale de votre e-réputation contre les rumeurs et les attaques',
      'Gain de temps absolu pour vos équipes dirigeantes',
    ],
    faq: [
      {
        question: 'Pourquoi soigner la communication digitale à {location} ?',
        answer: 'Parce que 80% des clients consultent vos pages réseaux sociaux avant de vous accorder leur confiance ou de passer commande.',
      },
      {
        question: 'Vos community managers sont-ils disponibles le week-end ?',
        answer: 'Oui, nous assurons des permanences actives 7 jours sur 7 avec un délai de réponse moyen sous les 15 minutes.',
      },
    ],
  },
  // 22. AGENCE DE COMMUNICATION DIGITALE
  {
    prefix: 'agence-communication-digitale',
    name: 'Agence de Communication Digitale & Relations Publiques',
    shortTitle: 'Agence Communication Digitale',
    badge: 'Agence N°1 Communication Digitale',
    iconType: 'sparkles',
    h1: 'Agence de Communication Digitale N°1 à {location}',
    hook: 'Confiez votre image de marque au cabinet de communication digitale de référence à {location}. Stratégie 360°, direction artistique et gestion d’e-réputation officielle.',
    description: "À {location}, les entreprises leaders confient leur voix à BAROUBA GROUP. Nous allions rigueur journalistique, créativité graphique de pointe et animation réactive pour faire de votre marque le premier choix naturel de votre secteur.",
    deliverables: [
      {
        title: 'Audit Complet d’E-Réputation & Analyse Concurrentielle',
        desc: 'Diagnostic approfondi de votre image perçue à {location} et identification des axes de différenciation.',
      },
      {
        title: 'Stratégie de Communication 360° & Relations Publiques Digitales',
        desc: 'Campagnes de relations publiques, tribunes d’experts et relais auprès des leaders d’opinion.',
      },
      {
        title: 'Gestion Complète de Comptes Réseaux Sociaux 7j/7',
        desc: 'Animation quotidienne, visuels soignés et veille réputationnelle 365 jours par an.',
      },
      {
        title: 'Contrat de Prestation Officiel avec Engagements Fermes',
        desc: 'Cession de tous les droits d’auteur, respect absolu de la confidentialité et des chartes éthiques.',
      },
    ],
    benefits: [
      'Rayonnement institutionnel et commercial incontesté à {location}',
      'Cohérence visuelle absolue sur l’ensemble de vos canaux de communication',
      'Interlocuteur senior dédié et réactivité garantie sous 24h',
      'Protection de la réputation de l’entreprise et de ses dirigeants',
    ],
    faq: [
      {
        question: 'Quels types d’entreprises accompagnez-vous à {location} ?',
        answer: 'Nous accompagnons les PME ambitieuses, les institutions publiques, les ONG, les banques et les promoteurs immobiliers.',
      },
      {
        question: 'Comment se déroule le démarrage d’une mission ?',
        answer: 'Dès validation de votre devis, nous animons un atelier de cadrage de 45 minutes pour définir votre ligne éditoriale et livrons les premières maquettes sous 5 jours.',
      },
    ],
  },

  // 24. PUBLICITÉ FACEBOOK MAÎTRESSE
  {
    prefix: 'publicite-facebook',
    name: 'Publicité Facebook & Meta Ads Haute Performance',
    shortTitle: 'Publicité Facebook',
    badge: 'Cabinet N°1 Publicité Facebook',
    iconType: 'trending-up',
    h1: 'Publicité Facebook Ads à {location} : Ventes & Rentabilité Garantie',
    hook: 'Décuplez votre chiffre d’affaires à {location} avec la publicité Facebook Ads. Campagnes d’acquisition chirurgicales, tracking CAPI serveur 100% fiable et rentabilité garantie sous la direction de Monsieur SAKO BAROU BEN OUMAR.',
    description: "À {location}, les entreprises leaders ne se contentent plus de simples « boosts » de publications. BAROUBA GROUP déploie un système d’ingénierie publicitaire Meta Ads complet : paramétrage d’objectifs de conversion, tracking serveur sans perte de données, sécurisation des comptes et chiffrage 100% sur-mesure.",
    deliverables: [
      {
        title: 'Ciblage d’Audience Solvable & Buyer Persona à {location}',
        desc: 'Identification des segments démographiques et centres d’intérêt ayant le pouvoir d’achat le plus élevé.',
      },
      {
        title: 'Conception de Visuels & Copywriting Haute Conversion',
        desc: 'Création graphique percutante et rédaction adaptée à la psychologie d’achat des clients locaux.',
      },
      {
        title: 'Tracking Serveur CAPI & Pilotage par les Ventes Réelles',
        desc: 'Installation sans perte de données reliant vos campagnes à vos encaissements réels en caisse ou livraison.',
      },
      {
        title: 'Optimisation Continue & Scaling Maîtrisé des Budgets',
        desc: 'Ajustement quotidien des enchères pour baisser le coût par prospect et maximiser votre bénéfice net.',
      },
    ],
    benefits: [
      'Flux ininterrompu d’acheteurs prêts à commander sur votre marché',
      'Coût par prospect (CPL) et coût par vente strictement maîtrisés',
      'Connexion directe vers votre WhatsApp commercial pour un closing rapide',
      'Contrat officiel d’accompagnement avec engagement de performance',
    ],
    faq: [
      {
        question: 'Quel budget publicitaire Facebook prévoir à {location} ?',
        answer: 'Nous ne vendons aucun forfait fixe. Votre budget est calculé sur-mesure selon votre marge unitaire, votre panier moyen et vos objectifs de vente réels.',
      },
      {
        question: 'Comment garantissez-vous la rentabilité de mes campagnes ?',
        answer: 'Grâce au tracking serveur CAPI et à des tests créatifs méthodiques, nous coupons immédiatement les annonces non rentables pour concentrer vos dépenses sur les leviers gagnants.',
      },
    ],
  },
  // 25. CAMPAGNE DE PROSPECTS FACEBOOK
  {
    prefix: 'campagne-prospects-facebook',
    name: 'Campagne de Génération de Prospects Facebook',
    shortTitle: 'Campagne Prospects Facebook',
    badge: 'Génération de Leads Qualifiés',
    iconType: 'target',
    h1: 'Campagne de Génération de Prospects Facebook à {location}',
    hook: 'Alimentez vos commerciaux à {location} avec un flux continu de prospects qualifiés prêts à acheter, générés via des formulaires instantanés Facebook Ads ultra-optimisés.',
    description: "Les campagnes de génération de prospects Facebook Ads permettent aux entreprises à {location} de collecter nom, téléphone, ville et besoins de clients solvables. BAROUBA GROUP intègre des filtres anti-curieux pour ne transmettre à votre force de vente que des opportunités d'affaires à haute valeur.",
    deliverables: [
      {
        title: 'Formulaires Instantanés Haute Conversion Meta Lead Ads',
        desc: 'Conception de formulaires rapides sur smartphone réduisant la friction au minimum.',
      },
      {
        title: 'Questions de Qualification & Filtrage Anti-Curieux',
        desc: 'Élimination des contacts sans budget pour concentrer vos commerciaux sur les vrais acheteurs.',
      },
      {
        title: 'Synchronisation Immédiate WhatsApp & CRM Commercial',
        desc: 'Notification instantanée dès qu’un prospect s’enregistre pour un rappel en moins de 15 minutes.',
      },
      {
        title: 'Suivi Hebdomadaire du Coût par Prospect Qualifié (CPL)',
        desc: 'Optimisation continue pour faire baisser le coût du contact tout en augmentant le taux de signature.',
      },
    ],
    benefits: [
      'Carnet de commandes rempli pour vos équipes commerciales',
      'Données de contact certifiées avec numéro de téléphone valide',
      'Gain de temps massif pour vos vendeurs qui ne prospectent plus à froid',
      'Visibilité totale sur votre coût d’acquisition client par secteur',
    ],
    faq: [
      {
        question: 'Combien de prospects puis-je espérer par jour à {location} ?',
        answer: 'Le volume dépend directement de votre budget quotidien et de l’attractivité de votre offre. En moyenne, nos campagnes génèrent entre 10 et 50 prospects qualifiés par jour.',
      },
      {
        question: 'Comment mes commerciaux reçoivent-ils les contacts ?',
        answer: 'Les prospects sont synchronisés en temps réel sur WhatsApp ou dans une feuille de calcul sécurisée avec alertes instantanées.',
      },
    ],
  },
  // 26. CAMPAGNE DE VENTES FACEBOOK
  {
    prefix: 'campagne-ventes-facebook',
    name: 'Campagne de Ventes & Conversions Facebook Ads',
    shortTitle: 'Campagne Ventes Facebook',
    badge: 'Conversions & Ventes Directes',
    iconType: 'trending-up',
    h1: 'Campagne de Ventes Facebook Ads à {location}',
    hook: 'Transformez vos annonces Facebook en commandes fermes et encaissements réels à {location} grâce aux campagnes de conversion Meta Ads optimisées pour le commerce local.',
    description: "Vendre directement avec la publicité Facebook à {location} exige un écosystème rodé : catalogue produit attrayant, offre irrésistible, et tunnel d'achat optimisé pour le paiement par Mobile Money ou à la livraison. BAROUBA GROUP maximise votre retour sur dépenses publicitaires.",
    deliverables: [
      {
        title: 'Catalogue Produits Dynamique & Annonces Carrousel',
        desc: 'Mise en avant percutante de vos articles avec prix clairs et photos attractives.',
      },
      {
        title: 'Optimisation pour Paiement Mobile Money & Livraison',
        desc: 'Parcours de commande pensé pour les réalités du commerce au Burkina et en Afrique de l’Ouest.',
      },
      {
        title: 'Retargeting Agressif des Paniers Abandonnés',
        desc: 'Relance automatique des personnes ayant manifesté un intérêt sans finaliser leur achat.',
      },
      {
        title: 'Mesure du ROAS Net (Chiffre d’Affaires vs Dépenses Pub)',
        desc: 'Rapport financier transparent sur la rentabilité nette de chaque produit promu.',
      },
    ],
    benefits: [
      'Accélération immédiate de la rotation de vos stocks',
      'Acquisition de nouveaux clients acheteurs chaque jour',
      'Rentabilité prévisible et calculable au franc CFA près',
      'Diminution drastique des invendus en boutique ou entrepôt',
    ],
    faq: [
      {
        question: 'Faut-il obligatoirement un site e-commerce pour vendre sur Facebook ?',
        answer: 'Non. Nous concevons également des tunnels de vente allégés ou des parcours de commande directs vers WhatsApp pour convertir sans site complexe.',
      },
      {
        question: 'Comment gérez-vous les retours ou refus de livraison ?',
        answer: 'Nos campagnes intègrent un filtrage des acheteurs et une confirmation téléphonique systématique pour maintenir un taux de livraison supérieur à 85%.',
      },
    ],
  },
  // 27. CAMPAGNE WHATSAPP FACEBOOK
  {
    prefix: 'campagne-whatsapp-facebook',
    name: 'Campagne Facebook Ads vers WhatsApp Business',
    shortTitle: 'Campagne Facebook WhatsApp',
    badge: 'Click-to-WhatsApp Rentable',
    iconType: 'message-square',
    h1: 'Campagne Facebook vers WhatsApp à {location}',
    hook: 'Générez des dizaines de conversations d’achat qualifiées chaque jour directement sur votre WhatsApp Business à {location} grâce aux campagnes Click-to-WhatsApp de BAROUBA GROUP.',
    description: "Au Burkina Faso, WhatsApp est le centre névralgique de toute vente. Nos campagnes Click-to-WhatsApp ciblent les utilisateurs les plus enclins à engager la conversation, avec un message pré-écrit stratégique qui lance la vente immédiatement sans effort.",
    deliverables: [
      {
        title: 'Campagnes Click-to-WhatsApp à Fort Taux de Clic',
        desc: 'Créatifs publicitaires engageants incitant les prospects à cliquer vers votre messagerie.',
      },
      {
        title: 'Messages d’Amorce Personnalisés & Structurés',
        desc: 'Chaque clic ouvre la discussion avec une demande précise sur le produit ou service désiré.',
      },
      {
        title: 'Scripts de Réponse & Formation Commerciale de vos Équipes',
        desc: 'Techniques de closing sur WhatsApp pour transformer les simples demandes de prix en commandes.',
      },
      {
        title: 'Tracking des Ventes Réalisées sur WhatsApp',
        desc: 'Protocole de suivi pour identifier quelles annonces génèrent les clients les plus dépensiers.',
      },
    ],
    benefits: [
      'Contact humain direct favorisant la confiance et la rapidité d’achat',
      'Fichier client WhatsApp constitué pour vos relances gratuites futures',
      'Coût par conversation ultra-compétitif sur le marché burkinabè',
      'Adapté à tous les secteurs : commerce, services, immobilier, santé',
    ],
    faq: [
      {
        question: 'Puis-je utiliser un numéro WhatsApp personnel ?',
        answer: 'Nous recommandons fortement un compte WhatsApp Business configuré avec catalogue et réponses rapides pour un rendu professionnel.',
      },
      {
        question: 'Comment éviter d’être submergé par des messages inutiles ?',
        answer: 'Nous affichons les conditions clés et fourchettes de prix dans l’annonce pour filtrer les profils non solvables avant même qu’ils ne cliquent.',
      },
    ],
  },
  // 28. DÉBLOCAGE COMPTE RESTREINT FACEBOOK
  {
    prefix: 'compte-publicitaire-facebook-restreint',
    name: 'Assistance & Déblocage Compte Publicitaire Meta Ads',
    shortTitle: 'Déblocage Compte Meta Ads',
    badge: 'Assistance d’Urgence Meta',
    iconType: 'layers',
    h1: 'Déblocage de Compte Publicitaire Facebook Restreint à {location}',
    hook: 'Compte publicitaire ou Business Manager restreint à {location} ? Débloquez vos actifs en urgence avec notre protocole officiel, vérification RCCM/IFU et création d’architectures de secours.',
    description: "Une suspension publicitaire imprévue par Meta bloque immédiatement les ventes de votre entreprise. BAROUBA GROUP diagnostique la cause exacte du blocage, constitue votre dossier juridique officiel et sécurise vos opérations pour pérenniser votre diffusion.",
    deliverables: [
      {
        title: 'Audit Express de Conformité & Diagnostic du Motif de Ban',
        desc: 'Identification précise des règles publicitaires enfreintes ou des faux positifs algorithmiques.',
      },
      {
        title: 'Rédaction & Soumission de Dossier de Recours Officiel',
        desc: 'Procédure formelle auprès du support Meta Pro avec pièces d’identité et documents d’entreprise.',
      },
      {
        title: 'Vérification Entreprise Meta Business Suite (RCCM & IFU)',
        desc: 'Validation officielle de votre statut juridique pour déverrouiller durablement les plafonds.',
      },
      {
        title: 'Mise en Place d’un Compte Publicitaire de Secours (Backup)',
        desc: 'Infrastructure redondante permettant de relancer immédiatement les ventes en cas d’aléa.',
      },
    ],
    benefits: [
      'Reprise d’activité accélérée pour minimiser vos pertes de chiffre d’affaires',
      'Protection définitive de vos pages et pixels historiques de valeur',
      'Conformité stricte avec les politiques commerciales de Meta',
      'Accompagnement d’experts ayant résolu des dizaines de cas critiques',
    ],
    faq: [
      {
        question: 'Un compte publicitaire définitivement désactivé peut-il être sauvé ?',
        answer: 'Si le rejet final est prononcé sur un compte précis, nous transférons vos actifs (Pixel, Page, Catalogue) vers une nouvelle structure saine et vérifiée pour reprendre la diffusion sans perte d’historique.',
      },
      {
        question: 'Combien de temps prend le déblocage avec vos experts ?',
        answer: 'Le diagnostic et l’envoi du dossier officiel se font en 24h. Les réponses de Meta interviennent généralement sous 24 à 72 heures.',
      },
    ],
  },
  // 29. API DE CONVERSION META (CAPI)
  {
    prefix: 'api-conversion-facebook',
    name: 'Installation API de Conversion Meta & Tracking CAPI',
    shortTitle: 'API Conversion Meta (CAPI)',
    badge: 'Tracking Serveur 100% Fiable',
    iconType: 'cpu',
    h1: 'API de Conversion Facebook (CAPI) & Tracking Serveur à {location}',
    hook: 'Éliminez les pertes de données causées par iOS 14+ et les bloqueurs de pub à {location}. Implémentez l’API de Conversions Meta Server-Side pour tracker 100% de vos ventes réelles.',
    description: "Le simple pixel navigateur perd aujourd'hui plus de 30% des transactions réelles. En déployant l'API de Conversion (CAPI) côté serveur, BAROUBA GROUP garantit une transmission directe et cryptée de chaque événement d'achat à Meta, permettant à l'algorithme d'optimiser vos coûts d'acquisition.",
    deliverables: [
      {
        title: 'Configuration CAPI Server-Side via Passerelle Cloud',
        desc: 'Envoi sécurisé des événements d’achat et de prospects directement depuis le serveur vers Meta.',
      },
      {
        title: 'Déduplication Parfaite Pixel Navigateur & CAPI Serveur',
        desc: 'Paramétrage des identifiants d’événements uniques pour éviter tout double comptage statistique.',
      },
      {
        title: 'Optimisation du Score de Qualité des Événements (EMQ)',
        desc: 'Transmission des paramètres avancés (téléphone haché, email, ville) pour un matching optimal.',
      },
      {
        title: 'Tracking des Ventes Hors-Ligne & Paiements Mobile Money',
        desc: 'Réconciliation des encaissements en espèces et livraisons avec vos annonces diffusées.',
      },
    ],
    benefits: [
      'Récupération de 100% de vos données de rentabilité publicitaire',
      'Baisse mécanique du coût par acquisition grâce à un meilleur ciblage algorithmique',
      'Protection totale contre les futures restrictions sur les cookies tiers',
      'Visibilité exacte sur le retour sur investissement de chaque campagne',
    ],
    faq: [
      {
        question: 'Pourquoi le simple Pixel ne suffit-il plus aujourd’hui ?',
        answer: 'Les bloqueurs de pub, le mode privé des navigateurs et les mises à jour Apple bloquent l’exécution du script JavaScript dans le navigateur. Seule la CAPI serveur garantit la transmission de la donnée.',
      },
      {
        question: 'L’installation de la CAPI ralentit-elle mon site web ?',
        answer: 'Au contraire, le traitement se fait sur le serveur en arrière-plan, ce qui allège le navigateur du visiteur et accélère le temps de chargement de vos pages.',
      },
    ],
  },
  // 30. BUDGET PUBLICITÉ FACEBOOK SUR-MESURE
  {
    prefix: 'budget-publicite-facebook',
    name: 'Chiffrage & Budget Publicitaire Facebook Sur-Mesure',
    shortTitle: 'Budget Publicité Facebook',
    badge: 'Ingénierie Budgétaire Sur-Mesure',
    iconType: 'target',
    h1: 'Budget Publicité Facebook Sur-Mesure à {location}',
    hook: 'Fini les forfaits rigides inefficaces. À {location}, BAROUBA GROUP calcule votre budget publicitaire Facebook au centime près en fonction de votre marge brute, de votre panier moyen et de votre capacité commerciale.',
    description: "Appliquer un forfait standard de 50 000 ou 100 000 FCFA sans analyse préalable mène droit à l'échec. Notre cabinet applique une méthode d'ingénierie financière rigoureuse pour déterminer votre seuil de rentabilité (Break-even ROAS) et calibrer une dépense quotidienne hautement profitable.",
    deliverables: [
      {
        title: 'Étude Mathématique de Rentabilité Unitaire & Marge Nette',
        desc: 'Analyse précise de votre modèle économique pour définir le coût d’acquisition maximum acceptable.',
      },
      {
        title: 'Calcul du Seuil de Rentabilité Publicitaire (Break-Even ROAS)',
        desc: 'Détermination du multiplicateur minimal de chiffre d’affaires pour couvrir toutes les charges.',
      },
      {
        title: 'Calibrage de l’Allocation Budgétaire Journalière Évolutive',
        desc: 'Montée en charge progressive : phase de test, phase de stabilisation, phase de scaling massif.',
      },
      {
        title: 'Dimensionnement selon la Capacité Commerciale de Traitement',
        desc: 'Ajustement du volume de leads pour ne jamais saturer ni sous-alimenter vos vendeurs.',
      },
    ],
    benefits: [
      'Zéro gaspillage de trésorerie sur des montants arbitraires non justifiés',
      'Chaque franc CFA investi est adossé à un objectif de marge nette',
      'Transparence totale et prévisibilité financière de votre croissance',
      'Stratégie contractuellement validée sous l’autorité de M. SAKO BAROU BEN OUMAR',
    ],
    faq: [
      {
        question: 'Pourquoi refusez-vous de proposer un pack mensuel à prix fixe ?',
        answer: 'Parce que ce serait malhonnête. Un promoteur immobilier et un e-commerçant ont des réalités financières opposées. Un budget efficace est obligatoirement modélisé sur-mesure.',
      },
      {
        question: 'Quel est le budget minimum recommandé pour démarrer un test sérieux ?',
        answer: 'Nous recommandons généralement une enveloppe de test permettant de générer au moins 50 événements de conversion pour que l’algorithme de Meta sorte de sa phase d’apprentissage.',
      },
    ],
  },

];

export interface FlatMetierCombo {
  slug: string;
  template: FlatMetierTemplate;
  city?: TerritoryCity;
  country: TerritoryCountry;
  isNational: boolean;
  locationName: string;
  customTitle?: string;
  customDescription?: string;
  customH1?: string;
}

// Map for ultra-fast O(1) resolution of flat métier slugs
const FLAT_METIER_MAP = new Map<string, FlatMetierCombo>();

// Initialize all combos
for (const tmpl of FLAT_METIERS) {
  // 1. City combos (54 cities x templates)
  for (const city of TERRITORY_CITIES) {
    const country = getCountryBySlug(city.countrySlug);
    if (!country) continue;
    const slug = `${tmpl.prefix}-${city.slug}`;
    FLAT_METIER_MAP.set(slug, {
      slug,
      template: tmpl,
      city,
      country,
      isNational: false,
      locationName: city.name,
    });
  }

  // 2. National country combos (12 countries x templates)
  for (const country of TERRITORY_COUNTRIES) {
    const slug = `${tmpl.prefix}-${country.slug}`;
    FLAT_METIER_MAP.set(slug, {
      slug,
      template: tmpl,
      country,
      isNational: true,
      locationName: country.name,
    });
  }
}

// 3. Conversational and Exact Aliases (Natural language with prepositions & High-Intent Queries)
const SPECIAL_MARKETING_PAGES: Array<{
  slug: string;
  templatePrefix: string;
  countrySlug: string;
  citySlug?: string;
  customTitle: string;
  customDescription: string;
  customH1?: string;
}> = [
  {
    slug: 'marketing-digital-au-burkina-faso',
    templatePrefix: 'marketing-digital',
    countrySlug: 'burkina-faso',
    customTitle: 'Marketing Digital au Burkina Faso | BAROUBA GROUP',
    customDescription: 'Cabinet n°1 en marketing digital au Burkina Faso. Boostez vos ventes avec nos campagnes publicitaires Meta, tunnels WhatsApp et plateformes Next.js.',
    customH1: 'Marketing Digital au Burkina Faso : Stratégie & Ventes d’Élite',
  },
  {
    slug: 'marketing-digital-a-ouagadougou',
    templatePrefix: 'marketing-digital',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Marketing Digital à Ouagadougou : Stratégie & Ventes',
    customDescription: 'Développez votre clientèle à Ouagadougou avec le marketing digital. Campagnes ciblées, tunnels de vente et conversion mobile money à fort impact.',
    customH1: 'Marketing Digital à Ouagadougou : Dominez Votre Marché Local',
  },
  {
    slug: 'agence-marketing-digital-a-ouagadougou',
    templatePrefix: 'agence-marketing-digital',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Agence Marketing Digital Ouagadougou | BAROUBA GROUP',
    customDescription: 'Agence leader de marketing digital à Ouagadougou. Acquisition publicitaire, création web moderne et community management pro. Devis gratuit en 24h.',
    customH1: 'Agence de Marketing Digital N°1 à Ouagadougou',
  },
  {
    slug: 'marketing-digital-a-bobo-dioulasso',
    templatePrefix: 'marketing-digital',
    countrySlug: 'burkina-faso',
    citySlug: 'bobo-dioulasso',
    customTitle: 'Marketing Digital à Bobo-Dioulasso | Élite Digitale',
    customDescription: 'Propulsez vos ventes à Bobo-Dioulasso grâce au marketing digital de pointe. Stratégies sur-mesure, WhatsApp commercial et suivi chiffré du ROI.',
    customH1: 'Marketing Digital à Bobo-Dioulasso : Croissance & Rentabilité',
  },
  {
    slug: 'agence-marketing-digital-a-bobo-dioulasso',
    templatePrefix: 'agence-marketing-digital',
    countrySlug: 'burkina-faso',
    citySlug: 'bobo-dioulasso',
    customTitle: 'Agence Marketing Digital Bobo-Dioulasso | BAROUBA',
    customDescription: 'Agence n°1 en marketing digital à Bobo-Dioulasso. Publicité ciblée, gestion réseaux sociaux et croissance commerciale pour leaders économiques.',
    customH1: 'Agence de Marketing Digital N°1 à Bobo-Dioulasso (Siège)',
  },
  {
    slug: 'marketing-digital-en-cote-divoire',
    templatePrefix: 'marketing-digital',
    countrySlug: 'cote-divoire',
    customTitle: 'Marketing Digital en Côte d’Ivoire | BAROUBA GROUP',
    customDescription: 'Cabinet de marketing digital pour entreprises en Côte d’Ivoire. Campagnes publicitaires Abidjan, acquisition de clients et expansion e-commerce.',
    customH1: 'Marketing Digital en Côte d’Ivoire : Acquisition & Ventes',
  },
  {
    slug: 'marketing-digital-au-senegal',
    templatePrefix: 'marketing-digital',
    countrySlug: 'senegal',
    customTitle: 'Marketing Digital au Sénégal | BAROUBA GROUP Dakar',
    customDescription: 'Stratégie de marketing digital d\'élite au Sénégal. Acquisition publicitaire, création de plateformes digitales modernes et croissance de marque à Dakar.',
    customH1: 'Marketing Digital au Sénégal : Performance Commerciale',
  },
  {
    slug: 'marketing-digital-au-mali',
    templatePrefix: 'marketing-digital',
    countrySlug: 'mali',
    customTitle: 'Marketing Digital au Mali : Solutions & Croissance',
    customDescription: 'Développez votre entreprise au Mali grâce au marketing digital de pointe. Campagnes ciblées, vente sur WhatsApp et paiements sécurisés à Bamako.',
    customH1: 'Marketing Digital au Mali : Accélération Commerciale',
  },
  {
    slug: 'meilleure-agence-marketing-digital-burkina',
    templatePrefix: 'agence-marketing-digital',
    countrySlug: 'burkina-faso',
    customTitle: 'Meilleure Agence Marketing Digital Burkina | N°1',
    customDescription: 'Pourquoi BAROUBA GROUP est élue meilleure agence de marketing digital au Burkina Faso : résultats chiffrés, garanties contractuelles et support 7j/7.',
    customH1: 'Pourquoi BAROUBA GROUP est la Meilleure Agence Marketing Digital au Burkina Faso',
  },
  {
    slug: 'societe-marketing-digital-burkina-faso',
    templatePrefix: 'agence-marketing-digital',
    countrySlug: 'burkina-faso',
    customTitle: 'Société de Marketing Digital au Burkina Faso | SARL',
    customDescription: 'Société agréée de marketing digital et d’ingénierie web au Burkina Faso. Accompagnement stratégique officiel pour institutions, ONG et grandes PME.',
    customH1: 'Société Officielle de Marketing Digital & Web au Burkina Faso',
  },
  {
    slug: 'prix-marketing-digital-burkina-faso',
    templatePrefix: 'marketing-digital',
    countrySlug: 'burkina-faso',
    customTitle: 'Prix du Marketing Digital au Burkina Faso | Tarifs',
    customDescription: 'Combien coûte le marketing digital au Burkina Faso ? Découvrez nos forfaits transparents, budgets publicitaires recommandés et formules adaptées.',
    customH1: 'Prix & Tarifs du Marketing Digital au Burkina Faso en 2026',
  },
  {
    slug: 'tarif-agence-marketing-digital-burkina',
    templatePrefix: 'agence-marketing-digital',
    countrySlug: 'burkina-faso',
    customTitle: 'Tarifs Agence Marketing Digital Burkina | Forfaits',
    customDescription: 'Grille tarifaire claire de notre agence de marketing digital au Burkina Faso. Packs mensuels sans engagement caché et devis personnalisé sous 24h.',
    customH1: 'Grille Tarifaire de notre Agence de Marketing Digital au Burkina',
  },
  {
    slug: 'devis-marketing-digital-ouagadougou',
    templatePrefix: 'agence-marketing-digital',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Devis Marketing Digital Ouagadougou | Réponse en 24h',
    customDescription: 'Demandez votre devis gratuit de marketing digital à Ouagadougou. Audit offert de vos réseaux sociaux et plan d\'acquisition adapté à vos objectifs.',
    customH1: 'Obtenez Votre Devis de Marketing Digital à Ouagadougou Sous 24h',
  },
  {
    slug: 'expert-marketing-digital-burkina-faso',
    templatePrefix: 'marketing-digital',
    countrySlug: 'burkina-faso',
    customTitle: 'Expert en Marketing Digital au Burkina Faso | Audit',
    customDescription: 'Consultez un expert senior en marketing digital au Burkina Faso. Diagnostic approfondi, pilotage de budget et accélération de croissance pour PME.',
    customH1: 'Expert Senior en Marketing Digital au Burkina Faso',
  },
  {
    slug: 'consultant-marketing-digital-ouagadougou',
    templatePrefix: 'marketing-digital',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Consultant Marketing Digital Ouagadougou | Stratégie',
    customDescription: 'Bénéficiez des conseils d\'un consultant en marketing digital à Ouagadougou. Optimisation de tunnel de vente, acquisition de leads et suivi du ROI.',
    customH1: 'Consultant Senior en Marketing Digital à Ouagadougou',
  },
  {
    slug: 'gestion-page-facebook-ouagadougou',
    templatePrefix: 'community-manager',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Gestion de Page Facebook à Ouagadougou | 7j/7',
    customDescription: 'Confiez la gestion de vos pages Facebook et Instagram à Ouagadougou à des professionnels. Visuels soignés, modération 7j/7 et croissance organique.',
    customH1: 'Gestion Professionnelle de Page Facebook & Réseaux Sociaux à Ouagadougou',
  },
  {
    slug: 'marketing-digital-immobilier-burkina',
    templatePrefix: 'marketing-digital-immobilier',
    countrySlug: 'burkina-faso',
    customTitle: 'Marketing Digital Immobilier au Burkina Faso | Ventes',
    customDescription: 'Stratégie marketing digital pour agences immobilières et promoteurs au Burkina Faso. Vendez vos parcelles et villas à la clientèle locale et diaspora.',
    customH1: 'Marketing Digital Immobilier au Burkina Faso : Vendez Vos Terrains & Villas',
  },
  // COMMUNICATION DIGITALE SLUGS D'ÉLITE
  {
    slug: 'communication-digitale-au-burkina',
    templatePrefix: 'communication-digitale',
    countrySlug: 'burkina-faso',
    customTitle: 'Communication Digitale au Burkina | BAROUBA GROUP',
    customDescription: 'Guide & solutions de communication digitale au Burkina Faso. Stratégie de marque, gestion réseaux sociaux 7j/7 et e-réputation d’entreprise.',
    customH1: 'Communication Digitale au Burkina : Stratégie & Notoriété',
  },
  {
    slug: 'communication-digitale-au-burkina-faso',
    templatePrefix: 'communication-digitale',
    countrySlug: 'burkina-faso',
    customTitle: 'Communication Digitale au Burkina Faso | Leader N°1',
    customDescription: 'Cabinet leader en communication digitale au Burkina Faso. Sublimez votre image de marque, fédérez votre audience et dominez votre secteur.',
    customH1: 'Communication Digitale au Burkina Faso : Image de Marque & Impact',
  },
  {
    slug: 'agence-communication-digitale-burkina-faso',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'burkina-faso',
    customTitle: 'Agence Communication Digitale Burkina Faso | BAROUBA',
    customDescription: 'Agence n°1 en communication digitale au Burkina Faso. Direction artistique, modération 7j/7 et relations publiques digitales pour entreprises.',
    customH1: 'Agence de Communication Digitale N°1 au Burkina Faso',
  },
  {
    slug: 'agence-communication-digitale-ouagadougou',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Agence Communication Digitale Ouagadougou | BAROUBA',
    customDescription: 'Votre agence de communication digitale à Ouagadougou. Animation réseaux sociaux, création graphique de prestige et modération 7j/7.',
    customH1: 'Agence de Communication Digitale à Ouagadougou',
  },
  {
    slug: 'communication-digitale-a-ouagadougou',
    templatePrefix: 'communication-digitale',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Communication Digitale à Ouagadougou | Stratégie',
    customDescription: 'Renforcez la notoriété de votre entreprise à Ouagadougou avec notre accompagnement en communication digitale et gestion de marque.',
    customH1: 'Communication Digitale à Ouagadougou : Notoriété & Influence',
  },
  {
    slug: 'agence-communication-digitale-bobo-dioulasso',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'burkina-faso',
    citySlug: 'bobo-dioulasso',
    customTitle: 'Agence Communication Digitale Bobo-Dioulasso | Siège',
    customDescription: 'Agence de communication digitale à Bobo-Dioulasso. Gestion de pages, community management et rayonnement pour leaders du Grand Ouest.',
    customH1: 'Agence de Communication Digitale à Bobo-Dioulasso',
  },
  {
    slug: 'communication-digitale-a-bobo-dioulasso',
    templatePrefix: 'communication-digitale',
    countrySlug: 'burkina-faso',
    citySlug: 'bobo-dioulasso',
    customTitle: 'Communication Digitale à Bobo-Dioulasso | BAROUBA',
    customDescription: 'Expertise en communication digitale à Bobo-Dioulasso. Valorisation de marque, création visuelle et engagement communautaire 7j/7.',
    customH1: 'Communication Digitale à Bobo-Dioulasso : Élite & Proximité',
  },
  {
    slug: 'communication-digitale-en-cote-divoire',
    templatePrefix: 'communication-digitale',
    countrySlug: 'cote-divoire',
    customTitle: 'Communication Digitale en Côte d’Ivoire | BAROUBA',
    customDescription: 'Solutions de communication digitale pour entreprises en Côte d’Ivoire. Image de marque, community management et influence à Abidjan.',
    customH1: 'Communication Digitale en Côte d’Ivoire : Image & Réputation',
  },
  {
    slug: 'agence-communication-digitale-abidjan',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'cote-divoire',
    citySlug: 'abidjan',
    customTitle: 'Agence Communication Digitale Abidjan | Prestige',
    customDescription: 'Agence de communication digitale d’élite à Abidjan. Conception de marque, animation de communauté et relations presse digitales en Côte d’Ivoire.',
    customH1: 'Agence de Communication Digitale à Abidjan',
  },
  {
    slug: 'communication-digitale-au-senegal',
    templatePrefix: 'communication-digitale',
    countrySlug: 'senegal',
    customTitle: 'Communication Digitale au Sénégal | BAROUBA Dakar',
    customDescription: 'Stratégie de communication digitale d’excellence au Sénégal. Image de marque, contenus engageants et veille réputationnelle à Dakar.',
    customH1: 'Communication Digitale au Sénégal : Notoriété & Impact',
  },
  {
    slug: 'agence-communication-digitale-dakar',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'senegal',
    citySlug: 'dakar',
    customTitle: 'Agence Communication Digitale Dakar | BAROUBA GROUP',
    customDescription: 'Agence leader en communication digitale à Dakar. Stratégie de contenu, animation de réseaux sociaux et communication de marque au Sénégal.',
    customH1: 'Agence de Communication Digitale à Dakar',
  },
  {
    slug: 'meilleure-agence-communication-digitale-burkina',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'burkina-faso',
    customTitle: 'Meilleure Agence Communication Digitale Burkina | N°1',
    customDescription: 'Pourquoi BAROUBA GROUP est élue meilleure agence de communication digitale au Burkina Faso : créativité, rigueur, support 7j/7 et impact prouvé.',
    customH1: 'Pourquoi BAROUBA GROUP est la Meilleure Agence de Communication Digitale au Burkina Faso',
  },
  {
    slug: 'devis-communication-digitale-ouagadougou',
    templatePrefix: 'agence-communication-digitale',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Devis Communication Digitale Ouagadougou | Gratuit 24h',
    customDescription: 'Demandez votre devis gratuit de communication digitale à Ouagadougou. Étude personnalisée de votre marque et proposition de forfait sur mesure.',
    customH1: 'Obtenez Votre Devis de Communication Digitale à Ouagadougou Sous 24h',
  },
  {
    slug: 'prix-communication-digitale-burkina',
    templatePrefix: 'communication-digitale',
    countrySlug: 'burkina-faso',
    customTitle: 'Prix Communication Digitale au Burkina Faso | Tarifs',
    customDescription: 'Découvrez les tarifs et forfaits de communication digitale au Burkina Faso. Packs mensuels transparents adaptés aux PME et institutions.',
    customH1: 'Prix & Forfaits de Communication Digitale au Burkina Faso',
  },
  {
    slug: 'plan-communication-digitale-entreprise-ouagadougou',
    templatePrefix: 'communication-digitale',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Plan de Communication Digitale Entreprise Ouagadougou',
    customDescription: 'Élaboration de plan de communication digitale complet pour entreprises à Ouagadougou : audit, objectifs, calendrier et budget maîtrisé.',
    customH1: 'Élaboration de Plan de Communication Digitale à Ouagadougou',
  },

  // ==========================================
  // FACEBOOK ADS & ACQUISITION CLUSTER (35 SLUGS PRIORITAIRES)
  // ==========================================
  {
    slug: 'campagne-prospects-facebook-burkina',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne de Prospects Facebook au Burkina',
    customDescription: 'Générez des prospects B2B et B2C qualifiés avec les formulaires instantanés Facebook Ads. Expertise BAROUBA GROUP à Ouaga.',
    customH1: 'Campagne de Génération de Prospects Facebook au Burkina Faso',
  },
  {
    slug: 'campagne-ventes-facebook-burkina',
    templatePrefix: 'campagne-ventes-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne de Ventes Facebook au Burkina',
    customDescription: 'Transformez vos annonces Facebook en commandes réelles : campagnes de vente directe et e-commerce optimisées pour l\'UEMOA.',
    customH1: 'Campagne de Ventes & Conversions Facebook au Burkina Faso',
  },
  {
    slug: 'campagne-whatsapp-facebook-burkina',
    templatePrefix: 'campagne-whatsapp-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne Facebook vers WhatsApp Burkina',
    customDescription: 'Envoyez un flux continu de clients chauds vers votre WhatsApp Business grâce aux campagnes Click-to-WhatsApp rentables.',
    customH1: 'Campagne Facebook Ads vers WhatsApp au Burkina Faso',
  },
  {
    slug: 'campagne-engagement-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne Interaction & Engagement Facebook',
    customDescription: 'Décuplez la visibilité de vos offres : campagnes d\'engagement, partages et commentaires qualifiés sur votre page Facebook.',
    customH1: 'Campagne d\'Interactions & d\'Engagement Facebook au Burkina',
  },
  {
    slug: 'campagne-notoriete-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne Notoriété Facebook au Burkina',
    customDescription: 'Faites connaître votre marque à Ouagadougou et Bobo-Dioulasso auprès de centaines de milliers de Burkinabè ciblés.',
    customH1: 'Campagne de Notoriété & Couverture Facebook au Burkina Faso',
  },
  {
    slug: 'campagne-retargeting-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne Reciblage Facebook au Burkina',
    customDescription: 'Reciblez les visiteurs de votre site et les personnes ayant interagi avec votre page pour conclure les ventes en attente.',
    customH1: 'Campagne de Reciblage (Retargeting) Facebook au Burkina Faso',
  },
  {
    slug: 'comment-lancer-publicite-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Comment Lancer une Pub Facebook au Burkina',
    customDescription: 'Guide complet pas à pas pour créer, paramétrer et diffuser votre première campagne publicitaire Facebook à fort impact.',
    customH1: 'Comment Lancer une Publicité Facebook Rentable au Burkina Faso',
  },
  {
    slug: 'comment-creer-campagne-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Comment Créer Campagne Facebook au Burkina',
    customDescription: 'Méthode professionnelle pour structurer vos campagnes Facebook : objectif, budget, ciblage et annonces percutantes.',
    customH1: 'Comment Créer une Campagne Publicitaire Facebook au Burkina',
  },
  {
    slug: 'comment-cibler-publicite-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Bien Cibler sa Publicité Facebook au Burkina',
    customDescription: 'Maîtrisez le ciblage publicitaire géographique et par centres d\'intérêt à Ouagadougou, Bobo et dans toute la sous-région.',
    customH1: 'Comment Bien Cibler son Audience sur Facebook Ads au Burkina',
  },
  {
    slug: 'comment-rediger-texte-publicite-facebook',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Rédiger une Pub Facebook qui Vend',
    customDescription: 'Techniques de copywriting adaptées au public burkinabè pour transformer les lecteurs en acheteurs décidés.',
    customH1: 'Comment Rédiger un Texte Publicitaire Facebook qui Fait Vendre',
  },
  {
    slug: 'publicite-facebook-au-burkina-faso',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Publicité Facebook au Burkina Faso | Leader',
    customDescription: 'Leader de la publicité Facebook Ads au Burkina. Campagnes rentables, gestion experte et résultats contractuellement garantis.',
    customH1: 'Publicité Facebook Ads au Burkina Faso : Acquisition & ROAS Élevé',
  },
  {
    slug: 'campagne-publicitaire-au-burkina-faso',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Campagne Publicitaire au Burkina Faso',
    customDescription: 'Confiez vos campagnes publicitaires à BAROUBA GROUP : acquisition payante ciblée, génération de leads et croissance de CA.',
    customH1: 'Campagne Publicitaire au Burkina Faso : Stratégie & Ventes',
  },
  {
    slug: 'agence-publicite-facebook-ouagadougou',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Agence Publicité Facebook à Ouagadougou',
    customDescription: 'Cabinet d\'ingénierie publicitaire Meta Ads à Ouagadougou. Maximisez vos ventes sous la direction de M. SAKO BAROU BEN OUMAR.',
    customH1: 'Agence de Publicité Facebook N°1 à Ouagadougou',
  },
  {
    slug: 'expert-publicite-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Expert Publicité Facebook au Burkina Faso',
    customDescription: 'Développez votre chiffre d’affaires avec un expert certifié Meta Ads : audit, paramétrage avancé et pilotage quotidien.',
    customH1: 'Expert Senior en Publicité Facebook Ads au Burkina Faso',
  },
  {
    slug: 'publicite-facebook-bobo-dioulasso',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'bobo-dioulasso',
    customTitle: 'Publicité Facebook à Bobo-Dioulasso',
    customDescription: 'Lancez des campagnes publicitaires Facebook ciblées sur Bobo-Dioulasso pour capter la clientèle de la capitale économique.',
    customH1: 'Publicité Facebook Ads à Bobo-Dioulasso : Ventes Locales',
  },
  {
    slug: 'publicite-facebook-koudougou',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'koudougou',
    customTitle: 'Publicité Facebook à Koudougou | Ventes',
    customDescription: 'Développez votre commerce à Koudougou grâce à des annonces Facebook géolocalisées et ultra-rentables.',
    customH1: 'Publicité Facebook Ads à Koudougou : Dominez Votre Ville',
  },
  {
    slug: 'compte-publicitaire-facebook-restreint-burkina',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Débloquer Compte Pub Facebook Restreint',
    customDescription: 'Votre compte pub est restreint ? Diagnostic d\'urgence, recours officiel et remise en route de vos campagnes avec nos experts.',
    customH1: 'Débloquer un Compte Publicitaire Facebook Restreint au Burkina',
  },
  {
    slug: 'debloquer-business-manager-facebook-burkina',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Débloquer Business Manager Facebook',
    customDescription: 'Retrouvez l\'accès complet à vos pages, pixels et comptes publicitaires bloqués dans Meta Business Manager.',
    customH1: 'Déblocage de Business Manager Meta au Burkina Faso',
  },
  {
    slug: 'recuperer-compte-facebook-desactive-ouaga',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Récupérer Compte Facebook Désactivé Ouaga',
    customDescription: 'Procédure d\'assistance pour contester la désactivation définitive de vos actifs publicitaires auprès du support Meta Pro.',
    customH1: 'Comment Récupérer un Compte Publicitaire Facebook Désactivé à Ouaga',
  },
  {
    slug: 'verification-business-manager-rccm-burkina',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Vérification Meta Business RCCM Burkina',
    customDescription: 'Validez votre statut juridique sur Meta avec vos documents RCCM et IFU pour déverrouiller les plafonds de dépense.',
    customH1: 'Vérification d\'Entreprise Meta Business Suite avec RCCM au Burkina',
  },
  {
    slug: 'compte-publicitaire-secours-facebook-ouaga',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Compte Pub Secours Facebook à Ouagadougou',
    customDescription: 'Protégez votre business contre les suspensions inopinées grâce à une structure publicitaire de secours prête à l\'emploi.',
    customH1: 'Mise en Place de Compte Publicitaire Facebook de Secours à Ouaga',
  },
  {
    slug: 'bloque-paiement-suspect-facebook-burkina',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Débloquer Compte Facebook Paiement Suspect',
    customDescription: 'Résolution des rejets de paiement et levée des blocages pour activité suspecte sur votre compte publicitaire Facebook.',
    customH1: 'Résoudre le Blocage pour Activité de Paiement Suspecte sur Meta',
  },
  {
    slug: 'securiser-business-manager-facebook-burkina',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Sécuriser Business Manager Facebook Burkina',
    customDescription: 'Protégez vos pages et budgets contre le piratage : double authentification (2FA), contrôle des accès et rôles administrateurs.',
    customH1: 'Sécuriser son Business Manager Meta contre le Piratage au Burkina',
  },
  {
    slug: 'installer-pixel-facebook-burkina',
    templatePrefix: 'api-conversion-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Installer Pixel Facebook au Burkina Faso',
    customDescription: 'Installation technique du Pixel Meta : suivi des visites, paniers ajoutés et formulaires remplis sur votre site web.',
    customH1: 'Comment Installer le Pixel Facebook sur son Site au Burkina Faso',
  },
  {
    slug: 'api-conversion-facebook-burkina-faso',
    templatePrefix: 'api-conversion-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'API de Conversion Facebook (CAPI) Burkina',
    customDescription: 'Déployez l\'API de Conversion Meta pour contourner les bloqueurs de pub et mesurer 100% de vos ventes réelles sans perte.',
    customH1: 'Installation de l\'API de Conversion Meta (CAPI) au Burkina Faso',
  },
  {
    slug: 'tracking-ventes-whatsapp-facebook-burkina',
    templatePrefix: 'api-conversion-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Tracking Ventes WhatsApp Facebook Burkina',
    customDescription: 'Suivez précisément quels messages publicitaires se transforment en clients payants sur votre WhatsApp d\'entreprise.',
    customH1: 'Tracking des Ventes WhatsApp depuis vos Publicités Facebook',
  },
  {
    slug: 'resoudre-perte-donnees-pixel-facebook',
    templatePrefix: 'api-conversion-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Résoudre Perte Données Pixel Facebook',
    customDescription: 'Rétablissez la justesse de vos données de campagne face aux restrictions de cookies et optimisez le travail de l\'algorithme.',
    customH1: 'Comment Résoudre la Perte de Données du Pixel Facebook (iOS 14+)',
  },
  {
    slug: 'offline-conversions-facebook-ouaga',
    templatePrefix: 'api-conversion-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Offline Conversions Facebook à Ouagadougou',
    customDescription: 'Reliez vos encaissements physiques en boutique ou livraisons à vos campagnes publicitaires Facebook avec le suivi hors-ligne.',
    customH1: 'Mesurer les Ventes en Magasin grâce aux Offline Conversions Meta',
  },
  {
    slug: 'budget-publicite-facebook-sur-mesure-burkina',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Budget Pub Facebook Sur-Mesure Burkina',
    customDescription: 'Chiffrage mathématique de votre budget publicitaire selon vos marges, votre panier moyen et vos objectifs de vente réels.',
    customH1: 'Calcul de Budget Publicitaire Facebook Sur-Mesure au Burkina Faso',
  },
  {
    slug: 'combien-coute-publicite-facebook-ouaga',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Combien Coûte la Pub Facebook à Ouaga ?',
    customDescription: 'Comprenez la structure des coûts (CPM, CPC) et découvrez comment maximiser chaque franc CFA investi sur la plateforme.',
    customH1: 'Combien Coûte Réellement la Publicité Facebook à Ouagadougou ?',
  },
  {
    slug: 'calculer-roas-rentabilite-facebook-burkina',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Calculer ROAS Publicité Facebook Burkina',
    customDescription: 'Méthode pour déterminer votre point mort publicitaire : combien de ventes devez-vous faire pour être largement rentable ?',
    customH1: 'Comment Calculer son Seuil de Rentabilité (ROAS) sur Facebook Ads',
  },
  {
    slug: 'reduire-cout-par-prospect-facebook-ouaga',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Réduire Coût par Prospect Facebook Ouaga',
    customDescription: 'Stratégies d\'optimisation pour diviser par deux le coût d\'acquisition de vos prospects sans baisser la qualité du lead.',
    customH1: 'Comment Diviser par Deux son Coût par Prospect sur Facebook Ads',
  },
  {
    slug: 'pourquoi-publicite-facebook-ne-vend-pas',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pourquoi Publicité Facebook ne Vend Pas ?',
    customDescription: 'Analyse des erreurs fréquentes : mauvaise audience, offre faible, créatif inadapté, et solutions concrètes pour redresser la barre.',
    customH1: 'Pourquoi Vos Publicités Facebook ne Vendent Pas (et Comment Corriger)',
  },
  {
    slug: 'audit-campagne-publicitaire-facebook-ouaga',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Audit Campagne Publicitaire Facebook Ouaga',
    customDescription: 'Faites auditer vos campagnes et votre compte publicitaire par nos experts pour identifier les fuites de budget.',
    customH1: 'Audit Technique & Stratégique de Campagne Facebook à Ouagadougou',
  },
  {
    slug: 'scaling-campagnes-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Scaler Campagnes Facebook au Burkina',
    customDescription: 'Comment augmenter son budget publicitaire de 50 000 à 1 000 000 FCFA par jour sans détruire la rentabilité de ses annonces.',
    customH1: 'Scaling de Campagnes Facebook Ads : Passer à la Vitesse Supérieure',
  },


  // --- THÈME 1 : FORMATS PUBLICITAIRES & CRÉATIFS ---
  {
    slug: 'formats-video-publicite-facebook-mobile-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Formats Vidéo Pub Facebook Mobile Burkina',
    customDescription: 'Ratios 9:16 et 4:5, durée optimale et formats recommandés pour capter l\'attention mobile des internautes burkinabè sur Facebook.',
    customH1: 'Les Meilleurs Formats Vidéo pour la Publicité Facebook Mobile au Burkina',
  },
  {
    slug: 'carrousel-publicitaire-facebook-e-commerce-ouaga',
    templatePrefix: 'campagne-ventes-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Carrousel Publicitaire Facebook Ouaga',
    customDescription: 'Multipliez vos ventes avec les annonces carrousel : présentation de collection, démonstration de gamme et prix clairs en FCFA.',
    customH1: 'Comment Créer un Carrousel Publicitaire Facebook Rentable à Ouagadougou',
  },
  {
    slug: 'publicite-facebook-stories-reels-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Stories & Reels Burkina',
    customDescription: 'Exploitez les Stories et Reels Facebook : immersion plein écran, coût par clic bas et forte mémorisation auprès des jeunes actifs.',
    customH1: 'Publicité Facebook Stories & Reels : Dominez le Flux Vidéo au Burkina',
  },
  {
    slug: 'creer-affiche-publicitaire-facebook-qui-vend',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Créer Affiche Pub Facebook qui Vend',
    customDescription: 'Règles de design publicitaire pour le marché burkinabè : contrastes visuels, psychologie des couleurs et appel à l\'action immédiat.',
    customH1: 'Comment Concevoir une Affiche Publicitaire Facebook à Fort Taux de Clic',
  },
  {
    slug: 'hook-accroche-video-publicite-facebook-ouaga',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Accroche Vidéo Pub Facebook Ouaga',
    customDescription: 'Captivez l\'audience dès les 3 premières secondes : techniques de hook rate pour diviser vos coûts publicitaires par deux.',
    customH1: 'La Science du Hook : Réussir l\'Accroche de ses Vidéos Facebook Ads à Ouaga',
  },
  {
    slug: 'ugc-video-temoignage-publicite-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Vidéo Témoignage Client Pub Facebook',
    customDescription: 'Utilisez les vidéos témoignages authentiques au smartphone (UGC) pour rassurer vos prospects burkinabè et déclencher l\'achat.',
    customH1: 'Le Pouvoir des Vidéos UGC & Témoignages Clients sur Facebook Ads au Burkina',
  },
  {
    slug: 'publicite-facebook-sans-le-son-sous-titres-bf',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook avec Sous-Titres Burkina',
    customDescription: '85% des vidéos Facebook sont lues sans le son : pourquoi intégrer des sous-titres dynamiques est vital pour vos conversions.',
    customH1: 'Pourquoi Sous-Titrer vos Publicités Vidéos Facebook au Burkina Faso',
  },
  {
    slug: 'erreurs-visuels-publicite-facebook-a-eviter-bf',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Erreurs Visuels Pub Facebook à Éviter',
    customDescription: 'Images surchargées de texte, visuels génériques occidentaux, promesses interdites : les erreurs graphiques qui ruinent vos campagnes.',
    customH1: 'Les 7 Erreurs Graphiques qui Font Échouer vos Publicités Facebook au Burkina',
  },
  {
    slug: 'faut-il-afficher-prix-sur-visuel-facebook-bf',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Afficher le Prix sur sa Pub Facebook ?',
    customDescription: 'Afficher le prix en FCFA ou inciter à venir en inbox ? Analyse stratégique pour filtrer les curieux et attirer les vrais acheteurs.',
    customH1: 'Faut-il Afficher le Prix sur son Visuel Publicitaire Facebook au Burkina ?',
  },
  {
    slug: 'ab-testing-creatif-publicite-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'A/B Testing Visuels Pub Facebook Burkina',
    customDescription: 'Méthode scientifique d\'A/B testing créatif : testez 3 visuels et 2 accroches pour identifier l\'annonce qui génère le plus de ventes.',
    customH1: 'Comment Réaliser un A/B Testing Créatif Rigoureux sur Facebook Ads',
  },

  // --- THÈME 2 : AUDIENCES & CIBLAGE AVANCÉ ---
  {
    slug: 'ciblage-interets-comportements-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Cibler par Intérêts Facebook Burkina',
    customDescription: 'Sélectionnez les centres d\'intérêt pertinents au Burkina Faso : acheteurs en ligne réguliers, utilisateurs d\'appareils haut de gamme.',
    customH1: 'Guide du Ciblage par Intérêts & Comportements sur Facebook au Burkina',
  },
  {
    slug: 'ciblage-cadres-decideurs-b2b-facebook-ouaga',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Cibler Décideurs & Cadres Facebook Ouaga',
    customDescription: 'Comment atteindre les directeurs généraux, gérants et cadres dirigeants à Ouagadougou avec la publicité Facebook B2B.',
    customH1: 'Ciblage B2B Chirurgical : Toucher les Cadres & Décideurs sur Facebook à Ouaga',
  },
  {
    slug: 'audiences-personnalisees-fichier-clients-facebook',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Audiences Fichier Clients Facebook',
    customDescription: 'Importez votre liste de numéros de téléphone et emails dans Meta Ads pour fidéliser vos clients et leur vendre de nouveaux produits.',
    customH1: 'Créer des Audiences Personnalisées à Partir de son Fichier Clients au Burkina',
  },
  {
    slug: 'audiences-similaires-lookalike-clients-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Audiences Similaires Lookalike Burkina',
    customDescription: 'Trouvez des milliers de prospects qui ressemblent à vos meilleurs clients existants grâce à la puissance des Lookalike Audiences 1%.',
    customH1: 'Déployer des Audiences Similaires (Lookalike) Performantes au Burkina Faso',
  },
  {
    slug: 'ciblage-large-broad-targeting-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Ciblage Large (Broad) Facebook Burkina',
    customDescription: 'Pourquoi le ciblage sans centres d\'intérêt domine aujourd\'hui sur Meta grâce à la puissance de l\'intelligence artificielle.',
    customH1: 'Pourquoi le Ciblage Large (Broad Targeting) Surclasse les Intérêts sur Meta',
  },
  {
    slug: 'cibler-diaspora-burkinabe-publicite-facebook',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Cibler la Diaspora Burkinabè sur Facebook',
    customDescription: 'Vendez vos parcelles, villas et services aux Burkinabè vivant en France, Côte d\'Ivoire, USA et Canada avec un ciblage géographique adapté.',
    customH1: 'Comment Cibler la Diaspora Burkinabè avec la Publicité Facebook Ads',
  },
  {
    slug: 'eviter-chevauchement-audiences-facebook-ouaga',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Éviter Chevauchement Audiences Facebook',
    customDescription: 'Ne faites pas monter vos propres enchères en concurrence : apprenez à exclure vos ensembles de publicités pour baisser vos CPM.',
    customH1: 'Résoudre le Chevauchement d\'Audiences (Overlap) sur Facebook Ads à Ouaga',
  },
  {
    slug: 'taille-audience-optimale-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Taille d\'Audience Idéale Facebook Burkina',
    customDescription: 'Quelle taille d\'audience viser au Burkina Faso ? Entre 200 000 et 1 500 000 personnes selon votre ville et votre secteur.',
    customH1: 'Quelle est la Taille d\'Audience Optimale pour une Pub Facebook au Burkina ?',
  },
  {
    slug: 'publicite-facebook-langues-nationales-moore-dioula',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook en Mooré et Dioula',
    customDescription: 'Multipliez la confiance de vos acheteurs locaux en diffusant des visuels et vidéos publicitaires en Mooré et Dioula.',
    customH1: 'L\'Impact des Langues Nationales (Mooré & Dioula) dans la Publicité Facebook',
  },
  {
    slug: 'retargeting-visiteurs-page-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Recibler Visiteurs de Page Facebook',
    customDescription: 'Reciblez automatiquement toutes les personnes ayant envoyé un message ou interagi avec votre page au cours des 90 derniers jours.',
    customH1: 'Comment Recibler les Visiteurs et Engagés de sa Page Facebook au Burkina',
  },

  // --- THÈME 3 : ENCHÈRES, ALGORITHME & BUDGETS ---
  {
    slug: 'arbitrage-cbo-vs-abo-publicite-facebook-burkina',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Arbitrage CBO vs ABO Facebook Burkina',
    customDescription: 'Budget au niveau de la campagne (CBO) ou de l\'ensemble (ABO) ? Découvrez quand utiliser chaque modèle pour optimiser vos coûts.',
    customH1: 'Arbitrage CBO vs ABO : Quelle Stratégie Budgétaire Choisir sur Meta Ads ?',
  },
  {
    slug: 'regle-des-20-pourcent-scaling-budget-facebook',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Règle des 20% Scaling Budget Facebook',
    customDescription: 'Comment augmenter votre budget publicitaire sans réinitialiser la phase d\'apprentissage de l\'algorithme Meta.',
    customH1: 'La Règle des 20% : Augmenter son Budget Facebook sans Casser la Rentabilité',
  },
  {
    slug: 'encheres-bid-cap-vs-cout-le-plus-bas-facebook',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Enchères Bid Cap vs Coût le Plus Bas',
    customDescription: 'Maîtrisez les stratégies d\'enchères : quand plafonner le coût par résultat (Bid Cap / Cost Cap) pour protéger votre marge nette.',
    customH1: 'Stratégies d\'Enchères Meta Ads : Enchère la Plus Basse vs Plafond de Coût',
  },
  {
    slug: 'resoudre-apprentissage-limite-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Résoudre Apprentissage Limité Facebook',
    customDescription: 'Votre campagne affiche « Apprentissage limité » ? Les solutions techniques pour atteindre le seuil de 50 conversions par semaine.',
    customH1: 'Comment Sortir de l\'Apprentissage Limité sur Facebook Ads au Burkina',
  },
  {
    slug: 'fatigue-publicitaire-saturation-audience-facebook',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Résoudre Fatigue Publicitaire Facebook',
    customDescription: 'Quand votre fréquence dépasse 3.5 et que votre ROAS chute : protocoles de renouvellement créatif pour relancer la rentabilité.',
    customH1: 'Détecter et Corriger la Fatigue Publicitaire sur vos Campagnes Facebook',
  },
  {
    slug: 'gerer-hausse-cpm-fetes-decembre-facebook-bf',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Gérer Hausse CPM Fin d\'Année Facebook',
    customDescription: 'Comment anticiper l\'explosion des coûts publicitaires en novembre et décembre : calendrier de diffusion et offres fortes.',
    customH1: 'Comment Gérer la Flambée des CPM Publicitaires lors des Fêtes de Fin d\'Année',
  },
  {
    slug: 'programmer-heures-diffusion-facebook-dayparting',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Programmer Heures Diffusion Facebook',
    customDescription: 'Ne diffusez pas la nuit si vos commerciaux dorment : calibrez les horaires de diffusion (Dayparting) selon vos heures de réponse.',
    customH1: 'Programmer les Heures de Diffusion (Dayparting) sur Facebook Ads au Burkina',
  },
  {
    slug: 'calculer-valeur-a-vie-client-ltv-facebook-bf',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Calculer LTV Client Publicité Facebook',
    customDescription: 'Comprenez combien vous rapporte réellement un client sur 1 an pour investir sereinement un budget d\'acquisition plus élevé.',
    customH1: 'Calculer la Valeur à Vie Client (LTV) pour Déterminer son Budget Publicitaire',
  },
  {
    slug: 'regles-automatisees-couper-pub-facebook-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Règles Automatisées Pub Facebook Burkina',
    customDescription: 'Programmez des règles automatiques dans Ads Manager pour couper les annonces non rentables et booster celles qui performent.',
    customH1: 'Automatiser la Gestion de ses Campagnes Facebook Ads avec des Règles Meta',
  },
  {
    slug: 'calculer-capacite-traitement-commercial-facebook',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Capacité Commerciale Traitement Leads',
    customDescription: 'Inutile de générer 100 leads par jour si vous ne pouvez en appeler que 20 : dimensionnez vos budgets selon vos effectifs de vente.',
    customH1: 'Comment Aligner votre Budget Publicitaire sur la Capacité de vos Commerciaux',
  },

  // --- THÈME 4 : SECTEURS D'ACTIVITÉ AU BURKINA & UEMOA ---
  {
    slug: 'publicite-facebook-immobilier-terrains-burkina',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Immobilier & Terrains BF',
    customDescription: 'Stratégie publicitaire pour promoteurs immobiliers : génération de prospects qualifiés pour l\'achat de parcelles et villas à Ouaga.',
    customH1: 'Publicité Facebook pour l\'Immobilier au Burkina : Vendre Terrains & Villas',
  },
  {
    slug: 'publicite-facebook-cliniques-sante-pharmacie-bf',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Cliniques & Santé Burkina',
    customDescription: 'Faites connaître vos spécialités médicales et cliniques dans le respect strict du code de déontologie et des règles Meta.',
    customH1: 'Publicité Facebook Éthique pour Cliniques, Centres Médicaux & Santé au Burkina',
  },
  {
    slug: 'publicite-facebook-ecoles-universites-burkina',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Écoles & Universités Ouaga',
    customDescription: 'Campagnes d\'inscriptions pour écoles privées et universités : ciblez les parents d\'élèves et bacheliers à la rentrée scolaire.',
    customH1: 'Publicité Facebook pour Écoles Privées & Universités au Burkina Faso',
  },
  {
    slug: 'publicite-facebook-restaurants-traiteurs-ouaga',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Pub Facebook Restaurants & Traiteurs',
    customDescription: 'Remplissez vos tables le week-end et boostez vos commandes de livraison à Ouagadougou avec des annonces visuelles irrésistibles.',
    customH1: 'Publicité Facebook Géolocalisée pour Restaurants & Traiteurs à Ouagadougou',
  },
  {
    slug: 'publicite-facebook-mode-vetements-femme-burkina',
    templatePrefix: 'campagne-ventes-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Prêt-à-Porter & Mode BF',
    customDescription: 'Campagnes haute rentabilité pour boutiques de vêtements, pagnes Faso Dan Fani et accessoires de mode féminine au Burkina.',
    customH1: 'Vendre des Vêtements & Articles de Mode sur Facebook Ads au Burkina Faso',
  },
  {
    slug: 'publicite-facebook-cosmetiques-beaute-burkina',
    templatePrefix: 'campagne-ventes-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Pub Facebook Cosmétiques & Beauté Ouaga',
    customDescription: 'Promotion conforme et attrayante de soins corporels et capillaires : respect des règles Meta et conversion rapide sur WhatsApp.',
    customH1: 'Publicité Facebook pour Marques de Cosmétiques & Soins de Beauté au Burkina',
  },
  {
    slug: 'publicite-facebook-btp-materiaux-construction-bf',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook BTP & Matériaux Burkina',
    customDescription: 'Ciblez les constructeurs et propriétaires en chantier : vente de fer, ciment, carrelage et prestations de gros œuvre au Burkina.',
    customH1: 'Générer des Devis BTP & Matériaux de Construction sur Facebook Ads',
  },
  {
    slug: 'publicite-facebook-concessionnaires-automobiles-bf',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Pub Facebook Véhicules & Voitures Ouaga',
    customDescription: 'Vendez vos véhicules neufs et d\'occasion à Ouagadougou : fiches détaillées, vidéos de présentation et prises de rendez-vous.',
    customH1: 'Publicité Facebook pour Concessionnaires & Vendeurs de Véhicules à Ouaga',
  },
  {
    slug: 'publicite-facebook-quincaillerie-outillage-ouaga',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Pub Facebook Quincaillerie & Équipement',
    customDescription: 'Mettez en avant vos groupes électrogènes, outillages professionnels et fournitures industrielles auprès des professionnels.',
    customH1: 'Publicité Facebook pour Quincailleries & Fournisseurs d\'Outillage au Burkina',
  },
  {
    slug: 'publicite-facebook-agroalimentaire-elevage-bf',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Agroalimentaire & Élevage',
    customDescription: 'Valorisez vos produits transformés locaux, volailles, intrants agricoles et aliments de bétail avec la publicité Facebook.',
    customH1: 'Publicité Facebook pour le Secteur Agroalimentaire & l\'Élevage au Burkina',
  },
  {
    slug: 'publicite-facebook-agences-voyage-billetterie-bf',
    templatePrefix: 'campagne-whatsapp-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Agences de Voyage Burkina',
    customDescription: 'Vendez des billets d\'avion, séjours touristiques et voyages Omra/Hadj grâce à des campagnes publicitaires à fort impact.',
    customH1: 'Publicité Facebook pour Agences de Voyage & Billetterie au Burkina Faso',
  },
  {
    slug: 'publicite-facebook-formation-professionnelle-bf',
    templatePrefix: 'campagne-prospects-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Pub Facebook Formations Pro Burkina',
    customDescription: 'Remplissez vos sessions de formation certifiante en gestion, informatique et métiers techniques à Ouagadougou et Bobo.',
    customH1: 'Générer des Inscriptions pour vos Formations Professionnelles sur Facebook',
  },

  // --- THÈME 5 : CONFORMITÉ JURIDIQUE, FISCALITÉ & SUPPORT PRO ---
  {
    slug: 'contacter-support-meta-pro-chat-direct-burkina',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Contacter Support Meta Pro Chat Burkina',
    customDescription: 'Accédez au chat direct avec un agent humain de Meta pour débloquer vos comptes publicitaires et résoudre vos litiges techniques.',
    customH1: 'Comment Contacter le Support Meta Pro par Chat Direct au Burkina Faso',
  },
  {
    slug: 'regles-publicite-medicale-sante-meta-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Règles Pub Médicale & Santé sur Meta',
    customDescription: 'Médicaments, compléments alimentaires, promesses de guérison : évitez les suspensions en respectant les politiques de santé Meta.',
    customH1: 'Ce qui est Autorisé et Interdit dans la Publicité Santé & Médicale sur Facebook',
  },
  {
    slug: 'resoudre-rejet-pratiques-commerciales-meta-bf',
    templatePrefix: 'compte-publicitaire-facebook-restreint',
    countrySlug: 'burkina-faso',
    customTitle: 'Résoudre Rejet Pratiques Inacceptables',
    customDescription: 'Votre annonce a été rejetée pour « Pratiques commerciales inacceptables » ? Découvrez comment reformuler votre offre pour être validé.',
    customH1: 'Comment Corriger le Rejet pour « Pratiques Commerciales Inacceptables » sur Meta',
  },
  {
    slug: 'contourner-censure-avant-apres-publicite-meta',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Éviter Censure Avant/Après Publicité',
    customDescription: 'Les images avant/après sont interdites par l\'algorithme Meta : nos alternatives créatives pour prouver l\'efficacité de vos produits.',
    customH1: 'Comment Contourner l\'Interdiction des Images « Avant / Après » sur Meta Ads',
  },
  {
    slug: 'conformite-cil-protection-donnees-meta-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Conformité CIL Formulaires Facebook BF',
    customDescription: 'Mettez vos formulaires publicitaires en conformité avec la Commission de l\'Informatique et des Libertés (CIL) du Burkina Faso.',
    customH1: 'Conformité CIL : Respecter la Loi sur les Données Personnelles sur Facebook Ads',
  },
  {
    slug: 'telecharger-factures-comptables-meta-dgi-burkina',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Factures Meta Déductibles DGI Burkina',
    customDescription: 'Téléchargez vos reçus et factures publicitaires avec numéro IFU pour déduire légalement vos dépenses publicitaires auprès de la DGI.',
    customH1: 'Comment Télécharger et Justifier ses Factures Facebook Ads auprès de la DGI',
  },
  {
    slug: 'droits-auteur-images-musiques-publicite-facebook',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Droits d\'Auteur Musique Pub Facebook',
    customDescription: 'Attention aux sanctions OAPI et aux rejets Meta : utilisez des musiques et images libres de droits commerciaux pour vos annonces.',
    customH1: 'Droits d\'Auteur & Musiques Commerciales dans la Publicité Facebook au Burkina',
  },
  {
    slug: 'score-qualite-page-facebook-baisse-couts-ouaga',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouagadougou',
    customTitle: 'Score Qualité Page Facebook Ads Ouaga',
    customDescription: 'Un mauvais score de page (feedback client négatif) augmente vos coûts de 50% : comment redresser votre score pour baisser vos CPM.',
    customH1: 'Améliorer le Score de Qualité de sa Page Facebook pour Réduire ses Coûts Pub',
  },
  {
    slug: 'eviter-blocage-numero-whatsapp-business-ads-bf',
    templatePrefix: 'campagne-whatsapp-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Éviter Ban Numéro WhatsApp Business Ads',
    customDescription: 'Les règles d\'utilisation pour ne jamais faire suspendre votre numéro WhatsApp Business lors de campagnes publicitaires massives.',
    customH1: 'Comment Éviter le Bannissement de son Numéro WhatsApp lors de Grosses Campagnes',
  },
  {
    slug: 'choisir-devise-compte-publicitaire-fcfa-dollar',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Compte Publicitaire FCFA ou Dollar ?',
    customDescription: 'Faut-il configurer son Business Manager en Francs CFA (XOF) ou en Dollars USD ? Analyse des frais bancaires et de change au Burkina.',
    customH1: 'Quelle Devise Choisir pour son Compte Publicitaire Meta au Burkina Faso ?',
  },
  {
    slug: 'compte-prepaye-vs-postpaye-facebook-burkina',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Compte Prépayé vs Postpayé Facebook',
    customDescription: 'Avantages et risques des comptes prépayés et postpayés : comment éviter d\'avoir de l\'argent bloqué en cas de restriction Meta.',
    customH1: 'Compte Publicitaire Prépayé vs Postpayé : Lequel Choisir au Burkina Faso ?',
  },

  // --- THÈME 6 : VILLES DU BURKINA & PÔLES UEMOA ---
  {
    slug: 'publicite-facebook-ouahigouya',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'ouahigouya',
    customTitle: 'Publicité Facebook à Ouahigouya | Ventes',
    customDescription: 'Développez votre clientèle dans la région du Nord grâce à des campagnes publicitaires Facebook ciblées sur Ouahigouya.',
    customH1: 'Publicité Facebook Ads à Ouahigouya : Développez Vos Ventes dans le Nord',
  },
  {
    slug: 'publicite-facebook-banfora',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'banfora',
    customTitle: 'Publicité Facebook à Banfora | Marché',
    customDescription: 'Touchez les consommateurs et entreprises de la région des Cascades avec des annonces publicitaires géolocalisées à Banfora.',
    customH1: 'Publicité Facebook Ads à Banfora : Conquérez la Région des Cascades',
  },
  {
    slug: 'publicite-facebook-fada-ngourma',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'fada-ngourma',
    customTitle: 'Publicité Facebook à Fada N\'Gourma',
    customDescription: 'Campagnes publicitaires adaptées aux commerçants et projets dans la région de l\'Est à Fada N\'Gourma.',
    customH1: 'Publicité Facebook Ads à Fada N\'Gourma : Rayonnement Régional',
  },
  {
    slug: 'publicite-facebook-dedougou',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'dedougou',
    customTitle: 'Publicité Facebook à Dédougou | Commerce',
    customDescription: 'Promouvez vos activités et services dans la Boucle du Mouhoun avec des annonces Facebook ciblées sur Dédougou.',
    customH1: 'Publicité Facebook Ads à Dédougou : Boostez Vos Activités Commerciales',
  },
  {
    slug: 'publicite-facebook-kaya',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'burkina-faso',
    citySlug: 'kaya',
    customTitle: 'Publicité Facebook à Kaya | Centre-Nord',
    customDescription: 'Diffusez vos offres commerciales et institutionnelles à Kaya avec un ciblage publicitaire Facebook optimisé.',
    customH1: 'Publicité Facebook Ads à Kaya : Visibilité & Ventes Locales',
  },
  {
    slug: 'publicite-facebook-cote-ivoire',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'cote-divoire',
    customTitle: 'Publicité Facebook en Côte d\'Ivoire',
    customDescription: 'Accélérez votre expansion en Côte d\'Ivoire : acquisition payante à fort volume sur le plus grand marché digital d\'Afrique de l\'Ouest.',
    customH1: 'Publicité Facebook Ads en Côte d\'Ivoire : Dominez le Marché Ivoirien',
  },
  {
    slug: 'agence-publicite-facebook-abidjan',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'cote-divoire',
    citySlug: 'abidjan',
    customTitle: 'Agence Publicité Facebook à Abidjan',
    customDescription: 'Gestion experte de campagnes Facebook Ads à Abidjan : génération de leads solvables, tunnels de vente et scaling de chiffre d\'affaires.',
    customH1: 'Agence de Publicité Facebook N°1 à Abidjan : Performance & ROAS Élevé',
  },
  {
    slug: 'publicite-facebook-senegal',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'senegal',
    customTitle: 'Publicité Facebook au Sénégal | Leader',
    customDescription: 'Conquérez le marché sénégalais avec des campagnes Facebook Ads ciblées : e-commerce, services et intégration Wave / Orange Money.',
    customH1: 'Publicité Facebook Ads au Sénégal : Accélération Commerciale d\'Élite',
  },
  {
    slug: 'agence-publicite-facebook-dakar',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'senegal',
    citySlug: 'dakar',
    customTitle: 'Agence Publicité Facebook à Dakar',
    customDescription: 'Cabinet d\'acquisition payante Meta Ads à Dakar. Ciblez les consommateurs de la presqu\'île et décuplez votre rentabilité.',
    customH1: 'Agence de Publicité Facebook N°1 à Dakar : Stratégie & Ventes',
  },
  {
    slug: 'publicite-facebook-mali',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'mali',
    customTitle: 'Publicité Facebook au Mali | Performance',
    customDescription: 'Déployez des campagnes publicitaires rentables au Mali : ciblage Bamako et grandes villes, tunnels WhatsApp et conversion mobile.',
    customH1: 'Publicité Facebook Ads au Mali : Conquête de Marché à Bamako',
  },
  {
    slug: 'agence-publicite-facebook-bamako',
    templatePrefix: 'publicite-facebook',
    countrySlug: 'mali',
    citySlug: 'bamako',
    customTitle: 'Agence Publicité Facebook à Bamako',
    customDescription: 'Votre agence d\'acquisition Meta Ads à Bamako. Stratégies sur-mesure pour PME et distributeurs au Mali avec BAROUBA GROUP.',
    customH1: 'Agence de Publicité Facebook N°1 à Bamako : Croissance Garantie',
  },
  {
    slug: 'devis-publicite-facebook-burkina',
    templatePrefix: 'budget-publicite-facebook',
    countrySlug: 'burkina-faso',
    customTitle: 'Devis Publicité Facebook au Burkina',
    customDescription: 'Demandez votre étude personnalisée et devis de publicité Facebook sous 24h. Modélisation de rentabilité offerte par BAROUBA GROUP.',
    customH1: 'Obtenez Votre Devis de Publicité Facebook au Burkina Faso Sous 24h',
  },

];

for (const special of SPECIAL_MARKETING_PAGES) {
  const tmpl = FLAT_METIERS.find((t) => t.prefix === special.templatePrefix) || FLAT_METIERS[0];
  const country = getCountryBySlug(special.countrySlug);
  if (!country) continue;
  const city = special.citySlug ? TERRITORY_CITIES.find((c) => c.slug === special.citySlug) : undefined;
  const locationName = city ? city.name : country.name;

  FLAT_METIER_MAP.set(special.slug, {
    slug: special.slug,
    template: tmpl,
    city,
    country,
    isNational: !city,
    locationName,
    customTitle: special.customTitle,
    customDescription: special.customDescription,
    customH1: special.customH1,
  });
}

export function getFlatMetierComboBySlug(slug: string): FlatMetierCombo | undefined {
  return FLAT_METIER_MAP.get(slug);
}

export function getAllFlatMetierCombos(): FlatMetierCombo[] {
  return Array.from(FLAT_METIER_MAP.values());
}
