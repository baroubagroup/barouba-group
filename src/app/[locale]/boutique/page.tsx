import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { BOUTIQUE_PRODUCTS } from '@/lib/boutiqueData';
import BoutiqueFilterClient from '@/components/v2/BoutiqueFilterClient';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  FileText, 
  Smartphone, 
  Code, 
  Headphones, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import styles from './boutique.module.css';

export const metadata: Metadata = {
  title: 'Boutique Digitale & Solutions Clés en Main | BAROUBA GROUP',
  description: 'Templates Next.js haute conversion, tunnels de vente WhatsApp et packs d\'automatisation IA prêts au déploiement immédiat.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/fr/boutique',
  },
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const boutiqueSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.baroubagroup.com/fr/boutique#catalog',
  name: 'Boutique Digitale BAROUBA GROUP',
  description: 'Catalogue des solutions logicielles et kits d\'automatisation pour entreprises.',
  url: 'https://www.baroubagroup.com/fr/boutique',
};

export default async function BoutiquePage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boutiqueSchema) }}
      />
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badgePill}>
            <Sparkles size={14} />
            <span>BOUTIQUE & RESSOURCES DIGITALES — BAROUBA GROUP SARL</span>
          </div>

          <h1 className={styles.pageTitle}>
            Outils, Templates & Formules d’Élite pour <span className="text-gold-gradient">Accélérer vos Ventes</span>
          </h1>

          <p className={styles.pageSubtitle}>
            Architectures web Next.js 16, bibliothèques de prompts marketing, kits de tracking CAPI et contrats de sérénité cloud. Des solutions testées en production, pensées pour l’Afrique et le monde.
          </p>

          {/* Trust Reassurance Bar */}
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <Zap size={22} className={styles.trustIcon} />
              <div>
                <div className={styles.trustTitle}>Livraison Immédiate</div>
                <div className={styles.trustDesc}>Accès direct par WhatsApp & email</div>
              </div>
            </div>

            <div className={styles.trustItem}>
              <CreditCard size={22} className={styles.trustIcon} />
              <div>
                <div className={styles.trustTitle}>Paiement Mobile & Banque</div>
                <div className={styles.trustDesc}>Orange Money, Moov Money, Virement</div>
              </div>
            </div>

            <div className={styles.trustItem}>
              <ShieldCheck size={22} className={styles.trustIcon} />
              <div>
                <div className={styles.trustTitle}>Assistance 30 Jours</div>
                <div className={styles.trustDesc}>Aide technique assurée par nos ingénieurs</div>
              </div>
            </div>

            <div className={styles.trustItem}>
              <FileText size={22} className={styles.trustIcon} />
              <div>
                <div className={styles.trustTitle}>Facture SARL Conforme</div>
                <div className={styles.trustDesc}>Réglementation OHADA & fiscale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Pattern Ribbon Divider */}
      <AfricanPatternRibbon label="CATALOGUE DES PRODUITS PRÊTS À L'EMPLOI" />

      {/* Main Catalog with Interactive Client Filtering */}
      <section className={styles.catalogSection}>
        <div className="container">
          <BoutiqueFilterClient products={BOUTIQUE_PRODUCTS} />
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyHeader}>
            <h2 className={styles.whyHeading}>Pourquoi choisir nos solutions numériques ?</h2>
            <p className={styles.whySub}>
              Chaque produit de notre boutique résout un goulet d’étranglement réel que nous avons rencontré et vaincu sur le terrain en Afrique de l’Ouest.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <Smartphone size={24} />
              </div>
              <h3 className={styles.whyCardTitle}>Calibré pour le Terrain Ouest-Africain</h3>
              <p className={styles.whyCardText}>
                Tous nos templates et flux de commande sont pensés pour charger en 0,8 seconde sur réseau mobile 3G/4G, avec passage en caisse 1-clic et commande WhatsApp adaptée aux habitudes d’achat locales.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <Code size={24} />
              </div>
              <h3 className={styles.whyCardTitle}>Code Source Propre & Sans Dépendance Captive</h3>
              <p className={styles.whyCardText}>
                Aucun plugin lourd, aucun abonnement caché. Vous possédez 100% du code source TypeScript/Next.js ou de la bibliothèque de prompts, modifiable et hébergeable gratuitement sur Vercel ou Cloudflare.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <Headphones size={24} />
              </div>
              <h3 className={styles.whyCardTitle}>Support & Accompagnement Dédié</h3>
              <p className={styles.whyCardText}>
                Vous n’êtes jamais seul face à une archive ZIP. Notre équipe technique basée à Ouagadougou reste joignable directement sur WhatsApp pour vous guider pas à pas dans l’installation de votre outil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Project Box */}
      <section className={styles.customSection}>
        <div className="container">
          <div className={styles.customCard}>
            <div className={styles.customCardGlow} aria-hidden="true" />
            <span className={styles.customTag}>Sur-Mesure & Conseil Stratégique</span>
            <h2 className={styles.customTitle}>Vous avez un projet spécifique pour votre entreprise ?</h2>
            <p className={styles.customDesc}>
              Si votre besoin dépasse le cadre d’un template ou d’un pack pré-conçu, notre cabinet d’ingénieurs et de marketeurs conçoit votre infrastructure digitale, vos tunnels de vente complexes et vos agents IA sur mesure.
            </p>
            <div className={styles.customActions}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP, j'ai un projet spécifique d'entreprise et je souhaite échanger avec vos directeurs techniques.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnCtaWhatsapp}
              >
                <WhatsAppIcon />
                <span>Discuter de Mon Projet sur WhatsApp</span>
              </a>
              <Link href="/contact" className={styles.btnCtaDevis}>
                <span>Demander un Devis en Ligne</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
