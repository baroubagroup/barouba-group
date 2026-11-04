'use client';

import { 
  MessageSquare, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Lock,
  PhoneCall
} from 'lucide-react';
import styles from './ExecutiveContact.module.css';
import { WHATSAPP_NUMBER } from '@/lib/data';

const WHATSAPP_MSG = 'Bonjour BAROUBA GROUP, je souhaite échanger sur un projet digital pour mon entreprise.';

export default function ExecutiveContact() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.contactCard}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>PARLONS DE VOTRE PROJET</span>
            </div>

            <h2 className={styles.title}>
              Donnons vie à votre prochaine <span className="text-gold-gradient">Ambition Digitale</span>
            </h2>
            <p className={styles.subtitle}>
              Que vous ayez un cahier des charges précis ou juste une idée à structurer, nous vous répondons rapidement avec une vraie écoute stratégique.
            </p>
          </div>

          {/* 2 Contact Channels */}
          <div className={styles.channelsGrid}>
            {/* WhatsApp VIP Direct */}
            <div className={styles.channelItem}>
              <div className={styles.channelTop}>
                <div className={styles.whatsappIconBox}>
                  <MessageSquare size={24} />
                </div>
                <span className={styles.speedBadge}>RÉPONSE EN MOINS DE 15 MIN</span>
              </div>

              <h3 className={styles.channelHeading}>Échange Direct sur WhatsApp</h3>
              <p className={styles.channelDesc}>
                Le moyen le plus simple et direct pour poser vos questions, évaluer la faisabilité et discuter sans formalité inutile.
              </p>

              <div className={styles.bullets}>
                <div className={styles.bulletRow}>
                  <CheckCircle2 size={15} className={styles.bulletIcon} />
                  <span>Discussion directe avec un responsable technique</span>
                </div>
                <div className={styles.bulletRow}>
                  <CheckCircle2 size={15} className={styles.bulletIcon} />
                  <span>Envoi immédiat d'exemples et d'estimations</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappAction}
              >
                <span>Démarrer sur WhatsApp</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Email / Detailed Form */}
            <div className={styles.channelItem}>
              <div className={styles.channelTop}>
                <div className={styles.emailIconBox}>
                  <Mail size={24} />
                </div>
                <span className={styles.speedBadge}>ÉTUDE SOUS 48H</span>
              </div>

              <h3 className={styles.channelHeading}>Demande de Devis ou Appel d'Offres</h3>
              <p className={styles.channelDesc}>
                Vous avez un projet structuré ou un cahier des charges ? Transmettez-nous vos besoins pour un chiffrage clair et transparent.
              </p>

              <div className={styles.bullets}>
                <div className={styles.bulletRow}>
                  <CheckCircle2 size={15} className={styles.bulletIcon} />
                  <span>Étude de faisabilité et recommandations gratuites</span>
                </div>
                <div className={styles.bulletRow}>
                  <CheckCircle2 size={15} className={styles.bulletIcon} />
                  <span>Accord de confidentialité (NDA) si nécessaire</span>
                </div>
              </div>

              <a href="/contact" className={styles.emailAction}>
                <span>Envoyer ma demande</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Reassurance Footer */}
          <div className={styles.reassuranceRow}>
            <div className={styles.reassureItem}>
              <Lock size={15} className={styles.reassureIcon} />
              <span>Propriété intellectuelle totale à la livraison</span>
            </div>
            <div className={styles.reassureItem}>
              <ShieldCheck size={15} className={styles.reassureIcon} />
              <span>Garantie de suivi et support technique dédié</span>
            </div>
            <div className={styles.reassureItem}>
              <Zap size={15} className={styles.reassureIcon} />
              <span>Aucun abonnement captif imposé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
