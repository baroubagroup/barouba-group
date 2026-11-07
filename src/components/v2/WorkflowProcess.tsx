'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import styles from './WorkflowProcess.module.css';

const STEPS = [
  {
    step: '01',
    phase: 'JOURS 1 À 3',
    title: 'Diagnostic Stratégique & Architecture',
    summary: 'Nous disséquons vos objectifs commerciaux et concevons la feuille de route technique.',
    icon: Search,
    color: '#F5A623',
    deliverables: [
      'Audit de vos goulots d’étranglement actuels',
      'Architecture technique sur mesure (Next.js, Supabase, IA)',
      'Cahier des charges contractuel sans frais cachés'
    ],
    clientAction: '1 atelier de cadrage de 45 minutes pour valider vos priorités.'
  },
  {
    step: '02',
    phase: 'SEMAINE 1',
    title: 'Design Haute Fidélité & Expérience Utilisateur',
    summary: 'Conception de l’interface pensée pour convertir chaque visiteur dès la première seconde.',
    icon: Palette,
    color: '#FFD700',
    deliverables: [
      'Maquettes interactives prêtes pour mobile et desktop',
      'Rédaction commerciale et hiérarchie visuelle percutante',
      'Validation de la charte de marque et de l’ergonomie'
    ],
    clientAction: 'Votre validation sur le prototype avant tout développement.'
  },
  {
    step: '03',
    phase: 'SEMAINES 2 À 3',
    title: 'Ingénierie de Pointe & Intégration IA',
    summary: 'Développement du code source propriétaire et connexion de vos automatisations métiers.',
    icon: Code2,
    color: '#F97316',
    deliverables: [
      'Code Next.js 16 & TypeScript ultra-rapide (< 0.8s)',
      'Assistants IA connectés à votre CRM & WhatsApp',
      'Lien de prévisualisation privé mis à jour en direct'
    ],
    clientAction: 'Suivi hebdomadaire de l’avancement sur environnement privé.'
  },
  {
    step: '04',
    phase: 'SEMAINE 4 & APRÈS',
    title: 'Lancement Officiel & Garantie Sérénité 90 Jours',
    summary: 'Mise en ligne, transfert total des clés et accompagnement post-lancement dédié.',
    icon: Rocket,
    color: '#10B981',
    deliverables: [
      'Déploiement haute disponibilité avec score PageSpeed 95+',
      'Cession totale de la propriété intellectuelle et des accès',
      '90 jours de garantie technique et support VIP WhatsApp'
    ],
    clientAction: 'Votre entreprise dispose d’un actif digital hautement rentable.'
  }
];

export default function WorkflowProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className={styles.section} id="methode">
      {/* Background Subtle Tech Ambient Glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className="container">
        {/* Header with Smooth Motion Reveal */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>NOTRE MANIÈRE DE TRAVAILLER</span>
          </div>

          <h2 className={styles.title}>
            Une méthode rigoureuse en <span className="text-gold-gradient">4 étapes</span>. Zéro imprévu.
          </h2>
          <p className={styles.subtitle}>
            Fini les projets qui s’éternisent pendant 6 mois sans visibilité. Chez BAROUBA GROUP, chaque projet est découpé en sprints précis avec des livrables concrets à chaque étape.
          </p>
        </motion.div>

        {/* Stepper Process Flow Wrapper with Timeline Connector */}
        <div className={styles.flowWrapper}>
          {/* Connecting Laser Beam Line (Desktop Horizontal) */}
          <div className={styles.timelineBar} aria-hidden="true">
            <motion.div 
              className={styles.timelineFill}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Stepper Cards Grid */}
          <div className={styles.processGrid}>
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStepIndex === idx;

              return (
                <motion.div 
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`${styles.stepCard} ${isSelected ? styles.stepCardActive : ''}`}
                  style={{ '--accent-color': step.color } as React.CSSProperties}
                  // Motion design: enters field of vision when user scrolls near it
                  initial={{ opacity: 0, y: 55, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
                  transition={{ 
                    duration: 0.65, 
                    delay: idx * 0.12, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                >
                  {/* Step Top Header Row */}
                  <div className={styles.stepTop}>
                    <motion.div 
                      className={styles.stepNumberBadge}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.12, duration: 0.4 }}
                    >
                      {step.step}
                    </motion.div>
                    <span className={styles.phaseTag}>{step.phase}</span>
                  </div>

                  {/* Icon Circle with Animated Accent Glow */}
                  <motion.div 
                    className={styles.iconCircle}
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepSummary}>{step.summary}</p>

                  {/* Deliverables with Staggered Slide In */}
                  <div className={styles.deliverablesList}>
                    {step.deliverables.map((item, i) => (
                      <motion.div 
                        key={i} 
                        className={styles.deliverableItem}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + idx * 0.1 + i * 0.06, duration: 0.35 }}
                      >
                        <CheckCircle2 size={15} className={styles.checkIcon} />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Client Role Footer */}
                  <div className={styles.clientRoleBox}>
                    <div className={styles.clientRoleLabel}>Votre implication :</div>
                    <div className={styles.clientRoleText}>{step.clientAction}</div>
                  </div>

                  {/* Active Card Bottom Indicator Glow */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeCardGlow"
                      className={styles.activeGlowLine} 
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner with In-View Motion */}
        <motion.div 
          className={styles.assuranceBanner}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.bannerLeft}>
            <div className={styles.bannerIconBox}>
              <Clock size={24} />
            </div>
            <div>
              <div className={styles.bannerTitle}>Délai moyen constaté : 2 à 4 semaines</div>
              <div className={styles.bannerSub}>Nous fixons une date de livraison contractuelle et nous nous y tenons scrupuleusement.</div>
            </div>
          </div>

          <a href="#contact" className={styles.bannerBtn}>
            <span>Planifier mon atelier de cadrage</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
