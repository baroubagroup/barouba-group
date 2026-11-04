'use client';

import { Link } from '@/i18n/navigation';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Target
} from 'lucide-react';
import GlitchText from '@/components/animations/GlitchText';
import MagneticButton from '@/components/animations/MagneticButton';
import styles from './CtaSection.module.css';
import { WHATSAPP_NUMBER } from '@/lib/data';

const WHATSAPP_MESSAGE = 'Bonjour BAROUBA INTERNATIONAL GROUP, je souhaite planifier un échange stratégique pour mon projet digital.';

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.section} aria-label="Call to action">
      <div className="container" ref={ref}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient Lighting Orbs */}
          <div className={styles.orb1} aria-hidden="true" />
          <div className={styles.orb2} aria-hidden="true" />
          <div className={styles.grid} aria-hidden="true" />
          <div className={styles.scanLine} aria-hidden="true" />

          {/* Content */}
          <div className={styles.content}>
            <motion.div
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Sparkles size={14} className={styles.sparkleIcon} />
              <span>Prêt à passer au niveau supérieur ?</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h2 className={styles.titleLine1}>
                Bâtissons ensemble votre
              </h2>
              <h2 className={styles.titleLine2}>
                prochaine <span className={styles.highlight}>machine de croissance</span>
              </h2>
            </motion.div>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Vous avez un projet ambitieux ? Nous combinons expertise d'ingénierie, intelligence 
              artificielle et acquisition pour concrétiser vos objectifs d'affaires.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <MagneticButton strength={0.25}>
                <Link href="/contact" className={styles.primaryBtn}>
                  <span>Démarrer un Projet</span>
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  <MessageSquare size={17} />
                  <span>Échange Direct WhatsApp</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              className={styles.trustBadges}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              <div className={styles.trustItem}>
                <Zap size={14} className={styles.trustIcon} />
                <span>Audit & Devis sous 48h</span>
              </div>
              <div className={styles.trustItem}>
                <Target size={14} className={styles.trustIcon} />
                <span>Accompagnement Orienté Résultats</span>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={14} className={styles.trustIcon} />
                <span>Confidentialité & Propriété Totale</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
