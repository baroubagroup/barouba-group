import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  HelpCircle, 
  PhoneCall,
  DollarSign,
  ChevronRight,
  BookOpen,
  ShoppingBag,
  MessageSquare,
  Lock,
  Layers,
  AlertTriangle
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './publiciteFacebook.module.css';

export const metadata: Metadata = {
  title: 'Publicité Facebook au Burkina Faso | BAROUBA GROUP',
  description: 'Agence leader en publicité Facebook Ads au Burkina Faso. Campagnes à fort ROAS, déblocage de comptes restreints, tracking CAPI et budgets sur-mesure.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/publicite-facebook',
  },
  openGraph: {
    title: 'Publicité Facebook au Burkina Faso | BAROUBA GROUP',
    description: 'Agence leader en publicité Facebook Ads au Burkina Faso. Campagnes à fort ROAS, déblocage de comptes restreints, tracking CAPI et budgets sur-mesure.',
    url: 'https://www.baroubagroup.com/publicite-facebook',
    siteName: 'BAROUBA GROUP',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publicité Facebook au Burkina Faso | BAROUBA GROUP',
    description: 'Agence leader en publicité Facebook Ads au Burkina Faso. Campagnes à fort ROAS, déblocage de comptes restreints, tracking CAPI et budgets sur-mesure.',
  },
};

const PILLARS_DATA = [
  {
    num: '01',
    title: 'Objectifs de Campagnes Scientifiques & Conversion',
    icon: Target,
    desc: 'Arrêtez d’utiliser le bouton « Booster la publication ». Nous paramétrons les véritables objectifs de l’algorithme Meta : formulaires de prospects qualifiés, campagnes de ventes directes, tunnels Click-to-WhatsApp et reciblage chirurgical.',
    points: [
      'Génération de prospects B2B/B2C qualifiés avec filtrage anti-curieux',
      'Campagnes Click-to-WhatsApp directes avec premier message pré-rempli',
      'Campagnes de conversion e-commerce et vente directe sur catalogue',
      'Audiences similaires (Lookalike) calquées sur vos meilleurs acheteurs réels'
    ],
    linkText: 'Découvrir nos campagnes de prospects',
    href: '/campagne-prospects-facebook-burkina'
  },
  {
    num: '02',
    title: 'Résolution des Blocages & Sécurisation Meta Business',
    icon: ShieldCheck,
    desc: 'Un compte publicitaire suspendu stoppe immédiatement vos rentrées d’argent. Nous débloquons vos actifs via les canaux officiels Meta Pro, faisons vérifier votre entreprise avec vos documents RCCM/IFU et installons une architecture de secours inviolable.',
    points: [
      'Procédure de déblocage d’urgence pour comptes publicitaires restreints',
      'Vérification légale d’entreprise Meta Business Suite (RCCM & IFU)',
      'Déploiement d’un compte publicitaire et Business Manager de secours (Backup)',
      'Sécurisation des accès administrateurs et double authentification (2FA)'
    ],
    linkText: 'Consulter l’assistance déblocage Meta',
    href: '/compte-publicitaire-facebook-restreint-burkina'
  },
  {
    num: '03',
    title: 'Tracking Pixel & API de Conversion (CAPI) Server-Side',
    icon: Cpu,
    desc: 'Face aux blocages des cookies et d’iOS 14+, le simple pixel navigateur perd jusqu’à 40% de vos ventes. Nous déployons l’API de Conversions côté serveur et relions vos encaissements réels (Orange Money, Wave, caisse) à l’algorithme.',
    points: [
      'Installation sans faille de l’API de Conversion Meta (CAPI Server-Side)',
      'Contournement des pertes de données causées par Safari, iOS et bloqueurs',
      'Tracking des conversions hors-ligne (Offline Events) et ventes WhatsApp',
      'Réconciliation financière exacte entre budget dépensé et cash en caisse'
    ],
    linkText: 'Voir notre expertise tracking CAPI',
    href: '/api-conversion-facebook-burkina-faso'
  },
  {
    num: '04',
    title: 'Ingénierie Budgétaire & Chiffrage 100% Sur-Mesure',
    icon: DollarSign,
    desc: 'Il n’existe aucun forfait publicitaire universel à prix fixe. Votre budget d’acquisition est calculé mathématiquement en fonction de votre marge unitaire, de votre cycle de vente et de la capacité de traitement de vos commerciaux.',
    points: [
      'Calcul précis de votre seuil de rentabilité publicitaire (Break-even ROAS)',
      'Définition du Coût par Acquisition Client (CAC) plafond admissible',
      'Stratégie de montée en charge (Scaling vertical et horizontal maîtrisé)',
      'Contrat officiel d’accompagnement avec engagement de performance'
    ],
    linkText: 'Simuler votre budget sur-mesure',
    href: '/budget-publicite-facebook-sur-mesure-burkina'
  }
];

