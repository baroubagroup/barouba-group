import type { Metadata } from 'next';
import { 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Globe2 
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import QuoteCalculator from '@/components/v2/QuoteCalculator';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Direct & Échange WhatsApp VIP | BAROUBA GROUP',
  description: 'Contactez BAROUBA GROUP par WhatsApp au +226 74 82 66 66 ou email pour cadrer votre projet digital sous 24 à 48 heures ouvrées.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/fr/contact',
  },
};

const WHATSAPP_MESSAGE = 'Bonjour BAROUBA GROUP, je souhaite échanger sur un projet digital pour mon entreprise.';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.baroubagroup.com/fr/contact#contact',
  name: 'Contact Direction BAROUBA GROUP',
  url: 'https://www.baroubagroup.com/fr/contact',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'BAROUBA GROUP',
    telephone: '+226-74-82-66-66',
    email: 'contact@baroubagroup.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bobo-Dioulasso',
      addressRegion: 'Hauts-Bassins',
      addressCountry: 'BF',
    },
  },
};

export default async function ContactPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>DEVIS EN LIGNE &amp; AUDIT PRÉALABLE</span>
          </div>
          <h1 className={styles.pageTitle}>
            Demandez votre devis sur-mesure &amp; <span className="text-gold-gradient">donnons vie à votre projet</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Que vous ayez un cahier des charges précis ou simplement une idée à structurer, configurez votre demande en ligne ci-dessous ou contactez nos ingénieurs sur WhatsApp.
          </p>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="DEVIS EN LIGNE & CANAUX OFFICIELS" />

      {/* Contact Channels & Quote Calculator */}
      <section className={styles.contactSection}>
        <div className="container">
          {/* 1. Interactive Online Quote Builder */}
          <QuoteCalculator />

          {/* 2. Direct Channels */}
          <div className={styles.channelsGrid}>
            {/* WhatsApp VIP Direct */}
            <div className={styles.channelCard}>
              <div className={styles.channelTop}>
                <div className={styles.iconBoxWa}>
                  <WhatsAppIcon size={24} />
                </div>
                <span className={styles.speedTag}>RÉPONSE EN MOINS DE 15 MIN</span>
              </div>

              <h2 className={styles.channelHeading}>Échange Direct sur WhatsApp</h2>
              <p className={styles.channelDesc}>
                Le moyen le plus rapide et fluide pour poser vos questions, valider la faisabilité technique de votre projet et obtenir une première estimation sans formalité inutile.
              </p>

              <div className={styles.bulletsList}>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletDiamond}>◆</span>
                  <span>Discussion directe avec un responsable technique senior</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletDiamond}>◆</span>
                  <span>Envoi immédiat d’exemples de maquettes et de références</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletDiamond}>◆</span>
                  <span>Disponible du Lundi au Samedi (8h - 20h GMT)</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <WhatsAppIcon size={18} />
                <span>Démarrer l’échange sur WhatsApp</span>
              </a>
            </div>

            {/* Email / Detailed RFP */}
            <div className={styles.channelCard}>
              <div className={styles.channelTop}>
                <div className={styles.iconBoxEmail}>
                  <Mail size={24} />
                </div>
                <span className={styles.speedTag}>ÉTUDE ÉCRITE SOUS 48H</span>
              </div>

              <h2 className={styles.channelHeading}>Demande de Devis ou Appel d’Offres</h2>
              <p className={styles.channelDesc}>
                Vous avez un cahier des charges structuré, un projet institutionnel ou un appel d’offres ? Transmettez-nous vos documents pour une étude approfondie et chiffrée.
              </p>

              <div className={styles.bulletsList}>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletDiamond}>◆</span>
                  <span>Étude de faisabilité et recommandations d’architecture gratuites</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletDiamond}>◆</span>
                  <span>Signature d’un Accord de Non-Divulgation (NDA) sur demande</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletDiamond}>◆</span>
                  <span>Devis ferme et calendrier de livraison contractuel</span>
                </div>
              </div>

              <a
                href="mailto:baroubagroup@gmail.com?subject=Demande%20de%20Devis%20Projet%20Digital%20-%20BAROUBA%20GROUP"
                className={styles.emailBtn}
              >
                <Mail size={18} />
                <span>Envoyer mon cahier des charges par email</span>
              </a>
            </div>
          </div>

          {/* Reassurance Grid */}
          <div className={styles.reassuranceGrid}>
            <div className={styles.reassureCard}>
              <span className={styles.reassureLabel}>Propriété Intellectuelle</span>
              <span className={styles.reassureValue}>100% Cession totale du code source et des accès</span>
            </div>
            <div className={styles.reassureCard}>
              <span className={styles.reassureLabel}>Garantie Post-Livraison</span>
              <span className={styles.reassureValue}>90 Jours d’assistance et suivi technique inclus</span>
            </div>
            <div className={styles.reassureCard}>
              <span className={styles.reassureLabel}>Engagement Tarifaire</span>
              <span className={styles.reassureValue}>Devis ferme sans surcoût ni frais cachés</span>
            </div>
            <div className={styles.reassureCard}>
              <span className={styles.reassureLabel}>Langues de Travail</span>
              <span className={styles.reassureValue}>Français (UEMOA) • International</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
