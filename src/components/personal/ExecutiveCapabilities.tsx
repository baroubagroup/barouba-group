'use client';

import React from 'react';
import { 
  Code2, 
  Search, 
  TrendingUp, 
  Cpu, 
  Smartphone, 
  Globe2, 
  Zap, 
  Workflow
} from 'lucide-react';
import styles from './ExecutiveCapabilities.module.css';

const CAPABILITIES = [
  {
    num: '01',
    icon: Code2,
    title: 'Développement Web & Applications Mobiles',
    tagline: 'Architectures Next.js 16 de pointe & Applications iOS / Android natives',
    desc: 'Nous concevons des plateformes web sur mesure ultra-rapides (< 0.8s), scalables et sécurisées, ainsi que des applications mobiles fluides pour entreprises exigeantes. Fini les templates lents et vulnérables.',
    features: [
      'Sites vitrines d’élite & portails SaaS sur Next.js 16 et TypeScript',
      'Applications mobiles iOS et Android (React Native & Flutter)',
      'Intégration paiements locaux et internationaux (Orange Money, Moov, LigdiCash, Cartes)',
      '100% Cession du code source sans dépendance ni abonnement captif'
    ],
    tech: ['Next.js 16', 'React Native', 'Flutter', 'TypeScript', 'Supabase', 'Tailwind']
  },
  {
    num: '02',
    icon: Search,
    title: 'SEO & Référencement Local d’Autorité',
    tagline: 'Domination Google Maps, Pack Local & Visibilité Géographique Ciblée',
    desc: 'Positionnement souverain de votre entreprise en première position sur Google pour capter les prospects au moment précis où ils recherchent vos services à Ouagadougou, Bobo-Dioulasso et dans la sous-région.',
    features: [
      'Optimisation et domination du Local Pack Google Maps pour commerces et entreprises',
      'SEO programmatique et couverture sémantique exhaustive sur vos requêtes métiers',
      'Fiches d’établissements certifiées, gestion des avis et autorité locale',
      'Suivi analytique transparent sans vanity metrics : mesure directe des appels et leads'
    ],
    tech: ['Google Local Pack', 'Google Maps API', 'Schema.org JSON-LD', 'Semantic SEO', 'GSC']
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Marketing Digital & Acquisition Haute Conversion',
    tagline: 'Media Buying Scientifique & Tunnels de Vente Hybrides Rentables',
    desc: 'Chaque franc investi doit rapporter. Nous orchestrons vos campagnes publicitaires payantes (Meta Ads, TikTok Ads, Google Ads) associées à des Landing Pages monoproduits ultra-rapides et des parcours WhatsApp fermés.',
    features: [
      'Création des visuels, scripts vidéos percutants et angles publicitaires éprouvés',
      'Tracking server-side (Facebook & TikTok CAPI) sans perte de données',
      'Tunnels de vente optimisés pour les habitudes d’achat en Afrique de l’Ouest',
      'Closing commercial structuré et protocoles logistiques anti-refus'
    ],
    tech: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Server CAPI', 'WhatsApp Closing Funnels']
  },
  {
    num: '04',
    icon: Cpu,
    title: 'Workflows End-to-End, Automatisation & Agents IA',
    tagline: 'Suppression des Tâches Répétitives & Assistants Conversationnels 24/7',
    desc: 'Nous modélisons et automatisons l’ensemble de vos flux opérationnels de bout en bout : qualification automatique des prospects, traitement des commandes, devis instantanés et synchronisation CRM sans intervention humaine.',
    features: [
      'Agents IA conversationnels connectés à l’API officielle de WhatsApp Cloud',
      'Workflows d’automatisation end-to-end (Make, n8n, Python, webhooks sécurisés)',
      'Qualification 24/7 des prospects et génération automatique de devis',
      'Synchronisation bidirectionnelle avec vos bases de données et ERPs'
    ],
    tech: ['WhatsApp Cloud API', 'OpenAI / Claude LLMs', 'Make.com', 'n8n', 'Python FastAPI']
  }
];

export default function ExecutiveCapabilities() {
  return (
    <section className={styles.section} id="expertises">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Workflow size={14} />
            <span>Capacités Opérationnelles & Ingénierie</span>
          </div>

          <h2 className={styles.heading}>
            Des prestations d’élite conçues pour <br />
            <span className={styles.goldText}>générer un impact business mesurable.</span>
          </h2>

          <p className={styles.subheading}>
            Nous couvrons l’intégralité de la chaîne de valeur numérique : du code logiciel au référencement local, de l'acquisition publicitaire à l'automatisation par intelligence artificielle.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.grid}>
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.num} className={styles.card}>
                <div>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndex}>PÔLE {cap.num}</span>
                    <div className={styles.cardIconBox}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{cap.title}</h3>
                  <div className={styles.cardTagline}>{cap.tagline}</div>
                  <p className={styles.cardDesc}>{cap.desc}</p>

                  <div className={styles.featuresList}>
                    {cap.features.map((feat, i) => (
                      <div key={i} className={styles.featureItem}>
                        <span className={styles.featureDiamond}>◆</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.techRow}>
                  {cap.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
