// Data Layer — Programmatic SEO Territorial Engine (Phase 1)
// BAROUBA GROUP — Bobo-Dioulasso, Ouagadougou, Côte d'Ivoire & UEMOA

export interface TerritoryCountry {
  slug: string;
  name: string;
  iso: string;
  currency: string;
  capital: string;
  economicCapital?: string;
  flag: string;
  description: string;
}

export interface TerritoryCity {
  slug: string;
  name: string;
  countrySlug: string;
  region: string;
  status?: string;
  population?: string;
  economicProfile: string;
  challenges: string;
  localAnchors: string[];
  heroSubtitle: string;
}

export interface TerritoryService {
  slug: string;
  name: string;
  shortTitle: string;
  badge: string;
  metaTitle: string;
  hook: string;
  description: string;
  deliverables: { title: string; desc: string }[];
  benefits: string[];
  faq: { question: string; answer: string }[];
}

export const TERRITORY_COUNTRIES: TerritoryCountry[] = [
  {
    slug: 'burkina-faso',
    name: 'Burkina Faso',
    iso: 'BF',
    currency: 'XOF (Franc CFA)',
    capital: 'Ouagadougou',
    economicCapital: 'Bobo-Dioulasso (Siège BAROUBA GROUP)',
    flag: '🇧🇫',
    description: "Cœur battant des opérations de BAROUBA GROUP. Nous accompagnons les entreprises, institutions, coopératives et commerces burkinabè dans leur transformation numérique avec des solutions technologiques de pointe (Next.js, IA, WhatsApp & Ads).",
  },
  {
    slug: 'cote-divoire',
    name: 'Côte d\'Ivoire',
    iso: 'CI',
    currency: 'XOF (Franc CFA)',
    capital: 'Yamoussoukro',
    economicCapital: 'Abidjan',
    flag: '🇨🇮',
    description: "Première puissance économique de l'UEMOA. BAROUBA GROUP déploie ses plateformes web haute conversion, ses tunnels WhatsApp intégrés Wave/Orange Money et ses campagnes publicitaires à fort ROAS à travers les grands pôles ivoiriens.",
  },
];

