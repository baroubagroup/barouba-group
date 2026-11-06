// B2B Sector Solutions Data Layer — 15 High-Ticket Industries (Solution + Prix Duo)
// BAROUBA GROUP — Bobo-Dioulasso, Ouagadougou, Espace UEMOA, CEMAC & International

import { 
  TERRITORY_COUNTRIES, 
  TERRITORY_CITIES, 
  TerritoryCity, 
  TerritoryCountry,
  getCountryBySlug,
  getCitiesByCountry
} from './territoriesData';

export interface SectorDeliverable {
  title: string;
  desc: string;
}

export interface SectorFaq {
  question: string;
  answer: string;
}

export interface SectorPriceRange {
  tier: string;
  range: string;
  desc: string;
  isRecommended?: boolean;
}

export interface B2bSector {
  id: string;
  name: string;
  badge: string;
  targetRole: string; // e.g. "Directeurs d'Agences de Voyage & Tourisme"
  solutionSlugPrefix: string;
  priceSlugPrefix: string;
  iconName: string;
  
  // Solution Page Data
  solutionMetaTitle: string; // template: {city}, {country}
  solutionHeroTitle: string;
  solutionHeroSubtitle: string;
  solutionChallenges: string[];
  solutionDeliverables: SectorDeliverable[];
  solutionFaq: SectorFaq[];

  // Price Page Data
  priceMetaTitle: string;
  priceHeroTitle: string;
  priceHeroSubtitle: string;
  marketPriceRanges: SectorPriceRange[];
  priceCostFactors: string[];
  priceFaq: SectorFaq[];
}

