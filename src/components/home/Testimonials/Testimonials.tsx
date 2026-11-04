'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Star, Quote, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import MarqueeRow from '@/components/animations/MarqueeRow';
import styles from './Testimonials.module.css';

const TESTIMONIALS_ROW_1 = [
  {
    id: 1,
    name: 'Sarah K.',
    role: 'CEO, E-Commerce & Retail',
    metrics: '+210% CA en 4 mois',
    content: "Depuis que BAROUBA GROUP a restructuré notre acquisition publicitaire et intégré un agent IA conversationnel, notre rentabilité a explosé. Le niveau d'exécution technique est sans équivalent.",
  },
  {
    id: 2,
    name: 'Marc D.',
    role: 'Fondateur, Fintech SaaS',
    metrics: '10 000+ utilisateurs onboardés',
    content: "Une agence capable à la fois de développer une plateforme Next.js d'une fluidité exemplaire et de concevoir le tunnel de conversion qui remplit les bases de données. De vrais bâtisseurs.",
  },
  {
    id: 3,
    name: 'Leila T.',
    role: 'Directrice des Opérations',
    metrics: '80% du support automatisé',
    content: "Leur maîtrise des LLM et de l'automatisation métier a libéré nos équipes. L'assistant virtuel traite les requêtes complexes en temps réel avec un taux de satisfaction de 96%.",
  },
  {
    id: 4,
    name: 'Amine B.',
    role: 'Infopreneur & Formateur',
    metrics: '120k€ générés au lancement',
    content: "Mon lancement de formation a été un triomphe grâce à leurs tunnels de vente haute conversion. Tout est automatisé de la prise de commande aux relances e-mail intelligentes.",
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    id: 5,
    name: 'Jean-Paul R.',
    role: 'Directeur Général, Groupe B2B',
    metrics: 'Cycle de vente réduit de 40%',
    content: "On cherchait des développeurs, on a trouvé des stratèges. BAROUBA GROUP comprend les enjeux de rentabilité et applique une rigueur d'ingénierie rare dans le monde des agences.",
  },
  {
    id: 6,
    name: 'Sofia Y.',
    role: 'Gérante, Société Immobilière',
    metrics: 'x3 sur les leads qualifiés',
    content: "Leur stratégie d'acquisition et le tunnel de qualification interactif filtrent nos prospects en amont. Nos commerciaux n'appellent plus que des décideurs prêts à signer.",
  },
  {
    id: 7,
    name: 'Karim S.',
    role: 'Directeur Marketing International',
    metrics: 'ROAS stable à 4.8 sur TikTok Ads',
    content: "La qualité des créatifs publicitaires couplée au tracking millimétré a permis de scaler nos campagnes à l'international sans aucune déperdition de marge.",
  },
  {
    id: 8,
    name: 'Élodie M.',
    role: 'Fondatrice de Marque D2C',
    metrics: 'Taux de conversion doublé',
    content: "La refonte de notre boutique en ligne a transformé la perception de notre marque. L'interface est luxueuse, rapide comme l'éclair et nos clients adorent.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.section} id="temoignages" ref={ref}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={14} className={styles.badgeSparkle} />
            <span>PREUVE SOCIALE & RÉSULTATS DÉMONTRÉS</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ce que disent les Dirigeants qui nous ont <span className={styles.goldText}>Confié leur Croissance</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Des retours authentiques de fondateurs, directeurs et entrepreneurs qui mesurent quotidiennement 
            l’impact de nos solutions sur leur rentabilité.
          </motion.p>
        </div>
      </div>

      {/* Marquee Rows with Luxury Cards */}
      <div className={styles.marqueeContainer}>
        {/* Row 1 */}
        <MarqueeRow speed={38} direction="left">
          {TESTIMONIALS_ROW_1.map((item) => (
            <div key={item.id} className={styles.cardWrapper}>
              <SpotlightCard className={styles.testimonialCard} spotlightColor="rgba(245, 166, 35, 0.15)">
                <div className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={styles.starIcon} fill="#FFD700" />
                      ))}
                    </div>
                    <span className={styles.metricsBadge}>{item.metrics}</span>
                  </div>

                  <p className={styles.testimonialContent}>"{item.content}"</p>

                  <div className={styles.cardAuthor}>
                    <div className={styles.authorAvatar}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.authorName}>{item.name}</div>
                      <div className={styles.authorRole}>{item.role}</div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </MarqueeRow>

        {/* Row 2 */}
        <div style={{ marginTop: '1.4rem' }}>
          <MarqueeRow speed={34} direction="right">
            {TESTIMONIALS_ROW_2.map((item) => (
              <div key={item.id} className={styles.cardWrapper}>
                <SpotlightCard className={styles.testimonialCard} spotlightColor="rgba(245, 166, 35, 0.15)">
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={styles.starIcon} fill="#FFD700" />
                        ))}
                      </div>
                      <span className={styles.metricsBadge}>{item.metrics}</span>
                    </div>

                    <p className={styles.testimonialContent}>"{item.content}"</p>

                    <div className={styles.cardAuthor}>
                      <div className={styles.authorAvatar}>
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className={styles.authorName}>{item.name}</div>
                        <div className={styles.authorRole}>{item.role}</div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </MarqueeRow>
        </div>
      </div>
    </section>
  );
}
