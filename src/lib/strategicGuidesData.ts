// STRATEGIC EDITORIAL GUIDES — BAROUBA GROUP
// Provides Deep Tactical Guides & Market Decryptions for High-Search-Intent Slugs
// Author: Monsieur SAKO BAROU BEN OUMAR — Direction Générale BAROUBA GROUP

export interface StrategicGuideChapter {
  title: string;
  content: string[];
}

export interface StrategicGuide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  executiveSummary: string;
  chapters: StrategicGuideChapter[];
  checklist: string[];
  keyMetrics: { label: string; value: string; desc: string }[];
}

export const STRATEGIC_GUIDES: Record<string, StrategicGuide> = {
  // 1. CIBLAGE & AUDIENCES META ADS
  'ciblage-audiences': {
    id: 'ciblage-audiences',
    badge: 'Méthodologie Chirurgicale Meta Ads',
    title: 'Le Guide Définitif du Ciblage Publicitaire sur Facebook & Instagram au Burkina Faso',
    subtitle: 'Comment dépasser l’illusion des micro-intérêts, diviser son CPM par deux et toucher les acheteurs réels à Ouagadougou, Bobo-Dioulasso et dans l’espace UEMOA.',
    executiveSummary: 'Sur le marché burkinabè, empiler 15 centres d’intérêt dans le Gestionnaire de Publicités Meta est l’erreur n°1 qui détruit la rentabilité. Avec une population connectée concentrée et des algorithmes Advantage+ dopés à l’intelligence artificielle, le salut réside dans le Broad Targeting combiné au Creative Filtering et à la qualification géographique stricte.',
    keyMetrics: [
      { label: 'CPM Optimisé', value: '450 - 850 FCFA', desc: 'Coût pour 1 000 impressions en Broad Targeting vs > 2 500 FCFA en ciblage restreint' },
      { label: 'Taux de Rétention', value: '> 35%', desc: 'Seuil critique sur les vidéos pour qualifier une audience solvable' },
      { label: 'Taille Audience Idéale', value: '350k - 1.2M', desc: 'Volume optimal au Burkina Faso pour laisser l’algorithme respirer et scaler' },
    ],
    chapters: [
      {
        title: '1. Le Piège Mortel des Micro-Intérêts au Burkina Faso',
        content: [
          'La majorité des annonceurs ouagalais débutent en cochant « Achats en ligne », « Vêtements de luxe » ou « Immobilier ». Sur le marché burkinabè, la base de données comportementale de Meta est fragmentée : beaucoup d’utilisateurs naviguent sur des téléphones partagés, utilisent des comptes secondaires ou ne déclarent pas explicitement leurs intentions.',
          'En forçant l’algorithme à chercher uniquement les profils ayant coché un micro-intérêt, vous le mettez en concurrence directe avec tous les autres annonceurs sur un échantillon minuscule. Résultat immédiat : votre Coût par Clic (CPC) s’envole, le Coût par Mille (CPM) passe de 600 FCFA à plus de 2 500 FCFA, et la fréquence d’affichage sature en moins de 4 jours.',
        ],
      },
      {
        title: '2. La Révolution du Broad Targeting & du « Creative Filtering »',
        content: [
          'En 2026, l’algorithme de Meta (Andromeda) lit les pixels de vos images, analyse la voix et les sous-titres de vos vidéos, et scanne le texte de votre accroche publicitaire. C’est votre créatif qui fait le ciblage, et non plus vos cases cochées dans l’outil.',
          'Si votre vidéo commence par : « Vous êtes promoteur immobilier ou chef d’entreprise à Ouagadougou en quête de rentabilité nette... », 95% des profils non concernés zappent en 2 secondes, tandis que votre cible idéale s’arrête. Meta analyse immédiatement qui regarde plus de 3 secondes et va chercher des profils jumeaux dans tout le pays à un coût d’enchère minimal.',
        ],
      },
      {
        title: '3. Les 4 Seuls Filtres Techniques Rentables au Faso',
        content: [
          '• Géolocalisation Chirurgicale : Ne ciblez jamais « Toute personne dans ce lieu », mais « Personnes vivant dans ce lieu ». Si vous livrez uniquement à Ouagadougou, réglez un rayon de 15 à 20 km autour du centre-ville pour éliminer les zones rurales non desservies par vos livreurs.',
          '• Tranche d’Âge Solvable : Pour les offres premium, concentrez votre budget sur les 25-55 ans. En dessous de 22 ans au Burkina, le taux de conversion réel en Mobile Money ou espèces est inférieur à 1.5% malgré un fort taux d’interaction de curiosité.',
          '• Filtrage par Type d’Appareil & Réseau (Option B2B) : Pour les services haut de gamme ou B2B, diffusez uniquement sur les réseaux Wi-Fi et connexions 4G/5G, voire sur les versions d’OS Android récentes (Android 11+) et iOS pour exclure les terminaux d’entrée de gamme aux écrans inadaptés.',
          '• Langue & Interface : Configurez le français comme langue d’interface pour éviter la dispersion sur des comptes anglophones ou bots sans pouvoir d’achat local.',
        ],
      },
      {
        title: '4. Exploiter les Audiences Similaires (Lookalike) à Partir de Données Réelles',
        content: [
          'Ne créez pas de Lookalike sur les personnes ayant « aimé » votre page Facebook (audience polluée de profils inactifs).',
          'La méthode BAROUBA GROUP consiste à exporter votre fichier client réel d’au moins 200 à 500 numéros WhatsApp d’acheteurs ayant effectivement payé par Orange Money, Moov Money ou cash. Créez ensuite une Audience Personnalisée (Custom Audience), puis générez un Lookalike à 1% au Burkina Faso. Cette audience de 1% concentre les profils sociologiques et financiers les plus proches de vos vrais clients.',
        ],
      },
    ],
    checklist: [
      'Supprimer tous les micro-intérêts superposés sur vos campagnes d’acquisition principales',
      'Régler la géolocalisation sur « Personnes résidant dans ce lieu » avec rayon kilométrique strict',
      'Créer une accroche vidéo dont les 3 premières secondes mentionnent clairement la cible visée',
      'Installer un événement de conversion personnalisé relié aux ventes réelles et non aux simples clics',
      'Maintenir la phase d’apprentissage active pendant 50 conversions minimum sans modifier le budget de plus de 20%',
    ],
  },

  // 2. DÉBLOCAGE COMPTE PUBLICITAIRE & SÉCURISATION META
  'comptes-restreints': {
    id: 'comptes-restreints',
    badge: 'Protocole d’Urgence Juridique & Technique',
    title: 'Déblocage de Compte Publicitaire Facebook & Sécurisation Business Manager au Burkina',
    subtitle: 'Diagnostic des motifs de suspension, constitution du dossier de recours officiel et architecture de secours pour protéger définitivement votre chiffre d’affaires.',
    executiveSummary: 'Une suspension Meta inopinée paralyse l’activité commerciale de 8 PME sur 10 au Burkina Faso. La quasi-totalité des blocages provient d’incohérences de nom sur les cartes bancaires prépayées, d’adresses IP mouvantes, ou d’infractions aux règles de contournement des systèmes. Une approche juridique rigoureuse permet de rétablir vos droits dans 92% des cas légitimes.',
    keyMetrics: [
      { label: 'Délai Moyen Recours', value: '24h - 72h', desc: 'Délai de traitement moyen avec dossier RCCM et IFU conforme' },
      { label: 'Taux de Déblocage', value: '92%', desc: 'Taux de succès pour les entreprises légitimes accompagnées par notre cabinet' },
      { label: 'Plafond Dépense Débloqué', value: 'Illimité', desc: 'Après vérification formelle de l’entreprise dans le Meta Business Suite' },
    ],
    chapters: [
      {
        title: '1. Les 3 Vrais Motifs de Blocage Publicitaire au Burkina Faso',
        content: [
          '• Rejet de Carte Bancaire & Décalage d’Identité : Utiliser une carte Visa UBA, Coris Bank ou Ecobank dont le nom du titulaire diffère du nom du profil administrateur du Business Manager déclenche immédiatement le filtre anti-fraude de Meta.',
          '• Refus Répétés de Débit : Si votre compte bancaire manque de provisions au moment où Meta prélève son seuil de facturation (ex: 15 000 ou 50 000 FCFA), après 2 tentatives infructueuses, le compte est classé à risque de défaut et suspendu.',
          '• Connexions Suspectes & VPN : Vous connecter à votre Business Manager depuis un VPN européen alors que vos campagnes tournent à Ouagadougou fait sonner les alertes de piratage géographique dans les centres de données de Meta.',
        ],
      },
      {
        title: '2. Le Protocole Officiel de Récupération auprès du Support Meta Pro',
        content: [
          'Ne cliquez jamais sur le bouton « Demander un examen » sans avoir nettoyé votre compte au préalable.',
          'Avant de soumettre votre recours : vérifiez que toutes vos annonces rejetées ont été supprimées (et non simplement désactivées), que votre profil personnel est authentifié par une pièce d’identité nationale burkinabè (CNIB ou Passeport valide) et que la double authentification (2FA) par application (Google Authenticator) est active.',
          'BAROUBA GROUP formule un mémoire technique en anglais et français citant les articles précis des Conditions Générales de Meta, appuyé par votre Registre de Commerce (RCCM) et Numéro IFU officiel.',
        ],
      },
      {
        title: '3. Construire une Architecture de Survie (Backup 3-Tier)',
        content: [
          'Une entreprise sérieuse ne repose jamais sur un seul profil Facebook. Notre protocole d’ingénierie déploie 3 niveaux étanches :',
          '1. Le Business Manager Titulaire : Il détient les actifs légaux (Pixel, Page, Catalogue, Nom de domaine vérifié). Aucun dollar publicitaire n’est dépensé directement depuis lui.',
          '2. Le Business Manager Opérateur : Lié au premier par partenariat d’agence, il gère les campagnes et détient les comptes de paiement.',
          '3. Les Profils Administrateurs de Secours : Au moins deux profils distincts d’employés ou associés avec accès complet configuré, garantissant qu’un blocage de profil individuel n’interrompt jamais les annonces.',
        ],
      },
    ],
    checklist: [
      'Activer la double authentification (2FA) sur tous les profils administrateurs',
      'Vérifier formellement l’entreprise avec le RCCM, l’IFU et un relevé bancaire de la société',
      'Associer une carte bancaire approvisionnée en permanence avec au moins 30 000 FCFA de marge',
      'Ne jamais utiliser de VPN lors de l’accès au Business Manager ou à la page professionnelle',
      'Créer un administrateur de secours vérifié avant tout scaling de budget important',
    ],
  },

  // 3. TRACKING SERVEUR & API DE CONVERSION (CAPI)
  'api-conversion-tracking': {
    id: 'api-conversion-tracking',
    badge: 'Ingénierie de la Donnée & Tracking 100% Fiable',
    title: 'L’API de Conversion Meta (CAPI) & le Tracking Serveur au Burkina Faso',
    subtitle: 'Comment récupérer les 40% de ventes perdues par le pixel classique à cause des bloqueurs et navigateurs mobiles sur les réseaux télécoms ouest-africains.',
    executiveSummary: 'Avec iOS 14.5+, le mode restreint d’Android, et la prépondérance des navigateurs mobiles comme Opera Mini ou Phoenix au Burkina Faso, le pixel Facebook JavaScript côté navigateur perd jusqu’à la moitié des données d’achat. Le déploiement d’une API de Conversion (CAPI) côté serveur garantit un flux de signaux direct, chiffré et inattaquable entre vos serveurs et Meta.',
    keyMetrics: [
      { label: 'Données Récupérées', value: '+35% à +55%', desc: 'Augmentation du volume d’achats et leads détectés par l’algorithme' },
      { label: 'Score Qualité Match', value: '8.8 / 10', desc: 'Score de concordance des événements (Event Quality Match Score) moyen' },
      { label: 'Réduction du CPA', value: '-22% à -40%', desc: 'Baisse du coût par prospect grâce au nourrissage de l’IA de Meta' },
    ],
    chapters: [
      {
        title: '1. Pourquoi le Pixel Navigateur est Dépassé en Afrique de l’Ouest',
        content: [
          'Le pixel traditionnel est un simple script JavaScript injecté dans la page web. Dès qu’un internaute burkinabè navigue avec un bloqueur de pub, un navigateur avec économiseur de données agressif (ex: Opera Mini) ou un iPhone sous iOS 17, le signal est bloqué avant même de parvenir aux serveurs de Meta.',
          'Pire encore : les micro-coupures de connexion 3G/4G font que l’internaute valide sa commande sur WhatsApp ou via le formulaire, mais la page de confirmation ne se charge pas à temps pour déclencher le tag de conversion. Pour Meta, votre campagne semble improductive alors que votre boîte WhatsApp déborde.',
        ],
      },
      {
        title: '2. Le Fonctionnement Technique de l’API de Conversions CAPI',
        content: [
          'L’API de Conversion (CAPI) ne s’exécute pas sur le téléphone du client, mais directement sur notre serveur Next.js sécurisé.',
          'Dès qu’une commande, une demande de devis ou un clic WhatsApp est validé, notre serveur envoie une requête API HTTPS chiffrée avec hachage SHA-256 (nom, numéro de téléphone normalisé +226, email, montant de la transaction en XOF) directement à l’API Graph de Meta.',
          'Aucun bloqueur de publicité, aucun paramètre de navigateur et aucune déconnexion mobile ne peut intercepter ou empêcher cette transmission.',
        ],
      },
      {
        title: '3. Déduplication d’Événements & Qualité de Concordance (Event Match Quality)',
        content: [
          'Pour obtenir un score maximal (supérieur à 8.5/10), BAROUBA GROUP implémente un système de déduplication strict : chaque événement génère un `event_id` unique côté serveur et client. Meta compare les deux signaux, élimine les doublons et associe la conversion avec certitude absolue au profil de l’acheteur.',
          'Plus votre score Event Match Quality est élevé, plus Meta sait exactement quel type de profil dépense de l’argent, et plus ses algorithmes d’enchères orientent vos publicités vers des acheteurs réels plutôt que vers des curieux non solvables.',
        ],
      },
    ],
    checklist: [
      'Générer un jeton d’accès système permanent dans le Business Manager Meta',
      'Normaliser les numéros de téléphone avec l’indicatif international (+226 pour le Burkina)',
      'Hacher les données utilisateurs en SHA-256 avant toute transmission serveur',
      'Activer la déduplication avec identifiant unique event_id sur tous les points d’entrée',
      'Vérifier que le score Event Quality Match dépasse 8.0 dans le Gestionnaire d’Événements',
    ],
  },

  // 4. LEAD GENERATION & TUNNELS WHATSAPP
  'lead-generation-whatsapp': {
    id: 'lead-generation-whatsapp',
    badge: 'Tunnels de Vente & Closing Haute Fréquence',
    title: 'Campagnes de Génération de Prospects & Tunnels WhatsApp au Burkina Faso',
    subtitle: 'Comment convertir les internautes burkinabè en clients payants sans passer par des formulaires lourds ignorés par 90% des utilisateurs mobiles.',
    executiveSummary: 'Au Burkina Faso, le véritable taux de conversion se joue sur WhatsApp. Les formulaires de sites web traditionnels subissent une déperdition massive due aux connexions lentes. La combinaison gagnante de BAROUBA GROUP associe des formulaires instantanés natifs Meta (Instant Forms) pré-remplis à des tunnels de routage automatisés sur l’API WhatsApp Business.',
    keyMetrics: [
      { label: 'Taux d’Ouverture WhatsApp', value: '98%', desc: 'Contre moins de 15% pour les emails professionnels au Burkina' },
      { label: 'Délai de Réponse Optimal', value: '< 5 minutes', desc: 'Multiplie par 7 les chances de clore la vente auprès d’un prospect ouagalais' },
      { label: 'Coût par Prospect (CPL)', value: '650 - 1 800 FCFA', desc: 'Coût moyen par contact qualifié et motivé en B2B et services' },
    ],
    chapters: [
      {
        title: '1. Formulaire Instantané Meta vs Landing Page : Le Verdict en Afrique',
        content: [
          'Sur un réseau mobile instable, rediriger un prospect vers un site web externe lui impose 4 à 8 secondes de chargement. Chaque seconde supplémentaire fait fuir 20% des acheteurs potentiels.',
          'Les Formulaires Instantanés (Lead Ads natifs) s’ouvrent en 0.1 seconde directement à l’intérieur de Facebook et Instagram. Les champs (Nom, Prénom, Numéro WhatsApp, Ville) sont pré-remplis automatiquement par les données du compte utilisateur. Le prospect n’a qu’à valider en 2 clics.',
        ],
      },
      {
        title: '2. L’Art de la Question Filtre pour Éliminer les Curieux',
        content: [
          'Le risque majeur du formulaire instantané est de recevoir des centaines de contacts sans pouvoir d’achat. Pour filtrer impitoyablement, nous insérons toujours 1 à 2 questions conditionnelles à choix unique :',
          '• « Quel est votre budget prévisionnel pour ce projet ? » (ex: Moins de 250 000 FCFA / 500 000 à 1 500 000 FCFA / Plus de 2 500 000 FCFA)',
          '• « Quand souhaitez-vous débuter les travaux / passer commande ? » (ex: Sous 7 jours / Dans le mois / Simple renseignement)',
          'Les réponses filtrent automatiquement les contacts et orientent les profils prioritaires vers vos commerciaux seniors.',
        ],
      },
      {
        title: '3. Le Relais WhatsApp Instantané & le Script de Closing en 3 Étapes',
        content: [
          'Dès que le prospect valide le formulaire, une passerelle webhook propulse son contact dans un tunnel WhatsApp Cloud. Le commercial reçoit une notification d’urgence et le prospect reçoit un message d’accueil personnalisé sous 60 secondes.',
          'Le script de conversion en 3 temps :',
          '1. Salutation & Reconnaissance : « Bonjour Monsieur [Nom], vous venez de demander le diagnostic pour votre entreprise à Ouagadougou... »',
          '2. Qualification Rapide : « Afin de préparer les éléments sur-mesure avant notre échange téléphonique, confirmez-vous que votre projet concerne [Secteur] ? »',
          '3. Appel à l’Action Ferme : Proposition d’un créneau d’appel de 10 minutes ou transmission immédiate du devis officiel avec paiement de réservation Orange Money.',
        ],
      },
    ],
    checklist: [
      'Créer des formulaires instantanés avec au moins 1 question de qualification financière',
      'Régler le champ téléphone pour qu’il exige l’indicatif burkinabè (+226)',
      'Mettre en place une notification instantanée par WhatsApp ou SMS pour chaque commercial',
      'Traiter 100% des prospects entrants en moins de 15 minutes chrono pendant les heures ouvrées',
      'Alimenter une base de relance hebdomadaire pour les prospects indécis',
    ],
  },

  // 5. BUDGETS, TARIFS & CHIFFRAGE DU ROAS
  'budget-chiffrage-rentabilite': {
    id: 'budget-chiffrage-rentabilite',
    badge: 'Finance Marketing & Rentabilité Nette',
    title: 'Budget Publicitaire Facebook au Burkina Faso : Chiffrage Réaliste & Calcul du ROAS',
    subtitle: 'Combien investir, quelle grille budgétaire appliquer et comment calculer son seuil de rentabilité sans gaspillage à Ouagadougou et Bobo-Dioulasso.',
    executiveSummary: 'Il n’existe aucun forfait magique universel. Chez BAROUBA GROUP, le budget publicitaire est indexé sur votre marge brute unitaire, votre panier moyen et la valeur à vie (LTV) de vos clients. Découvrez les paliers budgétaires réels observés sur les campagnes les plus rentables du marché burkinabè.',
    keyMetrics: [
      { label: 'Budget Test Minimum', value: '5 000 - 10 000 FCFA/j', desc: 'Niveau indispensable pour tester 2 à 3 angles créatifs en phase d’amorce' },
      { label: 'Budget de Scaling PME', value: '25 000 - 80 000 FCFA/j', desc: 'Palier de croisière pour dominer son secteur et générer 15 à 40 leads/jour' },
      { label: 'ROAS Net Recommandé', value: '>= 3.5x', desc: 'Ratio de retour sur investissement publicitaire pour absorber les frais fixes' },
    ],
    chapters: [
      {
        title: '1. Les 3 Paliers d’Investissement Publicitaire au Burkina Faso',
        content: [
          '• Phase 1 : Validation & Test d’Offre (5 000 à 10 000 FCFA / jour pendant 10 jours)',
          'Cette phase ne vise pas à devenir millionnaire immédiatement, mais à valider le Coût par Clic (CPC), tester 3 angles visuels distincts et mesurer le taux de réponse sur WhatsApp. Budget total : 50 000 à 100 000 FCFA.',
          '• Phase 2 : Rentabilisation & Stabilisation (15 000 à 35 000 FCFA / jour)',
          'Une fois l’angle gagnant identifié, on coupe les créatifs sous-performants et on concentre l’investissement sur la campagne validée. À ce stade, la machine doit s’auto-financer chaque semaine avec un ROAS supérieur à 3x.',
          '• Phase 3 : Scaling Agressif & Domination de Marché (50 000 à 250 000+ FCFA / jour)',
          'Réservé aux entreprises dont la logistique et l’équipe commerciale peuvent absorber le flux sans rupture de stock ni délai de livraison.',
        ],
      },
      {
        title: '2. Comment Calculer son Seuil de Rentabilité (Break-Even ROAS)',
        content: [
          'Formule incontournable : Seuil de Rentabilité ROAS = 1 / Marge Brute en %.',
          'Exemple concret pour une boutique de prêt-à-porter ou un prestataire de services à Ouagadougou :',
          'Si vous vendez un article à 25 000 FCFA dont le coût d’achat et de livraison est de 10 000 FCFA, votre marge brute est de 15 000 FCFA (soit 60%).',
          'Votre ROAS d’équilibre est : 1 / 0.60 = 1.67. Cela signifie que tant que 1 000 FCFA investis sur Facebook génèrent au moins 1 670 FCFA de chiffre d’affaires, votre entreprise ne perd pas d’argent. Chez BAROUBA GROUP, notre objectif standard se situe au-delà de 3.5x pour dégager un bénéfice net massif.',
        ],
      },
      {
        title: '3. La Règle d’Or de l’Augmentation Budgétaire (Anti-Crash de l’Algorithme)',
        content: [
          'L’erreur classique de l’annonceur burkinabè : constater qu’une annonce à 5 000 FCFA/jour rapporte beaucoup, et passer brutalement le budget à 50 000 FCFA le lendemain.',
          'Ce geste réinitialise instantanément la phase d’apprentissage de Meta. L’algorithme panique, achète des enchères au prix fort pour dépenser le budget alloué, et votre coût par prospect explose.',
          'La règle professionnelle : ne jamais augmenter le budget d’une campagne rentable de plus de 15% à 20% toutes les 48 à 72 heures, ou dupliquer l’ensemble d’annonces dans une campagne de scaling dédiée.',
        ],
      },
    ],
    checklist: [
      'Calculer précisément sa marge brute unitaire avant de définir le budget média',
      'Provisionner un budget de test dédié de 10 jours sans modifier les annonces en cours',
      'Fixer un Coût par Prospect Maximum Tolérable (CPA Plafond) à ne jamais dépasser',
      'Ne pas toucher à une campagne en cours d’apprentissage depuis moins de 72h',
      'Réinvestir les bénéfices publicitaires de manière progressive (+15% par palier de 48h)',
    ],
  },
};

