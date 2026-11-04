'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Laptop
} from 'lucide-react';
import styles from './WorkflowProcess.module.css';

const STEPS = [
  {
    step: '01',
    phase: 'JOURS 1 À 3',
    title: 'Diagnostic Stratégique & Architecture',
    summary: 'Nous disséquons vos objectifs commerciaux et concevons la feuille de route technique.',
    icon: Search,
    color: '#F5A623',
    deliverables: [
      'Audit de vos goulots d’étranglement actuels',
      'Architecture technique sur mesure (Next.js, Supabase, IA)',
      'Cahier des charges contractuel sans frais cachés'
    ],
    clientAction: '1 atelier de cadrage de 45 minutes pour valider vos priorités.'
  },
  {
    step: '02',
    phase: 'SEMAINE 1',
    title: 'Design Haute Fidélité & Expérience Utilisateur',
    summary: 'Conception de l’interface pensée pour convertir chaque visiteur dès la première seconde.',
    icon: Palette,
    color: '#FFD700',
    deliverables: [
      'Maquettes interactives prêtes pour mobile et desktop',
      'Rédaction commerciale et hiérarchie visuelle percutante',
      'Validation de la charte de marque et de l’ergonomie'
    ],
    clientAction: 'Votre validation sur le prototype avant tout développement.'
  },
  {
    step: '03',
    phase: 'SEMAINES 2 À 3',
    title: 'Ingénierie de Pointe & Intégration IA',
    summary: 'Développement du code source propriétaire et connexion de vos automatisations métiers.',
    icon: Code2,
    color: '#F97316',
    deliverables: [
      'Code Next.js 16 & TypeScript ultra-rapide (< 0.8s)',
      'Assistants IA connectés à votre CRM & WhatsApp',
      'Lien de prévisualisation privé mis à jour en direct'
    ],
    clientAction: 'Suivi hebdomadaire de l’avancement sur environnement privé.'
  },
  {
    step: '04',
    phase: 'SEMAINE 4 & APRÈS',
    title: 'Lancement Officiel & Garantie Sérénité 90 Jours',
    summary: 'Mise en ligne, transfert total des clés et accompagnement post-lancement dédié.',
    icon: Rocket,
    color: '#10B981',
    deliverables: [
      'Déploiement haute disponibilité avec score PageSpeed 95+',
      'Cession totale de la propriété intellectuelle et des accès',
      '90 jours de garantie technique et support VIP WhatsApp'
    ],
    clientAction: 'Votre entreprise dispose d’un actif digital hautement rentable.'
  }
];

export default function WorkflowProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className={styles.section} id="methode">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>NOTRE MANIÈRE DE TRAVAILLER</span>
          </div>

          <h2 className={styles.title}>
            Une méthode rigoureuse en <span className="text-gold-gradient">4 étapes</span>. Zéro imprévu.
          </h2>
          <p className={styles.subtitle}>
            Fini les projets qui s’éternisent pendant 6 mois sans visibilité. Chez BAROUBA GROUP, chaque projet est découpé en sprints précis avec des livrables concrets à chaque étape.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className={styles.processGrid}>
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStepIndex === idx;

            return (
              <div 
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`${styles.stepCard} ${isSelected ? styles.stepCardActive : ''}`}
                style={{ '--accent-color': step.color } as React.CSSProperties}
              >
                {/* Top header row */}
                <div className={styles.stepTop}>
                  <div className={styles.stepNumberBadge}>{step.step}</div>
                  <span className={styles.phaseTag}>{step.phase}</span>
                </div>

                <div className={styles.iconCircle}>
                  <Icon size={24} />
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepSummary}>{step.summary}</p>

                {/* Deliverables */}
                <div className={styles.deliverablesList}>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className={styles.deliverableItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Client Role Footer */}
                <div className={styles.clientRoleBox}>
                  <div className={styles.clientRoleLabel}>Votre implication :</div>
                  <div className={styles.clientRoleText}>{step.clientAction}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className={styles.assuranceBanner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerIconBox}>
              <Clock size={24} />
            </div>
            <div>
              <div className={styles.bannerTitle}>Délai moyen constaté : 2 à 4 semaines</div>
              <div className={styles.bannerSub}>Nous fixons une date de livraison contractuelle et nous nous y tenons scrupuleusement.</div>
            </div>
          </div>

          <a href="#contact" className={styles.bannerBtn}>
            <span>Planifier mon atelier de cadrage</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
