import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { 
  Share2, 
  Code2, 
  Bot, 
  TrendingUp, 
  Target, 
  CreditCard, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Nos Services — Communication Digitale, Ingénierie Web, Solutions IA & Formations | BAROUBA GROUP',
  description: 'Découvrez notre catalogue de services complets : communication digitale et community management, développement web Next.js 16, acquisition publicitaire Meta/TikTok, tunnels de vente et formations certifiantes.',
};

const SERVICES_DATA = [
  {
    num: '01',
    slug: 'communication-digitale-community-management',
    title: 'Communication Digitale & Community Management (Gestion de Pages)',
    desc: 'Élaboration de votre stratégie d’image de marque et gestion quotidienne complète de vos pages réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn) : création de contenus visuels et vidéos captivants, animation active de votre communauté et modération 7j/7.',
    icon: Share2,
    features: [
      'Gestion complète, animation quotidienne et croissance de vos pages',
      'Création de visuels percutants, formats courts (Reels, TikTok) et calendrier éditorial',
      'Modération des commentaires, réponse aux messages privés (DMs) et relation client 7j/7',
      'Veille d’e-réputation, stratégie d’influence locale et rapports d’impact mensuels'
    ]
  },
  {
    num: '02',
    slug: 'developpement-web-plateformes-nextjs',
    title: 'Développement Web & Applications Next.js 16',
    desc: 'Conception de plateformes numériques sur mesure, ultra-sécurisées et ultra-rapides (< 0.8s), bâties avec Next.js 16 et TypeScript pour offrir une expérience sans équivalent sur les réseaux mobiles d’Afrique de l’Ouest.',
    icon: Code2,
    features: [
      'Architecture moderne App Router & Server Components ultra-rapide',
      'Intégration native des paiements locaux (Orange Money, Moov Money, LigdiCash, Cartes)',
      'Score de performance Google PageSpeed > 90 garanti pour un SEO optimal',
      'Propriété totale et absolue de votre code source sans abonnement captif'
    ]
  },
  {
    num: '03',
    slug: 'acquisition-publicite-meta-tiktok-ads',
    title: 'Acquisition & Publicité 360° (Meta & TikTok Ads)',
    desc: 'Gestion rigoureuse et scientifique de vos campagnes publicitaires payantes sur Meta Ads (Facebook/Instagram), TikTok Ads et Google Ads pour maximiser votre rentabilité par rapport à chaque franc investi.',
    icon: TrendingUp,
    features: [
      'Création des visuels publicitaires, scripts et formats vidéo à fort hook',
      'Tracking serveur (CAPI) sans déperdition de données pour piloter le ROAS réel',
      'Ciblage géographique chirurgical (Ouagadougou, Bobo, Abidjan, Diaspora)',
      'Rapports transparents hebdomadaires orientés retour sur investissement chiffré'
    ]
  },
  {
    num: '04',
    slug: 'tunnels-de-vente-whatsapp',
    title: 'Tunnels de Vente & Vente WhatsApp Haute Conversion',
    desc: 'Conception de parcours d’achat hybrides pensés spécifiquement pour le comportement d’achat en Afrique : Landing Page monoproduit ultra-rapide connectée directement à WhatsApp Business avec clôture commerciale réactive.',
    icon: Target,
    features: [
      'Pages de capture et de vente à fort impact rédactionnel et visuel',
      'Formulaire de commande 1-clic épuré sans inscription complexe',
      'Scripts de vente WhatsApp testés et relances automatiques des indécis',
      'Protocoles de livraison locale pour réduire les refus sous les 8%'
    ]
  },
  {
    num: '05',
    slug: 'agents-ia-automatisation-metier',
    title: 'Agents IA & Automatisation Métier 24/7',
    desc: 'Création et entraînement d’assistants virtuels autonomes connectés à votre catalogue, votre CRM et l’API officielle de WhatsApp Cloud pour qualifier vos prospects, répondre aux demandes courantes et générer des devis sans interruption.',
    icon: Bot,
    features: [
      'Assistants WhatsApp formés sur vos procédures, tarifs et catalogue',
      'Prise en charge instantanée de 80% des demandes clients 24h/24 et 7j/7',
      'Automatisation des devis, facturation et suivi des stocks en temps réel',
      'Transfert intelligent et fluide vers vos commerciaux humains en cas de besoin'
    ]
  },
  {
    num: '06',
    slug: 'ecommerce-expansion-sous-regionale',
    title: 'E-Commerce & Expansion Sous-Régionale',
    desc: 'Déploiement d’écosystèmes marchands scalables avec support multi-devises (XOF, EUR, USD), gestion centralisée des stocks et intégration avec vos partenaires logistiques locaux.',
    icon: CreditCard,
    features: [
      'Passage en caisse instantané et sécurisé adapté au mobile',
      'Gestion synchronisée des stocks et facturation automatique',
      'Connexion avec les réseaux logistiques et livreurs motos à Ouaga et Bobo',
      'Sécurisation des transactions et protection renforcée contre la fraude'
    ]
  },
  {
    num: '07',
    slug: 'formations-accompagnement-metiers-du-numerique',
    title: 'Formations & Accompagnement aux Métiers du Numérique',
    desc: 'Nous formons et nous accompagnons vos équipes : programmes certifiants et mentorat pratique en Marketing Digital, E-commerce, Community Management, IA et développement web. Un suivi personnalisé jusqu’aux résultats concrets.',
    icon: GraduationCap,
    features: [
      'Formations pratiques axées sur le terrain : marketing digital, e-commerce, CM, IA',
      'Accompagnement sur-mesure et coaching individuel ou en équipe en entreprise',
      'Exercices sur des cas réels, budgets publicitaires réels et projets concrets',
      'Certification professionnelle BAROUBA ACADEMY reconnue et réseau d’anciens'
    ]
  },
  {
    num: '08',
    slug: 'portails-institutionnels-systemes-critiques',
    title: 'Portails Institutionnels & Systèmes Critiques',
    desc: 'Développement de plateformes d’administration, d’espaces membres sécurisés et de portails pour entreprises et institutions exigeant une disponibilité absolue (99.98%).',
    icon: ShieldCheck,
    features: [
      'Gestion granulaire des rôles et autorisations d’accès utilisateurs',
      'Chiffrement de bout en bout et archivage sécurisé des documents',
      'Conformité stricte aux standards de sécurité et audits de performance',
      'Contrat de maintenance préventive et support technique prioritaire garanti'
    ]
  }
];

