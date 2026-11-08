'use client';

import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import BaroubaMockup from './BaroubaMockup';
import styles from './InteractiveCards.module.css';

const PILLARS = [
  {
    id: 'comm-digital',
    number: '01',
    badge: 'GESTION DE PAGES 7J/7',
    title: 'Communication Digitale & Community Management',
    subtitle: 'Gestion complète de vos pages réseaux sociaux, animation & image de marque',
    description: 'Nous gérons et animons au quotidien vos pages Facebook, Instagram, TikTok et LinkedIn : création de calendrier éditorial, visuels captivants, Reels percutants, modération des commentaires et gestion active de vos messages privés 7j/7.',
    highlights: [
      'Animation quotidienne, Reels & carrousels percutants',
      'Modération des commentaires & réponses DMs 7j/7',
      'Stratégie de marque, e-réputation & reporting mensuel'
    ],
    mockupType: 'social' as const,
    linkHref: '/services/communication-digitale-community-management',
    linkText: 'Découvrir la gestion de pages & CM'
  },
  {
    id: 'web-dev',
    number: '02',
    badge: 'ARCHITECTURE ULTRA-RAPIDE',
    title: 'Développement Web & Plateformes Métiers Next.js 16',
    subtitle: 'Sites vitrines d’élite, portails cloud & applications sur-mesure',
    description: 'Architecture Next.js 16 et TypeScript sans compromis. Votre plateforme est instantanée (< 0.8s), sécurisée, adaptée au réseau mobile d’Afrique de l’Ouest et conçue pour convertir vos prospects dès la première seconde.',
    highlights: [
      'Temps de chargement < 0.8s garanti sur réseau 4G/3G',
      'Paiements unifiés : Orange Money, Moov Money, LigdiCash & Cartes',
      'Code propriétaire 100% à vous, sans abonnement captif'
    ],
    mockupType: 'dashboard' as const,
    linkHref: '/services/developpement-web-plateformes-nextjs',
    linkText: 'Découvrir l’ingénierie web'
  },
  {
    id: 'growth-ads',
    number: '03',
    badge: 'ROAS & CROISSANCE CHIFFRÉE',
    title: 'Acquisition & Publicité 360° (Meta & TikTok Ads)',
    subtitle: 'Campagnes publicitaires scientifiques pilotées au centime près',
    description: 'Nous concevons vos visuels et vidéos publicitaires à fort hook et pilotons vos budgets sur Meta Ads, TikTok Ads et Google Ads pour maximiser votre ROAS par rapport à chaque franc investi.',
    highlights: [
      'Création des visuels, scripts et formats vidéo à fort hook',
      'Tracking serveur (CAPI) sans déperdition de données',
      'Ciblage géographique chirurgical (Ouagadougou, Bobo, Diaspora)'
    ],
    mockupType: 'commerce' as const,
    linkHref: '/services/acquisition-publicite-meta-tiktok-ads',
    linkText: 'Découvrir nos stratégies publicitaires'
  },
  {
    id: 'funnels-whatsapp',
    number: '04',
    badge: 'TUNNEL HYBRIDE WHATSAPP',
    title: 'Tunnels de Vente & Vente WhatsApp Haute Conversion',
    subtitle: 'Parcours d’achat direct adapté aux mentalités d’Afrique de l’Ouest',
    description: 'Nous combinons la puissance visuelle d’une Landing Page monoproduit ultra-rapide et la réassurance chaleureuse de WhatsApp Business avec des scripts de closing et protocoles anti-refus à la livraison.',
    highlights: [
      'Landing Page monoproduit mobile & formulaire 1-clic',
      'Scripts de vente WhatsApp testés & relances automatiques',
      'Protocoles logistiques pour faire chuter les refus sous 8%'
    ],
    mockupType: 'commerce' as const,
    linkHref: '/services/tunnels-de-vente-whatsapp',
    linkText: 'Découvrir nos tunnels de vente'
  },
  {
    id: 'ai-automation',
    number: '05',
    badge: 'INTELLIGENCE ARTIFICIELLE',
    title: 'Agents IA & Automatisation Métier 24/7',
    subtitle: 'Vos prospects qualifiés et orientés jour et nuit sans délai',
    description: 'Déploiement d’assistants conversationnels intelligents connectés à votre catalogue, votre CRM et l’API officielle de WhatsApp Cloud pour qualifier vos prospects et générer des devis en temps réel.',
    highlights: [
      '80% des demandes courantes traitées sans intervention humaine',
      'Automatisation des stocks, facturation et flux CRM',
      'Transfert intelligent vers vos conseillers humains si besoin'
    ],
    mockupType: 'ai' as const,
    linkHref: '/services/agents-ia-automatisation-metier',
    linkText: 'Découvrir nos solutions IA'
  },
  {
    id: 'academy-formation',
    number: '06',
    badge: 'ACADÉMIE & MENTORAT',
    title: 'Formations & Accompagnement aux Métiers du Numérique',
    subtitle: '« Nous formons et nous accompagnons » vos équipes vers l’autonomie',
    description: 'Programmes certifiants et mentorat pratique en Marketing Digital, E-commerce, Community Management, IA et développement web. Pas de cours magistraux abstraits : un coaching sur vos vrais cas d’entreprises jusqu’au résultat.',
    highlights: [
      'Formations pratiques : Community Management, Marketing, E-com, IA',
      'Coaching sur-mesure d’équipes en entreprise ou en individuel',
      'Certification reconnue BAROUBA ACADEMY & livrables concrets'
    ],
    mockupType: 'academy' as const,
    linkHref: '/services/formations-accompagnement-metiers-du-numerique',
    linkText: 'Découvrir nos formations & coaching'
  },
  {
    id: 'ecommerce-global',
    number: '07',
    badge: 'COMMERCE SAHÉLIEN SCALABLE',
    title: 'E-Commerce & Expansion Sous-Régionale',
    subtitle: 'Boutiques scalables, logistique locale et paiements sécurisés',
    description: 'Déploiement d’écosystèmes marchands multi-devises (FCFA, EUR, USD), gestion centralisée des stocks et intégration avec vos partenaires logistiques locaux pour scaler sans friction.',
    highlights: [
      'Passage en caisse instantané et sécurisé sur smartphone',
      'Gestion synchronisée des stocks et facturation automatique',
      'Partenariats de coursiers et protection contre la fraude'
    ],
    mockupType: 'commerce' as const,
    linkHref: '/services/ecommerce-expansion-sous-regionale',
    linkText: 'Découvrir nos solutions e-commerce'
  },
  {
    id: 'portal-systems',
    number: '08',
    badge: 'SYSTÈMES HAUTE DISPONIBILITÉ',
    title: 'Portails d’Entreprise & Systèmes Critiques',
    subtitle: 'Applications sur mesure à haute disponibilité (99.98%) et zéro panne',
    description: 'Développement de systèmes de formalisation, espaces membres sécurisés et plateformes transactionnelles pour entreprises et institutions exigeant une disponibilité absolue.',
    highlights: [
      'Conformité bancaire et chiffrement des données de bout en bout',
      'Tableaux de bord d’administration avec rôles et permissions granulaires',
      'Haute disponibilité 99.98% avec sauvegardes automatisées'
    ],
    mockupType: 'portal' as const,
    linkHref: '/services/portails-institutionnels-systemes-critiques',
    linkText: 'Découvrir nos systèmes critiques'
  }
];

