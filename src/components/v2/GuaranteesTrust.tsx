'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  HeartHandshake,
  ArrowRight,
  ShieldAlert,
  Award
} from 'lucide-react';
import styles from './GuaranteesTrust.module.css';

const GUARANTEES = [
  {
    id: 'g-ip',
    number: '01',
    title: '100% Propriété Intellectuelle & Totale Liberté',
    summary: 'Vous possédez légalement chaque ligne de code, chaque maquette et chaque accès dès la livraison finale. Aucun système captif, aucun abonnement mensuel obligatoire imposé.',
    icon: Lock,
    highlight: 'Zéro dépendance',
    color: '#F5A623',
    contractClause: 'Clause n°4 : Cession pleine, entière et irrévocable des droits d’auteur.'
  },
  {
    id: 'g-speed',
    number: '02',
    title: 'Vitesse d’Élite & Score PageSpeed > 90 Garanti',
    summary: 'Nos plateformes Next.js se chargent en moins de 0.8 seconde. Si votre score mobile officiel est inférieur à 90 lors de la recette, nous optimisons gratuitement sans surcoût.',
    icon: Zap,
    highlight: '< 0.8s temps réel',
    color: '#FFD700',
    contractClause: 'Clause n°7 : SLA de performance chiffré et auditable sur Google PageSpeed.'
  },
  {
    id: 'g-support',
    number: '03',
    title: 'Garantie Technique & Accompagnement 90 Jours',
    summary: 'Nous ne disparaissons pas après la livraison. Vous bénéficiez de 3 mois entiers d’assistance technique directe pour corriger tout aléa et sécuriser le démarrage de vos ventes.',
    icon: ShieldCheck,
    highlight: '3 mois de sérénité',
    color: '#10B981',
    contractClause: 'Clause n°11 : Couverture intégrale des anomalies et support prioritaire 6j/7.'
  },
  {
    id: 'g-price',
    number: '04',
    title: 'Devis Ferme et Définitif Sans Surprise',
    summary: 'Le budget validé au lancement est gravé dans le marbre. Aucun dépassement d’honoraires, aucun frais caché en fin de parcours. Ce qui est chiffré est scrupuleusement respecté.',
    icon: FileText,
    highlight: 'Budget maîtrisé à 100%',
    color: '#F97316',
    contractClause: 'Clause n°2 : Forfait ferme garanti sans avenant tarifaire unilatéral.'
  },
  {
    id: 'g-channel',
    number: '05',
    title: 'Canal VIP Direct avec un Référent Senior',
    summary: 'Fini les tickets de support anonymes qui restent sans réponse. Vous échangez en direct sur un fil WhatsApp ou Slack dédié avec le lead technique responsable de votre projet.',
    icon: HeartHandshake,
    highlight: 'Interlocuteur unique',
    color: '#3B82F6',
    contractClause: 'Clause n°5 : Attribution nominative d’un ingénieur consultant dédié.'
  }
];

export default function GuaranteesTrust() {
  return (
    <section className={styles.section} id="garanties">
      {/* Background Volumetric Shield Aura */}
      <div className={styles.ambientShieldGlow} aria-hidden="true" />

      <div className="container">
        {/* Header with Motion In-View */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badge}>
            <ShieldCheck size={14} className={styles.badgeIcon} />
            <span>ZÉRO RISQUE POUR VOTRE ENTREPRISE</span>
          </div>

          <h2 className={styles.title}>
            Nos <span className="text-gold-gradient">5 engagements contractuels</span> pour investir l’esprit tranquille
          </h2>
          <p className={styles.subtitle}>
            Faire appel à un studio digital est une décision stratégique importante. Nous éliminons toute friction en prenant les risques à notre charge.
          </p>
        </motion.div>

        {/* Guarantees Dynamic Grid with In-View Sequential Entrance */}
        <div className={styles.grid}>
          {GUARANTEES.map((item, idx) => {
            const Icon = item.icon;
            const isFeatured = idx === 0;

            return (
              <motion.div 
                key={item.id} 
                className={`${styles.card} ${isFeatured ? styles.featuredCard : ''}`}
                style={{ '--card-accent': item.color } as React.CSSProperties}
                // Motion Design: Enters field of view as user scrolls near it
                initial={{ opacity: 0, y: 50, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2, margin: '0px 0px -50px 0px' }}
                transition={{ 
                  duration: 0.65, 
                  delay: isFeatured ? 0.05 : (idx % 2) * 0.12, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                {/* Decorative Holographic Watermark Pattern */}
                <div className={styles.cardWatermark} aria-hidden="true">
                  <ShieldCheck size={140} />
                </div>

                <div className={styles.cardTop}>
                  <div className={styles.topBadgesGroup}>
                    <motion.div 
                      className={styles.numberBadge}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                    >
                      ENGAGEMENT {item.number} / 05
                    </motion.div>
                    <span className={styles.highlightPill}>{item.highlight}</span>
                  </div>

                  <motion.div 
                    className={styles.iconBox}
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSummary}>{item.summary}</p>

                {/* Specific Legal Clause Mention */}
                <div className={styles.clauseMention}>
                  <span className={styles.clauseBullet}>§</span>
                  <span>{item.contractClause}</span>
                </div>

                {/* Verified Official Contract Stamp Row */}
                <motion.div 
                  className={styles.verifiedRow}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + idx * 0.08, duration: 0.4 }}
                >
                  <div className={styles.stampCircle}>
                    <CheckCircle2 size={14} className={styles.verifyIcon} />
                  </div>
                  <span className={styles.verifiedText}>Engagement contractuel signé &amp; juridiquement opposable</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Confidentiality Strip with In-View Reveal */}
        <motion.div 
          className={styles.ndaStrip}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.ndaLeft}>
            <div className={styles.ndaIconBox}>
              <Award size={22} />
            </div>
            <div className={styles.ndaText}>
              <strong>Confidentialité garantie &amp; Secret des affaires :</strong> Nous signons un Accord de Non-Divulgation (NDA) préalable sur simple demande avant de consulter vos documents confidentiels.
            </div>
          </div>

          <a href="#contact" className={styles.ndaBtn}>
            <span>Demander un modèle de contrat &amp; NDA</span>
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
