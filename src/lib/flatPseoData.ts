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
];

export interface FlatMetierCombo {
  slug: string;
  template: FlatMetierTemplate;
  city?: TerritoryCity;
  country: TerritoryCountry;
  isNational: boolean;
  locationName: string;
}

// Map for ultra-fast O(1) resolution of flat métier slugs
const FLAT_METIER_MAP = new Map<string, FlatMetierCombo>();

// Initialize all combos
for (const tmpl of FLAT_METIERS) {
  // 1. City combos (54 cities x 13 templates)
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

  // 2. National country combos (12 countries x 13 templates)
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

export function getFlatMetierComboBySlug(slug: string): FlatMetierCombo | undefined {
  return FLAT_METIER_MAP.get(slug);
}

export function getAllFlatMetierCombos(): FlatMetierCombo[] {
  return Array.from(FLAT_METIER_MAP.values());
}