export default function InteractiveCards() {
  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>CATALOGUE COMPLET DES SERVICES BAROUBA GROUP</span>
          </div>

          <h2 className={styles.title}>
            Toutes nos expertises pour <span className="text-gold-gradient">accélérer vos résultats</span>
          </h2>
          <p className={styles.subtitle}>
            De la gestion quotidienne de vos réseaux sociaux au développement d'applications Next.js 16 et aux formations certifiantes : chaque service est pensé pour faire grandir votre entreprise avec un retour sur investissement chiffré.
          </p>

          <div className={styles.deckScrollHint}>
            <span className={styles.deckHintIcon}>↓</span>
            <span>Faites défiler vers le bas pour superposer nos 8 pôles d’excellence</span>
          </div>
        </div>

        {/* Sticky Stacking Cards Deck (Empilement au Scroll) */}
        <div className={styles.deckContainer}>
          {PILLARS.map((pillar, index) => {
            const isLast = index === PILLARS.length - 1;

            return (
              <div
                key={pillar.id}
                className={`${styles.stackCard} ${isLast ? styles.lastCard : ''}`}
                style={{
                  top: `calc(var(--nav-height, 78px) + ${14 + index * 12}px)`,
                  zIndex: index + 1,
                  '--card-index': index,
                } as React.CSSProperties}
              >
                {/* Physical Card Tab Rim (visible even when cards stack) */}
                <div className={styles.cardTabRim}>
                  <div className={styles.cardTabLeft}>
                    <span className={styles.tabDot} />
                    <span className={styles.tabNumber}>EXPERTISE {pillar.number} / 08</span>
                    <span className={styles.tabDivider}>•</span>
                    <span className={styles.tabBadge}>{pillar.badge}</span>
                  </div>
                  <div className={styles.cardTabRight}>
                    <span className={styles.tabStatus}>BAROUBA SOUVERAIN</span>
                  </div>
                </div>

                <div className={styles.cardMainGrid}>
                  {/* Left Column: Strategic Value & Deliverables */}
                  <div className={styles.cardLeftCol}>
                    <div className={styles.cardHeadingGroup}>
                      <span className={styles.cardIndexBadge}>{pillar.number}</span>
                      <h3 className={styles.cardTitle}>{pillar.title}</h3>
                    </div>

                    <p className={styles.cardSubtitle}>{pillar.subtitle}</p>
                    <p className={styles.cardDescription}>{pillar.description}</p>

                    <div className={styles.highlightsContainer}>
                      <div className={styles.highlightsLabel}>Livrables & Garanties Clés :</div>
                      <div className={styles.highlightsList}>
                        {pillar.highlights.map((item, i) => (
                          <div key={i} className={styles.highlightItem}>
                            <span className={styles.geoMarker}>◆</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.actionRow}>
                      <Link href={pillar.linkHref as any} className={styles.primaryServiceBtn}>
                        <span>{pillar.linkText}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Mockup (Desktop) */}
                  <div className={styles.cardRightCol}>
                    <div className={styles.mockupWrapper}>
                      <BaroubaMockup type={pillar.mockupType} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
