// Données officielles de la Boutique de Produits Digitaux & Outils — BAROUBA GROUP SARL

export interface BoutiqueProductReview {
  author: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BoutiqueProduct {
  id: string;
  slug: string;
  title: string;
  category: 'template' | 'tool' | 'subscription';
  categoryLabel: string;
  badge: string;
  priceFCFA: string;
  priceEUR: string;
  originalPriceFCFA?: string;
  rating: number;
  reviewsCount: number;
  shortDesc: string;
  heroHeadline: string;
  problemSolved: {
    title: string;
    description: string;
    points: string[];
  };
  keyHighlights: string[];
  deliverables: {
    title: string;
    desc: string;
    icon: string;
  }[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  reviews: BoutiqueProductReview[];
  faq: {
    question: string;
    answer: string;
  }[];
  guaranteeText: string;
  whatsappMessage: string;
}

export const BOUTIQUE_PRODUCTS: BoutiqueProduct[] = [
  {
    id: 'prod-tunnel-ecommerce',
    slug: 'pack-tunnel-ecommerce-haute-vente',
    title: 'Pack Tunnel E-Commerce Next.js 16 Haute Conversion',
    category: 'template',
    categoryLabel: 'Template & Codebase',
    badge: 'Best-Seller 2026',
    priceFCFA: '65 000 FCFA',
    priceEUR: '97 €',
    originalPriceFCFA: '120 000 FCFA',
    rating: 4.9,
    reviewsCount: 38,
    shortDesc: 'Architecture Next.js 16 complète clé-en-main pensée pour le marché africain : passage en caisse 1-clic, synchronisation WhatsApp instantanée, intégration Orange Money / Moov Money et chargement en 0,8s.',
    heroHeadline: 'Déployez un tunnel e-commerce qui charge en moins d’une seconde sur mobile et convertit vos visiteurs en commandes WhatsApp sans friction.',
    problemSolved: {
      title: 'Pourquoi 80% des boutiques e-commerce classiques perdent de l’argent en Afrique',
      description: 'Les thèmes Shopify ou WooCommerce non optimisés pèsent lourd, mettent 6 à 9 secondes à charger sur les réseaux 3G/4G à Ouagadougou et forcent le client à remplir 12 champs inutiles. Résultat : 7 acheteurs sur 10 abandonnent leur panier avant la fin.',
      points: [
        'Temps de chargement insupportable sur mobile qui fait fuir le trafic payé sur TikTok et Meta Ads.',
        'Paniers complexes avec demande de carte bancaire rejetée par 95% des consommateurs locaux.',
        'Absence de synchronisation directe avec WhatsApp, là où se fait la vraie confirmation de commande.',
        'Difficulté technique de brancher Orange Money, Moov Money et le Cash-on-Delivery sans bugs.'
      ]
    },
    keyHighlights: [
      'Passage en caisse ultra-simplifié en 1 clic optimisé pour le Cash-on-Delivery et le Mobile Money.',
      'Synchronisation automatique des commandes dans un groupe ou fil WhatsApp avec message pré-rempli.',
      'Vitesse éclair : score de performance Google PageSpeed de 98/100 sur mobile.',
      'Code source TypeScript propre, modulable et facile à personnaliser sans connaissances avancées.'
    ],
    deliverables: [
      {
        title: 'Code Source Complet Next.js 16 + Tailwind CSS',
        desc: 'Architecture modulaire prête à l’emploi, structurée avec le App Router de Next.js, responsive smartphone et tablette.',
        icon: '💻'
      },
      {
        title: 'Composant de Commande Express 1-Clic',
        desc: 'Formulaire de capture minimaliste (Nom, Ville/Quartier, Téléphone WhatsApp) avec calcul automatique des frais de livraison.',
        icon: '⚡'
      },
      {
        title: 'Script de Génération de Message WhatsApp',
        desc: 'Génère instantanément un lien wa.me sécurisé avec tous les détails de la commande prêt à être confirmé par le client.',
        icon: '💬'
      },
      {
        title: 'Tutoriel Vidéo d’Installation Pas-à-Pas (2h)',
        desc: 'Nous vous montrons sur écran comment modifier les textes, ajouter vos produits, changer les couleurs et mettre en ligne gratuitement sur Vercel.',
        icon: '🎥'
      },
      {
        title: 'Kit de Tracking Meta CAPI & TikTok Pré-configuré',
        desc: 'Événements ViewContent, InitiateCheckout et Purchase déjà balisés pour remonter 100% de vos ventes à vos régies publicitaires.',
        icon: '📊'
      },
      {
        title: 'Assistance Technique de Démarrage (30 Jours)',
        desc: 'Accès direct à nos développeurs sur WhatsApp en cas de question ou de blocage lors de votre déploiement.',
        icon: '🛡️'
      }
    ],
    technicalSpecs: [
      { label: 'Framework', value: 'Next.js 16 (App Router)' },
      { label: 'Langage', value: 'TypeScript & React 19' },
      { label: 'Styles', value: 'Tailwind CSS & CSS Modules' },
      { label: 'Hébergement Recommandé', value: 'Vercel (déploiement gratuit en 1 clic)' },
      { label: 'Temps d’Installation', value: 'Moins de 30 minutes avec le guide vidéo' },
      { label: 'Licence', value: 'Usage commercial illimité pour vos propres projets' }
    ],
    reviews: [
      {
        author: 'Moussa Ouedraogo',
        role: 'Fondateur E-Commerce Mode',
        location: 'Ouagadougou, Burkina Faso',
        rating: 5,
        comment: 'J’ai remplacé mon site WooCommerce par ce template. Mon taux de conversion sur TikTok Ads est passé de 1,2% à 4,8% dès la première semaine. Les commandes WhatsApp tombent en direct sans accroc.',
        date: 'Octobre 2026'
      },
      {
        author: 'Aïcha Traoré',
        role: 'Boutique Cosmétique Naturelle',
        location: 'Bobo-Dioulasso, Burkina Faso',
        rating: 5,
        comment: 'Le tutoriel vidéo est limpide. Je n’y connaissais rien en Next.js, mais en 45 minutes mon tunnel était en ligne sur Vercel avec mes produits et mon numéro WhatsApp. Un investissement rentabilisé en 2 jours.',
        date: 'Septembre 2026'
      },
      {
        author: 'Koffi Mensah',
        role: 'Media Buyer E-Commerce',
        location: 'Abidjan, Côte d’Ivoire',
        rating: 5,
        comment: 'La vitesse de chargement sur smartphone 4G à Abidjan est bluffante : 0,7s mesuré. C’est la meilleure codebase e-commerce pour le marché ouest-africain disponible aujourd’hui.',
        date: 'Novembre 2026'
      }
    ],
    faq: [
      {
        question: "Faut-il être un développeur chevronné pour utiliser ce pack ?",
        answer: "Non. Même un débutant complet peut l'installer en suivant notre tutoriel vidéo pas-à-pas de 2 heures. Vous n'avez qu'à remplacer les textes, les photos et vos numéros WhatsApp dans un seul fichier de configuration simple."
      },
      {
        question: "Comment reçois-je les fichiers après mon paiement ?",
        answer: "Dès validation de votre paiement par Orange Money, Moov Money ou virement bancaire, notre équipe vous transmet instantanément le lien d'accès au dépôt GitHub privé et l'archive ZIP complète accompagnée de la vidéo de prise en main."
      },
      {
        question: "Le template gère-t-il les paiements Orange Money et Moov Money ?",
        answer: "Le template est nativement configuré pour le Cash-on-Delivery (paiement à la livraison) et la commande via WhatsApp avec coordonnées Mobile Money. Des webhooks d'API marchandes (Paytech, CinetPay, Wave) sont pré-câblés si vous souhaitez automatiser l'encaissement en ligne."
      },
      {
        question: "Puis-je l'utiliser pour plusieurs boutiques différentes ?",
        answer: "Oui, la licence fournie vous autorise à déployer le template sur l'ensemble de vos projets personnels ou pour les boutiques de vos clients sans surcoût."
      }
    ],
    guaranteeText: "Si vous rencontrez le moindre blocage lors de l'installation, nos ingénieurs interviennent gratuitement pour vous assister sous 24h ouvrées.",
    whatsappMessage: "Bonjour BAROUBA GROUP, je souhaite commander le Pack Tunnel E-Commerce Next.js 16 Haute Vente à 65 000 FCFA."
  },
  {
    id: 'prod-prompt-engine',
    slug: 'barouba-prompt-engine-2026',
    title: 'Barouba Prompt Engine 2026 — L’Arsenal IA Marketing & Créatif',
    category: 'tool',
    categoryLabel: 'Outil & Bibliothèque IA',
    badge: 'Générateur Ultime',
    priceFCFA: '30 000 FCFA',
    priceEUR: '47 €',
    originalPriceFCFA: '60 000 FCFA',
    rating: 5.0,
    reviewsCount: 52,
    shortDesc: 'Plus de 350 prompts maîtres calibrés pour Midjourney, ChatGPT, Claude et Flux. Création d’affiches publicitaires sahéliennes, mockups de packaging haut de gamme et copywriting de vente ouest-africain.',
    heroHeadline: 'Ne perdez plus 3 heures à rédiger des textes moyens ou à générer des images déformées : accédez aux formules exactes qui créent des visuels dignes des plus grands studios.',
    problemSolved: {
      title: 'Le calvaire des prompts génériques qui génèrent des résultats médiocres',
      description: 'La majorité des utilisateurs d’IA tapent des phrases naïves et obtiennent des images stéréotypées aux teints plastifiés, des textes sans âme et des mains à 6 doigts. Générer des créations de niveau agence exige une maîtrise intime des tokens d’éclairage, de stylisation et de textures culturelles.',
      points: [
        'Images d’africains stéréotypées ou blanchies par les modèles mal guidés.',
        'Textes marketing plats traduits de l’anglais qui ne résonnent pas avec la psychologie locale.',
        'Heures perdues en tests infructueux qui consomment inutilement vos crédits d’IA.',
        'Incapacité à créer des mockups de packaging propres pour des produits cosmétiques ou agroalimentaires.'
      ]
    },
    keyHighlights: [
      '350+ Prompts maîtres classés par objectifs business : publicités Facebook/TikTok, packaging, portraits corporate, scripts vidéo.',
      'Matrice d’étalonnage photographique spécifique pour teints mélanodermes sous lumière dorée sahélienne.',
      'Frameworks de copywriting direct response (AIDA, PAS, Story-Offer) adaptés au public burkinabè et ivoirien.',
      'Mises à jour gratuites garanties tout au long de l’année 2026 au fil des nouveaux modèles d’IA.'
    ],
    deliverables: [
      {
        title: 'Espace Notion Privé & Manuel PDF (180 Pages)',
        desc: 'Accès instantané à la base de données interactive avec recherche par mot-clé, filtres par secteur et système de copier-coller en 1 clic.',
        icon: '📚'
      },
      {
        title: 'Module 1 : Les 100 Prompts Publicitaires E-Commerce',
        desc: 'Mise en scène ultra-réaliste de flacons cosmétiques, vêtements Faso Danfani, chaussures, nourriture locale et objets technologiques.',
        icon: '🎨'
      },
      {
        title: 'Module 2 : Le Pôle Copywriting Persuasif & Scripts TikTok',
        desc: '50 scripts de vidéos courtes (Reels/TikTok) avec accroches percutantes de 3 secondes, scénarisation et appels à l’action vers WhatsApp.',
        icon: '✍️'
      },
      {
        title: 'Module 3 : Les Prompts Corporate & Portraits Dirigeants',
        desc: 'Génération de portraits d’affaires prestigieux d’entrepreneurs et de cadres en tenues modernes dans des décors architecturaux haut de gamme.',
        icon: '👔'
      },
      {
        title: 'Guide d’Étalonnage Midjourney v6 & Flux Pro',
        desc: 'Paramètres avancés d’ouverture focale, d’angles de prise de vue, de colorimétrie et de ratios pour un rendu photojournalistique 8K.',
        icon: '📸'
      },
      {
        title: 'Mises à Jour Gratuites 2026 Incluses',
        desc: 'Chaque mois, nos créatifs ajoutent 20 nouveaux prompts testés selon les dernières tendances graphiques et publicitaires.',
        icon: '🔄'
      }
    ],
    technicalSpecs: [
      { label: 'Modèles Compatibles', value: 'Midjourney v6, Flux.1 Pro, ChatGPT-4o, Claude 3.5 Sonnet' },
      { label: 'Format de Livraison', value: 'Lien Notion interactif + Fichier PDF haute définition' },
      { label: 'Langue des Prompts', value: 'Bilingue Français / Anglais avec explications opérationnelles' },
      { label: 'Nombre Total de Formules', value: '350+ prompts testés et validés' },
      { label: 'Accès', value: 'Accès permanent à vie sans abonnement récurrent' }
    ],
    reviews: [
      {
        author: 'Seydou Sanou',
        role: 'Directeur Artistique Freelance',
        location: 'Bobo-Dioulasso, Burkina Faso',
        rating: 5,
        comment: 'La section sur les textures de peau sahélienne et l’éclairage doré a totalement transformé mes rendus Midjourney. Mes clients pensent que j’ai loué un studio photo avec mannequins réels.',
        date: 'Octobre 2026'
      },
      {
        author: 'Fatoumata Bamba',
        role: 'Responsable Communication PME',
        location: 'Abidjan, Côte d’Ivoire',
        rating: 5,
        comment: 'Les prompts de copywriting AIDA pour WhatsApp et Facebook Ads sont redoutables. Nous avons divisé notre temps de création de contenu par quatre tout en augmentant notre engagement.',
        date: 'Novembre 2026'
      }
    ],
    faq: [
      {
        question: "Ces prompts fonctionnent-ils sur les versions gratuites de ChatGPT ?",
        answer: "Oui, la majorité des prompts de copywriting fonctionnent parfaitement sur ChatGPT gratuit. Pour les visuels d'art photographique, nous recommandons Midjourney ou Flux pour obtenir le niveau de photoréalisme spectaculaire documenté dans le guide."
      },
      {
        question: "Les visuels ressemblent-ils vraiment à des personnes africaines réelles ?",
        answer: "C'est précisément la valeur maîtresse de ce moteur : nous avons passé des mois à calibrer les descripteurs de textures de peau, de coiffures, d'éclairages et de tenues traditionnelles ou modernes pour éliminer tout stéréotype et offrir une beauté authentique sahélienne et ouest-africaine."
      },
      {
        question: "Comment puis-je payer depuis Ouagadougou ou Bobo ?",
        answer: "Vous pouvez régler directement par Orange Money ou Moov Money. Vous recevez vos accès privés par WhatsApp et par email dans les 5 minutes suivant la validation de votre paiement."
      }
    ],
    guaranteeText: "Si vous n'arrivez pas à générer des visuels satisfaisants, notre responsable IA vous assiste individuellement sur WhatsApp pour calibrer vos premiers rendus.",
    whatsappMessage: "Bonjour BAROUBA GROUP, je souhaite obtenir le Barouba Prompt Engine 2026 à 30 000 FCFA."
  },
  {
    id: 'prod-kit-capi',
    slug: 'kit-tracking-serveur-capi-meta-tiktok',
    title: 'Kit Tracking Serveur CAPI Meta & TikTok Ads (Anti-iOS14)',
    category: 'tool',
    categoryLabel: 'Outil & Tracking Publicitaire',
    badge: 'ROI & Précision',
    priceFCFA: '50 000 FCFA',
    priceEUR: '77 €',
    originalPriceFCFA: '95 000 FCFA',
    rating: 4.8,
    reviewsCount: 27,
    shortDesc: 'Scripts prêts à déployer pour capturer 100% de vos conversions publicitaires sans aucune perte due aux bloqueurs de pub ou à iOS. Configuration serveur via Cloudflare Workers en 15 minutes.',
    heroHeadline: 'Arrêtez d’aveugler les algorithmes Meta et TikTok : transmettez chaque vente directement de votre serveur à vos régies publicitaires pour baisser vos coûts par prospect.',
    problemSolved: {
      title: 'Pourquoi vos pixels classiques perdent jusqu’à 40% de vos données de vente',
      description: 'Depuis les restrictions iOS et la prolifération des bloqueurs de publicité sur mobile, les pixels traditionnels installés dans le navigateur des internautes ne transmettent qu’une fraction des événements réels. Votre régie publicitaire croit que vos pubs ne convertissent pas et augmente vos coûts d’acquisition.',
      points: [
        'Jusqu’à 40% des commandes confirmées n’apparaissent pas dans votre Gestionnaire de Publicités Meta.',
        'L’algorithme de ciblage manque de données fiables et tourne en sous-régime.',
        'Difficulté technique de coder une solution serveur CAPI sans embaucher un ingénieur data coûteux.',
        'Retards de synchronisation qui faussent vos décisions de coupure ou d’augmentation de budget publicitaire.'
      ]
    },
    keyHighlights: [
      'Transmission serveur-à-serveur garantie : 0% de perte liée aux bloqueurs de pub ou aux navigateurs stricts.',
      'Déduplication automatique des événements entre le pixel navigateur et l’API de conversion serveur.',
      'Déploiement économique sur infrastructure Cloudflare Workers (100 000 requêtes gratuites par jour).',
      'Documentation technique limpide pensée pour les media buyers et propriétaires de boutiques.'
    ],
    deliverables: [
      {
        title: 'Scripts Node.js / Cloudflare Workers CAPI',
        desc: 'Code léger, ultra-sécurisé et optimisé pour expédier instantanément les événements de conversion à l’API Graph de Meta et à TikTok.',
        icon: '⚡'
      },
      {
        title: 'Conteneur Google Tag Manager (GTM) Pré-calibré',
        desc: 'Fichier JSON à importer en 1 clic dans votre compte GTM avec déclencheurs, variables et balises d’achat déjà configurés.',
        icon: '🎯'
      },
      {
        title: 'Guide d’Installation Pas-à-Pas en 15 Minutes',
        desc: 'Tutoriel illustré écran par écran pour configurer votre passerelle sans écrire une seule ligne de code complexe.',
        icon: '📖'
      },
      {
        title: 'Matrice de Déduplication d’Événements (Event_ID)',
        desc: 'Protocole rigoureux empêchant Meta de compter deux fois la même vente tout en atteignant une note de qualité d’événement de 8.5+/10.',
        icon: '🔍'
      },
      {
        title: 'Audit de Validation Offert par un Ingénieur Barouba',
        desc: 'Une fois vos scripts en place, nos ingénieurs vérifient gratuitement l’état de vos signaux dans votre Business Manager.',
        icon: '🛡️'
      }
    ],
    technicalSpecs: [
      { label: 'Régies Prises en Charge', value: 'Meta Conversions API (Facebook & Instagram) + TikTok Events API' },
      { label: 'Hébergement Serveur', value: 'Cloudflare Workers (palier gratuit suffisant pour 99% des commerces)' },
      { label: 'Compatibilité', value: 'Next.js, Shopify, WooCommerce, WordPress, pages HTML sur-mesure' },
      { label: 'Score Qualité Événement', value: 'Garantit un Event Match Quality de 8.2 à 9.5 sur 10' }
    ],
    reviews: [
      {
        author: 'Marc Sawadogo',
        role: 'Media Buyer E-Commerce',
        location: 'Ouagadougou, Burkina Faso',
        rating: 5,
        comment: 'Mon Event Match Quality sur Facebook est passé de 4.8/10 à 9.1/10 en 24h. Meta optimise enfin sur les vrais acheteurs et mon coût par acquisition a chuté de 32%.',
        date: 'Septembre 2026'
      }
    ],
    faq: [
      {
        question: "Dois-je payer un serveur payant pour faire tourner ces scripts ?",
        answer: "Non. Le script est conçu pour s'exécuter sur le palier gratuit de Cloudflare Workers, qui offre 100 000 requêtes gratuites par jour. C'est largement suffisant pour générer des dizaines de commandes quotidiennes sans débourser 1 centime d'hébergement."
      },
      {
        question: "Cela fonctionne-t-il si je vends via des pages WhatsApp ?",
        answer: "Oui ! Le kit inclut un déclencheur spécifique qui enregistre la conversion au moment exact où le prospect clique sur le bouton de commande WhatsApp avec les paramètres UTM de tracking."
      },
      {
        question: "Que se passe-t-il si je ne parviens pas à le configurer seul ?",
        answer: "Le pack inclut un audit de validation et un accompagnement technique direct par nos spécialistes tracking sur WhatsApp."
      }
    ],
    guaranteeText: "Vérification et validation de vos signaux de tracking garanties par notre équipe technique sous 48h.",
    whatsappMessage: "Bonjour BAROUBA GROUP, je souhaite commander le Kit Tracking Serveur CAPI Meta & TikTok à 50 000 FCFA."
  },
  {
    id: 'prod-creatifs-ia',
    slug: 'pack-creatifs-ia-affiches-video-ads',
    title: 'Pack Créatifs & Vidéos Ads IA 8K Haute Conversion',
    category: 'tool',
    categoryLabel: 'Pack Visuels & Publicité IA',
    badge: 'Impact Publicitaire',
    priceFCFA: '45 000 FCFA',
    priceEUR: '69 €',
    originalPriceFCFA: '90 000 FCFA',
    rating: 4.9,
    reviewsCount: 31,
    shortDesc: '50 maquettes et templates publicitaires ultra-haute définition prêts à l’emploi + banques de prompts vidéo IA (Runway, Kling, Luma) pour générer des publicités TikTok et Meta Ads qui captivent en moins de 3 secondes.',
    heroHeadline: 'Multipliez votre taux de clic par 3 avec des créatifs visuels saisissants et des vidéos publicitaires IA sans payer de studio de production coûteux.',
    problemSolved: {
      title: 'Pourquoi la lassitude créative détruit vos campagnes publicitaires',
      description: 'Les utilisateurs de Facebook et TikTok voient des milliers d’annonces par jour. Les images vues et revues prises sur Canva ou Google ne retiennent plus l’attention : votre CPC explose et vos campagnes meurent au bout de 5 jours.',
      points: [
        'Fatigue publicitaire accélérée obligeant à renouveler ses visuels toutes les semaines.',
        'Coût prohibitif des shootings photo professionnels et des monteurs vidéo.',
        'Difficulté à trouver des figurants africains naturels et charismatiques pour des vidéos publicitaires.',
        'Manque de maîtrise des outils d’animation IA (mouvements fluides sans déformation).'
      ]
    },
    keyHighlights: [
      '50 Templates d’affiches publicitaires Photoshop/Canva calibrés pour les formats 9:16 (Story/TikTok) et 1:1 (Feed).',
      'Matrice de 40 prompts vidéos IA testés sur Kling AI et Runway Gen-3 pour des animations photoréalistes.',
      'Guide du « Hook de 3 Secondes » pour retenir l’attention des consommateurs africains sur smartphone.',
      'Bibliothèque de textures, typographies et éléments graphiques Afro-Modernes exclusifs.'
    ],
    deliverables: [
      {
        title: '50 Templates Publicitaires PSD & Liens Canva Pro',
        desc: 'Fichiers entièrement calqués et modifiables en 2 minutes (changement d’image produit, de prix et de bouton WhatsApp).',
        icon: '🎨'
      },
      {
        title: 'Banque de Prompts Vidéo IA (Kling / Runway / Luma)',
        desc: 'Formules pour animer vos produits en 3D, faire tenir vos packagings par des mannequins virtuels et créer du slow-motion cinématographique.',
        icon: '🎬'
      },
      {
        title: 'Guide Stratégique du Hook Publicitaire Sahélien',
        desc: 'Les 25 phrases d’accroche orales et textuelles qui arrêtent le scroll sur TikTok et Facebook à Ouaga, Abidjan et Dakar.',
        icon: '⚡'
      },
      {
        title: 'Pack Sonore & Effets Audio Viraux',
        desc: 'Sélection d’effets sonores dynamiques et transitions libres de droits pour booster le dynamisme de vos montages vidéo.',
        icon: '🎵'
      },
      {
        title: 'Atelier Vidéo de Prise en Main (1h30)',
        desc: 'Démonstration complète de la création d’une campagne publicitaire gagnante de A à Z avec les outils du pack.',
        icon: '🎥'
      }
    ],
    technicalSpecs: [
      { label: 'Logiciels Compatibles', value: 'Canva (Gratuit & Pro), Adobe Photoshop, CapCut, Premiere Pro' },
      { label: 'Moteurs Vidéo IA', value: 'Kling AI v1.5, Runway Gen-3 Alpha, Luma Dream Machine' },
      { label: 'Formats Inclus', value: '1080x1920 (9:16 vertical) + 1080x1080 (1:1 carré) en 8K' },
      { label: 'Droits d’Usage', value: 'Libre de droits commercial pour vos propres annonces et celles de vos clients' }
    ],
    reviews: [
      {
        author: 'Ibrahim Kaboré',
        role: 'Gérant Marque Prêt-à-Porter',
        location: 'Ouagadougou, Burkina Faso',
        rating: 5,
        comment: 'Ces créatifs ont littéralement ressuscité mes campagnes Facebook Ads. Mon CTR est passé de 0,9% à 3,4% et les gens commentent en demandant si mes vidéos ont été tournées à Dubaï.',
        date: 'Octobre 2026'
      }
    ],
    faq: [
      {
        question: "Faut-il savoir utiliser Photoshop pour exploiter ce pack ?",
        answer: "Pas obligatoirement. Tous les templates sont également disponibles sous forme de liens Canva modifiables directement sur smartphone ou ordinateur en quelques clics."
      },
      {
        question: "Les vidéos générées par IA ne font-elles pas artificielles ?",
        answer: "Non, car nos prompts utilisent des paramètres stricts de vitesse d'obturation, de focale optique et de contraintes physiques qui éliminent les effets bizarres ou caoutchouteux typiques des débutants."
      }
    ],
    guaranteeText: "Accès immédiat à vie avec mises à jour gratuites régulières du catalogue de prompts.",
    whatsappMessage: "Bonjour BAROUBA GROUP, je souhaite commander le Pack Créatifs & Vidéos Ads IA à 45 000 FCFA."
  },
  {
    id: 'prod-whatsapp-crm',
    slug: 'systeme-acquisition-whatsapp-crm-pro',
    title: 'Système Automatisé d’Acquisition & Closing WhatsApp Pro',
    category: 'template',
    categoryLabel: 'Système & Tunnel WhatsApp',
    badge: 'Conversion Maximale',
    priceFCFA: '75 000 FCFA',
    priceEUR: '115 €',
    originalPriceFCFA: '140 000 FCFA',
    rating: 5.0,
    reviewsCount: 34,
    shortDesc: 'Architecture complète de capture, qualification automatique et relance de leads sur WhatsApp. Connecteur Google Sheets / CRM en temps réel et scripts de vente psychologiques testés en Afrique de l’Ouest.',
    heroHeadline: 'Ne perdez plus jamais un prospect sur WhatsApp : automatisez la qualification, l’envoi des tarifs et la relance programmée sans passer 14 heures par jour sur votre téléphone.',
    problemSolved: {
      title: 'Le gouffre financier des conversations WhatsApp non suivies',
      description: 'En Afrique, 95% des ventes se concluent sur WhatsApp. Mais dès que vous lancez des publicités, vous recevez 50 à 100 messages par jour. Vous mettez 4 heures à répondre, oubliez de relancer les prospects indécis et perdez 70% de vos ventes potentielles.',
      points: [
        'Temps de réponse trop long qui pousse le prospect à acheter chez votre concurrent plus réactif.',
        'Absence de système de relance structuré à J+1, J+3 et J+7.',
        'Perte des numéros des prospects qui ne sont jamais enregistrés dans un fichier centralisé.',
        'Épuisement mental de l’équipe commerciale qui répète 80 fois par jour les mêmes réponses de base.'
      ]
    },
    keyHighlights: [
      'Qualification instantanée en moins de 10 secondes : le bot identifie le besoin du prospect et filtre les curieux.',
      'Synchronisation instantanée de chaque lead dans un tableau Google Sheets sécurisé avec statut de commande.',
      'Séquence de relance automatique douce à J+1 et J+3 pour convertir les paniers hésitants.',
      'Scripts de vente écrits par nos meilleurs copywriters pour conclure la vente avec empathie et respect.'
    ],
    deliverables: [
      {
        title: 'Flux d’Automatisation Make / n8n Prêt à Importer',
        desc: 'Scénario complet clé-en-main connectant WhatsApp Cloud API ou WhatsApp Business à votre tableau de bord.',
        icon: '🤖'
      },
      {
        title: 'Tableau de Bord CRM Google Sheets Intelligent',
        desc: 'Tableur automatisé avec formules de suivi du chiffre d’affaires, relances automatiques et statuts de livraison.',
        icon: '📊'
      },
      {
        title: 'Manuel des Scripts de Closing WhatsApp (30 Scénarios)',
        desc: 'Réponses types face aux objections classiques : « C’est trop cher », « Je vais réfléchir », « Est-ce que vous livrez à Gounghin ? ».',
        icon: '📝'
      },
      {
        title: 'Guide d’Installation & Configuration WhatsApp Cloud API',
        desc: 'Tutoriel complet pour obtenir votre badge officiel et envoyer des messages sans risque de blocage par Meta.',
        icon: '🛡️'
      },
      {
        title: 'Session d’Assistance au Déploiement (1h)',
        desc: 'Un technicien BAROUBA GROUP vous assiste en visio ou WhatsApp pour brancher le système sur votre numéro.',
        icon: '🤝'
      }
    ],
    technicalSpecs: [
      { label: 'Plateformes Compatibles', value: 'WhatsApp Business App, WhatsApp Cloud API, Make, n8n' },
      { label: 'Stockage des Données', value: 'Google Sheets sécurisé ou Airtable / Notion' },
      { label: 'Temps de Réponse Moyen', value: 'Instantané (< 3 secondes)' },
      { label: 'Coût Récurrent d’Usage', value: '0 FCFA sur les paliers gratuits Make et Google Sheets' }
    ],
    reviews: [
      {
        author: 'Drissa Compaoré',
        role: 'Distributeur Électroménager',
        location: 'Ouagadougou, Burkina Faso',
        rating: 5,
        comment: 'Avant ce système, mon commercial passait ses journées à répondre « le prix est 25 000 ». Maintenant, le bot qualifie le client, prend son quartier et transmet la fiche prête à livrer. Nous avons doublé nos ventes en un mois.',
        date: 'Octobre 2026'
      }
    ],
    faq: [
      {
        question: "Mon numéro WhatsApp risque-t-il d'être banni par Meta ?",
        answer: "Absolument pas. Le système est rigoureusement conforme aux politiques d'utilisation de Meta et n'utilise aucun robot pirate de spam. Il répond uniquement aux personnes qui vous écrivent volontairement."
      },
      {
        question: "Puis-je continuer à répondre moi-même manuellement quand je veux ?",
        answer: "Oui, à tout instant vous pouvez reprendre la main sur la conversation directement depuis votre téléphone normal, le système s'adapte en temps réel."
      }
    ],
    guaranteeText: "Accompagnement personnalisé à l'installation garanti jusqu'au premier message automatisé réussi.",
    whatsappMessage: "Bonjour BAROUBA GROUP, je souhaite commander le Système Acquisition WhatsApp CRM Pro à 75 000 FCFA."
  },
  {
    id: 'prod-maintenance-vip',
    slug: 'contrat-maintenance-securite-cloud-vip',
    title: 'Abonnement Sérénité : Maintenance, Sécurité & Cloud VIP',
    category: 'subscription',
    categoryLabel: 'Abonnement & Sérénité',
    badge: 'Protection 24/7',
    priceFCFA: '98 000 FCFA / mois',
    priceEUR: '149 € / mois',
    rating: 5.0,
    reviewsCount: 19,
    shortDesc: 'La tranquillité d’esprit totale pour les entreprises et institutions : surveillance proactive 24/7, sauvegardes redondées quotidiennes, mises à jour critiques et assistance prioritaire en moins de 60 minutes.',
    heroHeadline: 'Dormez sur vos deux oreilles pendant que nos ingénieurs veillent sur la disponibilité, la sécurité et la rapidité de vos plateformes numériques.',
    problemSolved: {
      title: 'Le coût désastreux d’un site web en panne ou piraté un jour de campagne',
      description: 'Découvrir un samedi matin que son site est inaccessible, que ses formulaires ne fonctionnent plus ou qu’une mise à jour a cassé le passage en caisse représente des millions de FCFA de pertes de ventes directes et une atteinte destructrice à la réputation de votre marque.',
      points: [
        'Sites non surveillés qui restent en panne pendant 48 heures sans que personne ne s’en aperçoive.',
        'Piratages, injections malveillantes et redirections vers des sites suspects faute de mises à jour de sécurité.',
        'Sauvegardes inexistantes ou corrompues empêchant toute restauration rapide des données en cas de crash.',
        'Absence d’un interlocuteur technique dédié joignable immédiatement le week-end ou les jours fériés.'
      ]
    },
    keyHighlights: [
      'Surveillance active uptime toutes les 60 secondes : alerte immédiate et intervention avant même que vos clients ne remarquent un problème.',
      'Sauvegardes quotidiennes externalisées sur cloud souverain sécurisé avec restauration en moins d’une heure.',
      '4 heures d’interventions techniques mensuelles incluses pour vos modifications de contenu, bannières ou réglages.',
      'Ligne WhatsApp directe prioritaire avec astreinte technique 7 jours sur 7.'
    ],
    deliverables: [
      {
        title: 'Surveillance de Disponibilité 24h/24 & 7j/7',
        desc: 'Monitoring automatique continu de vos serveurs et de vos URL stratégiques avec intervention d’urgence en cas d’anomalie.',
        icon: '📡'
      },
      {
        title: 'Sauvegardes Automatiques Quotidiennes & Redondées',
        desc: 'Sauvegardes chiffrées de votre base de données et de vos fichiers sur deux zones géographiques distinctes pour un risque zéro.',
        icon: '💾'
      },
      {
        title: 'Mises à Jour Logicielles & Pare-Feu de Sécurité',
        desc: 'Application rigoureuse des correctifs de failles de sécurité, audits réguliers des certificats SSL/HTTPS et blocage des attaques par déni de service (DDoS).',
        icon: '🛡️'
      },
      {
        title: '4 Heures de Travaux Techniques Dédiés par Mois',
        desc: 'Ajout de nouveaux produits, modification de bannières promotionnelles, retouche de textes ou optimisation de formulaires sans surcoût.',
        icon: '⏱️'
      },
      {
        title: 'Ligne d’Assistance VIP sur WhatsApp Dédiée',
        desc: 'Canal direct réservé avec notre directeur technique senior pour toutes vos demandes urgentes avec engagement de réponse sous 60 minutes.',
        icon: '📱'
      },
      {
        title: 'Rapport Mensuel de Santé & Performance',
        desc: 'Bilan complet transmis chaque fin de mois à la direction générale : temps de chargement, incidents prévenus, statistiques d’uptime.',
        icon: '📈'
      }
    ],
    technicalSpecs: [
      { label: 'Temps de Réponse Garanti', value: 'Moins de 60 minutes en journée, astreinte 7j/7' },
      { label: 'Fréquence des Sauvegardes', value: 'Quotidienne (conservation sur 30 jours glissants)' },
      { label: 'Engagement', value: 'Sans engagement de durée (résiliable avec préavis de 30 jours)' },
      { label: 'Facturation', value: 'Mensuelle payable d’avance par virement ou Orange/Moov Money' },
      { label: 'Rapports', value: 'Tableau de bord mensuel de sécurité et d’uptime' }
    ],
    reviews: [
      {
        author: 'Cabinet Juridique & Fiscal Somgandé',
        role: 'Direction Générale',
        location: 'Ouagadougou, Burkina Faso',
        rating: 5,
        comment: 'Depuis que BAROUBA GROUP gère notre infrastructure cloud, notre portail n’a connu aucune interruption de service. Les sauvegardes et la réactivité de l’équipe sous 15 minutes sur WhatsApp nous apportent une tranquillité absolue.',
        date: 'Octobre 2026'
      }
    ],
    faq: [
      {
        question: "Cet abonnement est-il réservé aux sites créés par BAROUBA GROUP ?",
        answer: "Non ! Nous pouvons reprendre en gestion des plateformes existantes (Next.js, WordPress, Shopify, Laravel) après un audit d'intégration préalable offert de 48 heures."
      },
      {
        question: "Que se passe-t-il si j'ai besoin de plus de 4 heures de modifications un mois donné ?",
        answer: "Les heures supplémentaires au-delà du forfait mensuel bénéficient d'un tarif préférentiel remisé accordé exclusivement à nos clients abonnés VIP."
      },
      {
        question: "Y a-t-il un engagement obligatoire de 12 mois ?",
        answer: "Non, notre formule est sans engagement contraignant : vous pouvez suspendre ou résilier votre contrat à tout moment avec un simple préavis de 30 jours."
      }
    ],
    guaranteeText: "Engagement contractuel de disponibilité et de réactivité prioritaire sous 60 minutes en journée ouvrée.",
    whatsappMessage: "Bonjour BAROUBA GROUP, je souhaite souscrire au Contrat de Maintenance & Sérénité Cloud VIP à 98 000 FCFA/mois."
  }
];

export function getBoutiqueProductBySlug(slug: string): BoutiqueProduct | undefined {
  return BOUTIQUE_PRODUCTS.find((p) => p.slug === slug);
}