export const TERRITORY_CITIES: TerritoryCity[] = [
  // --- BURKINA FASO (10 VILLES) ---
  {
    slug: 'bobo-dioulasso',
    name: 'Bobo-Dioulasso',
    countrySlug: 'burkina-faso',
    region: 'Hauts-Bassins',
    status: 'Capitale économique & Siège social de BAROUBA GROUP',
    population: '1 000 000+ hab.',
    economicProfile: 'Carrefour commercial stratégique d\'Afrique de l\'Ouest, hub agro-industriel de pointe, transport sous-régional et tissu entrepreneurial marchand dense.',
    challenges: 'Digitalisation des réseaux de distribution physique, automatisation des prises de commandes WhatsApp et création de plateformes e-commerce à forte conversion.',
    localAnchors: ['Grand Marché de Bobo', 'Zone Industrielle', 'Dioulassoba', 'Accart-Ville', 'Colma', 'Sarfalao', 'Kuinima'],
    heroSubtitle: 'Siège officiel de BAROUBA GROUP : développement web Next.js 16, agents IA, tunnels WhatsApp et formations de haut niveau au cœur de Sya.',
  },
  {
    slug: 'ouagadougou',
    name: 'Ouagadougou',
    countrySlug: 'burkina-faso',
    region: 'Centre',
    status: 'Capitale politique et administrative',
    population: '3 000 000+ hab.',
    economicProfile: 'Sièges des ministères, représentations diplomatiques, grands comptes bancaires, multinationales, ONG internationales et écosystème startup dynamique.',
    challenges: 'Exigence de plateformes web institutionnelles ultra-sécurisées, conformité aux standards CIL, agents IA de traitement des requêtes et campagnes de notoriété d\'envergure.',
    localAnchors: ['Ouaga 2000', 'Zone d\'Activités Diverses (ZAD)', 'Koulouba', 'Gounghin', 'Paspanga', 'Dassasgho', 'Patte d\'Oie'],
    heroSubtitle: 'Partenaire technologique des institutions, PME et grands comptes de la capitale : plateformes Next.js haute sécurité et automatisation IA.',
  },
  {
    slug: 'koudougou',
    name: 'Koudougou',
    countrySlug: 'burkina-faso',
    region: 'Centre-Ouest',
    status: '3ᵉ pôle urbain & Cité du Cavalier Rouge',
    population: '180 000+ hab.',
    economicProfile: 'Centre universitaire réputé, négoce textile historique (Faso Dan Fani), coopératives d\'artisans et commerce de détail.',
    challenges: 'Visibilité digitale des ateliers textiles, vente en ligne sous-régionale et formation de la jeunesse aux métiers numériques d\'avenir.',
    localAnchors: ['Centre-ville', 'Secteur 1', 'Marché Central', 'Palogo', 'Zone Universitaire'],
    heroSubtitle: 'Accélération digitale des commerçants, ateliers et entrepreneurs de Koudougou avec des outils web et WhatsApp sur-mesure.',
  },
  {
    slug: 'banfora',
    name: 'Banfora',
    countrySlug: 'burkina-faso',
    region: 'Cascades',
    status: 'Cité des Cascades & Pôle agro-industriel',
    population: '160 000+ hab.',
    economicProfile: 'Fleuron agro-industriel (sucre, canne, distillerie, mangues, anacarde), carrefour touristique mondial et proximité frontière Côte d\'Ivoire.',
    challenges: 'Valorisation digitale des filières exportatrices, sites web bilingues pour le tourisme et systèmes logistiques de commande.',
    localAnchors: ['Zone SN SOSUCO', 'Grand Marché', 'Secteur 2', 'Bounouna', 'Voie Internationale Côte d\'Ivoire'],
    heroSubtitle: 'Solutions web rapides et systèmes publicitaires pour les entreprises industrielles, coopératives et acteurs touristiques de Banfora.',
  },
  {
    slug: 'ouahigouya',
    name: 'Ouahigouya',
    countrySlug: 'burkina-faso',
    region: 'Nord',
    status: 'Capitale du Yatenga',
    population: '130 000+ hab.',
    economicProfile: 'Nœud commercial septentrional, filières maraîchères (pommes de terre, oignons), élevage et artisanat du cuir.',
    challenges: 'Canaux de vente directe producteurs-acheteurs, publicité géolocalisée et intégration des paiements Mobile Money fiables.',
    localAnchors: ['Grand Marché du Yatenga', 'Secteur 4', 'Gare routière', 'Zone commerciale'],
    heroSubtitle: 'Déploiement d\'outils d\'acquisition digitale et de tunnels WhatsApp pour les commerçants et distributeurs du Yatenga.',
  },
  {
    slug: 'fada-ngourma',
    name: 'Fada N\'Gourma',
    countrySlug: 'burkina-faso',
    region: 'Est',
    status: 'Capitale du Gulmu & Carrefour de l\'Est',
    population: '90 000+ hab.',
    economicProfile: 'Zone de transit stratégique vers le Niger, le Bénin et le Togo, production apicole renommée (miel du Gulmu) et négoce de bétail.',
    challenges: 'Développement de boutiques en ligne exportatrices, traçabilité des commandes et renforcement de l\'image de marque.',
    localAnchors: ['Marché Central', 'Axe international RN4', 'Secteur 1', 'Secteur 3'],
    heroSubtitle: 'Propulsez vos produits et services depuis Fada N\'Gourma vers les marchés nationaux et côtiers grâce au digital.',
  },
  {
    slug: 'dedougou',
    name: 'Dédougou',
    countrySlug: 'burkina-faso',
    region: 'Boucle du Mouhoun',
    status: 'Grenier céréalier du Burkina Faso',
    population: '95 000+ hab.',
    economicProfile: 'Cœur de la production agricole nationale (coton, maïs, sésame), sièges de grandes unions de producteurs et agro-fournisseurs.',
    challenges: 'Digitalisation des catalogues d\'intrants agricoles, communication institutionnelle des coopératives et gestion automatisée des membres.',
    localAnchors: ['Centre-ville', 'Marché de Dédougou', 'Zone administrative', 'Secteur 6'],
    heroSubtitle: 'Solutions logicielles et communication digitale adaptée aux enjeux du secteur agricole et commercial de la Boucle du Mouhoun.',
  },
  {
    slug: 'tenkodogo',
    name: 'Tenkodogo',
    countrySlug: 'burkina-faso',
    region: 'Centre-Est',
    status: 'Cité royale de Naaba Zoungrana',
    population: '80 000+ hab.',
    economicProfile: 'Carrefour d\'échanges transfrontaliers avec le Togo et le Ghana, élevage bovin et commerce de transit.',
    challenges: 'Capture de clientèle transfrontalière, multilinguisme et systèmes de commande mobile par messagerie.',
    localAnchors: ['Marché de Tenkodogo', 'Axe RN16', 'Secteur 2'],
    heroSubtitle: 'Connectez votre commerce de Tenkodogo aux flux régionaux avec des plateformes web modernes et des campagnes publicitaires ciblées.',
  },
  {
    slug: 'kaya',
    name: 'Kaya',
    countrySlug: 'burkina-faso',
    region: 'Centre-Nord',
    status: 'Cité des tanneurs & Capitale du cuir',
    population: '120 000+ hab.',
    economicProfile: 'Maroquinerie d\'artisanat réputée mondialement, élevage et pôle logistique humanitaire.',
    challenges: 'Mise en valeur internationale du cuir artisanal via le e-commerce et création de plateformes de gestion de données fiables.',
    localAnchors: ['Marché artisanal du cuir', 'Centre-ville', 'Secteur 4'],
    heroSubtitle: 'Vendez vos créations artisanales et développez votre activité à Kaya avec un site web d\'autorité et des tunnels WhatsApp.',
  },
  {
    slug: 'gaoua',
    name: 'Gaoua',
    countrySlug: 'burkina-faso',
    region: 'Sud-Ouest',
    status: 'Capitale du pays Lobi',
    population: '65 000+ hab.',
    economicProfile: 'Pôle agricole et minier en plein essor, richesse culturelle patrimoniale, proximité des frontières ivoirienne et ghanéenne.',
    challenges: 'Désenclavement numérique des PME locales, création de visibilité en ligne et modernisation des canaux de vente.',
    localAnchors: ['Marché de Gaoua', 'Secteur 1', 'Route de Batié'],
    heroSubtitle: 'Déploiement d\'infrastructures web et publicitaires pour les entreprises et coopératives du Sud-Ouest.',
  },

  // --- CÔTE D'IVOIRE (10 VILLES) ---
  {
    slug: 'abidjan',
    name: 'Abidjan',
    countrySlug: 'cote-divoire',
    region: 'District Autonome d\'Abidjan',
    status: 'Mégapole & Poumon économique de l\'UEMOA',
    population: '6 000 000+ hab.',
    economicProfile: 'Hub financier régional (siège de la BVRM et des banques majeures), sièges de multinationales, secteur tech bouillonnant et commerce de masse.',
    challenges: 'Marché ultra-concurrentiel : besoin de sites Next.js ultra-rapides, campagnes Meta/TikTok Ads à fort ROAS et intégration native Wave / Orange Money.',
    localAnchors: ['Plateau', 'Cocody', 'Deux Plateaux', 'Marcory Zone 4', 'Yopougon', 'Treichville', 'Riviera'],
    heroSubtitle: 'Ingénierie web Next.js 16 d\'élite, tracking serveur CAPI, tunnels WhatsApp et agents IA pour les marques et entreprises d\'Abidjan.',
  },
  {
    slug: 'bouake',
    name: 'Bouaké',
    countrySlug: 'cote-divoire',
    region: 'Gbêkê',
    status: '2ᵉ capitale économique de Côte d\'Ivoire',
    population: '850 000+ hab.',
    economicProfile: 'Carrefour marchand incontournable au centre du pays, industrie textile, négoce de noix de cajou, commerce de gros et vivriers.',
    challenges: 'Transition des commerçants traditionnels vers la vente en ligne automatisée, gestion des flux WhatsApp et publicité ciblée Centre-Nord.',
    localAnchors: ['Quartier Commerce', 'Nimbo', 'Koko', 'Ahougnanssou', 'Broukro', 'Aéroport de Bouaké'],
    heroSubtitle: 'Création de sites web professionnels, tunnels de vente WhatsApp et publicité digitale pour les grossistes et PME de Bouaké.',
  },
  {
    slug: 'yamoussoukro',
    name: 'Yamoussoukro',
    countrySlug: 'cote-divoire',
    region: 'Bélier',
    status: 'Capitale politique et administrative',
    population: '360 000+ hab.',
    economicProfile: 'Pôle d\'excellence académique (INP-HB), tourisme institutionnel de prestige, fondations internationales et administration d\'État.',
    challenges: 'Besoin de portails web académiques et institutionnels de classe mondiale, conformité aux normes internationales et automatisation des inscriptions.',
    localAnchors: ['Zone INP-HB', 'Fondation Félix Houphouët-Boigny', 'Quartier Habitat', 'Centre administratif'],
    heroSubtitle: 'Portails web de prestige, plateformes éducatives Next.js et systèmes d\'automatisation IA à Yamoussoukro.',
  },
  {
    slug: 'san-pedro',
    name: 'San-Pédro',
    countrySlug: 'cote-divoire',
    region: 'San-Pédro',
    status: '1ᵉʳ port mondial d\'exportation de cacao',
    population: '390 000+ hab.',
    economicProfile: 'Gigantesque complexe industrialo-portuaire, transit maritime international, agro-industrie du caoutchouc, de l\'huile de palme et du bois.',
    challenges: 'Plateformes web logistiques, portails clients B2B sécurisés et visibilité internationale des transitaires et chargeurs.',
    localAnchors: ['Zone Portuaire', 'Cité', 'Bardot', 'Balmer', 'Route Côtière'],
    heroSubtitle: 'Plateformes logicielles B2B, sites Next.js sécurisés et identité numérique forte pour les acteurs maritimes et agro-industriels de San-Pédro.',
  },
  {
    slug: 'korhogo',
    name: 'Korhogo',
    countrySlug: 'cote-divoire',
    region: 'Poro',
    status: 'Capitale historique et économique du Grand Nord',
    population: '440 000+ hab.',
    economicProfile: 'Pôle cotonnier, anacarde, exploitation minière aurifère en plein essor, artisanat (toiles de Korhogo) et liaison stratégique directe avec le Burkina Faso.',
    challenges: 'Valorisation des marques locales, vente directe vers Abidjan et le Burkina, digitalisation des commandes grossistes.',
    localAnchors: ['Grand Marché de Korhogo', 'Quartier Koko', 'Zone artisanale', 'Aéroport de Korhogo'],
    heroSubtitle: 'Accélérez votre croissance commerciale à Korhogo avec des sites vitrines Next.js, des tunnels WhatsApp et la publicité Meta Ads.',
  },
  {
    slug: 'daloa',
    name: 'Daloa',
    countrySlug: 'cote-divoire',
    region: 'Haut-Sassandra',
    status: 'Cœur de la boucle du cacao',
    population: '420 000+ hab.',
    economicProfile: 'Épicentre du négoce cacaoyer et caféier, plateformes de distribution commerciale et services de transport interurbain.',
    challenges: 'Capture de clientèle par la publicité géolocalisée, tunnels de commande pour grossistes et automatisation du service client.',
    localAnchors: ['Commerce', 'Tazibouo', 'Lobia', 'Gare routière'],
    heroSubtitle: 'Outils digitaux de haute conversion et campagnes publicitaires ciblées pour les entreprises et distributeurs de Daloa.',
  },
  {
    slug: 'man',
    name: 'Man',
    countrySlug: 'cote-divoire',
    region: 'Tonkpi',
    status: 'Métropole des 18 Montagnes',
    population: '250 000+ hab.',
    economicProfile: 'Bassin agro-écologique de premier plan (café, cacao, manioc, riz), écotourisme et porte commerciale vers la Guinée et le Libéria.',
    challenges: 'Sites web attractifs pour l\'hôtellerie et l\'agro-transformation, paiements Mobile Money intégrés et visibilité Google Maps.',
    localAnchors: ['Grand Marché', 'Quartier Doyagouiné', 'Kôkô', 'Axe touristique des cascades'],
    heroSubtitle: 'Développement web, référencement local et automatisation WhatsApp pour les opérateurs économiques de Man.',
  },
  {
    slug: 'gagnoa',
    name: 'Gagnoa',
    countrySlug: 'cote-divoire',
    region: 'Gôh',
    status: 'Capitale du Gôh',
    population: '280 000+ hab.',
    economicProfile: 'Agriculture vivrière et d\'exportation, distribution de machines agricoles et essor des commerces de services.',
    challenges: 'Visibilité locale sur smartphone, création de tunnels de vente simples sur WhatsApp et communication sur les réseaux sociaux.',
    localAnchors: ['Marché de Gagnoa', 'Babré', 'Garboutouo', 'Soleil'],
    heroSubtitle: 'Boostez vos ventes à Gagnoa grâce à des tunnels de conversion WhatsApp et des sites web optimisés pour mobile.',
  },
  {
    slug: 'soubre',
    name: 'Soubré',
    countrySlug: 'cote-divoire',
    region: 'Nawa',
    status: 'Capitale hydroélectrique et agricole de la Nawa',
    population: '270 000+ hab.',
    economicProfile: 'Barrage hydroélectrique majeur, coopératives agricoles générant de gros volumes financiers et développement rapide du tertiaire.',
    challenges: 'Gestion informatisée des adhésions, plateformes web institutionnelles de confiance et traçabilité des opérations.',
    localAnchors: ['Centre-ville', 'Quartier Résidentiel', 'Zone Barrage', 'Grand Marché'],
    heroSubtitle: 'Modernisation numérique et création de plateformes fiables pour les coopératives et entreprises de Soubré.',
  },
  {
    slug: 'grand-bassam',
    name: 'Grand-Bassam',
    countrySlug: 'cote-divoire',
    region: 'Sud-Comoé',
    status: 'Première capitale historique & Cité balnéaire UNESCO',
    population: '125 000+ hab.',
    economicProfile: 'Pôle touristique et hôtelier international de premier ordre, Village des Technologies de l\'Information et de la Biotechnologie (VITIB), résidences de prestige.',
    challenges: 'Plateformes de réservation en ligne haut de gamme, image de marque prestige et captation de la clientèle abidjanaise en week-end.',
    localAnchors: ['Quartier France (UNESCO)', 'Boulevard du bord de mer', 'Zone VITIB', 'Ancien port'],
    heroSubtitle: 'Sites web d\'exception, systèmes de réservation et marketing digital haut de gamme pour les établissements de Grand-Bassam.',
  },
];

