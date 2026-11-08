import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  Video, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  HelpCircle, 
  PhoneCall,
  Building2,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './communicationDigitale.module.css';

export const metadata: Metadata = {
  title: 'Communication Digitale au Burkina Faso | BAROUBA GROUP',
  description: 'Agence n°1 en communication digitale au Burkina Faso. Stratégie de marque, community management 7j/7, création de contenu et communication de crise.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/communication-digitale',
  },
  openGraph: {
    title: 'Communication Digitale au Burkina Faso | BAROUBA GROUP',
    description: 'Agence n°1 en communication digitale au Burkina Faso. Stratégie de marque, community management 7j/7, création de contenu et communication de crise.',
    url: 'https://www.baroubagroup.com/communication-digitale',
    siteName: 'BAROUBA GROUP',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Communication Digitale au Burkina Faso | BAROUBA GROUP',
    description: 'Agence n°1 en communication digitale au Burkina Faso. Stratégie de marque, community management 7j/7, création de contenu et communication de crise.',
  },
};

const PILLARS_DATA = [
  {
    num: '01',
    title: 'Stratégie de Marque & Direction Artistique de Prestige',
    icon: Sparkles,
    desc: 'Nous positionnons votre entreprise ou institution au rang de référence incontestée. Identité visuelle percutante, charte graphique raffinée et ligne éditoriale qui inspire le respect dès le premier coup d’œil.',
    points: [
      'Positionnement de marque haut de gamme et différenciation concurrentielle',
      'Charte graphique complète adaptée aux formats numériques et print',
      'Ligne éditoriale sur mesure et calendrier de publication stratégique',
      'Protection juridique de votre marque et cohérence multicanale'
    ],
    linkText: 'Découvrir nos stratégies de marque',
    href: '/services/communication-digitale-community-management'
  },
  {
    num: '02',
    title: 'Community Management d’Élite & Modération 7j/7',
    icon: Share2,
    desc: 'Animation quotidienne professionnelle de vos pages Facebook, Instagram, LinkedIn et TikTok. Modération proactive des commentaires et réponses aux messages privés en moins de 15 minutes, 7 jours sur 7.',
    points: [
      'Animation quotidienne de vos communautés avec contenus engageants',
      'Réponses ultra-réactives aux messages privés (DMs) et commentaires 7j/7',
      'Veille d’e-réputation continue et désamorçage précoce des tensions',
      'Rapports mensuels détaillés d’engagement et de croissance d’audience'
    ],
    linkText: 'Confier la gestion de vos réseaux',
    href: '/community-manager-ouagadougou'
  },
  {
    num: '03',
    title: 'Création de Contenus Visuels & Formats Vidéos Verticaux',
    icon: Video,
    desc: 'Production de visuels remarquables et de vidéos courtes (Reels, TikTok, Shorts) conçues pour capter l’attention des internautes au Sahel et déclencher un attachement émotionnel durable à votre marque.',
    points: [
      'Tournage et montage de vidéos dynamiques adaptées à la consommation mobile',
      'Visuels haute résolution respectant la psychologie des couleurs et du luxe',
      'Infographies et carrousels éducatifs valorisant votre savoir-faire',
      'Scripts rédigés par des copywriters chevronnés axés sur la mémorisation'
    ],
    linkText: 'Voir nos réalisations visuelles',
    href: '/portfolio'
  },
  {
    num: '04',
    title: 'Communication Institutionnelle & Gestion de Crise',
    icon: ShieldCheck,
    desc: 'Accompagnement sensible pour ministères, ONG, grands comptes miniers et banques. Maîtrise des relations presse digitales, communication de crise et protection inviolable de votre e-réputation face aux bad buzz.',
    points: [
      'Protocole de réponse d’urgence en cas d’attaque réputationnelle ou bad buzz',
      'Communication d’intérêt général et campagnes de sensibilisation au Sahel',
      'Relations publiques digitales et relais d’opinion stratégiques',
      'Conformité stricte avec les normes éthiques et réglementaires locales'
    ],
    linkText: 'Consulter notre expertise institutionnelle',
    href: '/blog/communication-digitale-institutionnelle-burkina-faso-enjeux'
  }
];

const TERRITORY_CLUSTERS = [
  {
    title: 'Burkina Faso (National & Villes Clés)',
    links: [
      { label: 'Communication Digitale au Burkina Faso', href: '/communication-digitale-au-burkina-faso' },
      { label: 'Communication Digitale au Burkina (Guide)', href: '/communication-digitale-au-burkina' },
      { label: 'Agence Communication Digitale Ouagadougou', href: '/agence-communication-digitale-ouagadougou' },
      { label: 'Agence Communication Digitale Bobo-Dioulasso', href: '/agence-communication-digitale-bobo-dioulasso' },
      { label: 'Community Manager Ouagadougou', href: '/community-manager-ouagadougou' },
      { label: 'Community Manager Bobo-Dioulasso', href: '/community-manager-bobo-dioulasso' },
      { label: 'Devis Communication Digitale Ouaga', href: '/devis-communication-digitale-ouagadougou' },
    ]
  },
  {
    title: 'Afrique de l’Ouest & Pôles Régionaux',
    links: [
      { label: 'Communication Digitale en Côte d’Ivoire', href: '/communication-digitale-en-cote-divoire' },
      { label: 'Agence Communication Digitale Abidjan', href: '/agence-communication-digitale-abidjan' },
      { label: 'Communication Digitale au Sénégal', href: '/communication-digitale-au-senegal' },
      { label: 'Agence Communication Digitale Dakar', href: '/agence-communication-digitale-dakar' },
      { label: 'Community Manager Abidjan', href: '/community-manager-abidjan' },
      { label: 'Community Manager Dakar', href: '/community-manager-dakar' },
    ]
  },
  {
    title: 'Guides Piliers d’Autorité & Formations',
    links: [
      { label: 'Guide Stratégique Communication Digitale', href: '/blog/communication-digitale-burkina-faso-guide-strategique-entreprises' },
      { label: 'Cours Complet & Stratégies d’Entreprises', href: '/blog/communication-digitale-burkina-faso-strategies-entreprises-institutions-cours-complet' },
      { label: 'Formation Community Management Ouaga', href: '/formation-community-management-ouagadougou' },
      { label: 'Formation Community Management Bobo', href: '/formation-community-management-bobo-dioulasso' },
      { label: 'Audit Communication Digitale Burkina', href: '/blog/audit-communication-digitale-entreprise-burkinabe' },
      { label: 'Communication Digitale vs Marketing Digital', href: '/blog/communication-digitale-vs-marketing-digital-differences-synergies' },
    ]
  }
];

