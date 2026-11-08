'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import styles from './PersonaTriad.module.css';

const PERSONAS = [
  {
    id: 'stratege',
    num: '01',
    role: 'Stratège d’Affaires',
    title: 'Architecture de Croissance & Domination de Marché',
    tagline: '« Ne pas courir après les tendances : poser les fondations qui verrouillent votre secteur. »',
    desc: 'J’interviens auprès des dirigeants et fondateurs pour structurer leur modèle économique, concevoir leur avantage compétitif déloyal et orchestrer l’ensemble de leur écosystème numérique (produits, prix, canaux d’acquisition, rétention).',
    deliverables: [
      'Diagnostic concurrentiel approfondi du marché burkinabè et sous-régional (UEMOA)',
      'Modélisation économique, pricing stratégique et architecture d’offres à haute valeur',
      'Feuille de route d’exécution technologique et commerciale à 6, 12 et 24 mois',
      'Alignement des ressources internes et cadrage des KPIs de rentabilité réelle'
    ],
    method: 'Méthode Stratégique Éprouvée',
    methodDesc: 'Pas de présentations théoriques hors sol : une analyse rigoureuse des flux financiers, des comportements d’achat locaux et des leviers d’échelle actionnables immédiatement.',
    quote: 'La stratégie n’est pas ce que vous prévoyez de faire quand tout va bien, mais la certitude mathématique de gagner sur le terrain.',
    icon: TrendingUp,
    ctaText: 'Cadrer ma stratégie d’entreprise'
  },
  {
    id: 'consultant',
    num: '02',
    role: 'Consultant Exécutif',
    title: 'Audit des Systèmes, Gouvernance & Sécurisation',
    tagline: '« Rigueur technique, conformité juridique et neutralisation des goulets d’étranglement. »',
    desc: 'Un regard indépendant et sans complaisance sur la santé de vos systèmes d’information, vos tunnels d’acquisition, vos contrats technologiques et la productivité de vos équipes opérationnelles.',
    deliverables: [
      'Audit technique complet : architecture web/mobile, sécurité cloud, temps de réponse',
      'Revue contractuelle et protection de la propriété intellectuelle (cadre OHADA)',
      'Optimisation des processus opérationnels et suppression des frictions internes',
      'Conseil de direction lors de virages technologiques critiques ou de gestion de crise'
    ],
    method: 'Audit Indépendant Sans Concession',
    methodDesc: 'Vous obtenez un rapport d’audit clair, sans jargon trompeur, priorisant les vulnérabilités majeures et les gains d’efficacité immédiats pour votre comité de direction.',
    quote: 'Un système vulnérable ou mal architecturé coûte dix fois plus cher en opportunités perdues qu’en lignes de code.',
    icon: ShieldCheck,
    ctaText: 'Commander un audit exécutif'
  },
  {
    id: 'formateur',
    num: '03',
    role: 'Formateur & Mentor',
    title: 'Masterclasses Exécutives & Pédagogie de Haut Niveau',
    tagline: '« « Nous formons et nous accompagnons » : transmettre le savoir qui génère du résultat. »',
    desc: 'Transmission directe de mes méthodes d’ingénierie et de marketing aux comités de direction, entrepreneurs et équipes techniques. Zéro blabla universitaire : des cas concrets d’entreprises jusqu’à la maîtrise absolue.',
    deliverables: [
      'Masterclasses exécutives pour PDG, directeurs généraux et cadres dirigeants',
      'Programmes immersifs pour équipes : Marketing Digital, Développement Next.js, IA',
      'Transmission de bibliothèques de scripts de vente, workflows automatisés et prompts métier',
      'Mentorat individuel de fondateurs pour accélérer leur posture de leader technologique'
    ],
    method: 'Pédagogie Commando par la Pratique',
    methodDesc: 'Chaque participant travaille sur les vrais budgets, les vrais produits et les vraies données de son entreprise, avec une évaluation sur livrables opérationnels.',
    quote: 'La formation la plus rentable est celle où votre équipe applique le jour même ce qu’elle a appris pour générer du cash.',
    icon: GraduationCap,
    ctaText: 'Organiser une session de formation'
  }
];

export default function PersonaTriad() {
  const [activePersona, setActivePersona] = useState(PERSONAS[0]);

  return (
    <section className={styles.section} id="casquettes">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Sparkles size={14} />
            <span>3 Casquettes • 1 Vision d'Excellence</span>
          </div>

          <h2 className={styles.heading}>
            Une triple expertise au service des <br />
            <span className={styles.goldText}>décideurs et leaders économiques.</span>
          </h2>

          <p className={styles.subheading}>
            Choisissez une casquette pour explorer les domaines d'intervention, la méthode et les livrables concrets que j'apporte à votre organisation.
          </p>
        </div>

        {/* 3 Selector Tabs */}
        <div className={styles.tabGrid}>
          {PERSONAS.map((p) => {
            const isSelected = activePersona.id === p.id;
            const IconComponent = p.icon;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePersona(p)}
                className={`${styles.tabBtn} ${isSelected ? styles.tabActive : ''}`}
              >
                <div className={styles.tabTop}>
                  <span className={styles.tabNum}>CASQUETTE {p.num} //</span>
                  <div className={styles.tabIconBox}>
                    <IconComponent size={18} />
                  </div>
                </div>
                <div className={styles.tabTitle}>{p.role}</div>
                {isSelected && <div className={styles.tabActiveBar} />}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona.id}
            className={styles.detailsCard}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left Column: Scope & Deliverables */}
            <div className={styles.leftDetails}>
              <div className={styles.roleTag}>Domaine d'intervention // {activePersona.role}</div>
              <h3 className={styles.detailsHeading}>{activePersona.title}</h3>
              <p className={styles.detailsTagline}>{activePersona.tagline}</p>
              <p className={styles.detailsParagraph}>{activePersona.desc}</p>

              <div className={styles.deliverablesGroup}>
                <div className={styles.deliverablesLabel}>Livrables & Garanties Exécutives :</div>
                {activePersona.deliverables.map((item, idx) => (
                  <div key={idx} className={styles.deliverableRow}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Methodology, Quote & Action */}
            <div className={styles.rightDetails}>
              <div>
                <div className={styles.methodTitle}>{activePersona.method}</div>
                <p className={styles.methodDesc}>{activePersona.methodDesc}</p>
                <div className={styles.quoteBox}>
                  « {activePersona.quote} »
                </div>
              </div>

              <a href="#cadrage" className={styles.actionBtn}>
                <span>{activePersona.ctaText}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
