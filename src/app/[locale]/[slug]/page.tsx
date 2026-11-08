import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Script from 'next/script';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  MapPin, 
  HelpCircle, 
  ShieldCheck, 
  PhoneCall,
  DollarSign,
  ChevronRight,
  Building2,
  BookOpen
} from 'lucide-react';
import { getStrategicGuideForSlug } from '@/lib/strategicGuidesData';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import TerritoryServiceIcon from '@/components/v2/TerritoryServiceIcon';
import { getB2bComboBySlug, B2B_SECTORS } from '@/lib/solutionsData';
import { 
  getFlatMetierComboBySlug, 
  FLAT_METIERS 
} from '@/lib/flatPseoData';
import { TERRITORY_CITIES } from '@/lib/territoriesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './flatPage.module.css';

export const dynamic = 'force-dynamic';

interface FlatPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}


function formatHeroTitle(title: string) {
  if (title.includes(' : ')) {
    const [main, ...sub] = title.split(' : ');
    return (
      <>
        <span>{main}</span>
        <span className={styles.heroTitleAccent}> : {sub.join(' : ')}</span>
      </>
    );
  }
  if (title.includes(':')) {
    const [main, ...sub] = title.split(':');
    return (
      <>
        <span>{main}</span>
        <span className={styles.heroTitleAccent}> : {sub.join(':')}</span>
      </>
    );
  }
  return title;
}

export async function generateMetadata({ params }: FlatPageProps): Promise<Metadata> {
  const { slug } = await params;

  // Case 1: Transversal Métier / Formation (e.g. media-buyer-abidjan, formation-abidjan)
  const metier = getFlatMetierComboBySlug(slug);
  if (metier) {
    const loc = metier.locationName;
    const country = metier.country.name;
    const cleanTitle = (metier.customTitle || `${metier.template.shortTitle} à ${loc} (${country}) | BAROUBA GROUP`).slice(0, 65);
    const cleanDesc = (metier.customDescription || metier.template.hook.replace(/\{location\}/g, `${loc} (${country})`)).slice(0, 158);

    return {
      title: cleanTitle,
      description: cleanDesc,
      alternates: {
        canonical: `https://www.baroubagroup.com/${slug}`,
      },
      openGraph: {
        title: cleanTitle,
        description: cleanDesc,
        url: `https://www.baroubagroup.com/${slug}`,
        siteName: 'BAROUBA GROUP',
        locale: 'fr_FR',
        type: 'website',
      },
    };
  }

  // Case 2: B2B Sector Solution or Pricing (e.g. site-web-pour-agence-de-voyage-abidjan)
  const b2b = getB2bComboBySlug(slug);
  if (b2b) {
    const { sector, city, country, type } = b2b;
    const loc = city ? city.name : country.name;
    const countryName = country.name;

    const rawTitle = type === 'solution' 
      ? sector.solutionMetaTitle.replace(/\{city\}/g, loc).replace(/\{country\}/g, countryName)
      : sector.priceMetaTitle.replace(/\{city\}/g, loc).replace(/\{country\}/g, countryName);

    const rawDesc = type === 'solution'
      ? sector.solutionHeroSubtitle.replace(/\{city\}/g, loc)
      : sector.priceHeroSubtitle.replace(/\{city\}/g, loc);

    const cleanTitle = `${rawTitle.slice(0, 52)} | BAROUBA`.slice(0, 65);
    const cleanDesc = rawDesc.slice(0, 155);

    return {
      title: cleanTitle,
      description: cleanDesc,
      alternates: {
        canonical: `https://www.baroubagroup.com/${slug}`,
      },
      openGraph: {
        title: cleanTitle,
        description: cleanDesc,
        url: `https://www.baroubagroup.com/${slug}`,
        siteName: 'BAROUBA GROUP',
        locale: 'fr_FR',
        type: 'website',
      },
    };
  }

  return {};
}

