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
  AlertTriangle,
  Layers,
  Users
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import TerritoryServiceIcon from '@/components/v2/TerritoryServiceIcon';
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
    title: `Agence Digitale, Web & IA au ${country.name} | BAROUBA GROUP`.slice(0, 65),
    description: `Leader technologique au ${country.name} : développement web Next.js 16, agents IA, tunnels WhatsApp et publicité Meta/TikTok Ads. Cadrage sous 24h.`.slice(0, 155),
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
            Agence Digitale, Web Next.js & IA au <br />
            <span className={styles.highlight}>{country.name}</span>
          </h1>

          <p className={styles.subtitle}>{country.description}</p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Monsieur Sako, je souhaite échanger sur un projet digital au ${country.name}.`)}`}
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

      {/* 02 // DOSSIER PAYS (GÉOGRAPHIE, ÉCONOMIE & ENJEUX DIGITAUX) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Panorama Économique National</span>
            <h2 className={styles.sectionTitle}>
              Dynamiques & Enjeux Numériques au <span className={styles.highlight}>{country.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprendre les leviers macro-économiques pour déployer des solutions digitales adaptées aux marchés locaux.
            </p>
          </div>

          <div className={styles.grid2} style={{ marginTop: '2.5rem' }}>
            <div className={styles.card} style={{ borderColor: 'rgba(245, 166, 35, 0.3)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <Building2 size={22} />
                </div>
                <span className={styles.cardTag}>Cadre Géographique & Marché</span>
              </div>
              <h3 className={styles.cardTitle}>Structure Économique du {country.name}</h3>
              <p className={styles.cardDesc} style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                {country.historyAndGeo}
              </p>
              <div className={styles.cardMeta}>
                <div className={styles.cardMetaRow}>
                  <TrendingUp size={14} className={styles.cardMetaIcon} />
                  <span>Moteur économique : <strong>{country.economicCapital || country.capital}</strong></span>
                </div>
                <div className={styles.cardMetaRow}>
                  <ShieldCheck size={14} className={styles.cardMetaIcon} />
                  <span>Devise nationale : <strong>{country.currency}</strong></span>
                </div>
              </div>
            </div>

            <div className={styles.card} style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#F97316' }}>
                  <AlertTriangle size={22} />
                </div>
                <span className={styles.cardTag}>Défis Numériques</span>
              </div>
              <h3 className={styles.cardTitle}>Enjeux de Digitalisation & E-commerce</h3>
              <p className={styles.cardDesc} style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                {country.digitalChallenges}
              </p>
              <div className={styles.cardMeta}>
                <span>Piliers de croissance recommandés :</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(245, 166, 35, 0.1)', color: 'var(--color-gold)' }}>
                    Next.js 16 SSR
                  </span>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(245, 166, 35, 0.1)', color: 'var(--color-gold)' }}>
                    Tunnels WhatsApp Mobile Money
                  </span>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(245, 166, 35, 0.1)', color: 'var(--color-gold)' }}>
                    Tracking CAPI Meta/TikTok
                  </span>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(245, 166, 35, 0.1)', color: 'var(--color-gold)' }}>
                    Agents IA 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // 5 SOLUTIONS NATIONALES CLICABLES VERS LEURS PAGES DÉDIÉES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Catalogue National</span>
            <h2 className={styles.sectionTitle}>
              Nos 5 Solutions Majeures au <span className={styles.highlight}>{country.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Découvrez chaque pôle d&apos;expertise décliné pour les entreprises, institutions et PME du {country.name}.
            </p>
          </div>

          <div className={styles.grid3}>
            {TERRITORY_SERVICES.map((s, idx) => (
              <div key={s.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <TerritoryServiceIcon iconType={s.iconType} size={22} />
                  </div>
                  <span className={styles.cardTag}>Solution 0{idx + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{s.shortTitle}</h3>
                <p className={styles.cardDesc}>{s.hook.replace('{city}', country.name)}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.cardMetaRow}>
                    <ShieldCheck size={14} className={styles.cardMetaIcon} />
                    <span>Devise : <strong>{country.currency}</strong></span>
                  </div>
                </div>

                <Link
                  href={`/territoires/${country.slug}/${s.slug}` as any}
                  className={styles.cardLink}
                >
                  <span>Découvrir l&apos;offre au {country.name}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // VILLES COUVERTES DANS LE PAYS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Maillage Territorial</span>
            <h2 className={styles.sectionTitle}>
              Les {cities.length} Pôles Économiques Couverts au <span className={styles.highlight}>{country.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Sélectionnez une ville pour accéder à sa fiche territoriale détaillée, son histoire, ses quartiers et ses 5 solutions dédiées.
            </p>
          </div>

          <div className={styles.grid}>
            {cities.map((city) => (
              <div key={city.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <MapPin size={22} />
                  </div>
                  {city.status && <span className={styles.cardTag}>{city.region}</span>}
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
                      <Users size={14} className={styles.cardMetaIcon} />
                      <span>Bassin : <strong>{city.population}</strong></span>
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

      {/* 05 // ANCRAGE & REASSURANCE */}
      <div className="container">
        <div className={styles.authorityBox}>
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            <span>Présence & Engagement Contractuel SARL</span>
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
