import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { 
  TrendingUp, 
  Target, 
  Code2, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  HelpCircle, 
  ShieldCheck, 
  PhoneCall,
  Sparkles,
  Building2,
  ChevronRight,
  DollarSign
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './marketingDigital.module.css';

export const metadata: Metadata = {
  title: 'Marketing Digital : Stratégie & Ventes | BAROUBA GROUP',
  description: "Découvrez nos solutions complètes en marketing digital : publicité Meta Ads, création web d'élite, tunnels WhatsApp et community management à fort ROI.",
  alternates: {
    canonical: 'https://www.baroubagroup.com/marketing-digital',
  },
  openGraph: {
    title: 'Marketing Digital : Stratégie & Ventes | BAROUBA GROUP',
    description: "Découvrez nos solutions complètes en marketing digital : publicité Meta Ads, création web d'élite, tunnels WhatsApp et community management à fort ROI.",
    url: 'https://www.baroubagroup.com/marketing-digital',
    siteName: 'BAROUBA GROUP',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Digital : Stratégie & Ventes | BAROUBA GROUP',
    description: "Découvrez nos solutions complètes en marketing digital : publicité Meta Ads, création web d'élite, tunnels WhatsApp et community management à fort ROI.",
  },
};

const PILLARS_DATA = [
  {
    num: '01',
    title: 'Media Buying Rentable Meta & TikTok Ads',
    icon: TrendingUp,
    desc: 'Fini le gaspillage de budget publicitaire. Nous concevons des campagnes chirurgicales avec scripts vidéos percutants, tracking serveur CAPI et ciblage exclusif des profils acheteurs solvables.',
    points: [
      'ROAS (retour sur dépenses publicitaires) moyen > 3.5x',
      'Création des visuels captivants et vidéos courtes à fort taux de clic',
      'Pilotage direct orienté rentabilité nette et marge commerciale',
      'Reporting hebdomadaire transparent et direct avec le media buyer'
    ],
    linkText: 'Découvrir nos campagnes Meta Ads',
    href: '/publicite-facebook-ads-burkina-faso'
  },
  {
    num: '02',
    title: 'Tunnels de Vente WhatsApp & Mobile Money',
    icon: Target,
    desc: 'Le levier de conversion n°1 en Afrique. Nous éliminons les abandons de panier en connectant vos annonces à des tunnels d’achat 1-clic avec clôture sur WhatsApp et règlement Mobile Money (Orange Money, Moov, Wave).',
    points: [
      'Conversion directe de 15% à 25% des visiteurs en conversations d’achat',
      'Paiements unifiés : Orange Money, Moov Money, Wave et Cartes Bancaires',
      'Scripts de vente WhatsApp testés pour maximiser la signature',
      'Séquences de relance automatique pour réactiver les hésitants'
    ],
    linkText: 'Voir nos tunnels de vente WhatsApp',
    href: '/tunnel-vente-whatsapp-burkina-faso'
  },
  {
    num: '03',
    title: 'Plateformes Web Next.js 16 & Domination SEO',
    icon: Code2,
    desc: 'Votre présence en ligne propulsée par un code source propriétaire ultra-rapide (< 0.8s), optimisé pour les réseaux 3G/4G et bâti pour truster la 1ère place sur Google sans dépendre des CMS lents.',
    points: [
      'Temps de chargement instantané (< 0.8s) sur mobile',
      'Score Google PageSpeed > 90 garanti contractuellement',
      'Architecture SEO programmatique pour dominer vos mots-clés métiers',
      'Cession totale de la propriété intellectuelle sans abonnement captif'
    ],
    linkText: 'Explorer nos créations de sites web',
    href: '/services/developpement-web-plateformes-nextjs'
  },
  {
    num: '04',
    title: 'Community Management & Image de Marque 7j/7',
    icon: Share2,
    desc: 'Installation de votre marque au rang d’autorité incontestée. Visuels d’élite, animation quotidienne de vos réseaux sociaux et modération active de vos messages privés et commentaires 7 jours sur 7.',
    points: [
      'Direction artistique de prestige et chartes graphiques percutantes',
      'Modération et réponses aux DMs en moins de 15 minutes',
      'Veille d’e-réputation et protection proactive contre les bad buzz',
      'Stratégie de fidélisation et transformation des abonnés en clients'
    ],
    linkText: 'Confier la gestion de vos réseaux',
    href: '/services/communication-digitale-community-management'
  }
];

const TERRITORY_CLUSTERS = [
  {
    title: 'Burkina Faso (National & Villes Clés)',
    links: [
      { label: 'Marketing Digital au Burkina Faso', href: '/marketing-digital-au-burkina-faso' },
      { label: 'Agence Marketing Digital Ouagadougou', href: '/agence-marketing-digital-ouagadougou' },
      { label: 'Agence Marketing Digital Bobo-Dioulasso', href: '/agence-marketing-digital-bobo-dioulasso' },
      { label: 'Marketing Digital à Ouagadougou', href: '/marketing-digital-a-ouagadougou' },
      { label: 'Marketing Digital à Bobo-Dioulasso', href: '/marketing-digital-a-bobo-dioulasso' },
      { label: 'Devis Marketing Digital Ouagadougou', href: '/devis-marketing-digital-ouagadougou' },
      { label: 'Tarifs Agence Marketing Digital Burkina', href: '/tarif-agence-marketing-digital-burkina' },
    ]
  },
  {
    title: 'Expansion Sous-Régionale & Internationale',
    links: [
      { label: 'Marketing Digital en Côte d’Ivoire', href: '/marketing-digital-en-cote-divoire' },
      { label: 'Agence Marketing Digital Abidjan', href: '/agence-marketing-digital-abidjan' },
      { label: 'Marketing Digital au Sénégal', href: '/marketing-digital-au-senegal' },
      { label: 'Agence Marketing Digital Dakar', href: '/agence-marketing-digital-dakar' },
      { label: 'Marketing Digital au Mali', href: '/marketing-digital-au-mali' },
      { label: 'Marketing Digital France & Diaspora', href: '/marketing-digital-france' },
    ]
  },
  {
    title: 'Spécialités Métiers & Académie',
    links: [
      { label: 'Publicité Facebook Ads Burkina Faso', href: '/publicite-facebook-ads-burkina-faso' },
      { label: 'Publicité TikTok Ads Burkina Faso', href: '/publicite-tiktok-ads-burkina-faso' },
      { label: 'Tunnel de Vente WhatsApp Burkina', href: '/tunnel-vente-whatsapp-burkina-faso' },
      { label: 'Référencement Naturel SEO Burkina', href: '/referencement-naturel-seo-burkina-faso' },
      { label: 'Formation Marketing Digital Ouagadougou', href: '/formation-marketing-digital-ouagadougou' },
      { label: 'Formation Marketing Digital Bobo-Dioulasso', href: '/formation-marketing-digital-bobo-dioulasso' },
    ]
  }
];

const FAQS = [
  {
    question: "En quoi le marketing digital de BAROUBA GROUP est-il différent des agences classiques ?",
    answer: "Contrairement aux agences qui se contentent de vendre des « likes » passifs, nous abordons le marketing digital sous l'angle de l'ingénierie de la rentabilité. Nos campagnes publicitaires sont directement reliées à des tunnels WhatsApp Cloud et des plateformes Next.js ultra-rapides (< 0.8s) pour générer des ventes directes en Mobile Money avec un ROAS contractuellement suivi."
  },
  {
    question: "Quel budget faut-il prévoir pour lancer une stratégie de marketing digital rentable ?",
    answer: "Nous calibrons chaque plan d'acquisition selon vos objectifs et votre capacité opérationnelle. Que vous soyez une PME locale à Ouaga/Bobo ou une grande entreprise en expansion régionale, nos formules démarrent avec des packs pragmatiques dont les bénéfices générés dès le premier mois sont réinvestis pour accélérer la croissance."
  },
  {
    question: "Combien de temps faut-il pour observer les premiers résultats concrets ?",
    answer: "Pour les campagnes d'acquisition payante (Meta et TikTok Ads) et les tunnels WhatsApp, les premiers prospects qualifiés arrivent généralement dans les 48 à 72 heures suivant le lancement. Pour le référencement naturel SEO, les premières positions dominantes sur Google s'installent entre 4 et 8 semaines."
  },
  {
    question: "Comment sont encadrées les prestations et les garanties contractuelles ?",
    answer: "Chaque projet fait l'objet d'un contrat de prestation de services clair et opposable, signé par la Direction Générale sous l'égide de Monsieur SAKO BAROU BEN OUMAR. Ce contrat garantit le respect des délais, la pleine propriété intellectuelle de vos actifs et un engagement ferme sur la disponibilité et la qualité technique."
  }
];

export default function MarketingDigitalHubPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour Monsieur Sako, je souhaite échanger sur une stratégie de marketing digital d'élite pour mon entreprise."
  )}`;

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'MarketingAgency'],
        '@id': 'https://www.baroubagroup.com/marketing-digital#agency',
        name: 'BAROUBA GROUP - Pôle Marketing Digital & Croissance',
        url: 'https://www.baroubagroup.com/marketing-digital',
        logo: 'https://www.baroubagroup.com/logo-or.svg',
        telephone: '+226-74-82-66-66',
        email: 'contact@baroubagroup.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bobo-Dioulasso',
          addressRegion: 'Houet',
          addressCountry: 'BF',
        },
        areaServed: ['BF', 'CI', 'SN', 'ML', 'FR'],
        knowsAbout: [
          'Marketing Digital au Burkina Faso',
          'Campagnes publicitaires Meta Ads & TikTok Ads',
          'Tunnels de vente WhatsApp Cloud API',
          'Plateformes web Next.js 16 ultra-véloces',
          'Community Management 7j/7',
          'Référencement naturel Google SEO',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.baroubagroup.com/marketing-digital#faq',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* === HERO SECTION === */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeDiamond} size={14} />
            CABINET N°1 DU MARKETING DIGITAL AU BURKINA FASO & AFRIQUE DE L&apos;OUEST
          </div>

          <h1 className={styles.pageTitle}>
            Marketing Digital d’Élite : De la Visibilité aux Ventes Réelles
          </h1>

          <p className={styles.pageSubtitle}>
            Campagnes publicitaires Meta &amp; TikTok Ads hautement rentables, tunnels de closing WhatsApp automatisés et plateformes Next.js 16 ultra-rapides (&lt; 0.8s). Nous transformons vos dépenses marketing en chiffre d’affaires auditable.
          </p>

          <div className={styles.heroActions}>
            <Link href="/devis" className={styles.btnPrimary}>
              <span>Demander un devis stratégique</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              <PhoneCall size={18} />
              <span>Échanger sur WhatsApp VIP</span>
            </a>
          </div>

          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>ROAS &gt; 3.5x</div>
              <div className={styles.trustLabel}>Moyenne sur nos campagnes</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>&lt; 0.8s</div>
              <div className={styles.trustLabel}>Vitesse de chargement web</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>100%</div>
              <div className={styles.trustLabel}>Propriété intellectuelle cédée</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>7j/7</div>
              <div className={styles.trustLabel}>Modération &amp; support réactif</div>
            </div>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* === SECTION 4 PILIERS === */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <Sparkles size={14} />
              Ingénierie &amp; Rentabilité
            </div>
            <h2 className={styles.sectionTitle}>
              Les 4 Piliers Fondamentaux de notre Écosystème Marketing
            </h2>
            <p className={styles.sectionDesc}>
              Une approche scientifique où chaque levier est pensé pour éliminer la friction et accélérer l’acte d’achat en Afrique et à l’international.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {PILLARS_DATA.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.num} className={styles.pillarCard}>
                  <div className={styles.pillarCardHeader}>
                    <div className={styles.pillarIconBox}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <div className={styles.pillarNumber}>Pilier {p.num}</div>
                      <h3 className={styles.pillarTitle}>{p.title}</h3>
                    </div>
                  </div>

                  <p className={styles.pillarDesc}>{p.desc}</p>

                  <ul className={styles.pillarList}>
                    {p.points.map((pt, idx) => (
                      <li key={idx} className={styles.pillarItem}>
                        <CheckCircle2 className={styles.pillarItemIcon} size={16} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={p.href as any} className={styles.pillarLink}>
                    <span>{p.linkText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SECTION HUB TERRITORIAL MAILLAGE SEO === */}
      <section className={styles.territoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <MapPin size={14} />
              Territoires &amp; Proximité
            </div>
            <h2 className={styles.sectionTitle}>
              Présence Locale &amp; Interventions Stratégiques
            </h2>
            <p className={styles.sectionDesc}>
              De Ouagadougou à Abidjan et Dakar, découvrez nos solutions adaptées aux réalités économiques et aux habitudes de consommation de chaque marché.
            </p>
          </div>

          <div className={styles.clusterGrid}>
            {TERRITORY_CLUSTERS.map((cluster, cIdx) => (
              <div key={cIdx} className={styles.clusterCard}>
                <h3 className={styles.clusterTitle}>
                  <Building2 className={styles.clusterTitleIcon} size={18} />
                  <span>{cluster.title}</span>
                </h3>
                <ul className={styles.linkList}>
                  {cluster.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href as any} className={styles.seoLink}>
                        <span>{link.label}</span>
                        <ChevronRight className={styles.linkArrow} size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION FAQ === */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <HelpCircle size={14} />
              Transparence &amp; Réponses
            </div>
            <h2 className={styles.sectionTitle}>
              Questions Fréquentes sur notre Accompagnement
            </h2>
            <p className={styles.sectionDesc}>
              Toutes les réponses pour aborder votre transition marketing en toute sérénité.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>
                  <HelpCircle className={styles.faqQIcon} size={18} />
                  <span>{faq.question}</span>
                </h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION CTA FINAL === */}
      <div className={styles.container}>
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>
            Prêt à positionner votre entreprise au rang de leader incontesté ?
          </h2>
          <p className={styles.ctaSubtitle}>
            Échangez directement avec notre Direction Générale sous la conduite de Monsieur SAKO BAROU BEN OUMAR pour cadrer votre stratégie et obtenir votre plan d’action chiffré sous 24h.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/devis" className={styles.btnPrimary}>
              <span>Demander une étude confidentielle</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              <PhoneCall size={18} />
              <span>Contacter la Direction sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
