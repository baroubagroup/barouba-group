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
  Layers
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { 
  getCountryBySlug, 
  getCitiesByCountry, 
  TERRITORY_SERVICES 
} from '@/lib/territoriesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from '../territoires.module.css';

interface CountryPageProps {
  params: Promise<{ country: string; locale: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { country: countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return {};

  return {
    title: `Solutions Digitales & IA au ${country.name} | BAROUBA GROUP`,
    description: `Agence web et digitale de référence au ${country.name} : développement Next.js 16, agents IA, tunnels WhatsApp et publicité Meta/TikTok Ads.`,
    alternates: {
      canonical: `https://www.baroubagroup.com/${locale}/territoires/${country.slug}`,
    },
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country: countrySlug, locale } = await params;
  setRequestLocale(locale);

  const country = getCountryBySlug(countrySlug);
  if (!country) notFound();

  const cities = getCitiesByCountry(country.slug);

  const countrySchema = {
    '@context': 'https://schema.org',
    '@type': 'AdministrativeArea',
    name: country.name,
    identifier: country.iso,
    description: country.description,
    url: `https://www.baroubagroup.com/${locale}/territoires/${country.slug}`,
    containsPlace: cities.map((c) => ({
      '@type': 'City',
      name: c.name,
      url: `https://www.baroubagroup.com/${locale}/territoires/${country.slug}/${c.slug}`,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }}
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
            <span className={styles.breadcrumbCurrent}>{country.name}</span>
          </nav>

          <div className={styles.badge}>
            <Globe2 size={16} />
            <span>Pôle National d&apos;Intervention {country.flag}</span>
          </div>

          <h1 className={styles.title}>
            Solutions Digitales & Ingénierie IA au <br />
            <span className={styles.highlight}>{country.name}</span>
          </h1>

          <p className={styles.subtitle}>{country.description}</p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je souhaite échanger sur un projet au ${country.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Contacter la Direction sur WhatsApp</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Demander un Devis au {country.name}</span>
            </Link>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* 02 // VILLES COUVERTES DANS LE PAYS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Maillage Territorial</span>
            <h2 className={styles.sectionTitle}>
              Les {cities.length} Pôles Économiques d&apos;Intervention au <span className={styles.highlight}>{country.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Sélectionnez votre ville pour découvrir nos solutions sur-mesure, cas d&apos;usage sectoriels et modules d&apos;intervention.
            </p>
          </div>

          <div className={styles.grid}>
            {cities.map((city) => (
              <div key={city.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <MapPin size={22} />
                  </div>
                  {city.status && <span className={styles.cardTag}>{city.status}</span>}
                </div>

                <h3 className={styles.cardTitle}>{city.name}</h3>
                <p className={styles.cardDesc}>{city.heroSubtitle}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.cardMetaRow}>
                    <Building2 size={14} className={styles.cardMetaIcon} />
                    <span>Région : <strong>{city.region}</strong></span>
                  </div>
                  {city.population && (
                    <div className={styles.cardMetaRow}>
                      <TrendingUp size={14} className={styles.cardMetaIcon} />
                      <span>Population : <strong>{city.population}</strong></span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/territoires/${country.slug}/${city.slug}` as any}
                  className={styles.cardLink}
                >
                  <span>Accéder au pôle {city.name}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 // SERVICES PILIERS DÉPLOYÉS DANS LE PAYS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Catalogue de Déploiement</span>
            <h2 className={styles.sectionTitle}>
              Nos 5 Solutions Majeures au <span className={styles.highlight}>{country.name}</span>
            </h2>
          </div>

          <div className={styles.grid3}>
            {TERRITORY_SERVICES.map((s, idx) => (
              <div key={s.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <Sparkles size={22} />
                  </div>
                  <span className={styles.cardTag}>Solution 0{idx + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{s.shortTitle}</h3>
                <p className={styles.cardDesc}>{s.hook.replace('{city}', country.name)}</p>
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                    Devise : {country.currency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // ANCRAGE & REASSURANCE */}
      <div className="container">
        <div className={styles.authorityBox}>
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            <span>Présence & Engagement Contractuel</span>
          </div>
          <h2 className={styles.title} style={{ fontSize: '2rem' }}>
            Pourquoi Choisir BAROUBA GROUP au <span className={styles.highlight}>{country.name}</span> ?
          </h2>
          <p className={styles.subtitle} style={{ marginBottom: '1.5rem' }}>
            Nous combinons une maîtrise pointue des technologies de dernière génération avec une compréhension intime 
            des habitudes de consommation et des réalités économiques du <strong>{country.name}</strong>.
          </p>

          <div className={styles.authorityGrid}>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Capitale</span>
              <span className={styles.authorityValue}>{country.capital}</span>
              <span className={styles.authorityDesc}>Liaisons régulières & rendez-vous d&apos;affaires</span>
            </div>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Paiements Locaux</span>
              <span className={styles.authorityValue}>{country.currency}</span>
              <span className={styles.authorityDesc}>Mobile Money (Orange, Moov, Wave) & Banques</span>
            </div>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Support VIP</span>
              <span className={styles.authorityValue}>+226 74 82 66 66</span>
              <span className={styles.authorityDesc}>Assistance technique & suivi de projet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
