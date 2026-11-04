'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap, 
  ShieldCheck,
  Send,
  MessageSquare
} from 'lucide-react';
import styles from './InteractiveEstimator.module.css';

const PROJECT_TYPES = [
  { id: 'web', label: 'Plateforme Web ou Application', sub: 'Vitrine haut de gamme, portail client ou SaaS', icon: '🌐' },
  { id: 'ecommerce', label: 'Boutique E-Commerce & Scaling', sub: 'Multi-devises, checkout 1-clic ultra-rapide', icon: '🛍️' },
  { id: 'ia', label: 'Agent IA & Automatisation Métier', sub: 'Qualification WhatsApp, n8n & intégration CRM', icon: '🤖' },
  { id: 'growth', label: 'Publicité 360° & Tunnels de Vente', sub: 'Meta, TikTok & Google Ads à haut ROAS', icon: '📈' },
];

const COMPANY_SCALES = [
  { id: 'startup', label: 'Lancement ou Nouvelle Marque', sub: 'Besoins d’un MVP rapide et crédible' },
  { id: 'sme', label: 'PME en Croissance', sub: 'Structure établie cherchant à scaler ses ventes' },
  { id: 'enterprise', label: 'Grande Entreprise / Franchise', sub: 'Multi-sites, volume élevé et exigences de sécurité' },
];

const PRIORITIES = [
  { id: 'speed', label: 'Vitesse d’Exécution & Conversion (< 0.8s)' },
  { id: 'auto', label: 'Automatisation des Ventes & Support Client' },
  { id: 'intl', label: 'Expansion Internationale & Multi-Paiements' },
];

