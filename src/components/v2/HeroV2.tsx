'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Activity,
  Code2,
  TrendingUp,
  ChevronRight,
  Play,
  CheckCircle2
} from 'lucide-react';
import styles from './HeroV2.module.css';

const RADAR_ITEMS = [
  { label: 'Next.js 16 App Router', status: 'Optimal', ping: '18ms' },
  { label: 'Multi-Agent LLM Orchestrator', status: 'Actif 24/7', ping: '32ms' },
  { label: 'Algorithme Acquisition Meta/TikTok', status: 'Scalable', ping: '24ms' },
  { label: 'Infrastructure Cloud Supabase', status: 'Sécurisé 99.9%', ping: '12ms' },
];

const CODE_PREVIEW = `// Architecture d'Acquisition & IA déployée par BAROUBA GROUP
import { deployAutonomousAgent, scaleFunnel } from '@barouba/core';

export async function igniteGrowthEngine(enterprise: Enterprise) {
  const agent = await deployAutonomousAgent({
    model: 'gpt-4o-custom',
    knowledgeBase: enterprise.catalog,
    realTimeConversion: true
  });

  const funnel = await scaleFunnel({
    performanceTier: 'ultra-speed',
    trafficSources: ['Meta', 'TikTok', 'Google'],
    targetROAS: 4.5
  });

  return { status: 'DOMINATING_MARKET', growth: '+240%' };
}`;

export default function HeroV2() {
  const [activeTab, setActiveTab] = useState<'console' | 'radar'>('console');
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Background Architectural Grid Lines */}
      <div className={styles.gridCanvas} aria-hidden="true">
        <div className={styles.verticalLine1} />
        <div className={styles.verticalLine2} />
        <div className={styles.verticalLine3} />
        <div className={styles.radialGlow} />
      </div>

      <div className={styles.container}>
        {/* Top Ticker Status Bar */}
        <div className={styles.statusTicker}>
          <div className={styles.statusPill}>
            <span className={styles.livePulse} />
            <span className={styles.statusText}>STUDIO DIGITALE HAUTE INGÉNIERIE</span>
          </div>
          <div className={styles.tickerDivider} />
          <div className={styles.timeDisplay}>
            <span className={styles.timeLabel}>SYS_TIME:</span>
            <span className={styles.timeValue}>{time || '10:00:00'} UTC+1</span>
          </div>
          <div className={styles.tickerDivider} />
          <div className={styles.capacityBadge}>
            <Activity size={12} className={styles.activityIcon} />
            <span>DISPONIBILITÉ PROJETS: OUVERTE</span>
          </div>
        </div>

        {/* Hero Asymmetrical Layout (Headline Left + Interactive Terminal Right) */}
        <div className={styles.mainGrid}>
          {/* Left Column: Manifesto & Value Proposition */}
          <div className={styles.manifestoCol}>
            <div className={styles.kicker}>
              <span className={styles.kickerIndex}>01 //</span>
              <span className={styles.kickerLabel}>L'AGENCE DIGITALE NOUVELLE GÉNÉRATION</span>
            </div>

            <h1 className={styles.title}>
              Nous construisons les <span className={styles.goldGradient}>systèmes numériques</span> qui font la loi sur votre marché.
            </h1>

            <p className={styles.leadText}>
              Ni agence marketing classique, ni simple boîte d'informatique : nous sommes le <strong>commando technologique</strong> des marques qui veulent dominer. Nous concevons vos plateformes web, vos agents IA sur mesure et vos funnels d’acquisition à très haute rentabilité.
            </p>

            {/* Micro Pillars */}
            <div className={styles.pillarChips}>
              <div className={styles.pillarChip}>
                <Code2 size={15} className={styles.chipIcon} />
                <span>Web & Apps Next.js 16</span>
              </div>
              <div className={styles.pillarChip}>
                <Cpu size={15} className={styles.chipIcon} />
                <span>Agents IA & Workflows LLM</span>
              </div>
              <div className={styles.pillarChip}>
                <TrendingUp size={15} className={styles.chipIcon} />
                <span>Acquisition & Scaling ROAS</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a href="#showroom" className={styles.primaryCta}>
                <span className={styles.btnText}>Lancer un Projet</span>
                <div className={styles.btnArrow}>
                  <ArrowUpRight size={18} />
                </div>
              </a>

              <a href="#interactive-lab" className={styles.secondaryCta}>
                <Play size={14} className={styles.playIcon} />
                <span>Tester le Simulateur de ROI</span>
              </a>
            </div>

            {/* Verified Numbers */}
            <div className={styles.metricsRow}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>+240%</div>
                <div className={styles.metricLabel}>Croissance moyenne observée</div>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>&lt; 0.8s</div>
                <div className={styles.metricLabel}>Temps de réponse optimal</div>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>100%</div>
                <div className={styles.metricLabel}>Propriété intellectuelle client</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Command Center & Live Engine */}
          <div className={styles.interactiveCol}>
            <div className={styles.terminalCard}>
              {/* Terminal Window Header */}
              <div className={styles.terminalHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.controlRed} />
                  <span className={styles.controlYellow} />
                  <span className={styles.controlGreen} />
                </div>
                <div className={styles.terminalTabs}>
                  <button 
                    onClick={() => setActiveTab('console')} 
                    className={`${styles.tabBtn} ${activeTab === 'console' ? styles.tabActive : ''}`}
                  >
                    <Terminal size={13} />
                    <span>SYSTEM_CORE.ts</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('radar')} 
                    className={`${styles.tabBtn} ${activeTab === 'radar' ? styles.tabActive : ''}`}
                  >
                    <Activity size={13} />
                    <span>LIVE_RADAR</span>
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className={styles.terminalBody}>
                {activeTab === 'console' ? (
                  <div className={styles.codeView}>
                    <pre className={styles.codeBlock}>
                      <code>{CODE_PREVIEW}</code>
                    </pre>
                    <div className={styles.executionStatus}>
                      <span className={styles.execDot} />
                      <span className={styles.execText}>Engine status: COMPILED & RUNNING (Production ready)</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.radarView}>
                    <div className={styles.radarHeader}>
                      <span className={styles.radarTitle}>MONITORING DE CROISSANCE & PERFORMANCES</span>
                      <span className={styles.radarPing}>99.9% UPTIME</span>
                    </div>

                    <div className={styles.radarList}>
                      {RADAR_ITEMS.map((item, i) => (
                        <div key={item.label} className={styles.radarRow}>
                          <div className={styles.radarIndex}>0{i+1}</div>
                          <div className={styles.radarInfo}>
                            <div className={styles.radarLabel}>{item.label}</div>
                            <div className={styles.radarSub}>{item.status}</div>
                          </div>
                          <div className={styles.radarLatency}>{item.ping}</div>
                          <CheckCircle2 size={16} className={styles.radarCheck} />
                        </div>
                      ))}
                    </div>

                    <div className={styles.radarFooter}>
                      <span className={styles.radarFootNote}>Toutes les architectures sont auditées sous protocole strict.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Glass Pill */}
            <div className={styles.floatingCredibilityPill}>
              <div className={styles.credIconWrap}>
                <Sparkles size={16} className={styles.sparkle} />
              </div>
              <div className={styles.credMeta}>
                <div className={styles.credTitle}>Zéro template préfabriqué</div>
                <div className={styles.credSub}>100% code taillé pour votre chiffre d'affaires</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
