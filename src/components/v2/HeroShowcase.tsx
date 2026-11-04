'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Bot, 
  Code2, 
  Play, 
  ShieldCheck,
  ChevronRight,
  Share2,
  GraduationCap
} from 'lucide-react';
import BaroubaMockup from './BaroubaMockup';
import styles from './HeroShowcase.module.css';

const SHOWCASE_CARDS = [
  {
    id: 'card-comm',
    category: 'Communication & Image',
    title: 'Community Management & Gestion de Pages',
    tagline: 'Facebook, Instagram, TikTok & LinkedIn animés au quotidien',
    stats: '+185%',
    statsLabel: 'Croissance de communauté & portée',
    icon: Share2,
    color: '#F5A623',
    mockupType: 'social' as const,
    features: [
      'Animation quotidienne, Reels & calendrier éditorial',
      'Modération des commentaires & réponses DMs 7j/7',
      'Protection de l’e-réputation et stratégie de marque'
    ]
  },
  {
    id: 'card-web',
    category: 'Ingénierie & Web',
    title: 'Plateformes Web Haute Performance',
    tagline: 'Architecture Next.js 16 • Chargement < 0.8s garanti',
    stats: '+240%',
    statsLabel: 'Taux de transformation moyen',
    icon: Code2,
    color: '#FFD700',
    mockupType: 'dashboard' as const,
    features: [
      'Next.js 16 App Router & TypeScript sécurisé',
      'Paiement international & Mobile Money unifié',
      'Design sur mesure sans template réchauffé'
    ]
  },
  {
    id: 'card-ads',
    category: 'Acquisition & Scaling',
    title: 'Tunnels de Vente & Publicité 360°',
    tagline: 'Chaque franc investi transformé en chiffre d’affaires réel',
    stats: 'x4.2',
    statsLabel: 'ROAS publicitaire moyen vérifié',
    icon: TrendingUp,
    color: '#F97316',
    mockupType: 'commerce' as const,
    features: [
      'Campagnes Meta Ads, TikTok & Google ciblées',
      'Tracking serveur (CAPI) sans perte de données',
      'Pages de vente haute conversion connectées à WhatsApp'
    ]
  },
  {
    id: 'card-ai',
    category: 'Intelligence Artificielle',
    title: 'Agents IA & Automatisation Métier',
    tagline: 'Vos prospects qualifiés et convertis 24h/24 sans délai',
    stats: '85%',
    statsLabel: 'Tâches répétitives résolues sans humain',
    icon: Bot,
    color: '#F5A623',
    mockupType: 'ai' as const,
    features: [
      'Assistants connectés à votre catalogue & WhatsApp Cloud',
      'Qualification automatique de prospects qualifiés',
      'Automatisation stocks, facturation et flux CRM'
    ]
  },
  {
    id: 'card-academy',
    category: 'Formations & Coaching',
    title: 'Formations & Accompagnement Numérique',
    tagline: '« Nous formons et nous accompagnons » vos équipes',
    stats: '96.4%',
    statsLabel: 'Taux de réussite pratique et autonomie',
    icon: GraduationCap,
    color: '#FFD700',
    mockupType: 'academy' as const,
    features: [
      'Cursus CM, Marketing Digital, E-commerce, IA & Web',
      'Mentorat sur cas réels et budgets d’entreprise effectifs',
      'Certification officielle BAROUBA ACADEMY'
    ]
  }
];

