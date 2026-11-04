// Store d'Analytics & Intelligence Visiteurs — BAROUBA GROUP SARL

export interface CountryStat {
  code: string;
  name: string;
  flag: string;
  visitors: number;
  percentage: number;
  conversionRate: number;
  topCities: string[];
}

export interface AcquisitionSource {
  name: string;
  category: 'Publicité' | 'Organique' | 'Direct' | 'Social';
  visitors: number;
  percentage: number;
  leadsGenerated: number;
  roi: string;
}

export interface TopPageStat {
  path: string;
  title: string;
  views: number;
  avgTime: string;
  bounceRate: string;
}

export interface LiveVisitor {
  id: string;
  country: string;
  flag: string;
  city: string;
  source: string;
  page: string;
  device: string;
  duration: string;
  action: string;
}

export interface AnalyticsSummary {
  period: string;
  totalVisitors: number;
  uniqueVisitors: number;
  totalPageviews: number;
  avgSessionDuration: string;
  bounceRate: string;
  activeNow: number;
  conversionRate: string;
  countries: CountryStat[];
  sources: AcquisitionSource[];
  topPages: TopPageStat[];
  liveVisitors: LiveVisitor[];
  deviceBreakdown: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
}

export function getAnalyticsSummary(): AnalyticsSummary {
  return {
    period: 'Derniers 30 jours (Temps Réel)',
    totalVisitors: 14820,
    uniqueVisitors: 11450,
    totalPageviews: 46290,
    avgSessionDuration: '3 min 28 s',
    bounceRate: '26.4%',
    activeNow: 24,
    conversionRate: '4.82%',
    deviceBreakdown: {
      mobile: 88.5,
      desktop: 10.2,
      tablet: 1.3,
    },
    countries: [
      {
        code: 'BF',
        name: 'Burkina Faso',
        flag: '🇧🇫',
        visitors: 7080,
        percentage: 61.8,
        conversionRate: 5.6,
        topCities: ['Ouagadougou (68%)', 'Bobo-Dioulasso (24%)', 'Koudougou (8%)'],
      },
      {
        code: 'CI',
        name: 'Côte d’Ivoire',
        flag: '🇨🇮',
        visitors: 2130,
        percentage: 18.6,
        conversionRate: 4.9,
        topCities: ['Abidjan (88%)', 'Yamoussoukro (8%)', 'Bouaké (4%)'],
      },
      {
        code: 'SN',
        name: 'Sénégal',
        flag: '🇸🇳',
        visitors: 980,
        percentage: 8.5,
        conversionRate: 4.1,
        topCities: ['Dakar (92%)', 'Thiès (8%)'],
      },
      {
        code: 'ML',
        name: 'Mali',
        flag: '🇲🇱',
        visitors: 520,
        percentage: 4.5,
        conversionRate: 3.8,
        topCities: ['Bamako (95%)', 'Sikasso (5%)'],
      },
      {
        code: 'FR',
        name: 'France (Diaspora)',
        flag: '🇫🇷',
        visitors: 460,
        percentage: 4.0,
        conversionRate: 4.3,
        topCities: ['Paris & Île-de-France (74%)', 'Lyon (16%)', 'Bordeaux (10%)'],
      },
      {
        code: 'CA',
        name: 'Canada & USA',
        flag: '🇨🇦',
        visitors: 280,
        percentage: 2.6,
        conversionRate: 3.9,
        topCities: ['Montréal (65%)', 'Québec (20%)', 'New York (15%)'],
      },
    ],
    sources: [
      {
        name: 'Meta Ads (Facebook & Instagram CAPI)',
        category: 'Publicité',
        visitors: 5630,
        percentage: 37.9,
        leadsGenerated: 142,
        roi: 'x 6.4',
      },
      {
        name: 'TikTok Ads (Campagnes Vidéos Courtes)',
        category: 'Publicité',
        visitors: 4120,
        percentage: 27.7,
        leadsGenerated: 98,
        roi: 'x 5.2',
      },
      {
        name: 'Google Search Organique (SEO Local & UEMOA)',
        category: 'Organique',
        visitors: 2840,
        percentage: 19.1,
        leadsGenerated: 84,
        roi: 'Gratuit / Élevé',
      },
      {
        name: 'WhatsApp Direct (Partages & Groupes)',
        category: 'Social',
        visitors: 1540,
        percentage: 10.4,
        leadsGenerated: 62,
        roi: 'Direct',
      },
      {
        name: 'Accès Directs & Références Institutionnelles',
        category: 'Direct',
        visitors: 690,
        percentage: 4.9,
        leadsGenerated: 29,
        roi: 'Direct',
      },
    ],
    topPages: [
      {
        path: '/services/marketing-digital',
        title: 'Communication Digitale & Community Management',
        views: 12430,
        avgTime: '4 min 12 s',
        bounceRate: '21.5%',
      },
      {
        path: '/devis',
        title: 'Configurateur de Devis & Cadrage en Ligne',
        views: 8940,
        avgTime: '3 min 45 s',
        bounceRate: '18.2%',
      },
      {
        path: '/boutique',
        title: 'Boutique Produits Digitaux & Templates',
        views: 7120,
        avgTime: '3 min 10 s',
        bounceRate: '24.1%',
      },
      {
        path: '/boutique/pack-tunnel-ecommerce-haute-vente',
        title: 'Pack Tunnel E-Commerce Next.js 16',
        views: 5280,
        avgTime: '3 min 58 s',
        bounceRate: '19.8%',
      },
      {
        path: '/formations',
        title: 'Académie & Formations Certifiantes',
        views: 4890,
        avgTime: '4 min 30 s',
        bounceRate: '22.0%',
      },
      {
        path: '/a-propos',
        title: 'À Propos & Piliers de Confiance SARL',
        views: 3950,
        avgTime: '3 min 05 s',
        bounceRate: '28.4%',
      },
    ],
    liveVisitors: [
      {
        id: 'live-1',
        country: 'Burkina Faso',
        flag: '🇧🇫',
        city: 'Ouagadougou (Ouaga 2000)',
        source: 'Meta Ads',
        page: '/devis',
        device: 'iPhone 15 Pro (4G Orange)',
        duration: '1 min 42 s',
        action: 'Remplissage configurateur devis...',
      },
      {
        id: 'live-2',
        country: 'Côte d’Ivoire',
        flag: '🇨🇮',
        city: 'Abidjan (Cocody)',
        source: 'Google Search',
        page: '/services/marketing-digital',
        device: 'Samsung Galaxy S24 (4G MTN)',
        duration: '3 min 15 s',
        action: 'Lecture des formules community manager',
      },
      {
        id: 'live-3',
        country: 'Burkina Faso',
        flag: '🇧🇫',
        city: 'Bobo-Dioulasso (Zone Résidentielle)',
        source: 'TikTok Ads',
        page: '/boutique/pack-tunnel-ecommerce-haute-vente',
        device: 'Xiaomi Redmi Note (Moov Africa)',
        duration: '2 min 08 s',
        action: 'Clic sur "Commander via WhatsApp"',
      },
      {
        id: 'live-4',
        country: 'Sénégal',
        flag: '🇸🇳',
        city: 'Dakar (Plateau)',
        source: 'WhatsApp',
        page: '/formations',
        device: 'MacBook Pro (Chrome Desktop)',
        duration: '5 min 20 s',
        action: 'Consultation du programme Media Buying',
      },
      {
        id: 'live-5',
        country: 'France',
        flag: '🇫🇷',
        city: 'Paris (75011)',
        source: 'Accès Direct',
        page: '/a-propos',
        device: 'Windows 11 (Firefox Desktop)',
        duration: '4 min 02 s',
        action: 'Lecture des garanties juridiques OHADA',
      },
    ],
  };
}
