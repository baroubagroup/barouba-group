'use client';

import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import styles from './GuaranteesTrust.module.css';

const GUARANTEES = [
  {
    id: 'g-ip',
    title: '100% Propriété Intellectuelle & Totale Liberté',
    summary: 'Vous possédez légalement chaque ligne de code, chaque maquette et chaque accès dès la livraison finale. Aucun système captif, aucun abonnement mensuel obligatoire imposé.',
    icon: Lock,
    highlight: 'Zéro dépendance',
    color: '#F5A623'
  },
  {
    id: 'g-speed',
    title: 'Vitesse d’Élite & Score PageSpeed > 90 Garanti',
    summary: 'Nos plateformes Next.js se chargent en moins de 0.8 seconde. Si votre score mobile officiel est inférieur à 90 lors de la recette, nous optimisons gratuitement sans surcoût.',
    icon: Zap,
    highlight: '< 0.8s temps réel',
    color: '#FFD700'
  },
  {
    id: 'g-support',
    title: 'Garantie Technique & Accompagnement 90 Jours',
    summary: 'Nous ne disparaissons pas après la livraison. Vous bénéficiez de 3 mois entiers d’assistance technique directe pour corriger tout aléa et sécuriser le démarrage de vos ventes.',
    icon: ShieldCheck,
    highlight: '3 mois de sérénité',
    color: '#10B981'
  },
  {
    id: 'g-price',
    title: 'Devis Ferme et Définitif Sans Surprise',
    summary: 'Le budget validé au lancement est gravé dans le marbre. Aucun dépassement d’honoraires, aucun frais caché en fin de parcours. Ce qui est chiffré est scrupuleusement respecté.',
    icon: FileText,
    highlight: 'Budget maîtrisé à 100%',
    color: '#F97316'
  },
  {
    id: 'g-channel',
    title: 'Canal VIP Direct avec un Référent Senior',
    summary: 'Fini les tickets de support anonymes qui restent sans réponse. Vous échangez en direct sur un fil WhatsApp ou Slack dédié avec le lead technique responsable de votre projet.',
    icon: HeartHandshake,
    highlight: 'Interlocuteur unique',
    color: '#3B82F6'
  }
];

export default function GuaranteesTrust() {
  return (
    <section className={styles.section} id="garanties">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
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
        </div>

        {/* Guarantees Grid */}
        <div className={styles.grid}>
          {GUARANTEES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`${styles.card} ${idx === 0 ? styles.featuredCard : ''}`}
                style={{ '--card-accent': item.color } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <Icon size={24} />
                  </div>
                  <span className={styles.highlightPill}>{item.highlight}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSummary}>{item.summary}</p>

                <div className={styles.verifiedRow}>
                  <CheckCircle2 size={15} className={styles.verifyIcon} />
                  <span>Engagement mentionné au contrat d’intervention</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className={styles.ndaStrip}>
          <div className={styles.ndaText}>
            <strong>Confidentialité garantie :</strong> Nous signons un Accord de Non-Divulgation (NDA) préalable sur simple demande avant de consulter vos documents confidentiels.
          </div>
          <a href="#contact" className={styles.ndaBtn}>
            <span>Demander un modèle de contrat & NDA</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
