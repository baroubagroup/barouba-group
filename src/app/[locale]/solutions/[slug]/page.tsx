import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Script from 'next/script';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  MapPin, 
  HelpCircle, 
  ShieldCheck, 
  PhoneCall,
  DollarSign,
  Layers,
  ChevronRight
} from 'lucide-react';
import { 
  getB2bComboBySlug, 
  B2bSector 
} from '@/lib/solutionsData';
import { TERRITORY_CITIES } from '@/lib/territoriesData';
import styles from './solutionDetail.module.css';

export const dynamic = 'force-dynamic';

interface SolutionPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const combo = getB2bComboBySlug(slug);

  if (!combo) {
    return {
      title: 'Solution Introuvable | BAROUBA GROUP',
      description: 'La solution demandée est introuvable sur le portail BAROUBA GROUP.',
    };
  }

  const { sector, city, country, type } = combo;
  const locationName = city ? city.name : country.name;
  const countryName = country.name;

  const rawTitle = type === 'solution' 
    ? sector.solutionMetaTitle.replace('{city}', locationName).replace('{country}', countryName)
    : sector.priceMetaTitle.replace('{city}', locationName).replace('{country}', countryName);

  const rawDesc = type === 'solution'
    ? sector.solutionHeroSubtitle.replace('{city}', locationName)
    : sector.priceHeroSubtitle.replace('{city}', locationName);

  const canonicalUrl = `https://www.baroubagroup.com/solutions/${slug}`;

  return {
    title: `${rawTitle} | BAROUBA GROUP`,
    description: rawDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${rawTitle} | BAROUBA GROUP`,
      description: rawDesc,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const combo = getB2bComboBySlug(slug);
  if (!combo) {
    notFound();
  }

  const { sector, city, country, type } = combo;
  const locationName = city ? city.name : country.name;
  const countryName = country.name;

  // Substitute location variables
  const heroTitle = type === 'solution'
    ? sector.solutionHeroTitle.replace('{city}', locationName)
    : sector.priceHeroTitle.replace('{city}', locationName);

  const heroSubtitle = type === 'solution'
    ? sector.solutionHeroSubtitle.replace('{city}', locationName)
    : sector.priceHeroSubtitle.replace('{city}', locationName);

  // Cross-link to other side of the duo (Solution <-> Price)
  const locationSlug = city ? city.slug : country.slug;
  const counterpartSlug = type === 'solution'
    ? `${sector.priceSlugPrefix}-${locationSlug}`
    : `${sector.solutionSlugPrefix}-${locationSlug}`;
  
  const counterpartLabel = type === 'solution'
    ? `Consulter la grille de prix & estimation pour ${locationName}`
    : `Découvrir les spécifications & livrables de la solution pour ${locationName}`;

  // WhatsApp Contact Direct Link
  const whatsappMsg = encodeURIComponent(
    `Bonjour BAROUBA GROUP, je souhaite un échange concernant votre offre pour ${sector.name} à ${locationName} (${slug}).`
  );
  const whatsappUrl = `https://wa.me/22674826666?text=${whatsappMsg}`;

  // Schema.org Structured Data
  const canonicalUrl = `https://www.baroubagroup.com/solutions/${slug}`;
  
  const faqItems = type === 'solution' ? sector.solutionFaq : sector.priceFaq;
  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question.replace('{city}', locationName),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace('{city}', locationName),
      },
    })),
  };

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: heroTitle,
    description: heroSubtitle,
    provider: {
      '@type': 'Organization',
      name: 'BAROUBA GROUP',
      url: 'https://www.baroubagroup.com',
      logo: 'https://www.baroubagroup.com/logo-or.svg',
      telephone: '+226 74 82 66 66',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bobo-Dioulasso',
        addressCountry: 'BF',
      },
    },
    areaServed: {
      '@type': 'Place',
      name: `${locationName}, ${countryName}`,
    },
    serviceType: sector.name,
  };

  // Top 10 Major Cities for internal mesh
  const priorityCities = ['bobo-dioulasso', 'ouagadougou', 'abidjan', 'bouake', 'bamako', 'dakar', 'douala', 'kinshasa', 'lome', 'cotonou', 'niamey', 'paris'];
  const meshCities = TERRITORY_CITIES.filter(c => priorityCities.includes(c.slug) && c.slug !== (city?.slug || ''));

  return (
    <div className={styles.page}>
      <Script
        id="schema-solutions-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-solutions-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />

      {/* === HERO SECTION === */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className={styles.separator}>/</span>
            <Link href="/solutions">Solutions B2B</Link>
            <span className={styles.separator}>/</span>
            <span>{sector.name}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.currentCrumb}>{locationName}</span>
          </nav>

          {/* Badge */}
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>{sector.badge} • {type === 'solution' ? 'Solution Clé en Main' : 'Estimation & Devis Sur-Mesure'}</span>
          </div>

          {/* H1 */}
          <h1 className={styles.heroTitle}>
            {type === 'solution' ? (
              <>
                {heroTitle.split(locationName)[0]}
                <span className={styles.highlight}>{locationName}</span>
                {heroTitle.split(locationName)[1] || ''}
              </>
            ) : (
              <>
                {heroTitle.split(locationName)[0]}
                <span className={styles.highlight}>{locationName}</span>
                {heroTitle.split(locationName)[1] || ''}
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>{heroSubtitle}</p>

          {/* CTA Buttons */}
          <div className={styles.ctaGroup}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primaryCta}
            >
              <PhoneCall size={18} />
              <span>Demander mon Audit Gratuit & Devis</span>
            </a>
            <Link 
              href={`/solutions/${counterpartSlug}` as any} 
              className={styles.secondaryCta}
            >
              <span>{type === 'solution' ? 'Voir la Grille des Prix' : 'Découvrir la Solution Métier'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Trust Bar */}
          <div className={styles.trustBar}>
            <span className={styles.trustItem}>
              <CheckCircle2 size={15} className={styles.trustDot} />
              <span>Audit préalable 100% sans engagement</span>
            </span>
            <span className={styles.trustItem}>
              <CheckCircle2 size={15} className={styles.trustDot} />
              <span>Conception sur-mesure Next.js 16</span>
            </span>
            <span className={styles.trustItem}>
              <CheckCircle2 size={15} className={styles.trustDot} />
              <span>Paiement Mobile Money & Vercel Edge</span>
            </span>
            <span className={styles.trustItem}>
              <CheckCircle2 size={15} className={styles.trustDot} />
              <span>Garantie d&apos;assistance 90 jours</span>
            </span>
          </div>
        </div>
      </section>

      {/* === SECTION 02: DÉFIS & PROBLÉMATIQUES MÉTIERS === */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Diagnostic Économique</div>
            <h2 className={styles.sectionTitle}>
              Les Enjeux du Secteur à <span className={styles.highlight}>{locationName}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Pourquoi les solutions génériques et les templates amateurs échouent face aux réalités commerciales de votre industrie.
            </p>
          </div>

          <div className={styles.challengesGrid}>
            {sector.solutionChallenges.map((challenge, idx) => (
              <div key={idx} className={styles.challengeCard}>
                <div className={styles.challengeNumber}>0{idx + 1}</div>
                <p className={styles.challengeText}>{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 03: LIVRABLES OU GRILLE TARIFAIRE === */}
      {type === 'solution' ? (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>Ingénierie & Fonctionnalités</div>
              <h2 className={styles.sectionTitle}>
                Ce que Comprend Notre Accompagnement Sur-Mesure
              </h2>
              <p className={styles.sectionSubtitle}>
                Chaque module est conçu pour générer des gains d&apos;efficacité et accélérer votre chiffre d&apos;affaires à {locationName}.
              </p>
            </div>

            <div className={styles.deliverablesGrid}>
              {sector.solutionDeliverables.map((item, idx) => (
                <div key={idx} className={styles.deliverableCard}>
                  <div className={styles.deliverableIcon}>
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className={styles.deliverableTitle}>{item.title}</h3>
                  <p className={styles.deliverableDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>Transparence & Estimations</div>
              <h2 className={styles.sectionTitle}>
                Grille des Prix Estimative du Marché ({country.currency})
              </h2>
              <p className={styles.sectionSubtitle}>
                Repères réels des coûts pratiqués sur le marché et positionnement de BAROUBA GROUP pour maximiser votre retour sur investissement.
              </p>
            </div>

            <div className={styles.pricingGrid}>
              {sector.marketPriceRanges.map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.pricingCard} ${tier.isRecommended ? styles.pricingCardFeatured : ''}`}
                >
                  {tier.isRecommended && (
                    <div className={styles.tierRibbon}>Formule Recommandée</div>
                  )}
                  <h3 className={styles.tierName}>{tier.tier}</h3>
                  <div className={styles.tierPrice}>{tier.range}</div>
                  <p className={styles.tierDesc}>{tier.desc}</p>
                  {tier.isRecommended ? (
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryCta}>
                      <span>Demander un Devis Sur-Mesure</span>
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <span className={styles.anchorBadge}>Offre du marché informel</span>
                  )}
                </div>
              ))}
            </div>

            {/* Factors of variation */}
            <div className={styles.factorsBox}>
              <h3 className={styles.factorsTitle}>Les 4 Facteurs qui Font Varier le Coût de Votre Projet :</h3>
              <ul className={styles.factorsList}>
                {sector.priceCostFactors.map((factor, idx) => (
                  <li key={idx} className={styles.factorItem}>
                    <CheckCircle2 size={18} className={styles.factorCheck} />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* === SECTION 04: ANCRAGE LOCAL DE LA VILLE === */}
      {city && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.localContextCard}>
              <h3 className={styles.localContextTitle}>
                Déploiement Stratégique dans l&apos;Écosystème de {city.name} ({country.name})
              </h3>
              <p className={styles.localContextText}>
                À <strong>{city.name}</strong>, pôle économique régional majeur ({city.population || 'métropole en pleine expansion'}), 
                les entreprises du secteur <strong>{sector.name}</strong> doivent digitaliser leurs opérations pour capter une clientèle connectée et exigeante. 
                {city.economicDossier.slice(0, 220)}...
              </p>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  Pôles & Quartiers Stratégiques Couverts :
                </div>
                <div className={styles.localAnchorsList}>
                  {city.localAnchors.map((anchor, idx) => (
                    <span key={idx} className={styles.anchorBadge}>{anchor}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cross-Link Banner between Solution and Price */}
            <div className={styles.crossLinkBanner}>
              <div className={styles.crossLinkText}>
                <h4 className={styles.crossLinkTitle}>
                  {type === 'solution' ? 'Besoin d\'un chiffrage budgétaire pour votre projet ?' : 'Besoin d\'explorer toutes les fonctionnalités incluses ?'}
                </h4>
                <p className={styles.crossLinkDesc}>
                  {type === 'solution' 
                    ? `Consultez notre analyse tarifaire transparente pour ${sector.name} à ${locationName}.` 
                    : `Découvrez la présentation technique détaillée de notre solution pour ${locationName}.`}
                </p>
              </div>
              <Link href={`/solutions/${counterpartSlug}` as any} className={styles.primaryCta}>
                <span>{type === 'solution' ? 'Voir la Grille des Prix' : 'Explorer la Solution Métier'}</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* === SECTION 05: FAQ STRUCTURÉE SCHEMA.ORG === */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Questions Fréquentes</div>
            <h2 className={styles.sectionTitle}>
              Foire Aux Questions — {sector.name} à {locationName}
            </h2>
            <p className={styles.sectionSubtitle}>
              Réponses claires et directes de nos ingénieurs sur les délais, les modalités techniques et notre accompagnement.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqItems.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  <HelpCircle size={18} className={styles.faqQuestionDot} />
                  <span>{faq.question.replace('{city}', locationName)}</span>
                </h3>
                <p className={styles.faqAnswer}>{faq.answer.replace('{city}', locationName)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 06: MAILLAGE INTERNE VILLES === */}
      <section className={styles.citiesMeshSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <span className={styles.sectionTag}>Couverture Sous-Régionale & Internationale</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '0.4rem', color: 'var(--text-primary)' }}>
              Découvrez cette expertise {sector.name} dans les Autres Métropoles
            </h3>
          </div>

          <div className={styles.citiesGrid}>
            {meshCities.map(c => {
              const otherSlug = type === 'solution' 
                ? `${sector.solutionSlugPrefix}-${c.slug}`
                : `${sector.priceSlugPrefix}-${c.slug}`;
              return (
                <Link 
                  key={c.slug} 
                  href={`/solutions/${otherSlug}` as any}
                  className={styles.cityMeshLink}
                >
                  <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                  <span>{c.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
