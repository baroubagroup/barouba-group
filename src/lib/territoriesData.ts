// Data Layer — Programmatic SEO Territorial Engine (Phase 1 & National Landing Pages)
// BAROUBA GROUP — Bobo-Dioulasso, Ouagadougou, Côte d'Ivoire & Espace UEMOA

export interface TerritoryCountry {
  slug: string;
  name: string;
  iso: string;
  currency: string;
  capital: string;
  economicCapital?: string;
  flag: string;
  historyAndGeo: string;
  economicDossier: string;
  digitalChallenges: string;
  description: string;
}

export interface TerritoryCity {
  slug: string;
  name: string;
  countrySlug: string;
  region: string;
  status?: string;
  population?: string;
  historyAndGeo: string;
  economicDossier: string;
  digitalChallenges: string;
  localAnchors: string[];
  heroSubtitle: string;
}

export type TerritoryIconType = 
  | 'globe' 
  | 'cpu' 
  | 'megaphone' 
  | 'smartphone' 
  | 'graduation' 
  | 'target' 
  | 'layers' 
  | 'users' 
  | 'trending-up' 
  | 'search' 
  | 'message-square' 
  | 'code';

export interface TerritoryService {
  slug: string;
  name: string;
  shortTitle: string;
  badge: string;
  iconType: TerritoryIconType;
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
    historyAndGeo: "Pays enclavé d'Afrique de l'Ouest au cœur de la zone soudano-sahélienne, le Burkina Faso (le « Pays des Hommes Intègres ») couvre 274 200 km² et compte plus de 22 millions d'habitants. Carrefour historique des grandes routes caravanières sahéliennes, le pays partage ses frontières avec six nations (Côte d'Ivoire, Ghana, Togo, Bénin, Niger, Mali), ce qui en fait un nœud stratégique majeur pour le commerce sous-régional.",
    economicDossier: "L'économie burkinabè repose sur deux piliers majeurs : le secteur minier aurifère (premier produit d'exportation avec plusieurs grandes mines en exploitation) et l'agriculture-élevage (coton SOFITEX, céréales, anacarde, bétail sur pied). Le pays connaît une urbanisation accélérée portée par Ouagadougou et Bobo-Dioulasso, stimulant un secteur tertiaire en plein essor (télécoms, banques, microfinance, BTP et distribution commerciale).",
    digitalChallenges: "La transition numérique au Burkina Faso est dominée par l'adoption massive du Mobile Money (Orange Money, Moov Money) et de la messagerie WhatsApp comme canaux d'affaires numéro un. Les entreprises burkinabè ont un besoin urgent de sites web professionnels ultra-rapides sur réseau mobile 3G/4G, d'automatisation des commandes et d'une visibilité publicitaire rentable pour dépasser le cadre informel.",
    description: "Cœur battant des opérations de BAROUBA GROUP. Nous accompagnons les institutions, grandes entreprises, coopératives et PME du Burkina Faso dans leur souveraineté numérique avec des technologies web Next.js 16, des agents IA sur-mesure et du media buying de haute précision.",
  },
  {
    slug: 'cote-divoire',
    name: 'Côte d\'Ivoire',
    iso: 'CI',
    currency: 'XOF (Franc CFA)',
    capital: 'Yamoussoukro',
    economicCapital: 'Abidjan',
    flag: '🇨🇮',
    historyAndGeo: "Située sur le littoral du golfe de Guinée avec plus de 500 km de côtes atlantiques, la Côte d'Ivoire s'étend sur 322 462 km² et compte plus de 29 millions d'habitants. Première puissance économique de l'Union Économique et Monétaire Ouest-Africaine (UEMOA), le pays constitue le moteur logistique, financier et technologique incontesté de l'Afrique de l'Ouest francophone.",
    economicDossier: "Locomotive agricole mondiale (1er producteur mondial de cacao avec plus de 40% de l'offre mondiale, 1er exportateur de noix de cajou, leader du caoutchouc et de l'huile de palme), la Côte d'Ivoire dispose d'un tissu industriel diversifié, de deux ports autonomes majeurs (Abidjan et San-Pédro) et de la Bourse Régionale des Valeurs Mobilières (BVRM) à Abidjan. La croissance économique solide (>6% par an) attire des flux massifs d'investissements directs étrangers.",
    digitalChallenges: "Le marché ivoirien est l'un des plus dynamiques et des plus concurrentiels d'Afrique en matière de tech : essor fulgurant de la fintech (Wave, Orange Money, MTN MoMo), pénétration élevée de TikTok et Facebook Ads, et forte maturité des consommateurs pour le e-commerce. Les entreprises ivoiriennes recherchent des partenaires capables de déployer des architectures web haute performance et de maîtriser le coût d'acquisition client (ROAS).",
    description: "Première puissance économique de l'UEMOA. BAROUBA GROUP déploie ses plateformes web haute conversion, ses tunnels WhatsApp intégrés Wave/Orange Money et ses campagnes publicitaires à fort ROAS à travers les grands pôles ivoiriens.",
  },

  // ==========================================
  // NOUVEAUX PAYS (EXPANSION INTERNATIONALE)
  // ==========================================
  {
    slug: "mali",
    name: "Mali",
    iso: "ML",
    currency: "XOF (Franc CFA)",
    capital: "Bamako",
    economicCapital: "Bamako",
    flag: "🇲🇱",
    historyAndGeo: "Grand carrefour historique des empires médiévaux ouest-africains (Ghana, Mali, Songhaï), le Mali couvre 1 241 238 km² et compte plus de 22 millions d'habitants. Traversé par le fleuve Niger (le Djoliba), colonne vertébrale économique du pays, le Mali partage une longue frontière naturelle et fraternelle avec le Burkina Faso et la Côte d'Ivoire.",
    economicDossier: "Troisième producteur d'or d'Afrique avec d'importantes exploitations minières (Sadiola, Loulo, Morila), le Mali est également le premier producteur de coton de la zone UEMOA et un géant de l'élevage pastoral sahélien. Bamako, la capitale au bord du Djoliba, concentre l'essentiel du secteur tertiaire, des télécoms et des réseaux de négoce transfrontaliers.",
    digitalChallenges: "L'économie malienne, très commerçante et marchande, s'appuie massivement sur le Mobile Money (Orange Money Mali, Moov Africa Malitel) et les groupes d'affaires WhatsApp. Les commerçants de Bamako et Sikasso ont besoin de tunnels de vente automatisés, de sites web Next.js ultra-légers pour surmonter les aléas de connexion et de campagnes publicitaires ciblées.",
    description: "Partenaire naturel du Burkina Faso au sein de l'AES. BAROUBA GROUP déploie ses plateformes web Next.js 16, ses tunnels WhatsApp Mobile Money et ses solutions d'automatisation IA auprès des commerçants, industriels et institutions du Mali.",
  },
  {
    slug: "cameroun",
    name: "Cameroun",
    iso: "CM",
    currency: "XAF (Franc CFA BEAC)",
    capital: "Yaoundé",
    economicCapital: "Douala",
    flag: "🇨🇲",
    historyAndGeo: "Surnommé « l'Afrique en miniature » pour sa diversité géographique, linguistique et culturelle unique, le Cameroun s'étend sur 475 650 km² et compte plus de 28 millions d'habitants. Pont naturel entre l'Afrique de l'Ouest et l'Afrique Centrale, le pays est la première puissance économique de la Communauté Économique et Monétaire de l'Afrique Centrale (CEMAC).",
    economicDossier: "Avec le Port Autonome de Douala et le nouveau port en eau profonde de Kribi, le Cameroun est la porte maritime du Tchad et de la République Centrafricaine. Son économie repose sur les hydrocarbures, l'agriculture diversifiée (cacao, café, banane, huile de palme, bois), l'industrie manufacturière et un secteur privé entrepreneurial particulièrement dynamique et combatif.",
    digitalChallenges: "Le Cameroun possède l'un des écosystèmes tech les plus réputés d'Afrique Centrale (« Silicon Mountain » de Buea, pôle tech de Douala). Les entreprises camerounaises font face à une forte concurrence et exigent des plateformes web robustes, des tunnels de vente intégrant MTN Mobile Money et Orange Money Cameroun, et des stratégies publicitaires Meta/TikTok à fort ROAS.",
    description: "Locomotive économique de l'Afrique Centrale (CEMAC). BAROUBA GROUP accompagne les entreprises camerounaises avec des architectures web Next.js d'élite, des tunnels de vente WhatsApp et des agents IA de qualification commerciale.",
  },
  {
    slug: "senegal",
    name: "Sénégal",
    iso: "SN",
    currency: "XOF (Franc CFA)",
    capital: "Dakar",
    economicCapital: "Dakar",
    flag: "🇸🇳",
    historyAndGeo: "Situé à la pointe la plus occidentale du continent africain, le Sénégal s'étend sur 196 722 km² et compte plus de 18 millions d'habitants. Célèbre pour sa Teranga (hospitalité légendaire), sa stabilité démocratique et sa position stratégique de carrefour maritime et aérien atlantique, le pays est l'un des phares culturels et intellectuels de l'Afrique francophone.",
    economicDossier: "Deuxième économie de l'UEMOA, le Sénégal vit une mutation historique avec l'exploitation des gisements gaziers et pétroliers offshore (Grand Tortue Ahmeyim, Sangomar). Dakar est un hub diplomatique, financier et technologique majeur accueillant de nombreuses multinationales, tandis que le tourisme, la pêche, les phosphates et l'agriculture (arachide, maraîchage des Niayes) soutiennent l'économie nationale.",
    digitalChallenges: "Le Sénégal est l'un des pays les plus connectés d'Afrique avec une pénétration d'Internet et des réseaux sociaux record. L'adoption de Wave et Orange Money y est massive. Les entreprises dakaroises doivent déployer des sites ultra-rapides (< 0.8s), un tracking CAPI de niveau 1 et des agents IA pour se démarquer sur un marché où la réactivité WhatsApp est la norme absolue.",
    description: "Hub technologique et diplomatique atlantique. BAROUBA GROUP déploie ses solutions web Next.js 16, ses systèmes publicitaires à fort ROAS et ses agents IA auprès des entreprises innovantes et institutions du Sénégal.",
  },
  {
    slug: "togo",
    name: "Togo",
    iso: "TG",
    currency: "XOF (Franc CFA)",
    capital: "Lomé",
    economicCapital: "Lomé",
    flag: "🇹🇬",
    historyAndGeo: "Bordé par le golfe de Guinée entre le Ghana, le Bénin et le Burkina Faso, le Togo s'étend sur 56 785 km² et compte près de 9 millions d'habitants. En dépit de sa taille modeste, le Togo joue un rôle géopolitique et économique colossal dans la sous-région ouest-africaine grâce à sa position de corridor naturel reliant l'océan aux pays sahéliens de l'hinterland.",
    economicDossier: "Le Port Autonome de Lomé (PAL) est l'unique port naturel en eau profonde d'Afrique de l'Ouest, capable d'accueillir les porte-conteneurs géants de dernière génération. Lomé est le siège d'institutions bancaires panafricaines majeures (Ecobank Transnational Incorporated, BOAD, BIDC) et le premier corridor de transit maritime pour les marchandises à destination de Ouagadougou et Niamey.",
    digitalChallenges: "Le Togo a engagé une vaste stratégie de numérisation de ses services publics et portuaires. Les négociants, transitaires et commerçants togolais ont besoin de portails professionnels pour gérer leurs relations avec les importateurs sahéliens, de tunnels de vente T-Money / Flooz et de campagnes publicitaires ciblées sur l'axe Lomé-Ouaga.",
    description: "Hub logistique et financier de l'Afrique de l'Ouest maritime. BAROUBA GROUP propulse la visibilité digitale et les tunnels transactionnels des entreprises, transitaires et négociants du Togo.",
  },
  {
    slug: "rdc",
    name: "RDC (Congo)",
    iso: "CD",
    currency: "CDF / USD",
    capital: "Kinshasa",
    economicCapital: "Kinshasa / Lubumbashi",
    flag: "🇨🇩",
    historyAndGeo: "Plus grand pays d'Afrique subsaharienne avec 2 345 409 km² et plus de 100 millions d'habitants, la République Démocratique du Congo (RDC) est le premier pays francophone au monde par sa population. Traversée par le majestueux fleuve Congo et dotée du deuxième massif forestier tropical de la planète, la RDC est un géant géologique et démographique au cœur de l'Afrique.",
    economicDossier: "Véritable « scandale géologique », la RDC recèle les plus grandes réserves mondiales de cobalt (plus de 70% de la production mondiale), de cuivre, de coltan, de diamant et de lithium indispensables à la transition énergétique mondiale. Kinshasa, mégapole effervescente de plus de 15 millions d'habitants, concentre un marché de consommation titanesque et un secteur commercial bouillonnant.",
    digitalChallenges: "Dans un marché congolais caractérisé par une forte dollarisation de l'économie, une couverture bancaire classique limitée et une explosion du Mobile Money (M-Pesa, Orange Money, Airtel Money), les entreprises kinoises et katangaises ont un besoin vital de tunnels WhatsApp de vente directe et de sites web légers accessibles sur mobile.",
    description: "Premier marché francophone au monde et géant économique d'Afrique Centrale. BAROUBA GROUP déploie ses plateformes Next.js haute capacité, ses tunnels de vente WhatsApp et son automatisation IA en RDC.",
  },
  {
    slug: "niger",
    name: "Niger",
    iso: "NE",
    currency: "XOF (Franc CFA)",
    capital: "Niamey",
    economicCapital: "Niamey / Maradi",
    flag: "🇳🇪",
    historyAndGeo: "Pays sahélien pivot d'Afrique de l'Ouest couvrant 1 267 000 km² et comptant plus de 25 millions d'habitants, le Niger est un pont stratégique entre l'Afrique du Nord et l'Afrique subsaharienne. Membre fondateur de l'Alliance des États du Sahel (AES) aux côtés du Burkina Faso et du Mali, le pays partage avec le Burkina Faso des liens historiques, économiques et humains séculaires.",
    economicDossier: "Grand producteur mondial d'uranium et nouvel exportateur de pétrole brut grâce au grand oléoduc Niger-Bénin, le Niger dispose d'un secteur agropastoral vigoureux (bétail sur pied, oignon blanc de Galmi réputé dans toute la sous-région, niébé). L'axe commercial Maradi-Kano constitue l'un des circuits d'échanges marchands les plus denses du continent.",
    digitalChallenges: "Le secteur commercial nigérien s'appuie massivement sur les paiements mobiles (Airtel Money, Moov Flooz, Al Izza). Les PME et importateurs de Niamey et Maradi ont besoin d'outils modernes pour automatiser la commande de biens, sécuriser les transferts de fonds et se rendre visibles auprès des partenaires institutionnels.",
    description: "Partenaire stratégique de l'AES. BAROUBA GROUP accompagne les institutions, entreprises d'ingénierie, coopératives agricoles et commerçants du Niger avec des solutions logicielles Next.js robustes et des tunnels WhatsApp adaptés.",
  },
  {
    slug: "benin",
    name: "Bénin",
    iso: "BJ",
    currency: "XOF (Franc CFA)",
    capital: "Porto-Novo",
    economicCapital: "Cotonou",
    flag: "🇧🇯",
    historyAndGeo: "Bordé par l'océan Atlantique entre le Togo, le Nigéria, le Burkina Faso et le Niger, le Bénin s'étend sur 114 763 km² et compte plus de 13 millions d'habitants. Berceau du royaume historique du Danxomè et pôle culturel d'envergure, le Bénin est un pôle de stabilité démocratique et de réformes structurelles salué en Afrique de l'Ouest.",
    economicDossier: "Porte océanique de transit privilégiée pour le Niger, le Burkina Faso et le géant nigérian voisin, le Bénin s'appuie sur le Port Autonome de Cotonou, la Zone Industrielle Spéciale de Glo-Djigbé (GDIZ - textile, cajou, soja), le coton et un secteur tertiaire en modernisation rapide. Le pays investit massivement dans son infrastructure numérique et son écosystème startup.",
    digitalChallenges: "Avec une politique nationale volontariste de dématérialisation, le Bénin est l'un des marchés les plus réceptifs au digital en Afrique de l'Ouest. Les entreprises béninoises exigent des plateformes web ultra-sécurisées, un référencement Google irréprochable et des systèmes d'acquisition publicitaire performants sur Facebook et TikTok.",
    description: "Pôle d'innovation et carrefour portuaire ouest-africain. BAROUBA GROUP met son ingénierie web Next.js 16, ses tunnels transactionnels WhatsApp et son expertise IA au service des entreprises et marques du Bénin.",
  },
  {
    slug: "france",
    name: "France",
    iso: "FR",
    currency: "EUR (€)",
    capital: "Paris",
    economicCapital: "Paris",
    flag: "🇫🇷",
    historyAndGeo: "Première nation francophone d'Europe et puissance économique mondiale, la France compte plus de 68 millions d'habitants. Paris et ses grandes métropoles régionales abritent une diaspora ouest-africaine particulièrement nombreuse, dynamique et entreprenante, maintenant des liens économiques, commerciaux et d'investissement continus avec le Burkina Faso, la Côte d'Ivoire et l'UEMOA.",
    economicDossier: "Septième puissance économique mondiale, la France possède un marché intérieur à fort pouvoir d'achat et une industrie technologique de pointe. De nombreux entrepreneurs de la diaspora, cadres et investisseurs binationaux lancent des activités commerciales, des projets immobiliers, des franchises ou des entreprises de services tournées vers l'Afrique de l'Ouest.",
    digitalChallenges: "Pour les porteurs de projets et PME en France opérant avec l'Afrique, le défi est de trouver un partenaire technique crédible, réactif et capable de développer des plateformes aux standards européens (Next.js 16, RGPD, paiements Stripe/CB et Mobile Money) avec des coûts maîtrisés et une présence réelle sur le terrain à Bobo-Dioulasso et Abidjan.",
    description: "Pont stratégique pour la diaspora et les entreprises opérant entre l'Europe et l'Afrique. BAROUBA GROUP conçoit des plateformes Next.js d'élite, des tunnels de vente binationaux et des stratégies d'acquisition pour les marchés franco-africains.",
  },
  {
    slug: "canada",
    name: "Canada",
    iso: "CA",
    currency: "CAD ($)",
    capital: "Ottawa",
    economicCapital: "Montréal / Toronto",
    flag: "🇨🇦",
    historyAndGeo: "Deuxième plus grand pays du monde par sa superficie (9 984 670 km²) avec plus de 40 millions d'habitants, le Canada est une puissance du G7. La province du Québec et la métropole de Montréal constituent le cœur de la francophonie nord-américaine, accueillant une diaspora africaine très qualifiée (ingénieurs, universitaires, professionnels de la tech et entrepreneurs).",
    economicDossier: "Leader mondial en intelligence artificielle (Mila, écosystème de recherche de Montréal), en technologies de l'information et en ressources minières, le Canada entretient des flux croissants d'investissements et de partenariats commerciaux avec l'Afrique francophone (secteur minier burkinabè, formation, télécoms, e-commerce transatlantique).",
    digitalChallenges: "Les entrepreneurs de la diaspora canadienne et les PME québécoises souhaitant investir ou exporter en Afrique de l'Ouest ont besoin de plateformes web combinant les standards nord-américains d'ergonomie et la compatibilité avec les réalités africaines (faible bande passante, encaissement Mobile Money, vente WhatsApp).",
    description: "Hub francophone nord-américain et pôle d'excellence en IA. BAROUBA GROUP bâtit des architectures web Next.js 16 et des tunnels d'affaires reliant le Canada aux marchés en pleine croissance d'Afrique de l'Ouest.",
  },
  {
    slug: "chine",
    name: "Chine",
    iso: "CN",
    currency: "CNY (Yuan) / USD",
    capital: "Pékin (Beijing)",
    economicCapital: "Shanghai / Guangzhou / Shenzhen",
    flag: "🇨🇳",
    historyAndGeo: "Deuxième puissance économique mondiale avec plus de 1,4 milliard d'habitants, la Chine est le premier partenaire commercial bilatéral de l'Afrique. Les provinces côtières chinoises (Guangdong, Zhejiang) abritent les plus grands centres mondiaux de production et de négoce de marchandises manufacturées, fréquentés en permanence par des milliers d'opérateurs économiques ouest-africains.",
    economicDossier: "Usine du monde et leader incontesté du commerce international de gros, la Chine est le point d'approvisionnement numéro un des commerçants de Bobo-Dioulasso, Ouagadougou, Abidjan, Bamako, Dakar et Lomé (textile, électronique, quincaillerie, machines industrielles, électroménager). Les pôles de Guangzhou (Canton), Yiwu et Shenzhen sont les capitales du sourcing sino-africain.",
    digitalChallenges: "Les négociants, transitaires maritimes et acheteurs africains opérant entre la Chine et l'Afrique de l'Ouest font face à un défi d'automatisation : catalogue en ligne multidevise, suivi des conteneurs, conversion directe des acheteurs africains sur WhatsApp et sécurisation des paiements transfrontaliers.",
    description: "Capitale mondiale du sourcing et premier partenaire commercial de l'Afrique. BAROUBA GROUP déploie des tunnels de commande, des plateformes e-commerce B2B et des agents IA pour fluidifier le négoce sino-africain.",
  },
];