export default function HeroShowcase() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Auto cycling cards with manual override
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % SHOWCASE_CARDS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const activeCard = SHOWCASE_CARDS[activeCardIndex];

  return (
    <section className={styles.heroWrap}>
      {/* Background African-Tech Radiant Motif & Lighting */}
      <div className={styles.ambientCanvas} aria-hidden="true">
        <div className={styles.glowTop} />
        <div className={styles.glowSide} />
        {/* Authentic Bogolan Sacred Diamond Pattern Watermark */}
        <div className={styles.afroBogolanWatermark}>
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25">
              <rect x="200" y="20" width="254.5" height="254.5" transform="rotate(45 200 20)" />
              <rect x="200" y="60" width="198" height="198" transform="rotate(45 200 60)" strokeDasharray="6 6" />
              <rect x="200" y="100" width="141.4" height="141.4" transform="rotate(45 200 100)" />
              <circle cx="200" cy="200" r="30" />
              <circle cx="200" cy="200" r="10" fill="currentColor" fillOpacity="0.2" />
              <line x1="20" y1="200" x2="140" y2="200" strokeWidth="2" />
              <line x1="260" y1="200" x2="380" y2="200" strokeWidth="2" />
              <line x1="200" y1="20" x2="200" y2="140" strokeWidth="2" />
              <line x1="200" y1="260" x2="200" y2="380" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Authentic Human & Strategic Proposition */}
          <div className={styles.textCol}>
            {/* Brand Heritage Badge */}
            <div className={styles.badgeWrap}>
              <div className={styles.brandIconMini}>
                <Image 
                  src="/logo-or.svg" 
                  alt="Barouba Emblem" 
                  width={20} 
                  height={20} 
                  style={{ width: 'auto', height: '20px' }}
                  className={styles.emblemMini} 
                />
              </div>
              <span className={styles.badgeText}>AGENCE DIGITALE, PÔLE IA & ACADÉMIE D'ÉLITE</span>
            </div>

            <h1 className={styles.mainHeading}>
              Communication Digitale, Plateformes Web, IA & Formations : <span className="text-gold-gradient">L'Écosystème Global</span> qui accélère votre croissance.
            </h1>

            <p className={styles.description}>
              De la gestion quotidienne de vos réseaux sociaux au développement d’applications Next.js 16 de pointe, en passant par le Media Buying rentable et la formation certifiante de vos équipes : nous combinons expertise opérationnelle et rigueur technique pour propulser votre entreprise.
            </p>

            {/* Value Highlights with Authentic Geometry */}
            <div className={styles.chipsRow}>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Communication &amp; Gestion de pages 7j/7</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Plateformes Web Next.js 16 (&lt; 0.8s)</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Publicités Meta &amp; TikTok rentables</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Nous formons &amp; nous accompagnons</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className={styles.ctaRow}>
              <a href="#solutions" className={styles.primaryBtn}>
                <span>Découvrir nos solutions</span>
                <div className={styles.arrowIcon}>
                  <ArrowUpRight size={18} />
                </div>
              </a>

              <a href="#etudes-de-cas" className={styles.secondaryBtn}>
                <Play size={15} className={styles.playIcon} />
                <span>Voir nos réalisations</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <span className={styles.trustVal}>2 000+</span>
                <span className={styles.trustLabel}>Clients & Partenaires</span>
              </div>
              <div className={styles.trustSeparator} />
              <div className={styles.trustItem}>
                <span className={styles.trustVal}>100+</span>
                <span className={styles.trustLabel}>Plateformes Déployées</span>
              </div>
              <div className={styles.trustSeparator} />
              <div className={styles.trustItem}>
                <span className={styles.trustVal}>98.5%</span>
                <span className={styles.trustLabel}>Satisfaction Vérifiée</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Card Deck with 100% Proprietary Barouba Mockups */}
          <div className={styles.visualCol}>
            <div className={styles.deckContainer}>
              {/* Stepper Switcher */}
              <div className={styles.deckNav}>
                {SHOWCASE_CARDS.map((card, idx) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`${styles.navPill} ${activeCardIndex === idx ? styles.navPillActive : ''}`}
                    type="button"
                  >
                    <span className={styles.navNum}>0{idx + 1}</span>
                    <span className={styles.navPillTitle}>{card.category}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Card Box */}
              <div className={styles.cardBox}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard.id}
                    className={styles.motionCard}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Card Top Banner */}
                    <div className={styles.cardHeader}>
                      <div className={styles.cardCategoryPill}>
                        <activeCard.icon size={16} />
                        <span>{activeCard.category}</span>
                      </div>
                      <div className={styles.liveIndicator}>
                        <span className={styles.liveDot} />
                        <span>Production Active</span>
                      </div>
                    </div>

                    <h3 className={styles.cardTitle}>{activeCard.title}</h3>
                    <p className={styles.cardTagline}>{activeCard.tagline}</p>

                    {/* Proprietary Barouba Group Mockup (No third-party logos) */}
                    <div className={styles.mockupWrapper}>
                      <BaroubaMockup type={activeCard.mockupType} />
                    </div>

                    {/* Features list with African diamond markers */}
                    <div className={styles.featureList}>
                      {activeCard.features.map((feat, i) => (
                        <div key={i} className={styles.featureRow}>
                          <span className={styles.diamondMarker}>◆</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Action */}
                    <div className={styles.cardFooter}>
                      <a href="#contact" className={styles.cardActionBtn}>
                        <span>Échanger sur ce type de projet</span>
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Layered decorative background cards creating 3D depth */}
                <div className={styles.layerCardBack1} aria-hidden="true" />
                <div className={styles.layerCardBack2} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
