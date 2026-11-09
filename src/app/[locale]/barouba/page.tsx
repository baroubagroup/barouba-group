import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  ExternalLink,
  Users2,
  Briefcase
} from 'lucide-react';
import styles from './barouba.module.css';

interface BaroubaPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BaroubaPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'fr'
      ? 'BAROUBA : Tout Savoir sur BAROUBA GROUP | Histoire, Direction & Pôles'
      : 'BAROUBA: Everything About BAROUBA GROUP | History, Leadership & Services',
    description: locale === 'fr'
      ? 'Découvrez BAROUBA (officiellement BAROUBA GROUP SARL) : cabinet technologique n°1 au Burkina Faso fondé par Monsieur SAKO BAROU BEN OUMAR. Origine du nom, gouvernance, 8 pôles d’excellence et vision d’Afrique de l’Ouest.'
      : 'Discover BAROUBA (officially BAROUBA GROUP SARL): #1 tech & marketing group in Burkina Faso founded by Mr. SAKO BAROU BEN OUMAR. Origin, leadership, and services.',
    keywords: [
      'BAROUBA',
      'Barouba',
      'barouba',
      'BAROUBA GROUP',
      'barouba group',
      'Groupe Barouba',
      'BAROUBA INTERNATIONAL GROUP',
      'Sako Barou Ben Oumar',
      'cabinet marketing digital burkina faso',
      'agence web bobo-dioulasso',
      'agence digitale ouagadougou',
    ],
    alternates: {
      canonical: 'https://www.baroubagroup.com/barouba',
    },
    openGraph: {
      title: 'BAROUBA : Tout Savoir sur BAROUBA GROUP | Histoire, Direction & Pôles',
      description: 'Découvrez BAROUBA (officiellement BAROUBA GROUP SARL) : cabinet technologique n°1 au Burkina Faso fondé par Monsieur SAKO BAROU BEN OUMAR.',
      url: 'https://www.baroubagroup.com/barouba',
      siteName: 'BAROUBA GROUP',
      locale: 'fr_FR',
      type: 'article',
    },
  };
}

const PILLARS_LIST = [
  {
    num: '01',
    title: 'Communication Digitale & CM 7j/7',
    desc: 'Animation quotidienne Facebook, TikTok, LinkedIn, modération active des commentaires et gestion des messages privés en continu.',
    href: '/services/communication-digitale-community-management',
  },
  {
    num: '02',
    title: 'Développement Web Next.js 16',
    desc: 'Sites vitrines d’élite et plateformes métiers instantanées (< 0.8s) adaptées aux connexions mobiles sahéliennes et connectées aux Mobile Money.',
    href: '/services/developpement-web-plateformes-nextjs',
  },
  {
    num: '03',
    title: 'Acquisition Publicitaire (Meta & TikTok Ads)',
    desc: 'Campagnes publicitaires scientifiques avec tracking serveur CAPI, Creative Testing et pilotage du retour sur investissement (ROAS > 3.5x).',
    href: '/services/acquisition-publicite-meta-tiktok-ads',
  },
  {
    num: '04',
    title: 'Tunnels de Vente Hybrides WhatsApp',
    desc: 'Parcours d’achat 1-clic combinant Landing Page ultra-rapide et relation WhatsApp chaleureuse pour réduire les refus de livraison sous 8%.',
    href: '/services/tunnels-de-vente-whatsapp',
  },
  {
    num: '05',
    title: 'Agents IA & Automatisation 24/7',
    desc: 'Assistants conversationnels connectés à votre catalogue et à l’API WhatsApp Cloud pour qualifier et closing des ventes jour et nuit sans délai.',
    href: '/services/agents-ia-automatisation-metier',
  },
  {
    num: '06',
    title: 'BAROUBA ACADEMY (Formations Métiers)',
    desc: 'Programmes certifiants et mentorat pratique en Marketing Digital, IA, E-commerce et vente pour rendre vos équipes souveraines et autonomes.',
    href: '/services/formations-accompagnement-metiers-du-numerique',
  },
  {
    num: '07',
    title: 'E-Commerce & Expansion Sous-Régionale',
    desc: 'Déploiement d’écosystèmes marchands multi-devises (FCFA, EUR, USD) avec intégration de coursiers et protection contre la fraude.',
    href: '/services/ecommerce-expansion-sous-regionale',
  },
  {
    num: '08',
    title: 'Portails Métiers & Systèmes Critiques',
    desc: 'Plateformes sécurisées à haute disponibilité (99.98% SLA) pour institutions et grandes entreprises avec rôles et permissions stricts.',
    href: '/services/portails-institutionnels-systemes-critiques',
  },
];

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce que BAROUBA et quelle est la différence avec BAROUBA GROUP ?",
    a: "« BAROUBA » est la marque et l'appellation courante universellement utilisée pour désigner BAROUBA GROUP (officiellement BAROUBA INTERNATIONAL GROUP SARL). Le groupe est le cabinet n°1 au Burkina Faso pour le marketing digital, la publicité Meta Ads, le développement web Next.js 16 et l'intelligence artificielle.",
  },
  {
    q: "Qui est le fondateur et directeur de BAROUBA GROUP ?",
    a: "Le cabinet est fondé et dirigé par Monsieur SAKO BAROU BEN OUMAR, entrepreneur et stratège technologique africain, qui pilote l'ensemble des orientations stratégiques et des garanties d'exécution contractuelle.",
  },
  {
    q: "Où se situent les bureaux et comment intervient BAROUBA ?",
    a: "BAROUBA GROUP a son siège opérationnel à Bobo-Dioulasso et un bureau de coordination stratégique à Ouagadougou. Le groupe intervient dans les 13 régions du Burkina Faso, dans toute la zone UEMOA (Côte d'Ivoire, Sénégal, Mali, Niger) ainsi qu'auprès de la diaspora burkinabè.",
  },
  {
    q: "Quelles sont les garanties juridiques offertes par BAROUBA GROUP ?",
    a: "Chaque projet est encadré par un contrat formel conforme au droit des affaires OHADA, avec cession totale de la propriété intellectuelle (100% à vous), engagement de confidentialité (NDA) et conformité stricte avec la Commission de l'Informatique et des Libertés (CIL).",
  },
  {
    q: "Comment contacter la direction de BAROUBA GROUP ?",
    a: "Vous pouvez joindre directement la direction générale au numéro officiel WhatsApp : +226 74 82 66 66 ou par courriel électronique à contact@baroubagroup.com.",
  },
];