export default function InteractiveEstimator() {
  const [selectedType, setSelectedType] = useState('web');
  const [selectedScale, setSelectedScale] = useState('sme');
  const [selectedPriority, setSelectedPriority] = useState('speed');

  // Compute calculated recommendations
  const getRecommendation = () => {
    let timeline = '2 à 3 semaines';
    let stack = 'Next.js 16 • TypeScript • Supabase • CDN Cloud';
    let keyDeliverable = 'Plateforme haute performance avec score Google PageSpeed > 95/100';

    if (selectedType === 'ia') {
      timeline = '1 à 2 semaines';
      stack = 'Agents IA GPT-4o • API WhatsApp Cloud • Webhooks n8n';
      keyDeliverable = 'Assistant conversationnel autonome qualifiant 80% des demandes entrantes';
    } else if (selectedType === 'ecommerce') {
      timeline = '3 à 4 semaines';
      stack = 'Next.js 16 • Stripe & Mobile Money • CAPI Meta';
      keyDeliverable = 'Tunnel e-commerce haute conversion avec passage en caisse 1-clic';
    } else if (selectedType === 'growth') {
      timeline = '7 à 10 jours';
      stack = 'Pages de vente optimisées • Suivi serveur • Création de contenu';
      keyDeliverable = 'Tunnel de conversion complet avec créatifs publicitaires prêts à scaler';
    }

    if (selectedScale === 'enterprise') {
      timeline = '3 à 5 semaines';
    }

    return { timeline, stack, keyDeliverable };
  };

  const rec = getRecommendation();

  // WhatsApp prefilled message
  const currentTypeObj = PROJECT_TYPES.find(p => p.id === selectedType);
  const currentScaleObj = COMPANY_SCALES.find(s => s.id === selectedScale);
  const currentPriorityObj = PRIORITIES.find(pr => pr.id === selectedPriority);

  const prefilledText = `Bonjour BAROUBA GROUP, j'ai utilisé votre simulateur :
- Type : ${currentTypeObj?.label}
- Envergure : ${currentScaleObj?.label}
- Priorité : ${currentPriorityObj?.label}
Je souhaite échanger sur la faisabilité et obtenir une estimation précise.`;

  return (
    <section className={styles.section} id="simulateur">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Calculator size={14} className={styles.badgeIcon} />
            <span>ESTIMATEUR DE PROJET EN DIRECT</span>
          </div>

          <h2 className={styles.title}>
            Configurez votre ambition en <span className="text-gold-gradient">3 clics</span>
          </h2>
          <p className={styles.subtitle}>
            Obtenez instantanément une recommandation technique, un délai de déploiement estimé et les garanties associées à votre situation.
          </p>
        </div>

        {/* Configurator Layout */}
        <div className={styles.grid}>
          {/* Left: Interactive Controls */}
          <div className={styles.controlsCol}>
            {/* Step 1: Type */}
            <div className={styles.controlGroup}>
              <div className={styles.stepIndicator}>
                <span className={styles.stepNum}>01</span>
                <span className={styles.stepLabel}>Quel type de solution souhaitez-vous déployer ?</span>
              </div>
              <div className={styles.optionsList}>
                {PROJECT_TYPES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedType(item.id)}
                    className={`${styles.optionBtn} ${selectedType === item.id ? styles.optionBtnActive : ''}`}
                  >
                    <span className={styles.optionEmoji}>{item.icon}</span>
                    <div className={styles.optionText}>
                      <div className={styles.optionTitle}>{item.label}</div>
                      <div className={styles.optionSub}>{item.sub}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div className={styles.controlGroup}>
              <div className={styles.stepIndicator}>
                <span className={styles.stepNum}>02</span>
                <span className={styles.stepLabel}>Quelle est l’envergure de votre entreprise ?</span>
              </div>
              <div className={styles.optionsListHorizontal}>
                {COMPANY_SCALES.map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setSelectedScale(scale.id)}
                    className={`${styles.scaleBtn} ${selectedScale === scale.id ? styles.scaleBtnActive : ''}`}
                  >
                    <div className={styles.scaleTitle}>{scale.label}</div>
                    <div className={styles.scaleSub}>{scale.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div className={styles.controlGroup}>
              <div className={styles.stepIndicator}>
                <span className={styles.stepNum}>03</span>
                <span className={styles.stepLabel}>Votre priorité stratégique majeure :</span>
              </div>
              <div className={styles.prioritiesRow}>
                {PRIORITIES.map((prio) => (
                  <button
                    key={prio.id}
                    onClick={() => setSelectedPriority(prio.id)}
                    className={`${styles.prioChip} ${selectedPriority === prio.id ? styles.prioChipActive : ''}`}
                  >
                    <span>{prio.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Dynamic Blueprint Result */}
          <div className={styles.resultCol}>
            <div className={styles.resultCard}>
              <div className={styles.resultCardHeader}>
                <div className={styles.liveBadge}>
                  <span className={styles.livePulse} />
                  <span>SYNTHÈSE DE PROJET IMMÉDIATE</span>
                </div>
                <div className={styles.brandEmblemMini}>BAROUBA 2026</div>
              </div>

              {/* Estimated Timeline */}
              <div className={styles.statMetricBox}>
                <div className={styles.metricItem}>
                  <div className={styles.metricVal}>{rec.timeline}</div>
                  <div className={styles.metricLabel}>Délai moyen de livraison</div>
                </div>
                <div className={styles.metricSeparator} />
                <div className={styles.metricItem}>
                  <div className={styles.metricVal}>90 Jours</div>
                  <div className={styles.metricLabel}>Garantie et support inclus</div>
                </div>
              </div>

              {/* Recommended Stack */}
              <div className={styles.detailBlock}>
                <div className={styles.detailTitle}>Architecture Recommandée :</div>
                <div className={styles.stackTag}>{rec.stack}</div>
              </div>

              {/* Key Deliverable */}
              <div className={styles.detailBlock}>
                <div className={styles.detailTitle}>Engagement Clé :</div>
                <div className={styles.deliverableText}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>{rec.keyDeliverable}</span>
                </div>
              </div>

              {/* Guarantees List */}
              <div className={styles.includedGuarantees}>
                <div className={styles.guaranteeRow}>
                  <ShieldCheck size={15} className={styles.shieldIcon} />
                  <span>100% Propriété intellectuelle dès le solde</span>
                </div>
                <div className={styles.guaranteeRow}>
                  <ShieldCheck size={15} className={styles.shieldIcon} />
                  <span>Score Google PageSpeed {'>'} 90 garanti</span>
                </div>
                <div className={styles.guaranteeRow}>
                  <ShieldCheck size={15} className={styles.shieldIcon} />
                  <span>Devis ferme sans dépassement de budget</span>
                </div>
              </div>

              {/* Direct Action */}
              <div className={styles.actionBlock}>
                <a
                  href={`https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(prefilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappActionBtn}
                >
                  <MessageSquare size={18} />
                  <span>Valider cette configuration sur WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
                <p className={styles.actionNote}>
                  Réponse directe d’un responsable technique en moins de 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
