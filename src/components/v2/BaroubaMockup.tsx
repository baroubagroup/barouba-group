'use client';

import Image from 'next/image';
import { 
  ShieldCheck, 
  Zap, 
  Bot, 
  TrendingUp, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  CreditCard
} from 'lucide-react';
import styles from './BaroubaMockup.module.css';

interface BaroubaMockupProps {
  type: 'dashboard' | 'ai' | 'commerce' | 'portal' | 'social' | 'academy';
  compact?: boolean;
}

export default function BaroubaMockup({ type, compact = false }: BaroubaMockupProps) {
  return (
    <div className={`${styles.mockupContainer} ${compact ? styles.compact : ''}`}>
      {/* Browser / Device Chrome Header */}
      <div className={styles.chromeBar}>
        <div className={styles.windowDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.addressBar}>
          <Lock size={10} className={styles.lockIcon} />
          <span>https://app.baroubagroup.com/{type}</span>
        </div>
        <div className={styles.sslBadge}>Sécurisé SSL</div>
      </div>

      {/* Internal Content by Type */}
      {type === 'dashboard' && (
        <div className={styles.innerContent}>
          {/* Header with Barouba Logo */}
          <div className={styles.appHeader}>
            <div className={styles.brandBox}>
              <Image 
                src="/logo-or.svg" 
                alt="Barouba Group" 
                width={22} 
                height={22} 
                style={{ width: 'auto', height: '22px' }}
              />
              <span className={styles.appName}>BAROUBA OS 2026</span>
            </div>
            <div className={styles.perfPill}>
              <Zap size={11} className={styles.zapIcon} />
              <span>Vitesse : 0.65s (Score 99/100)</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Chiffre d’Affaires Hebdo</div>
              <div className={styles.metricValue}>+34%</div>
              <div className={styles.metricSub}>Acquisition rentabilisée</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Temps Réponse Serveur</div>
              <div className={styles.metricValue}>12ms</div>
              <div className={styles.metricSub}>Next.js 16 Edge CDN</div>
            </div>
          </div>

          {/* Golden SVG Chart */}
          <div className={styles.chartBox}>
            <div className={styles.chartHeader}>
              <span>Volume des Transactions & Trafic</span>
              <span className={styles.liveTag}>● En Direct</span>
            </div>
            <svg viewBox="0 0 400 110" className={styles.chartSvg} preserveAspectRatio="none">
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F5A623" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,80 Q40,65 80,75 T160,50 T240,40 T320,25 T400,10 L400,110 L0,110 Z"
                fill="url(#goldGrad)"
              />
              <path
                d="M0,80 Q40,65 80,75 T160,50 T240,40 T320,25 T400,10"
                fill="none"
                stroke="#F5A623"
                strokeWidth="2.5"
              />
              <circle cx="400" cy="10" r="4" fill="#F5A623" />
            </svg>
          </div>
        </div>
      )}

      {type === 'ai' && (
        <div className={styles.innerContent}>
          {/* Header */}
          <div className={styles.appHeader}>
            <div className={styles.brandBox}>
              <div className={styles.aiAvatar}>
                <Bot size={15} />
              </div>
              <div>
                <div className={styles.appName}>ASSISTANT IA • BAROUBA</div>
                <div className={styles.onlineStatus}>En ligne • Réponse en 2s</div>
              </div>
            </div>
            <span className={styles.whatsappCloudBadge}>API WhatsApp Cloud</span>
          </div>

          {/* Conversation Thread */}
          <div className={styles.chatThread}>
            <div className={styles.chatBubbleUser}>
              <span>« Bonjour, nous cherchons une plateforme web avec automatisation WhatsApp pour nos clients. »</span>
            </div>
            <div className={styles.chatBubbleBot}>
              <div className={styles.botBadgeSmall}>Barouba AI</div>
              <span>« Bonjour ! Nous pouvons déployer cette architecture sous 3 semaines avec synchronisation CRM directe et paiement unifié. Souhaitez-vous un audit technique préalable ? »</span>
            </div>
          </div>

          {/* Pipeline badges */}
          <div className={styles.workflowRow}>
            <span className={styles.wfStep}>1. Message Reçu ✓</span>
            <span className={styles.wfArrow}>→</span>
            <span className={styles.wfStep}>2. Qualification IA ✓</span>
            <span className={styles.wfArrow}>→</span>
            <span className={styles.wfStep}>3. CRM Mis à jour ✓</span>
          </div>
        </div>
      )}

      {type === 'commerce' && (
        <div className={styles.innerContent}>
          {/* Header */}
          <div className={styles.appHeader}>
            <div className={styles.brandBox}>
              <CreditCard size={18} className={styles.goldIcon} />
              <span className={styles.appName}>BAROUBA COMMERCE 1-CLIC</span>
            </div>
            <div className={styles.perfPill}>
              <span>ROAS x4.5 Vérifié</span>
            </div>
          </div>

          {/* Order Summary Simulator */}
          <div className={styles.checkoutBox}>
            <div className={styles.checkoutItemRow}>
              <div>
                <div className={styles.checkoutItemTitle}>Commande Confirmée #B782</div>
                <div className={styles.checkoutSub}>Paiement sécurisé via Mobile Money & Carte</div>
              </div>
              <div className={styles.checkoutAmount}>+145 000 FCFA</div>
            </div>
            <div className={styles.checkoutSuccessBar}>
              <CheckCircle2 size={13} className={styles.checkGreen} />
              <span>Panier transformé en 0.4s • Zéro abandon</span>
            </div>
          </div>

          {/* Multi Currency Pills */}
          <div className={styles.currenciesRow}>
            <span className={styles.curPill}>FCFA (XOF/XAF)</span>
            <span className={styles.curPill}>EUR (€)</span>
            <span className={styles.curPill}>USD ($)</span>
            <span className={styles.curPill}>DZD (DA)</span>
          </div>
        </div>
      )}

      {type === 'portal' && (
        <div className={styles.innerContent}>
          {/* Header */}
          <div className={styles.appHeader}>
            <div className={styles.brandBox}>
              <ShieldCheck size={18} className={styles.goldIcon} />
              <span className={styles.appName}>PORTAIL INSTITUTIONNEL D'ÉLITE</span>
            </div>
            <div className={styles.perfPill}>
              <span>99.98% Haute Disponibilité</span>
            </div>
          </div>

          {/* Metric Columns */}
          <div className={styles.portalStats}>
            <div className={styles.portalStatCard}>
              <div className={styles.portalNum}>12 000+</div>
              <div className={styles.portalLabel}>Dossiers Traités Sans Panne</div>
            </div>
            <div className={styles.portalStatCard}>
              <div className={styles.portalNum}>0.55s</div>
              <div className={styles.portalLabel}>Temps de Traitement Moyen</div>
            </div>
          </div>

          <div className={styles.securitySealRow}>
            <ShieldCheck size={14} className={styles.checkGreen} />
            <span>Architecture chiffrée de bout en bout • RGPD & Conformité bancaire</span>
          </div>
        </div>
      )}

      {type === 'social' && (
        <div className={styles.innerContent}>
          {/* Header */}
          <div className={styles.appHeader}>
            <div className={styles.brandBox}>
              <Sparkles size={18} className={styles.goldIcon} />
              <div>
                <div className={styles.appName}>SOCIAL SUITE • GESTION DE PAGES</div>
                <div className={styles.onlineStatus}>Facebook • Instagram • TikTok • LinkedIn</div>
              </div>
            </div>
            <div className={styles.perfPill}>
              <span>Animation 7j/7 Active</span>
            </div>
          </div>

          {/* Social KPIs */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Croissance Communauté</div>
              <div className={styles.metricValue}>+185%</div>
              <div className={styles.metricSub}>Portée organique mensuelle</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>DMs & Commentaires</div>
              <div className={styles.metricValue}>100%</div>
              <div className={styles.metricSub}>Modérés en &lt; 15 minutes</div>
            </div>
          </div>

          {/* Social Channels Pills */}
          <div className={styles.currenciesRow}>
            <span className={styles.curPill}>✓ Planning Éditorial Calibré</span>
            <span className={styles.curPill}>✓ Reels &amp; TikToks Tournés</span>
            <span className={styles.curPill}>✓ E-Réputation Protégée</span>
          </div>
        </div>
      )}

      {type === 'academy' && (
        <div className={styles.innerContent}>
          {/* Header */}
          <div className={styles.appHeader}>
            <div className={styles.brandBox}>
              <Image 
                src="/logo-or.svg" 
                alt="Barouba Group" 
                width={20} 
                height={20} 
                style={{ width: 'auto', height: '20px' }}
              />
              <div>
                <div className={styles.appName}>BAROUBA ACADEMY • MENTORAT</div>
                <div className={styles.onlineStatus}>Nous Formons &amp; Nous Accompagnons</div>
              </div>
            </div>
            <span className={styles.whatsappCloudBadge}>Certification Reconnue</span>
          </div>

          {/* Academy Metrics */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Métiers du Numérique</div>
              <div className={styles.metricValue}>6 Cursus</div>
              <div className={styles.metricSub}>Marketing, CM, E-com, IA &amp; Web</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Taux de Réussite Pratique</div>
              <div className={styles.metricValue}>96.4%</div>
              <div className={styles.metricSub}>Livrables réels validés</div>
            </div>
          </div>

          {/* Academy Workflow */}
          <div className={styles.workflowRow}>
            <span className={styles.wfStep}>1. Diagnostic initial ✓</span>
            <span className={styles.wfArrow}>→</span>
            <span className={styles.wfStep}>2. Immersion pratique ✓</span>
            <span className={styles.wfArrow}>→</span>
            <span className={styles.wfStep}>3. Autonomie &amp; ROI ✓</span>
          </div>
        </div>
      )}
    </div>
  );
}
