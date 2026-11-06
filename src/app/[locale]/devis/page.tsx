import type { Metadata } from 'next';
import QuoteCalculator from '@/components/v2/QuoteCalculator';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { ShieldCheck, Clock, FileText, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './devis.module.css';

export const metadata: Metadata = {
  title: 'Demande de Devis & Cadrage Projet | BAROUBA GROUP',
  description: 'Chiffrez votre projet web Next.js, agent IA ou campagne publicitaire. Étude de faisabilité rapide et diagnostic sans engagement.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/devis',
  },
};

export default async function DevisPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>ESTIMATION IMMÉDIATE &amp; CADRAGE STRATÉGIQUE</span>
          </div>

          <h1 className={styles.pageTitle}>
            Prise de Devis &amp; Étude de votre <span className="text-gold-gradient">Projet Numérique</span>
          </h1>

          <p className={styles.pageSubtitle}>
            Sélectionnez votre domaine d'intervention, précisez vos objectifs et votre budget indicatif. Votre dossier est instantanément transmis à notre direction technique et synchronisé sur notre plateforme pour un cadrage sous 24h ouvrées.
          </p>

          {/* 4 Guarantees Bar */}
          <div className={styles.guaranteeRow}>
            <div className={styles.guaranteeItem}>
              <Clock size={20} className={styles.guaranteeIcon} />
              <div>
                <div className={styles.gTitle}>Réponse sous 24h</div>
                <div className={styles.gSub}>Étude de cadrage personnalisée</div>
              </div>
            </div>

            <div className={styles.guaranteeItem}>
              <Lock size={20} className={styles.guaranteeIcon} />
              <div>
                <div className={styles.gTitle}>Confidentialité NDA</div>
                <div className={styles.gSub}>Protection totale de vos données</div>
              </div>
            </div>

            <div className={styles.guaranteeItem}>
              <FileText size={20} className={styles.guaranteeIcon} />
              <div>
                <div className={styles.gTitle}>Devis Ferme &amp; Détaillé</div>
                <div className={styles.gSub}>Transparence intégrale des coûts</div>
              </div>
            </div>

            <div className={styles.guaranteeItem}>
              <ShieldCheck size={20} className={styles.guaranteeIcon} />
              <div>
                <div className={styles.gTitle}>Sécurité Juridique</div>
                <div className={styles.gSub}>Contrat commercial norme OHADA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Ribbon */}
      <AfricanPatternRibbon label="CONFIGURATEUR DE DEVIS CONNECTÉ EN TEMPS RÉEL" />

      {/* Main Quote Builder */}
      <section className={styles.builderSection}>
        <div className="container">
          <QuoteCalculator />
        </div>
      </section>
    </div>
  );
}
