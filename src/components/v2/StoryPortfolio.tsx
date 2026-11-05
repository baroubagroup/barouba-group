'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  ArrowUpRight, 
  TrendingUp, 
  Clock, 
  Globe2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import BaroubaMockup from './BaroubaMockup';
import styles from './StoryPortfolio.module.css';

const REAL_CASES = [
  {
    id: 'case-ecommerce',
    tag: 'E-COMMERCE & SCALING',
    title: 'Marque Cosmétique Haut de Gamme',
    location: 'Abidjan & Paris',
    period: 'Déploiement en 4 semaines',
    image: '/images/plateforme-web-nextjs-burkina.webp',
    imageAlt: 'Architecture E-commerce Next.js 16 et paiements locaux développée par Barouba Group',
    challenge: 'Un site WordPress qui plantait à chaque pic publicitaire, avec un temps de chargement de 4.8s et plus de 70% de paniers abandonnés.',
    solution: 'Architecture Next.js 16 découplée, passage en caisse ultra-simplifié en 1 clic et synchronisation de l’API de conversion Meta (CAPI).',
    mockupType: 'commerce' as const,
    metrics: [
      { val: '+310%', label: 'Hausse du chiffre d’affaires' },
      { val: '0.65s', label: 'Temps de chargement mobile' },
      { val: 'x4.5', label: 'ROAS publicitaire moyen' }
    ],
    testimonial: '« Nos clients nous disent enfin que le site est digne d’une grande marque internationale. Les ventes ont décollé dès la première semaine. »',
    author: 'Aïssata D. — Fondatrice'
  },
  {
    id: 'case-ai',
    tag: 'INTELLIGENCE ARTIFICIELLE',
    title: 'Société de Distribution & Logistique',
    location: 'Alger & Dubaï',
    period: 'Intégration en 3 semaines',
    image: '/images/agent-ia-whatsapp-automation.webp',
    imageAlt: 'Agent IA autonome WhatsApp et automatisation de processus métier par Barouba Group',
    challenge: 'Une équipe support submergée par 600+ messages WhatsApp quotidiens pour des demandes de prix, de stock et de devis.',
    solution: 'Création d’un agent IA sur mesure connecté directement à leur base de données. L’agent qualifie les prospects et génère les bons de commande automatiquement.',
    mockupType: 'ai' as const,
    metrics: [
      { val: '80%', label: 'Questions résolues sans humain' },
      { val: '2 min', label: 'Délai moyen de réponse' },
      { val: '0 erreur', label: 'Sur les devis générés' }
    ],
    testimonial: '« L’agent ne dort jamais. Même le dimanche soir, il enregistre des commandes pour le lundi matin. C’est le meilleur investissement de l’année. »',
    author: 'Karim B. — Directeur des Opérations'
  },
  {
    id: 'case-portal',
    tag: 'PORTAIL INSTITUTIONNEL & SAAS',
    title: 'Plateforme de Formalisation & Entreprise',
    location: 'Afrique de l’Ouest',
    period: 'Livraison clés en main',
    image: '/images/agence-communication-digitale-bobo.webp',
    imageAlt: 'Stratégie de communication digitale, gestion de pages et acquisition par Barouba Group',
    challenge: 'Nécessité de moderniser un portail de démarches administratives pour traiter des milliers de demandes sans saturation de serveur.',
    solution: 'Plateforme sur mesure sécurisée avec formulaires dynamiques, téléversement de pièces jointes et tableau de bord de traitement en temps réel.',
    mockupType: 'portal' as const,
    metrics: [
      { val: '12 000+', label: 'Dossiers traités en ligne' },
      { val: '99.9%', label: 'Disponibilité serveur constatée' },
      { val: '100%', label: 'Conformité et sécurité des données' }
    ],
    testimonial: '« Une rigueur technique exemplaire. Le projet a été livré dans les délais annoncés et la plateforme encaisse des flux massifs sans aucun ralentissement. »',
    author: 'Ousmane K. — Directeur des Systèmes d’Information'
  }
];

export default function StoryPortfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = REAL_CASES[activeTab];

  return (
    <section className={styles.section} id="etudes-de-cas">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>RÉALISATIONS SUR MESURE & RÉSULTATS PROUVÉS</span>
          </div>

          <h2 className={styles.title}>
            Des résultats concrets bâtis pour des <span className="text-gold-gradient">entreprises exigeantes</span>
          </h2>
          <p className={styles.subtitle}>
            Pas de théorie abstraite. Découvrez comment nous avons résolu des défis complexes pour des marques et dirigeants à travers le monde.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className={styles.tabsRow}>
          {REAL_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`${styles.tabBtn} ${activeTab === idx ? styles.tabBtnActive : ''}`}
              type="button"
            >
              <span className={styles.tabNum}>0{idx + 1}</span>
              <span className={styles.tabTitle}>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        <div className={styles.caseCard}>
          <div className={styles.cardGrid}>
            {/* Left: Challenge, Solution & Story */}
            <div className={styles.contentCol}>
              <div className={styles.caseMetaTop}>
                <span className={styles.tagPill}>{currentCase.tag}</span>
                <div className={styles.locationWrap}>
                  <Globe2 size={14} className={styles.locIcon} />
                  <span>{currentCase.location}</span>
                </div>
                <div className={styles.periodWrap}>
                  <Clock size={14} className={styles.clockIcon} />
                  <span>{currentCase.period}</span>
                </div>
              </div>

              <h3 className={styles.caseHeading}>{currentCase.title}</h3>

              {/* Challenge & Solution Blocks */}
              <div className={styles.storyBlock}>
                <div className={styles.storyRow}>
                  <div className={styles.storyTagRed}>Le Défi Initial</div>
                  <p className={styles.storyDesc}>{currentCase.challenge}</p>
                </div>

                <div className={styles.storyRow}>
                  <div className={styles.storyTagGold}>Notre Solution Sur-Mesure</div>
                  <p className={styles.storyDesc}>{currentCase.solution}</p>
                </div>
              </div>

              {/* Verified Metrics Row */}
              <div className={styles.metricsBox}>
                {currentCase.metrics.map((m, i) => (
                  <div key={i} className={styles.metricItem}>
                    <div className={styles.metricVal}>{m.val}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className={styles.testimonialBox}>
                <p className={styles.quoteText}>{currentCase.testimonial}</p>
                <cite className={styles.quoteAuthor}>{currentCase.author}</cite>
              </blockquote>

              <div className={styles.actionWrap}>
                <a href="#contact" className={styles.caseCta}>
                  <span>Viser des résultats similaires</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Right: Proprietary Barouba Software Preview & Real Visuals */}
            <div className={styles.previewCol}>
              <div className={styles.mockupWrapper}>
                {REAL_CASES.map((item, idx) => (
                  <div
                    key={item.id}
                    style={{ display: idx === activeTab ? 'block' : 'none' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={800}
                      height={500}
                      priority={idx === 0}
                      className={styles.caseImage}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        border: '1px solid rgba(245, 166, 35, 0.25)',
                        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
                        display: 'block',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
