'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Code2, 
  TrendingUp, 
  Filter, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
  Zap,
  Globe
} from 'lucide-react';
import styles from './CapabilitiesV2.module.css';

const PILLARS_DATA = [
  {
    id: 'engineering',
    index: '01',
    category: 'Ingénierie & Architecture',
    title: 'Applications Web & Plateformes SaaS Sur Mesure',
    tagline: 'Construit pour la vitesse, la conversion et le zéro downtime.',
    description: 'Nous concevons des plateformes complètes sur Next.js 16, TypeScript et Supabase. Fini les thèmes WordPress lourds et vulnérables : nous codons des interfaces ultra-rapides, adaptées à votre modèle économique.',
    deliverables: [
      'Temps de chargement &lt; 0.8s garanti (Lighthouse 95+)',
      'Tunnel de paiement multi-devises (Stripe, PayPal, Crypto)',
      'Espaces membres & tableaux de bord haute sécurité',
      'Architecture cloud évolutive prête pour des millions d’utilisateurs'
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind', 'Supabase', 'Node.js', 'PostgreSQL'],
    stat: '99.9%',
    statLabel: 'Disponibilité & Uptime certifié',
    accentColor: '#FFD700',
    icon: Code2
  },
  {
    id: 'ai-agents',
    index: '02',
    category: 'Intelligence Artificielle',
    title: 'Agents IA Autonomes & Automatisation Métier',
    tagline: 'Votre entreprise tourne en pilote automatique 24h/24.',
    description: 'Nous déployons des agents intelligents qui répondent à vos prospects, qualifient les leads, rédigent vos devis et exécutent les processus internes sans intervention humaine.',
    deliverables: [
      'Assistants conversationnels formés sur vos données propriétaires',
      'Agents de vente autonomes connectés à WhatsApp & CRM',
      'Workflows Make & n8n pour supprimer les tâches répétitives',
      'Traitement de documents et facturation automatique par LLM'
    ],
    techStack: ['OpenAI GPT-4o', 'LangChain', 'Vector DB', 'Make.com', 'Python', 'FastAPI'],
    stat: '85%',
    statLabel: 'Tâches répétitives automatisées',
    accentColor: '#F5A623',
    icon: Bot
  },
  {
    id: 'acquisition',
    index: '03',
    category: 'Acquisition & Scaling',
    title: 'Tunnels de Vente & Publicité Digitale 360°',
    tagline: 'Transformer chaque euro investi en profit net.',
    description: 'Avoir le meilleur produit ne sert à rien si personne ne l’achète. Nous orchestrons vos campagnes Meta, TikTok et Google Ads avec des créatifs publicitaires de niveau studio et des funnels psychologiquement optimisés.',
    deliverables: [
      'Conception de tunnels de vente haute conversion (A/B testing continu)',
      'Création des scripts, montages vidéo publicitaires et visuels',
      'Tracking server-side (CAPI Facebook & TikTok) sans perte de données',
      'Stratégie de rétention, relance e-mail et upsells automatisés'
    ],
    techStack: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Klaviyo', 'Server-Side CAPI'],
    stat: 'x4.2',
    statLabel: 'ROAS moyen constaté',
    accentColor: '#E67814',
    icon: TrendingUp
  },
  {
    id: 'ecommerce',
    index: '04',
    category: 'E-Commerce & Scale',
    title: 'Écosystème E-Commerce International',
    tagline: 'Vendez vos produits à l’international sans friction.',
    description: 'De la boutique sur mesure à l’approvisionnement et au scale publicitaire, nous concevons des marques e-commerce capables de générer des flux réguliers et prédictibles.',
    deliverables: [
      'Expérience d’achat mobile-first optimisée pour le taux de passage en caisse',
      'Gestion des passerelles bancaires internationales et logistique',
      'Tunnels de vente pour produits mono-produit ou catalogues complexes',
      'Accompagnement stratégique sur l’expansion multi-pays'
    ],
    techStack: ['Shopify Headless', 'Next.js Commerce', 'Stripe Global', 'Meta Pixel'],
    stat: '+310%',
    statLabel: 'Augmentation du panier moyen',
    accentColor: '#FFB834',
    icon: Globe
  }
];

export default function CapabilitiesV2() {
  const [selectedPillar, setSelectedPillar] = useState(PILLARS_DATA[0]);

  return (
    <section className={styles.section} id="capabilities">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>02 //</span>
            <span className={styles.eyebrowText}>NOS DOMAINES D'INTERVENTION</span>
          </div>

          <h2 className={styles.heading}>
            Une maîtrise technique absolue. <br />
            <span className={styles.goldText}>Sans jargon creux, orientée pur résultat.</span>
          </h2>
          <p className={styles.subheading}>
            Sélectionnez une discipline pour explorer notre méthodologie, notre pile technologique et l'impact opérationnel délivré.
          </p>
        </div>

        {/* Master Pillar Navigation Grid */}
        <div className={styles.pillarNav}>
          {PILLARS_DATA.map((p) => {
            const isSelected = selectedPillar.id === p.id;
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p)}
                className={`${styles.navCard} ${isSelected ? styles.navCardActive : ''}`}
              >
                <div className={styles.navTop}>
                  <span className={styles.navIndex}>{p.index}</span>
                  <div className={styles.navIcon} style={{ color: p.accentColor }}>
                    <Icon size={20} />
                  </div>
                </div>
                <div className={styles.navCategory}>{p.category}</div>
                <div className={styles.navTitle}>{p.title}</div>
                {isSelected && <div className={styles.activeBar} style={{ background: p.accentColor }} />}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className={styles.deepDiveContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar.id}
              className={styles.deepDiveCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left Column: Mission Description & Deliverables */}
              <div className={styles.diveDetails}>
                <div className={styles.diveBadge} style={{ borderColor: `${selectedPillar.accentColor}40`, color: selectedPillar.accentColor }}>
                  {selectedPillar.category}
                </div>

                <h3 className={styles.diveTitle}>{selectedPillar.title}</h3>
                <div className={styles.diveTagline}>{selectedPillar.tagline}</div>
                <p className={styles.diveDesc}>{selectedPillar.description}</p>

                <div className={styles.deliverablesTitle}>LIVRABLES STRATÉGIQUES & EXÉCUTION :</div>
                <div className={styles.deliverablesList}>
                  {selectedPillar.deliverables.map((d, i) => (
                    <div key={i} className={styles.deliverableItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} style={{ color: selectedPillar.accentColor }} />
                      <span dangerouslySetInnerHTML={{ __html: d }} />
                    </div>
                  ))}
                </div>

                <div className={styles.diveActionRow}>
                  <a href="#contact-hub" className={styles.diveCtaBtn} style={{ background: `linear-gradient(135deg, ${selectedPillar.accentColor}, #E67814)` }}>
                    <span>Activer ce levier pour mon entreprise</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column: Key Metric & Live Tech Stack */}
              <div className={styles.diveSidebar}>
                <div className={styles.metricCard}>
                  <div className={styles.metricBig} style={{ color: selectedPillar.accentColor }}>
                    {selectedPillar.stat}
                  </div>
                  <div className={styles.metricDesc}>{selectedPillar.statLabel}</div>
                </div>

                <div className={styles.techStackCard}>
                  <div className={styles.techCardHeader}>
                    <Terminal size={14} className={styles.termIcon} />
                    <span>ENVIRONNEMENT TECHNIQUE</span>
                  </div>
                  <div className={styles.techPills}>
                    {selectedPillar.techStack.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.guaranteeBox}>
                  <div className={styles.guarTitle}>Garantie Studio BAROUBA</div>
                  <div className={styles.guarText}>Code propriétaire sans abonnement captif. Documentation complète et passation d'équipe assurée.</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