export default async function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>NOTRE SAVOIR-FAIRE D'ÉLITE</span>
          </div>
          <h1 className={styles.pageTitle}>
            Des solutions numériques pensées pour <span className="text-gold-gradient">accélérer vos résultats</span>
          </h1>
          <p className={styles.pageSubtitle}>
            De la communication digitale quotidienne à l’ingénierie web de pointe, en passant par nos formations pratiques et nos agents IA : chaque prestation est délivrée avec la même exigence de rigueur, de rapidité d’exécution et de retour sur investissement chiffré.
          </p>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="CATALOGUE D'INTERVENTION BAROUBA GROUP" />

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES_DATA.map((srv) => {
              const Icon = srv.icon;
              return (
                <div key={srv.num} className={styles.serviceCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <Icon size={24} />
                    </div>
                    <span className={styles.serviceNum}>{srv.num}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{srv.title}</h2>
                  <p className={styles.cardDesc}>{srv.desc}</p>

                  <div className={styles.featuresList}>
                    {srv.features.map((feat, i) => (
                      <div key={i} className={styles.featureItem}>
                        <span className={styles.featureDiamond}>◆</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardAction}>
                    <Link href={`/services/${srv.slug}` as any} className={styles.learnMoreBtn}>
                      <span>En savoir plus sur cette offre</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaTitle}>Vous avez un projet spécifique à chiffrer ou des équipes à former ?</h3>
              <p className={styles.ctaDesc}>
                Nos ingénieurs, stratèges et formateurs étudient vos besoins et vous répondent avec une proposition claire et un plan d'action sous 24 à 48 heures ouvrées.
              </p>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP, je souhaite planifier un cadrage gratuit pour mon projet d'entreprise.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <WhatsAppIcon size={18} />
              <span>Planifier un cadrage gratuit sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