export const TERRITORY_CITIES: TerritoryCity[] = [
  // ==========================================
  // BURKINA FASO (10 VILLES)
  // ==========================================
  {
    slug: 'bobo-dioulasso',
    name: 'Bobo-Dioulasso',
    countrySlug: 'burkina-faso',
    region: 'Hauts-Bassins',
    status: 'Deuxième ville du Burkina Faso & Capitale économique (Siège BAROUBA GROUP)',
    population: '1 100 000+ hab.',
    historyAndGeo: "Fondée au XVe siècle sous le nom historique de Sya, Bobo-Dioulasso est la deuxième ville la plus peuplée du Burkina Faso et le chef-lieu de la région des Hauts-Bassins. Située au sud-ouest du pays à 365 km de Ouagadougou, la ville est un carrefour naturel carrefour entre le Mali, la Côte d'Ivoire et le Ghana. Traversée par le marigot sacré de Dafra et la rivière Houet, Sya est réputée pour sa vieille mosquée de Dioulassoba (joyau de l'architecture en banco soudanais) et son dynamisme culturel légendaire.",
    economicDossier: "Capitale économique et pôle agro-industriel du pays, Bobo-Dioulasso concentre les plus grandes unités de transformation du Burkina : siège historique de la SOFITEX (coton fibre), huileries industrielles (SN CITEC), brasseries (BRAKINA), transformation de mangues et d'anacarde, fabrication mécanique et transport international de fret. Son Grand Marché central est l'un des centres d'échanges marchands les plus denses d'Afrique de l'Ouest.",
    digitalChallenges: "Le tissu commercial de Bobo-Dioulasso, composé de nombreux grossistes, importateurs et distributeurs traditionnels, fait face au défi de la transition digitale : numérisation des catalogues, passage des carnets de commandes vers WhatsApp et Mobile Money, et déploiement de sites vitrines professionnels pour capter des marchés institutionnels au-delà de la région.",
    localAnchors: ['Grand Marché de Bobo', 'Zone Industrielle', 'Dioulassoba', 'Accart-Ville', 'Colma', 'Sarfalao', 'Kuinima', 'Lafiabougou', 'Belleville'],
    heroSubtitle: 'Siège social de BAROUBA GROUP : ingénierie web Next.js 16, agents IA, tunnels de vente WhatsApp et formations d\'élite au cœur de la capitale économique.',
  },
  {
    slug: 'ouagadougou',
    name: 'Ouagadougou',
    countrySlug: 'burkina-faso',
    region: 'Centre',
    status: 'Capitale politique, administrative et institutionnelle du Burkina Faso',
    population: '3 200 000+ hab.',
    historyAndGeo: "Capitale du Burkina Faso et chef-lieu de la région du Centre, Ouagadougou (la « Cité de Naaba Oubri ») a été fondée au XIe siècle et constitue le cœur historique du royaume Mossi. Située au centre du territoire national sur le plateau central, Ouaga est le siège de la Présidence du Faso, des ministères républicains, des représentations diplomatiques internationales et des grandes institutions panafricaines (FESPACO, SIAO).",
    economicDossier: "Principal centre de décision financière et administrative du pays, Ouagadougou regroupe les sièges sociaux des banques (Coris Bank, Ecobank, BOA, UBA), des opérateurs de télécommunications (Orange, Moov, Telecel), des compagnies minières et des sièges régionaux d'ONG internationales. La ville abrite également une zone d'activités industrielles (ZAD, Kossodo) et un pôle d'affaires ultra-moderne à Ouaga 2000.",
    digitalChallenges: "Les entreprises, institutions et ONG de Ouagadougou font face à des exigences élevées : cybersécurité renforcée, plateformes web conformes aux directives de la Commission de l'Informatique et des Libertés (CIL), gestion de flux de demandes massifs par intelligence artificielle et campagnes d'acquisition pour des services premium.",
    localAnchors: ['Ouaga 2000', 'Zone d\'Activités Diverses (ZAD)', 'Koulouba', 'Gounghin', 'Paspanga', 'Dassasgho', 'Patte d\'Oie', 'Somgandé', 'Wayalghin'],
    heroSubtitle: 'Partenaire digital d\'autorité des institutions, banques, ONG et grandes entreprises de Ouagadougou : solutions Next.js 16 et agents IA de niveau international.',
  },
  {
    slug: 'koudougou',
    name: 'Koudougou',
    countrySlug: 'burkina-faso',
    region: 'Centre-Ouest',
    status: 'Troisième ville du Burkina Faso & Cité du Cavalier Rouge',
    population: '190 000+ hab.',
    historyAndGeo: "Troisième ville du Burkina Faso par sa population, Koudougou est le chef-lieu de la région du Centre-Ouest et de la province du Boulkiemdé, située à 100 km à l'ouest de Ouagadougou. Traversée par la ligne de chemin de fer Abidjan-Niger, la cité du Cavalier Rouge possède une riche histoire ouvrière et intellectuelle, et abrite la prestigieuse Université Norbert Zongo.",
    economicDossier: "Haut-lieu du négoce textile et du tissage artisanal du Faso Dan Fani, Koudougou s'appuie sur un réseau dense de coopératives de femmes tisserandes, la production de beurre de karité, l'élevage et le commerce céréalier. Le secteur tertiaire s'est fortement développé autour des services universitaires et des petites et moyennes entreprises de négoce.",
    digitalChallenges: "Les coopératives textiles et commerçants de Koudougou manquent souvent de visibilité pour vendre leurs productions haut de gamme hors de la région. Le déploiement de boutiques en ligne légères et de tunnels de commande WhatsApp leur ouvre les marchés de la diaspora et de la sous-région.",
    localAnchors: ['Centre-ville', 'Secteur 1', 'Secteur 2', 'Palogo', 'Marché Central', 'Zone Universitaire Norbert Zongo'],
    heroSubtitle: 'Accélération numérique des commerçants, ateliers textiles et PME de Koudougou avec des plateformes web et des tunnels de vente WhatsApp sur-mesure.',
  },
  {
    slug: 'banfora',
    name: 'Banfora',
    countrySlug: 'burkina-faso',
    region: 'Cascades',
    status: 'Chef-lieu de la région des Cascades & Cité agro-industrielle du Burkina Faso',
    population: '170 000+ hab.',
    historyAndGeo: "Située à 85 km au sud-ouest de Bobo-Dioulasso et à une cinquantaine de kilomètres de la frontière ivoirienne, Banfora est la capitale de la région des Cascades et de la province de la Comoé. Nichée dans un environnement naturel luxuriant marqué par la falaise de Banfora, les dômes de Fabédougou et les cascades de Karfiguéla, la ville jouit d'une pluviométrie généreuse qui en fait le poumon vert du Burkina Faso.",
    economicDossier: "Cœur battant de l'agro-industrie burkinabè, Banfora abrite le plus grand complexe sucrier du pays (SN SOSUCO sur plus de 4 000 hectares de canne à sucre), la Société de Transformation des Fruits (STFB), de grandes unités de séchage de mangues exportatrices, des distilleries et des vergers d'anacarde. C'est également un pôle écotouristique international accueillant des milliers de voyageurs par an.",
    digitalChallenges: "Les acteurs touristiques et hôteliers ont besoin de systèmes de réservation directe en ligne sans commissions excessives. Les industriels et coopératives d'exportation de mangues et cajou nécessitent des vitrines web bilingues d'autorité pour rassurer les acheteurs européens et ouest-africains.",
    localAnchors: ['Complexe SN SOSUCO', 'Grand Marché de Banfora', 'Secteur 2', 'Bounouna', 'Axe frontalier Côte d\'Ivoire'],
    heroSubtitle: 'Solutions digitales haute performance et systèmes publicitaires pour les géants agro-industriels, coopératives et acteurs touristiques de Banfora.',
  },
  {
    slug: 'ouahigouya',
    name: 'Ouahigouya',
    countrySlug: 'burkina-faso',
    region: 'Nord',
    status: 'Capitale historique du Royaume du Yatenga & Chef-lieu du Nord',
    population: '140 000+ hab.',
    historyAndGeo: "Fondée en 1757 par le Naaba Kango, Ouahigouya est la capitale historique du puissant royaume Mossi du Yatenga et le chef-lieu de la région du Nord. Située à 180 km au nord-ouest de Ouagadougou, la ville s'est développée autour du palais royal de Naaba Kango et constitue le pôle urbain de référence pour toute la partie septentrionale du Burkina Faso.",
    economicDossier: "Premier bassin de production maraîchère du Burkina Faso, Ouahigouya alimente tout le pays et la sous-région en pommes de terre, oignons, tomates et haricots verts. La ville est également réputée pour ses artisans tanneurs, sa maroquinerie traditionnelle, ses marchés à bétail florissants et son négoce frontalier avec le Mali voisin.",
    digitalChallenges: "Les négociants et producteurs de maraîchage ont un besoin urgent de raccourcir les circuits de distribution : mise en relation directe avec les centrales d'achat de Ouagadougou et Abidjan via WhatsApp, et sécurisation des transactions par Mobile Money.",
    localAnchors: ['Grand Marché du Yatenga', 'Palais de Naaba Kango', 'Secteur 4', 'Gare routière', 'Axe commercial du Nord'],
    heroSubtitle: 'Déploiement d\'outils d\'acquisition digitale, de tunnels WhatsApp et de plateformes de commande pour les commerçants et négociants du Yatenga.',
  },
  {
    slug: 'fada-ngourma',
    name: 'Fada N\'Gourma',
    countrySlug: 'burkina-faso',
    region: 'Est',
    status: 'Cité royale du Gulmu & Chef-lieu de la région de l\'Est',
    population: '95 000+ hab.',
    historyAndGeo: "Fondée par le chef légendaire Yendabili au XVIIIe siècle, Fada N'Gourma est la capitale historique du royaume du Gulmu et le chef-lieu de la plus vaste région du Burkina Faso, l'Est. Située à 220 km à l'est de Ouagadougou sur la route nationale stratégique RN4, la cité est la porte d'entrée terrestre reliant le Burkina au Niger, au Bénin et au Togo.",
    economicDossier: "Nœud de transit et carrefour douanier majeur, Fada N'Gourma est célèbre pour son apiculture traditionnelle produisant le réputé « Miel du Gulmu », labellisé pour sa qualité biologique. L'élevage bovin, le commerce de vivres, la chasse touristique et le transit de marchandises côtières constituent les principaux moteurs économiques locaux.",
    digitalChallenges: "Les producteurs apicoles et artisans locaux peinent à protéger leur marque contre les contrefaçons et à vendre au juste prix. Un site web e-commerce officiel associé à une communication ciblée sur les réseaux sociaux permet de valoriser ces produits nobles sur le marché national et sous-régional.",
    localAnchors: ['Marché Central de Fada', 'Secteur 1', 'Secteur 3', 'Axe routier international RN4'],
    heroSubtitle: 'Propulsez vos marques et produits depuis Fada N\'Gourma vers les marchés ouest-africains grâce au digital d\'autorité et aux tunnels de vente.',
  },
  {
    slug: 'dedougou',
    name: 'Dédougou',
    countrySlug: 'burkina-faso',
    region: 'Boucle du Mouhoun',
    status: 'Grenier céréalier du Burkina Faso & Cité du FESTIMA',
    population: '105 000+ hab.',
    historyAndGeo: "Chef-lieu de la région de la Boucle du Mouhoun et de la province du Mouhoun, Dédougou est située à 250 km à l'ouest de Ouagadougou dans la vallée fertile du fleuve Mouhoun (Black Volta). Cité cosmopolite accueillant le Festival International des Masques et des Arts (FESTIMA), elle est reconnue pour sa vitalité culturelle et son importance stratégique dans la sécurité alimentaire du Burkina.",
    economicDossier: "Reconnue unanimement comme le grenier agricole du pays, Dédougou concentre une production massive de maïs, coton, sésame, niébé et sorgho. La ville abrite de grandes unions de coopératives agricoles, des usines d'égrenage de coton SOFITEX et d'importantes institutions financières spécialisées dans le crédit agricole.",
    digitalChallenges: "Les coopératives et agro-fournisseurs de la Boucle du Mouhoun ont besoin d'outils modernes pour gérer leurs membres, diffuser les alertes météo/prix par SMS/WhatsApp, et présenter des dossiers de financement crédibles aux bailleurs de fonds via des portails web institutionnels.",
    localAnchors: ['Centre-ville', 'Grand Marché de Dédougou', 'Zone administrative', 'Secteur 6', 'Route de Bobo'],
    heroSubtitle: 'Solutions logicielles, portails institutionnels et communication digitale adaptés aux défis de l\'agriculture et du commerce de la Boucle du Mouhoun.',
  },
  {
    slug: 'tenkodogo',
    name: 'Tenkodogo',
    countrySlug: 'burkina-faso',
    region: 'Centre-Est',
    status: 'Cité royale de Naaba Zoungrana & Carrefour frontalier du Centre-Est',
    population: '85 000+ hab.',
    historyAndGeo: "Considérée comme le berceau historique de l'empire Mossi fondé par Yennenga et Rialé au XIIe siècle, Tenkodogo est la capitale de la région du Centre-Est et de la province du Boulgou. Située à 185 km au sud-est de Ouagadougou sur la route nationale RN16, la ville est à proximité immédiate de Cinkansé, le grand poste frontalier commun au Burkina, au Togo et au Ghana.",
    economicDossier: "Épicentre du commerce transfrontalier du Centre-Est, Tenkodogo est un marché de redistribution massif de biens manufacturés importés des ports de Lomé et Tema. L'élevage ovin et caprin, les transferts de fonds de la diaspora établie en Côte d'Ivoire et au Gabon, et les services financiers constituent les piliers de l'économie locale.",
    digitalChallenges: "Les commerçants importateurs de Tenkodogo opèrent dans un environnement multilingue (français, anglais, mooré). Ils ont besoin de tunnels de commande WhatsApp automatisés pour traiter les commandes des clients togolais et ghanéens sans barrière technique.",
    localAnchors: ['Grand Marché de Tenkodogo', 'Secteur 2', 'Axe routier RN16 Cinkansé', 'Zone commerciale'],
    heroSubtitle: 'Connectez votre entreprise de Tenkodogo aux flux régionaux avec des plateformes web modernes et des campagnes publicitaires ciblées.',
  },
  {
    slug: 'kaya',
    name: 'Kaya',
    countrySlug: 'burkina-faso',
    region: 'Centre-Nord',
    status: 'Capitale nationale du cuir et des tanneurs du Burkina Faso',
    population: '135 000+ hab.',
    historyAndGeo: "Chef-lieu de la région du Centre-Nord et de la province du Sanmatenga, Kaya est située à 100 km au nord-est de Ouagadougou. Cité historique des artisans tanneurs et cordonniers, elle bénéficie d'une réputation séculaire dans tout le Sahel pour la finesse de son travail du cuir de mouton et de chèvre teinté aux pigments naturels.",
    economicDossier: "Haut-lieu de l'artisanat du cuir (chaussures, sacs, poufs, accessoires décoratifs), Kaya est également un carrefour d'élevage et de transit commercial. Ces dernières années, la ville est devenue une base logistique centrale pour de nombreuses agences humanitaires et ONG intervenant dans le nord et le Sahel burkinabè.",
    digitalChallenges: "Les artisans maroquiniers de Kaya ont une opportunité historique : vendre leurs créations directement à la diaspora et aux amateurs d'artisanat africain en Europe et aux États-Unis via des boutiques Next.js sécurisées avec paiements internationaux et Mobile Money.",
    localAnchors: ['Marché artisanal du cuir', 'Secteur 4', 'Centre-ville', 'Zone humanitaire', 'Route de Dori'],
    heroSubtitle: 'Vendez vos créations artisanales et développez votre activité à Kaya avec un site web d\'autorité et des tunnels de conversion WhatsApp.',
  },
  {
    slug: 'gaoua',
    name: 'Gaoua',
    countrySlug: 'burkina-faso',
    region: 'Sud-Ouest',
    status: 'Capitale historique du pays Lobi & Chef-lieu du Sud-Ouest',
    population: '70 000+ hab.',
    historyAndGeo: "Capitale du pays Lobi et chef-lieu de la région du Sud-Ouest et de la province du Poni, Gaoua est nichée au cœur d'un paysage vallonné et arboré à 380 km de Ouagadougou. Réputée pour ses traditions vivaces, ses célèbres maisons fortifiées en terre (les Sukalas) et son Musée du Poni, Gaoua est le centre culturel et spirituel des peuples Lobi, Birifor et Dagara.",
    economicDossier: "Pôle agricole fertile produisant igname, maïs, anacarde et bétail, Gaoua connaît un essor économique accéléré grâce à l'exploitation minière artisanale et industrielle de l'or. La proximité immédiate des frontières de la Côte d'Ivoire (Bouna) et du Ghana (Wa) en fait une zone d'échanges commerciaux très dynamique.",
    digitalChallenges: "Le secteur commercial de Gaoua souffre d'un certain enclavement médiatique : les entrepreneurs locaux ont tout intérêt à se positionner sur Google pour capter la clientèle minière, les fonctionnaires régionaux et les acheteurs frontaliers.",
    localAnchors: ['Grand Marché de Gaoua', 'Secteur 1', 'Route de Batié', 'Quartier du Musée', 'Zone administrative'],
    heroSubtitle: 'Infrastructures web modernes, référencement local et acquisition client pour les entreprises, coopératives et acteurs miniers du Sud-Ouest.',
  },

  // ==========================================
  // CÔTE D'IVOIRE (10 VILLES)
  // ==========================================
  {
    slug: 'abidjan',
    name: 'Abidjan',
    countrySlug: 'cote-divoire',
    region: 'District Autonome d\'Abidjan',
    status: 'Mégapole économique de la Côte d\'Ivoire & Poumon financier de l\'UEMOA',
    population: '6 200 000+ hab.',
    historyAndGeo: "Mégalopole la plus dynamique d'Afrique de l'Ouest francophone, Abidjan (la « Perle des Lagunes ») est construite autour de la lagune Ébrié sur le golfe de Guinée. Ancienne capitale administrative de la Côte d'Ivoire, elle compte plus de 6 millions d'habitants répartis sur 10 communes urbaines (Plateau, Cocody, Yopougon, Marcory, etc.) et 4 sous-préfectures.",
    economicDossier: "Véritable poumon économique représentant à lui seul près de 60% du PIB ivoirien et 80% des recettes fiscales, Abidjan abrite le siège de la Bourse Régionale des Valeurs Mobilières (BVRM), de la Banque Africaine de Développement (BAD), des sièges régionaux de multinationales, et le Port Autonome d'Abidjan (1er port thonier et à conteneurs de la sous-région). C'est également la capitale incontestée de la Tech, de la publicité et de la mode en Afrique de l'Ouest.",
    digitalChallenges: "À Abidjan, la concurrence digitale est féroce. Pour émerger, les entreprises ne peuvent plus se contenter de simples pages Facebook : elles doivent impérativement s'équiper de plateformes web Next.js 16 capables d'encaisser des millions de requêtes, d'un tracking publicitaire serveur CAPI anti-déperdition et d'agents IA pour gérer le flux massif de messages WhatsApp.",
    localAnchors: ['Le Plateau', 'Cocody Deux Plateaux', 'Marcory Zone 4', 'Yopougon', 'Treichville', 'Riviera Palmeraie', 'Koumassi', 'Port-Bouët'],
    heroSubtitle: 'Ingénierie web Next.js 16 d\'élite, tracking serveur Meta/TikTok CAPI, tunnels WhatsApp Wave et agents IA pour les marques prestigieuses d\'Abidjan.',
  },
  {
    slug: 'bouake',
    name: 'Bouaké',
    countrySlug: 'cote-divoire',
    region: 'Gbêkê',
    status: 'Deuxième ville la plus peuplée de Côte d\'Ivoire & Carrefour commercial central',
    population: '900 000+ hab.',
    historyAndGeo: "Deuxième métropole de Côte d'Ivoire par sa population et chef-lieu de la région du Gbêkê, Bouaké est située en plein centre du pays à 350 km au nord d'Abidjan. Fondée au début du XIXe siècle par les Baoulés Gossan sous l'autorité de la reine Pokou, Bouaké est le nœud ferroviaire historique de la ligne du chemin de fer Sitarail reliant Abidjan à Ouagadougou.",
    economicDossier: "Gigantesque carrefour marchand et de redistribution vers le Nord ivoirien, le Burkina Faso et le Mali, Bouaké est le siège d'industries textiles historiques (Établissements Gonfreville), d'usines de décorticage et de transformation de noix de cajou, et du plus grand marché de gros vivrier de la région (le Grand Marché de Gros de Bouaké).",
    digitalChallenges: "Les commerçants grossistes et distributeurs de Bouaké vendent traditionnellement par téléphone et carnets. L'intégration de tunnels de vente WhatsApp synchronisés avec Wave et Orange Money leur permet de multiplier leur volume de ventes en éliminant les erreurs de facturation et les impayés.",
    localAnchors: ['Quartier Commerce', 'Nimbo', 'Koko', 'Ahougnanssou', 'Broukro', 'Dar-es-Salam', 'Belle-Ville', 'Marché de Gros'],
    heroSubtitle: 'Création de sites web haute conversion, tunnels de vente WhatsApp et publicité ciblée pour les grossistes, industriels et PME de Bouaké.',
  },
  {
    slug: 'yamoussoukro',
    name: 'Yamoussoukro',
    countrySlug: 'cote-divoire',
    region: 'Bélier',
    status: 'Capitale politique et administrative de la Côte d\'Ivoire & Pôle académique',
    population: '380 000+ hab.',
    historyAndGeo: "Capitale politique et administrative de la Côte d'Ivoire depuis 1983, Yamoussoukro est la ville natale du premier président ivoirien Félix Houphouët-Boigny, située à 240 km au nord-ouest d'Abidjan. Célèbre dans le monde entier pour la monumentale Basilique Notre-Dame de la Paix (plus grand édifice chrétien au monde), la cité est caractérisée par ses larges avenues bordées de manguiers et son lac aux caïmans sacrés.",
    economicDossier: "Pôle d'excellence intellectuelle et technologique nationale, Yamoussoukro abrite l'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB) formant l'élite des ingénieurs d'Afrique francophone. C'est également un centre de tourisme institutionnel, de congrès internationaux, de fondations de paix et de services étatiques en expansion continue.",
    digitalChallenges: "Les institutions académiques, fondations et acteurs hôteliers de Yamoussoukro doivent projeter une image de marque irréprochable sur le plan international : portails de candidatures sécurisés, plateformes d'apprentissage e-learning robustes et formulaires de réservation haut de gamme.",
    localAnchors: ['Zone INP-HB', 'Fondation Félix Houphouët-Boigny', 'Quartier Habitat', 'Quartier Millionnaire', '220 Logements', 'Aéroport international'],
    heroSubtitle: 'Portails web de prestige, plateformes éducatives Next.js 16 et systèmes d\'automatisation par IA pour les institutions et acteurs de Yamoussoukro.',
  },
  {
    slug: 'san-pedro',
    name: 'San-Pédro',
    countrySlug: 'cote-divoire',
    region: 'San-Pédro',
    status: 'Deuxième port de Côte d\'Ivoire & Premier port mondial d\'exportation de cacao',
    population: '410 000+ hab.',
    historyAndGeo: "Chef-lieu de la région de San-Pédro et du district du Bas-Sassandra, San-Pédro est une ville portuaire majeure située sur le littoral atlantique au sud-ouest de la Côte d'Ivoire, à 350 km d'Abidjan par la route côtière. Construite dans les années 1960 dans le cadre du plan d'aménagement du Sud-Ouest, elle est devenue en quelques décennies la deuxième puissance économique maritime du pays.",
    economicDossier: "Véritable titan économique mondial, San-Pédro est le premier port exportateur mondial de fèves de cacao (plus d'un million de tonnes traitées par an). La ville concentre de grands complexes de broyage de cacao, des cimenteries, des usines de transformation du caoutchouc (hévéa), de l'huile de palme et de sciage de bois, ainsi qu'un transit maritime stratégique pour le Mali, la Guinée et le Libéria.",
    digitalChallenges: "L'écosystème maritime et industriel de San-Pédro (transitaires, consignataires, chargeurs, sociétés de manutention) a un besoin impératif de portails B2B sécurisés, de suivi logistique de cargaisons en temps réel et de vitrines digitales multilingues de haut standing.",
    localAnchors: ['Zone Portuaire de San-Pédro', 'Quartier Balmer', 'Cité', 'Bardot', 'Poro', 'Axe de la Côtière'],
    heroSubtitle: 'Plateformes logicielles B2B, sites Next.js sécurisés et identité numérique d\'autorité pour les géants maritimes et industriels de San-Pédro.',
  },
  {
    slug: 'korhogo',
    name: 'Korhogo',
    countrySlug: 'cote-divoire',
    region: 'Poro',
    status: 'Capitale historique et économique du Grand Nord ivoirien',
    population: '460 000+ hab.',
    historyAndGeo: "Capitale de la région du Poro et du district des Savanes, Korhogo est située à 600 km au nord d'Abidjan au pied du mont Korhogo. Cité historique fondée au XIVe siècle par Nangui Soro, ville du patriarche Péléforo Gbon Coulibaly, Korhogo est le sanctuaire spirituel et culturel du peuple Sénoufo et le cœur économique du septentrion ivoirien.",
    economicDossier: "Pôle agricole de premier plan (bassin cotonnier avec les usines de la Compagnie Ivoirienne pour le Développement des Textiles, anacarde, mangues, céréales), Korhogo connaît un boom économique sans précédent grâce à l'exploitation des mines d'or industrielles de Tongon. C'est également un centre d'artisanat mondialement réputé (toiles peintes de Fakaha, poteries de Koni, perles de Kapélé).",
    digitalChallenges: "Les artisans et groupements de producteurs de Korhogo ont besoin de vendre directement sans intermédiaires prédateurs. La création de boutiques en ligne et de tunnels de commande WhatsApp leur permet de toucher la clientèle d'Abidjan et de l'étranger avec des marges doublées.",
    localAnchors: ['Grand Marché de Korhogo', 'Quartier Koko', 'Soba', 'Zone artisanale de Fakaha', 'Aéroport de Korhogo'],
    heroSubtitle: 'Accélérez votre expansion commerciale à Korhogo avec des sites vitrines Next.js 16, des tunnels de vente WhatsApp et la publicité Meta Ads ciblée.',
  },
  {
    slug: 'daloa',
    name: 'Daloa',
    countrySlug: 'cote-divoire',
    region: 'Haut-Sassandra',
    status: 'Troisième ville de Côte d\'Ivoire & Cœur historique de la boucle du cacao',
    population: '440 000+ hab.',
    historyAndGeo: "Troisième ville la plus peuplée de Côte d'Ivoire, Daloa est le chef-lieu de la région du Haut-Sassandra et du district du Sassandra-Marahoué, située au centre-ouest du pays à 140 km de Yamoussoukro. Surnommée la « Cité des Antilopes », Daloa est un carrefour routier névralgique reliant Abidjan, Man et les zones forestières de l'Ouest ivoirien.",
    economicDossier: "Épicentre historique du négoce cacaoyer et caféier en Côte d'Ivoire, Daloa concentre des centaines de coopératives agricoles, des centrales d'achat de produits tropicaux et des réseaux de transporteurs interurbains massifs. Son commerce général de gros et demi-gros approvisionne tout l'Ouest ivoirien.",
    digitalChallenges: "Les distributeurs d'engrais, négociants agricoles et commerces de Daloa ont besoin de publicité géolocalisée sur Facebook et TikTok pour capter les exploitants agricoles et commerçants des départements voisins (Issia, Vavoua, Zoukougbeu).",
    localAnchors: ['Quartier Commerce', 'Tazibouo', 'Lobia', 'Gbeuliville', 'Grande Gare routière', 'Marché Central'],
    heroSubtitle: 'Outils digitaux de haute conversion, tunnels de vente et campagnes publicitaires ciblées pour les distributeurs et entreprises de Daloa.',
  },
  {
    slug: 'man',
    name: 'Man',
    countrySlug: 'cote-divoire',
    region: 'Tonkpi',
    status: 'Métropole des 18 Montagnes & Carrefour de l\'Ouest ivoirien',
    population: '260 000+ hab.',
    historyAndGeo: "Chef-lieu de la région du Tonkpi et du district des Montagnes, Man est située à 580 km au nord-ouest d'Abidjan dans une cuvette montagneuse spectaculaire entourée par les monts Tonkoui, Toura et la célèbre Dent de Man. Célèbre pour ses ponts de lianes sacrés de Lieupleu, ses cascades de Zadepleu et sa forêt de singes sacrés de Gbêpleu, Man est la perle touristique de l'Ouest.",
    economicDossier: "Centre agro-industriel prospère (café des montagnes de haute réputation, cacao, manioc, riz pluvial), Man est également un carrefour d'échanges frontaliers stratégique à proximité immédiate de la Guinée et du Libéria. L'écotourisme et l'hôtellerie représentent un potentiel économique majeur en pleine renaissance.",
    digitalChallenges: "Les opérateurs hôteliers, écotouristiques et les coopératives de café de Man ont besoin de visibilité internationale sur Google Maps et de plateformes de réservation fluides connectées aux paiements Mobile Money (Wave, Orange Money).",
    localAnchors: ['Grand Marché de Man', 'Quartier Doyagouiné', 'Kôkô', 'Sari', 'Route des Cascades de Zadepleu', 'Quartier Lycée'],
    heroSubtitle: 'Développement web Next.js 16, référencement local Google et automatisation WhatsApp pour les acteurs économiques et touristiques de Man.',
  },
  {
    slug: 'gagnoa',
    name: 'Gagnoa',
    countrySlug: 'cote-divoire',
    region: 'Gôh',
    status: 'Capitale du Gôh & Centre agro-économique du Centre-Ouest ivoirien',
    population: '290 000+ hab.',
    historyAndGeo: "Chef-lieu de la région du Gôh et du district du Gôh-Djiboua, Gagnoa est située à 290 km au nord-ouest d'Abidjan en zone de forêt dense humide. Fondée au XIXe siècle en pays Bété, la ville est un pôle d'équilibre démographique et agricole majeur du Centre-Ouest de la Côte d'Ivoire.",
    economicDossier: "Centre agricole prospère réputé pour sa production vivrière massive (banane plantain, manioc, maïs, riz) qui alimente les marchés d'Abidjan, Gagnoa est également un bassin historique de cacao, de café et de plantations d'hévéa. La ville accueille de nombreuses concessions de matériel agricole et un tissu dense de commerces de détail.",
    digitalChallenges: "L'essor de la téléphonie mobile à Gagnoa transforme les habitudes : les jeunes commerçants et PME ont besoin de tunnels de vente WhatsApp simples et percutants pour commercialiser leurs produits directement auprès des consommateurs urbains.",
    localAnchors: ['Quartier Babré', 'Garboutouo', 'Soleil', 'Dioulabougou', 'Grand Marché de Gagnoa', 'Zone industrielle'],
    heroSubtitle: 'Boostez vos ventes à Gagnoa grâce à des tunnels de conversion WhatsApp, des boutiques en ligne et des sites web optimisés pour smartphone.',
  },
  {
    slug: 'soubre',
    name: 'Soubré',
    countrySlug: 'cote-divoire',
    region: 'Nawa',
    status: 'Capitale hydroélectrique et cacaoyère de la Nawa',
    population: '280 000+ hab.',
    historyAndGeo: "Chef-lieu de la région de la Nawa et du district du Bas-Sassandra, Soubré est située au sud-ouest de la Côte d'Ivoire sur les rives du fleuve Sassandra à 130 km au nord de San-Pédro. La ville est mondialement connue pour ses impressionnantes chutes de la Nawa et pour abriter le plus grand barrage hydroélectrique de Côte d'Ivoire (275 MW).",
    economicDossier: "Première région productrice de cacao de Côte d'Ivoire avec plus de 20% de la récolte nationale, la région de Soubré génère des flux financiers massifs transitant par des centaines de coopératives agricoles. Le complexe hydroélectrique a également catalysé l'arrivée de sous-traitants techniques et dynamisé le secteur des services et de l'immobilier.",
    digitalChallenges: "Les coopératives agricoles de Soubré gèrent des milliards de FCFA mais manquent souvent d'outils de gestion modernes : besoin de plateformes sécurisées pour tracer les paiements des planteurs, automatiser la communication avec les sociétaires et asseoir leur crédibilité auprès des chocolatiers internationaux.",
    localAnchors: ['Centre-ville de Soubré', 'Zone du Barrage hydroélectrique', 'Quartier Résidentiel', 'Grand Marché', 'Route de San-Pédro'],
    heroSubtitle: 'Modernisation numérique, plateformes fiables et automatisation des processus pour les grandes coopératives et entreprises de Soubré.',
  },
  {
    slug: 'grand-bassam',
    name: 'Grand-Bassam',
    countrySlug: 'cote-divoire',
    region: 'Sud-Comoé',
    status: 'Première capitale historique de Côte d\'Ivoire & Cité balnéaire UNESCO',
    population: '135 000+ hab.',
    historyAndGeo: "Située sur le littoral atlantique à 40 km à l'est d'Abidjan entre mer et lagune Ouladine, Grand-Bassam a été la première capitale coloniale de la Côte d'Ivoire (1893-1900). Classée au patrimoine mondial de l'UNESCO en 2012 pour son architecture coloniale exceptionnelle du Quartier France, la cité est la destination balnéaire et culturelle préférée des Ivoiriens et des touristes internationaux.",
    economicDossier: "Haut-lieu du tourisme premium (hôtellerie de luxe, complexes balnéaires, restaurants gastronomiques), Grand-Bassam abrite également le Centre International des Métiers d'Art et d'Artisanat (CIMAA). La ville accueille le Village des Technologies de l'Information et de la Biotechnologie (VITIB), une zone franche d'État dédiée aux entreprises technologiques et aux data centers.",
    digitalChallenges: "L'hôtellerie et les restaurants de Grand-Bassam doivent attirer et convertir la clientèle aisée d'Abidjan qui planifie ses sorties du week-end sur mobile : nécessité absolue de sites web ultra-élégants, d'un SEO local optimisé et de campagnes publicitaires ciblées sur Instagram et TikTok.",
    localAnchors: ['Quartier France (UNESCO)', 'Boulevard du front de mer', 'Zone franche VITIB', 'Ancien port colonial', 'Quartier Impérial'],
    heroSubtitle: 'Sites web d\'exception, systèmes de réservation directe et marketing digital haut de gamme pour les établissements prestigieux de Grand-Bassam.',
  },

  // ==========================================
  // MALI (4 VILLES)
  // ==========================================
  {
    slug: "bamako",
    name: "Bamako",
    countrySlug: "mali",
    region: "District de Bamako",
    status: "Capitale politique et métropole économique du Mali",
    population: "3 000 000+ hab.",
    historyAndGeo: "Située sur les deux rives du fleuve Niger dans le sud-ouest du pays, Bamako (la « Cité aux Trois Caïmans ») est la plus grande métropole du Mali et l'une des villes d'Afrique subsaharienne dont la croissance urbaine est la plus rapide. Cité historique fondée au XVIe siècle par les Niaré, elle est dominée par la colline du Point G et le palais présidentiel de Koulouba.",
    economicDossier: "Poumon financier et commercial concentrant plus de la moitié de l'activité économique malienne, Bamako accueille les sièges des banques (BDM-SA, BMS, BNDA, Coris Bank Mali), des opérateurs de télécoms (Orange Mali, Moov Africa), le Grand Marché central et un tissu d'entreprises de services et d'import-export extrêmement vigoureux.",
    digitalChallenges: "À Bamako, les affaires se concluent sur WhatsApp et se règlent par Orange Money. Les entreprises bamakoises ont un besoin impératif de professionnaliser leurs tunnels de vente, de moderniser leurs sites vitrines et de mettre en place des agents IA pour traiter des volumes massifs de messages sans temps mort.",
    localAnchors: ["Grand Marché de Bamako", "Badalabougou", "Hamdallaye ACI 2000", "Hippodrome", "Yirimadio", "Koulouba", "Quartier du Fleuve"],
    heroSubtitle: "Ingénierie web Next.js 16 d'élite, tunnels WhatsApp Mobile Money et automatisation IA pour les entreprises et marques de Bamako.",
  },
  {
    slug: "sikasso",
    name: "Sikasso",
    countrySlug: "mali",
    region: "Sikasso",
    status: "Deuxième ville la plus peuplée du Mali & Capitale du Kénédougou",
    population: "450 000+ hab.",
    historyAndGeo: "Chef-lieu de la région du Kénédougou, Sikasso est située à 375 km au sud-est de Bamako, à proximité immédiate des frontières du Burkina Faso et de la Côte d'Ivoire. Célèbre pour son tata défensif historique érigé par le roi Tiéba Traoré, la ville jouit d'un climat soudanien très arrosé qui en fait le verger et le grenier agricole du Mali.",
    economicDossier: "Carrefour commercial stratégique incontournable reliant le port d'Abidjan à Bamako et Bobo-Dioulasso, Sikasso est le premier pôle de production maraîchère, fruitière (mangues), céréalière et cotonnière du Mali. Les centrales d'achat et transporteurs y brassent des volumes de fret considérables au quotidien.",
    digitalChallenges: "Les négociants et coopératives agricoles de Sikasso manquent souvent de visibilité pour traiter directement avec les importateurs ivoiriens et burkinabè : mise en place de catalogues numériques légers et de tunnels de commande WhatsApp sécurisés.",
    localAnchors: ["Grand Marché de Sikasso", "Quartier Mancourani", "Wayerma", "Axe routier Bobo-Dioulasso", "Zone industrielle du Kénédougou"],
    heroSubtitle: "Plateformes web rapides, tunnels de vente pour grossistes et publicité ciblée au carrefour commercial de Sikasso.",
  },
  {
    slug: "segou",
    name: "Ségou",
    countrySlug: "mali",
    region: "Ségou",
    status: "Cité des Balanzans & Pôle agro-industriel de l'Office du Niger",
    population: "220 000+ hab.",
    historyAndGeo: "Capitale historique du grand royaume Bambara de Ségou fondée au XVIIe siècle par Biton Coulibaly, Ségou est située sur la rive droite du fleuve Niger à 240 km au nord-est de Bamako. Célèbre pour son Festival sur le Niger et son architecture coloniale en banco, c'est un pôle de culture et d'histoire respecté.",
    economicDossier: "Cœur agro-industriel de la riziculture et du sucre au Mali grâce aux aménagements géants de l'Office du Niger, Ségou abrite la Compagnie Malienne des Textiles (COMATEX), des usines de décorticage de riz, des huileries et un pôle artisanal de poterie réputé.",
    digitalChallenges: "Les acteurs agro-industriels et coopératives rizicoles de Ségou ont besoin d'outils digitaux pour gérer leurs flux d'approvisionnement, certifier leurs stocks et valoriser leurs productions auprès des distributeurs de la sous-région.",
    localAnchors: ["Grand Marché de Ségou", "Quartier Angoulême", "Ségou Coura", "Bord du fleuve Niger", "Zone Office du Niger"],
    heroSubtitle: "Solutions logicielles, communication digitale et tunnels de vente pour les entreprises agro-industrielles et coopératives de Ségou.",
  },
  {
    slug: "mopti",
    name: "Mopti",
    countrySlug: "mali",
    region: "Mopti",
    status: "La Venise du Mali & Carrefour fluvial du confluent Niger-Bani",
    population: "180 000+ hab.",
    historyAndGeo: "Bâtie au confluent du fleuve Niger et de la rivière Bani à 640 km de Bamako, Mopti est surnommée la « Venise du Mali » pour ses îles fluviales et ses digues. Grand port de commerce fluvial et porte d'accès historique au pays Dogon, Mopti est l'un des carrefours les plus pittoresques et animés d'Afrique de l'Ouest.",
    economicDossier: "Premier port de pêche fluviale et de séchage du poisson du Mali, grand marché d'élevage ovin et bovin sahélien, et centre d'artisanat traditionnel (couvertures peules Khasa, bijoux touaregs). Les pinasses marchandes y relient Tombouctou et Gao en permanence.",
    digitalChallenges: "Les négociants de Mopti commercent sur de très longues distances avec des liaisons terrestres complexes : besoin absolu d'outils de commande à distance par messagerie WhatsApp et sécurisation des paiements par Mobile Money.",
    localAnchors: ["Port de pêche de Mopti", "Grand Marché", "Sévaré", "Quartier Komoguel", "Mosquée de Mopti"],
    heroSubtitle: "Tunnels transactionnels WhatsApp, sites vitrines modernes et paiements mobiles pour les commerçants et négociants de Mopti et Sévaré.",
  },

  // ==========================================
  // CAMEROUN (4 VILLES)
  // ==========================================
  {
    slug: "douala",
    name: "Douala",
    countrySlug: "cameroun",
    region: "Littoral",
    status: "Capitale économique du Cameroun & Premier port d'Afrique Centrale",
    population: "3 800 000+ hab.",
    historyAndGeo: "Située sur l'estuaire du fleuve Wouri au bord de l'océan Atlantique, Douala est la plus grande métropole du Cameroun et le moteur économique incontesté de l'Afrique Centrale. Ville d'affaires cosmopolite et dynamique, elle concentre la grande majorité des sièges industriels et bancaires du pays.",
    economicDossier: "Le Port Autonome de Douala traite plus de 85% du commerce extérieur camerounais et dessert les pays enclavés voisins (Tchad, Centrafrique). La ville abrite de puissantes zones industrielles (Bassa, Bonabéri), des brasseries, des cimenteries, des multinationales pétrolières et une scène entrepreneuriale tech d'élite.",
    digitalChallenges: "Marché ultra-compétitif : les entreprises de Douala doivent optimiser leurs coûts d'acquisition client par la publicité Meta/TikTok Ads, sécuriser leurs ventes avec MTN Mobile Money et Orange Money, et adopter des architectures Next.js 16 pour surclasser la concurrence locale.",
    localAnchors: ["Akwa (Quartier d'affaires)", "Bonanjo (Zone administrative)", "Bonapriso", "Bassa", "Bonabéri", "Makepe", "Deido"],
    heroSubtitle: "Ingénierie web Next.js 16, tracking publicitaire serveur CAPI et automatisation des ventes pour les leaders économiques de Douala.",
  },
  {
    slug: "yaounde",
    name: "Yaoundé",
    countrySlug: "cameroun",
    region: "Centre",
    status: "Capitale politique et siège des institutions de la République du Cameroun",
    population: "3 200 000+ hab.",
    historyAndGeo: "Surnommée la « Cité aux Sept Collines », Yaoundé est la capitale politique du Cameroun et le chef-lieu de la région du Centre, située au cœur du plateau camerounais à 250 km à l'est de Douala. C'est le siège de la Présidence de la République (Palais de l'Unité), des ministères et des ambassades.",
    economicDossier: "Centre névralgique de la décision publique et des investissements d'État, Yaoundé concentre le secteur tertiaire administratif, les représentations diplomatiques, de grandes universités (Université de Yaoundé I & II), des sièges d'organismes sous-régionaux (BEAC) et des centres de recherche d'excellence.",
    digitalChallenges: "Les ministères, grands comptes et cabinets de conseil de Yaoundé exigent des plateformes web institutionnelles de très haute sécurité, la digitalisation de leurs processus administratifs et des outils d'information fiables pour les usagers.",
    localAnchors: ["Bastos (Zone diplomatique)", "Centre administratif", "Mvan", "Biyem-Assi", "Omnisports", "Mokolo", "Nlongkak"],
    heroSubtitle: "Portails institutionnels Next.js 16 de prestige, conformité et automatisation par IA pour les institutions et entreprises de Yaoundé.",
  },
  {
    slug: "bafoussam",
    name: "Bafoussam",
    countrySlug: "cameroun",
    region: "Ouest",
    status: "Capitale des Hauts-Plateaux de l'Ouest camerounais & Cité marchande Bamiléké",
    population: "420 000+ hab.",
    historyAndGeo: "Chef-lieu de la région de l'Ouest et du département de la Mifi, Bafoussam est située à 1 500 mètres d'altitude au cœur du pays Bamiléké, à 300 km au nord-ouest de Yaoundé. Célèbre pour ses chefferies traditionnelles séculaires et son relief volcanique fertile, c'est le berceau d'une puissante tradition d'entrepreneuriat.",
    economicDossier: "Grand centre de négoce du café arabica et robusta, pôle maraîcher et avicole majeur approvisionnant Douala et Yaoundé, Bafoussam est également la base arrière financière de nombreux grands capitaines d'industrie et commerçants de la diaspora Bamiléké.",
    digitalChallenges: "Les commerçants et coopératives agricoles de Bafoussam ont tout à gagner à automatiser la distribution de leurs marchandises vers les grands centres urbains via des tunnels WhatsApp synchronisés avec les paiements mobiles.",
    localAnchors: ["Marché A", "Marché B", "Quartier Djeleng", "Zone artisanale", "Route de Foumban", "Chefferie de Bafoussam"],
    heroSubtitle: "Tunnels de vente WhatsApp, boutiques e-commerce et publicité digitale pour les entrepreneurs et négociants de Bafoussam.",
  },
  {
    slug: "garoua",
    name: "Garoua",
    countrySlug: "cameroun",
    region: "Nord",
    status: "Capitale du Grand Nord camerounais & Port fluvial sur la Bénoué",
    population: "360 000+ hab.",
    historyAndGeo: "Chef-lieu de la région du Nord et de la province de la Bénoué, Garoua est située sur les rives de la rivière Bénoué au pied du mont Tinguelin. Fondée par le chef peul Ardo Bouba au début du XIXe siècle, c'est la métropole commerciale et culturelle de tout le septentrion camerounais.",
    economicDossier: "Siège social historique de la Société de Développement du Coton (SODECOTON), Garoua est la capitale du bassin cotonnier camerounais. C'est également un grand marché d'élevage bovin, de tannage du cuir, de filature textile (CICAM) et de transit commercial vers le Tchad et le Nigéria.",
    digitalChallenges: "Les négociants et producteurs du Grand Nord ont besoin de vitrines web fiables pour capter des débouchés à l'exportation et faciliter les commandes de bétail et de produits manufacturés avec les acheteurs du Sud.",
    localAnchors: ["Grand Marché de Garoua", "Quartier Poumpoumré", "Zone SODECOTON", "Port fluvial sur la Bénoué", "Aéroport international"],
    heroSubtitle: "Développement web, tunnels de vente et valorisation digitale pour les acteurs industriels et marchands de Garoua.",
  },

  // ==========================================
  // SENEGAL (4 VILLES)
  // ==========================================
  {
    slug: "dakar",
    name: "Dakar",
    countrySlug: "senegal",
    region: "Région de Dakar",
    status: "Capitale du Sénégal & Hub technologique et diplomatique atlantique",
    population: "3 900 000+ hab.",
    historyAndGeo: "Située sur la presqu'île du Cap-Vert, avancée la plus occidentale du continent africain dans l'océan Atlantique, Dakar est l'une des métropoles les plus influentes et cosmopolites du monde francophone. Ancienne capitale fédérale de l'AOF, dominée par le Monument de la Renaissance africaine et l'île de Gorée, c'est un carrefour mondial d'affaires et de culture.",
    economicDossier: "Hub financier et technologique majeur concentrant plus de 80% des entreprises sénégalaises, Dakar abrite le siège de la BCEAO pour l'Afrique de l'Ouest, de grandes banques, le pôle numérique de Diamniadio, de nombreuses licornes et startups tech (Wave), ainsi que le Port Autonome de Dakar.",
    digitalChallenges: "Sur un marché dakarois hyper-connecté où les consommateurs exigent une expérience mobile fluide et des paiements Wave/Orange Money en un tap, les marques doivent impérativement adopter des sites Next.js 16 rapides et un tracking publicitaire serveur CAPI pour préserver leur rentabilité.",
    localAnchors: ["Plateau", "Almadies", "Point E", "Ngor", "Yoff", "Mermoz", "Médina", "Pôle urbain de Diamniadio"],
    heroSubtitle: "Ingénierie web Next.js 16 d'élite, tracking publicitaire CAPI et agents IA conversationnels pour les marques prestigieuses de Dakar.",
  },
  {
    slug: "thies",
    name: "Thiès",
    countrySlug: "senegal",
    region: "Thiès",
    status: "Deuxième pôle urbain du Sénégal & Cité du rail et des tapisseries",
    population: "400 000+ hab.",
    historyAndGeo: "Située à 70 km à l'est de Dakar au carrefour des axes routiers et ferroviaires menant au reste du Sénégal et au Mali, Thiès est la deuxième agglomération du pays. Cité historique des cheminots marquée par la grande grève de 1947, elle est également renommée pour les Manufactures Sénégalaises des Arts Décoratifs (tapisseries de Thiès).",
    economicDossier: "Grand pôle industriel et minier (mines de phosphates de Taïba, cimenteries Dangote et Vicat), carrefour de transport ferroviaire et routier, et pôle universitaire d'excellence (École Polytechnique de Thiès, Université Iba Der Thiam).",
    digitalChallenges: "Les PME et artisans d'art de Thiès ont l'opportunité de capter la clientèle de Dakar et de la diaspora en automatisant leurs ventes via des tunnels WhatsApp et des boutiques Next.js légères.",
    localAnchors: ["Grand Marché de Thiès", "Quartier Dixième", "Cité Ibrahima Sarr", "Zone industrielle", "Route de Tivaouane"],
    heroSubtitle: "Accélération commerciale, plateformes web modernes et tunnels WhatsApp pour les entreprises et artisans de Thiès.",
  },
  {
    slug: "saint-louis",
    name: "Saint-Louis",
    countrySlug: "senegal",
    region: "Saint-Louis",
    status: "Capitale historique du Sénégal & Cité fluviale classée UNESCO",
    population: "260 000+ hab.",
    historyAndGeo: "Ancienne capitale du Sénégal et de l'Afrique Occidentale Française, Saint-Louis (Ndar) est bâtie sur une île de l'embouchure du fleuve Sénégal, reliée au continent par le célèbre pont Faidherbe. Classée au patrimoine mondial de l'UNESCO pour son architecture coloniale et son festival international de jazz, c'est une cité culturelle majeure.",
    economicDossier: "Premier pôle de pêche artisanale et industrielle du nord sénégalais, riche bassin agricole dans la vallée du fleuve (riz, canne à sucre de la CSS à Richard-Toll), et centre névralgique de l'exploitation du gisement gazier géant transfrontalier Grand Tortue Ahmeyim (GTA).",
    digitalChallenges: "Les acteurs hôteliers, écotouristiques et les entreprises de services du pôle gazier de Saint-Louis doivent moderniser leur présence web pour répondre aux standards internationaux et capter les flux d'affaires.",
    localAnchors: ["Île de Saint-Louis (UNESCO)", "Quartier Guet Ndar", "Sor", "Pointe Sud", "Zone aéroportuaire"],
    heroSubtitle: "Portails web d'autorité, systèmes de réservation et marketing digital pour les établissements touristiques et industriels de Saint-Louis.",
  },
  {
    slug: "touba",
    name: "Touba",
    countrySlug: "senegal",
    region: "Diourbel",
    status: "Cité sainte du Mouridisme & Métropole économique autonome",
    population: "1 100 000+ hab.",
    historyAndGeo: "Fondée en 1887 par le vénéré Cheikh Ahmadou Bamba Khadimou Rassoul, Touba est le sanctuaire spirituel de la confrérie mouride et la deuxième agglomération la plus peuplée du Sénégal. Dominée par sa majestueuse Grande Mosquée aux minarets étincelants, la ville sainte accueille chaque année le Grand Magal rassemblant plus de 4 millions de pèlerins.",
    economicDossier: "Bénéficiant d'un statut particulier de zone franche coutumière, Touba est un géant économique et commercial : grand négoce d'importation, distribution de denrées alimentaires, vente de matériel électronique, quincaillerie et transferts de fonds massifs de la diaspora mouride établie en Italie, en Espagne et aux USA.",
    digitalChallenges: "Le commerce à Touba est extrêmement réactif et s'effectue principalement par messagerie mobile. La mise en place de catalogues numériques WhatsApp connectés aux paiements Wave et Orange Money permet aux négociants de décupler leurs volumes sans bureaucratie.",
    localAnchors: ["Grande Mosquée de Touba", "Marché Ocass", "Marché Gouye Koura", "Darou Khoudoss", "Alia"],
    heroSubtitle: "Tunnels de vente WhatsApp Mobile Money et solutions digitales sur-mesure pour les commerçants et importateurs de Touba.",
  },

  // ==========================================
  // TOGO (3 VILLES)
  // ==========================================
  {
    slug: "lome",
    name: "Lomé",
    countrySlug: "togo",
    region: "Maritime",
    status: "Capitale du Togo & Port naturel en eau profonde de l'Afrique de l'Ouest",
    population: "2 200 000+ hab.",
    historyAndGeo: "Située sur le littoral du golfe de Guinée à la frontière immédiate du Ghana, Lomé est la capitale politique, économique et culturelle du Togo. Ville côtière dynamique aux plages bordées de cocotiers, elle est réputée pour ses Nana Benz historiques et son rôle central dans le négoce régional.",
    economicDossier: "Grâce au Port Autonome de Lomé (PAL), seul port naturel en eau profonde de la sous-région capable d'accueillir des navires de 14 000 EVP, Lomé est le premier port de transbordement d'Afrique de l'Ouest et le débouché naturel du Burkina Faso, du Niger et du Mali. Elle abrite les sièges de grands groupes bancaires (Ecobank, Oragroup, BOAD, BIDC).",
    digitalChallenges: "Les transitaires, négociants, banques et commerces de Lomé évoluent dans un hub d'échanges intense. Le déploiement de sites Next.js ultra-rapides et de tunnels de vente WhatsApp multidevises est une condition essentielle pour capturer les clients sahéliens et togolais.",
    localAnchors: ["Grand Marché de Lomé (Assigamé)", "Zone portuaire PAL", "Bè", "Tokoin", "Quartier administratif", "Nyékonakpoè", "Aéroport Gnassingbé Eyadéma"],
    heroSubtitle: "Ingénierie web Next.js 16, plateformes logistiques et tunnels de vente WhatsApp pour les entreprises et négociants de Lomé.",
  },
  {
    slug: "kara",
    name: "Kara",
    countrySlug: "togo",
    region: "Kara",
    status: "Capitale économique et administrative du Nord togolais",
    population: "130 000+ hab.",
    historyAndGeo: "Chef-lieu de la région de la Kara, située à 410 km au nord de Lomé au pied des monts Défalé et du massif Kabyè, Kara est la grande métropole du septentrion togolais. Traversée par la rivière Kara, la ville est réputée pour les luttes traditionnelles Evala et la proximité du site Koutammakou (patrimoine mondial UNESCO).",
    economicDossier: "Carrefour commercial stratégique sur la route nationale RN1 reliant Lomé à Ouagadougou et Cinkansé, Kara abrite une université nationale (Université de Kara), des usines d'égrenage de coton, des brasseries et des marchés de produits vivriers et artisanaux.",
    digitalChallenges: "Les distributeurs et PME de Kara ont besoin de visibilité sur l'axe commercial Lomé-Ouagadougou pour capter les flux d'affaires transfrontaliers et proposer des commandes directes par messagerie.",
    localAnchors: ["Grand Marché de Kara", "Zone Universitaire", "Quartier Chaminade", "Lama", "Axe routier RN1 vers le Burkina"],
    heroSubtitle: "Sites web professionnels, tunnels de commande WhatsApp et publicité digitale pour les PME et commerces de Kara.",
  },
  {
    slug: "sokode",
    name: "Sokodé",
    countrySlug: "togo",
    region: "Centrale",
    status: "Deuxième ville du Togo & Carrefour culturel et marchand Kotokoli",
    population: "125 000+ hab.",
    historyAndGeo: "Chef-lieu de la région Centrale et de la préfecture de Tchaoudjo, Sokodé est située à 340 km au nord de Lomé à mi-chemin entre le littoral et les frontières sahéliennes. Cité historique du peuple Kotokoli (Tem), renommée pour sa fête des couteaux (Gadoa), c'est une ville marchande et d'artisanat textile réputée.",
    economicDossier: "Centre commercial majeur pour les produits agricoles (igname, maïs, manioc, coton), artisanat du tissage traditionnel et élevage bovin. C'est également un carrefour logistique incontournable sur le corridor de transport reliant le port de Lomé au Burkina Faso.",
    digitalChallenges: "Les négociants et transporteurs de Sokodé ont besoin d'outils digitaux pour fluidifier les commandes, sécuriser les transferts de fonds et toucher une clientèle au-delà de la région centrale.",
    localAnchors: ["Grand Marché de Sokodé", "Quartier Kouloundè", "Komah", "Didaourè", "Route Nationale 1"],
    heroSubtitle: "Tunnels de vente WhatsApp, boutiques en ligne et présence web moderne pour les acteurs économiques de Sokodé.",
  },

  // ==========================================
  // RDC (4 VILLES)
  // ==========================================
  {
    slug: "kinshasa",
    name: "Kinshasa",
    countrySlug: "rdc",
    region: "Kinshasa",
    status: "Capitale de la RDC & Plus grande mégapole francophone du monde",
    population: "15 000 000+ hab.",
    historyAndGeo: "Bâtie sur la rive gauche du majestueux fleuve Congo en face de Brazzaville, Kinshasa (la légendaire « Kin la Belle ») est la capitale de la République Démocratique du Congo. Avec plus de 15 millions d'habitants, elle a dépassé Paris pour devenir la plus grande agglomération francophone de la planète, célèbre pour son énergie culturelle, sa rumba et son dynamisme commercial sans égal.",
    economicDossier: "Cœur financier et commercial d'un marché intérieur gigantesque, Kinshasa concentre les sièges des institutions gouvernementales, des multinationales minières et télécoms (Vodacom, Orange, Airtel), de grandes banques (Rawbank, BCDC, Equity BCDC) et un secteur informel bouillonnant brassant des flux monétaires considérables.",
    digitalChallenges: "À Kinshasa, la monnaie circule en Francs congolais et en Dollars américains via le Mobile Money (M-Pesa, Orange Money, Airtel Money). Les marques et commerces kinois ont un besoin urgent de tunnels WhatsApp de vente directe pour convertir des millions de mobinautes sans friction bancaire.",
    localAnchors: ["Gombe (Quartier d'affaires)", "Limete (Zone industrielle)", "Kalamu", "Victoire", "Ngaliema", "Bandalungwa", "Kintambo", "Mont Fleuri"],
    heroSubtitle: "Ingénierie web Next.js 16 d'élite, tunnels transactionnels WhatsApp multidevises et agents IA pour les entreprises de Kinshasa.",
  },
  {
    slug: "lubumbashi",
    name: "Lubumbashi",
    countrySlug: "rdc",
    region: "Haut-Katanga",
    status: "Deuxième ville de RDC & Capitale mondiale du cuivre et du cobalt",
    population: "2 800 000+ hab.",
    historyAndGeo: "Capitale de la province du Haut-Katanga et deuxième ville de la RDC par sa population, Lubumbashi est située à l'extrême sud-est du pays à proximité de la frontière zambienne. Fondée en 1910 autour de l'exploitation minière de l'Étoile du Congo, c'est la capitale économique et industrielle du Katanga.",
    economicDossier: "Épicentre de la « Copperbelt » congolaise, Lubumbashi concentre les sièges et installations des géants miniers mondiaux extrayant le cuivre et le cobalt. La ville abrite un secteur de sous-traitance industrielle, d'ingénierie lourde, de logistique ferroviaire et de services financiers à très haut pouvoir d'achat.",
    digitalChallenges: "Les sociétés de sous-traitance minière et prestataires B2B de Lubumbashi ont impérativement besoin de portails professionnels d'autorité pour répondre aux appels d'offres internationaux des compagnies minières et se conformer aux normes de conformité.",
    localAnchors: ["Centre-ville commercial", "Quartier Golf", "Lido Campagne", "Zone industrielle", "Route de Kasumbalesa", "Aéroport de Luano"],
    heroSubtitle: "Portails B2B Next.js 16 sécurisés, identité numérique d'autorité et automatisation pour les acteurs économiques de Lubumbashi.",
  },
  {
    slug: "goma",
    name: "Goma",
    countrySlug: "rdc",
    region: "Nord-Kivu",
    status: "Capitale du Nord-Kivu & Grand carrefour des Grands Lacs africains",
    population: "1 500 000+ hab.",
    historyAndGeo: "Bâtie sur les rives spectaculaires du lac Kivu au pied du volcan en activité Nyiragongo, Goma est le chef-lieu de la province du Nord-Kivu à la frontière immédiate du Rwanda (Gisenyi). Ville résiliente et cosmopolite, c'est le pôle d'attraction commercial et logistique majeur de toute la région des Grands Lacs.",
    economicDossier: "Carrefour commercial transfrontalier intense reliant la RDC au Rwanda, à l'Ouganda et au port de Mombasa au Kenya. Goma est également la base logistique principale de dizaines d'ONG internationales, agences de l'ONU et entreprises de services d'ingénierie et d'approvisionnement.",
    digitalChallenges: "L'écosystème commercial et humanitaire de Goma nécessite des plateformes web bilingues (français/anglais), des systèmes de suivi de commandes et des canaux de communication rapides sécurisés par messagerie instantanée.",
    localAnchors: ["Quartier Les Volcans", "Himanbi", "Birere (Grand marché)", "Bord du lac Kivu", "Grande Barrière frontalière"],
    heroSubtitle: "Plateformes web Next.js 16, communication bilingue et tunnels transactionnels pour les acteurs économiques et ONG de Goma.",
  },
  {
    slug: "kolwezi",
    name: "Kolwezi",
    countrySlug: "rdc",
    region: "Lualaba",
    status: "Capitale mondiale du cobalt & Chef-lieu du Lualaba",
    population: "900 000+ hab.",
    historyAndGeo: "Chef-lieu de la province du Lualaba, située à 300 km à l'ouest de Lubumbashi, Kolwezi est l'épicentre géologique de la planète pour les métaux stratégiques. Fondée en 1937, la ville connaît un essor démographique et économique fulgurant tiré par la révolution mondiale des véhicules électriques.",
    economicDossier: "Kolwezi abrite les plus gigantesques mines de cobalt et de cuivre à ciel ouvert et souterraines du monde (Kamoto, Mutanda, Tenke Fungurume). C'est un bassin financier milliardaire en dollars où gravitent des multinationales chinoises, suisses, canadiennes et des centaines d'entreprises sous-traitantes.",
    digitalChallenges: "Les sous-traitants locaux et sociétés de services de Kolwezi doivent se digitaliser à toute vitesse pour capter les contrats des géants miniers : sites web d'autorité, conformité RSE et plateformes de gestion des recrutements.",
    localAnchors: ["Centre-ville", "Quartier Joli Site", "Manika", "Zone minière de Musonoie", "Aéroport de Kolwezi"],
    heroSubtitle: "Ingénierie web et solutions digitales d'élite pour les entreprises et sous-traitants industriels de Kolwezi.",
  },

  // ==========================================
  // NIGER (3 VILLES)
  // ==========================================
  {
    slug: "niamey",
    name: "Niamey",
    countrySlug: "niger",
    region: "Communauté Urbaine de Niamey",
    status: "Capitale de la République du Niger & Pôle sur le fleuve Niger",
    population: "1 500 000+ hab.",
    historyAndGeo: "Construite sur les deux rives du fleuve Niger dans le sud-ouest du pays, Niamey est la capitale politique, administrative et économique du Niger. Devenue capitale en 1926 à la place de Zinder, la ville est réputée pour son Musée National Boubou Hama, son artisanat d'art et sa vie culturelle sahélienne.",
    economicDossier: "Siège des institutions républicaines de l'AES, des grandes banques (BSON, Sonibank, Ecobank Niger), des sociétés minières et d'énergie, Niamey concentre l'essentiel des activités tertiaires, de transport international et de commerce de gros approvisionnant tout le pays.",
    digitalChallenges: "Les entreprises et commerçants de Niamey utilisent massivement WhatsApp et le Mobile Money (Airtel Money, Moov Flooz, Al Izza). La création de tunnels de vente automatisés leur permet de professionnaliser leurs flux de commandes et de développer leur présence en ligne.",
    localAnchors: ["Grand Marché de Niamey", "Plateau (Quartier ministériel)", "Yantala", "Terminus", "Zone industrielle", "Route de Tillabéri"],
    heroSubtitle: "Plateformes web Next.js 16, tunnels de vente WhatsApp et automatisation IA pour les entreprises et institutions de Niamey.",
  },
  {
    slug: "maradi",
    name: "Maradi",
    countrySlug: "niger",
    region: "Maradi",
    status: "Capitale économique du Niger & Cœur commercial haoussa",
    population: "400 000+ hab.",
    historyAndGeo: "Chef-lieu de la région de Maradi, située dans le sud du Niger à 540 km à l'est de Niamey, à seulement 40 km de la frontière avec le Nigéria. Berceau historique de l'État haoussa du Katsina Maradi, c'est l'un des carrefours marchands les plus dynamiques de l'espace sahélien.",
    economicDossier: "Véritable capitale économique et commerciale du Niger, Maradi entretient des flux commerciaux géants avec la mégapole nigériane de Kano. Grand bassin céréalier (mil, sorgho, maïs), pôle de production arachidière et centre de la célèbre chèvre rousse de Maradi dont le cuir est prisé dans le monde entier.",
    digitalChallenges: "Les grands négociants haoussas de Maradi opèrent dans un espace bilingue (français et haoussa) avec des volumes financiers colossaux : besoin d'outils numériques simples, fiables et mobiles pour tracer les commandes et sécuriser les transactions.",
    localAnchors: ["Grand Marché de Maradi (Dan Baou)", "Quartier Ali Dan Sofo", "Zaria", "Axe frontalier de Jibiya / Nigéria"],
    heroSubtitle: "Tunnels de vente WhatsApp, boutiques e-commerce et solutions logicielles pour les négociants et PME de Maradi.",
  },
  {
    slug: "zinder",
    name: "Zinder",
    countrySlug: "niger",
    region: "Zinder",
    status: "Capitale historique du Sultanat du Damagaram & Cité du cuir",
    population: "320 000+ hab.",
    historyAndGeo: "Ancienne capitale du Niger jusqu'en 1926 et capitale historique du puissant sultanat du Damagaram fondé au XVIIIe siècle, Zinder est située à 900 km à l'est de Niamey. Réputée pour le somptueux palais du Sultan et son quartier historique de Birni aux façades en terre sculptées de motifs traditionnels haoussa.",
    economicDossier: "Pôle commercial stratégique sur la route transsaharienne reliant l'Algérie au Nigéria, Zinder abrite une raffinerie pétrolière (SORAZ à Ollelewa), de grandes tanneries industrielles et artisanales, et un marché à bétail rayonnant sur toute la région.",
    digitalChallenges: "Les artisans tanneurs et commerçants de Zinder ont une opportunité majeure d'exporter leur maroquinerie d'excellence vers les capitales africaines et la diaspora grâce à des vitrines web de prestige.",
    localAnchors: ["Quartier historique de Birni", "Grand Marché de Zinder", "Sabon Gari", "Palais du Sultan", "Route de Kano"],
    heroSubtitle: "Visibilité web d'autorité, tunnels de commande WhatsApp et marketing digital pour les commerçants et artisans de Zinder.",
  },

  // ==========================================
  // BENIN (4 VILLES)
  // ==========================================
  {
    slug: "cotonou",
    name: "Cotonou",
    countrySlug: "benin",
    region: "Littoral",
    status: "Capitale économique du Bénin & Poumon portuaire atlantique",
    population: "1 200 000+ hab.",
    historyAndGeo: "Située sur le cordon littoral entre le lac Nokoué et l'océan Atlantique, Cotonou est la plus grande ville et le centre névralgique des affaires du Bénin. Ville cosmopolite célèbre pour son emblématique marché international de Dantokpa, l'un des plus vastes d'Afrique de l'Ouest.",
    economicDossier: "Le Port Autonome de Cotonou (PAC) est le poumon économique du pays, traitant plus de 90% du commerce extérieur béninois et servant de porte maritime essentielle pour le Niger, le Burkina Faso et l'ouest du Nigéria. Cotonou concentre les sièges bancaires, les consulats et un secteur numérique en pleine ébullition.",
    digitalChallenges: "Les entreprises cotonnoises recherchent des solutions digitales percutantes : sites web Next.js ultra-rapides, campagnes publicitaires ciblées sur Facebook et TikTok, et tunnels WhatsApp intégrant les paiements MTN MoMo et Moov Money.",
    localAnchors: ["Marché Dantokpa", "Haie Vive", "Ganhi (Quartier d'affaires)", "Cadjehoun", "Fidjrossè", "Akpakpa", "Zone portuaire"],
    heroSubtitle: "Ingénierie web Next.js 16, tunnels de vente WhatsApp et acquisition publicitaire pour les marques et entreprises de Cotonou.",
  },
  {
    slug: "porto-novo",
    name: "Porto-Novo",
    countrySlug: "benin",
    region: "Ouémé",
    status: "Capitale politique et historique de la République du Bénin",
    population: "300 000+ hab.",
    historyAndGeo: "Capitale officielle du Bénin et chef-lieu du département de l'Ouémé, Porto-Novo (Hogbonou en goun) est située à 30 km à l'est de Cotonou sur la rive de la lagune de Porto-Novo. Cité d'art et d'histoire réputée pour son architecture afro-brésilienne singulière (Grand Mosque, musée Honmè).",
    economicDossier: "Siège de l'Assemblée Nationale du Bénin et des grandes institutions républicaines, Porto-Novo est un centre administratif, artisanal et commercial vivant en symbiose avec la vallée fertile de l'Ouémé et la frontière toute proche du Nigéria.",
    digitalChallenges: "Les institutions, écoles supérieures et PME de Porto-Novo doivent renforcer leur présence en ligne pour valoriser leur patrimoine et offrir des services dématérialisés modernes.",
    localAnchors: ["Assemblée Nationale", "Marché Ouando", "Quartier Attakè", "Djassin", "Axe Cotonou-Porto-Novo"],
    heroSubtitle: "Portails institutionnels Next.js 16, plateformes éducatives et communication digitale pour les acteurs de Porto-Novo.",
  },
  {
    slug: "parakou",
    name: "Parakou",
    countrySlug: "benin",
    region: "Borgou",
    status: "Métropole économique du Grand Nord béninois & Cité des Koburu",
    population: "320 000+ hab.",
    historyAndGeo: "Chef-lieu du département du Borgou, Parakou est située à 415 km au nord de Cotonou. Fondée au XVIe siècle, c'est le cœur historique du royaume Baatonu (Bariba) et le carrefour commercial reliant le sud maritime du Bénin au Niger et au Burkina Faso.",
    economicDossier: "Terminus historique du chemin de fer de l'OCBN et pôle cotonnier majeur (usines d'égrenage de la SODECO), Parakou est un marché de redistribution céréalier et de bétail très actif. La ville accueille une université nationale de premier plan (Université de Parakou).",
    digitalChallenges: "Les commerçants grossistes et producteurs du Borgou ont besoin de tunnels de vente WhatsApp pour commercialiser leurs productions auprès des centrales d'achat de Cotonou et des pays frontaliers.",
    localAnchors: ["Grand Marché Arzéké", "Quartier Titirou", "Camp Adagbè", "Zone industrielle", "Route de Malanville"],
    heroSubtitle: "Plateformes web modernes, tunnels WhatsApp et publicité digitale pour les entreprises et grossistes de Parakou.",
  },
  {
    slug: "abomey-calavi",
    name: "Abomey-Calavi",
    countrySlug: "benin",
    region: "Atlantique",
    status: "Deuxième ville la plus peuplée du Bénin & Cité universitaire géante",
    population: "1 100 000+ hab.",
    historyAndGeo: "Située dans la périphérie nord de Cotonou en bordure du lac Nokoué, Abomey-Calavi est la commune la plus vaste et la plus dynamique démographiquement du Bénin. Ville universitaire majeure abritant le campus central de l'Université d'Abomey-Calavi (UAC) avec plus de 100 000 étudiants.",
    economicDossier: "En plein boom immobilier et technologique, Calavi est une zone résidentielle et de services en expansion fulgurante. La commune accueille une multitude de startups, d'entreprises de e-commerce, de cliniques privées et de commerces modernes.",
    digitalChallenges: "Avec une population jeune, instruite et hyper-connectée, les entreprises de Calavi ont une opportunité en or : déployer des boutiques e-commerce rapides et des formations en ligne certifiantes aux métiers du numérique.",
    localAnchors: ["Campus Universitaire UAC", "Carrefour Arconville", "Quartier Godomey", "Akassato", "Tankpè"],
    heroSubtitle: "Boutiques en ligne Next.js 16, formations certifiantes et tunnels de vente pour les entrepreneurs d'Abomey-Calavi.",
  },

  // ==========================================
  // FRANCE (3 VILLES)
  // ==========================================
  {
    slug: "paris",
    name: "Paris",
    countrySlug: "france",
    region: "Île-de-France",
    status: "Capitale de la France & Hub mondial des investissements franco-africains",
    population: "12 000 000+ hab. (Aire urbaine)",
    historyAndGeo: "Capitale de la France et carrefour culturel et financier mondial, Paris concentre le plus important écosystème d'entrepreneurs de la diaspora africaine en Europe. Les quartiers parisiens et la région Île-de-France comptent des dizaines de milliers de binationaux et professionnels maintenant des flux d'affaires constants avec l'Afrique de l'Ouest.",
    economicDossier: "Pôle économique de premier rang mondial, Paris est le siège de multinationales opérant en Afrique, de fonds d'investissement à impact, de cabinets de conseil et d'entreprises de commerce international. De nombreux membres de la diaspora y financent des projets immobiliers, agro-industriels et technologiques au Burkina, en Côte d'Ivoire et au Sénégal.",
    digitalChallenges: "Les entrepreneurs de la diaspora en France recherchent une agence technologique africaine sérieuse et rigoureuse : plateformes conformes aux standards européens (Next.js 16, RGPD, paiements Stripe) combinées à une exécution opérationnelle sur le terrain en Afrique.",
    localAnchors: ["La Défense", "Paris Centre", "Château Rouge", "Montreuil", "Saint-Denis", "Boulogne-Billancourt", "Plateau de Saclay"],
    heroSubtitle: "Plateformes Next.js 16 d'élite, tunnels transactionnels et accompagnement technologique pour les entrepreneurs et investisseurs de Paris.",
  },
  {
    slug: "lyon",
    name: "Lyon",
    countrySlug: "france",
    region: "Auvergne-Rhône-Alpes",
    status: "Deuxième pôle économique de France & Métropole industrielle et tech",
    population: "2 300 000+ hab.",
    historyAndGeo: "Capitale historique des Gaules et chef-lieu de la région Auvergne-Rhône-Alpes, Lyon est située au confluent du Rhône et de la Saône. Classée au patrimoine mondial de l'UNESCO, c'est le deuxième centre d'affaires de France et un carrefour européen incontournable.",
    economicDossier: "Pôle mondial de l'industrie pharmaceutique, de la chimie, des biotechnologies, de la gastronomie et de la Tech (French Tech Lyon), la métropole lyonnaise accueille un tissu de PME et d'entrepreneurs internationaux très actif dans les échanges avec l'Afrique francophone.",
    digitalChallenges: "Les PME lyonnaises et membres de la diaspora ont besoin de partenaires technologiques compétents pour bâtir des passerelles d'affaires directes avec l'Afrique de l'Ouest.",
    localAnchors: ["Part-Dieu (Quartier d'affaires)", "Presqu'île", "Gerland (Biopôle)", "Confluence", "Villeurbanne"],
    heroSubtitle: "Ingénierie logicielle Next.js 16 et accompagnement digital d'autorité pour les entreprises et projets de Lyon.",
  },
  {
    slug: "marseille",
    name: "Marseille",
    countrySlug: "france",
    region: "Provence-Alpes-Côte d'Azur",
    status: "Premier port de France & Porte maritime historique vers l'Afrique",
    population: "1 900 000+ hab.",
    historyAndGeo: "Plus ancienne ville de France fondée il y a plus de 2 600 ans par les Grecs de Phocée, Marseille est située sur le littoral méditerranéen. C'est la porte d'entrée maritime historique de l'Europe vers le continent africain, avec une communauté multiculturelle cosmopolite très attachée à l'Afrique de l'Ouest.",
    economicDossier: "Premier port maritime français (Grand Port Maritime de Marseille-Fos), carrefour d'atterrissement des câbles sous-marins intercontinentaux en fibre optique, et hub logistique méditerranéen d'envergure reliant l'Europe aux ports de Dakar, Abidjan, Lomé et Cotonou.",
    digitalChallenges: "Les acteurs du transport maritime, du négoce d'import-export et les commerçants de Marseille ont besoin d'outils modernes pour digitaliser le suivi de leurs conteneurs et leurs commandes vers l'Afrique.",
    localAnchors: ["Vieux-Port", "Euroméditerranée (Quartier d'affaires)", "Joliette", "Grand Port Maritime", "La Canebière"],
    heroSubtitle: "Plateformes logicielles, sites web haute vitesse et tunnels de vente pour les acteurs économiques et maritimes de Marseille.",
  },

  // ==========================================
  // CANADA (2 VILLES)
  // ==========================================
  {
    slug: "montreal",
    name: "Montréal",
    countrySlug: "canada",
    region: "Québec",
    status: "Métropole francophone d'Amérique du Nord & Hub mondial de l'IA",
    population: "4 300 000+ hab.",
    historyAndGeo: "Deuxième plus grande ville francophone du monde après Kinshasa, Montréal est située sur une île du fleuve Saint-Laurent dans la province de Québec. Cité universitaire de classe internationale, multiculturelle et vibrante, elle abrite une diaspora ouest-africaine hautement qualifiée et active.",
    economicDossier: "Pôle mondial de recherche en intelligence artificielle (Mila dirigé par Yoshua Bengio), industrie aérospatiale (Bombardier), secteur des jeux vidéo et des technologies propres. De nombreux cadres et entrepreneurs y bâtissent des projets binationaux tournés vers l'Afrique de l'Ouest.",
    digitalChallenges: "Les entrepreneurs québécois et membres de la diaspora ont besoin de plateformes web conformes aux standards nord-américains tout en intégrant des systèmes de vente adaptés à l'Afrique (Mobile Money, WhatsApp direct).",
    localAnchors: ["Centre-ville de Montréal", "Vieux-Montréal", "Mile-End (Cité de l'IA)", "Plateau-Mont-Royal", "Saint-Laurent"],
    heroSubtitle: "Architectures web Next.js 16 d'élite, agents IA sur-mesure et tunnels d'affaires transatlantiques pour Montréal.",
  },
  {
    slug: "quebec-ville",
    name: "Québec",
    countrySlug: "canada",
    region: "Québec",
    status: "Capitale nationale de la province de Québec & Joyau patrimonial",
    population: "840 000+ hab.",
    historyAndGeo: "Berceau de la civilisation française en Amérique du Nord fondé en 1608 par Samuel de Champlain, la ville de Québec est perchée sur le cap Diamant surplombant le fleuve Saint-Laurent. Classée au patrimoine mondial de l'UNESCO pour ses remparts et son Vieux-Québec, c'est un pôle de savoir et d'institutions.",
    economicDossier: "Capitale administrative abritant l'Assemblée Nationale du Québec, l'Université Laval et un pôle dynamique en optique-photonique, jeux vidéo, assurances et technologies appliquées.",
    digitalChallenges: "Les institutions et entreprises de Québec recherchent des expertises fiables pour concevoir des portails de formation en ligne et des plateformes logicielles à haute disponibilité.",
    localAnchors: ["Vieux-Québec", "Colline Parlementaire", "Sainte-Foy (Zone Universitaire)", "Saint-Roch (Quartier Tech)"],
    heroSubtitle: "Plateformes web d'autorité, portails de formation et ingénierie logicielle pour les acteurs de la ville de Québec.",
  },

  // ==========================================
  // CHINE (3 VILLES)
  // ==========================================
  {
    slug: "guangzhou",
    name: "Guangzhou (Canton)",
    countrySlug: "chine",
    region: "Guangdong",
    status: "Capitale mondiale du sourcing & Cœur du commerce sino-africain",
    population: "18 000 000+ hab.",
    historyAndGeo: "Située dans le delta de la rivière des Perles au sud de la Chine, Guangzhou (historiquement connue sous le nom de Canton) est la troisième métropole de Chine. C'est le point de départ historique de la Route de la Soie maritime et l'hôte de la prestigieuse Foire de Canton (Canton Fair), la plus grande foire commerciale du monde.",
    economicDossier: "Capitale incontournable du commerce pour les entrepreneurs africains, Guangzhou abrite les célèbres quartiers marchands de Xiaobei et Sanyuanli fréquentés par des milliers d'acheteurs burkinabè, ivoiriens, maliens, sénégalais et congolais important textile, électronique, chaussures, quincaillerie et machines.",
    digitalChallenges: "Les agents de sourcing, transitaires et négociants sino-africains ont un besoin vital d'outils numériques : catalogues en ligne multidevises (FCFA, USD, RMB), tunnels WhatsApp pour valider les commandes à distance et suivi de fret conteneurs en temps réel.",
    localAnchors: ["Complexe de Pazhou (Foire de Canton)", "Xiaobei (Quartier international)", "Sanyuanli (Marché cuir et maroquinerie)", "Baimadao (Marché textile)", "Tianhe (Quartier d'affaires)"],
    heroSubtitle: "Catalogues digitaux B2B, tunnels de vente WhatsApp et automatisation des commandes pour les négociants et transitaires de Guangzhou.",
  },
  {
    slug: "yiwu",
    name: "Yiwu",
    countrySlug: "chine",
    region: "Zhejiang",
    status: "Plus grand marché de gros du monde & Cité des petits articles",
    population: "1 900 000+ hab.",
    historyAndGeo: "Située dans la province du Zhejiang à 300 km au sud de Shanghai, Yiwu est mondialement réputée pour abriter le Yiwu International Trade City (Futian Market), un complexe commercial géant de plus de 5 millions de m² réunissant plus de 75 000 boutiques de gros permanentes.",
    economicDossier: "C'est à Yiwu que s'approvisionnent les commerçants des grands marchés de Bobo-Dioulasso, Ouagadougou, Abidjan (Adjamé), Bamako et Lomé pour les accessoires, la bijouterie fantaisie, les jouets, la papeterie, les ustensiles de cuisine et les fournitures générales.",
    digitalChallenges: "Les grossistes et centrales d'achat de Yiwu traitant avec l'Afrique ont besoin de plateformes web rapides permettant aux acheteurs africains de passer commande sur catalogue sans avoir à se déplacer physiquement à chaque réassort.",
    localAnchors: ["Yiwu International Trade City (Futian)", "District 1 à 5", "Zone logistique internationale de Yiwu", "Marché de nuit de Chouzhou"],
    heroSubtitle: "Plateformes de commande B2B, tunnels WhatsApp pour grossistes et numérisation des flux d'achats à Yiwu.",
  },
  {
    slug: "shenzhen",
    name: "Shenzhen",
    countrySlug: "chine",
    region: "Guangdong",
    status: "Capitale mondiale de l'électronique & Silicon Valley d'Asie",
    population: "17 500 000+ hab.",
    historyAndGeo: "Ancien village de pêcheurs transformé en 1980 en première Zone Économique Spéciale (ZES) de Chine par Deng Xiaoping, Shenzhen est située à la frontière de Hong Kong. C'est aujourd'hui la métropole technologique la plus innovante de la planète, siège de géants comme Huawei, Tencent et DJI.",
    economicDossier: "Premier centre mondial de conception et de production d'équipements électroniques, smartphones, panneaux solaires, batteries au lithium et objets connectés. Le marché de Huaqiangbei est le temple mondial des composants électroniques.",
    digitalChallenges: "Les distributeurs d'énergie solaire, d'équipements télécoms et de matériel informatique important de Shenzhen vers l'Afrique ont besoin de sites d'autorité et de tunnels de conversion pour certifier la qualité de leurs produits et rassurer leurs acheteurs.",
    localAnchors: ["Marché électronique de Huaqiangbei", "Nanshan (Parc scientifique)", "Futian (Centre financier)", "Zone portuaire de Yantian"],
    heroSubtitle: "Ingénierie web, catalogues de composants et solutions d'acquisition pour les importateurs et distributeurs tech de Shenzhen.",
  },
];

