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

export interface TerritoryService {
  slug: string;
  name: string;
  shortTitle: string;
  badge: string;
  iconType: 'globe' | 'cpu' | 'megaphone' | 'smartphone' | 'graduation';
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
    description: "À {city}, la majorité des sites internet souffrent d'une lenteur rédhibitoire sur réseau mobile 3G/4G et d'un manque d'optimisation commerciale. BAROUBA GROUP conçoit des plateformes Next.js 16 sur-mesure intégrant l'architecture Server-Side Rendering (SSR), des paiements Mobile Money (Orange Money, Moov, Wave) et un référencement Google chirurgical taillé pour dominer les recherches à {city}.",
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
        desc: 'Interface ergonomique luxueuse adaptée à l\'image de prestige de votre marque, 100% optimisée pour les écrans de smartphones.',
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
        answer: 'Sur les réseaux mobiles d\'Afrique de l\'Ouest, WordPress est souvent lourd, lent et vulnérable aux attaques. Next.js 16 génère des pages précompilées ultra-légères qui se chargent en un clin d\'œil, offrant le meilleur score SEO sur Google.',
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
    iconType: 'cpu',
    metaTitle: 'Agents IA & Automatisation à {city} ({country}) | Solutions Métiers',
    hook: 'Automatisez votre service client, la qualification de vos prospects et votre gestion interne à {city} grâce à des agents IA connectés à WhatsApp et vos bases de données.',
    description: "Ne perdez plus aucun prospect à {city} à cause d'une réponse tardive sur WhatsApp ou d'une surcharge administrative. BAROUBA GROUP déploie des agents intelligents entraînés sur votre catalogue et vos procédures internes, capables de répondre 24h/24, de calculer des devis personnalisés et de synchroniser vos commandes sans intervention humaine.",
    deliverables: [
      {
        title: 'Agent Conversationnel WhatsApp Métier 24/7',
        desc: 'Compréhension du langage naturel, réponse instantanée aux questions fréquentes et qualification commerciale des prospects jour et nuit.',
      },
      {
        title: 'Workflows d\'Automatisation Inter-Logiciels',
        desc: 'Connexion fluide entre WhatsApp, Google Sheets, CRM, ERP et logiciels de facturation pour éliminer la saisie manuelle d\'erreurs.',
      },
      {
        title: 'Générateur Automatique de Devis & Factures PDF',
        desc: 'Production instantanée de documents PDF professionnels chiffrés envoyés directement sur le smartphone de votre client.',
      },
      {
        title: 'Tableau de Bord Analytique & Supervision Humaine',
        desc: 'Suivi en temps réel des conversations, des taux de satisfaction et bascule instantanée vers un opérateur humain en cas de dossier complexe.',
      },
    ],
    benefits: [
      'Disponibilité totale 24h/24 et 7j/7 sans coût salarial supplémentaire',
      'Temps de réponse client réduit de plusieurs heures à moins de 3 secondes',
      'Zéro perte de prospect pendant les nuits, week-ends et jours fériés',
      'Concentration de votre équipe sur la vente et les tâches à très forte valeur ajoutée',
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
    iconType: 'megaphone',
    metaTitle: 'Agence Publicité Facebook & TikTok Ads à {city} | ROAS Garanti',
    hook: 'Générez un flux continu de prospects qualifiés à {city} avec des campagnes publicitaires ciblées à fort retour sur investissement (Tracking serveur CAPI & créatifs IA).',
    description: "Brûler du budget publicitaire sans rentabilité mesurable est la première erreur des annonceurs à {city}. BAROUBA GROUP structure vos campagnes sur Facebook, Instagram et TikTok avec une approche mathématique : ciblage comportemental précis, tracking serveur CAPI anti-déperdition, créatifs publicitaires percutants et optimisation quotidienne du coût par acquisition.",
    deliverables: [
      {
        title: 'Tracking Serveur CAPI de Niveau 1 (Meta & TikTok)',
        desc: 'Mesure exacte des conversions contournant les blocages iOS et les pertes de données réseau pour alimenter l\'algorithme d\'achat avec des données pures.',
      },
      {
        title: 'Production de Créatifs Publicitaires IA Haute Conversion',
        desc: 'Vidéos courtes accrocheuses (format Reels/TikTok) et visuels haute définition conçus pour stopper le scroll dès la 1ère seconde.',
      },
      {
        title: 'Copywriting Persuasif Ouest-Africain',
        desc: 'Textes de vente rédigés avec les déclencheurs psychologiques qui résonnent auprès des consommateurs et décideurs de {city}.',
      },
      {
        title: 'Pilotage & Reporting Hebdomadaire Transparent',
        desc: 'Suivi transparent du budget dépensé, du coût par prospect (CPL) et du retour sur dépenses publicitaires (ROAS) généré.',
      },
    ],
    benefits: [
      'Génération prévisible de nouveaux prospects qualifiés chaque matin sur WhatsApp',
      'Réduction de 30% à 50% du coût d\'acquisition client par rapport à la moyenne du marché',
      'Élimination du gaspillage publicitaire grâce au tracking serveur CAPI de niveau 1',
      'Visibilité massive et statut d\'autorité pour votre marque auprès des décideurs de {city}',
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
    iconType: 'smartphone',
    metaTitle: 'Tunnel de Vente WhatsApp & E-commerce à {city} | Paiement Mobile',
    hook: 'Transformez vos prospects en acheteurs en quelques secondes via WhatsApp avec intégration native Orange Money, Moov Money et Wave à {city}.',
    description: "En Afrique francophone, 85% des transactions digitales se concluent sur WhatsApp. À {city}, obliger un client à remplir un long formulaire de carte bancaire fait chuter les ventes de 90%. BAROUBA GROUP crée des tunnels de vente friction-zéro où le client découvre l'offre, pose ses questions et règle sa commande directement avec son compte Mobile Money.",
    deliverables: [
      {
        title: 'Landing Page de Vente Mobile-First Ultra-Légère',
        desc: 'Page de vente responsive présentant l\'offre de manière irrésistible avec bouton d\'achat direct vers WhatsApp sans formulaire lourd.',
      },
      {
        title: 'Intégration Paiements Mobile Money (Orange, Moov, Wave)',
        desc: 'Passerelle d\'encaissement sécurisée permettant au client de payer instantanément sans quitter son application mobile.',
      },
      {
        title: 'Séquence Automatisée de Relance Commerciale WhatsApp',
        desc: 'Relance intelligente des paniers abandonnés sur WhatsApp pour récupérer jusqu\'à 35% de chiffre d\'affaires perdu.',
      },
      {
        title: 'Gestionnaire de Stock & Notification Livreur Automatique',
        desc: 'Alerte immédiate de votre équipe logistique dès qu\'une commande est validée pour une expédition locale sans délai.',
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
        answer: 'Tout à fait. Le sélecteur de quartier calcule automatiquement le tarif de livraison adapté au lieu exact de réception de la marchandise.',
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
        title: 'Certificat Professionnel d\'Aptitude BAROUBA GROUP',
        desc: 'Attestation officielle valorisant votre expertise auprès des recruteurs et donneurs d\'ordres nationaux et internationaux.',
      },
      {
        title: 'Accompagnement & Mentorat VIP Post-Formation',
        desc: 'Accès direct aux formateurs pour débloquer vos difficultés et perfectionner vos compétences après le cursus.',
      },
      {
        title: 'Boîte à Outils, Code Source & Prompts Prêts à l\'Emploi',
        desc: 'Fourniture de bibliothèques de code, templates de tunnels et scripts IA pour accélérer vos propres projets sans repartir de zéro.',
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