// Helper: Match a slug to the most relevant strategic guide
export function getStrategicGuideForSlug(slug: string): StrategicGuide | null {
  const s = slug.toLowerCase();

  if (
    s.includes('ciblage') || 
    s.includes('audience') || 
    s.includes('interet') || 
    s.includes('lookalike') || 
    s.includes('persona') ||
    s.includes('cadre') ||
    s.includes('decideur')
  ) {
    return STRATEGIC_GUIDES['ciblage-audiences'];
  }

  if (
    s.includes('bloqu') || 
    s.includes('restreint') || 
    s.includes('desactiv') || 
    s.includes('recours') || 
    s.includes('securit') ||
    s.includes('compte-publicitaire')
  ) {
    return STRATEGIC_GUIDES['comptes-restreints'];
  }

  if (
    s.includes('capi') || 
    s.includes('pixel') || 
    s.includes('conversion') || 
    s.includes('tracking') || 
    s.includes('serveur')
  ) {
    return STRATEGIC_GUIDES['api-conversion-tracking'];
  }

  if (
    s.includes('prospect') || 
    s.includes('lead') || 
    s.includes('whatsapp') || 
    s.includes('tunnel') || 
    s.includes('closing')
  ) {
    return STRATEGIC_GUIDES['lead-generation-whatsapp'];
  }

  if (
    s.includes('budget') || 
    s.includes('chiffrage') || 
    s.includes('tarif') || 
    s.includes('devis') || 
    s.includes('cout') || 
    s.includes('roas') ||
    s.includes('rentabilit') ||
    s.includes('prix')
  ) {
    return STRATEGIC_GUIDES['budget-chiffrage-rentabilite'];
  }

  // Default to ciblage/audiences if it's a general facebook ad query
  if (s.includes('publicite-facebook') || s.includes('campagne-facebook')) {
    return STRATEGIC_GUIDES['ciblage-audiences'];
  }

  return null;
}