export const TERRITORY_SERVICES: TerritoryService[] = [
  {
    slug: 'creation-site-internet',
    name: 'Création de Sites Web & Plateformes Métiers Next.js 16',
    shortTitle: 'Création Site Web & Plateforme Next.js',
    badge: 'Ingénierie Web Haute Performance',
    iconType: 'globe',
    metaTitle: 'Création de Site Web à {city} ({country}) | Plateforme Next.js Pro',
    hook: 'Développez une présence digitale dominante à {city} avec un site web Next.js 16 ultra-rapide (< 0.8s), optimisé pour Google et conçu pour convertir vos visiteurs en clients fidèles.',
    description: "À {city}, la majorité des sites internet souffrent d'une lenteur rédhibitoire sur réseau mobile 3G/4G et d'un manque criant d'optimisation commerciale. BAROUBA GROUP conçoit des plateformes Next.js 16 sur-mesure intégrant l'architecture Server-Side Rendering (SSR), des paiements Mobile Money (Orange Money, Moov, Wave) et un référencement Google chirurgical taillé pour dominer les recherches à {city}.",
    deliverables: [
      {
        title: 'Architecture Next.js 16 & Vercel Edge Network',
        desc: 'Temps de chargement inférieur à 0.8 seconde, performance mobile A+ et disponibilité 99.99% garantie sans crash serveur.',
      },
      {
        title: 'Balisage SEO Local Chirurgical & Schema.org',
        desc: 'Positionnement prioritaire sur les requêtes géolocalisées à {city} pour capter les clients au moment exact où ils recherchent votre service.',
      },
      {
        title: 'Paiements Sécurisés Mobile Money (Orange, Moov, Wave)',
        desc: 'Encaissement automatique en Francs CFA par Orange Money, Moov Money et Wave avec confirmation instantanée par SMS et WhatsApp.',
      },
      {
        title: 'Design Afro-Tech Haute Couture & UX Responsive',
        desc: "Interface ergonomique luxueuse adaptée à l'image de prestige de votre marque, 100% optimisée pour les écrans de smartphones.",
      },
    ],
    benefits: [
      'Multiplication par 3 de votre taux de conversion visiteur-client',
      'Affichage instantané même en cas de connexion internet faible',
      'Propriété intégrale du code source et accompagnement technique dédié',
      'Garantie contractuelle de livraison sous 10 à 21 jours ouvrés (Contrat SARL officiel)',
    ],
    faq: [
      {
        question: 'Pourquoi choisir Next.js plutôt que WordPress à {city} ?',
        answer: "Sur les réseaux mobiles d'Afrique de l'Ouest, WordPress est souvent lourd, lent et vulnérable aux attaques. Next.js 16 génère des pages précompilées ultra-légères qui se chargent en un clin d'œil, offrant le meilleur score SEO sur Google.",
      },
      {
        question: 'Comment se déroule la collaboration si nous sommes basés à {city} ?',
        answer: 'BAROUBA GROUP combine des canaux de cadrage digitalisés (visio, espace de suivi de projet, WhatsApp VIP) et des déplacements sur site pour les réunions de lancement et de livraison stratégiques.',
      },
      {
        question: 'Puis-je modifier mes textes et produits de manière autonome ?',
        answer: "Oui, nous livrons chaque plateforme avec un panneau d'administration fluide et intuitif, complété par une formation vidéo personnalisée pour vos équipes.",
      },
    ],
  },
  {
    slug: 'media-buyer',
    name: 'Media Buyer & Publicité Haute Performance (Meta & TikTok Ads)',
    shortTitle: 'Media Buyer & Publicité Ads',
    badge: 'Acquisition Payante & Scaling ROAS',
    iconType: 'target',
    metaTitle: 'Media Buyer à {city} ({country}) | Publicité Meta & TikTok Ads Pro',
    hook: 'Confiez la rentabilité de vos campagnes publicitaires à {city} à un Media Buyer certifié : scaling prévisible, créatives percutantes et élimination du gaspillage de budget.',
    description: "À {city}, lancer des publicités sans méthode rigoureuse revient à jeter son budget par la fenêtre. BAROUBA GROUP déploie une approche d'ingénierie publicitaire orientée pur retour sur investissement (ROAS). Nous structurons vos campagnes Facebook Ads, Instagram Ads et TikTok Ads avec un ciblage précis, la configuration du Pixel et de l'API de Conversions (CAPI), ainsi que la création de créatives vidéo à fort impact pour générer un flux continu d'acheteurs qualifiés.",
    deliverables: [
      {
        title: 'Stratégie d’Achat Média & Architecture TOFU / MOFU / BOFU',
        desc: 'Structure de campagnes éprouvée pour tester, isoler et scaler méthodiquement les audiences et angles marketing les plus rentables.',
      },
      {
        title: 'Tracking Avancé Meta Pixel & Conversion API (CAPI)',
        desc: 'Configuration technique sans faille pour mesurer 100% des conversions et contourner les restrictions iOS et bloqueurs de pub.',
      },
      {
        title: 'Direction Artistique & Scripts Vidéo Haute Conversion',
        desc: 'Rédaction de scripts psychologiques, hooks captivants et montages vidéo verticaux adaptés aux usages mobiles de {city}.',
      },
      {
        title: 'Pilotage Budgétaire Quotidien & A/B Testing Continu',
        desc: 'Surveillance active du coût par acquisition (CPA), optimisation des enchères et scaling progressif sans dégradation du ROAS.',
      },
    ],
    benefits: [
      'Multiplication de votre retour sur investissement publicitaire (ROAS > 3.5x moyen constaté)',
      'Élimination définitive du gaspillage de budget publicitaire sur des clics sans valeur',
      'Capacité d’accélérer vos ventes à {city} et vers tous les marchés de la sous-région',
      'Reporting hebdomadaire transparent et contact direct avec votre Media Buyer assigné',
    ],
    faq: [
      {
        question: 'Quel budget publicitaire minimum faut-il pour démarrer à {city} ?',
        answer: 'Nous préconisons un budget média de départ d’au moins 150 000 à 300 000 FCFA par mois. Cela permet aux algorithmes de Meta et TikTok de sortir rapidement de la phase d’apprentissage et de cibler vos acheteurs idéaux.',
      },
      {
        question: 'Comment protégez-vous nos comptes publicitaires contre les blocages ?',
        answer: 'Nous appliquons rigoureusement les politiques publicitaires Meta et TikTok, sécurisons vos Business Managers par double authentification et structurons des comptes de secours conformes.',
      },
      {
        question: 'Prenez-vous en charge la réalisation des vidéos et des visuels ?',
        answer: 'Oui, notre studio créatif conçoit l’ensemble des créatives (vidéos dynamiques, carrousels, visuels de conversion) pour maximiser l’attention et le taux de clic.',
      },
    ],
  },
  {
    slug: 'conception-tunnel-de-vente',
    name: 'Conception de Tunnels de Vente Haute Conversion & Vente d’Offres en Ligne',
    shortTitle: 'Tunnel de Vente & Vente en Ligne',
    badge: 'Architecture de Conversion & Vente',
    iconType: 'layers',
    metaTitle: 'Conception de Tunnel de Vente à {city} ({country}) | Architecture Haute Conversion',
    hook: 'Automatisez la vente de vos produits, services et formations à {city} grâce à un tunnel de conversion sur-mesure conçu pour transformer vos visiteurs en acheteurs confirmés.',
    description: "Un site vitrine ordinaire informe, mais un tunnel de vente vend. À {city}, nous concevons des parcours clients chirurgicalement optimisés pour éliminer toute hésitation : page de capture percutante, vidéo de vente persuasive (VSL), bon de commande direct avec paiements Mobile Money et CB, et séquences d’upsell pour maximiser la valeur moyenne par transaction sans friction.",
    deliverables: [
      {
        title: 'Copywriting Persuasif & Psychologie d’Achat',
        desc: 'Rédaction percutante ciblant les désirs profonds, peurs et objections de vos acheteurs à {city} pour déclencher le passage à l’acte immédiat.',
      },
      {
        title: 'Pages de Capture & Vidéos de Vente (VSL) Ultra-Rapides',
        desc: 'Landing pages ergonomiques codées en Next.js, se chargeant en moins d’une seconde sur smartphone même avec une connexion mobile instable.',
      },
      {
        title: 'Checkout Optimisé & Passerelles Mobile Money Intégrées',
        desc: 'Paiement en Francs CFA en 1 clic par Orange Money, Moov Money, Wave et carte bancaire avec reçu électronique immédiat.',
      },
      {
        title: 'Système d’Upsell, Order Bump & Récupération d’Abandons',
        desc: 'Offres complémentaires stratégiques pour augmenter le panier moyen de 25% à 45% et séquences automatisées de réactivation.',
      },
    ],
    benefits: [
      'Génération automatique de ventes et réservations 24h/24 sans dépendre d’échanges manuels interminables',
      'Idéal pour vendre des offres d’accompagnement haut de gamme, formations, abonnements et produits physiques',
      'Expérience d’achat fluide pensée pour les comportements des consommateurs de {city}',
      'Propriété totale de votre infrastructure de vente sans dépendre d’abonnements logiciels tiers coûteux',
    ],
    faq: [
      {
        question: 'Quelle est la différence fondamentale entre un site web et un tunnel de vente ?',
        answer: 'Un site internet standard propose de multiples menus et choix qui dispersent l’attention. Un tunnel de vente ne présente qu’une seule trajectoire guidée : faire passer le prospect d’inconnu à client acheteur qualifié.',
      },
      {
        question: 'Peut-on vendre des produits physiques ou uniquement des services avec un tunnel ?',
        answer: 'Nos tunnels de vente s’appliquent avec un immense succès aux produits physiques (cosmétiques, mode, électronique), tout comme aux services d’entreprises, immobilier et formations.',
      },
      {
        question: 'Le tunnel est-il accessible sur les connexions internet mobiles lentes à {city} ?',
        answer: 'Oui, c’est l’atout de notre technologie Next.js déployée sur CDN Edge : nos pages de vente s’affichent instantanément même en réseau 3G dégradé.',
      },
    ],
  },
  {
    slug: 'community-manager',
    name: 'Community Management & Stratégie de Gestion de Page Facebook & Réseaux Sociaux',
    shortTitle: 'Community Manager & Réseaux Sociaux',
    badge: 'Branding & Engagement Communautaire',
    iconType: 'users',
    metaTitle: 'Community Manager à {city} ({country}) | Gestion de Page Facebook Pro',
    hook: 'Propulsez la notoriété et la réputation de votre entreprise à {city} avec un Community Manager dédié : stratégie éditoriale, visuels haut de gamme et animation quotidienne engagée.',
    description: "À {city}, une page Facebook inactive, aux visuels amateurs ou aux messages laissés sans réponse détruit silencieusement la crédibilité de votre marque. BAROUBA GROUP prend en main votre communication sociale : calendrier éditorial mensuel, création de contenus visuels et vidéos soignés, modération réactive 7j/7 et animation stratégique pour convertir vos abonnés en clients fidèles et ambassadeurs.",
    deliverables: [
      {
        title: 'Stratégie Éditoriale & Calendrier Mensuel de Publication',
        desc: 'Définition des piliers de contenu (autorité, preuve sociale, éducation, vente) et programmation rigoureuse aux heures de forte affluence à {city}.',
      },
      {
        title: 'Création Graphique Haute Couture & Formats Verticaux (Reels)',
        desc: 'Visuels raffinés conformes à votre charte graphique, carrousels éducatifs et montages vidéos courts pour maximiser la portée organique.',
      },
      {
        title: 'Modération Active & Gestion Professionnelle des Messages Privés',
        desc: 'Réponses rapides, courtoises et commerciales aux commentaires et messages pour ne perdre aucun prospect tiède ou chaud.',
      },
      {
        title: 'Rapports Mensuels d’Engagement & Veille Concurrentielle',
        desc: 'Tableau de bord synthétique mesurant la croissance de l’audience, les taux d’engagement et les retombées concrètes sur vos ventes à {city}.',
      },
    ],
    benefits: [
      'Image de marque premium renforçant instantanément la confiance de vos partenaires d’affaires',
      'Libération totale de votre temps et de celui de vos équipes pour vous consacrer à votre métier',
      'Fédération d’une communauté active et engagée autour des valeurs de votre entreprise',
      'Surveillance continue des tendances et initiatives de vos concurrents directs à {city}',
    ],
    faq: [
      {
        question: 'Combien de publications réalisez-vous par semaine sur notre page à {city} ?',
        answer: 'Selon la formule retenue, nous publions entre 3 et 5 posts qualitatifs par semaine, alternant visuels de marque, vidéos courtes, témoignages clients et publications d’autorité.',
      },
      {
        question: 'Prenez-vous en charge la prise de photos et le tournage à {city} ?',
        answer: 'Nous pouvons valoriser vos banques d’images existantes, créer des visuels graphiques 100% sur-mesure, ou organiser des sessions de captation photo/vidéo sur place lors de nos missions.',
      },
      {
        question: 'Comment traitez-vous les demandes de prix formulées en commentaire ?',
        answer: 'Nous appliquons un script d’accueil chaleureux et redirigeons poliment le prospect vers la messagerie privée ou votre ligne WhatsApp commerciale pour le qualifier efficacement.',
      },
    ],
  },
  {
    slug: 'expert-whatsapp-business-api',
    name: 'Expert WhatsApp Business API & Automatisation Messagerie Entreprise Meta',
    shortTitle: 'WhatsApp Business API Certifié',
    badge: 'Partenaire Intégrateur Meta Officiel',
    iconType: 'message-square',
    metaTitle: 'Expert WhatsApp Business API à {city} ({country}) | Solution Officielle Meta',
    hook: 'Passez au niveau supérieur de la relation client à {city} avec l’API officielle WhatsApp Cloud : badge vert vérifié, zéro risque de bannissement et boîte de réception multi-agents.',
    description: "L’usage d’outils WhatsApp non officiels ou de scripts de spam expose votre entreprise à {city} à la perte définitive de vos numéros de téléphone commerciaux. BAROUBA GROUP déploie pour vous l’infrastructure officielle Meta WhatsApp Business API Cloud : vérification d’entreprise Meta, obtention du badge vert certifié, campagnes de notifications de masse conformes et intégration avec vos outils métiers pour gérer des milliers de conversations simultanément.",
    deliverables: [
      {
        title: 'Vérification d’Entreprise Meta Business Manager & Badge Vert',
        desc: 'Montage et validation complète de votre dossier d’entreprise auprès des équipes Meta pour obtenir le statut officiel vérifié.',
      },
      {
        title: 'Déploiement de l’API WhatsApp Cloud Haute Performance',
        desc: 'Connexion directe et sécurisée aux serveurs Meta sans passerelle intermédiaire, garantissant une délivrabilité de 100% et zéro temps d’arrêt.',
      },
      {
        title: 'Boîte de Réception Partagée Multi-Utilisateurs',
        desc: 'Permettez à l’ensemble de votre équipe commerciale et support à {city} de répondre en même temps sur le même numéro d’entreprise officiel.',
      },
      {
        title: 'Modèles de Messages Approuvés & Campagnes Broadcast Ciblées',
        desc: 'Création de templates officiels conformes Meta pour envoyer notifications de commande, rappels de rendez-vous et offres promotionnelles à grande échelle.',
      },
    ],
    benefits: [
      'Protection intégrale de votre actif commercial : zéro risque de blocage ou bannissement par Meta',
      'Affichage immédiat du nom officiel de votre entreprise avec badge vert sans enregistrement préalable du numéro',
      'Organisation centralisée de vos échanges clients avec attribution de tickets et historique archivé',
      'Capacité d’absorber des pics d’activité massifs sans dégradation du temps de réponse',
    ],
    faq: [
      {
        question: 'Pourquoi abandonner l’application WhatsApp Business classique au profit de l’API à {city} ?',
        answer: 'L’application gratuite est bridée à un petit nombre d’appareils et bloque immédiatement le numéro en cas d’envois multiples. L’API officielle offre des utilisateurs illimités, une sécurité absolue et des automatisations avancées conformes.',
      },
      {
        question: 'Pouvons-nous conserver notre numéro de téléphone d’entreprise habituel ?',
        answer: 'Oui, nous pouvons faire migrer votre numéro existant vers l’API Cloud officielle dès que votre compte Business Manager Meta est validé.',
      },
      {
        question: 'Quels sont les coûts des messages appliqués par Meta ?',
        answer: 'Meta facture les conversations par tranches de 24 heures selon des barèmes transparents très abordables. Nous paramétrons vos flux pour optimiser chaque franc CFA dépensé.',
      },
    ],
  },
  {
    slug: 'strategie-acquisition-digitale',
    name: 'Stratégie & Consultation en Acquisition Digitale pour Dirigeants & PME',
    shortTitle: 'Stratégie & Acquisition Digitale',
    badge: 'Conseil Stratégique & Croissance B2B',
    iconType: 'trending-up',
    metaTitle: 'Stratégie d’Acquisition Digitale à {city} ({country}) | Conseil & Audit',
    hook: 'Structurez un moteur d’acquisition client robuste et pérenne à {city} : audit approfondi, arbitrage des canaux marketing et plan d’action pragmatique pour générer des prospects qualifiés.',
    description: "Multiplier les actions marketing désordonnées à {city} est la cause première de la stagnation des entreprises. BAROUBA GROUP intervient en tant que cabinet conseil stratégique en acquisition digitale : nous analysons votre coût d’acquisition client (CAC), modélisons la valeur vie de vos clients (LTV) et concevons un plan d’accélération sur-mesure combinant SEO, publicité payante, création de contenu et closing commercial.",
    deliverables: [
      {
        title: 'Audit Approfondi de votre Écosystème Commercial & Digital',
        desc: 'Diagnostic rigoureux de vos flux de prospects actuels, identification des points de fuite et analyse des leviers sous-exploités à {city}.',
      },
      {
        title: 'Plan Stratégique d’Acquisition Multicanale 90 Jours',
        desc: 'Feuille de route claire précisant les canaux prioritaires, les budgets préconisés et les objectifs de retour sur investissement chiffrés.',
      },
      {
        title: 'Modélisation Financière CAC, LTV & Marges Opérationnelles',
        desc: 'Calcul rigoureux des seuils de rentabilité pour chaque canal afin de garantir que chaque franc CFA investi génère du bénéfice net.',
      },
      {
        title: 'Sessions de Cadrage Stratégique & Direction Marketing Déléguée',
        desc: 'Accompagnement direct du dirigeant et des équipes pour piloter le déploiement opérationnel et lever les blocages tactiques.',
      },
    ],
    benefits: [
      'Visibilité prévisible sur votre volume de prospects entrants chaque semaine',
      'Économies substantielles grâce à l’élimination des dépenses marketing non rentables',
      'Synergie totale entre votre communication, votre marketing et vos équipes de vente',
      'Appui d’experts chevronnés maîtrisant les réalités du tissu économique de {city}',
    ],
    faq: [
      {
        question: 'À qui s’adresse cette consultation stratégique en acquisition à {city} ?',
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
  {
    slug: 'referencement-seo-local',
    name: 'Référencement SEO Local & Domination Google Maps à {city}',
    shortTitle: 'SEO Local & Référencement Google',
    badge: 'Visibilité Organique N°1',
    iconType: 'search',
    metaTitle: 'Référencement SEO Local à {city} ({country}) | N°1 sur Google & Maps',
    hook: 'Positionnez votre établissement au sommet des résultats de recherche Google et Google Maps à {city}. Captez les clients locaux prêts à acheter au moment précis de leur recherche.',
    description: "Lorsque des clients recherchent vos services à {city}, c’est sur Google qu’ils regardent en premier. Si votre entreprise n’apparaît pas dans les trois premières positions de Google Maps ou dans les résultats naturels locaux, ce sont vos concurrents directs qui encaissent. BAROUBA GROUP déploie une stratégie SEO locale complète : optimisation de votre fiche Google Business Profile, balisage Schema.org géolocalisé, netlinking de proximité et création de contenus d’autorité locale.",
    deliverables: [
      {
        title: 'Optimisation & Certification Google Business Profile',
        desc: 'Configuration exhaustive de votre fiche d’établissement, géolocalisation chirurgicale, choix des catégories d’activité et photos professionnelles.',
      },
      {
        title: 'Balisage Schema.org LocalBusiness & Optimisation On-Page',
        desc: 'Structuration technique de votre site web pour indiquer sans ambiguïté aux robots Google votre implantation et vos zones d’intervention à {city}.',
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
        question: 'Sous quel délai peut-on espérer grimper dans Google Maps à {city} ?',
        answer: 'Sur les requêtes locales ciblées, des améliorations significatives de positionnement et d’appels entrants s’observent couramment entre 4 et 8 semaines après la mise à niveau de la fiche.',
      },
      {
        question: 'Faut-il posséder un local ouvert au public pour bénéficier du SEO local à {city} ?',
        answer: 'Non, les entreprises de services intervenant au domicile ou dans les locaux de leurs clients peuvent configurer une zone de desserte spécifique sans afficher publiquement leur adresse résidentielle.',
      },
      {
        question: 'Le résultat est-il pérenne si l’on arrête d’optimiser le site ?',
        answer: 'Contrairement à la publicité qui s’éteint dès que le budget s’arrête, les positions acquises en SEO local restent très stables dans le temps avec un minimum d’entretien régulier.',
      },
    ],
  },
  {
    slug: 'agents-ia-automatisation',
    name: 'Agents IA & Automatisation des Processus Métiers',
    shortTitle: 'Agents IA & Automatisation Entreprise',
    badge: 'Intelligence Artificielle Opérationnelle',
    iconType: 'cpu',
    metaTitle: 'Agents IA & Automatisation à {city} ({country}) | Solutions Métiers',
    hook: 'Automatisez votre service client, la qualification de vos prospects et votre gestion interne à {city} grâce à des agents IA connectés à vos outils métiers et bases de données.',
    description: "Ne perdez plus aucun prospect à {city} à cause d'une réponse tardive ou d'une surcharge administrative. BAROUBA GROUP déploie des agents intelligents entraînés sur votre catalogue et vos procédures internes, capables de répondre 24h/24, de calculer des devis personnalisés et de synchroniser vos commandes sans intervention humaine.",
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
        question: 'L’IA est-elle capable de comprendre les expressions et le contexte local de {city} ?',
        answer: 'Oui, nos modèles sont ajustés pour comprendre le français d’Afrique de l’Ouest, les formulations courantes et les termes spécifiques à votre secteur d’activité.',
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
  {
    slug: 'formations-metiers-du-web-ia',
    name: 'Formations Professionnelles Métiers du Web & IA (Barouba Academy)',
    shortTitle: 'Formations Certifiantes Web, Marketing & IA',
    badge: 'Développement des Compétences & Avenir',
    iconType: 'graduation',
    metaTitle: 'Formation Digitale & IA à {city} ({country}) | Certifiante & Pratique',
    hook: 'Montez en compétences à {city} avec des formations 100% pratiques aux métiers les plus recherchés : développement Next.js, prompt engineering, marketing digital et automatisation.',
    description: "Le marché du travail à {city} et en Afrique de l'Ouest recherche désespérément des profils qualifiés capables de déployer des solutions digitales concrètes. BAROUBA GROUP forme étudiants, cadres, entrepreneurs et salariés à travers des cursus certifiants intensifs, animés par des ingénieurs et experts en activité.",
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
      'Possibilité de suivre en présentiel ou en ligne depuis {city} avec support réactif',
      'Paiement échelonné en FCFA disponible par Mobile Money',
      'Accès exclusif à la communauté des alumni et opportunités d’affaires du réseau',
    ],
    faq: [
      {
        question: 'Faut-il avoir des prérequis en informatique pour suivre les cours à {city} ?',
        answer: 'Nos formations comportent des parcours débutants complets et des modules avancés. Une simple familiarité avec l’ordinateur et une forte motivation suffisent pour démarrer.',
      },
      {
        question: 'Les cours sont-ils compatibles avec un emploi du temps professionnel à {city} ?',
        answer: 'Oui, nous proposons des créneaux en cours du soir et le week-end, ainsi qu’un accès e-learning flexible pour progresser à votre propre rythme.',
      },
      {
        question: 'Le certificat est-il reconnu par les entreprises et recruteurs ?',
        answer: 'Le certificat BAROUBA GROUP atteste de la validation de compétences techniques réelles sur des projets concrets, ce qui constitue le meilleur gage d’employabilité.',
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
  const direct = TERRITORY_SERVICES.find((s) => s.slug === serviceSlug);
  if (direct) return direct;
  // Aliases for backward compatibility
  if (serviceSlug === 'publicite-facebook-tiktok-ads') {
    return TERRITORY_SERVICES.find((s) => s.slug === 'media-buyer');
  }
  if (serviceSlug === 'tunnels-de-vente-whatsapp') {
    return TERRITORY_SERVICES.find((s) => s.slug === 'conception-tunnel-de-vente');
  }
  return undefined;
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

export interface CountryServiceCombo {
  country: TerritoryCountry;
  service: TerritoryService;
}

export function getAllCountryServiceCombos(): CountryServiceCombo[] {
  const combos: CountryServiceCombo[] = [];
  for (const country of TERRITORY_COUNTRIES) {
    for (const service of TERRITORY_SERVICES) {
      combos.push({ country, service });
    }
  }
  return combos;
}
