'use client';

import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Globe, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import styles from './ShowroomV2.module.css';

const SHOWCASE_STUDIES = [
  {
    id: 'case-1',
    title: 'Boutique D2C Luxe & Tunnels de Scaling Omnicanal',
    client: 'Marque E-Commerce Cosmétique',
    tagline: 'Refonte Next.js 16 + Infrastructure de conversion server-side',
    metrics: [
      { label: 'Croissance CA', value: '+320%' },
      { label: 'Panier Moyen', value: '118€ (+45%)' },
      { label: 'Vitesse Mobile', value: '0.62s' }
    ],
    overview: 'Une refonte totale passant d’un CMS lent et limité à une architecture découplée ultra-rapide avec tunnels d’upsell intelligents. Les campagnes Meta et TikTok ont été branchées directement à l’API de conversion CAPI.',
    techs: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Stripe Payments', 'Meta CAPI', 'Klaviyo'],
    accent: '#FFD700',
    type: 'E-Commerce & Scale'
  },
  {
    id: 'case-2',
    title: 'Plateforme B2B & Système Multi-Agents IA de Facturation',
    client: 'Groupe Logistique & Distribution',
    tagline: 'Automatisation intégrale de la prise de commande au dispatch',
    metrics: [
      { label: 'Gain Hebdomadaire', value: '38h / équipe' },
      { label: 'Erreurs de Saisie', value: '0.0%' },
      { label: 'Délai Traitement', value: '-85%' }
    ],
    overview: 'Mise en place d’un réseau de 3 agents d’intelligence artificielle analysant les bons de commande scannés ou reçus par WhatsApp, générant les factures et synchronisant le stock dans l’ERP en temps réel.',
    techs: ['Python', 'OpenAI GPT-4o', 'LangChain', 'FastAPI', 'PostgreSQL', 'Supabase Auth'],
    accent: '#F5A623',
    type: 'IA & Automatisation'
  },
  {
    id: 'case-3',
    title: 'Écosystème de Vente de Formations & Coaching Exécutif',
    client: 'Académie Digitale Internationale',
    tagline: 'Tunnel de vente multi-devises + Espace de formation type Udemy',
    metrics: [
      { label: 'CA Premier Trimestre', value: '280k€' },
      { label: 'Taux de Rétention', value: '94%' },
      { label: 'ROAS Global', value: 'x5.4' }
    ],
    overview: 'Déploiement d’un portail de formation complet avec lecture vidéo adaptative, délivrance automatique d’attestations et tunnel de conversion optimisé pour l’Afrique et l’Europe.',
    techs: ['React 19', 'Next.js', 'PostgreSQL', 'CDN Vidéo Cloudflare', 'TikTok Pixel', 'Webhooks'],
    accent: '#E67814',
    type: 'EdTech & Funnel'
  }
];

export default function ShowroomV2() {
  return (
    <section className={styles.section} id="showroom">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>03 //</span>
            <span className={styles.eyebrowText}>ÉTUDES DE CAS & PREUVES RÉELLES</span>
          </div>

          <h2 className={styles.heading}>
            Des résultats indiscutables. <br />
            <span className={styles.goldText}>Pas des maquettes fictives, des chiffres réels.</span>
          </h2>
          <p className={styles.subheading}>
            Chaque déploiement est conçu comme un investissement hautement rentable pour l’entreprise qui nous missionne.
          </p>
        </div>

        {/* Case Studies Cards Stack */}
        <div className={styles.caseStack}>
          {SHOWCASE_STUDIES.map((study, idx) => (
            <div key={study.id} className={styles.caseCard}>
              <div className={styles.cardHeader}>
                <div className={styles.metaLeft}>
                  <span className={styles.caseType} style={{ borderColor: `${study.accent}40`, color: study.accent }}>
                    {study.type}
                  </span>
                  <span className={styles.clientName}>{study.client}</span>
                </div>
                <div className={styles.indexTag}>0{idx + 1}</div>
              </div>

              <div className={styles.cardGrid}>
                {/* Left Description */}
                <div className={styles.descCol}>
                  <h3 className={styles.caseTitle}>{study.title}</h3>
                  <div className={styles.caseTagline} style={{ color: study.accent }}>
                    {study.tagline}
                  </div>
                  <p className={styles.caseOverview}>{study.overview}</p>

                  <div className={styles.techList}>
                    {study.techs.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics Board */}
                <div className={styles.metricsCol}>
                  <div className={styles.metricsBoard}>
                    <div className={styles.metricsHeader}>
                      <TrendingUp size={15} style={{ color: study.accent }} />
                      <span>RÉSULTATS CHIFFRÉS VÉRIFIÉS</span>
                    </div>

                    <div className={styles.metricsList}>
                      {study.metrics.map((m) => (
                        <div key={m.label} className={styles.metricRow}>
                          <span className={styles.metricLabel}>{m.label}</span>
                          <span className={styles.metricVal} style={{ color: study.accent }}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.metricsGuarantee}>
                      <CheckCircle2 size={14} className={styles.guarCheck} />
                      <span>Architecture livrée clés en main & documentée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
