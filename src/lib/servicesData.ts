export interface StrategyStep {
  num: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ServiceInterventionLevel {
  name: string;
  badge: string;
  scope: string;
  desc: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DetailedService {
  slug: string;
  num: string;
  iconName: string;
  title: string;
  tagline: string;
  category: string;
  mockupType: 'social' | 'dashboard' | 'commerce' | 'ai' | 'portal' | 'academy';
  heroBadge: string;
  hookHeadline: string;
  hookSubtitle: string;
  avatarProfile: {
    target: string;
    description: string;
  };
  painPoints: {
    title: string;
    description: string;
  }[];
  manifesto: {
    badge: string;
    headline: string;
    paragraphs: string[];
  };
  strategySteps: StrategyStep[];
  deliverables: {
    module: string;
    items: string[];
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  interventionLevels: ServiceInterventionLevel[];
  guaranteeText: string;
  faq: ServiceFAQ[];
  whatsappMessage: string;
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    slug: 'communication-digitale-community-management',
    num: '01',
    iconName: 'Share2',
    title: 'Communication Digitale & Community Management Stratégique',
    tagline: 'Nous ne postons pas au hasard : une stratégie d’acquisition et d’image d’autorité sur mesure pour votre marque',
    category: 'Communication Digitale & Stratégie Social Media',
    mockupType: 'social',
    heroBadge: 'STRATÉGIE SUR-MESURE & GESTION DE PAGES 7J/7',
    hookHeadline: 'Ne laissez plus vos réseaux sociaux au hasard. Bâtissez une présence de marque prestigieuse qui convertit chaque semaine.',
    hookSubtitle: 'Nous sommes des stratèges de la communication digitale. De la définition de votre ligne éditoriale à la création de formats vidéo captivants (Reels, TikTok), en passant par la modération active 7j/7 et le social selling vers WhatsApp : nous déployons un système calibré sur mesure pour vos objectifs de chiffre d’affaires.',
    avatarProfile: {
      target: 'Dirigeants de PME, Marques Ambitieuses, Cliniques, Concessions, Promoteurs & Réseaux de Distribution',
      description: 'Vous avez une belle entreprise, des produits ou services d’excellence, mais vos réseaux sociaux ne reflètent pas votre vraie valeur. Vous manquez de temps pour planifier des contenus réguliers, vous êtes déçu des visuels bricolés à la va-vite, et vos messages privés restent sans réponse des heures durant. Vous cherchez un partenaire stratégique d’élite pour piloter votre image et vos ventes avec rigueur.'
    },
    painPoints: [
      {
        title: 'Le piège des publications sans ligne directrice',
        description: 'Poster une photo de temps en temps sans angle commercial, sans hook et sans storytelling. Vos abonnés scrollent sans s’arrêter et vos publications ne génèrent aucun client qualifié.'
      },
      {
        title: 'L’amateurisme visuel qui dévalorise vos prix',
        description: 'Des visuels flous, mal éclairés ou des modèles Canva génériques vus partout sur le web burkinabè. Cela envoie un signal bas de gamme qui incite vos prospects à négocier constamment vos tarifs.'
      },
      {
        title: 'Des prospects chauds perdus faute de réactivité',
        description: 'Sur Facebook, TikTok et WhatsApp, un acheteur intéressé veut une réponse en quelques minutes. Laisser un message sans réponse le soir ou le week-end, c’est offrir le client à un concurrent plus réactif.'
      },
      {
        title: 'L’illusion des likes sans rentabilité commerciale',
        description: 'Avoir des mentions "J’aime" de personnes qui ne commanderont jamais. Vos réseaux sociaux ne doivent pas être un passe-temps : ils doivent alimenter votre pipeline de vente de manière chiffrée.'
      }
    ],
    manifesto: {
      badge: 'NOTRE PHILOSOPHIE OPÉRATIONNELLE',
      headline: 'Publier n’est pas communiquer. Communiquer, c’est diriger l’attention vers la vente.',
      paragraphs: [
        'Trop d’entreprises à Ouagadougou et dans la sous-région confient leur image à des exécutants qui se contentent d’aligner des publications génériques sans comprendre la psychologie de l’acheteur africain.',
        'Chez BAROUBA GROUP, chaque publication, chaque vidéo courte et chaque réponse en message privé est pensée comme une brique d’un entonnoir d’acquisition. Nous combinons l’exigence esthétique du branding de prestige et la science du copywriting pour faire de vos pages un actif commercial hautement rentable.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Audit de Positionnement & Intelligence Marché',
        tagline: 'Comprendre pour dominer votre écosystème',
        description: 'Analyse approfondie de votre image actuelle, de vos concurrents directs à Ouagadougou et des attentes réelles de vos meilleurs acheteurs. Définition de votre proposition de valeur unique et de votre ton de communication.',
        deliverables: ['Rapport d’audit de réputation', 'Cartographie des concurrents', 'Définition des 3 avatars clients prioritaires']
      },
      {
        num: '02',
        title: 'Ingénierie de la Ligne Éditoriale & Matrice des 4 Piliers',
        tagline: 'Fini le syndrome de la page blanche',
        description: 'Construction d’une architecture de contenu équilibrée selon nos 4 piliers d’élite : Autorité & Éducation (prouver votre expertise), Preuve Sociale & Réassurance (avis et coulisses), Désir & Storytelling (créer l’émotion), et Conversion Directe (appels à l’action sans friction vers WhatsApp).',
        deliverables: ['Charte éditoriale complète', 'Calendrier mensuel validé 10 jours à l’avance', 'Gabarits de posts signatures']
      },
      {
        num: '03',
        title: 'Production Créative Audiovisuelle & Hooks d’Impact',
        tagline: 'Capter l’attention volatile en moins de 3 secondes',
        description: 'Scénarisation, tournage et montage de formats courts (Reels, TikTok, Shorts) adaptés aux codes visuels locaux. Création de visuels de marque haut de gamme avec identité typographique et photographique soignée.',
        deliverables: ['Reels & TikTok dynamiques avec sous-titres', 'Carrousels éducatifs d’autorité', 'Stories quotidiennes interactives']
      },
      {
        num: '04',
        title: 'Modération Stratégique 7j/7 & Social Selling',
        tagline: 'Transformer chaque commentaire en client payant',
        description: 'Nos community managers expérimentés veillent sur vos pages 7 jours sur 7. Réponses chaleureuses, désamorçage immédiat des critiques, protection de votre e-réputation et bascule méthodique des curieux vers votre WhatsApp Business officiel.',
        deliverables: ['Modération active 7j/7 jusqu’à 21h', 'Scripts de closing commercial WhatsApp', 'Traitement prioritaire des demandes VIP']
      },
      {
        num: '05',
        title: 'Pilotage par la Data & Optimisation Continue',
        tagline: 'Ce qui ne se mesure pas ne s’améliore pas',
        description: 'Chaque mois, nous analysons vos indicateurs clés réels : portée organique, volume de prospects WhatsApp entrants, publications les plus rentables. Nous ajustons la stratégie en continu pour maximiser vos résultats.',
        deliverables: ['Tableau de bord mensuel de performance', 'Revue stratégique avec votre Account Manager', 'Plan d’action correctif pour le mois suivant']
      }
    ],
    deliverables: [
      {
        module: 'Stratégie & Direction Artistique',
        items: [
          'Audit préalable complet de votre présence sociale et de votre secteur',
          'Charte graphique sociale sur mesure (typographies, palettes, textures)',
          'Ligne éditoriale matricielle articulée autour de vos objectifs de vente',
          'Planning éditorial mensuel soumis à votre validation préalable'
        ]
      },
      {
        module: 'Création de Contenus d’Élite',
        items: [
          'Visuels de marque soignés sans aucun modèle générique réchauffé',
          'Formats vidéos courts (Reels & TikTok) avec hooks scénarisés et captation',
          'Rédaction persuasive (copywriting) adaptée aux mentalités d’achat locales',
          'Animation des Stories pour nourrir la relation de confiance quotidienne'
        ]
      },
      {
        module: 'Gestion Opérationnelle & Conversion 7j/7',
        items: [
          'Veille et modération active des commentaires 7 jours sur 7',
          'Gestion des messages privés (DMs) avec réponses sous 15 minutes',
          'Mise en place de protocoles de Social Selling et relais vers WhatsApp',
          'Rapports d’impact mensuels chiffrés et réunions de cadrage stratégique'
        ]
      }
    ],
    metrics: [
      { value: '+450%', label: 'Hausse moyenne de portée organique qualifiée' },
      { value: '< 15 min', label: 'Délai moyen de prise en charge des DMs 7j/7' },
      { value: 'x3.2', label: 'Multiplication des contacts entrants sur WhatsApp' },
      { value: '98.5%', label: 'Satisfaction de nos entreprises partenaires' }
    ],
    interventionLevels: [
      {
        name: 'Cadrage & Professionnalisation de Marque',
        badge: 'Sur-Mesure',
        scope: 'Pour structurer et asseoir votre crédibilité',
        desc: 'Conçu pour les PME et marques souhaitant instaurer une présence de référence, soigner leur image de marque et publier avec régularité.',
        features: [
          'Audit complet préalable et refonte de votre identité visuelle sociale',
          'Calendrier éditorial mensuel rigoureux avec visuels de marque sur-mesure',
          'Animation régulière des pages et modération professionnelle',
          'Redirection structurée des prospects vers votre WhatsApp officiel',
          'Rapport mensuel d’analyse et recommandations d’optimisation'
        ],
        ctaText: 'Demander un Cadrage Personnalisé'
      },
      {
        name: 'Accélération & Domination Sectorielle',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour faire des réseaux votre premier canal de vente',
        desc: 'Pour les entreprises en pleine expansion, cliniques, concessions et marques exigeant une production audiovisuelle poussée et du closing actif.',
        features: [
          'Stratégie de contenu intensive combinant visuels d’autorité et vidéos courtes',
          'Tournage et montage réguliers de Reels & TikTok à fort hook local',
          'Stories quotidiennes immersives et animation active de votre communauté',
          'Modération et réponses aux messages privés 7j/7 avec engagement de rapidité',
          'Scripts de vente WhatsApp testés et intégration CRM',
          'Accompagnateur stratégique dédié et points de pilotage réguliers'
        ],
        ctaText: 'Demander une Étude d’Accélération'
      },
      {
        name: 'Partenariat Global & Grand Compte',
        badge: 'Sur-Mesure Institutionnel',
        scope: 'Pour les leaders de marché et réseaux d’enseignes',
        desc: 'Pour les institutions, banques, grandes franchises et entreprises exigeant une couverture multi-canaux 360° et une réputation irréprochable.',
        features: [
          'Déploiement multi-plateformes simultané (Facebook, Instagram, TikTok, LinkedIn)',
          'Production audiovisuelle d’envergure avec équipe de captation dédiée sur vos sites',
          'Veille stratégique de l’e-réputation et gestion de crise en temps réel',
          'Modération prioritaire 7j/7 avec protocoles stricts de conformité',
          'Campagnes d’influenceurs locaux ciblés et couverture d’événements',
          'Direction de projet senior dédiée et comités stratégiques mensuels'
        ],
        ctaText: 'Solliciter un Cadrage Institutionnel'
      }
    ],
    guaranteeText: 'Engagement d’Excellence BAROUBA : Tous nos contenus sont systématiquement soumis à votre validation préalable avant diffusion. Si un livrable ne répond pas fidèlement à vos exigences, nos équipes le retravaillent sans délai jusqu’à votre entière satisfaction.',
    faq: [
      {
        question: 'Comment déterminez-vous la proposition tarifaire si les forfaits sont sur mesure ?',
        answer: 'Chaque entreprise a des objectifs, un rythme de publication et un niveau de production vidéo différent. Nous organisons un premier échange stratégique gratuit de 20 minutes pour comprendre votre situation, votre secteur et vos ambitions. Suite à cet audit, nous vous remettons une proposition détaillée sur mesure, chiffrée avec exactitude et sans mauvaise surprise.'
      },
      {
        question: 'Quelle est la différence entre votre méthode et un Community Manager indépendant ?',
        answer: 'Un indépendant isolé ne peut pas être à la fois stratège marketing, directeur artistique, cadreur/monteur vidéo professionnel et modérateur réactif 7j/7 jusqu’à 21h sans s’épuiser. Avec BAROUBA GROUP, vous bénéficiez d’un pôle pluridisciplinaire complet piloté par un responsable de compte dédié, garantissant une continuité de service totale, même pendant les congés et week-ends.'
      },
      {
        question: 'Comment vos équipes s’imprègnent-elles des spécificités de mon métier ?',
        answer: 'Lors de la phase d’onboarding, nous réalisons une immersion approfondie dans votre activité : vos fiches produits, votre vocabulaire métier, vos conditions tarifaires et vos arguments de vente. Nos rédacteurs et créateurs s’expriment exactement avec le ton et l’expertise de votre maison.'
      },
      {
        question: 'Devons-nous vous confier les mots de passe de nos comptes personnels ?',
        answer: 'Absolument pas. La sécurité de vos actifs numériques est sacrée. Vous nous attribuez simplement un rôle de gestionnaire délégué via Meta Business Suite et TikTok for Business, sans jamais partager vos identifiants ou mots de passe personnels.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un audit stratégique préalable pour la communication digitale et la gestion de mes pages.'
  },
  {
    slug: 'developpement-web-plateformes-nextjs',
    num: '02',
    iconName: 'Code2',
    title: 'Développement Web & Plateformes Métiers Next.js 16 (< 0.8s)',
    tagline: 'Des plateformes numériques d’élite, rapides, sécurisées et conçues sur mesure pour convertir',
    category: 'Ingénierie Web & Architecture Logicielle',
    mockupType: 'dashboard',
    heroBadge: 'ARCHITECTURE NEXT.JS 16 & CODE 100% PROPRIÉTAIRE',
    hookHeadline: 'Ne laissez plus un site web lent, vulnérable et bricolé pénaliser votre crédibilité commerciale.',
    hookSubtitle: 'Nous concevons des écosystèmes web sur mesure avec Next.js 16 et TypeScript. Temps de chargement inférieur à 0.8 seconde sur réseau mobile 3G/4G, paiements Mobile Money locaux unifiés et cession intégrale de votre code sans redevance captive.',
    avatarProfile: {
      target: 'Dirigeants d’entreprises, Startups, Cabinets de Conseil, Cliniques & Institutions',
      description: 'Vous voulez une présence web qui inspire immédiatement autorité et prestige. Vous refusez les sites WordPress lourds qui mettent 7 secondes à charger, qui plantent sur les téléphones de vos clients et dont vous n’êtes même pas propriétaire du code source.'
    },
    painPoints: [
      {
        title: 'Des lenteurs catastrophiques sur le réseau mobile local',
        description: 'Au Burkina Faso, plus de 90% des internautes naviguent sur smartphone. Un site qui met plus de 2 secondes à charger perd immédiatement 60% de ses visiteurs avant même l’affichage de votre offre.'
      },
      {
        title: 'La dépendance et l’insécurité des CMS traditionnels',
        description: 'Des thèmes réchauffés bourrés de plugins vulnérables aux piratages et des coûts cachés permanents pour maintenir un système instable.'
      },
      {
        title: 'L’inadaptation aux moyens de paiement africains',
        description: 'Proposer uniquement des cartes bancaires internationales bloque 80% des transactions locales. Il vous faut Orange Money, Moov Money et LigdiCash intégrés de manière transparente.'
      },
      {
        title: 'La prise d’otage par des prestataires introuvables',
        description: 'Avoir un site bloqué ou inaccessible parce que le développeur indépendant ne répond plus, sans vous avoir remis le code source ni les accès serveurs complets.'
      }
    ],
    manifesto: {
      badge: 'NOTRE EXIGENCE D’INGÉNIERIE',
      headline: 'Un site web n’est pas une dépense marketing : c’est l’infrastructure centrale de votre réputation.',
      paragraphs: [
        'Dans l’économie moderne, les clients jugent le sérieux d’une entreprise à la seconde exacte où ils ouvrent son site web sur leur téléphone. Si la page rame ou présente un design bancal, le prospect clique sur retour et part chez le concurrent.',
        'Nous développons des plateformes avec la même rigueur architecturale que les meilleures entreprises technologiques internationales, adaptées aux réalités de bande passante et aux habitudes d’achat du Sahel et de l’Afrique de l’Ouest.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Cadrage Fonctionnel & Architecture de Conversion',
        tagline: 'Tracer le plan de route avant de coder',
        description: 'Définition précise de l’arborescence, des parcours utilisateurs et des points de conversion clés. Pas de fonctionnalités superflues : chaque page sert un objectif d’affaires mesurable.',
        deliverables: ['Cahier des charges fonctionnel', 'Wireframes UX des écrans clés', 'Schéma des flux de conversion']
      },
      {
        num: '02',
        title: 'Conception UI/UX d’Élite & Identité de Marque',
        tagline: 'Créer une expérience mémorable et fluide',
        description: 'Design sur mesure aux standards graphiques internationaux avec intégration subtile de motifs géométriques authentiques. Responsive design rigoureusement validé sur smartphones, tablettes et ordinateurs.',
        deliverables: ['Maquettes graphiques interactives Figma', 'Guide de styles (Design System)', 'Validation conjointe des interactions']
      },
      {
        num: '03',
        title: 'Développement Next.js 16 & Server Components',
        tagline: 'L’état de l’art mondial au service de votre vitesse',
        description: 'Développement avec Next.js 16 App Router, TypeScript et rendu côté serveur. Distribution des données sur le réseau Edge CDN mondial pour un affichage quasi instantané (< 0.8s).',
        deliverables: ['Code source propre, modulaire et typé', 'Score Google PageSpeed > 90/100', 'Optimisation SEO technique avancée']
      },
      {
        num: '04',
        title: 'Intégration Passerelles & Outils Métiers',
        tagline: 'Connecter votre site à votre réalité opérationnelle',
        description: 'Branchement des passerelles Mobile Money (Orange Money, Moov Money, LigdiCash) et cartes bancaires. Connexion avec WhatsApp Business, votre CRM ou vos formulaires de réservation.',
        deliverables: ['Passerelle de paiement sécurisée testée', 'Formulaires intelligents avec alertes instantanées', 'Espace d’administration en français']
      },
      {
        num: '05',
        title: 'Recette, Mise en Ligne & Cession Totale du Code',
        tagline: 'Vous êtes chez vous, en toute souveraineté',
        description: 'Tests de charge, audit de sécurité et déploiement sur votre propre nom de domaine. Remise officielle de l’intégralité des accès et du code source sans aucun lien de dépendance captif.',
        deliverables: ['Déploiement production sécurisé SSL', 'Dépôt du code sur votre compte GitHub/Vercel', 'Session de formation vidéo personnalisée']
      }
    ],
    deliverables: [
      {
        module: 'Conception UI/UX & Stratégie',
        items: [
          'Maquettage sur mesure adapté à votre identité de marque',
          'Parcours de navigation optimisé pour la conversion mobile',
          'Intégration d’une esthétique soignée et des finitions géométriques',
          'Validation conjointe de chaque écran avant le développement'
        ]
      },
      {
        module: 'Ingénierie Front/Back & Sécurité',
        items: [
          'Socle technique Next.js 16 et Server Components ultra-rapides',
          'Temps de chargement inférieur à 0.8s garanti sur réseau 4G',
          'Panneau d’administration simple pour modifier textes et photos',
          'Chiffrement SSL, protection anti-attaques et sauvegardes automatiques'
        ]
      },
      {
        module: 'Mise en Ligne & Transfert de Propriété',
        items: [
          'Configuration complète du nom de domaine et des emails professionnels',
          'Intégration des paiements Mobile Money et formulaires WhatsApp',
          'Cession contractuelle de 100% du code source sans abonnement captif',
          'Garantie de maintenance corrective et support prioritaire 1 an'
        ]
      }
    ],
    metrics: [
      { value: '< 0.8s', label: 'Temps de chargement garanti sur réseau 4G' },
      { value: '98/100', label: 'Score moyen Google PageSpeed Insights' },
      { value: '100%', label: 'Propriété du code source sans abonnement captif' },
      { value: '+240%', label: 'Hausse moyenne du taux de transformation client' }
    ],
    interventionLevels: [
      {
        name: 'Site Vitrine d’Élite & Autorité',
        badge: 'Sur-Mesure',
        scope: 'Pour asseoir un leadership incontestable dans son secteur',
        desc: 'Conçu pour les cabinets, cliniques, PME et consultants voulant une vitrine ultra-rapide et crédible qui inspire le respect dès le premier coup d’œil.',
        features: [
          'Conception complète sur mesure (Accueil, Services, Histoire, Réalisations, Contact)',
          'Architecture Next.js 16 ultra-rapide (< 0.8s garanti)',
          'Formulaire de contact intelligent relié directement à votre WhatsApp',
          'Optimisation pour le référencement naturel Google à Ouagadougou',
          'Code source 100% cédé + 1 an de maintenance technique préventive'
        ],
        ctaText: 'Étudier mon Projet de Site Vitrine'
      },
      {
        name: 'Plateforme Métier & E-Commerce Scalable',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour les entreprises gérant un catalogue ou des réservations',
        desc: 'Pour les entreprises ayant un catalogue produits, des réservations en ligne ou un besoin d’encaissement Mobile Money automatisé.',
        features: [
          'Architecture complète avec catalogue produits, filtres et recherche instantanée',
          'Paiements unifiés : Orange Money, Moov Money, LigdiCash et Cartes bancaires',
          'Panneau d’administration moderne en français pour gérer vos commandes',
          'Notifications WhatsApp automatisées pour chaque nouvelle commande',
          'Tracking serveur CAPI Meta Ads et Google Analytics 4',
          'Formation personnalisée de votre équipe + support VIP prioritaire'
        ],
        ctaText: 'Étudier ma Plateforme Métier'
      },
      {
        name: 'Portail Cloud & Système Complexe',
        badge: 'Sur-Mesure Institutionnel',
        scope: 'Pour architectures multi-utilisateurs et démarches sensibles',
        desc: 'Pour les institutions, banques et entreprises nécessitant des espaces membres sécurisés, des rôles utilisateurs et des calculs métiers complexes.',
        features: [
          'Base de données relationnelle sécurisée (PostgreSQL / Supabase)',
          'Espaces membres avec authentification forte et gestion granulaire des rôles',
          'Archivage sécurisé de documents confidentiels avec chiffrement bancaire',
          'Garantie de haute disponibilité 99.98% et tests de charge simulant 5 000 usagers',
          'Contrat de maintenance évolutive et SLA d’intervention d’urgence garanti'
        ],
        ctaText: 'Solliciter un Cadrage Technique VIP'
      }
    ],
    guaranteeText: 'Contrat d’Engagement BAROUBA : Vos délais de livraison et vos spécifications fonctionnelles sont gravés dans nos contrats d’entreprise. Si le cahier des charges n’est pas respecté, nos équipes s’engagent à poursuivre les développements sans frais jusqu’à totale conformité.',
    faq: [
      {
        question: 'Comment obtenons-nous un devis exact si chaque projet est sur mesure ?',
        answer: 'Nous organisons une session de cadrage technique gratuite de 30 minutes avec un de nos ingénieurs seniors. Nous analysons vos besoins précis, le volume de contenu et les fonctionnalités souhaitées pour vous remettre une proposition commerciale et technique détaillée sous 48 heures.'
      },
      {
        question: 'Pourquoi insistez-vous sur la cession totale du code source ?',
        answer: 'Beaucoup d’agences enferment leurs clients dans des abonnements mensuels captifs : si vous arrêtez de payer, votre site est coupé. Chez BAROUBA GROUP, nous croyons à la souveraineté technologique de nos partenaires. Dès le solde de la prestation, vous possédez 100% de vos fichiers et de votre propriété intellectuelle.'
      },
      {
        question: 'Pourrai-je modifier moi-même les textes et les photos après la livraison ?',
        answer: 'Oui. Nous vous intégrons un panneau d’administration simple et intuitif en français. Vous pourrez ajouter un nouvel article, modifier vos tarifs ou changer une photo en quelques clics depuis votre smartphone ou votre ordinateur, sans toucher à une seule ligne de code.'
      },
      {
        question: 'Quels sont les délais moyens de réalisation d’une plateforme web ?',
        answer: 'Un site vitrine d’élite est généralement livré en 10 à 15 jours ouvrés à compter de la validation du cahier des charges. Une plateforme métier complexe ou e-commerce nécessite entre 3 et 5 semaines de conception, développement et tests rigoureux.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un cadrage technique pour mon projet de développement web.'
  },
  {
    slug: 'acquisition-publicite-meta-tiktok-ads',
    num: '03',
    iconName: 'TrendingUp',
    title: 'Acquisition & Publicité 360° (Meta Ads & TikTok Ads)',
    tagline: 'Une gestion scientifique du Media Buying où chaque franc investi est tracé et orienté retour sur investissement',
    category: 'Acquisition Payante & Scaling Publicitaire',
    mockupType: 'commerce',
    heroBadge: 'MEDIA BUYING STRATÉGIQUE & TRACKING SERVEUR CAPI',
    hookHeadline: 'Cessez de gaspiller votre budget dans le bouton "Booster". Déployez un système d’acquisition publicitaire prédictible.',
    hookSubtitle: 'Nous concevons vos créatifs publicitaires à fort hook, rédigeons vos scripts de vente et pilotons vos budgets publicitaires sur Facebook, Instagram, TikTok et Google Ads avec un suivi chirurgical du retour sur investissement.',
    avatarProfile: {
      target: 'E-commerçants, Promoteurs Immobiliers, Écoles, Prestataires & Marques au Burkina Faso',
      description: 'Vous avez déjà essayé la publicité sur Facebook ou TikTok en mettant de l’argent, mais vous n’avez récolté que des likes d’inconnus ou des curieux sans budget. Vous voulez un système publicitaire fiable qui injecte des prospects qualifiés prêts à acheter tous les jours dans votre pipeline commercial.'
    },
    painPoints: [
      {
        title: 'Le piège du bouton "Booster la publication"',
        description: 'Cliquer sur booster optimise vos campagnes pour récolter des likes d’utilisateurs inactifs au lieu d’identifier les vrais profils d’acheteurs.'
      },
      {
        title: 'La perte massive de données sans tracking serveur',
        description: 'Avec les blocages mobiles et les restrictions iOS, les pixels classiques perdent plus de 40% des données d’achat. Sans tracking serveur CAPI, vos campagnes tournent à l’aveugle.'
      },
      {
        title: 'Des publicités banales que les internautes ignorent',
        description: 'Des affiches saturées de texte qui ne créent aucune émotion. Sur mobile, si votre publicité ne stoppe pas le scroll dans les 2 premières secondes, votre argent part en fumée.'
      },
      {
        title: 'La hantise des blocages de comptes publicitaires',
        description: 'Se faire désactiver son compte publicitaire par Meta sans explication et voir ses ventes s’interrompre net faute d’infrastructure de secours.'
      }
    ],
    manifesto: {
      badge: 'NOTRE APPROCHE DU MEDIA BUYING',
      headline: 'La publicité en ligne n’est pas un jeu de hasard : c’est une équation mathématique.',
      paragraphs: [
        'Trop d’annonceurs considèrent la publicité comme une loterie. Chez BAROUBA GROUP, nous appliquons une rigueur de Direct Response Marketing : chaque créatif teste un angle psychologique précis, chaque centime est mesuré et chaque campagne non rentable est coupée sous 48h.',
        'Notre mission est simple : faire en sorte que chaque franc investi génère un multiple vérifiable en chiffre d’affaires dans vos caisses.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Audit du Compte & Configuration Technique CAPI',
        tagline: 'Construire des fondations solides et anti-blocage',
        description: 'Vérification d’entreprise officielle auprès de Meta, paramétrage du Business Manager, sécurisation des actifs et installation du tracking serveur Conversions API (CAPI) sans déperdition de données.',
        deliverables: ['Business Manager vérifié', 'Tracking serveur CAPI opérationnel', 'Structure publicitaire de secours']
      },
      {
        num: '02',
        title: 'Recherche d’Angles Psychologiques & Copywriting',
        tagline: 'Comprendre les vrais déclencheurs d’achat au Faso',
        description: 'Identification des 4 grands motifs d’achat : résolution d’une douleur immédiate, statut social, rentabilité financière ou urgence. Rédaction de scripts publicitaires percutants avec accroches locales.',
        deliverables: ['Matrice des angles d’attaque publicitaires', 'Scripts vidéos Direct Response', 'Textes publicitaires A/B testés']
      },
      {
        num: '03',
        title: 'Studio Créatif : Visuels & Formats Vidéos Courts',
        tagline: 'Arrêter le pouce sur le fil d’actualité',
        description: 'Conception de visuels publicitaires à fort contraste et tournage/montage de vidéos courtes (Reels, TikTok) avec sous-titres dynamiques et appels à l’action clairs vers WhatsApp.',
        deliverables: ['Pack de visuels graphiques haute conversion', 'Vidéos publicitaires montées pour mobile', 'Déclinaisons pour Stories et Feed']
      },
      {
        num: '04',
        title: 'Pilotage des Enchères & Scaling Rentable',
        tagline: 'Scaler les gagnants, couper les perdants',
        description: 'Lancement méthodique des campagnes, tests croisés des audiences à Ouagadougou, Bobo et dans la diaspora. Réallocation quotidienne des budgets vers les créatifs qui génèrent le meilleur coût par prospect.',
        deliverables: ['Surveillance quotidienne des métriques', 'Coupe des campagnes sous-performantes', 'Scaling progressif des publicités rentables']
      },
      {
        num: '05',
        title: 'Optimisation Conjointe du Closing Commercial',
        tagline: 'Transformer les clics en dépôts bancaires et Mobile Money',
        description: 'Un bon Media Buyer ne s’arrête pas au clic. Nous analysons la façon dont vos commerciaux répondent sur WhatsApp pour éliminer les frictions et faire grimper votre taux de transformation réel.',
        deliverables: ['Audit des conversations de closing', 'Scripts de relance pour indécis', 'Tableau de bord live du ROAS']
      }
    ],
    deliverables: [
      {
        module: 'Fondations Techniques & Sécurisation',
        items: [
          'Audit et structuration complète de vos comptes publicitaires Meta et TikTok',
          'Vérification de domaine officiel et protocoles de conformité',
          'Installation du tracking serveur CAPI sans perte de signaux d’achat',
          'Configuration des événements de conversion personnalisés'
        ]
      },
      {
        module: 'Production Créative Haute Conversion',
        items: [
          'Rédaction d’angles publicitaires psychologiques différenciés',
          'Création de visuels et carrousels graphiques testés en A/B testing',
          'Production et montage de formats vidéos courts (Reels / TikTok Ads)',
          'Hooks visuels et sonores adaptés aux codes culturels ouest-africains'
        ]
      },
      {
        module: 'Pilotage Quotidien & Scaling',
        items: [
          'Surveillance quotidienne des coûts par contact qualifié (CPL/CPA)',
          'Coupe stricte des annonces non performantes sous 48h',
          'Scaling des publicités gagnantes pour maximiser votre volume de commandes',
          'Rapports d’optimisation hebdomadaires transparents'
        ]
      }
    ],
    metrics: [
      { value: 'x4.2', label: 'ROAS moyen généré sur nos campagnes e-commerce' },
      { value: '100%', label: 'Des données d’achat traquées via CAPI serveur' },
      { value: '-42%', label: 'Réduction moyenne du coût d’acquisition client' },
      { value: '24h/24', label: 'Surveillance et ajustement des enchères par nos acheteurs' }
    ],
    interventionLevels: [
      {
        name: 'Campagne Flash & Lancement Ponctuel',
        badge: 'Sur-Mesure',
        scope: 'Pour un arrivage, un événement ou un produit phare',
        desc: 'Conçu pour remplir un séminaire, lancer un arrivage massif de marchandise ou réussir une opération commerciale intensive sur 2 à 4 semaines.',
        features: [
          'Paramétrage complet du pixel et du compte publicitaire',
          'Création de visuels publicitaires haute conversion et copies percutantes',
          'Ciblage géographique chirurgical (Ouagadougou, Bobo, Diaspora)',
          'Pilotage actif des enchères et scaling rapide sur l’opération',
          'Rapport de bilan complet avec analyse du coût par client'
        ],
        ctaText: 'Cadrer une Campagne Flash'
      },
      {
        name: 'Scale & Performance Mensuelle',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour les entreprises voulant un flux continu d’acheteurs',
        desc: 'Pour les marques et commerces qui investissent chaque mois en publicité et recherchent un flux ininterrompu de clients qualifiés.',
        features: [
          'Gestion continue conjointe Meta Ads (Facebook/Instagram) et TikTok Ads',
          'Studio créatif continu : nouveaux visuels et vidéos montées chaque mois',
          'A/B testing permanent sur les audiences, les accroches et les formats',
          'Maintenance et monitoring permanent du tracking serveur CAPI',
          'Optimisation conjointe de vos scripts de closing WhatsApp',
          'Tableau de bord live et réunions stratégiques régulières'
        ],
        ctaText: 'Étudier mon Accompagnement Mensuel'
      },
      {
        name: 'Dominance Multi-Pays & Scaling Sous-Régional',
        badge: 'Sur-Mesure Régional',
        scope: 'Pour leaders opérant au Burkina, Côte d’Ivoire, Sénégal et Diaspora',
        desc: 'Pour les entreprises déployant des budgets d’envergure sur plusieurs pays d’Afrique de l’Ouest et auprès de la diaspora en Europe.',
        features: [
          'Campagnes multi-pays avec adaptation des messages aux mentalités locales',
          'Gestion conjointe Meta, TikTok et Google Ads (Search & YouTube)',
          'Volume créatif étendu avec déclinaisons vidéos multiples chaque semaine',
          'Stratégie de retargeting dynamique avancée',
          'Support d’urgence 7j/7 et sécurisation juridique des actifs publicitaires'
        ],
        ctaText: 'Demander un Plan Multi-Pays'
      }
    ],
    guaranteeText: 'Sécurité d’Investissement : Nous analysons vos campagnes avant tout engagement. Si nos experts estiment que votre offre ou votre tunnel n’est pas encore mûr pour être rentable en publicité payante, nous vous le disons avec franchise avant de vous faire dépenser le moindre franc.',
    faq: [
      {
        question: 'Comment déterminez-vous le budget à investir en publicité ?',
        answer: 'Le budget média est déterminé sur mesure selon vos objectifs de chiffre d’affaires et la marge de vos produits. Lors de notre audit gratuit, nous calculons votre coût d’acquisition cible pour définir le montant optimal à allouer aux plateformes sans mettre vos finances en péril.'
      },
      {
        question: 'Le budget publicitaire est-il inclus dans vos honoraires ?',
        answer: 'Non. Pour une totale transparence comptable, vous payez directement Meta ou TikTok avec votre carte bancaire d’entreprise. Nos honoraires couvrent exclusivement la stratégie, la création des visuels et vidéos, le paramétrage technique et le pilotage quotidien des performances.'
      },
      {
        question: 'Pourquoi associer TikTok Ads à Facebook au Burkina Faso ?',
        answer: 'TikTok connaît une explosion fulgurante à Ouaga et Bobo auprès des 20-45 ans. Les coûts publicitaires y sont souvent 2 fois moins chers que sur Facebook, ce qui permet de capter une audience fraîche et réactive avant que la concurrence ne s’y intéresse massivement.'
      },
      {
        question: 'Combien de temps faut-il pour voir les premiers résultats ?',
        answer: 'Dès que vos campagnes sont validées par les plateformes (sous 24 à 48h après la création des créatifs), les premiers prospects commencent à arriver sur votre WhatsApp dans les heures qui suivent.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un audit publicitaire préalable pour mes campagnes Meta & TikTok.'
  },
  {
    slug: 'tunnels-de-vente-whatsapp',
    num: '04',
    iconName: 'Target',
    title: 'Tunnels de Vente & Vente WhatsApp Haute Conversion',
    tagline: 'L’entonnoir de vente le plus rentable d’Afrique de l’Ouest : Landing page 1-clic et closing WhatsApp d’élite',
    category: 'Conversion Directe & Tunnels de Vente',
    mockupType: 'commerce',
    heroBadge: 'LE MODÈLE N°1 POUR VENDRE EN AFRIQUE',
    hookHeadline: 'Transformez vos visiteurs hésitants en acheteurs confirmés qui commandent avec enthousiasme.',
    hookSubtitle: 'Nous fusionnons la force visuelle d’une Landing Page monoproduit ultra-rapide et la chaleur humaine de WhatsApp Business. Fini les paniers abandonnés : vos prospects commandent en 1 clic et vos équipes les closent avec nos scripts éprouvés.',
    avatarProfile: {
      target: 'Commerçants, Importateurs, Vendeurs de Cosmétiques, Mode, High-Tech & Services au Burkina Faso',
      description: 'Vous vendez des produits de qualité mais votre taux de conversion est faible. Les visiteurs quittent votre site sans commander ou demandent des informations sur vos pages sans jamais passer à l’acte. Vous voulez un entonnoir de vente direct qui convertit le trafic en cash.'
    },
    painPoints: [
      {
        title: 'Des paniers abandonnés massifs sur les sites classiques',
        description: 'Imposer aux clients africains de créer un compte avec mot de passe et de renseigner 15 champs d’adresse fait fuir la grande majorité des acheteurs sur mobile.'
      },
      {
        title: 'Le calvaire des refus à la livraison (Cash-on-Delivery)',
        description: 'Envoyer un coursier à l’autre bout de Ouagadougou pour qu’il trouve un client injoignable ou qui dit "je n’ai plus l’argent". Cela détruit vos marges.'
      },
      {
        title: 'Des scripts de réponse WhatsApp amateurs',
        description: 'Des vendeurs qui répondent froidement ou attendent 3 heures pour envoyer un prix, au lieu d’appliquer un protocole commercial de qualification et de vente structuré.'
      },
      {
        title: 'Des pages lentes qui découragent les acheteurs',
        description: 'Des pages avec des images lourdes qui mettent 6 secondes à charger sur smartphone, faisant perdre la moitié des clients avant même qu’ils aient vu votre produit.'
      }
    ],
    manifesto: {
      badge: 'NOTRE VISION DU TUNNEL DE VENTE',
      headline: 'En Afrique, on ne vend pas à des numéros de carte bancaire : on vend à des êtres humains.',
      paragraphs: [
        'Vouloir copier les boutiques e-commerce américaines avec des paniers d’achat compliqués est une erreur stratégique majeure en Afrique francophone. Ici, la confiance se gagne par la réassurance humaine et la clarté du contact direct.',
        'Notre architecture de tunnel combine le meilleur des deux mondes : la vitesse foudroyante d’une page de vente 1-clic pour capturer le lead, et la convivialité de WhatsApp pour conclure la vente et sécuriser la livraison.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Étude de l’Offre & Psychologie de l’Acheteur',
        tagline: 'Construire une offre impossible à refuser',
        description: 'Analyse du produit phare, identification des objections majeures à Ouaga (authenticité, garantie, délai de livraison) et structuration d’un pack promotionnel irrésistible.',
        deliverables: ['Audit de l’offre commerciale', 'Définition des offres groupées (Upsells)', 'Structure de garantie locale']
      },
      {
        num: '02',
        title: 'Rédaction Persuasive & Copywriting Émotionnel',
        tagline: 'Les mots exacts qui déclenchent l’achat',
        description: 'Rédaction de la page de vente selon la structure éprouvée : Accroche du problème, Présentation de la solution, Preuves en images, Avis de clients locaux et Appel à l’action urgent.',
        deliverables: ['Texte complet de la Landing Page', 'Scénarios de preuve sociale', 'Arguments anti-hésitation']
      },
      {
        num: '03',
        title: 'Développement de la Landing Page 1-Clic (< 0.6s)',
        tagline: 'L’achat en 1 clic sans aucune friction',
        description: 'Conception d’une page ultra-légère optimisée pour smartphone. Formulaire simplifié en 3 champs (Nom, Numéro WhatsApp, Ville/Quartier) relié instantanément à votre base de données.',
        deliverables: ['Landing page monoproduit instantanée', 'Formulaire 1-clic mobile', 'Liaison automatique Google Sheets / CRM']
      },
      {
        num: '04',
        title: 'Machine de Closing WhatsApp & Scripts Testés',
        tagline: 'Guider le prospect de la commande au paiement',
        description: 'Configuration complète de WhatsApp Business avec réponses rapides et fourniture d’un livret de scripts de vente pour vos commerciaux pour qualifier et closer sans délai.',
        deliverables: ['Manuel de scripts de closing', 'Messages vocaux types de confirmation', 'Séquences de relance des paniers indécis']
      },
      {
        num: '05',
        title: 'Protocole Logistique Anti-Refus à la Livraison',
        tagline: 'Faire chuter les refus de livraison sous les 8%',
        description: 'Mise en place d’un protocole d’appel de confirmation et message de réassurance pour valider l’heure exacte avec le livreur et réduire drastiquement les retours de colis.',
        deliverables: ['Protocole de cadrage pour livreurs motos', 'Procédure de validation préalable par SMS/WhatsApp', 'Suivi du taux de livraison effectif']
      }
    ],
    deliverables: [
      {
        module: 'Architecture de la Landing Page Monoproduit',
        items: [
          'Rédaction persuasive (copywriting) adaptée au marché local',
          'Design épuré et visuels démonstratifs du produit en situation',
          'Section Avis Clients avec captures réelles et preuves sociales',
          'Formulaire de commande 1-clic ultra-rapide (< 0.6s)'
        ]
      },
      {
        module: 'Machine Commerciale WhatsApp',
        items: [
          'Configuration complète de WhatsApp Business et catalogues',
          'Manuel complet des scripts de closing pour vos vendeurs',
          'Séquences de relances automatiques pour les indécis',
          'Protocoles de livraison anti-refus pour livreurs'
        ]
      },
      {
        module: 'Tracking & Optimisation Continue',
        items: [
          'Installation du tracking Meta Pixel et événement conversion',
          'Enregistrement automatique des commandes en temps réel',
          'Formation de votre équipe au suivi des expéditions',
          'A/B testing pour maximiser le panier moyen'
        ]
      }
    ],
    metrics: [
      { value: 'x3.5', label: 'Multiplication du taux de conversion par rapport à un site classique' },
      { value: '< 8%', label: 'Taux de refus à la livraison avec notre protocole de confirmation' },
      { value: '+45%', label: 'Augmentation du panier moyen grâce aux offres groupées' },
      { value: '0.6s', label: 'Vitesse d’affichage de nos Landing Pages sur smartphone' }
    ],
    interventionLevels: [
      {
        name: 'Tunnel Monoproduit Essentiel',
        badge: 'Sur-Mesure',
        scope: 'Pour tester et rentabiliser un produit phare',
        desc: 'Idéal pour lancer un produit gagnant avec une Landing Page chirurgicale et des scripts de vente WhatsApp prêts à l’emploi.',
        features: [
          '1 Landing Page monoproduit ultra-rapide (< 0.6s)',
          'Rédaction persuasive complète orientée direct response',
          'Formulaire 1-clic relié directement à votre WhatsApp et Google Sheets',
          'Scripts de vente WhatsApp complets pour vos équipes',
          'Intégration du tracking Meta Pixel & CAPI'
        ],
        ctaText: 'Étudier mon Tunnel Monoproduit'
      },
      {
        name: 'Écosystème Multi-Tunnels & Scaling',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour les commerces et importateurs à fort volume',
        desc: 'Pour les distributeurs gérant une gamme de 3 à 5 produits clés avec stratégie d’offres groupées et réduction des refus de livraison.',
        features: [
          'Jusqu’à 3 Landing Pages monoproduits distinctes optimisées',
          'Stratégie d’offres groupées (Bump offers & Upsells) pour booster le panier moyen',
          'Scripts de relance des paniers abandonnés sur WhatsApp',
          'Protocole logistique anti-refus pour les livreurs de Ouaga et Bobo',
          'Session de formation individuelle de votre équipe de vente'
        ],
        ctaText: 'Déployer mon Écosystème Multi-Tunnels'
      },
      {
        name: 'Tunnel Grand Volume & Automatisation',
        badge: 'Sur-Mesure Entreprise',
        scope: 'Pour les réseaux de distribution et services haut de gamme',
        desc: 'Pour les marques et entreprises nécessitant un tunnel connecté à un CRM d’entreprise avec pré-qualification et encaissement automatisé.',
        features: [
          'Tunnel de vente multi-étapes avec qualification préalable par formulaire interactif',
          'Paiement en ligne Mobile Money automatisé avant expédition',
          'Liaison avec des webhooks vers votre CRM ou base de données',
          'Scripts de closing téléphonique VIP pour paniers élevés',
          'Accompagnement et optimisation du taux de conversion pendant 60 jours'
        ],
        ctaText: 'Demander un Cadrage Tunnel VIP'
      }
    ],
    guaranteeText: 'Engagement Performance : Nous bâtissons votre tunnel sur la base de structures déjà testées et rentabilisées sur des dizaines de milliers de commandes en Afrique de l’Ouest. Votre tunnel est conçu pour convertir dès les premières visites qualifiées.',
    faq: [
      {
        question: 'Comment obtenons-nous un devis pour un tunnel de vente ?',
        answer: 'Nous examinons votre produit, vos marges et votre logistique lors d’un cadrage gratuit sur WhatsApp. Nous vous proposons ensuite un plan d’action chiffré sur mesure sous 24h ouvrées.'
      },
      {
        question: 'Pourquoi ce système est-il tellement plus rentable qu’une boutique classique ?',
        answer: 'Dans une boutique classique, le client se perd au milieu de 50 produits et finit par partir sans rien acheter. Dans notre tunnel monoproduit, toute l’attention est concentrée sur une seule offre irrésistible avec un passage à l’action en 1 clic.'
      },
      {
        question: 'Comment vos scripts aident-ils nos commerciaux à mieux vendre ?',
        answer: 'Nos scripts fournissent à vos équipes les réponses exactes aux questions récurrentes des clients à Ouagadougou (« C’est original ? », « Le prix est trop cher », « Vous livrez où ? »), permettant de lever les doutes avec assurance et courtoisie.'
      },
      {
        question: 'Fournissez-vous également les transporteurs et livreurs ?',
        answer: 'Nous pouvons vous mettre en relation avec nos partenaires coursiers et compagnies de transport fiables à Ouaga et Bobo, formés à nos exigences d’encaissement sécurisé et de ponctualité.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un cadrage préalable pour la mise en place d’un tunnel de vente WhatsApp.'
  },
  {
    slug: 'agents-ia-automatisation-metier',
    num: '05',
    iconName: 'Bot',
    title: 'Agents IA & Automatisation Métier 24/7 sur WhatsApp Cloud',
    tagline: 'Des assistants d’intelligence artificielle entraînés sur votre entreprise pour qualifier et convertir vos prospects jour et nuit',
    category: 'Intelligence Artificielle & Automatisation',
    mockupType: 'ai',
    heroBadge: 'API OFFICIELLE META WHATSAPP CLOUD & IA GÉNÉRATIVE',
    hookHeadline: 'Ne laissez plus aucun prospect sans réponse la nuit, les dimanches ou quand vos équipes sont submergées.',
    hookSubtitle: 'Nous déployons des assistants intelligents connectés à l’API officielle de WhatsApp Cloud, à vos catalogues et à vos outils de gestion. Vos clients reçoivent des réponses personnalisées et précises 24h/24, 7j/7, avec passage de relais fluide vers vos conseillers humains.',
    avatarProfile: {
      target: 'Entreprises recevant plus de 20 messages WhatsApp par jour, Cliniques, Écoles, Hôtels & Agences',
      description: 'Vos équipes perdent un temps précieux à répéter 80 fois par jour les mêmes réponses de base (tarifs, localisation, horaires, disponibilité). Les soirs et les week-ends, vos clients restent sans réponse et se tournent vers la concurrence. Vous voulez automatiser vos réponses sans perdre la chaleur humaine de la relation client.'
    },
    painPoints: [
      {
        title: 'Des prospects qui fuient la nuit et les dimanches',
        description: 'La majorité des recherches d’achat se font entre 20h et minuit ou le week-end. Sans assistant IA, ces demandes restent sans réponse et les ventes sont perdues.'
      },
      {
        title: 'L’épuisement et la saturation de vos collaborateurs',
        description: 'Répondre en boucle aux mêmes questions répétitives use le moral de vos équipes et les empêche de se concentrer sur les négociations à forte valeur.'
      },
      {
        title: 'Les erreurs humaines sur les prix et les disponibilités',
        description: 'Donner un tarif erroné, oublier de noter un prospect chaud ou promettre un article qui est en réalité en rupture de stock.'
      },
      {
        title: 'Le risque de bannissement avec des bots non conformes',
        description: 'Utiliser des logiciels non officiels qui violent les conditions de Meta et risquer de voir son numéro commercial bloqué définitivement.'
      }
    ],
    manifesto: {
      badge: 'NOTRE VISION DE L’INTELLIGENCE ARTIFICIELLE',
      headline: 'L’IA ne remplace pas vos équipes : elle les libère des tâches répétitives pour closer plus de ventes.',
      paragraphs: [
        'Déployer un chatbot rigide qui se contente de dire "Tapez 1, tapez 2" agace les clients. Les utilisateurs veulent un échange fluide, chaleureux et intelligent.',
        'Nos agents d’IA générative sont entraînés sur vos documents réels et dialoguent avec naturel et politesse, tout en appliquant des règles strictes de sécurité pour ne jamais inventer d’informations.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Audit des Conversations & Formalisation des Connaissances',
        tagline: 'Extraire le savoir-faire de vos meilleurs vendeurs',
        description: 'Recueil exhaustif de vos fiches produits, de vos tarifs, de vos conditions de garantie et de l’historique des questions les plus courantes posées par vos clients.',
        deliverables: ['Base de connaissances structurée', 'Cartographie des flux de conversation', 'Règles de conformité et de ton']
      },
      {
        num: '02',
        title: 'Configuration Sécurisée sur WhatsApp Cloud API',
        tagline: 'Le statut officiel vérifié de Meta',
        description: 'Création et validation de votre compte Meta Developer officiel, liaison sécurisée de votre numéro d’entreprise et paramétrage des autorisations cloud.',
        deliverables: ['Compte officiel WhatsApp Cloud vérifié', 'Zéro risque de blocage de numéro', 'Délivrabilité des messages à 100%']
      },
      {
        num: '03',
        title: 'Ingénierie des Prompts & Entraînement RAG',
        tagline: 'Une précision absolue sans aucune hallucination',
        description: 'Déploiement de notre architecture RAG (Retrieval-Augmented Generation). L’agent consulte votre base de connaissances en direct avant de formuler chaque réponse, avec interdiction d’inventer des données.',
        deliverables: ['Assistant entraîné sur votre catalogue', 'Tests de robustesse sur 100 cas types', 'Personnalité courtoise et bienveillante']
      },
      {
        num: '04',
        title: 'Liaison avec vos Outils Métiers (CRM, Agenda, Stocks)',
        tagline: 'Automatiser les démarches de bout en bout',
        description: 'Connexion de l’agent avec Google Sheets, votre CRM ou votre agenda pour enregistrer les coordonnées des prospects qualifiés et réserver des créneaux en direct.',
        deliverables: ['Enregistrement automatique des leads', 'Génération instantanée de devis en PDF', 'Alertes WhatsApp prioritaires pour vos commerciaux']
      },
      {
        num: '05',
        title: 'Supervision & Affinage Continu par nos Ingénieurs',
        tagline: 'Une IA qui s’améliore chaque semaine',
        description: 'Pendant les 30 premiers jours, nos ingénieurs analysent quotidiennement les logs d’échanges pour ajuster le vocabulaire et perfectionner les réponses de l’agent.',
        deliverables: ['Rapport mensuel des questions clients', 'Ajustements réguliers de la base de savoir', 'Support technique d’astreinte']
      }
    ],
    deliverables: [
      {
        module: 'Ingénierie & Entraînement de l’Assistant',
        items: [
          'Formalisation et injection de votre base de connaissances d’entreprise',
          'Configuration de la personnalité de l’agent (chaleureux et professionnel)',
          'Entraînement aux scénarios de qualification commerciale et prise de rendez-vous',
          'Garde-fous stricts contre les hallucinations ou informations erronées'
        ]
      },
      {
        module: 'Intégration WhatsApp Cloud & Passerelles',
        items: [
          'Vérification officielle de l’entreprise auprès des services de Meta',
          'Connexion conforme à l’API WhatsApp Cloud sans risque de bannissement',
          'Déploiement de serveurs webhooks ultra-rapides et sécurisés',
          'Catalogue produits dynamique avec affichage d’images en direct'
        ]
      },
      {
        module: 'Automatisation des Flux & Outils Collaborateurs',
        items: [
          'Enregistrement immédiat des leads dans votre CRM ou Google Sheets',
          'Passage de relais instantané vers vos collaborateurs humains',
          'Génération automatique de devis et récapitulatifs de commandes en PDF',
          'Tableau de bord de suivi des statistiques de conversations'
        ]
      }
    ],
    metrics: [
      { value: '80%', label: 'Des questions courantes résolues sans intervention humaine' },
      { value: '3 sec', label: 'Délai moyen de réponse garanti 24h/24, 7j/7' },
      { value: '100%', label: 'Conformité avec les règles officielles de Meta (zéro ban)' },
      { value: 'x4', label: 'Capacité de traitement de conversations en simultané' }
    ],
    interventionLevels: [
      {
        name: 'Assistant FAQ & Accueil Client 24/7',
        badge: 'Sur-Mesure',
        scope: 'Pour répondre aux questions fréquentes et capturer les contacts',
        desc: 'Conçu pour les PME recevant 20 à 50 messages par jour voulant répondre instantanément aux demandes de base et enregistrer les coordonnées.',
        features: [
          'Configuration officielle de l’API WhatsApp Cloud',
          'Entraînement de l’IA sur votre catalogue et votre foire aux questions',
          'Réponse instantanée et polie 24h/24 et 7j/7',
          'Enregistrement automatique des coordonnées dans Google Sheets',
          'Transfert automatique vers un humain en cas de demande complexe'
        ],
        ctaText: 'Étudier mon Assistant d’Accueil'
      },
      {
        name: 'Agent Métier & Qualification Commerciale',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour qualifier les besoins, planifier et générer des devis',
        desc: 'Pour les cliniques, écoles, agences immobilières et distributeurs qui veulent une qualification commerciale et une prise de rendez-vous automatique.',
        features: [
          'IA avancée entraînée sur des documents d’entreprise volumineux (catalogues, tarifs)',
          'Qualification méthodique des besoins et du budget du prospect avant passage de relais',
          'Prise de rendez-vous automatique synchronisée avec votre agenda d’équipe',
          'Génération de devis indicatifs instantanés en PDF dans la discussion',
          'Alertes instantanées sur le mobile de vos commerciaux pour les dossiers chauds',
          'Support prioritaire et actualisation mensuelle des connaissances'
        ],
        ctaText: 'Étudier mon Agent Métier'
      },
      {
        name: 'Écosystème Entreprise & Système d’Information',
        badge: 'Sur-Mesure Institutionnel',
        scope: 'Pour banques, assurances et grands réseaux multi-services',
        desc: 'Pour les institutions nécessitant une liaison bidirectionnelle avec leur ERP ou base de données sécurisée interne.',
        features: [
          'Vérification d’identité client par OTP SMS ou code sécurisé',
          'Consultation de dossier, statut de commande ou solde en temps réel',
          'Multi-agents spécialisés (Support, Vente, Réclamations, Recrutement)',
          'Hébergement sécurisé des données avec conformité stricte CIL / RGPD',
          'SLA d’intervention 24/7 garanti avec ingénieur référent dédié'
        ],
        ctaText: 'Demander un Cadrage Institutionnel'
      }
    ],
    guaranteeText: 'Période d’Entraînement Supervisée : Nos ingénieurs analysent quotidiennement les échanges durant le premier mois pour affiner les prompts de l’agent jusqu’à obtenir un taux de satisfaction utilisateur supérieur à 95%.',
    faq: [
      {
        question: 'Comment obtenons-nous un devis pour déployer un agent IA ?',
        answer: 'Nous analysons ensemble le volume de vos messages, le nombre de produits ou services à intégrer et vos outils existants lors d’un premier échange gratuit. Nous vous délivrons ensuite une proposition sur mesure sous 48h.'
      },
      {
        question: 'L’agent risque-t-il de donner de faux tarifs ou de fausses informations ?',
        answer: 'Non. Notre architecture RAG impose des garde-fous stricts : l’IA ne répond qu’à partir des documents certifiés que vous avez validés. Si une question sort de son périmètre, elle indique poliment qu’elle transmet la demande à un conseiller humain.'
      },
      {
        question: 'Pouvons-nous conserver notre numéro WhatsApp d’entreprise actuel ?',
        answer: 'Oui, nous pouvons migrer votre numéro professionnel existant vers l’API officielle WhatsApp Cloud afin de préserver tous vos contacts habituels.'
      },
      {
        question: 'Comment mes employés reprennent-ils la main sur une discussion ?',
        answer: 'Dès qu’un collaborateur envoie un message dans la discussion depuis le tableau de bord partagé, l’agent IA se met automatiquement en pause pour laisser l’humain piloter l’échange librement.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un audit préalable pour l’intégration d’un agent IA sur mon WhatsApp d’entreprise.'
  },
  {
    slug: 'ecommerce-expansion-sous-regionale',
    num: '06',
    iconName: 'CreditCard',
    title: 'E-Commerce & Expansion Sous-Régionale (Burkina, Côte d’Ivoire, Sénégal)',
    tagline: 'Des écosystèmes marchands scalables, connectés aux réalités logistiques et financières d’Afrique de l’Ouest',
    category: 'E-Commerce & Logistique Transfrontalière',
    mockupType: 'commerce',
    heroBadge: 'MULTI-DEVISES, MOBILE MONEY & RÉSEAUX DE COURSIERS',
    hookHeadline: 'Ne limitez plus vos ventes à un seul quartier. Déployez une boutique en ligne capable de conquérir toute la sous-région.',
    hookSubtitle: 'Nous concevons des plateformes marchandes ultra-rapides multi-devises (FCFA, EUR, USD), intégrées avec les réseaux de coursiers locaux à Ouagadougou, Bobo, Abidjan et Dakar, avec gestion centralisée des stocks et paiements sécurisés.',
    avatarProfile: {
      target: 'Marques de Mode, Cosmétiques, Électronique, Agroalimentaire & Distributeurs ambitieux',
      description: 'Vous vendez déjà bien localement mais vous saturez votre marché de proximité. Vous recevez des demandes de clients en Côte d’Ivoire, au Mali ou au Sénégal mais vous manquez d’un système fiable pour encaisser sans risque et expédier sans litige.'
    },
    painPoints: [
      {
        title: 'La complexité des paiements multi-opérateurs',
        description: 'Vendre dans plusieurs pays avec des opérateurs télécoms différents (Orange Money, Moov, Wave, Cartes) et des frais de transfert non maîtrisés.'
      },
      {
        title: 'Les stocks désynchronisés et les ruptures imprévues',
        description: 'Vendre deux fois le même article parce que vos ventes physiques, WhatsApp et votre site ne partagent pas le même inventaire en direct.'
      },
      {
        title: 'Les litiges et colis perdus avec les transporteurs',
        description: 'Expédier sans traçabilité ni preuve de livraison officielle, avec le risque que le client nie avoir reçu le colis.'
      },
      {
        title: 'Des boutiques sous WordPress trop lentes sur mobile',
        description: 'Des sites marchands lourds qui mettent 6 secondes à charger et découragent les acheteurs avant même d’atteindre le panier.'
      }
    ],
    manifesto: {
      badge: 'NOTRE VISION DU E-COMMERCE EN AFRIQUE',
      headline: 'Le commerce électronique en Afrique exige une infrastructure adaptée au terrain, pas des solutions copiées-collées.',
      paragraphs: [
        'Pour réussir en Afrique de l’Ouest, une boutique en ligne doit être rapide comme l’éclair, accepter tous les Mobile Money locaux en 1 clic et s’adosser à des partenaires de livraison sérieux.',
        'Nos plateformes Next.js 16 sont conçues pour encaisser de gros volumes de commandes sans ralentissement et offrir une expérience d’achat sans équivalent sur smartphone.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Architecture du Catalogue & Stratégie Multi-Pays',
        tagline: 'Structurer l’assortiment pour maximiser le panier moyen',
        description: 'Organisation des catégories, structuration des fiches produits avec filtres avancés (taille, couleur, prix) et définition de la stratégie de cross-selling.',
        deliverables: ['Arborescence du catalogue', 'Matrice des prix et marges par pays', 'Protocole d’offres complémentaires']
      },
      {
        num: '02',
        title: 'Conception UI/UX Marchande Haute Performance',
        tagline: 'Une expérience d’achat fluide et rassurante',
        description: 'Design épuré valorisant vos produits avec photos haute définition et vidéos de démonstration. Panier d’achat simplifié sans étape inutile.',
        deliverables: ['Maquettes de la boutique sous Figma', 'Tunnel de commande optimisé mobile', 'Validation des visuels produits']
      },
      {
        num: '03',
        title: 'Développement Next.js 16 & Moteur Marchand Découplé',
        tagline: 'Vitesse instantanée même avec des milliers d’articles',
        description: 'Développement sur le moteur Next.js 16 avec recherche instantanée et synchronisation d’inventaire en direct.',
        deliverables: ['Plateforme e-commerce haute vitesse', 'Gestion centralisée des stocks', 'Recherche de produits sans temps mort']
      },
      {
        num: '04',
        title: 'Intégration Passerelles de Paiement & Hubs Logistiques',
        tagline: 'Encaisser facilement et expédier sans litige',
        description: 'Passerelle de paiement unifiée (Orange Money, Moov, Wave, Cartes) avec détection anti-fraude et calculateur de frais de livraison dynamique.',
        deliverables: ['Passerelle Mobile Money multi-pays', 'Calculateur de livraison par ville', 'Système de suivi de commande par SMS/WhatsApp']
      },
      {
        num: '05',
        title: 'Formation des Équipes & Déploiement Opérationnel',
        tagline: 'Autonomie totale de vos gestionnaires',
        description: 'Formation de vos gestionnaires de commandes, préparateurs de colis et comptables pour une exploitation fluide au quotidien.',
        deliverables: ['Formation pratique de vos équipes', 'Manuel des procédures logistiques', 'Support technique prioritaire 1 an']
      }
    ],
    deliverables: [
      {
        module: 'Plateforme E-Commerce Haute Performance',
        items: [
          'Design UI/UX d’élite avec navigation fluide et recherche instantanée',
          'Fiches produits détaillées avec zoom, galeries et vidéos',
          'Panier d’achat express avec suggestion d’articles complémentaires',
          'Système de codes promotionnels et gestion des remises'
        ]
      },
      {
        module: 'Paiements & Logistique Sous-Régionale',
        items: [
          'Passerelle de paiement sécurisée multi-opérateurs (Orange, Moov, Wave, Cartes)',
          'Calculateur dynamique des frais de livraison selon la ville ou le pays',
          'Notifications automatiques de suivi de colis par SMS et WhatsApp',
          'Génération automatique des factures et bordereaux d’expédition'
        ]
      },
      {
        module: 'Administration & Gestion des Stocks',
        items: [
          'Tableau de bord administrateur moderne et accessible sur smartphone',
          'Gestion synchronisée des stocks en temps réel',
          'Export comptable et rapports de ventes par pays et par produit',
          'Formation pratique de vos équipes et support technique continu'
        ]
      }
    ],
    metrics: [
      { value: '+310%', label: 'Croissance moyenne des ventes après refonte Next.js' },
      { value: '3 pays', label: 'Couverts en moyenne dès le 3ème mois d’expansion' },
      { value: '99.9%', label: 'Disponibilité du système lors des pics d’arrivages' },
      { value: '0 erreur', label: 'Sur les stocks synchronisés en temps réel' }
    ],
    interventionLevels: [
      {
        name: 'Boutique Nationale Pro',
        badge: 'Sur-Mesure',
        scope: 'Pour dominer le marché burkinabè (Ouaga, Bobo, Provinces)',
        desc: 'Conçu pour les marques voulant une boutique e-commerce de standing international pour couvrir l’ensemble du territoire burkinabè.',
        features: [
          'Boutique complète Next.js 16 avec catalogue évolutif',
          'Paiements unifiés Orange Money, Moov Money et Cartes',
          'Gestion des expéditions locales avec suivi par WhatsApp',
          'Panneau d’administration en français et gestion des stocks',
          'Formation de votre équipe + 1 an de maintenance préventive'
        ],
        ctaText: 'Étudier ma Boutique Nationale'
      },
      {
        name: 'Expansion Sous-Régionale UEMOA',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour exporter en Côte d’Ivoire, Sénégal, Mali et Niger',
        desc: 'Pour les marques prêtes à exporter dans la sous-région avec gestion multi-devises et relais logistiques transfrontaliers.',
        features: [
          'Architecture multi-pays avec détection automatique de géolocalisation',
          'Support multi-devises (XOF, EUR, USD) et paiement Wave / Orange / Cartes',
          'Gestion multi-entrepôts et suivi des stocks par pays',
          'Liaison avec les transporteurs sous-régionaux fiables',
          'Stratégie de relance des paniers abandonnés sur WhatsApp',
          'Accompagnement stratégique au lancement sur les nouveaux marchés'
        ],
        ctaText: 'Cadrer mon Expansion Régionale'
      },
      {
        name: 'Écosystème Retail & Franchise',
        badge: 'Sur-Mesure Entreprise',
        scope: 'Pour chaînes de magasins, supermarchés et réseaux de distribution',
        desc: 'Pour les réseaux de magasins physiques nécessitant une synchronisation caisse de vente (POS) et boutique web en continu.',
        features: [
          'Synchronisation bidirectionnelle avec vos logiciels de caisse physique',
          'Catalogue de milliers de références avec recherche ultra-rapide',
          'Programme de fidélité omnicanal (magasins et web unifiés)',
          'Architecture cloud haute résilience avec sauvegardes horaires',
          'Account Manager senior et support d’urgence 24/7'
        ],
        ctaText: 'Demander une Étude Retail'
      }
    ],
    guaranteeText: 'Garantie Continuité Opérationnelle : Votre boutique est déployée sur une infrastructure mondiale à tolérance de panne. En cas de défaillance technique non résolue sous 2 heures, nous prenons en charge la maintenance du trimestre suivant à nos frais.',
    faq: [
      {
        question: 'Comment obtenons-nous une proposition pour notre projet e-commerce ?',
        answer: 'Nous organisons un cadrage gratuit de 30 minutes pour analyser le nombre de vos références, vos marchés cibles et vos processus logistiques, afin de vous remettre une offre sur mesure sous 48h.'
      },
      {
        question: 'Prenez-vous une commission sur nos ventes en ligne ?',
        answer: 'Non. BAROUBA GROUP ne prélève aucune commission sur votre chiffre d’affaires. Vous êtes propriétaire de votre plateforme à 100%. Seuls les opérateurs bancaires et Mobile Money appliquent leurs frais habituels standards.'
      },
      {
        question: 'Comment gérez-vous les expéditions de Ouaga vers Abidjan ou Dakar ?',
        answer: 'Nous vous mettons en relation avec nos partenaires transporteurs sous-régionaux fiables qui gèrent le fret groupé et la livraison du dernier kilomètre avec remise contre signature.'
      },
      {
        question: 'Puis-je importer mon catalogue existant depuis un fichier Excel ?',
        answer: 'Oui. Nous configurons un système d’import/export en masse vous permettant d’injecter des centaines de références avec photos et tarifs en quelques clics.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un cadrage préalable pour mon projet e-commerce et d’expansion sous-régionale.'
  },
  {
    slug: 'formations-accompagnement-metiers-du-numerique',
    num: '07',
    iconName: 'GraduationCap',
    title: 'Formations & Accompagnement aux Métiers du Numérique',
    tagline: '« Nous formons et nous accompagnons » : La fabrique d’élite des compétences digitales d’Afrique de l’Ouest',
    category: 'Formations Certifiantes & Mentorat de Terrain',
    mockupType: 'academy',
    heroBadge: 'BAROUBA ACADEMY — 100% PRATIQUE & MENTORAT DIRECT',
    hookHeadline: 'Ne perdez plus des mois dans des cours théoriques abstraits. Formez-vous sur des cas réels.',
    hookSubtitle: 'Nous formons et nous accompagnons vos équipes d’entreprise et les professionnels ambitieux aux compétences les plus recherchées : Community Management, Marketing Digital & Ads, Vente en Ligne, Intelligence Artificielle et Ingénierie Web. Coaching sur cas réels jusqu’aux résultats.',
    avatarProfile: {
      target: 'Dirigeants voulant former leurs équipes, Cadres en reconversion, Entrepreneurs & Professionnels ambitieux',
      description: 'Vous savez que le numérique est le moteur incontournable de la croissance. Mais vous êtes lassé des séminaires théoriques qui ne débouchent sur aucune compétence actionnable. Vous voulez une formation immersive où l’on manipule les vrais outils, où l’on gère de vrais budgets et où un mentor senior corrige vos erreurs en direct.'
    },
    painPoints: [
      {
        title: 'Des formations diplômantes déconnectées du marché réel',
        description: 'Avoir un diplôme théorique mais être incapable de monter une vidéo courte avec CapCut ou de paramétrer une campagne publicitaire sans se faire bloquer.'
      },
      {
        title: 'L’absence de suivi après la fin des cours',
        description: 'Suivre une formation de 3 jours, puis se retrouver seul et bloqué devant son écran dès qu’il faut appliquer les notions sur un cas d’entreprise réel.'
      },
      {
        title: 'Des formateurs théoriciens qui ne pratiquent pas',
        description: 'Apprendre le digital avec des intervenants qui n’ont jamais géré de campagne avec leur propre argent ni géré de crise d’image sur les réseaux.'
      },
      {
        title: 'Le manque de structure et de mentorat individuel',
        description: 'Se perdre dans des tutoriels YouTube contradictoires sans méthodologie claire et perdre des mois entiers pour des compétences qu’un mentor transmet en 3 semaines.'
      }
    ],
    manifesto: {
      badge: 'NOTRE PACTE PÉDAGOGIQUE',
      headline: '« Nous formons et nous accompagnons » : pas de théorie creuse, que des résultats mesurables.',
      paragraphs: [
        'Chez BAROUBA ACADEMY, nous avons aboli les cours magistraux passifs. Nos sessions sont des ateliers intensifs d’ingénierie opérationnelle.',
        'Nos formateurs sont nos propres directeurs de pôle en activité. Et surtout, nous restons à vos côtés pendant 60 jours après la formation pour vous guider jusqu’à vos premiers résultats concrets.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Diagnostic des Compétences & Cadrage Pédagogique',
        tagline: 'Identifier le point de départ pour viser l’excellence',
        description: 'Évaluation préalable de votre niveau ou de celui de vos collaborateurs pour adapter le rythme et sélectionner les études de cas les plus pertinentes pour votre secteur.',
        deliverables: ['Bilan de compétences initial', 'Feuille de route d’apprentissage personnalisée', 'Attribution de votre mentor référent']
      },
      {
        num: '02',
        title: 'Ateliers Pratiques Immersifs en Petits Groupes',
        tagline: 'Manipuler les vrais outils dès le premier jour',
        description: 'Sessions interactives en présentiel à Ouagadougou ou en direct interactif en ligne. Pas de diapositives abstraites : vous créez vos visuels, paramétrez vos campagnes et configurez vos outils sous l’œil du mentor.',
        deliverables: ['Exercices sur des cas d’entreprises réelles', 'Templates, gabarits et prompts offerts', 'Accès aux enregistrements vidéo à vie']
      },
      {
        num: '03',
        title: 'Projet Fil Rouge & Soutenance d’Application',
        tagline: 'Prouver sa maîtrise sur un cas d’entreprise effectif',
        description: 'Chaque apprenant conçoit et déploie un projet complet de A à Z (une stratégie de page, une campagne pub avec budget réel ou un tunnel de vente) soumis à l’évaluation critique de nos experts.',
        deliverables: ['Livrable professionnel complet validé', 'Examen pratique de fin de cursus', 'Remise de la Certification BAROUBA ACADEMY']
      },
      {
        num: '04',
        title: 'Accompagnement Post-Formation de 60 Jours',
        tagline: 'Ne jamais être laissé seul face aux difficultés du terrain',
        description: 'Accès exclusif à notre canal privé WhatsApp avec vos formateurs. Quand vous lancez votre première vraie campagne ou rédigez votre premier rapport, nos mentors corrigent votre travail avant diffusion.',
        deliverables: ['Canal privé de coaching WhatsApp', 'Revue critique de vos travaux en direct', 'Conseils stratégiques pour vos premiers clients']
      },
      {
        num: '05',
        title: 'Intégration au Réseau d’Anciens & Opportunités Pro',
        tagline: 'Un tremplin pour votre carrière ou votre entreprise',
        description: 'Mise en relation avec notre écosystème d’entreprises partenaires à Ouagadougou et dans la sous-région à la recherche de compétences numériques certifiées.',
        deliverables: ['Accès au réseau d’anciens élèves certifiés', 'Recommandation auprès d’entreprises partenaires', 'Masterclasses mensuelles d’actualisation']
      }
    ],
    deliverables: [
      {
        module: 'Nos 6 Cursus d’Élite Disponibles',
        items: [
          'Community Management & Animation Stratégique de Pages 7j/7',
          'Marketing Digital & Media Buying Haute Performance (Meta & TikTok Ads)',
          'E-Commerce & Vente en Ligne adaptée au marché africain',
          'Intelligence Artificielle & Création Visuelle Publicitaire',
          'Tunnels de Vente & Psychologie de Conversion (Closing WhatsApp)',
          'Accompagnement & Coaching Métiers du Numérique sur-mesure pour PME'
        ]
      },
      {
        module: 'Modalités d’Apprentissage Pratique',
        items: [
          'Ateliers en petits groupes limités à 12 personnes pour un encadrement VIP',
          'Formules en présentiel à Ouagadougou ou en direct interactif en ligne',
          'Accès à vie à la plateforme de ressources et aux enregistrements',
          'Fourniture de contrats types, scripts et modèles prêts à l’emploi'
        ]
      },
      {
        module: 'Mentorat & Suivi Personnalisé 60 Jours',
        items: [
          'Groupe privé WhatsApp avec nos formateurs pour vos questions quotidiennes',
          'Correction personnalisée de vos premières campagnes avant lancement',
          'Certification officielle BAROUBA ACADEMY reconnue par nos partenaires',
          'Accompagnement individuel jusqu’à l’autonomie opérationnelle complète'
        ]
      }
    ],
    metrics: [
      { value: '96.4%', label: 'Taux de validation des compétences pratiques' },
      { value: '60 jours', label: 'D’accompagnement personnalisé inclus après la formation' },
      { value: 'x2.8', label: 'Accélération moyenne des revenus de nos apprenants' },
      { value: '100%', label: 'Des exercices basés sur de vrais cas d’entreprises' }
    ],
    interventionLevels: [
      {
        name: 'Bootcamp Pratique 1 Cursus',
        badge: 'Sur-Mesure Individuel',
        scope: 'Pour maîtriser une compétence clé en 3 semaines',
        desc: 'Formation intensive sur une compétence précise (ex: Community Management ou Publicité Ads) avec ateliers réels et certification.',
        features: [
          '3 semaines d’ateliers pratiques immersifs (présentiel ou ligne)',
          'Supports de cours complets, gabarits et templates professionnels offerts',
          'Correction personnalisée de vos travaux par un mentor senior',
          'Certification officielle BAROUBA ACADEMY',
          '30 jours d’accès au groupe de suivi WhatsApp'
        ],
        ctaText: 'Étudier mon Inscription au Bootcamp'
      },
      {
        name: 'Parcours Double Compétence & Mentorat VIP',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour accélérer sa carrière ou son business',
        desc: 'Pour combiner deux compétences hautement complémentaires (ex: Community Management + Ads, ou E-Commerce + Tunnels WhatsApp) avec coaching 1-on-1.',
        features: [
          '6 semaines de formation approfondie sur 2 cursus complets',
          '3 sessions individuelles de coaching 1-on-1 avec un directeur de pôle',
          'Pratique sur un budget publicitaire réel testé en direct',
          'Accompagnement prioritaire de 60 jours jusqu’aux premiers résultats',
          'Mise en relation prioritaire avec nos entreprises partenaires'
        ],
        ctaText: 'Demander un Cadrage Double Compétence'
      },
      {
        name: 'Formation d’Équipe Intra-Entreprise',
        badge: 'Sur-Mesure Entreprise',
        scope: 'Pour former 3 à 10 collaborateurs de votre structure',
        desc: 'Nous formons vos équipes directement dans vos locaux à Ouagadougou ou Bobo sur vos propres problématiques et outils internes.',
        features: [
          'Programme adapté à 100% à votre secteur d’activité et vos objectifs',
          'Audit préalable des compétences actuelles de vos collaborateurs',
          'Ateliers pratiques directement sur les comptes et outils de votre société',
          'Manuel opérationnel des procédures internes rédigé pour votre équipe',
          'Suivi trimestriel et évaluation des indicateurs de performance post-formation'
        ],
        ctaText: 'Demander un Cadrage Intra-Entreprise'
      }
    ],
    guaranteeText: 'Pacte d’Engagement BAROUBA ACADEMY : Si après avoir suivi la première semaine d’ateliers pratiques vous estimez ne pas avoir acquis de compétences concrètes applicables, nous vous remboursons intégralement sans poser de questions.',
    faq: [
      {
        question: 'Comment s’organise la prise en charge financière pour les entreprises ?',
        answer: 'BAROUBA GROUP étant une entité juridique officielle enregistrée au Burkina Faso, nous délivrons conventions de formation, factures proforma et attestations conformes pour la prise en charge par votre entreprise ou votre fonds de formation.'
      },
      {
        question: 'Faut-il avoir des connaissances préalables en informatique ?',
        answer: 'Non. Nos formations sont conçues pour être accessibles à tous. Vous devez simplement savoir utiliser un ordinateur ou un smartphone et naviguer sur Internet. Nous vous apprenons tout le reste pas-à-pas.'
      },
      {
        question: 'Quels sont les horaires des sessions pour les professionnels en activité ?',
        answer: 'Nous proposons des formules adaptées aux professionnels en poste : cours du soir en semaine (18h30 - 20h30) ainsi que des sessions intensives le samedi toute la journée.'
      },
      {
        question: 'Comment s’articule le mot d’ordre « Nous formons et nous accompagnons » ?',
        answer: 'La plupart des formations s’arrêtent quand le cours se termine. Pour nous, c’est là que le vrai travail commence : vous gardez un accès direct à vos formateurs via WhatsApp pendant 60 jours pour vous assister sur vos vrais dossiers professionnels.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA ACADEMY, je souhaite planifier un échange pour une formation individuelle ou d’équipe.'
  },
  {
    slug: 'portails-institutionnels-systemes-critiques',
    num: '08',
    iconName: 'ShieldCheck',
    title: 'Portails d’Entreprise, Démarches Numériques & Systèmes Critiques (99.98%)',
    tagline: 'L’ingénierie logicielle robuste pour institutions et grands réseaux exigeant une disponibilité absolue et zéro faille',
    category: 'Systèmes Critiques & Souveraineté Numérique',
    mockupType: 'portal',
    heroBadge: 'HAUTE DISPONIBILITÉ 99.98% & CHIFFREMENT BANCAIRE',
    hookHeadline: 'Ne confiez pas vos données stratégiques et vos démarches sensibles à des solutions vulnérables.',
    hookSubtitle: 'Nous développons des plateformes institutionnelles, des portails de démarches dématérialisées et des systèmes transactionnels sécurisés. Disponibilité garantie à 99.98%, conformité stricte aux standards de protection des données et architecture tolérante aux pannes.',
    avatarProfile: {
      target: 'Institutions, Ministères, Banques, Compagnies d’Assurances, ONG & Grands Groupes',
      description: 'Vous traitez des milliers de dossiers sensibles par mois. Vous ne pouvez pas vous permettre une interruption de service, une fuite de données ou un système qui plante lors des dates limites de dépôts de candidatures. Vous exigez des garanties contractuelles fermes, un code audité et un support souverain.'
    },
    painPoints: [
      {
        title: 'Des pannes serveurs critiques lors des pics d’affluence',
        description: 'Un portail qui s’effondre dès que 500 usagers se connectent simultanément pour soumettre un dossier ou effectuer une démarche officielle.'
      },
      {
        title: 'Les failles de sécurité et risques de fuites de données',
        description: 'L’utilisation de briques logicielles vulnérables qui exposent les pièces d’identité, les relevés et les informations confidentielles de vos usagers.'
      },
      {
        title: 'La perte de souveraineté sur les données stratégiques',
        description: 'Dépendre d’éditeurs étrangers propriétaires qui hébergent vos données sensibles hors de contrôle et augmentent unilatéralement leurs tarifs.'
      },
      {
        title: 'La lenteur administrative et les processus manuels papier',
        description: 'Des agents débordés par la saisie manuelle de dossiers papier qui pourraient être instruits et vérifiés automatiquement en ligne en quelques secondes.'
      }
    ],
    manifesto: {
      badge: 'NOTRE VISION DE LA SOUVERAINETÉ LOGICIELLE',
      headline: 'La résilience technologique est une affaire de rigueur mathématique et de souveraineté.',
      paragraphs: [
        'Dans le secteur public, bancaire et institutionnel, la moindre faille ou indisponibilité entache immédiatement la confiance des citoyens et des partenaires financiers.',
        'Nos ingénieurs conçoivent des systèmes découplés et redondés selon les plus hauts standards internationaux, en garantissant la transmission intégrale des sources et la maîtrise locale par vos équipes informatiques.'
      ]
    },
    strategySteps: [
      {
        num: '01',
        title: 'Audit de Sécurité & Cadrage Réglementaire',
        tagline: 'Conformité stricte aux exigences de souveraineté',
        description: 'Analyse des flux de données, cartographie des risques et alignement avec les réglementations de protection des données personnelles (CIL au Burkina Faso).',
        deliverables: ['Plan d’assurance sécurité (PAS)', 'Matrice de conformité réglementaire', 'Cahier des charges architectural']
      },
      {
        num: '02',
        title: 'Modélisation de Données & Architecture Haute Résilience',
        tagline: 'Une disponibilité 99.98% garantie sans coupure',
        description: 'Conception de bases de données relationnelles optimisées (PostgreSQL) avec partitionnement, chiffrement AES-256 et réplication automatique sur plusieurs centres de données étanches.',
        deliverables: ['Schéma de données relationnel', 'Architecture de basculement automatique (Failover)', 'Plan de continuité d’activité (PCA)']
      },
      {
        num: '03',
        title: 'Développement des Modules Métiers & Authentification Forte',
        tagline: 'Fluidité pour l’usager, contrôle absolu pour l’administration',
        description: 'Formulaires dynamiques avec contrôle en temps réel des pièces jointes, validation par OTP SMS ou signature électronique et tableau de bord d’instruction pour les agents.',
        deliverables: ['Portail usager et tableau de bord agent', 'Module de signature et horodatage certifié', 'Génération d’attestations par QR Code']
      },
      {
        num: '04',
        title: 'Tests de Charge Massifs & Audit d’Intrusion (Pentest)',
        tagline: 'Éprouver la robustesse avant l’ouverture officielle',
        description: 'Simulation de 5 000 à 20 000 connexions simultanées pour tester l’autoscaling des serveurs et tests d’intrusion éthiques pour colmater toute vulnérabilité potentielle.',
        deliverables: ['Rapport de tests de charge (Stress Testing)', 'Rapport d’audit d’intrusion indépendant', 'Certificat de recette technique']
      },
      {
        num: '05',
        title: 'Déploiement Souverain, Formation & Convention SLA',
        tagline: 'Transmission complète et astreinte technique garantie',
        description: 'Installation sur vos infrastructures dédiées, formation avancée de vos ingénieurs informatiques internes et mise en place d’une astreinte technique 24/7 sous convention SLA.',
        deliverables: ['Cession intégrale du code source et documentation', 'Formation des administrateurs système', 'Convention de service SLA 99.98%']
      }
    ],
    deliverables: [
      {
        module: 'Architecture & Sécurité Fondamentale',
        items: [
          'Modélisation de données sécurisée avec sauvegardes horaires cryptées',
          'Authentification forte multi-facteurs (MFA / OTP SMS / FIDO2)',
          'Gestion granulaire des rôles et habilitations d’accès (RBAC)',
          'Journalisation immuable (Audit Logs) de chaque action utilisateur'
        ]
      },
      {
        module: 'Modules Fonctionnels Dématérialisés',
        items: [
          'Formulaires avec contrôle en direct des pièces jointes et documents scannés',
          'Module de signature électronique certifiée et horodatage infalsifiable',
          'Tableau de bord d’instruction avec workflows de validation hiérarchiques',
          'Génération d’attestations officielles avec QR Code de vérification'
        ]
      },
      {
        module: 'Audits, Déploiement & Convention SLA',
        items: [
          'Audit de sécurité et tests d’intrusion complets (Pentest)',
          'Simulation de charge simulant des milliers d’usagers simultanés',
          'Cession intégrale du code source et documentation d’architecture',
          'Convention de maintenance avec astreinte technique 24/7 garantie'
        ]
      }
    ],
    metrics: [
      { value: '99.98%', label: 'Disponibilité serveur constatée sur nos portails en production' },
      { value: '12 000+', label: 'Dossiers sensibles traités chaque mois sans incident' },
      { value: '0 faille', label: 'Détectée lors de nos audits de conformité de sécurité' },
      { value: '< 200 ms', label: 'Temps de réponse moyen des requêtes de base de données' }
    ],
    interventionLevels: [
      {
        name: 'Portail Démarches & Formalités Starter',
        badge: 'Sur-Mesure',
        scope: 'Pour dématérialiser une démarche ou formalité clé',
        desc: 'Idéal pour numériser un concours, une adhésion, une démarche administrative ou un service d’entreprise avec contrôle des pièces jointes.',
        features: [
          'Portail public haute disponibilité + espace usager sécurisé',
          'Formulaire de soumission avec contrôle en direct des pièces jointes',
          'Tableau de bord d’instruction pour vos agents de validation',
          'Génération d’attestations sécurisées avec QR Code de vérification',
          'Sauvegardes quotidiennes redondées + 1 an de maintenance préventive'
        ],
        ctaText: 'Étudier notre Portail Démarches'
      },
      {
        name: 'Système Transactionnel d’Entreprise',
        badge: 'Le Plus Sollicité — Sur-Mesure',
        isPopular: true,
        scope: 'Pour institutions financières et réseaux multi-utilisateurs',
        desc: 'Pour les institutions financières, réseaux de franchises et organisations gérant des flux transactionnels complexes et confidentiels.',
        features: [
          'Architecture multi-niveaux avec workflows de validation hiérarchiques',
          'Authentification forte MFA et gestion granulaire des habilitations',
          'Paiement en ligne sécurisé avec réconciliation bancaire automatique',
          'Audit de sécurité indépendant et tests de charge simulant 5 000 connexions',
          'Contrat de maintenance évolutive avec SLA d’intervention prioritaire garanti'
        ],
        ctaText: 'Cadrer un Système Transactionnel'
      },
      {
        name: 'Infrastructure Souveraine & Cloud Dédié',
        badge: 'Sur-Mesure Institutionnel',
        scope: 'Pour ministères, banques centrales et infrastructures critiques',
        desc: 'Pour les entités étatiques et bancaires exigeant un hébergement sur serveurs dédiés souverains avec chiffrement matériel.',
        features: [
          'Déploiement sur infrastructure privée dédiée ou cloud souverain étanche',
          'Plan de Continuité d’Activité (PCA) et basculement automatique temps réel',
          'Chiffrement matériel des clés cryptographiques (HSM)',
          'Formation avancée de vos ingénieurs internes à la gouvernance du système',
          'Astreinte technique 24h/24 et 7j/7 avec ingénieur senior joignable en direct'
        ],
        ctaText: 'Consulter notre Pôle Systèmes Critiques'
      }
    ],
    guaranteeText: 'Garantie Contractuelle SLA 99.98% : Nos engagements de disponibilité et de temps de rétablissement font l’objet d’une convention de service formelle assortie de pénalités contractuelles strictes.',
    faq: [
      {
        question: 'Comment garantissez-vous que le portail ne plantera pas lors des clôtures de concours ?',
        answer: 'Nous dimensionnons l’infrastructure avec un système d’autoscaling élastique : dès que le trafic s’intensifie, le système alloue automatiquement de nouvelles ressources informatiques en temps réel pour absorber la charge. En amont, nous réalisons des simulations de charge agressives simulant des milliers de connexions simultanées.'
      },
      {
        question: 'Où sont hébergées les données de nos usagers ?',
        answer: 'Selon vos exigences de souveraineté, nous pouvons héberger vos données sur des centres de données sécurisés situés en Afrique de l’Ouest, ou sur des infrastructures cloud certifiées ISO 27001 et SOC 2 dont vous détenez seuls les clés de déchiffrement.'
      },
      {
        question: 'Pouvons-nous intégrer le portail avec nos logiciels internes existants ?',
        answer: 'Oui. Toutes nos plateformes sont développées selon une architecture API-First (REST / GraphQL). Nous créons des connecteurs sécurisés pour échanger automatiquement des données avec vos logiciels de gestion ou annuaires LDAP / Active Directory internes.'
      },
      {
        question: 'Nos équipes informatiques internes auront-elles accès au code source ?',
        answer: 'Oui. Nous croyons en la totale souveraineté technologique de nos partenaires institutionnels. L’intégralité du code source, la documentation technique d’architecture et les scripts de déploiement sont cédés et remis à vos équipes lors de la recette définitive.'
      }
    ],
    whatsappMessage: 'Bonjour BAROUBA GROUP, je souhaite planifier un échange confidentiel pour un projet de portail institutionnel / système critique.'
  }
];

export function getDetailedServiceBySlug(slug: string): DetailedService | undefined {
  return DETAILED_SERVICES.find(s => s.slug === slug);
}