const CLUSTERS_DATA = [
  {
    title: 'Objectifs de Campagnes Meta',
    icon: Target,
    links: [
      { label: 'Campagne Prospects Facebook Burkina', href: '/campagne-prospects-facebook-burkina' },
      { label: 'Campagne Ventes Facebook Burkina', href: '/campagne-ventes-facebook-burkina' },
      { label: 'Campagne WhatsApp Facebook Burkina', href: '/campagne-whatsapp-facebook-burkina' },
      { label: 'Campagne Engagement & Interactions', href: '/campagne-engagement-facebook-burkina' },
      { label: 'Campagne Notoriété de Marque', href: '/campagne-notoriete-facebook-burkina' },
      { label: 'Campagne Reciblage (Retargeting)', href: '/campagne-retargeting-facebook-burkina' },
    ]
  },
  {
    title: 'Guides Pratiques & Lancement',
    icon: BookOpen,
    links: [
      { label: 'Comment Lancer sa Pub Facebook', href: '/comment-lancer-publicite-facebook-burkina' },
      { label: 'Comment Créer une Campagne Pub', href: '/comment-creer-campagne-facebook-burkina' },
      { label: 'Bien Cibler sa Publicité Facebook', href: '/comment-cibler-publicite-facebook-burkina' },
      { label: 'Rédiger une Annonce qui Vend', href: '/comment-rediger-texte-publicite-facebook' },
      { label: 'Pourquoi ma Pub ne Vend Pas', href: '/pourquoi-publicite-facebook-ne-vend-pas' },
      { label: 'Réduire son Coût par Prospect', href: '/reduire-cout-par-prospect-facebook-ouaga' },
    ]
  },
  {
    title: 'Territoires & Agence Élite',
    icon: MapPin,
    links: [
      { label: 'Publicité Facebook au Burkina Faso', href: '/publicite-facebook-au-burkina-faso' },
      { label: 'Campagne Publicitaire au Burkina', href: '/campagne-publicitaire-au-burkina-faso' },
      { label: 'Agence Pub Facebook Ouagadougou', href: '/agence-publicite-facebook-ouagadougou' },
      { label: 'Publicité Facebook Bobo-Dioulasso', href: '/publicite-facebook-bobo-dioulasso' },
      { label: 'Publicité Facebook à Koudougou', href: '/publicite-facebook-koudougou' },
      { label: 'Expert Publicité Facebook Burkina', href: '/expert-publicite-facebook-burkina' },
    ]
  },
  {
    title: 'Comptes Restreints & Sécurité',
    icon: ShieldCheck,
    links: [
      { label: 'Compte Pub Restreint (Déblocage)', href: '/compte-publicitaire-facebook-restreint-burkina' },
      { label: 'Débloquer Business Manager', href: '/debloquer-business-manager-facebook-burkina' },
      { label: 'Récupérer Compte Désactivé Ouaga', href: '/recuperer-compte-facebook-desactive-ouaga' },
      { label: 'Vérification Entreprise RCCM Meta', href: '/verification-business-manager-rccm-burkina' },
      { label: 'Compte de Secours (Backup)', href: '/compte-publicitaire-secours-facebook-ouaga' },
      { label: 'Débloquer Paiement Suspect', href: '/bloque-paiement-suspect-facebook-burkina' },
      { label: 'Sécuriser son Business Manager', href: '/securiser-business-manager-facebook-burkina' },
    ]
  },
  {
    title: 'Tracking Pixel & API CAPI',
    icon: Cpu,
    links: [
      { label: 'Installer Pixel Facebook Burkina', href: '/installer-pixel-facebook-burkina' },
      { label: 'API de Conversion Meta (CAPI)', href: '/api-conversion-facebook-burkina-faso' },
      { label: 'Tracking Ventes WhatsApp CAPI', href: '/tracking-ventes-whatsapp-facebook-burkina' },
      { label: 'Résoudre Perte Données iOS 14', href: '/resoudre-perte-donnees-pixel-facebook' },
      { label: 'Offline Conversions (Ventes Magasin)', href: '/offline-conversions-facebook-ouaga' },
    ]
  },
  {
    title: 'Budgets & Scaling Sur-Mesure',
    icon: DollarSign,
    links: [
      { label: 'Budget Pub Facebook Sur-Mesure', href: '/budget-publicite-facebook-sur-mesure-burkina' },
      { label: 'Combien Coûte la Pub Facebook', href: '/combien-coute-publicite-facebook-ouaga' },
      { label: 'Calculer son Seuil ROAS Réel', href: '/calculer-roas-rentabilite-facebook-burkina' },
      { label: 'Audit Campagne Facebook Ouaga', href: '/audit-campagne-publicitaire-facebook-ouaga' },
      { label: 'Scaling Campagnes Facebook Burkina', href: '/scaling-campagnes-facebook-burkina' },
    ]
  }
];