const FAQS = [
  {
    question: 'Pourquoi BAROUBA GROUP est-elle la référence en communication digitale au Burkina Faso ?',
    answer: 'Parce que nous combinons une exigence esthétique de niveau international, une modération active 7j/7, une parfaite maîtrise des codes culturels burkinabè et une gouvernance éthique contractuellement encadrée sous la direction de M. SAKO BAROU BEN OUMAR.'
  },
  {
    question: 'Quelle est la différence entre communication digitale et marketing digital ?',
    answer: 'La communication digitale construit votre notoriété, votre réputation et la confiance de votre public sur le long terme. Le marketing digital actionne des leviers publicitaires et commerciaux directs pour transformer cette confiance en ventes immédiates et mesurables. Nous intégrons les deux avec une parfaite synergie.'
  },
  {
    question: 'Comment gérez-vous la modération des réseaux sociaux le week-end et les jours fériés ?',
    answer: 'Notre pôle de community management assure des permanences actives 7 jours sur 7, y compris les week-ends et jours fériés, avec un temps de réponse moyen inférieur à 15 minutes pour ne laisser aucun prospect sans réponse.'
  },
  {
    question: 'Comment obtenir un plan de communication digitale pour mon entreprise ?',
    answer: 'Il vous suffit de solliciter un atelier de cadrage ou une demande de devis en ligne. Notre équipe analyse votre présence actuelle et vous remet une feuille de route chiffrée avec calendrier éditorial sous 24 heures.'
  }
];

export default function CommunicationDigitaleHubPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour Monsieur Sako, je souhaite échanger sur une stratégie de communication digitale et d'image de marque pour mon entreprise."
  )}`;

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': 'https://www.baroubagroup.com/communication-digitale#agency',
        name: 'BAROUBA GROUP - Pôle Communication Digitale & Marque',
        url: 'https://www.baroubagroup.com/communication-digitale',
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
          'Communication Digitale au Burkina Faso',
          'Gestion de Pages & Community Management 7j/7',
          'Stratégie de Marque & Direction Artistique',
          'Production Vidéo & Formats Courts',
          'Communication Institutionnelle & Gestion de Crise',
          'E-Réputation d’Entreprise au Sahel',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.baroubagroup.com/communication-digitale#faq',
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
            CABINET N°1 EN COMMUNICATION DIGITALE AU BURKINA FASO &amp; SAHEL
          </div>

          <h1 className={styles.pageTitle}>
            Communication Digitale au Burkina Faso : Rayonnement, Autorité &amp; Confiance
          </h1>

          <p className={styles.pageSubtitle}>
            Élaboration de stratégies de marque de prestige, animation de communautés 7j/7, création de contenus vidéo captivants et communication de crise pour entreprises et institutions au Burkina Faso et en Afrique de l’Ouest.
          </p>

          <div className={styles.heroActions}>
            <Link href="/devis" className={styles.btnPrimary}>
              <span>Demander un plan de communication</span>
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
              <div className={styles.trustValue}>N°1</div>
              <div className={styles.trustLabel}>Autorité &amp; visibilité au Burkina</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>&lt; 15 min</div>
              <div className={styles.trustLabel}>Délai moyen de modération DMs</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>7j/7</div>
              <div className={styles.trustLabel}>Animation active &amp; veille 365j</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>100+</div>
              <div className={styles.trustLabel}>Guides &amp; articles d’autorité</div>
            </div>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* === SECTION PILIERS === */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <Sparkles size={14} />
              Excellence &amp; Rayonnement
            </div>
            <h2 className={styles.sectionTitle}>
              Nos 4 Pôles d’Expertise en Communication Digitale
            </h2>
            <p className={styles.sectionDesc}>
              De la construction de votre identité à la gestion quotidienne de vos échanges, nous protégeons et sublimons l’image de votre marque.
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
                      <div className={styles.pillarNumber}>Pôle {p.num}</div>
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
              Maillage Territorial &amp; Autorité
            </div>
            <h2 className={styles.sectionTitle}>
              Pages Stratégiques &amp; Guides d’Intervention
            </h2>
            <p className={styles.sectionDesc}>
              Accédez directement à nos ressources dédiées et découvrez nos implantations au Burkina Faso et en Afrique de l’Ouest.
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
              Questions Fréquentes sur la Communication Digitale
            </h2>
            <p className={styles.sectionDesc}>
              Tout ce que vous devez savoir pour structurer votre présence et asseoir votre autorité.
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
            Faites rayonner votre entreprise avec une communication d’élite
          </h2>
          <p className={styles.ctaSubtitle}>
            Consultez directement notre Direction Générale sous la conduite de Monsieur SAKO BAROU BEN OUMAR pour cadrer votre plan de communication et renforcer votre notoriété.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/devis" className={styles.btnPrimary}>
              <span>Demander un cadrage stratégique</span>
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
