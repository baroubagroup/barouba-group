'use client';

import { useState } from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import styles from './AgencyComparator.module.css';

const COMPARISON_ROWS = [
  {
    feature: 'Architecture & Technologies',
    barouba: 'Next.js 16, TypeScript & Supabase. Code propriétaire sur mesure (< 0.8s de chargement).',
    baroubaWin: true,
    classicAgency: 'Templates WordPress ou Webflow alourdis de plugins qui ralentissent le site.',
    freelance: 'Compétences très variables, souvent sans garantie de sécurité ni de scalabilité.'
  },
  {
    feature: 'Intelligence Artificielle & Automatisation',
    barouba: 'Véritables agents IA formés sur vos données, connectés à WhatsApp et à vos outils métiers.',
    baroubaWin: true,
    classicAgency: 'Simples formulaires basiques ou chatbots standards sans logique décisionnelle.',
    freelance: 'Rarement maîtrisé au niveau infrastructure de production.'
  },
  {
    feature: 'Propriété Intellectuelle & Accès',
    barouba: '100% à vous dès le solde. Vous possédez le code source, les serveurs et le nom de domaine.',
    baroubaWin: true,
    classicAgency: 'Contrats captifs souvent assortis de licences propriétaires ou frais de sortie.',
    freelance: 'Risque fréquent de perte d’accès aux comptes ou d’absence de documentation.'
  },
  {
    feature: 'Délais de Réalisation',
    barouba: 'Livraison en 2 à 4 semaines par sprints agiles avec points d’avancement hebdomadaires.',
    baroubaWin: true,
    classicAgency: '3 à 6 mois de réunions interminables et de lourdeurs bureaucratiques.',
    freelance: 'Délais imprévisibles dès que le freelance gère plusieurs urgences simultanées.'
  },
  {
    feature: 'Suivi & Garantie Post-Mise en Ligne',
    barouba: '90 jours d’assistance technique incluse + canal WhatsApp / Slack direct dédié.',
    baroubaWin: true,
    classicAgency: 'Facturation à l’heure ou contrat de maintenance annuel obligatoire et coûteux.',
    freelance: 'Souvent injoignable ou indisponible une fois le projet livré.'
  },
  {
    feature: 'Orientation Business & Conversion',
    barouba: 'Chaque bouton, texte et image est pensé pour rentabiliser l’acquisition publicitaire.',
    baroubaWin: true,
    classicAgency: 'Design purement décoratif sans compréhension des métriques publicitaires.',
    freelance: 'Focus technique uniquement sans vision commerciale ou marketing.'
  }
];

export default function AgencyComparator() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<'classic' | 'freelance'>('classic');

  return (
    <section className={styles.section} id="pourquoi-nous">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>LA DIFFÉRENCE BAROUBA</span>
          </div>

          <h2 className={styles.title}>
            Pourquoi nous confier votre projet plutôt qu’à une <span className="text-gold-gradient">autre structure</span> ?
          </h2>
          <p className={styles.subtitle}>
            Tous les prestataires ne se valent pas. Voici une comparaison objective et sans détour entre notre méthodologie d'élite et les offres habituelles du marché.
          </p>

          {/* Mobile switcher: Head-to-Head Comparison */}
          <div className={styles.mobileTabs}>
            <button
              onClick={() => setSelectedCompetitor('classic')}
              className={`${styles.mobileTab} ${selectedCompetitor === 'classic' ? styles.mobileTabActive : ''}`}
              type="button"
            >
              vs Agence Classique
            </button>
            <button
              onClick={() => setSelectedCompetitor('freelance')}
              className={`${styles.mobileTab} ${selectedCompetitor === 'freelance' ? styles.mobileTabActive : ''}`}
              type="button"
            >
              vs Freelance Isolé
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.colFeature}>Critère d'Excellence</div>
            <div className={`${styles.colBarouba} ${styles.highlightCol}`}>
              <div className={styles.baroubaHeaderContent}>
                <span className={styles.brandTitle}>BAROUBA GROUP</span>
                <span className={styles.recomBadge}>APPROCHE 2026</span>
              </div>
            </div>
            <div className={styles.colOther}>Agence Traditionnelle</div>
            <div className={styles.colOther}>Freelance Isolé</div>
          </div>

          <div className={styles.tableBody}>
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className={styles.tableRow}>
                <div className={styles.colFeature}>
                  <span className={styles.featureLabel}>{row.feature}</span>
                </div>

                {/* BAROUBA column */}
                <div className={`${styles.colBarouba} ${styles.highlightCell}`}>
                  <div className={styles.cellContent}>
                    <div className={styles.checkIconBox}>
                      <Check size={16} />
                    </div>
                    <span>{row.barouba}</span>
                  </div>
                </div>

                {/* Classic Agency column */}
                <div className={styles.colOther}>
                  <div className={styles.cellContentMuted}>
                    <div className={styles.crossIconBox}>
                      <X size={15} />
                    </div>
                    <span>{row.classicAgency}</span>
                  </div>
                </div>

                {/* Freelance column */}
                <div className={styles.colOther}>
                  <div className={styles.cellContentMuted}>
                    <div className={styles.crossIconBox}>
                      <X size={15} />
                    </div>
                    <span>{row.freelance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Action */}
          <div className={styles.tableFooter}>
            <div className={styles.footerLeft}>
              <ShieldCheck size={20} className={styles.footerShield} />
              <span>Garantie contractuelle de conformité et engagement écrit sur les résultats</span>
            </div>
            <a href="#contact" className={styles.footerCta}>
              <span>Demander un audit comparatif gratuit</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Mobile View Card: Head-to-Head Visual Comparison */}
        <div className={styles.mobileCardsView}>
          {COMPARISON_ROWS.map((row, idx) => (
            <div key={idx} className={styles.mobileRowCard}>
              <h3 className={styles.mobileFeatureHeading}>{row.feature}</h3>
              
              {/* BAROUBA Advantage */}
              <div className={styles.mobileBaroubaBlock}>
                <div className={styles.mobileBlockTag}>
                  <Check size={14} className={styles.checkIconMobile} />
                  <span>BAROUBA GROUP (Standard Élite)</span>
                </div>
                <p className={styles.mobileBlockText}>{row.barouba}</p>
              </div>

              {/* Competitor Reality */}
              <div className={styles.mobileOtherBlock}>
                <div className={styles.mobileBlockTagMuted}>
                  <X size={13} className={styles.crossIconMobile} />
                  <span>{selectedCompetitor === 'classic' ? 'Agence Traditionnelle' : 'Freelance Isolé'}</span>
                </div>
                <p className={styles.mobileBlockTextMuted}>
                  {selectedCompetitor === 'classic' ? row.classicAgency : row.freelance}
                </p>
              </div>
            </div>
          ))}

          <div className={styles.mobileCtaBox}>
            <a href="#contact" className={styles.footerCta}>
              <span>Demander un audit comparatif gratuit</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