export default async function FlatPseoPage({ params }: FlatPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const metierCombo = getFlatMetierComboBySlug(slug);
  const b2bCombo = getB2bComboBySlug(slug);

  if (!metierCombo && !b2bCombo) {
    notFound();
  }

  // ==========================================
  // RENDER CASE 1: TRANSVERSAL MÉTIER / FORMATION
  // ==========================================
  if (metierCombo) {
    const { template, city, country, locationName } = metierCombo;
    const strategicGuide = getStrategicGuideForSlug(slug);
    const h1Text = (metierCombo.customH1 || template.h1).replace(/\{location\}/g, locationName);
    const hookText = template.hook.replace(/\{location\}/g, locationName);
    const descText = template.description.replace(/\{location\}/g, locationName);
    const canonicalUrl = `https://www.baroubagroup.com/${slug}`;

    const whatsappMsg = `Bonjour Monsieur Sako, je vous contacte depuis ${locationName} (${country.name}) concernant votre expertise en ${template.shortTitle}. Pouvons-nous échanger sur mon projet ?`;

    const schemaOrg = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: `${template.name} à ${locationName}`,
          description: descText,
          serviceType: template.shortTitle,
          provider: {
            '@type': 'Organization',
            name: 'BAROUBA GROUP',
            url: 'https://www.baroubagroup.com',
            telephone: '+22674826666',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bobo-Dioulasso',
              addressCountry: 'BF',
            },
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: locationName,
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: template.faq.map((f) => ({
            '@type': 'Question',
            name: f.question.replace(/\{location\}/g, locationName),
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer.replace(/\{location\}/g, locationName),
            },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://www.baroubagroup.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: country.name,
              item: `https://www.baroubagroup.com/territoires/${country.slug}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: locationName,
              item: `https://www.baroubagroup.com/territoires/${country.slug}/${city?.slug || ''}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: template.shortTitle,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    const otherMetiers = FLAT_METIERS.filter((m) => m.prefix !== template.prefix).slice(0, 6);

    return (
      <div className={styles.pageWrapper}>
        <Script
          id="schema-flat-metier"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        {/* 01 // HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className="container">
            <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <ChevronRight size={14} />
              <Link href={`/territoires/${country.slug}` as any}>{country.name}</Link>
              <ChevronRight size={14} />
              {city && (
                <>
                  <Link href={`/territoires/${country.slug}/${city.slug}` as any}>{city.name}</Link>
                  <ChevronRight size={14} />
                </>
              )}
              <span className={styles.breadcrumbCurrent}>{template.shortTitle}</span>
            </nav>

            <div className={styles.heroBadge}>
              <TerritoryServiceIcon iconType={template.iconType} size={16} />
              <span>{template.badge} • {city ? `${city.name}, ${country.name}` : country.name}</span>
            </div>

            <h1 className={styles.heroTitle}>{formatHeroTitle(h1Text)}</h1>
            <p className={styles.heroSubtitle}>{hookText}</p>

            <div className={styles.heroActions}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCtaPrimary}
              >
                <PhoneCall size={18} />
                <span>Échanger avec Monsieur Sako sur WhatsApp</span>
              </a>
              <Link href="/devis" className={styles.heroCtaSecondary}>
                <Clock size={18} />
                <span>Demander un Devis Gratuit</span>
              </Link>
            </div>
          </div>
        </section>

        <AfricanPatternRibbon />

        {/* 02 // ANALYSE LOCALE & PROPOSITION DE VALEUR */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Expertise de Pointe</span>
              <h2 className={styles.sectionTitle}>
                Pourquoi ce Pôle est Déterminant pour les Entreprises de <span className={styles.highlight}>{locationName}</span>
              </h2>
              <p className={styles.sectionSubtitle}>{descText}</p>
            </div>

            {city && (
              <div style={{ marginTop: '2.5rem' }}>
                <div className={styles.territoryDossierCard}>
                  <span className={styles.territoryStatusBadge}>{city.status} • {city.population}</span>
                  <h3 className={styles.territoryDossierTitle}>Cœur Battant & Écosystème Économique à {city.name}</h3>
                  <p className={styles.territoryDossierText}>{city.economicDossier}</p>
                  <p className={styles.territoryDossierText}>{city.historyAndGeo}</p>

                  <div className={styles.challengesGrid} style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className={styles.challengeCard}>
                      <div className={styles.challengeIconWrap}>
                        <Building2 size={24} color="var(--color-gold)" />
                      </div>
                      <h4 className={styles.challengeTitle}>Enjeux Numériques & Marché Local</h4>
                      <p className={styles.challengeDesc}>{city.digitalChallenges}</p>
                    </div>
                    <div className={styles.challengeCard}>
                      <div className={styles.challengeIconWrap}>
                        <MapPin size={24} color="var(--color-gold)" />
                      </div>
                      <h4 className={styles.challengeTitle}>Pôles Stratégiques & Quartiers Cibles</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.8rem' }}>
                        {city.localAnchors.map((anchor, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.8rem',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '6px',
                              background: 'rgba(245, 166, 35, 0.1)',
                              border: '1px solid rgba(245, 166, 35, 0.25)',
                              color: 'var(--color-gold)',
                            }}
                          >
                            {anchor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.territoryPillarsGrid}>
                    <div className={styles.territoryPillarCard}>
                      <div className={styles.territoryPillarNum}>Axe Stratégique 01</div>
                      <h4 className={styles.territoryPillarTitle}>Ciblage d’Audience Territorial</h4>
                      <p className={styles.territoryPillarDesc}>
                        Paramétrage géographique précis sur {city.name} et ses axes de transit pour toucher les décideurs et acheteurs locaux sans dispersion budgétaire.
                      </p>
                    </div>
                    <div className={styles.territoryPillarCard}>
                      <div className={styles.territoryPillarNum}>Axe Stratégique 02</div>
                      <h4 className={styles.territoryPillarTitle}>Parcours Mobile & WhatsApp</h4>
                      <p className={styles.territoryPillarDesc}>
                        Tunnels directs vers WhatsApp avec intégration des paiements Mobile Money locaux (Orange Money, Moov Money) pour convertir immédiatement.
                      </p>
                    </div>
                    <div className={styles.territoryPillarCard}>
                      <div className={styles.territoryPillarNum}>Axe Stratégique 03</div>
                      <h4 className={styles.territoryPillarTitle}>Gouvernance & Cadrage Contractuel</h4>
                      <p className={styles.territoryPillarDesc}>
                        Chaque campagne pour les entreprises de {city.name} est encadrée par un contrat SARL officiel avec engagement de suivi hebdomadaire et garantie de résultat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 02.B // GUIDE STRATÉGIQUE & DÉCRYPTAGE TERRAIN */}
        {strategicGuide && (
          <section className={styles.strategicGuideSection}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>{strategicGuide.badge}</span>
                <h2 className={styles.sectionTitle}>
                  Guide Stratégique : <span className={styles.highlight}>{strategicGuide.title}</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  {strategicGuide.subtitle}
                </p>
              </div>

              {/* Synthèse Exécutive */}
              <div className={styles.guideExecutiveCard}>
                <div className={styles.guideExecutiveHeader}>
                  <BookOpen size={18} />
                  <span>Synthèse Stratégique & Cadrage Opérationnel</span>
                </div>
                <p className={styles.guideExecutiveText}>
                  {strategicGuide.executiveSummary}
                </p>
              </div>

              {/* Indicateurs Clés de Performance */}
              <div className={styles.guideMetricsGrid}>
                {strategicGuide.keyMetrics.map((metric, idx) => (
                  <div key={idx} className={styles.guideMetricCard}>
                    <div className={styles.guideMetricValue}>{metric.value}</div>
                    <div className={styles.guideMetricLabel}>{metric.label}</div>
                    <div className={styles.guideMetricDesc}>{metric.desc}</div>
                  </div>
                ))}
              </div>

              {/* Chapitres Détaillés */}
              <div className={styles.guideChaptersList}>
                {strategicGuide.chapters.map((chap, idx) => (
                  <div key={idx} className={styles.guideChapterItem}>
                    <h3 className={styles.guideChapterTitle}>
                      <span className={styles.highlight}>{chap.title}</span>
                    </h3>
                    {chap.content.map((para, pIdx) => (
                      <p key={pIdx} className={styles.guideParagraph}>{para}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Checklist Opérationnelle */}
              <div className={styles.guideChecklistCard}>
                <div className={styles.guideChecklistTitle}>
                  <CheckCircle2 size={20} color="#10B981" />
                  <span>Protocole d’Exécution & Checklist Terrain</span>
                </div>
                <div className={styles.guideChecklistGrid}>
                  {strategicGuide.checklist.map((item, idx) => (
                    <div key={idx} className={styles.guideChecklistItem}>
                      <span style={{ color: '#10B981', fontWeight: 'bold', marginRight: '6px' }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 03 // LIVRABLES CONCRETS */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Périmètre d&apos;Intervention</span>
              <h2 className={styles.sectionTitle}>
                Nos 4 Livrables Majeurs pour <span className={styles.highlight}>{locationName}</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Chaque étape est contractuellement cadrée pour garantir un retour sur investissement tangible et mesurable.
              </p>
            </div>

            <div className={styles.deliverablesGrid}>
              {template.deliverables.map((deliv, idx) => (
                <div key={idx} className={styles.deliverableCard}>
                  <div className={styles.deliverableNum}>0{idx + 1}</div>
                  <h3 className={styles.deliverableTitle}>{deliv.title.replace(/\{location\}/g, locationName)}</h3>
                  <p className={styles.deliverableDesc}>{deliv.desc.replace(/\{location\}/g, locationName)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 // AVANTAGES & ENGAGEMENTS CONTRACTUELS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Garanties Élite</span>
              <h2 className={styles.sectionTitle}>
                Pourquoi Choisir <span className={styles.highlight}>BAROUBA GROUP</span>
              </h2>
            </div>

            <div className={styles.challengesGrid}>
              {template.benefits.map((benefit, idx) => (
                <div key={idx} className={styles.challengeCard}>
                  <div className={styles.challengeIconWrap}>
                    <CheckCircle2 size={24} color="#10B981" />
                  </div>
                  <h3 className={styles.challengeTitle}>Garantie 0{idx + 1}</h3>
                  <p className={styles.challengeDesc}>{benefit.replace(/\{location\}/g, locationName)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 // FAQ SCHEMA.ORG */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Transparence & Cadrage</span>
              <h2 className={styles.sectionTitle}>
                Questions Fréquentes à <span className={styles.highlight}>{locationName}</span>
              </h2>
            </div>

            <div className={styles.faqGrid}>
              {template.faq.map((item, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <div className={styles.faqQuestion}>
                    <span className={styles.faqQuestionDot} />
                    <h3>{item.question.replace(/\{location\}/g, locationName)}</h3>
                  </div>
                  <p className={styles.faqAnswer}>
                    {item.answer.replace(/\{location\}/g, locationName)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 // AUTRES EXPERTISES DISPONIBLES À CETTE VILLE */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Réseau de Compétences</span>
              <h2 className={styles.sectionTitle}>
                Autres Pôles & Formations à <span className={styles.highlight}>{locationName}</span>
              </h2>
            </div>

            <div className={styles.deliverablesGrid}>
              {otherMetiers.map((other) => {
                const otherSlug = city ? `${other.prefix}-${city.slug}` : `${other.prefix}-${country.slug}`;
                return (
                  <div key={other.prefix} className={styles.deliverableCard}>
                    <div className={styles.deliverableNum}>
                      <TerritoryServiceIcon iconType={other.iconType} size={22} />
                    </div>
                    <h3 className={styles.deliverableTitle}>{other.shortTitle}</h3>
                    <p className={styles.deliverableDesc}>
                      {other.hook.replace(/\{location\}/g, locationName).slice(0, 110)}...
                    </p>
                    <Link
                      href={`/${otherSlug}` as any}
                      className={styles.heroCtaSecondary}
                      style={{ marginTop: '1rem', display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                      <span>Consulter à {locationName}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 07 // SOLUTIONS B2B SECTORIELLES */}
        {city && (
          <section className={`${styles.section} ${styles.sectionDark}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Ingénierie B2B Sectorielle</span>
                <h2 className={styles.sectionTitle}>
                  Solutions & Logiciels Métiers par Secteur à <span className={styles.highlight}>{city.name}</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Découvrez nos architectures sur-mesure pour les 15 grands secteurs d&apos;activité de {city.name}.
                </p>
              </div>

              <div className={styles.deliverablesGrid}>
                {B2B_SECTORS.slice(0, 6).map((sector) => (
                  <div key={sector.id} className={styles.deliverableCard}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600 }}>{sector.badge}</span>
                    <h3 className={styles.deliverableTitle} style={{ marginTop: '0.35rem' }}>{sector.name}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                      <Link
                        href={`/${sector.solutionSlugPrefix}-${city.slug}` as any}
                        style={{ color: 'var(--color-gold)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <span>Solution sur-mesure</span>
                        <ArrowRight size={12} />
                      </Link>
                      <Link
                        href={`/${sector.priceSlugPrefix}-${city.slug}` as any}
                        style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <span>Estimation du tarif</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 08 // CTA FINAL */}
        <div className="container" style={{ margin: '3rem auto 5rem' }}>
          <div className={styles.ctaBox} style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))', border: '1px solid rgba(245, 166, 35, 0.3)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
            <h2 className={styles.heroTitle} style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              Lancez Votre Projet à <span className={styles.highlight}>{locationName}</span>
            </h2>
            <p className={styles.heroSubtitle} style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
              Contactez directement Monsieur Sako Barou Ben Oumar. Diagnostic stratégique, analyse sans engagement et devis contractuel sous 24 à 48h ouvrées.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCtaPrimary}
              >
                <PhoneCall size={18} />
                <span>Échanger sur WhatsApp VIP</span>
              </a>
              <Link href="/devis" className={styles.heroCtaSecondary}>
                <Clock size={18} />
                <span>Demander un Devis en Ligne</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER CASE 2: B2B SECTOR SOLUTION / PRICING
  // ==========================================
  const { sector, city, country, type } = b2bCombo!;
  const locationName = city ? city.name : country.name;
  const countryName = country.name;
  const currency = country.currency;

  const isSolution = type === 'solution';
  const heroTitle = isSolution
    ? sector.solutionHeroTitle.replace(/\{city\}/g, locationName)
    : sector.priceHeroTitle.replace(/\{city\}/g, locationName);
  const heroSubtitle = isSolution
    ? sector.solutionHeroSubtitle.replace(/\{city\}/g, locationName)
    : sector.priceHeroSubtitle.replace(/\{city\}/g, locationName);

  const locationSlug = city ? city.slug : country.slug;
  const counterpartSlug = isSolution
    ? `${sector.priceSlugPrefix}-${locationSlug}`
    : `${sector.solutionSlugPrefix}-${locationSlug}`;

  const whatsappMessage = `Bonjour Monsieur Sako, je vous contacte depuis ${locationName} (${countryName}) pour échanger sur le projet : ${heroTitle}.`;

  const canonicalUrl = `https://www.baroubagroup.com/${slug}`;

  const faqItems = isSolution ? sector.solutionFaq : sector.priceFaq;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': isSolution ? 'Service' : 'PriceSpecification',
        '@id': `${canonicalUrl}#service`,
        name: heroTitle,
        description: heroSubtitle,
        provider: {
          '@type': 'Organization',
          name: 'BAROUBA GROUP',
          url: 'https://www.baroubagroup.com',
          telephone: '+22674826666',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: locationName,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.question.replace(/\{city\}/g, locationName),
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer.replace(/\{city\}/g, locationName),
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://www.baroubagroup.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: sector.name,
            item: `https://www.baroubagroup.com/${sector.solutionSlugPrefix}-abidjan`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: locationName,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  const otherCities = (city ? TERRITORY_CITIES.filter((c) => c.countrySlug === city.countrySlug && c.slug !== city.slug) : TERRITORY_CITIES).slice(0, 6);

  return (
    <div className={styles.pageWrapper}>
      <Script
        id="schema-b2b"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 01 // HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/solutions">Solutions B2B</Link>
            <ChevronRight size={14} />
            <span className={styles.breadcrumbCurrent}>{locationName}</span>
          </nav>

          <div className={styles.heroBadge}>
            <MapPin size={16} />
            <span>{sector.badge} • {city ? `${city.name}, ${countryName}` : countryName}</span>
          </div>

          <h1 className={styles.heroTitle}>{formatHeroTitle(heroTitle)}</h1>
          <p className={styles.heroSubtitle}>{heroSubtitle}</p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaPrimary}
            >
              <PhoneCall size={18} />
              <span>Contacter la Direction sur WhatsApp</span>
            </a>
            <Link href="/devis" className={styles.heroCtaSecondary}>
              <Clock size={18} />
              <span>Demander un Cadrage Projet</span>
            </Link>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* BANDEAU DE RENVOI VERS LE DUO SOLUTION / PRIX */}
      <div className="container">
        <div className={styles.crossLinkBanner}>
          <div className={styles.crossLinkInfo}>
            <span className={styles.crossLinkTag}>
              {isSolution ? 'Tarifs & Devis' : 'Détail Technique'}
            </span>
            <p className={styles.crossLinkText}>
              {isSolution
                ? `Vous souhaitez estimer le coût de cette solution pour votre entreprise à ${locationName} ?`
                : `Découvrez la présentation technique complète et les livrables de notre solution à ${locationName}.`}
            </p>
          </div>
          <Link href={`/${counterpartSlug}` as any} className={styles.crossLinkButton}>
            <span>{isSolution ? 'Consulter les Tarifs' : 'Voir la Solution Métier'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* 02 // DÉFIS & LIVRABLES */}
      {isSolution ? (
        <>
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Diagnostic Terrain</span>
                <h2 className={styles.sectionTitle}>
                  Les Défis Majeurs des {sector.name} à <span className={styles.highlight}>{locationName}</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Une architecture digitale performante doit résoudre les blocages réels rencontrés au quotidien à {locationName}.
                </p>
              </div>

              <div className={styles.challengesGrid}>
                {sector.solutionChallenges.map((challenge, idx) => (
                  <div key={idx} className={styles.challengeCard}>
                    <div className={styles.challengeIconWrap}>
                      <ShieldCheck size={24} color="var(--color-gold)" />
                    </div>
                    <h3 className={styles.challengeTitle}>Point de Friction 0{idx + 1}</h3>
                    <p className={styles.challengeDesc}>{challenge.replace(/\{city\}/g, locationName)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.sectionDark}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Livrables Clés en Main</span>
                <h2 className={styles.sectionTitle}>
                  Ce que nous Déployons pour Votre Établissement à <span className={styles.highlight}>{locationName}</span>
                </h2>
              </div>

              <div className={styles.deliverablesGrid}>
                {sector.solutionDeliverables.map((deliv, idx) => (
                  <div key={idx} className={styles.deliverableCard}>
                    <div className={styles.deliverableNum}>0{idx + 1}</div>
                    <h3 className={styles.deliverableTitle}>{deliv.title.replace(/\{city\}/g, locationName)}</h3>
                    <p className={styles.deliverableDesc}>{deliv.desc.replace(/\{city\}/g, locationName)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Grille Tarifaire Indicative</span>
                <h2 className={styles.sectionTitle}>
                  Fourchettes de Budget pour {sector.name} à <span className={styles.highlight}>{locationName}</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Tarifs indicatifs du marché en {currency}. Chaque projet fait l&apos;objet d&apos;un audit préalable pour une proposition 100% sur-mesure.
                </p>
              </div>

              <div className={styles.pricingGrid}>
                {sector.marketPriceRanges.map((tier, idx) => (
                  <div key={idx} className={`${styles.pricingCard} ${tier.isRecommended ? styles.pricingCardFeatured : ''}`}>
                    {tier.isRecommended && <div className={styles.tierRibbon}>Le Plus Demandé</div>}
                    <h3 className={styles.tierName}>{tier.tier}</h3>
                    <div className={styles.tierRange}>{tier.range}</div>
                    <p className={styles.tierFor}>{tier.desc.replace(/\{city\}/g, locationName)}</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je souhaite un devis pour le niveau ${tier.tier} à ${locationName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tier.isRecommended ? styles.heroCtaPrimary : styles.heroCtaSecondary}
                      style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}
                    >
                      <span>Sélectionner cette formule</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.sectionDark}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Facteurs de Coût</span>
                <h2 className={styles.sectionTitle}>
                  Ce qui Fait Varier le Budget d&apos;un Projet à <span className={styles.highlight}>{locationName}</span>
                </h2>
              </div>

              <div className={styles.factorsList}>
                {sector.priceCostFactors.map((factor, idx) => (
                  <div key={idx} className={styles.factorItem}>
                    <DollarSign size={20} className={styles.factorIcon} />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 03 // FAQ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Foire Aux Questions</span>
            <h2 className={styles.sectionTitle}>
              Questions Fréquentes — {sector.name} à <span className={styles.highlight}>{locationName}</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqItems.map((item, idx) => (
              <div key={idx} className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <span className={styles.faqQuestionDot} />
                  <h3>{item.question.replace(/\{city\}/g, locationName)}</h3>
                </div>
                <p className={styles.faqAnswer}>{item.answer.replace(/\{city\}/g, locationName)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // MAILLAGE VILLES DU PAYS */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Réseau Territorial</span>
            <h2 className={styles.sectionTitle}>
              Cette Solution dans d&apos;Autres Métropoles du <span className={styles.highlight}>{countryName}</span>
            </h2>
          </div>

          <div className={styles.citiesGrid}>
            {otherCities.map((otherCity) => {
              const otherSlug = isSolution
                ? `${sector.solutionSlugPrefix}-${otherCity.slug}`
                : `${sector.priceSlugPrefix}-${otherCity.slug}`;
              return (
                <Link key={otherCity.slug} href={`/${otherSlug}` as any} className={styles.cityMeshLink}>
                  <MapPin size={16} />
                  <span>{otherCity.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 // CADRAGE DIRECTION */}
      <div className="container" style={{ margin: '3rem auto 5rem' }}>
        <div className={styles.ctaBox} style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))', border: '1px solid rgba(245, 166, 35, 0.3)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
          <h2 className={styles.heroTitle} style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            Prêt à Déployer ce Projet à <span className={styles.highlight}>{locationName}</span> ?
          </h2>
          <p className={styles.heroSubtitle} style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
            Bénéficiez de la puissance technologique de BAROUBA GROUP avec un accompagnement sur-mesure. Cadrage sous 24 à 48 heures ouvrées.
          </p>
          <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaPrimary}
            >
              <PhoneCall size={18} />
              <span>Lancer l&apos;échange WhatsApp</span>
            </a>
            <Link href="/devis" className={styles.heroCtaSecondary}>
              <Clock size={18} />
              <span>Remplir le Devis en Ligne</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
