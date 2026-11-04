'use client';

import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  Lock,
  Zap
} from 'lucide-react';
import styles from './ContactHubV2.module.css';
import { WHATSAPP_NUMBER } from '@/lib/data';

const WHATSAPP_TEXT = 'Bonjour BAROUBA GROUP, je souhaite planifier un audit stratégique pour mon projet digital.';

export default function ContactHubV2() {
  return (
    <section className={styles.section} id="contact-hub">
      <div className={styles.container}>
        <div className={styles.mainBox}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>COMMANDO TECH & CROISSANCE</span>
            </div>

            <h2 className={styles.title}>
              Prêt à installer une machine de vente et d'IA dans votre entreprise ?
            </h2>
            <p className={styles.subtitle}>
              Pas de commercial intermédiaire : vous échangez directement avec nos ingénieurs et architectes de croissance.
            </p>
          </div>

          {/* 2-Columns Dispatch Options */}
          <div className={styles.grid}>
            {/* Direct WhatsApp VIP Access */}
            <div className={styles.channelCard}>
              <div className={styles.channelTop}>
                <div className={styles.channelIconBoxWhatsApp}>
                  <MessageSquare size={22} />
                </div>
                <span className={styles.channelSpeed}>RÉPONSE MOYENNE &lt; 15 MIN</span>
              </div>

              <h3 className={styles.channelTitle}>Ligne Directe WhatsApp Business</h3>
              <p className={styles.channelDesc}>
                Le canal le plus rapide pour présenter votre projet, nous poser une question technique ou vérifier nos disponibilités d'intervention.
              </p>

              <div className={styles.channelBenefits}>
                <div className={styles.benefitRow}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Discussion directe avec un chef de projet tech</span>
                </div>
                <div className={styles.benefitRow}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Envoi immédiat de nos références pertinentes</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsAppBtn}
              >
                <span>Ouvrir la conversation WhatsApp</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Structured Project Brief */}
            <div className={styles.channelCard}>
              <div className={styles.channelTop}>
                <div className={styles.channelIconBoxForm}>
                  <Mail size={22} />
                </div>
                <span className={styles.channelSpeed}>AUDIT DÉTAILLÉ SOUS 48H</span>
              </div>

              <h3 className={styles.channelTitle}>Dépôt de Cahier des Charges & Devis</h3>
              <p className={styles.channelDesc}>
                Idéal si vous avez un appel d'offres, une expression de besoin détaillée ou un système complexe à chiffrer précisément.
              </p>

              <div className={styles.channelBenefits}>
                <div className={styles.benefitRow}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Étude de faisabilité et architecture technique gratuite</span>
                </div>
                <div className={styles.benefitRow}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Accord de confidentialité (NDA) sur simple demande</span>
                </div>
              </div>

              <a href="/contact" className={styles.formBtn}>
                <span>Remplir le questionnaire de cadrage</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Footer Security & Ownership Commitments */}
          <div className={styles.footerCommitments}>
            <div className={styles.commitItem}>
              <Lock size={15} className={styles.commitIcon} />
              <span>Propriété Intellectuelle 100% Client</span>
            </div>
            <div className={styles.commitItem}>
              <ShieldCheck size={15} className={styles.commitIcon} />
              <span>Garantie de Livraison & Zéro Bogue</span>
            </div>
            <div className={styles.commitItem}>
              <Zap size={15} className={styles.commitIcon} />
              <span>Support & Maintenance Haute Disponibilité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