export const TERRITORY_SERVICES: TerritoryService[] = [
  {
    slug: 'creation-site-internet',
    name: 'Création de Sites Web & Plateformes Métiers Next.js 16',
    shortTitle: 'Création Site Web & Plateforme Next.js',
    badge: 'Ingénierie Web Haute Performance',
    metaTitle: 'Création de Site Web à {city} ({country}) | Plateforme Next.js Pro',
    hook: 'Développez une présence digitale dominante à {city} avec un site web Next.js 16 ultra-rapide (< 0.8s), optimisé pour Google et conçu pour convertir vos visiteurs en clients fidèles.',
    description: "À {city}, la majorité des sites internet souffrent d'une lenteur rédhibitoire sur réseau mobile 3G/4G et d'un manque d'optimisation commerciale. BAROUBA GROUP conçoit des plateformes Next.js 16 sur-mesure intégrant l'architecture Server-Side Rendering (SSR), des paiements Mobile Money (Orange Money, Moov, Wave) et un référencement Google chirurgical taillé pour dominer les recherches à {city}.",
    deliverables: [
      {
        title: 'Architecture Next.js 16 & Vercel Edge',
        desc: 'Temps de chargement inférieur à 0.8 seconde, performance mobile A+ et disponibilité 99.99% garantie.',
      },
      {
        title: 'Balisage SEO Local & Schema.org',
        desc: 'Positionnement prioritaire sur les requêtes géolocalisées à {city} pour capter les clients au moment où ils cherchent.',
      },
      {
        title: 'Paiements Sécurisés Mobile Money',
        desc: 'Encaissement automatique par Orange Money, Moov Money et Wave avec confirmation instantanée par SMS/WhatsApp.',
      },
      {
        title: 'Design Afro-Tech Haute Couture',
        desc: 'Interface ergonomique luxueuse adaptée à l\'image de prestige de votre marque et responsive à 100% sur smartphone.',
      },
    ],
    benefits: [
      'Multiplication par 3 de votre taux de conversion visiteur-client',
      'Affichage instantané même en cas de connexion internet faible',
      'Propriété intégrale du code source et accompagnement technique dédié',
      'Garantie de livraison sous 10 à 21 jours ouvrés avec contrat SARL officiel',
    ],
    faq: [
      {
        question: 'Pourquoi choisir Next.js plutôt que WordPress à {city} ?',
        answer: 'Sur les réseaux mobiles d\'Afrique de l\'Ouest, WordPress est souvent lourd, lent et vulnérable aux attaques. Next.js 16 génère des pages précompilées ultra-légères qui se chargent en un éclair, offrant le meilleur score SEO sur Google.',
      },
      {
        question: 'Comment se déroule la collaboration si nous sommes basés à {city} ?',
        answer: 'BAROUBA GROUP combine des canaux de cadrage digitalisés (visio, espace de suivi de projet, WhatsApp VIP) et des déplacements sur site pour les réunions de lancement et de livraison stratégiques.',
      },
      {
        question: 'Puis-je modifier mes textes et produits de manière autonome ?',
        answer: 'Oui, nous livrons chaque plateforme avec un panneau d\'administration fluide et intuitif, complété par une formation vidéo personnalisée pour vos équipes.',
      },
    ],
  },
  {
    slug: 'agents-ia-automatisation',
    name: 'Agents IA & Automatisation des Processus Métiers',
    shortTitle: 'Agents IA & Automatisation Entreprise',
    badge: 'Intelligence Artificielle Opérationnelle',
    metaTitle: 'Agents IA & Automatisation à {city} ({country}) | Solutions Métiers',
    hook: 'Automatisez votre service client, la qualification de vos prospects et votre gestion interne à {city} grâce à des agents IA connectés à WhatsApp et vos bases de données.',
    description: "Ne perdez plus aucun prospect à {city} à cause d'une réponse tardive sur WhatsApp ou d'une surcharge administrative. BAROUBA GROUP déploie des agents intelligents entraînés sur votre catalogue et vos procédures internes, capables de répondre 24h/24, de calculer des devis personnalisés et de synchroniser vos commandes sans intervention humaine.",
    deliverables: [
      {
        title: 'Agent Conversationnel WhatsApp 24/7',
        desc: 'Compréhension du langage naturel, réponse instantanée aux questions fréquentes et qualification commerciale des leads.',
      },
      {
        title: 'Workflows d\'Automatisation Métier',
        desc: 'Connexion fluide entre WhatsApp, Google Sheets, CRM, ERP et logiciels de facturation pour éliminer la saisie manuelle.',
      },
      {
        title: 'Générateur Automatique de Devis & Factures',
        desc: 'Production instantanée de documents PDF professionnels envoyés directement sur le smartphone de votre client.',
      },
      {
        title: 'Tableau de Bord Analytique',
        desc: 'Suivi en temps réel des conversations, des taux de satisfaction et des volumes de conversion traités par l\'IA.',
      },
    ],
    benefits: [
      'Disponibilité totale 24h/24 et 7j/7 sans coût salarial supplémentaire',
      'Temps de réponse réduit de plusieurs heures à moins de 3 secondes',
      'Zéro perte de prospect pendant les nuits, week-ends et jours fériés',
      'Concentration de votre équipe sur les tâches à très haute valeur ajoutée',
    ],
    faq: [
      {
        question: 'L\'agent IA comprend-il les spécificités de communication locale à {city} ?',
        answer: 'Absolument. Nos modèles sont paramétrés et enrichis avec les expressions, habitudes commerciales et contextes d\'échange propres à l\'Afrique de l\'Ouest.',
      },
      {
        question: 'Que se passe-t-il si un client pose une question trop complexe ?',
        answer: 'L\'agent détecte automatiquement la complexité ou l\'urgence et transfère immédiatement la conversation à un collaborateur humain avec un résumé structuré du dossier.',
      },
      {
        question: 'Combien de temps faut-il pour mettre en place un agent IA ?',
        answer: 'Le déploiement standard prend entre 7 et 14 jours, incluant l\'entraînement sur vos données, les tests de sécurité et la formation de votre personnel.',
      },
    ],
  },
  {
    slug: 'publicite-facebook-tiktok-ads',
    name: 'Publicité Meta & TikTok Ads (Media Buying 360°)',
    shortTitle: 'Publicité Facebook, Instagram & TikTok Ads',
    badge: 'Acquisition & Scaling Rentable',
    metaTitle: 'Agence Publicité Facebook & TikTok Ads à {city} | ROAS Garanti',
    hook: 'Générez un flux continu de prospects qualifiés à {city} avec des campagnes publicitaires ciblées à fort retour sur investissement (Tracking serveur CAPI & créatifs IA).',
    description: "Brûler du budget publicitaire sans rentabilité mesurable est la première erreur des annonceurs à {city}. BAROUBA GROUP structure vos campagnes sur Facebook, Instagram et TikTok avec une approche mathématique : ciblage comportemental précis, tracking serveur CAPI anti-déperdition, créatifs publicitaires percutants et optimisation quotidienne du coût par acquisition.",
    deliverables: [
      {
        title: 'Tracking Serveur CAPI (Meta & TikTok)',
        desc: 'Mesure exacte des conversions contournant les blocages iOS et les pertes de données réseau pour un algorithme optimisé.',
      },
      {
        title: 'Production de Créatifs Publicitaires IA',
        desc: 'Vidéos courtes accrocheuses (format Reels/TikTok) et visuels haute définition conçus pour stopper le scroll.',
      },
      {
        title: 'Copywriting Persuasif Ouest-Africain',
        desc: 'Textes de vente rédigés avec les déclencheurs psychologiques qui résonnent auprès des consommateurs de {city}.',
      },
      {
        title: 'Pilotage & Reporting Hebdomadaire',
        desc: 'Suivi transparent du budget, du coût par prospect (CPL) et du retour sur dépenses publicitaires (ROAS).',
      },
    ],
    benefits: [
      'Génération prévisible de nouveaux prospects chaque matin sur WhatsApp',
      'Réduction de 30% à 50% du coût d\'acquisition client par rapport à la moyenne',
      'Élimination du gaspillage publicitaire grâce au tracking serveur de niveau 1',
      'Visibilité massive de votre marque auprès des décideurs de {city}',
    ],
    faq: [
      {
        question: 'Quel budget publicitaire minimum faut-il pour démarrer à {city} ?',
        answer: 'Nous recommandons un budget média de départ de 50 000 à 150 000 FCFA pour tester les premiers angles et valider la rentabilité avant de monter en puissance (scaling).',
      },
      {
        question: 'Comment assurez-vous que les prospects reçus sont qualifiés ?',
        answer: 'Nous intégrons des formulaires de qualification ou des filtres de questions avant l\'arrivée sur WhatsApp pour écarter les curieux et ne transmettre que les clients prêts à payer.',
      },
      {
        question: 'Combien de temps avant d\'obtenir les premiers résultats ?',
        answer: 'Dès le lancement effectif des campagnes (souvent 48h après validation des visuels), les premiers prospects commencent à entrer le jour même.',
      },
    ],
  },
  {
    slug: 'tunnels-de-vente-whatsapp',
    name: 'Tunnels de Vente WhatsApp & E-commerce Mobile Money',
    shortTitle: 'Tunnels de Vente WhatsApp & Mobile Money',
    badge: 'Conversion Directe en Francs CFA',
    metaTitle: 'Tunnel de Vente WhatsApp & E-commerce à {city} | Paiement Mobile',
    hook: 'Transformez vos prospects en acheteurs en quelques secondes via WhatsApp avec intégration native Orange Money, Moov Money et Wave à {city}.',
    description: "En Afrique francophone, 85% des transactions digitales se concluent sur WhatsApp. À {city}, obliger un client à remplir un long formulaire de carte bancaire fait chuter les ventes de 90%. BAROUBA GROUP crée des tunnels de vente friction-zéro où le client découvre l'offre, pose ses questions et règle sa commande directement avec son compte Mobile Money.",
    deliverables: [
      {
        title: 'Landing Page de Vente Mobile-First',
        desc: 'Page ultra-rapide présentant l\'offre de manière irrésistible avec bouton d\'achat direct vers WhatsApp.',
      },
      {
        title: 'Intégration Paiements Mobile Money (Orange, Moov, Wave)',
        desc: 'Passerelle d\'encaissement sécurisée permettant au client de payer instantanément sans quitter son téléphone.',
      },
      {
        title: 'Séquence Automatisée de Relance Commerciale',
        desc: 'Relance intelligente des paniers abandonnés sur WhatsApp pour récupérer jusqu\'à 35% de chiffre d\'affaires perdu.',
      },
      {
        title: 'Gestionnaire de Stock & Notification Livreur',
        desc: 'Alerte immédiate de votre équipe logistique dès qu\'une commande est validée pour une expédition sans délai.',
      },
    ],
    benefits: [
      'Encaissement immédiat et sécurisé en Francs CFA sans litige bancaire',
      'Expérience d\'achat fluide correspondant aux usages réels des consommateurs de {city}',
      'Taux d\'ouverture de 98% sur WhatsApp contre moins de 15% pour les emails',
      'Idéal pour produits physiques, formations, abonnements et prestations de services',
    ],
    faq: [
      {
        question: 'Les clients de {city} ont-ils confiance pour payer par Mobile Money ?',
        answer: 'Oui, le Mobile Money est le mode de paiement le plus sécurisé et le plus populaire au Burkina et en Côte d\'Ivoire. Nos passerelles agréées rassurent le client avec un reçu instantané.',
      },
      {
        question: 'Le système gère-t-il les frais de livraison selon les quartiers de {city} ?',
        answer: 'Tout à fait. Le sélecteur de quartier calcule automatiquement le tarif de livraison adapté au lieu exact de réception.',
      },
      {
        question: 'Peut-on coupler ce tunnel avec nos publicités Facebook ?',
        answer: 'C\'est la configuration reine : une publicité vidéo Meta Ads qui redirige directement vers le tunnel de vente pour un retour sur investissement maximal.',
      },
    ],
  },
  {
    slug: 'formations-metiers-du-web-ia',
    name: 'Formations Professionnelles Métiers du Web & IA',
    shortTitle: 'Formations Certifiantes Web, Marketing & IA',
    badge: 'Développement des Compétences & Avenir',
    metaTitle: 'Formation Digitale & IA à {city} ({country}) | Certifiante & Pratique',
    hook: 'Montez en compétences à {city} avec des formations 100% pratiques aux métiers les plus recherchés : développement Next.js, prompt engineering, marketing digital et automatisation.',
    description: "Le marché du travail à {city} et en Afrique de l'Ouest recherche désespérément des profils qualifiés capables de déployer des solutions digitales concrètes. BAROUBA GROUP forme étudiants, cadres, entrepreneurs et salariés à travers des cursus certifiants intensifs, animés par des ingénieurs et experts en activité.",
    deliverables: [
      {
        title: 'Programmes 100% Axés sur la Pratique Réelle',
        desc: 'Chaque module débouche sur la réalisation de projets concrets utilisables en entreprise ou en freelance.',
      },
      {
        title: 'Certificat Professionnel d\'Aptitude BAROUBA GROUP',
        desc: 'Attestation officielle valorisant votre expertise auprès des recruteurs et donneurs d\'ordres internationaux.',
      },
      {
        title: 'Accompagnement & Mentorat VIP',
        desc: 'Accès direct aux formateurs pour débloquer vos difficultés et perfectionner vos compétences après le cursus.',
      },
      {
        title: 'Boîte à Outils & Prompts Prêts à l\'Emploi',
        desc: 'Fourniture de bibliothèques de code, templates de tunnels et scripts IA pour accélérer vos propres projets.',
      },
    ],
    benefits: [
      'Acquisition de compétences immédiatement monétisables sur le marché du travail',
      'Possibilité de suivre en présentiel ou en ligne depuis {city} avec support réactif',
      'Paiement échelonné en FCFA disponible par Mobile Money',
      'Accès exclusif à la communauté des alumni et opportunités d\'affaires du réseau',
    ],
    faq: [
      {
        question: 'Faut-il avoir des prérequis en informatique pour suivre les cours à {city} ?',
        answer: 'Nos formations comportent des niveaux débutants complets et des niveaux avancés. Une simple familiarité avec l\'ordinateur et une forte motivation suffisent pour démarrer.',
      },
      {
        question: 'Les cours sont-ils accessibles aux personnes en poste à {city} ?',
        answer: 'Oui, nous proposons des sessions en cours du soir et le week-end, ainsi que des modules en ligne flexibles permettant d\'apprendre à votre propre rythme.',
      },
      {
        question: 'Le certificat est-il reconnu par les entreprises ?',
        answer: 'Le certificat BAROUBA GROUP atteste de la validation de compétences techniques réelles sur des projets concrets, ce qui constitue le meilleur gage d\'employabilité.',
      },
    ],
  },
];

// --- HELPER FUNCTIONS ---

export function getCountryBySlug(slug: string): TerritoryCountry | undefined {
  return TERRITORY_COUNTRIES.find((c) => c.slug === slug);
}

export function getCitiesByCountry(countrySlug: string): TerritoryCity[] {
  return TERRITORY_CITIES.filter((c) => c.countrySlug === countrySlug);
}

export function getCityBySlug(countrySlug: string, citySlug: string): TerritoryCity | undefined {
  return TERRITORY_CITIES.find((c) => c.countrySlug === countrySlug && c.slug === citySlug);
}

export function getTerritoryServiceBySlug(serviceSlug: string): TerritoryService | undefined {
  return TERRITORY_SERVICES.find((s) => s.slug === serviceSlug);
}

export interface TerritoryCombo {
  country: TerritoryCountry;
  city: TerritoryCity;
  service: TerritoryService;
}

export function getAllTerritoryCombos(): TerritoryCombo[] {
  const combos: TerritoryCombo[] = [];
  for (const country of TERRITORY_COUNTRIES) {
    const cities = getCitiesByCountry(country.slug);
    for (const city of cities) {
      for (const service of TERRITORY_SERVICES) {
        combos.push({ country, city, service });
      }
    }
  }
  return combos;
}
