'use client';

import { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle,
  Zap
} from 'lucide-react';
import styles from './InteractiveLabV2.module.css';

const BENCHMARKS = [
  {
    range: '10 000€ - 30 000€/mois',
    gainHours: '15h / collaborateur / sem',
    projectedGrowth: '+180% en 90 jours',
    recommendedSystem: 'Agent IA Qualification + Tunnel Next.js 16 + Meta Ads CAPI'
  },
  {
    range: '30 000€ - 100 000€/mois',
    gainHours: '35h / collaborateur / sem',
    projectedGrowth: '+260% en 120 jours',
    recommendedSystem: 'Multi-Agents Autonomes + Refonte Headless Full-Stack + TikTok Scaling'
  },
  {
    range: '100 000€+/mois',
    gainHours: '50h+ / collaborateur / sem',
    projectedGrowth: '+340% à l’international',
    recommendedSystem: 'Architecture Cloud Dédiée + Infrastructure IA sur Mesure + Funnels Omnicanaux'
  }
];

export default function InteractiveLabV2() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [trafficVolume, setTrafficVolume] = useState('5000');

  const currentBenchmark = BENCHMARKS[selectedTier];

  return (
    <section className={styles.section} id="interactive-lab">
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.badge}>
              <Calculator size={14} className={styles.badgeIcon} />
              <span>SIMULATEUR DE POTENTIEL & AUDIT EXPRESS</span>
            </div>

            <h2 className={styles.title}>
              Quel est le véritable gisement de croissance de votre entreprise ?
            </h2>
            <p className={styles.subtitle}>
              Estimez le temps récupéré grâce à nos agents d'intelligence artificielle et l'impact direct d'un écosystème web haute performance sur vos marges.
            </p>
          </div>

          {/* Interactive Calculator Body */}
          <div className={styles.calculatorGrid}>
            {/* Input Side */}
            <div className={styles.inputSide}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  1. Quel est votre palier de chiffre d'affaires actuel ?
                </label>
                <div className={styles.tierSelector}>
                  {BENCHMARKS.map((b, i) => (
                    <button
                      key={b.range}
                      type="button"
                      onClick={() => setSelectedTier(i)}
                      className={`${styles.tierBtn} ${selectedTier === i ? styles.tierBtnActive : ''}`}
                    >
                      <span>{b.range}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  2. Trafic mensuel estimé sur vos canaux :
                </label>
                <div className={styles.trafficSelector}>
                  {['< 5 000 visiteurs', '5 000 - 25 000', '25 000 - 100 000+'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTrafficVolume(t)}
                      className={`${styles.trafficBtn} ${trafficVolume === t ? styles.trafficBtnActive : ''}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.diagnosticSummary}>
                <div className={styles.diagTitle}>
                  <Sparkles size={16} className={styles.sparkleIcon} />
                  <span>Architecture recommandée :</span>
                </div>
                <div className={styles.diagBody}>
                  {currentBenchmark.recommendedSystem}
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className={styles.resultsSide}>
              <div className={styles.resultsBox}>
                <div className={styles.resultHeader}>
                  <span className={styles.resTag}>PROJECTION DE GAIN OPÉRATIONNEL</span>
                  <span className={styles.resLive}>Calculé en temps réel</span>
                </div>

                <div className={styles.kpiRow}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiVal}>{currentBenchmark.gainHours}</div>
                    <div className={styles.kpiDesc}>Temps libéré pour vos équipes stratégiques</div>
                  </div>

                  <div className={styles.kpiCard}>
                    <div className={styles.kpiVal}>{currentBenchmark.projectedGrowth}</div>
                    <div className={styles.kpiDesc}>Potentiel de scaling sans recruter massivement</div>
                  </div>
                </div>

                <div className={styles.resultsBenefitList}>
                  <div className={styles.benefitItem}>
                    <CheckCircle2 size={16} className={styles.benefitCheck} />
                    <span>Prise en charge de 80% des requêtes clients par nos agents IA</span>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle2 size={16} className={styles.benefitCheck} />
                    <span>Éradication des paniers abandonnés via tunnel ultra-rapide</span>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle2 size={16} className={styles.benefitCheck} />
                    <span>Tracking publicitaire 100% conforme sans perte de données</span>
                  </div>
                </div>

                <div className={styles.actionWrap}>
                  <a href="#contact-hub" className={styles.claimAuditBtn}>
                    <span>Demander l'Audit Détaillé de Mon Entreprise</span>
                    <ArrowRight size={18} />
                  </a>
                  <div className={styles.actionNote}>Audit stratégique gratuit sous 48h • Sans engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
