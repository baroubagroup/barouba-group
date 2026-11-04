'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Bot, 
  TrendingUp, 
  Cpu, 
  Layers, 
  ChevronDown,
  ShieldCheck,
  Zap
} from 'lucide-react';
import ParticleCanvas from '@/components/animations/ParticleCanvas';
import MagneticButton from '@/components/animations/MagneticButton';
import styles from './HeroSection.module.css';

const PILLARS = [
  { text: "vos Plateformes Web d'Élite.", icon: Code2 },
  { text: "vos Systèmes & Agents IA.", icon: Bot },
  { text: "votre Acquisition & Croissance.", icon: TrendingUp },
  { text: "vos Tunnels de Haute Conversion.", icon: Zap },
];

const TECH_PILLS = [
  { label: 'Next.js 16 & React 19', icon: Code2, x: '6%', y: '22%', delay: 0.2 },
  { label: 'Agents IA Autonomes', icon: Bot, x: '82%', y: '18%', delay: 0.4 },
  { label: 'Acquisition & Scaling 360°', icon: TrendingUp, x: '78%', y: '74%', delay: 0.6 },
  { label: 'Architecture Cloud Sécurisée', icon: ShieldCheck, x: '5%', y: '68%', delay: 0.8 },
  { label: 'Workflows & LLM Avancés', icon: Cpu, x: '86%', y: '46%', delay: 0.35 },
  { label: 'Design System & UI Haute Précision', icon: Layers, x: '4%', y: '44%', delay: 0.55 },
];

interface HeroSectionProps {
  data?: any;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const t = useTranslations('hero');
  const [pillarIndex, setPillarIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  useEffect(() => {
    const interval = setInterval(() => {
      setPillarIndex((prev) => (prev + 1) % PILLARS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = PILLARS[pillarIndex].icon;

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Hero">
      {/* Dynamic ambient particles */}
      <motion.div className={styles.canvasWrap} style={{ y: bgY }}>
        <ParticleCanvas />
      </motion.div>

      {/* Atmospheric radial grid & luxury lighting */}
      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.ambientGlowPrimary} aria-hidden="true" />
      <div className={styles.ambientGlowSecondary} aria-hidden="true" />

      {/* Floating Precision Tech Badges */}
      {TECH_PILLS.map((pill) => {
        const IconComponent = pill.icon;
        return (
          <motion.div
            key={pill.label}
            className={styles.floatingTag}
            style={{ left: pill.x, top: pill.y }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: pill.delay + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className={styles.floatingTagInner}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: pill.delay }}
            >
              <div className={styles.pillIconBox}>
                <IconComponent size={14} className={styles.pillIcon} />
              </div>
              <span>{pill.label}</span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Main Core Content */}
      <motion.div
        className={`container ${styles.content}`}
        style={{ y: titleY, opacity: titleOpacity }}
      >
        {/* Elite Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badgePulse}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeRing} />
          </div>
          <Sparkles size={14} className={styles.badgeSparkle} />
          <span className={styles.badgeText}>Studio Tech & Croissance Digitale Premium</span>
          <span className={styles.badgeSeparator}>•</span>
          <span className={styles.badgeSubtext}>International</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.titleMain}>Bâtisseurs de Solutions sur Mesure pour</span>
          <span className={styles.typewriterWrap}>
            <AnimatePresence mode="wait">
              <motion.span
                key={pillarIndex}
                className={styles.highlight}
                initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -35, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <CurrentIcon size={38} className={styles.highlightIcon} />
                <span>{PILLARS[pillarIndex].text}</span>
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          De l'ingénierie web haute performance à l'automatisation par intelligence artificielle 
          et aux stratégies d'acquisition ciblées : nous concevons les infrastructures numériques 
          qui propulsent les leaders de demain.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton strength={0.25}>
            <Link href="/services" className={styles.ctaPrimary}>
              <span>Découvrir notre Expertise</span>
              <div className={styles.ctaArrow}>
                <ArrowRight size={18} />
              </div>
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <Link href="/portfolio" className={styles.ctaSecondary}>
              <span>Explorer nos Réalisations</span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Key Metrics / Trust Bar */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { value: '2 000+', label: 'Clients & Partenaires', caption: 'À travers 12+ pays' },
            { value: '100+', label: 'Systèmes & Solutions Déployés', caption: 'Web, SaaS & IA' },
            { value: '98.5%', label: 'Indice de Satisfaction', caption: 'Excellence & support dédié' },
          ].map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statCaption}>{stat.caption}</div>
              {i < 2 && <div className={styles.statDivider} aria-hidden="true" />}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 1 }}
          aria-hidden="true"
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollText}>Faites défiler pour explorer</span>
          <ChevronDown size={14} className={styles.scrollChevron} />
        </motion.div>
      </motion.div>
    </section>
  );
}