const FAQS = [
  {
    question: 'Pourquoi BAROUBA GROUP refuse-t-elle de vendre des forfaits publicitaires à prix fixe ?',
    answer: 'Parce que les forfaits fixes sont une illusion qui mène à l’échec. Une entreprise vendant des parcelles immobilières à 15 millions FCFA ne peut pas avoir la même structure de campagne, de ciblage et de budget qu’une marque vendant des cosmétiques à 10 000 FCFA. Chez BAROUBA GROUP, le budget est calculé chirurgicalement sur-mesure selon votre marge unitaire, votre panier moyen et la capacité d’absorption de vos commerciaux.'
  },
  {
    question: 'Pourquoi mon compte publicitaire est-il restreint et pouvez-vous le débloquer ?',
    answer: 'Meta utilise des algorithmes d’intelligence artificielle très stricts qui suspendent des comptes au moindre soupçon : pièces d’identité non vérifiées, incohérence entre le nom de la carte et le compte, ou non-conformité des créatifs. Nous intervenons directement pour constituer votre dossier officiel de contestation auprès du support Meta Pro, vérifier votre structure avec vos documents RCCM/IFU et installer un compte de secours opérationnel.'
  },
  {
    question: 'À quoi sert l’API de Conversion (CAPI) par rapport au simple Pixel Facebook ?',
    answer: 'Le simple Pixel navigateur est aujourd’hui bloqué par les bloqueurs de pub et les restrictions strictes des smartphones (Apple iOS 14+). L’API de Conversion (CAPI) transmet vos événements directement depuis le serveur vers Meta, sans passer par le navigateur de l’utilisateur. Cela permet de récupérer 100% de vos données de vente et de nourrir l’algorithme avec des profils de véritables acheteurs solvables.'
  },
  {
    question: 'Quel est l’avantage d’une campagne Click-to-WhatsApp au Burkina Faso ?',
    answer: 'Au Burkina Faso et en Afrique de l’Ouest, plus de 80% des transactions finales se concluent sur WhatsApp. Une campagne Click-to-WhatsApp bien configurée envoie un prospect directement dans une discussion privée avec votre force de vente, avec un message pré-rempli qualifiant. Associée à nos protocoles de tracking, elle garantit un taux de conversion immédiat.'
  },
  {
    question: 'En combien de temps une campagne Facebook Ads devient-elle rentable ?',
    answer: 'Après une phase d’apprentissage algorithmique de 48 à 72 heures permettant de valider les meilleurs angles créatifs et segments d’audience, les prospects qualifiés affluent de manière continue. Nos clients constatent un retour sur investissement net dès les premières semaines d’activation.'
  }
];

