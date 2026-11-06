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
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { 
  getCountryBySlug, 
  getCityBySlug, 
  TERRITORY_SERVICES 
} from '@/lib/territoriesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from '../../territoires.module.css';

interface CityPageProps {
  params: Promise<{ country: string; city: string; locale: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { country: countrySlug, city: citySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(countrySlug, citySlug);
  if (!country || !city) return {};

  return {
    title: `Agence Digitale & IA à ${city.name} (${country.name}) | BAROUBA GROUP`,
    description: `Développement web Next.js 16, agents IA, tunnels WhatsApp et publicité Meta/TikTok Ads à ${city.name}. Accélération commerciale garantie par BAROUBA GROUP.`,
    alternates: {
      canonical: `https://www.baroubagroup.com/${locale}/territoires/${country.slug}/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { country: countrySlug, city: citySlug, locale } = await params;
  setRequestLocale(locale);

  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(countrySlug, citySlug);
  if (!country || !city) notFound();

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `BAROUBA GROUP — Pôle d'Intervention ${city.name}`,
    image: 'https://www.baroubagroup.com/logo-or.svg',
    url: `https://www.baroubagroup.com/${locale}/territoires/${country.slug}/${city.slug}`,
    telephone: '+226-74-82-66-66',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: country.iso,
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: country.iso,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
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
            <span className={styles.breadcrumbCurrent}>{city.name}</span>
          </nav>

          <div className={styles.badge}>
            <MapPin size={16} />
            <span>Pôle Opérationnel — {city.name}, {country.name}</span>
          </div>

          <h1 className={styles.title}>
            Agence Digitale, Web Next.js & IA à <br />
            <span className={styles.highlight}>{city.name}</span>
          </h1>

          <p className={styles.subtitle}>{city.heroSubtitle}</p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je vous contacte depuis ${city.name} pour échanger sur mon projet digital.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Échanger sur WhatsApp depuis {city.name}</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Demander un Cadrage Projet</span>
            </Link>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* 02 // CONTEXTE LOCAL & DÉFIS ÉCONOMIQUES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid2}>
            <div className={styles.card} style={{ borderColor: 'rgba(245, 166, 35, 0.3)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <Building2 size={22} />
                </div>
                <span className={styles.cardTag}>Écosystème Local</span>
              </div>
              <h2 className={styles.cardTitle} style={{ fontSize: '1.4rem' }}>
                Profil Économique de {city.name}
              </h2>
              <p className={styles.cardDesc} style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                {city.economicProfile}
              </p>
              <div className={styles.cardMeta}>
                <span>Quartiers & Pôles d&apos;activité clés :</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {city.localAnchors.map((anchor, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(245, 166, 35, 0.1)',
                        color: 'var(--color-gold)',
                      }}
                    >
                      {anchor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.card} style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#F97316' }}>
                  <AlertTriangle size={22} />
                </div>
                <span className={styles.cardTag}>Défis de Croissance</span>
              </div>
              <h2 className={styles.cardTitle} style={{ fontSize: '1.4rem' }}>
                Enjeux Numériques des Entreprises à {city.name}
              </h2>
              <p className={styles.cardDesc} style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                {city.challenges}
              </p>
              <div className={styles.benefitItem} style={{ marginTop: 'auto' }}>
                <CheckCircle2 size={16} className={styles.benefitIcon} />
                <span>Interventions adaptées aux réalités terrain de {city.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // 5 SOLUTIONS SPÉCIFIQUES POUR CETTE VILLE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Offres Dédiées à {city.name}</span>
            <h2 className={styles.sectionTitle}>
              Nos 5 Leviers d&apos;Accélération pour <span className={styles.highlight}>{city.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Chaque solution est calibrée pour répondre aux habitudes d&apos;achat et à la dynamique commerciale locale.
            </p>
          </div>

          <div className={styles.grid}>
            {TERRITORY_SERVICES.map((s, idx) => (
              <div key={s.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <Sparkles size={22} />
                  </div>
                  <span className={styles.cardTag}>Offre 0{idx + 1}</span>
                </div>

                <h3 className={styles.cardTitle}>{s.shortTitle}</h3>
                <p className={styles.cardDesc}>{s.hook.replace('{city}', city.name)}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.cardMetaRow}>
                    <CheckCircle2 size={14} className={styles.cardMetaIcon} />
                    <span>Livraison : <strong>10 à 21 jours ouvrés</strong></span>
                  </div>
                  <div className={styles.cardMetaRow}>
                    <ShieldCheck size={14} className={styles.cardMetaIcon} />
                    <span>Devise locale : <strong>{country.currency}</strong></span>
                  </div>
                </div>

                <Link
                  href={`/territoires/${country.slug}/${city.slug}/${s.slug}` as any}
                  className={styles.cardLink}
                >
                  <span>Découvrir l&apos;offre à {city.name}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // ANCRAGE ET GARANTIE */}
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            Vous Développez une Activité à <span className={styles.highlight}>{city.name}</span> ?
          </h2>
          <p className={styles.ctaText}>
            Bénéficiez de la puissance technique d&apos;une agence technologique reconnue, avec un accompagnement sur-mesure 
            pour les entrepreneurs, commerçants et institutions de {city.name}.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je souhaite un devis pour mon entreprise située à ${city.name}.`)}`}
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
