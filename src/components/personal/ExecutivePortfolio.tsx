'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  ArrowUpRight, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Search, 
  TrendingUp, 
  Cpu 
} from 'lucide-react';
import styles from './ExecutivePortfolio.module.css';

const CATEGORIES = [
  { id: 'all', label: 'Tous les Projets' },
  { id: 'web-mobile', label: 'Web & Mobile' },
  { id: 'seo-local', label: 'SEO Local' },
  { id: 'marketing-ads', label: 'Marketing & Acquisition' },
  { id: 'ia-automation', label: 'Agents IA & Automatisation' },
];

const CASE_STUDIES = [
  {
    id: 'case-ecommerce-sahel',
    category: 'web-mobile',
    categoryLabel: 'Plateforme Web & Mobile',
    location: 'Bobo-Dioulasso & Ouagadougou',
    title: 'Écosystème E-Commerce & Distribution Omnicanale',
    context: 'Refonte intégrale d’un réseau de distribution sahélien confronté aux lenteurs de leur ancien WordPress et aux échecs de paiement en ligne sur smartphone.',
    solution: 'Architecture Next.js 16 découplée, catalogue instantané (< 0.7s), intégration directe des passerelles Mobile Money (Orange Money, Moov) et tunnel d’achat 1-clic lié à WhatsApp Business.',
    metrics: [
      { big: '< 0.7s', title: 'Temps de chargement', sub: 'Sur réseau mobile 3G/4G local' },
      { big: '+185%', title: 'Croissance des commandes', sub: 'Dès les 90 premiers jours de mise en ligne' },
      { big: '0 panne', title: 'Disponibilité absolue', sub: 'Zéro crash lors des pics de fin d’année' }
    ],
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'Mobile Money API', 'Tailwind']
  },
  {
    id: 'case-seo-domination',
    category: 'seo-local',
    categoryLabel: 'SEO & Référencement Local',
    location: 'Ouagadougou, Burkina Faso',
    title: 'Domination du Pack Local Google Maps pour un Groupe Médical & Services',
    context: 'Un acteur privé de santé et d’analyses médicales invisible sur Google Maps lors des recherches stratégiques des patients à Ouagadougou et Bobo-Dioulasso.',
    solution: 'Restructuration complète de l’autorité locale, balisage Schema.org JSON-LD géolocalisé, optimisation chirurgicale des fiches Google Business et déploiement de pages locales géociblées.',
    metrics: [
      { big: 'N°1', title: 'Positionnement Google Maps', sub: 'Sur les requêtes prioritaires de la capitale' },
      { big: '+240%', title: 'Hausse des appels directs', sub: 'Patients qualifiés générés organiquement' },
      { big: '0 FCFA', title: 'Coût publicitaire récurrent', sub: 'Trafic organique souverain et pérenne' }
    ],
    tech: ['Google Local Pack', 'Schema.org', 'SEO Sémantique', 'GSC', 'Google Maps API']
  },
  {
    id: 'case-acquisition-ads',
    category: 'marketing-ads',
    categoryLabel: 'Marketing Digital & Acquisition',
    location: 'Burkina Faso & Diaspora UEMOA',
    title: 'Campagnes Publicitaires Scientifiques & Tunnel WhatsApp Rentable',
    context: 'Une marque premium de produits et services perdant de l’argent sur Facebook Ads avec un ROAS inférieur à 1.2 et des taux d’abandon massifs au moment du checkout classique.',
    solution: 'Passage au tracking serveur CAPI sans déperdition de données, production de formats vidéos publicitaires à fort hook, et tunnel hybride orientant le trafic vers un closing WhatsApp automatisé.',
    metrics: [
      { big: 'x4.2', title: 'ROAS publicitaire moyen', sub: 'Chaque 100 000 FCFA investi génère 420 000 FCFA' },
      { big: '< 6%', title: 'Taux de refus livraison', sub: 'Grâce au protocole de réassurance WhatsApp' },
      { big: '14 000+', title: 'Leads qualifiés générés', sub: 'Base clients propriétaire exploitable' }
    ],
    tech: ['Meta Ads', 'TikTok Ads', 'Server CAPI', 'Landing Page Monoproduit', 'WhatsApp Closing']
  },
  {
    id: 'case-ia-workflow',
    category: 'ia-automation',
    categoryLabel: 'Agents IA & Automatisation',
    location: 'Afrique de l’Ouest',
    title: 'Assistant IA WhatsApp Cloud & Automatisation des Flux de Devis 24/7',
    context: 'Une entreprise B2B débordée par des centaines de demandes quotidiennes sur WhatsApp, avec des délais de réponse de 6 à 12 heures provoquant la fuite des clients vers les concurrents.',
    solution: 'Déploiement d’un agent IA conversationnel connecté à l’API officielle de WhatsApp Cloud, formé sur le catalogue officiel et capable de qualifier le prospect et générer un devis PDF en 20 secondes.',
    metrics: [
      { big: '20 sec', title: 'Temps de réponse moyen', sub: 'Disponible 24h/24, 7j/7 sans interruption' },
      { big: '82%', title: 'Demandes traitées en autonomie', sub: 'Sans aucune intervention humaine requise' },
      { big: '100%', title: 'Données synchronisées', sub: 'Injection instantanée dans le CRM de direction' }
    ],
    tech: ['WhatsApp Cloud API', 'GPT-4o Custom', 'Make.com', 'FastAPI', 'PostgreSQL']
  }
];

export default function ExecutivePortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCases = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === activeFilter);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Briefcase size={14} />
            <span>Études de Cas & Réalisations Réelles</span>
          </div>

          <h2 className={styles.heading}>
            Des résultats concrets sur le terrain, <br />
            <span className={styles.goldText}>sans promesses chimériques.</span>
          </h2>

          <p className={styles.subheading}>
            Découvrez comment nous appliquons notre ingénierie stratégique, logicielle et marketing pour transformer les performances économiques d'organisations réelles en Afrique de l'Ouest.
          </p>
        </div>

        {/* Category Filters */}
        <div className={styles.filtersRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterActive : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className={styles.casesGrid}>
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={styles.caseCard}
              >
                {/* Left: Context & Architecture */}
                <div className={styles.caseInfo}>
                  <div className={styles.caseMeta}>
                    <span className={styles.caseCategory}>{cs.categoryLabel}</span>
                    <span className={styles.caseLocation}>
                      <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {cs.location}
                    </span>
                  </div>

                  <h3 className={styles.caseTitle}>{cs.title}</h3>
                  <p className={styles.caseContext}>{cs.context}</p>

                  <div className={styles.solutionBox}>
                    <div className={styles.solutionTitle}>Architecture Déployée :</div>
                    <p className={styles.solutionDesc}>{cs.solution}</p>
                  </div>

                  <div className={styles.techStack}>
                    {cs.tech.map((t) => (
                      <span key={t} className={styles.techChip}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Verified Metrics */}
                <div className={styles.caseMetrics}>
                  {cs.metrics.map((m, idx) => (
                    <React.Fragment key={idx}>
                      <div className={styles.metricBlock}>
                        <div className={styles.metricBig}>{m.big}</div>
                        <div className={styles.metricTitle}>{m.title}</div>
                        <div className={styles.metricSub}>{m.sub}</div>
                      </div>
                      {idx < cs.metrics.length - 1 && <div className={styles.metricSeparator} />}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
