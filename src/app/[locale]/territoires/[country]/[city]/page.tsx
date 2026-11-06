import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { 
  MapPin, 
  ArrowRight, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  PhoneCall, 
  TrendingUp, 
  Layers,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Award,
  Users
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import TerritoryDossierModal from '@/components/v2/TerritoryDossierModal';
import TerritoryServiceIcon from '@/components/v2/TerritoryServiceIcon';
import { B2B_SECTORS } from '@/lib/solutionsData';
import { 
  getCountryBySlug, 
  getCityBySlug, 
  getTerritoryServiceBySlug,
  getCitiesByCountry,
  TERRITORY_SERVICES 
} from '@/lib/territoriesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from '../../territoires.module.css';

interface CityOrServicePageProps {
  params: Promise<{ country: string; city: string; locale: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CityOrServicePageProps): Promise<Metadata> {
  const { country: countrySlug, city: slug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return {};

  // Case 1 : City Hub
  const city = getCityBySlug(countrySlug, slug);
  if (city) {
    return {
      title: `Agence Digitale, Web & IA à ${city.name} (${country.name}) | BAROUBA GROUP`.slice(0, 65),
      description: `${city.status || city.name} : développement Next.js 16, agents IA, tunnels WhatsApp et publicité Meta/TikTok par BAROUBA GROUP.`.slice(0, 155),
      alternates: {
        canonical: `https://www.baroubagroup.com/territoires/${country.slug}/${city.slug}`,
      },
    };
  }

  // Case 2 : National Country Service Page (e.g. /territoires/burkina-faso/creation-site-internet)
  const service = getTerritoryServiceBySlug(slug);
  if (service) {
    const cleanTitle = `${service.shortTitle} au ${country.name} | BAROUBA GROUP`.slice(0, 65);
    const cleanDesc = service.hook.replace('{city}', country.name).slice(0, 155);
    return {
      title: cleanTitle,
      description: cleanDesc,
      alternates: {
        canonical: `https://www.baroubagroup.com/territoires/${country.slug}/${service.slug}`,
      },
    };
  }

  return {};
}

export default async function CityOrServicePage({ params }: CityOrServicePageProps) {
  const { country: countrySlug, city: slug, locale } = await params;
  setRequestLocale(locale);

  const country = getCountryBySlug(countrySlug);
  if (!country) notFound();

  const city = getCityBySlug(countrySlug, slug);
  const service = getTerritoryServiceBySlug(slug);

  // If neither matches, 404
  if (!city && !service) notFound();

  // =========================================================================
  // SCÉNARIO A : PAGE NATIONALE DE SERVICE (Ex: /territoires/burkina-faso/creation-site-internet)
  // =========================================================================
  if (service && !city) {
    const cities = getCitiesByCountry(country.slug);
    const canonicalUrl = `https://www.baroubagroup.com/territoires/${country.slug}/${service.slug}`;

    const nationalSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: `${service.name} au ${country.name}`,
          serviceType: service.shortTitle,
          description: service.description.replace(/\{city\}/g, country.name),
          provider: {
            '@type': 'ProfessionalService',
            name: 'BAROUBA GROUP',
            telephone: '+226-74-82-66-66',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bobo-Dioulasso',
              addressCountry: 'BF',
            },
          },
          areaServed: {
            '@type': 'Country',
            name: country.name,
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: service.faq.map((item) => ({
            '@type': 'Question',
            name: item.question.replace(/\{city\}/g, country.name),
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer.replace(/\{city\}/g, country.name),
            },
          })),
        },
      ],
    };

    const whatsappMessage = `Bonjour Monsieur Sako, je vous contacte depuis le ${country.name} pour le service "${service.shortTitle}". Pouvons-nous échanger sur mon projet ?`;

    return (
      <div className={styles.page}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nationalSchema) }}
        />

        {/* Hero National */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <Link href="/territoires">Territoires</Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <Link href={`/territoires/${country.slug}` as any}>{country.name}</Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbCurrent}>{service.shortTitle}</span>
            </nav>

            <div className={styles.badge}>
              <TerritoryServiceIcon iconType={service.iconType} size={16} />
              <span>Pôle National — {country.name} {country.flag}</span>
            </div>

            <h1 className={styles.title}>
              {service.shortTitle} au <br />
              <span className={styles.highlight}>{country.name}</span>
            </h1>

            <p className={styles.subtitle}>
              {service.hook.replace(/\{city\}/g, country.name)}
            </p>

            <div className={styles.heroActions}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <PhoneCall size={18} />
                <span>Échanger avec la Direction sur WhatsApp</span>
              </a>
              <Link href="/devis" className={styles.btnSecondary}>
                <TrendingUp size={18} />
                <span>Demander un Devis au {country.name}</span>
              </Link>
            </div>
          </div>
        </section>

        <AfricanPatternRibbon />

        {/* Détails du Service & Livrables */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <span className={styles.sectionBadge}>Ingénierie & Méthode</span>
              <h2 className={styles.sectionTitle}>
                Ce Qui Est Déployé pour Votre Entreprise au <span className={styles.highlight}>{country.name}</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                {service.description.replace(/\{city\}/g, country.name)}
              </p>
            </div>

            <div className={styles.deliverablesList} style={{ maxWidth: '900px', margin: '2.5rem 0' }}>
              {service.deliverables.map((d, index) => (
                <div key={index} className={styles.deliverableItem}>
                  <div className={styles.deliverableIcon}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className={styles.deliverableTitle}>{d.title}</h3>
                    <p className={styles.deliverableDesc}>{d.desc.replace(/\{city\}/g, country.name)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bénéfices */}
            <div className={styles.card} style={{ borderColor: 'rgba(16, 185, 129, 0.3)', marginTop: '2rem' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}>
                  <Award size={22} />
                </div>
                <span className={styles.cardTag} style={{ color: '#10B981' }}>Garanties de Performance</span>
              </div>
              <h3 className={styles.cardTitle}>Avantages Concurrentiels Directs</h3>
              <div className={styles.benefitsGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {service.benefits.map((b, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <CheckCircle2 size={18} className={styles.benefitIcon} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Déclinaison par Ville pour ce Service */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Maillage Par Ville</span>
              <h2 className={styles.sectionTitle}>
                Déploiement de ce Service dans les {cities.length} Pôles du <span className={styles.highlight}>{country.name}</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Chaque ville bénéficie d&apos;une stratégie sur-mesure pour capturer les opportunités commerciales de votre secteur.
              </p>
            </div>

            <div className={styles.grid}>
              {cities.map((c) => (
                <div key={c.slug} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardIcon}>
                      <MapPin size={20} />
                    </div>
                    {c.status && <span className={styles.cardTag}>{c.region}</span>}
                  </div>
                  <h3 className={styles.cardTitle}>{c.name}</h3>
                  <p className={styles.cardDesc}>{c.heroSubtitle}</p>
                  <Link
                    href={`/territoires/${country.slug}/${c.slug}/${service.slug}` as any}
                    className={styles.cardLink}
                  >
                    <span>Voir l&apos;offre à {c.name}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Nationale */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Foire Aux Questions</span>
              <h2 className={styles.sectionTitle}>
                Questions Fréquentes — <span className={styles.highlight}>{country.name}</span>
              </h2>
            </div>
            <div className={styles.faqGrid}>
              {service.faq.map((item, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>
                    <HelpCircle size={20} className={styles.faqQuestionIcon} />
                    <span>{item.question.replace(/\{city\}/g, country.name)}</span>
                  </h3>
                  <p className={styles.faqAnswer}>
                    {item.answer.replace(/\{city\}/g, country.name)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cadrage Final */}
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Propulsez Votre Entreprise au <span className={styles.highlight}>{country.name}</span>
            </h2>
            <p className={styles.ctaText}>
              Bénéficiez de l&apos;expertise de BAROUBA GROUP pour dominer votre secteur au {country.name}. 
              Cadrage stratégique sous 24h ouvrées avec Monsieur Sako Barou Ben Oumar.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <PhoneCall size={18} />
                <span>Échanger sur WhatsApp (+226 74 82 66 66)</span>
              </a>
              <Link href="/devis" className={styles.btnSecondary}>
                <TrendingUp size={18} />
                <span>Demander une Faisabilité Gratuite</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SCÉNARIO B : HUB VILLE APPROFONDI (Ex: /territoires/burkina-faso/bobo-dioulasso)
  // =========================================================================
  const cityObj = city!;
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `BAROUBA GROUP — Pôle d'Intervention ${cityObj.name}`,
    image: 'https://www.baroubagroup.com/logo-or.svg',
    url: `https://www.baroubagroup.com/territoires/${country.slug}/${cityObj.slug}`,
    telephone: '+226-74-82-66-66',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityObj.name,
      addressRegion: cityObj.region,
      addressCountry: country.iso,
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: country.iso,
    },
    areaServed: {
      '@type': 'City',
      name: cityObj.name,
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* 01 // HERO SHOWCASE */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/territoires">Territoires</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href={`/territoires/${country.slug}` as any}>{country.name}</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{cityObj.name}</span>
          </nav>

          <div className={styles.badge}>
            <MapPin size={16} />
            <span>Pôle Territorial — {cityObj.name}, {country.name}</span>
          </div>

          <h1 className={styles.title}>
            Agence Digitale, Web Next.js & IA à <br />
            <span className={styles.highlight}>{cityObj.name} ({country.name})</span>
          </h1>

          <p className={styles.subtitle}>{cityObj.heroSubtitle}</p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je vous contacte depuis ${cityObj.name} (${country.name}) pour échanger sur mon projet digital.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Échanger sur WhatsApp depuis {cityObj.name}</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Demander un Cadrage Projet</span>
            </Link>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* 02 // DOSSIER TERRITORIAL APPROFONDI (HISTOIRE + ÉCONOMIE + ENJEUX) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Dossier Économique & Territorial</span>
            <h2 className={styles.sectionTitle}>
              Comprendre les Réalités & Dynamiques de <span className={styles.highlight}>{cityObj.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Une implantation réussie repose sur une maîtrise intime du tissu socio-économique, 
              des habitudes marchandes locales et des leviers de croissance propres à {cityObj.name}.
            </p>
          </div>

          <div className={styles.grid2} style={{ marginTop: '2.5rem' }}>
            {/* Carte 1 : Histoire & Situation */}
            <div className={styles.card} style={{ borderColor: 'rgba(245, 166, 35, 0.3)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <Building2 size={22} />
                </div>
                <span className={styles.cardTag}>Histoire & Géographie</span>
              </div>
              <h3 className={styles.cardTitle}>
                {cityObj.name} dans l&apos;Économie du {country.name}
              </h3>
              <p className={styles.cardDesc} style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                {cityObj.historyAndGeo}
              </p>
              <div className={styles.cardMeta}>
                <div className={styles.cardMetaRow}>
                  <Users size={14} className={styles.cardMetaIcon} />
                  <span>Bassin démographique : <strong>{cityObj.population || 'Majeur'}</strong></span>
                </div>
                <div className={styles.cardMetaRow}>
                  <MapPin size={14} className={styles.cardMetaIcon} />
                  <span>Région administrative : <strong>{cityObj.region}</strong></span>
                </div>
              </div>

              {/* Bouton Popup Voir Plus */}
              <TerritoryDossierModal
                cityName={cityObj.name}
                countryName={country.name}
                region={cityObj.region}
                population={cityObj.population}
                historyAndGeo={cityObj.historyAndGeo}
                economicDossier={cityObj.economicDossier}
                digitalChallenges={cityObj.digitalChallenges}
                localAnchors={cityObj.localAnchors}
              />
            </div>

            {/* Carte 2 : Économie & Défis Numériques */}
            <div className={styles.card} style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#F97316' }}>
                  <AlertTriangle size={22} />
                </div>
                <span className={styles.cardTag}>Défis de Transformation</span>
              </div>
              <h3 className={styles.cardTitle}>
                Enjeux Numériques des Entreprises à {cityObj.name}
              </h3>
              <p className={styles.cardDesc} style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                {cityObj.digitalChallenges}
              </p>
              <div className={styles.cardMeta}>
                <span>Grands quartiers & carrefours d&apos;activité :</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
                  {cityObj.localAnchors.map((anchor, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(245, 166, 35, 0.08)',
                        border: '1px solid rgba(245, 166, 35, 0.2)',
                        color: 'var(--color-gold)',
                      }}
                    >
                      {anchor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // 5 SOLUTIONS DÉDIÉES SANS AUCUNE ICÔNE SPARKLES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Catalogue d&apos;Intervention</span>
            <h2 className={styles.sectionTitle}>
              Nos Pôles d&apos;Expertise & Métiers d&apos;Acquisition pour <span className={styles.highlight}>{cityObj.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Chaque pilier est calibré pour convertir le public de {cityObj.name} et s&apos;adapter aux canaux de vente locaux.
            </p>
          </div>

          <div className={styles.grid}>
            {TERRITORY_SERVICES.map((s, idx) => (
              <div key={s.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <TerritoryServiceIcon iconType={s.iconType} size={22} />
                  </div>
                  <span className={styles.cardTag}>Pilier 0{idx + 1}</span>
                </div>

                <h3 className={styles.cardTitle}>{s.shortTitle}</h3>
                <p className={styles.cardDesc}>{s.hook.replace('{city}', cityObj.name)}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.cardMetaRow}>
                    <CheckCircle2 size={14} className={styles.cardMetaIcon} />
                    <span>Délai garanti : <strong>10 à 21 jours</strong></span>
                  </div>
                  <div className={styles.cardMetaRow}>
                    <ShieldCheck size={14} className={styles.cardMetaIcon} />
                    <span>Devise locale : <strong>{country.currency}</strong></span>
                  </div>
                </div>

                <Link
                  href={`/${s.slug === 'creation-site-internet' ? 'creation-site-web' : s.slug === 'formations-metiers-du-web-ia' ? 'formation' : s.slug}-${cityObj.slug}` as any}
                  className={styles.cardLink}
                >
                  <span>Découvrir l&apos;offre à {cityObj.name}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 04 // SOLUTIONS & APPLICATIONS B2B SECTORIELLES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Ingénierie B2B Sectorielle</span>
            <h2 className={styles.sectionTitle}>
              Solutions Métiers & Logiciels par Secteur à <span className={styles.highlight}>{cityObj.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Chaque industrie a ses impératifs de rentabilité. BAROUBA GROUP conçoit des plateformes web 
              et logiciels sur-mesure pour les directeurs et fondateurs d&apos;entreprises à {cityObj.name}.
            </p>
          </div>

          <div className={styles.grid} style={{ marginTop: '2.5rem' }}>
            {B2B_SECTORS.map((sector) => (
              <div key={sector.id} className={styles.card} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className={styles.cardTop}>
                    <span className={styles.cardTag}>{sector.badge}</span>
                  </div>
                  <h3 className={styles.cardTitle} style={{ fontSize: '1.15rem', marginTop: '0.5rem' }}>
                    {sector.name}
                  </h3>
                  <p className={styles.cardDesc} style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Cible : {sector.targetRole} à {cityObj.name}.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Link
                    href={`/${sector.solutionSlugPrefix}-${cityObj.slug}` as any}
                    className={styles.cardLink}
                    style={{ fontSize: '0.88rem', color: 'var(--color-gold)' }}
                  >
                    <span>Découvrir la Solution Métier</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={`/${sector.priceSlugPrefix}-${cityObj.slug}` as any}
                    style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.6)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                  >
                    <span>Estimation des tarifs & budget</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // CADRAGE FINAL & DIRECTION */}
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            Vous Développez une Activité à <span className={styles.highlight}>{cityObj.name}</span> ?
          </h2>
          <p className={styles.ctaText}>
            Bénéficiez de la puissance technologique de BAROUBA GROUP avec un accompagnement sur-mesure 
            pour les entrepreneurs, commerçants et institutions de {cityObj.name}.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je souhaite un devis pour mon entreprise située à ${cityObj.name} (${country.name}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Contacter Monsieur Sako sur WhatsApp</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Demander un Devis en Ligne</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
