import type { Metadata } from 'next';
import { ArrowRight, Sparkles, Globe2 } from 'lucide-react';
import BaroubaMockup from '@/components/v2/BaroubaMockup';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
  title: 'Portfolio & Études de Cas Vérifiées | BAROUBA GROUP',
  description: 'Découvrez les projets concrets conçus et déployés par BAROUBA GROUP : plateformes e-commerce à haut ROAS, assistants IA et portails institutionnels.',
};

const PROJECTS = [
  {
    id: 'comm-social-ouaga',
    category: 'COMMUNICATION DIGITALE & GESTION DE PAGES',
    location: 'Ouagadougou, Burkina Faso',
    title: 'Stratégie de Marque & Animation 7j/7 d’un Réseau Commercial',
    desc: 'Prise en charge intégrale des pages Facebook, Instagram et TikTok : création d’une charte visuelle d’impact, calendrier éditorial hebdomadaire, tournage de Reels et modération active des messages 7j/7.',
    metrics: [
      { val: '+450%', label: 'Portée Organique & Engagement' },
      { val: '< 10 min', label: 'Délai Moyen de Réponse aux DMs' },
      { val: '22 000+', label: 'Abonnés Engagés Gagnés' }
    ],
    techs: ['Meta Business Suite', 'TikTok Creator Hub', 'Canva & CapCut', 'WhatsApp CRM'],
    mockupType: 'social' as const
  },
  {
    id: 'ecommerce-luxe',
    category: 'E-COMMERCE & SCALING',
    location: 'Abidjan & Ouagadougou',
    title: 'Plateforme E-Commerce Haute Vitesse & Multi-Devises',
    desc: 'Refonte intégrale d’une marque de cosmétiques et mode. Remplacement d’un CMS lent par une architecture Next.js 16 découplée avec paiement 1-clic Mobile Money et synchronisation CAPI Meta.',
    metrics: [
      { val: '+310%', label: 'Croissance du Chiffre d’Affaires' },
      { val: '0.65s', label: 'Vitesse de Chargement Mobile' },
      { val: 'x4.5', label: 'ROAS Publicitaire Moyen' }
    ],
    techs: ['Next.js 16', 'TypeScript', 'Orange Money', 'Moov Money', 'Meta CAPI'],
    mockupType: 'commerce' as const
  },
  {
    id: 'ai-logistique',
    category: 'INTELLIGENCE ARTIFICIELLE & AUTOMATISATION',
    location: 'Ouagadougou & Abidjan',
    title: 'Assistant Conversationnel WhatsApp pour la Distribution',
    desc: 'Déploiement d’un agent IA entraîné sur 1 500 références de catalogue, capable de vérifier les stocks en direct, de qualifier les prospects et de générer automatiquement les bons de commande.',
    metrics: [
      { val: '80%', label: 'Demandes Résolues Sans Humain' },
      { val: '2 min', label: 'Délai Moyen de Réponse Client' },
      { val: '0 erreur', label: 'Sur les Devis Automatisés' }
    ],
    techs: ['OpenAI GPT-4o', 'API WhatsApp Cloud', 'n8n Webhooks', 'Supabase'],
    mockupType: 'ai' as const
  },
  {
    id: 'academy-mentoring',
    category: 'FORMATIONS & ACCOMPAGNEMENT AUX MÉTIERS DU NUMÉRIQUE',
    location: 'Ouagadougou & Bobo-Dioulasso',
    title: 'Montée en Compétences de 45 Cadres & Entrepreneurs Locaux',
    desc: 'Programme certifiant intensif en Community Management, Vente en Ligne et Automatisation IA avec accompagnement sur cas réels et coaching 1-on-1 jusqu’à l’autonomie opérationnelle complète.',
    metrics: [
      { val: '98.2%', label: 'Taux de Réussite & Certification' },
      { val: 'x2.8', label: 'Accélération des Ventes Post-Formation' },
      { val: '100%', label: 'Mise en Pratique sur Projets Réels' }
    ],
    techs: ['BAROUBA ACADEMY', 'Mentorat 1-on-1', 'Cas Réels', 'Certification Pro'],
    mockupType: 'academy' as const
  },
  {
    id: 'portail-formalisation',
    category: 'PORTAILS INSTITUTIONNELS & SAAS',
    location: 'Burkina Faso & UEMOA',
    title: 'Système Sécurisé de Démarches & Formalisation Numérique',
    desc: 'Architecture logicielle d’élite pour le traitement dématérialisé de milliers de dossiers d’entreprises avec validation des pièces jointes, signature électronique et archivage sécurisé.',
    metrics: [
      { val: '12 000+', label: 'Dossiers Traités en Ligne' },
      { val: '99.98%', label: 'Disponibilité Serveur Constatée' },
      { val: '100%', label: 'Conformité & Sécurité Données' }
    ],
    techs: ['Next.js App Router', 'PostgreSQL', 'Edge Functions', 'Chiffrement AES'],
    mockupType: 'portal' as const
  }
];

export default async function PortfolioPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>RÉALISATIONS CONCRÈTES & IMPACT MESURABLE</span>
          </div>
          <h1 className={styles.pageTitle}>
            Un portfolio qui prouve notre <span className="text-gold-gradient">exigence d'ingénierie</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Chaque projet est conçu comme un actif durable pour nos clients. Explorez nos études de cas et les chiffres réels obtenus sur le terrain.
          </p>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="ÉTUDES DE CAS & PREUVES DE TRAVAIL" />

      {/* Projects List */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className={styles.projectCard}>
                {/* Left: Info */}
                <div className={styles.projectInfoCol}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryTag}>{proj.category}</span>
                    <span className={styles.locationText}>{proj.location}</span>
                  </div>

                  <h2 className={styles.pTitle}>{proj.title}</h2>
                  <p className={styles.pDesc}>{proj.desc}</p>

                  <div className={styles.metricsRow}>
                    {proj.metrics.map((m, i) => (
                      <div key={i} className={styles.metricItem}>
                        <div className={styles.metricVal}>{m.val}</div>
                        <div className={styles.metricLabel}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.techsRow}>
                    {proj.techs.map((t) => (
                      <span key={t} className={styles.techPill}>{t}</span>
                    ))}
                  </div>

                  <a href="/contact" className={styles.cardCta}>
                    <span>Viser des résultats similaires</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Right: Proprietary Barouba Mockup */}
                <div className={styles.projectMockupCol}>
                  <BaroubaMockup type={proj.mockupType} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
