import type { Metadata } from 'next';
import { ArrowRight, Sparkles } from 'lucide-react';
import BaroubaMockup from '@/components/v2/BaroubaMockup';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import styles from './solutions.module.css';

export const metadata: Metadata = {
  title: 'Solutions Métiers & Systèmes Critiques | BAROUBA GROUP',
  description: 'Architectures logicielles pour banques, institutions, distributeurs et e-commerces à fort volume en Afrique de l\'Ouest.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/solutions',
  },
};

const SOLUTIONS_DATA = [
  {
    id: 'barouba-os',
    tag: 'ARCHITECTURE WEB & ANALYTICS',
    title: 'BAROUBA OS — Plateforme Web Next.js 16 Découplée',
    desc: 'Un socle technique de dernière génération spécialement conçu pour les entreprises qui refusent les lenteurs des CMS classiques. Temps de chargement instantané (< 0.8s), sécurité native et gestion fluide de catalogues volumineux.',
    benefits: [
      'Score Google Core Web Vitals supérieur à 95/100',
      'Tableau de bord d’administration fluide et épuré',
      'Compatibilité avec tous les terminaux mobiles et réseaux faibles débits',
      'Déploiement sur Edge CDN mondial haute disponibilité'
    ],
    mockupType: 'dashboard' as const,
    ctaText: 'Déployer BAROUBA OS pour mon entreprise'
  },
  {
    id: 'barouba-ai',
    tag: 'INTELLIGENCE ARTIFICIELLE & AUTOMATISATION',
    title: 'BAROUBA AI CLOUD — L’Agent WhatsApp Intelligent',
    desc: 'Transformez WhatsApp en votre meilleur commercial 24h/24. Notre assistant conversationnel IA est formé sur vos fiches produits, vos tarifs et vos conditions de vente pour répondre et qualifier vos clients sans délai.',
    benefits: [
      'Intégration certifiée sur l’API officielle Meta WhatsApp Cloud',
      'Prise en charge autonome de 80% des sollicitations clients',
      'Enregistrement automatique des leads dans votre CRM ou Google Sheets',
      'Transfert fluide vers un conseiller humain dès que nécessaire'
    ],
    mockupType: 'ai' as const,
    ctaText: 'Tester l’Agent WhatsApp sur mesure'
  },
  {
    id: 'barouba-commerce',
    tag: 'VENTE EN LIGNE & PAIEMENT MULTI-DEVISES',
    title: 'BAROUBA COMMERCE — Tunnel de Vente 1-Clic',
    desc: 'Un moteur de conversion e-commerce pensé pour le marché africain et international. Il intègre tous les modes de paiement populaires pour éliminer les abandons de panier et accélérer votre cashflow.',
    benefits: [
      'Paiements unifiés : Cartes Bancaires, Orange Money, Wave, MTN Money',
      'Support natif multi-devises (FCFA / XOF, EUR, USD, GHS)',
      'Tunnel d’achat ultra-simplifié sans redirection lente',
      'Synchronisation immédiate avec l’API de conversion Meta (CAPI)'
    ],
    mockupType: 'commerce' as const,
    ctaText: 'Optimiser mes ventes e-commerce'
  },
  {
    id: 'barouba-portal',
    tag: 'SÉCURITÉ & HAUTE DISPONIBILITÉ',
    title: 'BAROUBA ENTERPRISE — Portails & Démarches Numériques',
    desc: 'La solution robuste pour les institutions, franchises et réseaux d’entreprises traitant des volumes massifs de dossiers sensibles. Chiffrement de bout en bout, archivage certifié et disponibilité garantie à 99.98%.',
    benefits: [
      'Traitement fluide de plus de 10 000 dossiers mensuels sans latence',
      'Gestion stricte des droits d’accès et conformité RGPD',
      'Téléversement et vérification automatisée de documents officiels',
      'Sauvegardes quotidiennes redondées sur serveurs souverains'
    ],
    mockupType: 'portal' as const,
    ctaText: 'Demander une étude pour un portail d’entreprise'
  }
];

export default async function SolutionsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>TECHNOLOGIES & ÉCOSYSTÈMES PROPRIÉTAIRES</span>
          </div>
          <h1 className={styles.pageTitle}>
            Des solutions logicielles d'élite conçues pour <span className="text-gold-gradient">performer</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Découvrez nos socles d’ingénierie prêts à l’emploi. Chaque écosystème est personnalisé sur mesure pour votre entreprise afin de diviser vos délais de mise sur le marché par trois.
          </p>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="ÉCOSYSTÈMES LOGICIELS BAROUBA GROUP" />

      {/* Solutions Showcase */}
      <section className={styles.solutionsSection}>
        <div className="container">
          <div className={styles.solutionsList}>
            {SOLUTIONS_DATA.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={item.id} 
                  className={`${styles.solutionItem} ${isEven ? styles.solutionItemReverse : ''}`}
                >
                  {/* Left: Text Description & Value */}
                  <div className={styles.solutionTextCol}>
                    <span className={styles.solutionTag}>{item.tag}</span>
                    <h2 className={styles.solutionTitle}>{item.title}</h2>
                    <p className={styles.solutionDesc}>{item.desc}</p>

                    <div className={styles.benefitsList}>
                      {item.benefits.map((b, i) => (
                        <div key={i} className={styles.benefitRow}>
                          <span className={styles.benefitDiamond}>◆</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <a href="/contact" className={styles.solutionCta}>
                      <span>{item.ctaText}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Right: 100% Proprietary Barouba Mockup */}
                  <div className={styles.solutionMockupCol}>
                    <BaroubaMockup type={item.mockupType} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