export const B2B_SECTORS: B2bSector[] = [
  // 1. AGENCES DE VOYAGE & TOURISME
  {
    id: 'agence-voyage',
    name: 'Agences de Voyage & Tourisme',
    badge: 'Billetterie, Visas & Hajj/Omra',
    targetRole: "Directeurs d'Agences de Voyage & Promoteurs Touristiques",
    solutionSlugPrefix: 'site-web-pour-agence-de-voyage',
    priceSlugPrefix: 'prix-site-web-agence-de-voyage',
    iconName: 'plane',
    solutionMetaTitle: 'Création de Site Web pour Agence de Voyage à {city} ({country})',
    solutionHeroTitle: 'Conception de Plateforme Web & Billetterie en Ligne pour Agence de Voyage à {city}',
    solutionHeroSubtitle: 'Augmentez vos émissions de billets d\'avion, vos demandes de visa et vos réservations de packages Omra & Hajj avec une plateforme Next.js 16 connectée à WhatsApp.',
    solutionChallenges: [
      'Gestion manuelle et chronophage des demandes de devis et visas par messages épars',
      'Paiements d\'acomptes difficiles à distance pour les voyageurs de la sous-région',
      'Absence de catalogue interactif pour mettre en valeur les forfaits touristiques et pèlerinages'
    ],
    solutionDeliverables: [
      {
        title: 'Moteur de Recherche & Réservation de Vols',
        desc: 'Interface ergonomique permettant à vos clients de soumettre leurs dates, classes et destinations avec validation rapide.'
      },
      {
        title: 'Portail Forfaits Hajj, Omra & Circuits Touristiques',
        desc: 'Présentation détaillée des hôtels partenaires, itinéraires, tarifs par personne et formulaires d\'inscription en ligne.'
      },
      {
        title: 'Module de Dépôt de Dossiers Visas Sécurisé',
        desc: 'Téléversement des passeports et pièces justificatives directement sur votre espace sans perte de documents.'
      },
      {
        title: 'Paiement Mobile Money & Alertes WhatsApp',
        desc: 'Encaissement des acomptes par Wave, Orange Money et notification automatique des confirmations par WhatsApp.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site permet-il de vendre des forfaits Omra et Hajj à distance ?',
        answer: 'Oui, nous intégrons un module dédié présentant les programmes de pèlerinage avec acomptes en ligne et collecte numérique des passeports.'
      },
      {
        question: 'Comment les clients de la diaspora peuvent-ils payer leurs billets ?',
        answer: 'La plateforme supporte les cartes bancaires internationales (Visa/Mastercard) et les solutions de transfert Mobile Money panafricaines.'
      },
      {
        question: 'Peut-on synchroniser le site avec notre numéro WhatsApp officiel ?',
        answer: 'Absolument. Chaque fiche de vol ou forfait dispose d\'un bouton d\'échange direct pré-rempli pour clôturer la vente instantanément.'
      }
    ],
    priceMetaTitle: 'Prix de Création d\'un Site Web pour Agence de Voyage à {city}',
    priceHeroTitle: 'Quel est le Prix d\'un Site Web pour Agence de Voyage à {city} ?',
    priceHeroSubtitle: 'Estimations réalistes du marché en FCFA, grille tarifaire et méthodologie sur-mesure de BAROUBA GROUP après audit de vos besoins.',
    marketPriceRanges: [
      {
        tier: 'Site Vitrine Standard (Agence Débutante)',
        range: '450 000 — 850 000 FCFA',
        desc: 'Présentation des destinations, formulaire de contact simple, pas de réservation en ligne ni d\'encaissement automatisé.'
      },
      {
        tier: 'Plateforme Billetterie & Forfaits Intermédiaire',
        range: '1 200 000 — 2 500 000 FCFA',
        desc: 'Catalogue de forfaits Hajj/Omra, module de demande de devis dynamique et intégration des passerelles de paiement locales.'
      },
      {
        tier: 'Système Haute Disponibilité Sur-Mesure (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 d\'élite, API WhatsApp certifiée, paiements unifiés, espace client et sécurité totale des données passagers.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Intégration d\'un système de réservation directe vs simple formulaire de devis',
      'Passerelles de paiement multidevises (Mobile Money + Cartes bancaires diaspora)',
      'Module de collecte et vérification automatique des documents de visa',
      'Accompagnement marketing et publicité Meta/TikTok Ads pour remplir les vols'
    ],
    priceFaq: [
      {
        question: 'Pourquoi BAROUBA GROUP propose-t-il du sur-mesure plutôt qu\'un tarif fixe ?',
        answer: 'Parce qu\'une agence spécialisée en pèlerinages n\'a pas les mêmes besoins qu\'un émetteur de billets corporate. L\'audit préalable garantit que vous ne payez que les fonctionnalités indispensables à votre rentabilité.'
      },
      {
        question: 'Quel est le délai de livraison moyen pour ce type de plateforme ?',
        answer: 'Entre 2 et 4 semaines après validation du cahier des charges issu de l\'audit technique.'
      },
      {
        question: 'L\'hébergement et la maintenance sont-ils inclus ?',
        answer: 'Oui, nous incluons le déploiement sur Vercel Edge Network avec certificat SSL, surveillance 24/7 et garantie technique de 90 jours.'
      }
    ]
  },

  // 2. CENTRES DE FORMATION & INSTITUTS PRIVÉS
  {
    id: 'centre-formation',
    name: 'Centres de Formation & Instituts Privés',
    badge: 'Inscriptions, Scolarité & Attestations',
    targetRole: "Directeurs Pédagogiques & Fondateurs d'Instituts Privés",
    solutionSlugPrefix: 'application-gestion-centre-formation',
    priceSlugPrefix: 'prix-logiciel-centre-formation',
    iconName: 'graduation',
    solutionMetaTitle: 'Application de Gestion pour Centre de Formation à {city} ({country})',
    solutionHeroTitle: 'Application de Gestion & Système d\'Inscription pour Centre de Formation à {city}',
    solutionHeroSubtitle: 'Automatisez les admissions d\'étudiants, le recouvrement des frais de scolarité par Mobile Money et l\'émission de certificats infalsifiables.',
    solutionChallenges: [
      'Files d\'attente interminables aux guichets pour les inscriptions et paiements de mensualités',
      'Retards de paiement et difficultés de suivi des soldes étudiants sur des fichiers Excel dispersés',
      'Falsification des attestations de formation et perte de temps lors des vérifications manuelles'
    ],
    solutionDeliverables: [
      {
        title: 'Portail d\'Admission & Inscription 100% Numérique',
        desc: 'Formulaire d\'inscription personnalisé permettant aux apprenants de choisir leur filière et de soumettre leurs diplômes en ligne.'
      },
      {
        title: 'Recouvrement Automatisé des Frais par Mobile Money',
        desc: 'Intégration Wave, Orange Money et Moov avec émission instantanée de quittance numérique par WhatsApp.'
      },
      {
        title: 'Tableau de Bord Administratif & Émargement',
        desc: 'Suivi en temps réel des effectifs par classe, assiduité, plannings des formateurs et relances automatiques d\'échéances.'
      },
      {
        title: 'Générateur d\'Attestations & Certificats QR Code',
        desc: 'Délivrance de certificats sécurisés vérifiables en un clic par les recruteurs et employeurs via QR code.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le logiciel fonctionne-t-il sur smartphone pour les étudiants ?',
        answer: 'Oui, l\'interface est responsive et ultra-légère, accessible sur tout smartphone sans nécessité de télécharger une application lourde.'
      },
      {
        question: 'Peut-on relancer automatiquement les étudiants en retard de scolarité ?',
        answer: 'Absolument, des rappels courtois et programmés sont transmis directement par SMS et WhatsApp avant et après chaque date d\'échéance.'
      },
      {
        question: 'Nos données d\'étudiants sont-elles sécurisées et exportables ?',
        answer: 'Toutes vos données restent votre propriété exclusive, chiffrées et exportables en format Excel ou PDF à tout moment.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Logiciel de Gestion pour Centre de Formation à {city}',
    priceHeroTitle: 'Combien Coûte un Logiciel de Gestion pour Centre de Formation à {city} ?',
    priceHeroSubtitle: 'Repères tarifaires du marché ouest-africain et étude sur-mesure par BAROUBA GROUP pour numériser votre établissement sans surcoût.',
    marketPriceRanges: [
      {
        tier: 'Logiciel Standard / Modèle Basique',
        range: '600 000 — 1 200 000 FCFA',
        desc: 'Gestion basique des étudiants et notes, sans paiement Mobile Money intégré ni notifications automatisées.'
      },
      {
        tier: 'Système ERP Établissement Complet',
        range: '1 800 000 — 3 500 000 FCFA',
        desc: 'Portail étudiant, gestion de scolarité, plannings des salles et compatibilité paiement électronique local.'
      },
      {
        tier: 'Solution Éducative Métier Sur-Mesure (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Développement sur-mesure Next.js 16, authentification sécurisée, QR codes de certification, intégration Mobile Money et WhatsApp.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre d\'étudiants et d\'utilisateurs administratifs simultanés',
      'Module d\'encaissement direct des frais par Wave et Orange Money',
      'Système de génération et vérification de diplômes sécurisés par QR code',
      'Besoins spécifiques de passerelles avec la comptabilité de l\'institut'
    ],
    priceFaq: [
      {
        question: 'Y a-t-il un abonnement mensuel obligatoire ?',
        answer: 'Nous privilégions la cession totale des droits avec une formule sur devis. Une maintenance annuelle optionnelle garantit l\'assistance technique continue.'
      },
      {
        question: 'Formez-vous notre personnel administratif ?',
        answer: 'Oui, une session de prise en main complète pour vos équipes de scolarité et comptabilité est incluse dans notre accompagnement.'
      },
      {
        question: 'Quel est le premier pas pour obtenir une estimation ?',
        answer: 'Contactez notre direction via WhatsApp pour programmer un audit gratuit de 30 minutes de vos flux d\'inscriptions actuels.'
      }
    ]
  },

  // 3. AGENCES IMMOBILIÈRES & PROMOTEURS FONCIERS
  {
    id: 'immobilier',
    name: 'Agences Immobilières & Promoteurs Fonciers',
    badge: 'Parcelles, Villas & Programmes Neufs',
    targetRole: "Promoteurs Immobiliers, Agences Immobilières & Négociants Fonciers",
    solutionSlugPrefix: 'site-web-pour-agence-immobiliere',
    priceSlugPrefix: 'prix-site-web-agence-immobiliere',
    iconName: 'building',
    solutionMetaTitle: 'Site Web & Marketing Immobilier à {city} ({country})',
    solutionHeroTitle: 'Création de Site Web & Tunnels de Vente Immobiliers à {city}',
    solutionHeroSubtitle: 'Vendez vos parcelles loties, villas et programmes neufs plus rapidement grâce à un catalogue d\'autorité et des visites virtuelles captivant la diaspora.',
    solutionChallenges: [
      'Perte de temps considérable avec des curieux insolvables sur Facebook et WhatsApp',
      'Méfiance des acheteurs de la diaspora face aux risques de litiges fonciers',
      'Manque de visibilité des programmes immobiliers premium sur Google'
    ],
    solutionDeliverables: [
      {
        title: 'Catalogue Immobilier Haute Définition & Filtres Avancés',
        desc: 'Présentation par quartier, surface, statut juridique (titre foncier, attestation) et budget avec géolocalisation.'
      },
      {
        title: 'Tunnels de Qualification d\'Acheteurs Solvables',
        desc: 'Questionnaire intelligent filtrant la capacité financière des prospects avant transmission à votre équipe commerciale.'
      },
      {
        title: 'Visites Virtuelles & Intégration Vidéos Drones',
        desc: 'Immersion totale pour rassurer les acheteurs résidant en Europe, en Amérique ou dans les capitales voisines.'
      },
      {
        title: 'Espace Investisseurs Diaspora & Réservations',
        desc: 'Modalités de paiement par tranches, contrats préliminaires téléchargeables et suivi de chantier transparent.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site permet-il de rassurer la diaspora sur la légalité des terrains ?',
        answer: 'Oui, nous mettons en avant les attestations d\'attribution, permis de construire et arrêtés d\'approbation avec des labels de sécurité visuels clairs.'
      },
      {
        question: 'Comment évite-t-on les faux prospects ?',
        answer: 'Nos tunnels de vente intègrent des étapes de qualification par étapes qui écartent les curieux et ne conservent que les acheteurs sérieux.'
      },
      {
        question: 'Peut-on mettre à jour facilement les biens vendus ?',
        answer: 'Un espace d\'administration intuitif vous permet de modifier les prix, marquer les parcelles vendues ou ajouter des photos en 30 secondes.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Agence Immobilière à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web pour Agence Immobilière à {city} ?',
    priceHeroSubtitle: 'Analyse des budgets moyens et conception sur-mesure par BAROUBA GROUP pour rentabiliser chaque hectare commercialisé.',
    marketPriceRanges: [
      {
        tier: 'Site Vitrine Immobilier Basique',
        range: '500 000 — 900 000 FCFA',
        desc: 'Affichage de photos simples et numéro de téléphone, sans visites virtuelles ni tunnels de conversion.'
      },
      {
        tier: 'Plateforme Immobilière avec Filtres Avancés',
        range: '1 500 000 — 3 000 000 FCFA',
        desc: 'Recherche multicritères, formulaire de mandat, intégration WhatsApp et présentation soignée des lotissements.'
      },
      {
        tier: 'Écosystème Digital Promoteur & Diaspora (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 d\'élite, vidéos drones, tunnels de qualification bancaire, CAPI Meta Ads et branding de prestige.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de biens et programmes à intégrer (lotissements, résidences, villas)',
      'Intégration de modules de visite virtuelle 360° et vidéos aériennes',
      'Système de réservation en ligne avec versement d\'acompte',
      'Campagnes publicitaires Meta/Google Ads d\'acquisition ciblées diaspora'
    ],
    priceFaq: [
      {
        question: 'Un site immobilier est-il rentable pour une seule promotion foncière ?',
        answer: 'La vente d\'une seule villa ou de deux parcelles supplémentaires grâce au site rembourse plusieurs fois l\'intégralité de l\'investissement digital.'
      },
      {
        question: 'Proposez-vous aussi les campagnes publicitaires pour vendre les parcelles ?',
        answer: 'Oui, notre équipe Media Buying déploie des campagnes chirurgicales ciblant les cadres locaux et la diaspora en France, au Canada et aux USA.'
      },
      {
        question: 'Quels sont les délais de conception ?',
        answer: 'Comptez environ 3 semaines pour livrer une plateforme immobilière complète et prête à capturer des leads.'
      }
    ]
  },

  // 4. TRANSIT, IMPORT-EXPORT & CARGO CHINE-AFRIQUE
  {
    id: 'transit-cargo',
    name: 'Transit, Import-Export & Cargo Chine-Afrique',
    badge: 'Fret Maritime, Aérien & Tracking',
    targetRole: "Transitaires, Négociants Import-Export & Gérants de Sociétés de Cargo",
    solutionSlugPrefix: 'application-suivi-transit-cargo',
    priceSlugPrefix: 'prix-application-suivi-cargo',
    iconName: 'package',
    solutionMetaTitle: 'Application de Suivi pour Entreprise de Transit Cargo à {city}',
    solutionHeroTitle: 'Application de Tracking & Gestion de Fret Cargo Chine-Afrique à {city}',
    solutionHeroSubtitle: 'Numérisez vos réceptions à Guangzhou et Yiwu, offrez un suivi en direct par numéro de reçu et automatisez le calcul du fret maritime et aérien.',
    solutionChallenges: [
      'Appels et messages WhatsApp incessants de clients demandant "où est mon colis ?"',
      'Erreurs de calcul du volume en CBM et des poids taxation sur des blocs-notes papier',
      'Difficultés de notification lors de l\'arrivée effective des conteneurs au magasin'
    ],
    solutionDeliverables: [
      {
        title: 'Système de Suivi de Colis & Conteneurs par Tracking',
        desc: 'Vos clients saisissent leur numéro de bordereau pour connaître l\'état exact de leur expédition (embarqué, en mer, dédouané, disponible).'
      },
      {
        title: 'Calculatrice Automatique de Fret Aérien & Maritime',
        desc: 'Estimation instantanée des coûts d\'envoi en fonction du poids (kg) ou du volume (CBM) selon vos grilles tarifaires.'
      },
      {
        title: 'Portail Gestionnaire de Magasin & Entrepôt',
        desc: 'Scan des colis à la réception à Guangzhou/Yiwu et validation des sorties au magasin de destination à {city}.'
      },
      {
        title: 'Notifications d\'Arrivée Automatisées par WhatsApp',
        desc: 'Alerte immédiate envoyée au client avec le montant restant à régler dès la disponibilité de son colis.'
      }
    ],
    solutionFaq: [
      {
        question: 'Nos agents en Chine à Guangzhou ou Yiwu peuvent-ils utiliser le système ?',
        answer: 'Oui, la plateforme est accessible mondialement avec des accès sécurisés pour vos équipes en Chine et en Afrique.'
      },
      {
        question: 'Le système gère-t-il les devises chinoises (RMB) et le Franc CFA ?',
        answer: 'Absolument, les conversions de devises et les calculs de taxes douanières peuvent être automatisés selon vos taux du jour.'
      },
      {
        question: 'Les clients ont-ils besoin d\'installer une application pour suivre leurs colis ?',
        answer: 'Non, un simple lien web permet de suivre le colis instantanément sans aucune barrière technique.'
      }
    ],
    priceMetaTitle: 'Prix d\'une Application de Suivi de Transit Cargo à {city}',
    priceHeroTitle: 'Combien Coûte une Application de Suivi pour Société de Cargo à {city} ?',
    priceHeroSubtitle: 'Grille estimative et conception d\'un système de tracking sur-mesure par BAROUBA GROUP pour éliminer les réclamations de fret.',
    marketPriceRanges: [
      {
        tier: 'Module de Suivi Basique',
        range: '700 000 — 1 400 000 FCFA',
        desc: 'Recherche de statut basique basée sur une mise à jour manuelle des statuts sans notifications WhatsApp.'
      },
      {
        tier: 'Système de Gestion Fret & Entrepôt Moyen',
        range: '1 800 000 — 3 800 000 FCFA',
        desc: 'Enregistrement des bordereaux, calculatrice CBM, alertes SMS et gestion des manifestes d\'expédition.'
      },
      {
        tier: 'Écosystème Transit & Cargo Intégré (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 temps réel, portail Chine & Afrique, tracking WhatsApp automatique, gestion des impayés et sécurité renforcée.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre d\'agences et d\'entrepôts connectés (Chine, Dubaï, ports de transit, agences locales)',
      'Intégration des notifications automatiques WhatsApp Cloud API',
      'Niveau de complexité de la gestion des conteneurs partagés (groupage / LCL)',
      'Fonctionnalités de facturation et encaissement Mobile Money à la livraison'
    ],
    priceFaq: [
      {
        question: 'Combien de temps faut-il pour déployer le système de tracking ?',
        answer: 'Entre 3 et 5 semaines pour paramétrer le système, importer vos anciennes données et former vos agents d\'entrepôt.'
      },
      {
        question: 'Le système réduit-il vraiment les appels clients ?',
        answer: 'Nos clients transitaires constatent une baisse de plus de 75 % des appels de réclamation grâce à l\'autonomie offerte aux clients.'
      },
      {
        question: 'Comment débuter la mise en place ?',
        answer: 'Prenez contact avec nos consultants pour auditer votre circuit d\'enregistrement de colis actuel.'
      }
    ]
  },

  // 5. COMPAGNIES DE TRANSPORT INTERURBAIN & LIGNES DE CARS
  {
    id: 'compagnie-transport',
    name: 'Compagnies de Transport & Cars',
    badge: 'Billetterie en Ligne & Gestion des Lignes',
    targetRole: "Directeurs Généraux & Chefs d'Exploitation de Compagnies de Transport",
    solutionSlugPrefix: 'logiciel-billetterie-compagnie-transport',
    priceSlugPrefix: 'prix-logiciel-billetterie-transport',
    iconName: 'bus',
    solutionMetaTitle: 'Logiciel de Billetterie pour Compagnie de Transport à {city}',
    solutionHeroTitle: 'Logiciel de Billetterie & Réservation en Ligne pour Compagnie de Car à {city}',
    solutionHeroSubtitle: 'Désengorgez vos guichets, permettez aux passagers d\'acheter leur billet par Mobile Money et sécurisez vos recettes de voyage.',
    solutionChallenges: [
      'Affluence monstre et bousculades aux guichets avant les départs de cars',
      'Risques de détournements de fonds et erreurs de caisse lors des encaissements manuels',
      'Difficultés de remplissage optimal des sièges sur les départs hors heures de pointe'
    ],
    solutionDeliverables: [
      {
        title: 'Guichet Numérique & Réservation de Sièges',
        desc: 'Sélection interactive du car, de la date, de l\'horaire et de la place assise directement sur smartphone.'
      },
      {
        title: 'Paiement Instantané Wave, Orange & Moov Money',
        desc: 'Encaissement direct sans monnaie physique et génération immédiate du billet électronique.'
      },
      {
        title: 'Application Scanner Contrôleur de Quai',
        desc: 'Validation des tickets en 1 seconde à la porte du car via scan du QR code sans risque de double utilisation.'
      },
      {
        title: 'Tableau de Bord Recettes & Taux de Remplissage',
        desc: 'Visibilité totale pour la direction sur les recettes par car, ligne, guichet et statistiques passagers.'
      }
    ],
    solutionFaq: [
      {
        question: 'Les passagers reçoivent-ils leur billet directement sur WhatsApp ?',
        answer: 'Oui, dès le paiement validé, un ticket PDF officiel avec QR code infalsifiable est délivré sur leur WhatsApp.'
      },
      {
        question: 'Que se passe-t-il si la connexion internet est faible à la gare ?',
        answer: 'L\'application de contrôle fonctionne avec un mode hors-ligne synchronisé pour valider les billets sans coupure.'
      },
      {
        question: 'Le système permet-il d\'éliminer les fraudes de billetterie ?',
        answer: 'Chaque ticket possède une signature cryptographique unique : un billet déjà scanné est immédiatement rejeté lors d\'une seconde présentation.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Logiciel de Billetterie pour Compagnie de Transport à {city}',
    priceHeroTitle: 'Combien Coûte un Logiciel de Billetterie pour Compagnie de Car à {city} ?',
    priceHeroSubtitle: 'Cadre tarifaire et rentabilité de la digitalisation de billetterie pour transporteurs routiers par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Logiciel de Guichet Local Basique',
        range: '800 000 — 1 500 000 FCFA',
        desc: 'Gestion des départs en gare uniquement, impression thermique sans vente en ligne sur smartphone.'
      },
      {
        tier: 'Système Billetterie Web & Mobile Intermédiaire',
        range: '2 500 000 — 5 000 000 FCFA',
        desc: 'Réservation en ligne, passerelle Mobile Money et gestion centralisée de plusieurs gares routières.'
      },
      {
        tier: 'Infrastructure Transport Haute Disponibilité (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 tolérante aux pannes, tickets WhatsApp QR Code, terminaux de scan, contrôle carburant et fret bagages.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de gares routières et de guichets physiques à interconnecter',
      'Flotte de cars et volume journalier de passagers transportés',
      'Fourniture et paramétrage des terminaux mobiles de contrôle (scanners QR code)',
      'Modules additionnels de gestion du fret express de colis et bagages'
    ],
    priceFaq: [
      {
        question: 'En combien de temps l\'investissement est-il rentabilisé ?',
        answer: 'La suppression des fraudes et l\'augmentation du taux de remplissage rentabilisent généralement le dispositif en moins de 3 mois d\'exploitation.'
      },
      {
        question: 'Proposez-vous une assistance pour former les guichetiers ?',
        answer: 'Oui, une formation pratique sur site dans vos différentes gares est incluse dans notre accompagnement.'
      },
      {
        question: 'Peut-on démarrer sur une seule ligne pilote ?',
        answer: 'Tout à fait, nous pouvons déployer le système sur votre axe principal avant de le généraliser à l\'ensemble du réseau.'
      }
    ]
  },

  // 6. CLINIQUES, POLYCLINIQUES & CABINETS MÉDICAUX
  {
    id: 'clinique-medicale',
    name: 'Cliniques, Polycliniques & Cabinets Médicaux',
    badge: 'Santé, Spécialités & Prise de Rendez-Vous',
    targetRole: "Médecins-Chefs, Directeurs de Cliniques & Gestionnaires de Centres Médicaux",
    solutionSlugPrefix: 'site-web-pour-clinique-medicale',
    priceSlugPrefix: 'prix-site-web-clinique-medicale',
    iconName: 'heart',
    solutionMetaTitle: 'Création de Site Web pour Clinique Médicale à {city} ({country})',
    solutionHeroTitle: 'Conception de Site Web & Portail Patient pour Clinique Médicale à {city}',
    solutionHeroSubtitle: 'Valorisez l\'excellence de votre plateau technique, facilitez la prise de rendez-vous en ligne et renforcez votre réputation médicale.',
    solutionChallenges: [
      'Saturation du standard téléphonique pour de simples renseignements sur les horaires et spécialistes',
      'Absence de visibilité sur les examens disponibles (laboratoire, imagerie, bloc opératoire)',
      'Patients cherchant en urgence des spécialistes sans trouver les compétences de votre clinique sur Google'
    ],
    solutionDeliverables: [
      {
        title: 'Présentation Détaillée du Plateau Technique & Spécialités',
        desc: 'Mise en valeur de vos équipements (scanner, IRM, échographie) et fiches de présentation des médecins spécialistes.'
      },
      {
        title: 'Module de Prise de Rendez-Vous Consultation 24/7',
        desc: 'Choix de la spécialité, de la date et transmission instantanée au secrétariat médical avec rappel automatique.'
      },
      {
        title: 'Guide des Urgences & Permanence Médicale',
        desc: 'Bouton d\'appel d\'urgence direct en 1 clic et itinéraire Google Maps précis pour les ambulances et urgences.'
      },
      {
        title: 'Espace Résultats d\'Analyses & Confidentialité',
        desc: 'Accès sécurisé respectant le secret médical pour le téléchargement des comptes-rendus de laboratoire.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site respecte-t-il la déontologie médicale de l\'Ordre des Médecins ?',
        answer: 'Parfaitement. Le contenu est informatif, digne et sobre, sans promesse publicitaire mensongère, conformément aux codes de santé publique.'
      },
      {
        question: 'Les patients peuvent-ils payer leurs consultations en ligne ?',
        answer: 'Oui, le règlement des frais de consultation peut être activé par Mobile Money ou carte bancaire selon vos protocoles.'
      },
      {
        question: 'Le secrétariat peut-il gérer facilement les créneaux des médecins ?',
        answer: 'Une interface claire permet d\'ouvrir ou bloquer des plages horaires selon les gardes et congés des praticiens.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Clinique Médicale à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web pour Clinique ou Polyclinique à {city} ?',
    priceHeroSubtitle: 'Grille tarifaire et méthodologie médicale sur-mesure de BAROUBA GROUP pour valoriser vos soins de santé.',
    marketPriceRanges: [
      {
        tier: 'Site Vitrine Médical Simple',
        range: '500 000 — 950 000 FCFA',
        desc: 'Présentation des spécialités et coordonnées, sans module de rendez-vous ni espace résultats.'
      },
      {
        tier: 'Portail Clinique & Rendez-Vous Intermédiaire',
        range: '1 400 000 — 2 800 000 FCFA',
        desc: 'Prise de rendez-vous en ligne, fiches médecins, horaires de gardes et géolocalisation optimisée.'
      },
      {
        tier: 'Plateforme Hospitalière Sécurisée (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 chiffrée, conformité RGPD/secret médical, portail laboratoire, rappels WhatsApp et réputation Google Maps.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de services médicaux et de praticiens à intégrer',
      'Module de rendez-vous en temps réel synchronisé avec le secrétariat',
      'Espace patient sécurisé pour téléchargement des résultats d\'analyses',
      'Optimisation SEO local pour dominer les recherches de santé de la ville'
    ],
    priceFaq: [
      {
        question: 'Pourquoi investir dans un site médical sur-mesure ?',
        answer: 'Parce que les patients choisissent désormais leur clinique sur Google. Une présence soignée inspire confiance et attire une patientèle fidèle et solvable.'
      },
      {
        question: 'Assurez-vous la protection des données médicales des patients ?',
        answer: 'Oui, nous appliquons les normes les plus strictes de chiffrement et de protection des données de santé.'
      },
      {
        question: 'Quel est le délai pour mettre en ligne le portail ?',
        answer: 'Environ 3 semaines après recueil des informations médicales et validation de la direction.'
      }
    ]
  },

  // 7. HÔTELS, RÉSIDENCES MEUBLÉES & COMPLEXES TOURISTIQUES
  {
    id: 'hotel-residence',
    name: 'Hôtels & Résidences Meublées',
    badge: 'Réservation Directe sans Commission',
    targetRole: "Propriétaires & Directeurs d'Hôtels et de Résidences de Standing",
    solutionSlugPrefix: 'site-web-reservation-hotel',
    priceSlugPrefix: 'prix-site-web-reservation-hotel',
    iconName: 'hotel',
    solutionMetaTitle: 'Site Web & Réservation pour Hôtel à {city} ({country})',
    solutionHeroTitle: 'Création de Site Web avec Réservation Directe pour Hôtel à {city}',
    solutionHeroSubtitle: 'Affranchissez-vous des commissions abusives de Booking et Airbnb : vendez vos chambres et suites en direct avec paiement Mobile Money.',
    solutionChallenges: [
      'Perte de 15 à 25% de marge reversée aux plateformes de réservation internationales',
      'Réservations non honorées et no-shows pénalisant le chiffre d\'affaires des chambres',
      'Visuels médiocres ne mettant pas en valeur le charme et le confort de l\'établissement'
    ],
    solutionDeliverables: [
      {
        title: 'Moteur de Réservation Directe 0% de Commission',
        desc: 'Calendrier des disponibilités en direct, sélection des types de chambres (standard, VIP, suite) et calcul automatique du séjour.'
      },
      {
        title: 'Visites Immersives & Galeries Photos Premium',
        desc: 'Mise en lumière des équipements (piscine, restaurant, salle de conférence, wifi, climatisation) pour déclencher le coup de cœur.'
      },
      {
        title: 'Encaissement des Nuitées par Mobile Money & CB',
        desc: 'Paiement de la première nuitée ou de la totalité du séjour par Wave, Orange Money ou carte bancaire pour garantir la réservation.'
      },
      {
        title: 'Gestion des Salles d\'Événements & Séminaires',
        desc: 'Module de demande de devis pour mariages, banquets, ateliers d\'entreprises et pauses-café professionnelles.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le système permet-il d\'éviter les doubles réservations (overbooking) ?',
        answer: 'Oui, les disponibilités sont actualisées en temps réel dès qu\'une chambre est réservée et payée.'
      },
      {
        question: 'Comment les clients reçoivent-ils leur confirmation d\'hébergement ?',
        answer: 'Un récapitulatif officiel avec numéro de réservation est envoyé instantanément par email et WhatsApp.'
      },
      {
        question: 'Peut-on gérer des tarifs saisonniers ou pour week-ends ?',
        answer: 'Une interface d\'administration vous permet d\'ajuster les prix selon la haute saison, les salons professionnels ou les vacances.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Hôtel & Résidence à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web avec Réservation pour Hôtel à {city} ?',
    priceHeroSubtitle: 'Coûts de marché et rentabilité d\'une plateforme hôtelière indépendante conçue par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Site Vitrine Hôtelier Simple',
        range: '500 000 — 900 000 FCFA',
        desc: 'Galerie photos et formulaire de demande de disponibilité sans paiement ni synchronisation de calendrier.'
      },
      {
        tier: 'Plateforme Réservation Standard',
        range: '1 500 000 — 2 900 000 FCFA',
        desc: 'Moteur de réservation en ligne, gestion des chambres, intégration Mobile Money et confirmations automatiques.'
      },
      {
        tier: 'Système Hôtelier d\'Élite & Tunnels Directs (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 ultra-rapide, zéro commission OTA, paiements unifiés, SEO local hôtelier et tunnel WhatsApp direct.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de chambres, suites et appartements meublés à configurer',
      'Passerelle d\'encaissement direct multi-moyens (Mobile Money + Cartes)',
      'Module de réservation d\'espaces événementiels et séminaires',
      'Intégration d\'outils de gestion de ménage et de planning de personnel'
    ],
    priceFaq: [
      {
        question: 'Combien d\'économies réalise un hôtel avec un site de réservation directe ?',
        answer: 'Pour un hôtel réalisant 10 millions FCFA de chiffre d\'affaires mensuel, économiser 20% de commissions Booking représente 2 millions FCFA de bénéfice net supplémentaire chaque mois.'
      },
      {
        question: 'Aidez-vous à rédiger les textes et optimiser les photos ?',
        answer: 'Oui, nous sublimons vos visuels et rédigeons des textes persuasifs mettant en avant vos atouts exclusifs.'
      },
      {
        question: 'Quel est le délai de livraison ?',
        answer: 'Environ 3 semaines pour livrer un hôtel prêt à encaisser des réservations directes.'
      }
    ]
  },

  // 8. ENTREPRISES DE BTP, GÉNIE CIVIL & ARCHITECTURE
  {
    id: 'btp-construction',
    name: 'Entreprises de BTP & Construction',
    badge: 'Ouvrages, Chantiers & Appels d\'Offres',
    targetRole: "Directeurs Généraux d'Entreprises de BTP, Ingénieurs & Cabinets d'Architecture",
    solutionSlugPrefix: 'site-web-pour-entreprise-btp',
    priceSlugPrefix: 'prix-site-web-entreprise-btp',
    iconName: 'hard-hat',
    solutionMetaTitle: 'Site Web pour Entreprise de BTP & Construction à {city}',
    solutionHeroTitle: 'Création de Site Web Institutionnel pour Entreprise de BTP à {city}',
    solutionHeroSubtitle: 'Bâtissez une crédibilité technique irréprochable pour remporter de grands marchés publics, appels d\'offres et chantiers privés d\'envergure.',
    solutionChallenges: [
      'Perte de marchés prestigieux au profit de concurrents disposant d\'une vitrine corporate plus solide',
      'Difficultés à prouver visuellement ses références et la qualité de ses ouvrages d\'art réalisés',
      'Absence de documentation téléchargeable pour les commissions de dépouillement d\'appels d\'offres'
    ],
    solutionDeliverables: [
      {
        title: 'Portfolio d\'Ouvrages d\'Art & Chantiers Réalisés',
        desc: 'Présentation détaillée par catégorie (bâtiments industriels, voirie bitumée, forages, villas de luxe) avec avant/après.'
      },
      {
        title: 'Espace Téléchargement Dossiers Techniques & Agréments',
        desc: 'Mise à disposition sécurisée des certificats de bonne fin d\'exécution, agréments ministériels et bilans certifiés.'
      },
      {
        title: 'Parc Matériel & Engins Lourds en Ligne',
        desc: 'Inventaire photographique de vos engins (pelles, niveleuses, camions, centrales à béton) prouvant votre capacité opérationnelle.'
      },
      {
        title: 'Formulaire d\'Appel d\'Offres & Consultation d\'Entreprise',
        desc: 'Canal direct permettant aux maîtres d\'ouvrage de vous soumettre leurs plans et cahiers des charges pour cotation.'
      }
    ],
    solutionFaq: [
      {
        question: 'Un site web aide-t-il vraiment à remporter des marchés publics ?',
        answer: 'Indéniablement. Les comités d\'évaluation et les bailleurs de fonds (Banque Mondiale, BAD, AFD) vérifient systématiquement l\'existence et la stature numérique de l\'entreprise soumissionnaire.'
      },
      {
        question: 'Peut-on ajouter de nouveaux chantiers en cours d\'exécution ?',
        answer: 'Oui, une interface simplifiée permet d\'ajouter de nouvelles réalisations avec photos en quelques clics depuis un téléphone.'
      },
      {
        question: 'Le site est-il adapté pour postuler à des marchés sous-régionaux ?',
        answer: 'Tout à fait, nous concevons un portail d\'envergure internationale mettant en avant vos capacités d\'intervention transfrontalières.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Entreprise de BTP à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web pour Entreprise de BTP à {city} ?',
    priceHeroSubtitle: 'Investissement et devis sur-mesure pour doter votre société de construction d\'un portail corporate d\'autorité.',
    marketPriceRanges: [
      {
        tier: 'Site Présentation BTP Basique',
        range: '600 000 — 1 100 000 FCFA',
        desc: 'Quelques pages de présentation générale et formulaire de contact, sans portfolio dynamique ni fiches chantiers approfondies.'
      },
      {
        tier: 'Portail BTP & Références Structuré',
        range: '1 600 000 — 3 200 000 FCFA',
        desc: 'Portfolio par catégories, présentation du parc matériel, fiches d\'ouvrages et agréments téléchargeables.'
      },
      {
        tier: 'Infrastructure Corporate BTP d\'Élite (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 d\'autorité, optimisation appels d\'offres internationaux, vidéos de chantiers, SEO B2B et sécurité maximale.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Volume de chantiers et d\'ouvrages à documenter dans le portfolio',
      'Réalisation de prises de vues photographiques ou vidéo professionnelles de chantiers',
      'Besoins multilingues pour postuler auprès d\'institutions internationales (Français / Anglais)',
      'Intégration d\'un portail interne pour suivi de l\'avancement des travaux avec les clients'
    ],
    priceFaq: [
      {
        question: 'Pourquoi faire appel à BAROUBA GROUP pour le BTP ?',
        answer: 'Parce que nous comprenons les critères de sélection des grands donneurs d\'ordre et structurons votre site pour projeter une puissance technique incontestable.'
      },
      {
        question: 'Quel est le temps nécessaire pour la réalisation ?',
        answer: 'Entre 2 et 4 semaines pour livrer un portail institutionnel d\'élite.'
      },
      {
        question: 'Comment obtenir notre proposition financière ?',
        answer: 'Échangez directement sur WhatsApp avec nos ingénieurs pour définir le périmètre de votre portfolio.'
      }
    ]
  },

  // 9. BOUTIQUES & MARQUES DE COSMÉTIQUES ET BEAUTÉ
  {
    id: 'cosmetique',
    name: 'Boutiques & Marques Cosmétiques',
    badge: 'E-Commerce Beauté, Soins & Livraisons COD',
    targetRole: "Créateurs de Marques Cosmétiques & Propriétaires d'Instituts de Beauté",
    solutionSlugPrefix: 'boutique-en-ligne-cosmetique',
    priceSlugPrefix: 'prix-boutique-en-ligne-cosmetique',
    iconName: 'sparkles',
    solutionMetaTitle: 'Boutique en Ligne pour Cosmétiques à {city} ({country})',
    solutionHeroTitle: 'Création de Boutique E-Commerce & Tunnels Cosmétiques à {city}',
    solutionHeroSubtitle: 'Vendez vos produits de soins capillaires, corporels et maquillage 24h/24 avec encaissement Mobile Money et gestion du Cash on Delivery.',
    solutionChallenges: [
      'Saturation des discussions WhatsApp pour répéter sans cesse les prix et modes d\'emploi',
      'Taux d\'annulation élevé des commandes en livraison contre remboursement',
      'Difficultés à inciter les clientes à acheter des routines complètes (packs) plutôt qu\'un seul produit'
    ],
    solutionDeliverables: [
      {
        title: 'Boutique E-Commerce Ultra-Rapide Spéciale Beauté',
        desc: 'Affichage éblouissant de vos gammes de produits, photos avant/après, avis clientes authentiques et conseils d\'utilisation.'
      },
      {
        title: 'Tunnels de Vente pour Routines & Packs Beauté',
        desc: 'Entonnoirs optimisés proposant des ventes incitatives (cross-sell/upsell) pour doubler le panier moyen de chaque commande.'
      },
      {
        title: 'Système de Confirmation Automatique Anti-Retours COD',
        desc: 'Validation automatique de l\'adresse et de l\'heure de livraison par WhatsApp pour diviser par trois les colis refusés.'
      },
      {
        title: 'Paiement Wave, Orange & Moov Money Intégré',
        desc: 'Permettez à vos clientes de régler immédiatement ou à la livraison avec suivi des livreurs en temps réel.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site aide-t-il à vendre des packs de soins complets ?',
        answer: 'Oui, nous configurons des offres groupées irrésistibles qui encouragent les clientes à acheter la routine complète plutôt qu\'un seul pot de crème.'
      },
      {
        question: 'Comment gérer les commandes passées depuis d\'autres villes ?',
        answer: 'Le système calcule automatiquement les frais d\'expédition selon la localité ou la compagnie de transport partenaire.'
      },
      {
        question: 'Peut-on synchroniser la boutique avec TikTok et Facebook Ads ?',
        answer: 'Nous installons l\'API de conversion officielle Meta et le pixel TikTok pour maximiser la rentabilité de vos publicités vidéo.'
      }
    ],
    priceMetaTitle: 'Prix d\'une Boutique en Ligne Cosmétique à {city}',
    priceHeroTitle: 'Combien Coûte une Boutique E-Commerce Cosmétique à {city} ?',
    priceHeroSubtitle: 'Investissement transparent et rentabilité immédiate pour marques de beauté et distributeurs cosmétiques par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Boutique Simple / Catalogue Visuel',
        range: '400 000 — 750 000 FCFA',
        desc: 'Catalogue en ligne avec boutons WhatsApp simples, sans gestion de stock automatisée ni tunnels de vente.'
      },
      {
        tier: 'E-Commerce Beauté avec Paiement & Stocks',
        range: '1 200 000 — 2 400 000 FCFA',
        desc: 'Boutique complète, passerelles Mobile Money, gestion des expéditions et fiches produits optimisées.'
      },
      {
        tier: 'Machine à Vendre Beauté & Tunnels 1-Clic (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Plateforme Next.js 16 d\'élite, tunnels d\'upsell routines, tracking CAPI Meta/TikTok Ads et confirmation WhatsApp anti-retours COD.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de références produits et gammes de soins au catalogue',
      'Intégration d\'un tunnel de confirmation de livraison par WhatsApp API',
      'Mise en place de programmes de fidélité et codes promo automatisés',
      'Création des visuels publicitaires et campagnes Meta/TikTok Ads'
    ],
    priceFaq: [
      {
        question: 'Le site e-commerce est-il simple à gérer pour quelqu\'un sans compétences tech ?',
        answer: 'Absolument. Vous recevez une formation vidéo de 30 minutes qui vous montre comment ajouter un produit et gérer vos commandes depuis votre téléphone.'
      },
      {
        question: 'En combien de temps la boutique peut-elle être opérationnelle ?',
        answer: 'Sous 10 à 15 jours après remise de vos fiches produits et visuels.'
      },
      {
        question: 'Comment débuter la création ?',
        answer: 'Envoyez-nous un message WhatsApp pour analyser vos produits et recevoir une proposition sur-mesure.'
      }
    ]
  },

  // 10. CONCESSIONNAIRES & PARCS DE VENTE DE VÉHICULES
  {
    id: 'concessionnaire-auto',
    name: 'Concessionnaires & Parcs Automobiles',
    badge: 'Véhicules Neufs/Occasion & Financement',
    targetRole: "Propriétaires de Parcs Auto, Concessionnaires & Importateurs de Véhicules",
    solutionSlugPrefix: 'site-web-vente-de-voitures',
    priceSlugPrefix: 'prix-site-web-vente-voitures',
    iconName: 'car',
    solutionMetaTitle: 'Site Web pour Vente de Voitures & Parc Auto à {city}',
    solutionHeroTitle: 'Création de Site Web pour Concessionnaire & Vente Automobile à {city}',
    solutionHeroSubtitle: 'Accélérez la rotation de votre parc automobile : exposez vos véhicules neufs et d\'occasion avec fiches techniques détaillées et filtres de recherche.',
    solutionChallenges: [
      'Voitures restant immobilisées des mois sur le parc par manque d\'exposition qualifiée',
      'Acheteurs potentiels hésitant à se déplacer sans connaître l\'état mécanique exact et le prix',
      'Difficultés à capter les acheteurs de véhicules de standing et les entreprises de leasing'
    ],
    solutionDeliverables: [
      {
        title: 'Showroom Virtuel Automobile & Recherche Avancée',
        desc: 'Filtrage par marque, modèle, année, carburant, boîte de vitesse, kilométrage et budget mensuel.'
      },
      {
        title: 'Fiches Véhicules Riches avec Photos Multangles & Vidéos',
        desc: 'Présentation sous tous les angles (carrosserie, habitacle, moteur) et rapports d\'inspection mécanique.'
      },
      {
        title: 'Simulateur de Crédit Auto & Financement Bancaire',
        desc: 'Estimation des mensualités pour les salariés et fonctionnaires avec formulaire de demande de prêt bancaire.'
      },
      {
        title: 'Prise de Rendez-Vous pour Essai sur Parc',
        desc: 'Réservation d\'un créneau de test directement synchronisée sur le WhatsApp de vos conseillers commerciaux.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site gère-t-il à la fois les voitures neuves et les occasions d\'Europe/Amérique ?',
        answer: 'Oui, vous pouvez catégoriser vos véhicules selon leur provenance (dédouané localement, en transit, commande spéciale sur devis).'
      },
      {
        question: 'Peut-on proposer la reprise d\'un ancien véhicule ?',
        answer: 'Nous intégrons un module d\'estimation de reprise où l\'acheteur envoie les photos de son ancienne voiture pour cotation.'
      },
      {
        question: 'Comment le site aide-t-il à vendre plus vite ?',
        answer: 'Vos annonces sont optimisées pour Google et partagées en 1 clic sur les réseaux sociaux avec un professionnalisme rassurant.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Vente de Voitures à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web pour Concessionnaire Automobile à {city} ?',
    priceHeroSubtitle: 'Investissement et rentabilité d\'un showroom automobile digital conçu par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Catalogue Auto Basique',
        range: '500 000 — 950 000 FCFA',
        desc: 'Listing de véhicules simple sans filtres de recherche poussés ni simulateur de crédit.'
      },
      {
        tier: 'Plateforme Concessionnaire Automobile Complète',
        range: '1 500 000 — 3 000 000 FCFA',
        desc: 'Recherche multicritères, fiches techniques riches, simulateur financier et demandes d\'essai en ligne.'
      },
      {
        tier: 'Showroom Automobile d\'Élite (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16, vidéos 360°, intégration WhatsApp directe, CAPI Meta Ads pour retargeting et gestion de stock.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Volume de véhicules en stock et fréquence de rotation des annonces',
      'Intégration d\'un simulateur de leasing / crédit avec des banques partenaires',
      'Module d\'estimation de reprise de véhicule en ligne',
      'Campagnes publicitaires Meta/Google Ads pour liquider les stocks dormants'
    ],
    priceFaq: [
      {
        question: 'La vente d\'un seul véhicule amortit-elle le site ?',
        answer: 'Largement. La marge dégagée sur la vente d\'une seule voiture compense intégralement le coût de conception de la plateforme.'
      },
      {
        question: 'Pouvons-nous mettre à jour les véhicules nous-mêmes ?',
        answer: 'Oui, une interface intuitive vous permet de poster un véhicule en 2 minutes depuis votre smartphone dès sa sortie du lavage.'
      },
      {
        question: 'Comment démarrer ?',
        answer: 'Contactez-nous sur WhatsApp pour une démonstration personnalisée d\'un showroom digital automobile.'
      }
    ]
  },

  // 11. CABINETS JURIDIQUES, NOTAIRES & AVOCATS D'AFFAIRES
  {
    id: 'cabinet-juridique',
    name: 'Cabinets d\'Avocats, Notaires & Juristes d\'Affaires',
    badge: 'Droit, Notariat & Actes Authentiques',
    targetRole: "Avocats Associés, Notaires & Conseils Juridiques d'Entreprises",
    solutionSlugPrefix: 'site-web-pour-cabinet-avocat-notaire',
    priceSlugPrefix: 'prix-site-web-cabinet-juridique',
    iconName: 'scale',
    solutionMetaTitle: 'Site Web pour Cabinet d\'Avocat & Notaire à {city}',
    solutionHeroTitle: 'Création de Site Web Institutionnel pour Avocats & Notaires à {city}',
    solutionHeroSubtitle: 'Affirmez votre autorité doctrinale, sécurisez la transmission des pièces de vos clients et attirez des dossiers d\'affaires à haute valeur.',
    solutionChallenges: [
      'Difficulté à se distinguer dans un cadre réglementé interdisant la publicité agressive',
      'Temps précieux perdu à répondre au téléphone pour des demandes juridiques imprécises',
      'Échanges de pièces sensibles par des messageries non sécurisées'
    ],
    solutionDeliverables: [
      {
        title: 'Portail Institutionnel Conforme à la Déontologie',
        desc: 'Design sobre, élégant et digne, mettant en valeur l\'expertise des associés, les domaines d\'intervention et les publications.'
      },
      {
        title: 'Prise de Rendez-Vous de Consultation Juridique',
        desc: 'Formulaire de qualification du dossier permettant au client de préciser sa demande (droit des affaires, foncier, famille) à l\'avance.'
      },
      {
        title: 'Espace Dépôt de Pièces & Actes Sécurisé',
        desc: 'Canal chiffré pour le téléchargement des statuts, actes de vente, jugements et pièces d\'identité en toute confidentialité.'
      },
      {
        title: 'Section Publications & Veille Juridique',
        desc: 'Espace d\'analyse juridique démontrant votre maîtrise du droit OHADA, du droit fiscal et du code des investissements.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site respecte-t-il les règles du Barreau et de la Chambre des Notaires ?',
        answer: 'Absolument. Nous connaissons les exigences déontologiques : aucune mention mercantile tapageuse, une présentation noble et rigoureuse.'
      },
      {
        question: 'Comment sont protégés les documents juridiques déposés ?',
        answer: 'Toutes les communications bénéficient d\'un chiffrement SSL/TLS bancaire avec stockage isolé et sécurisé.'
      },
      {
        question: 'Le cabinet peut-il facturer les consultations préliminaires en ligne ?',
        answer: 'Oui, si la déontologie de votre ordre le permet, nous pouvons intégrer le règlement préalable des honoraires de consultation.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Cabinet d\'Avocat ou Notaire à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web pour Cabinet Juridique à {city} ?',
    priceHeroSubtitle: 'Investissement mesuré et stature de prestige pour professionnels du droit par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Site Vitrine Juridique Simple',
        range: '600 000 — 1 200 000 FCFA',
        desc: 'Présentation des associés et compétences, coordonnées et formulaire de contact conforme.'
      },
      {
        tier: 'Portail Cabinet & Prise de Rendez-Vous',
        range: '1 600 000 — 3 200 000 FCFA',
        desc: 'Espace rendez-vous qualifié, blog de veille juridique OHADA, fiches de compétences et SEO d\'autorité.'
      },
      {
        tier: 'Portail Juridique d\'Affaires d\'Élite (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 de grand prestige, espace de dépôt chiffré, conformité ordinale totale et positionnement Google d\'excellence.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre d\'associés, collaborateurs et domaines de spécialisation',
      'Mise en place d\'un espace client sécurisé pour l\'échange de pièces',
      'Rédaction juridique assistée pour optimiser le référencement naturel',
      'Version bilingue pour accompagner les investisseurs internationaux'
    ],
    priceFaq: [
      {
        question: 'Pourquoi un cabinet d\'avocats a-t-il besoin d\'un site web moderne ?',
        answer: 'Parce que les directions juridiques de multinationales et les investisseurs recherchent désormais leurs conseils locaux sur Google.'
      },
      {
        question: 'Quel est le délai de livraison ?',
        answer: 'Environ 3 semaines, incluant les allers-retours de relecture pour garantir une conformité totale.'
      },
      {
        question: 'Comment débuter la conception ?',
        answer: 'Contactez notre direction pour une consultation préalable confidentielle sur vos besoins digitaux.'
      }
    ]
  },

  // 12. INSTITUTIONS DE MICROFINANCE & SYSTÈMES FINANCIERS DÉCENTRALISÉS (SFD)
  {
    id: 'microfinance',
    name: 'Institutions de Microfinance & SFD',
    badge: 'Épargne, Crédit & Inclusion Financière',
    targetRole: "Directeurs Généraux, Présidents de CA & Cadres de Systèmes Financiers Décentralisés",
    solutionSlugPrefix: 'portail-web-institution-microfinance',
    priceSlugPrefix: 'prix-digitalisation-microfinance',
    iconName: 'landmark',
    solutionMetaTitle: 'Portail Web pour Institution de Microfinance à {city}',
    solutionHeroTitle: 'Digitalisation & Portail Web pour Institution de Microfinance à {city}',
    solutionHeroSubtitle: 'Modernisez votre SFD face aux fintechs : simulation de crédit en ligne, adhésions numériques et rappels d\'échéances par WhatsApp.',
    solutionChallenges: [
      'Concurrence agressive des solutions Mobile Money privées qui captent l\'épargne des ménages',
      'Taux d\'impayés élevé dû à des relances de remboursement manuelles et tardives',
      'Difficultés des sociétaires ruraux ou périurbains à se déplacer en agence pour de simples démarches'
    ],
    solutionDeliverables: [
      {
        title: 'Portail Institutionnel d\'Autorité & Transparence',
        desc: 'Présentation des produits d\'épargne, de tontine moderne et de microcrédit avec mise en valeur de l\'agrément ministériel.'
      },
      {
        title: 'Simulateur de Crédit & Demande d\'Adhésion en Ligne',
        desc: 'Calcul instantané des mensualités selon le montant et la durée avec pré-dépôt des justificatifs de revenus.'
      },
      {
        title: 'Système Automatisé de Rappel d\'Échéances WhatsApp',
        desc: 'Alertes courtoises envoyées 3 jours avant chaque échéance de remboursement pour faire chuter les impayés de plus de 40%.'
      },
      {
        title: 'Cartographie des Agences & Points de Service',
        desc: 'Localisation précise de vos guichets avec horaires d\'ouverture pour guider facilement les sociétaires.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le système respecte-t-il les réglementations BCEAO et COBAC ?',
        answer: 'Oui, nos architectures appliquent les normes de sécurité bancaire, de traçabilité des opérations et d\'intégrité des données.'
      },
      {
        question: 'Peut-on connecter le site au Core Banking de la microfinance ?',
        answer: 'Nous pouvons concevoir des passerelles sécurisées d\'échange d\'informations via API ou exports chiffrés.'
      },
      {
        question: 'Comment les sociétaires analphabètes ou ruraux sont-ils pris en compte ?',
        answer: 'L\'intégration de messages vocaux ou de menus simples sur WhatsApp permet une accessibilité maximale sans barrière technique.'
      }
    ],
    priceMetaTitle: 'Prix de Digitalisation pour Institution de Microfinance à {city}',
    priceHeroTitle: 'Combien Coûte la Digitalisation d\'une Institution de Microfinance à {city} ?',
    priceHeroSubtitle: 'Étude d\'impact, devis transparent et rentabilité de la modernisation pour SFD par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Site Institutionnel Microfinance Simple',
        range: '750 000 — 1 400 000 FCFA',
        desc: 'Présentation des produits d\'épargne et crédits, sans simulateur interactif ni rappels automatisés.'
      },
      {
        tier: 'Portail Sociétaire & Simulateur Intermédiaire',
        range: '2 000 000 — 4 200 000 FCFA',
        desc: 'Simulateur de crédit dynamique, pré-inscription en ligne, cartographie des agences et formulaires sécurisés.'
      },
      {
        tier: 'Écosystème SFD Moderne & Tunnels WhatsApp (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 d\'élite, rappels WhatsApp d\'échéances anti-impayés, intégration Mobile Money et sécurité bancaire totale.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre d\'agences et points de contact à cartographier',
      'Mise en place de l\'API WhatsApp officielle pour les relances de crédit',
      'Complexité des algorithmes de simulation de crédit et taux d\'intérêt',
      'Exigences d\'interfaçage avec le logiciel de gestion bancaire existant'
    ],
    priceFaq: [
      {
        question: 'Comment ce système réduit-il concrètement les impayés ?',
        answer: 'Les rappels automatisés WhatsApp envoyés au bon moment diminuent les oublis de remboursement et sensibilisent les emprunteurs sans agressivité.'
      },
      {
        question: 'Quel est le calendrier de déploiement ?',
        answer: 'Entre 4 et 6 semaines pour concevoir, auditer la sécurité et former vos équipes financières.'
      },
      {
        question: 'Comment programmer une réunion de présentation ?',
        answer: 'Contactez notre pôle solutions B2B sur WhatsApp pour organiser une visioconférence avec votre comité de direction.'
      }
    ]
  },

  // 13. MINES, ÉNERGIE SOLAIRE & ÉQUIPEMENTS INDUSTRIELS
  {
    id: 'mines-industrie-solaire',
    name: 'Mines, Énergie Solaire & Industrie',
    badge: 'Sous-Traitance Minière & Énergie Renouvelable',
    targetRole: "Fournisseurs Industriels, Sous-Traitants Miniers & Installateurs Solaires",
    solutionSlugPrefix: 'portail-web-industrie-mines-solaire',
    priceSlugPrefix: 'prix-site-web-industrie-mines',
    iconName: 'sun',
    solutionMetaTitle: 'Portail Web pour Entreprise Industrielle & Mines à {city}',
    solutionHeroTitle: 'Création de Portail Web B2B pour Mines & Énergie Solaire à {city}',
    solutionHeroSubtitle: 'Devenez le fournisseur incontournable des compagnies minières et des grands projets énergétiques : catalogue technique et fiches de conformité ISO.',
    solutionChallenges: [
      'Ignorance de vos stocks de pièces et capacités par les directeurs d\'achats miniers',
      'Difficultés à prouver la conformité aux normes internationales de sécurité (HSE) et de contenu local',
      'Perte de marchés au profit de fournisseurs étrangers pourtant plus lointains et plus coûteux'
    ],
    solutionDeliverables: [
      {
        title: 'Catalogue d\'Équipements & Pièces Détachées Industrielles',
        desc: 'Classification méthodique des références (panneaux solaires, batteries lithium, onduleurs, filtres, réactifs, EPI).'
      },
      {
        title: 'Espace Fiches Techniques & Certifications ISO / HSE',
        desc: 'Téléchargement direct des spécifications techniques pour faciliter le travail des ingénieurs d\'achats miniers.'
      },
      {
        title: 'Module de Demande de Cotation Industrielle (RFQ)',
        desc: 'Formulaire précis permettant de soumettre des listes de pièces volumineuses pour chiffrage rapide sous 24h.'
      },
      {
        title: 'Valorisation du Contenu Local & Références Réalisées',
        desc: 'Mise en avant de votre ancrage national et de vos contrats exécutés avec succès sur les sites miniers et solaires.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site aide-t-il à se faire homologuer auprès des mines d\'or ?',
        answer: 'Oui, nous structurons la plateforme pour répondre exactement aux grilles d\'évaluation des départements Supply Chain des mines.'
      },
      {
        question: 'Peut-on présenter des installations solaires de grande puissance (MW) ?',
        answer: 'Tout à fait, nous concevons des études de cas détaillant la puissance crête, les onduleurs installés et les économies de carburant réalisées.'
      },
      {
        question: 'Le portail est-il consultable depuis les zones minières isolées ?',
        answer: 'Oui, nos architectures Next.js 16 sont ultra-légères et optimisées pour s\'ouvrir même sur une connexion satellite ralentie.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Portail Web pour Entreprise Minière & Solaire à {city}',
    priceHeroTitle: 'Combien Coûte un Portail Web B2B Mines & Énergie Solaire à {city} ?',
    priceHeroSubtitle: 'Investissement stratégique et retours sur marchés industriels avec BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Site Fournisseur Industriel Basique',
        range: '700 000 — 1 300 000 FCFA',
        desc: 'Présentation de l\'entreprise et des produits, sans catalogue technique approfondi ni module RFQ.'
      },
      {
        tier: 'Portail B2B Équipements & Fiches Techniques',
        range: '1 800 000 — 3 600 000 FCFA',
        desc: 'Catalogue par références, demandes de cotation en ligne, fiches PDF téléchargeables et conformité B2B.'
      },
      {
        tier: 'Infrastructure B2B Sous-Traitance Haute Exigence (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 d\'élite, catalogue de plusieurs milliers de pièces, référencement B2B Google/LinkedIn et optimisation appels d\'offres.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de gammes et de pièces industrielles à cataloguer',
      'Mise en place d\'un module de demande de cotation complexe multi-lignes',
      'Création de fiches d\'études de cas de centrales solaires ou chantiers miniers',
      'Bilinguisme Français / Anglais pour traiter avec les multinationales'
    ],
    priceFaq: [
      {
        question: 'Quelle est la rentabilité d\'un tel investissement ?',
        answer: 'Décrocher un seul contrat d\'approvisionnement récurrent auprès d\'une compagnie minière couvre des dizaines de fois la création du portail.'
      },
      {
        question: 'Combien de temps prend la conception ?',
        answer: 'Entre 3 et 5 semaines selon le volume de fiches techniques à intégrer.'
      },
      {
        question: 'Comment débuter la démarche ?',
        answer: 'Contactez notre direction B2B pour une analyse préalable de votre catalogue et de vos cibles de prospection.'
      }
    ]
  },

  // 14. ENTREPRISES DE SÉCURITÉ PRIVÉE & GARDIENNAGE
  {
    id: 'securite-gardiennage',
    name: 'Sociétés de Sécurité Privée & Gardiennage',
    badge: 'Protection, Vidéosurveillance & Rondes',
    targetRole: "Dirigeants de Sociétés de Sécurité Privée & Experts en Télésurveillance",
    solutionSlugPrefix: 'site-web-entreprise-securite-gardiennage',
    priceSlugPrefix: 'prix-site-web-entreprise-securite',
    iconName: 'shield',
    solutionMetaTitle: 'Site Web pour Société de Sécurité Privée & Gardiennage à {city}',
    solutionHeroTitle: 'Création de Site Web pour Société de Sécurité & Gardiennage à {city}',
    solutionHeroSubtitle: 'Inspirez une confiance absolue aux ambassades, banques, résidences et industriels : présentez vos agents formés, vos agréments d\'État et vos systèmes d\'alarme.',
    solutionChallenges: [
      'Difficulté à convaincre les grandes entreprises sans un site web digne et certifié',
      'Clients comparant uniquement sur les prix faute de comprendre la qualité de la formation de vos vigiles',
      'Manque de visibilité sur vos services de sécurité électronique (caméras, alarmes, clôtures électriques)'
    ],
    solutionDeliverables: [
      {
        title: 'Présentation des Corps de Sécurité & Agréments Officiels',
        desc: 'Mise en valeur de vos autorisations ministérielles, de la formation militaire de l\'encadrement et des assurances RC pro.'
      },
      {
        title: 'Catalogue des Solutions de Télésurveillance & Alarmes',
        desc: 'Présentation des caméras connectées, contrôle d\'accès biométrique et systèmes anti-intrusion avec démonstrations.'
      },
      {
        title: 'Module d\'Estimation de Devis Gardiennage en Ligne',
        desc: 'Formulaire interactif (nombre d\'agents, horaires jour/nuit, type de site) permettant au prospect de recevoir un chiffrage rapide.'
      },
      {
        title: 'Centrale d\'Intervention Rapide & Contact d\'Urgence',
        desc: 'Mise en avant de votre flotte de patrouilles motorisées et bouton d\'appel prioritaire vers votre PC de commandement.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site permet-il de rassurer les expatriés et ambassades ?',
        answer: 'Oui, nous intégrons les standards internationaux de sécurité pour valoriser la rigueur et la formation continue de vos effectifs.'
      },
      {
        question: 'Peut-on vendre des kits de vidéosurveillance sur le site ?',
        answer: 'Absolument, nous pouvons ajouter une boutique e-commerce pour commander des caméras solaires, alarmes sans fil et clôtures.'
      },
      {
        question: 'Le formulaire de devis est-il facile à utiliser ?',
        answer: 'Très simple : le client sélectionne son besoin (gardiennage d\'usine, villa, événementiel) et vous recevez sa demande instantanément sur WhatsApp.'
      }
    ],
    priceMetaTitle: 'Prix d\'un Site Web pour Société de Sécurité à {city}',
    priceHeroTitle: 'Combien Coûte un Site Web pour Société de Sécurité Privée à {city} ?',
    priceHeroSubtitle: 'Chiffrage et rentabilité d\'une vitrine corporate de sécurité privée par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Site Présentation Gardiennage Basique',
        range: '450 000 — 850 000 FCFA',
        desc: 'Présentation sommaire des prestations et numéro de téléphone, sans simulateur de devis ni catalogue technique.'
      },
      {
        tier: 'Portail Sécurité Privée & Devis Dynamique',
        range: '1 300 000 — 2 600 000 FCFA',
        desc: 'Présentation complète, module de devis de gardiennage, fiches sécurité électronique et agréments d\'État.'
      },
      {
        tier: 'Infrastructure Sécurité de Haut Rang (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 de prestige, fiches marchés publics, CAPI Meta Ads, espace recrutement d\'agents et SEO local d\'autorité.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de pôles d\'intervention (gardiennage physique, cynophile, VIP, télésurveillance)',
      'Intégration d\'un module de recrutement en ligne pour postuler au poste d\'agent de sécurité',
      'Boutique intégrée d\'équipements et caméras de sécurité pour particuliers',
      'Bilinguisme pour postuler auprès d\'organisations internationales et ONG'
    ],
    priceFaq: [
      {
        question: 'Comment ce site aide-t-il à signer des contrats à l\'année ?',
        answer: 'Un site corporate solide dissipe les doutes des directeurs administratifs et sécurise des contrats récurrents de plusieurs dizaines d\'agents.'
      },
      {
        question: 'En combien de temps le site est-il mis en ligne ?',
        answer: 'Comptez environ 2 à 3 semaines de développement et de validation.'
      },
      {
        question: 'Comment recevoir un devis adapté à notre société ?',
        answer: 'Échangez directement sur WhatsApp avec nos spécialistes pour cadrer vos objectifs commerciaux.'
      }
    ]
  },

  // 15. AGROALIMENTAIRE, NÉGOCE & EXPORTATION DE MATIÈRES PREMIÈRES
  {
    id: 'agroalimentaire-export',
    name: 'Agroalimentaire, Négoce & Export',
    badge: 'Anacarde, Coton, Sésame & Karité',
    targetRole: "Exportateurs Agricoles, Négociants de Matières Premières & Dirigeants de Coopératives",
    solutionSlugPrefix: 'plateforme-negoce-agroalimentaire-export',
    priceSlugPrefix: 'prix-plateforme-agroalimentaire-export',
    iconName: 'wheat',
    solutionMetaTitle: 'Plateforme B2B pour Négoce Agricole & Export à {city}',
    solutionHeroTitle: 'Création de Plateforme B2B pour Négoce Agricole & Export à {city}',
    solutionHeroSubtitle: 'Connectez vos productions d\'anacarde, de sésame, de karité et de céréales aux acheteurs internationaux en Inde, en Europe et en Asie.',
    solutionChallenges: [
      'Dépendance totale vis-à-vis d\'intermédiaires locaux qui rognent vos marges à l\'export',
      'Difficultés des acheteurs internationaux à vérifier la capacité de livraison et la conformité des stocks',
      'Absence de catalogue digital multidevises affichant vos fiches d\'analyse de qualité (taux d\'humidité, KOR)'
    ],
    solutionDeliverables: [
      {
        title: 'Catalogue d\'Exportation B2B Multidevises (FCFA, USD, EUR)',
        desc: 'Présentation détaillée des spéculations (noix de cajou brutes, beurre de karité, graines de sésame, maïs) avec normes d\'emballage.'
      },
      {
        title: 'Certificats Phytosanitaires & Fiches de Qualité Téléchargeables',
        desc: 'Mise à disposition des analyses de laboratoire (teneur en matière grasse, pureté, KOR) pour rassurer les importateurs.'
      },
      {
        title: 'Module de Demande de Cotation FOB & CIF aux Ports de Transit',
        desc: 'Formulaire de cotation par conteneur ou tonnage avec sélection des ports de départ (Abidjan, Lomé, Cotonou, Dakar).'
      },
      {
        title: 'Traçabilité des Filières & RSE / Commerce Équitable',
        desc: 'Valorisation des coopératives paysannes partenaires, de l\'impact social et des pratiques d\'agriculture durable.'
      }
    ],
    solutionFaq: [
      {
        question: 'Le site permet-il de trouver des acheteurs en Inde, en Chine ou en Europe ?',
        answer: 'Oui, nous optimisons le référencement international en anglais et français pour capter les négociants et courtiers internationaux.'
      },
      {
        question: 'Comment sont gérées les fluctuations des cours des matières premières ?',
        answer: 'Vous pouvez soit afficher des prix indicatifs périodiques, soit privilégier des cotations sur demande basées sur les cours du jour.'
      },
      {
        question: 'Peut-on valoriser des produits transformés localement ?',
        answer: 'Absolument, nous mettons particulièrement en valeur les amandes d\'anacarde décortiquées, huiles et beurres à forte valeur ajoutée.'
      }
    ],
    priceMetaTitle: 'Prix d\'une Plateforme de Négoce Agricole & Export à {city}',
    priceHeroTitle: 'Combien Coûte une Plateforme de Négoce Agricole & Export à {city} ?',
    priceHeroSubtitle: 'Investissement et retours à l\'international pour coopératives et exportateurs par BAROUBA GROUP.',
    marketPriceRanges: [
      {
        tier: 'Site Vitrine Agroalimentaire Simple',
        range: '500 000 — 950 000 FCFA',
        desc: 'Présentation des produits et des coordonnées de la coopérative, sans fiches techniques d\'exportation.'
      },
      {
        tier: 'Plateforme Négoce B2B & Cotations',
        range: '1 600 000 — 3 400 000 FCFA',
        desc: 'Catalogue multidevises, demandes de cotation FOB/CIF, fiches qualité et présentation des capacités d\'approvisionnement.'
      },
      {
        tier: 'Écosystème Export Panafricain & International (BAROUBA GROUP)',
        range: 'Sur Devis après Audit Gratuit',
        desc: 'Architecture Next.js 16 globale, version bilingue anglais/français, traçabilité QR code, SEO international et conformité export.',
        isRecommended: true
      }
    ],
    priceCostFactors: [
      'Nombre de filières et produits agricoles à intégrer au catalogue d\'export',
      'Version bilingue obligatoire (Français / Anglais) pour le commerce international',
      'Modules de traçabilité des lots et cartographie des zones de collecte paysanne',
      'Intégration d\'outils de cotation en direct selon les incoterms (FOB, CIF, CFR)'
    ],
    priceFaq: [
      {
        question: 'Quelle est la rentabilité pour un exportateur de matières premières ?',
        answer: 'Un seul contrat d\'exportation direct conclu sans passer par un courtier intermédiaire rembourse cent fois l\'investissement digital.'
      },
      {
        question: 'Aidez-vous à structurer les fiches produits pour les acheteurs internationaux ?',
        answer: 'Oui, nous appliquons les standards internationaux du négoce physique pour formuler vos spécifications techniques avec précision.'
      },
      {
        question: 'Comment programmer un premier échange ?',
        answer: 'Contactez notre direction via WhatsApp pour présenter vos tonnages et définir votre stratégie d\'exportation.'
      }
    ]
  }
];

// --- HELPER FUNCTIONS FOR 15 SECTORS DUALITY ---

export interface B2bCombo {
  slug: string;
  type: 'solution' | 'price';
  sector: B2bSector;
  city?: TerritoryCity;
  country: TerritoryCountry;
}

export function getAllB2bCombos(): B2bCombo[] {
  const combos: B2bCombo[] = [];

  for (const sector of B2B_SECTORS) {
    // 1. City level combos (54 cities × 2 types = 108 per sector)
    for (const city of TERRITORY_CITIES) {
      const country = getCountryBySlug(city.countrySlug);
      if (!country) continue;

      combos.push({
        slug: `${sector.solutionSlugPrefix}-${city.slug}`,
        type: 'solution',
        sector,
        city,
        country
      });

      combos.push({
        slug: `${sector.priceSlugPrefix}-${city.slug}`,
        type: 'price',
        sector,
        city,
        country
      });
    }

    // 2. National country level combos (12 countries × 2 types = 24 per sector)
    for (const country of TERRITORY_COUNTRIES) {
      combos.push({
        slug: `${sector.solutionSlugPrefix}-${country.slug}`,
        type: 'solution',
        sector,
        country
      });

      combos.push({
        slug: `${sector.priceSlugPrefix}-${country.slug}`,
        type: 'price',
        sector,
        country
      });
    }
  }

  return combos;
}

export function getB2bComboBySlug(slug: string): B2bCombo | undefined {
  for (const sector of B2B_SECTORS) {
    // Check solution slug match
    if (slug.startsWith(sector.solutionSlugPrefix + '-')) {
      const locationSlug = slug.slice(sector.solutionSlugPrefix.length + 1);
      
      // Try city first
      const city = TERRITORY_CITIES.find(c => c.slug === locationSlug);
      if (city) {
        const country = getCountryBySlug(city.countrySlug);
        if (country) {
          return { slug, type: 'solution', sector, city, country };
        }
      }

      // Try country
      const country = getCountryBySlug(locationSlug);
      if (country) {
        return { slug, type: 'solution', sector, country };
      }
    }

    // Check price slug match
    if (slug.startsWith(sector.priceSlugPrefix + '-')) {
      const locationSlug = slug.slice(sector.priceSlugPrefix.length + 1);

      // Try city first
      const city = TERRITORY_CITIES.find(c => c.slug === locationSlug);
      if (city) {
        const country = getCountryBySlug(city.countrySlug);
        if (country) {
          return { slug, type: 'price', sector, city, country };
        }
      }

      // Try country
      const country = getCountryBySlug(locationSlug);
      if (country) {
        return { slug, type: 'price', sector, country };
      }
    }
  }

  return undefined;
}
