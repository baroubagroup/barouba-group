'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Rocket, 
  BarChart3, 
  CheckCircle2 
} from 'lucide-react';
import styles from './AboutSection.module.css';

const Globe3D = dynamic(() => import('@/components/animations/Globe3D'), {
  ssr: false,
  loading: () => (
    <div className={styles.globePlaceholder}>
      <div className={styles.globeLoader} />
    </div>
  ),
});

const STATS = [
  { value: '2 000+', label: 'Partenaires & Clients', caption: 'Accompagnement continu' },
  { value: '100+', label: 'Infrastructures Livrées', caption: 'Web, SaaS & Entonnoirs' },
  { value: '500+', label: 'Professionnels Formés', caption: 'Sur les technologies d’avenir' },
  { value: '98.5%', label: 'Indice de Rétention', caption: 'Satisfaction & ROI mesuré' },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Excellence Technique & Robustesse',
    desc: 'Nous rejetons le code jetable. Chaque plateforme est architecturée pour supporter un trafic massif sans latence.',
    accent: '#FFD700'
  },
  {
    icon: Rocket,
    title: 'IA Appliquée au Business',
    desc: 'Nous transformons l’intelligence artificielle en outils concrets : agents de qualification, automatisation et analyse prédictive.',
    accent: '#F5A623'
  },
  {
    icon: BarChart3,
    title: 'Focus Obsessionnel sur le ROI',
    desc: 'Un design sublime ne suffit pas s’il ne convertit pas. Nos tunnels et interfaces sont pensés pour maximiser votre chiffre d’affaires.',
    accent: '#E67814'
  },
];

export default function AboutSection() {
  const t = useTranslations('about_section');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const globeY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={sectionRef} className={styles.section} id="about">
      {/* Ambient background glow */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          {/* Left Column: 3D Holographic Globe */}
          <motion.div
            className={styles.globeWrap}
            style={{ y: globeY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.globeFrame}>
              <Globe3D />
            </div>

            {/* Micro stats banner below 3D scene */}
            <div className={styles.floatingStatsBar}>
              <div className={styles.statsBarInner}>
                <span className={styles.pulseDot} />
                <span className={styles.statsBarText}>Écosystème Digital Actif & Connecté en Temps Réel</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strategic Presentation */}
          <div className={styles.contentWrap}>
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={14} className={styles.badgeSparkle} />
              <span>NOTRE HISTOIRE & VISION</span>
            </motion.div>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              L'Alliance Unique de l'Ingénierie Tech et de la <span className={styles.goldText}>Performance Commerciale</span>
            </motion.h2>

            <motion.p
              className={styles.leadParagraph}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Fondé avec une ambition claire : combler le fossé entre les agences techniques 
              déconnectées du business et les marketeurs sans rigueur d'ingénierie. 
              Chez <strong>BAROUBA GROUP</strong>, nous développons des systèmes informatiques 
              puissants taillés spécifiquement pour conquérir des parts de marché.
            </motion.p>

            {/* 3 Pillars */}
            <div className={styles.pillarsGrid}>
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    className={styles.pillarItem}
                    initial={{ opacity: 0, x: 25 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.pillarIconBox} style={{ borderColor: `${p.accent}30` }}>
                      <Icon size={20} style={{ color: p.accent }} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{p.title}</h3>
                      <p className={styles.pillarDesc}>{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action */}
            <motion.div
              className={styles.actionWrap}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/a-propos" className={styles.aboutCta}>
                <span>En savoir plus sur notre méthodologie</span>
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 4 Numbers Grid */}
        <div className={styles.numbersGrid}>
          {STATS.map((s, idx) => (
            <motion.div
              key={s.label}
              className={styles.numberCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.numberVal}>{s.value}</div>
              <div className={styles.numberLabel}>{s.label}</div>
              <div className={styles.numberCaption}>{s.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