export default async function BaroubaEntityPage({ params }: BaroubaPageProps) {
  const { locale } = await params;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.baroubagroup.com/barouba#about',
        url: 'https://www.baroubagroup.com/barouba',
        name: 'BAROUBA : Fiche d’Identité Officielle & Vision du Groupe',
        description: 'Dossier institutionnel complet sur l’entité BAROUBA (BAROUBA GROUP SARL) au Burkina Faso.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.baroubagroup.com/#website',
          name: 'BAROUBA GROUP',
          url: 'https://www.baroubagroup.com',
        },
        about: {
          '@type': 'Organization',
          '@id': 'https://www.baroubagroup.com/#organization',
          name: 'BAROUBA GROUP',
          alternateName: ['BAROUBA', 'Barouba', 'Groupe Barouba', 'BAROUBA INTERNATIONAL GROUP'],
          url: 'https://www.baroubagroup.com',
          founder: {
            '@type': 'Person',
            name: 'Monsieur SAKO BAROU BEN OUMAR',
            jobTitle: 'Fondateur & Directeur Général',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.baroubagroup.com/barouba#faq',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 01 // Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badgePill}>
            <Sparkles size={14} />
            <span>FICHE D'IDENTITÉ OFFICIELLE • ENTITÉ SOUVERAINE</span>
          </div>

          <h1 className={styles.pageTitle}>
            BAROUBA : L’Histoire, la Vision et les Réalisations de <span className="text-gold-gradient">BAROUBA GROUP</span>
          </h1>

          <p className={styles.pageSubtitle}>
            Tout savoir sur le groupe technologique n°1 au Burkina Faso. De la genèse du nom aux 8 pôles d'excellence en marketing digital, ingénierie logicielle Next.js 16 et intelligence artificielle.
          </p>

          <div className={styles.quickMetaRow}>
            <div className={styles.quickMetaItem}>
              <span className={styles.metaDot}>◆</span>
              <span>Marque : <strong>BAROUBA</strong></span>
            </div>
            <div className={styles.quickMetaItem}>
              <span className={styles.metaDot}>◆</span>
              <span>Raison Sociale : <strong>BAROUBA GROUP SARL</strong></span>
            </div>
            <div className={styles.quickMetaItem}>
              <span className={styles.metaDot}>◆</span>
              <span>Direction : <strong>M. SAKO BAROU BEN OUMAR</strong></span>
            </div>
            <div className={styles.quickMetaItem}>
              <span className={styles.metaDot}>◆</span>
              <span>Siège : <strong>Bobo-Dioulasso, Burkina Faso</strong></span>
            </div>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon label="ENTITÉ TECHNOLOGIQUE & CONFORMITÉ LÉGALE OHADA" />

      {/* 02 // Qu'est-ce que BAROUBA ? (Entity Disambiguation) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>ORIGINE & DÉFINITION</div>
            <h2 className={styles.sectionTitle}>
              Pourquoi dit-on indifféremment « BAROUBA » et « BAROUBA GROUP » ?
            </h2>
            <p className={styles.sectionLead}>
              Comprendre la distinction entre la marque courante et la structure d’entreprise qui propulse l'économie numérique en Afrique de l'Ouest.
            </p>
          </div>

          <div className={styles.entityGrid}>
            <div className={styles.entityTextCol}>
              <p>
                Dans l’usage quotidien, nos partenaires, clients et apprenants utilisent couramment le terme <strong>« BAROUBA »</strong> pour désigner notre cabinet. Sur le plan institutionnel et juridique, l'entité est officiellement enregistrée sous la dénomination <strong>BAROUBA GROUP SARL</strong> (également désignée <em>BAROUBA INTERNATIONAL GROUP</em>).
              </p>
              <p>
                Cette double appellation reflète notre double identité : d'un côté, <strong>une marque forte et mémorable (BAROUBA)</strong> ancrée dans les valeurs sahéliennes de probité et d'authenticité ; de l'autre, <strong>une holding structurée (BAROUBA GROUP)</strong> dotée de 8 pôles d'expertise capables de piloter des projets d'envergure nationale et internationale.
              </p>
              <p>
                Que vous recherchiez « BAROUBA » ou « BAROUBA GROUP » sur Google, vous vous adressez au même collectif d'ingénieurs, de media buyers, de créatifs et de consultants dédiés à la croissance chiffrée de votre entreprise.
              </p>
            </div>

            <div className={styles.entityBoxCol}>
              <div className={styles.entityCard}>
                <div className={styles.entityCardTitle}>
                  <Building2 size={20} />
                  <span>Stature Institutionnelle : Le "GROUP"</span>
                </div>
                <p className={styles.entityCardDesc}>
                  La mention GROUP consacre notre organisation matricielle : plusieurs départements interconnectés (Web, Ads, IA, Académie, E-com) qui mutualisent leurs compétences pour délivrer un résultat sans faille.
                </p>
              </div>

              <div className={styles.entityCard}>
                <div className={styles.entityCardTitle}>
                  <ShieldCheck size={20} />
                  <span>Souveraineté & Droit OHADA</span>
                </div>
                <p className={styles.entityCardDesc}>
                  Une entreprise burkinabè en règle (RCCM, IFU), soumise aux plus hauts standards de gouvernance juridique et de protection des données (CIL).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // La Direction : Monsieur SAKO BAROU BEN OUMAR */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>GOUVERNANCE & LEADERSHIP</div>
            <h2 className={styles.sectionTitle}>
              L'Impulsion Stratégique de Monsieur SAKO BAROU BEN OUMAR
            </h2>
            <p className={styles.sectionLead}>
              Une vision claire : bâtir une technologie africaine d'excellence capable de rivaliser avec les plus grands standards mondiaux.
            </p>
          </div>

          <div className={styles.founderCard}>
            <div className={styles.founderEmblem}>
              <Image 
                src="/logo-or.svg" 
                alt="Emblème BAROUBA GROUP" 
                width={60} 
                height={60} 
                style={{ width: 'auto', height: '54px' }}
              />
            </div>

            <div className={styles.founderInfo}>
              <span className={styles.founderRole}>Fondateur & Directeur Général</span>
              <h3 className={styles.founderName}>Monsieur SAKO BAROU BEN OUMAR</h3>
              <p className={styles.founderBio}>
                Sous sa direction, BAROUBA GROUP a fait le choix radical du résultat opposable : refuser les promesses marketing vagues pour imposer des indicateurs de performance chiffrés (ROAS publicitaire supérieur à 3.5x, temps de chargement web inférieur à 0.8s, taux de conversion maximisé sur WhatsApp). Son ambition est de doter les entreprises africaines d'outils digitaux souverains, performants et pérennes.
              </p>

              <div className={styles.founderActions}>
                <a 
                  href="https://wa.me/22674826666?text=Bonjour%20Monsieur%20SAKO,%20je%20souhaite%20échanger%20avec%20vous%20concernant%20un%20projet%20pour%20mon%20entreprise." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.whatsappVipBtn}
                >
                  <PhoneCall size={18} />
                  <span>Échanger sur WhatsApp (+226 74 82 66 66)</span>
                </a>
                <Link href="/a-propos" className={styles.secondaryBtn}>
                  <span>Découvrir la vision complète</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 // Les 8 Pôles de BAROUBA GROUP */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>CATALOGUE DES EXPERTISES</div>
            <h2 className={styles.sectionTitle}>
              Les 8 Pôles d'Excellence Opérationnelle de BAROUBA GROUP
            </h2>
            <p className={styles.sectionLead}>
              Chaque pôle est piloté par des spécialistes pour garantir un retour sur investissement rapide et durable.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {PILLARS_LIST.map((pillar) => (
              <div key={pillar.num} className={styles.pillarItem}>
                <div className={styles.pillarHead}>
                  <span className={styles.pillarNum}>PÔLE {pillar.num}</span>
                  <Sparkles size={16} color="var(--color-gold)" />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
                <Link href={pillar.href as any} className={styles.pillarLink}>
                  <span>En savoir plus</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AfricanPatternRibbon label="QUESTIONS FRÉQUENTES • RECHERCHES OFFICIELLES GOOGLE & IA" />

      {/* 05 // FAQ Structurée Google / IA */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>RÉPONSES OFFICIELLES</div>
            <h2 className={styles.sectionTitle}>
              Foire Aux Questions sur BAROUBA & BAROUBA GROUP
            </h2>
            <p className={styles.sectionLead}>
              Les réponses directes certifiées par la direction pour guider les internautes et les intelligences artificielles.
            </p>
          </div>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.q}</h3>
                <p className={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