export default function PubliciteFacebookHubPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour Monsieur Sako, je souhaite échanger sur une stratégie de publicité Facebook Ads sur-mesure pour mon entreprise."
  )}`;

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': 'https://www.baroubagroup.com/publicite-facebook#agency',
        name: 'BAROUBA GROUP - Pôle Publicité Facebook Ads & Acquisition Payante',
        url: 'https://www.baroubagroup.com/publicite-facebook',
        logo: 'https://www.baroubagroup.com/logo-or.svg',
        telephone: '+226-74-82-66-66',
        email: 'contact@baroubagroup.com',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bobo-Dioulasso',
          addressRegion: 'Houet',
          addressCountry: 'BF',
        },
        areaServed: ['BF', 'CI', 'SN', 'ML', 'FR'],
        knowsAbout: [
          'Publicité Facebook Ads au Burkina Faso',
          'Campagnes de Génération de Prospects Qualifiés',
          'Campagnes de Ventes & Conversions E-commerce',
          'Campagnes Click-to-WhatsApp Rentables',
          'Déblocage Compte Publicitaire Restreint & Business Manager',
          'API de Conversion Meta (CAPI Server-Side)',
          'Tracking Pixel Meta & Offline Events',
          'Ingénierie Budgétaire Publicitaire Sur-Mesure',
          'Scaling de Campagnes Publicitaires en Afrique de l’Ouest',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.baroubagroup.com/publicite-facebook#faq',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* === HERO SECTION === */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            CABINET N°1 EN PUBLICITÉ FACEBOOK & META ADS AU BURKINA FASO
          </div>

          <h1 className={styles.pageTitle}>
            Publicité Facebook au Burkina Faso : Acquisition Payante & Ventes à Fort ROAS
          </h1>

          <p className={styles.pageSubtitle}>
            Ne brûlez plus votre budget dans des « boosts » inefficaces. Sous la direction de <strong>Monsieur SAKO BAROU BEN OUMAR</strong>, BAROUBA GROUP déploie une ingénierie publicitaire chirurgicale : objectifs de campagne orientés vente directe, tracking CAPI serveur 100% fiable, déblocage de comptes restreints et chiffrage budgétaire strictement sur-mesure.
          </p>

          <div className={styles.heroActions}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              Échanger avec M. Sako (+226 74 82 66 66)
            </a>
            <Link href={'/devis' as any} className={styles.btnSecondary}>
              Demander un Audit de Campagne
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust Bar */}
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>100 %</div>
              <div className={styles.trustLabel}>Sur-Mesure (Zéro Forfait Fixe)</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>CAPI</div>
              <div className={styles.trustLabel}>Tracking Serveur Sans Perte</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>Support Pro</div>
              <div className={styles.trustLabel}>Déblocage de Comptes Restreints</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>Garantie</div>
              <div className={styles.trustLabel}>Contrat de Performance Juridique</div>
            </div>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* === SECTION: LES 4 PILIERS STRATÉGIQUES === */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <TrendingUp size={14} />
              MÉTHODOLOGIE D’ÉLITE META ADS
            </div>
            <h2 className={styles.sectionTitle}>
              L’Ingénierie Publicitaire qui Transforme Vos Dépenses en Chiffre d’Affaires
            </h2>
            <p className={styles.sectionDesc}>
              La publicité Facebook rentable n’est pas une question de chance ou d’astuces éphémères. C’est une science rigoureuse alliant psychologie d’achat, paramétrage technique irréprochable et rentabilité mathématique.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {PILLARS_DATA.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.num} className={styles.pillarCard}>
                  <div className={styles.pillarCardHeader}>
                    <div className={styles.pillarIconBox}>
                      <IconComp size={26} />
                    </div>
                    <div>
                      <span className={styles.pillarNumber}>PILIER {pillar.num}</span>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    </div>
                  </div>

                  <p className={styles.pillarDesc}>{pillar.desc}</p>

                  <ul className={styles.pillarList}>
                    {pillar.points.map((pt, i) => (
                      <li key={i} className={styles.pillarItem}>
                        <CheckCircle2 size={16} className={styles.pillarItemIcon} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={pillar.href as any} className={styles.pillarLink}>
                    <span>{pillar.linkText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SECTION: COMPARATIF BUDGET SUR-MESURE VS FORFAITS FIXES === */}
      <section className={styles.budgetComparisonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <DollarSign size={14} />
              TRANSPARENCE FINANCIÈRE
            </div>
            <h2 className={styles.sectionTitle}>
              Pourquoi BAROUBA GROUP Bannit les Forfaits Publicitaires Fixes
            </h2>
            <p className={styles.sectionDesc}>
              Acheter un « pack pub standard » sans tenir compte de vos marges et de vos stocks est la première cause de gaspillage. Découvrez la différence entre le bricolage commercial et notre modélisation sur-mesure.
            </p>
          </div>

          <div className={styles.comparisonTableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Critères Stratégiques</th>
                  <th>Forfaits Publicitaires Fixes (Pratiques Obsolètes)</th>
                  <th>Ingénierie Sur-Mesure BAROUBA GROUP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableFeature}>Définition du Budget</td>
                  <td>Montant arbitraire imposé (ex: 50 000 ou 100 000 FCFA) sans étude de rentabilité.</td>
                  <td>
                    <span className={styles.tableBadgeHighlight}>100% Mathématique</span><br />
                    Calculé selon votre marge nette, votre panier moyen et votre cycle de vente.
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Objectif Technique</td>
                  <td>Simple boost de publication pour générer des likes et des commentaires vides.</td>
                  <td>
                    <span className={styles.tableBadgeHighlight}>Conversion Réelle</span><br />
                    Formulaires de prospects qualifiés, Click-to-WhatsApp et ventes directes.
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Précision du Tracking</td>
                  <td>Aucun pixel ou pixel basique perdant 40% des données sous iOS 14+.</td>
                  <td>
                    <span className={styles.tableBadgeHighlight}>CAPI Server-Side</span><br />
                    Tracking serveur sans perte de données et réconciliation des encaissements réels.
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Sécurité des Actifs</td>
                  <td>Compte personnel vulnérable aux bannissements brutaux de l'algorithme.</td>
                  <td>
                    <span className={styles.tableBadgeHighlight}>Structure Blindée</span><br />
                    Business Manager vérifié RCCM/IFU et architecture de secours prête à l’emploi.
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Engagements Juridiques</td>
                  <td>Aucun engagement formel, aucun compte rendu financier auditable.</td>
                  <td>
                    <span className={styles.tableBadgeHighlight}>Contrat d’Autorité</span><br />
                    Contrat officiel d’intervention sous l’autorité de M. SAKO BAROU BEN OUMAR.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === SECTION: HUB DES 35 CLUSTERS DE RECHERCHE STRATÉGIQUES === */}
      <section className={styles.territoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <Layers size={14} />
              BIBLIOTHÈQUE D’AUTORITÉ META ADS
            </div>
            <h2 className={styles.sectionTitle}>
              Explorez Nos 35 Pôles d’Expertise en Publicité Facebook
            </h2>
            <p className={styles.sectionDesc}>
              De la résolution de comptes bloqués au paramétrage chirurgical de l’API de Conversions, accédez directement aux guides techniques et solutions d’affaires les plus recherchées au Burkina Faso.
            </p>
          </div>

          <div className={styles.clusterGrid}>
            {CLUSTERS_DATA.map((cluster, idx) => {
              const ClustIcon = cluster.icon;
              return (
                <div key={idx} className={styles.clusterCard}>
                  <h3 className={styles.clusterTitle}>
                    <ClustIcon size={18} className={styles.clusterTitleIcon} />
                    <span>{cluster.title}</span>
                  </h3>
                  <ul className={styles.linkList}>
                    {cluster.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link href={link.href as any} className={styles.seoLink}>
                          <span>{link.label}</span>
                          <ChevronRight size={14} className={styles.linkArrow} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SECTION: FAQ D'AUTORITÉ === */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <HelpCircle size={14} />
              QUESTIONS FRÉQUENTES
            </div>
            <h2 className={styles.sectionTitle}>
              Tout Ce Que les Dirigeants Doivent Savoir sur Meta Ads
            </h2>
            <p className={styles.sectionDesc}>
              Des réponses claires et sans détour pour faire de la publicité Facebook le premier moteur de croissance de votre entreprise.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>
                  <HelpCircle size={18} className={styles.faqQuestionIcon} />
                  <span>{faq.question}</span>
                </h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION: CTA FINAL D'AUTORITÉ === */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              Prêt à Déployer des Campagnes Publicitaires Rentables ?
            </h2>
            <p className={styles.ctaDesc}>
              Échangez directement avec <strong>Monsieur SAKO BAROU BEN OUMAR</strong> et notre équipe de media buyers seniors. Nous auditons vos campagnes actuelles et concevons votre plan d’acquisition sur-mesure sous 24 heures.
            </p>
            <div className={styles.ctaActions}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <PhoneCall size={18} />
                Ligne Directe WhatsApp : +226 74 82 66 66
              </a>
              <Link href={'/devis' as any} className={styles.btnSecondary}>
                Solliciter un Audit & Devis
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
