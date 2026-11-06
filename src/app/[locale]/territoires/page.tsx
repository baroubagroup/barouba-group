import type { Metadata } from 'next';
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
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import TerritoryServiceIcon from '@/components/v2/TerritoryServiceIcon';
import { 
  TERRITORY_COUNTRIES, 
  TERRITORY_CITIES, 
  TERRITORY_SERVICES,
  getCitiesByCountry 
} from '@/lib/territoriesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './territoires.module.css';

interface TerritoiresPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: TerritoiresPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Implantations & Territoires d\'Intervention | BAROUBA GROUP',
    description: 'Découvrez les zones d\'intervention de BAROUBA GROUP au Burkina Faso et en Côte d\'Ivoire : création web Next.js, agents IA et publicité à Bobo, Ouaga, Abidjan et Bouaké.',
    alternates: {
      canonical: `https://www.baroubagroup.com/territoires`,
    },
  };
}

export default async function TerritoiresPage({ params }: TerritoiresPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const hubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.baroubagroup.com/territoires#hub',
    name: 'Implantations et Territoires BAROUBA GROUP',
    url: 'https://www.baroubagroup.com/territoires',
    description: 'Hub territorial officiel de BAROUBA GROUP couvrant les pôles économiques du Burkina Faso et de la Côte d\'Ivoire.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'BAROUBA GROUP',
      telephone: '+226-74-82-66-66',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bobo-Dioulasso',
        addressCountry: 'BF',
      },
      areaServed: ['Burkina Faso', 'Côte d\'Ivoire'],
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      {/* 01 // HERO SHOWCASE */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>Territoires & Villes</span>
          </nav>

          <div className={styles.badge}>
            <Globe2 size={16} />
            <span>Réseau d&apos;Excellence UEMOA & Afrique de l&apos;Ouest</span>
          </div>

          <h1 className={styles.title}>
            Nos Territoires d&apos;Intervention au <br />
            <span className={styles.highlight}>Burkina Faso & en Côte d&apos;Ivoire</span>
          </h1>

          <p className={styles.subtitle}>
            Depuis notre siège social à Bobo-Dioulasso et nos déploiements à Ouagadougou et Abidjan, 
            BAROUBA GROUP propulse la souveraineté numérique et le chiffre d&apos;affaires des entreprises ouest-africaines 
            avec des technologies de classe mondiale : plateformes Next.js 16, agents IA opérationnels, 
            tunnels de vente WhatsApp et campagnes publicitaires à fort ROAS.
          </p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Monsieur Sako, je souhaite échanger sur une intervention BAROUBA GROUP pour mon entreprise.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Échanger avec la Direction sur WhatsApp</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Demander une Étude de Faisabilité</span>
            </Link>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* 02 // PAYS & VILLES GRID */}
      <section className={styles.section}>
        <div className="container">
          {TERRITORY_COUNTRIES.map((country) => {
            const cities = getCitiesByCountry(country.slug);
            return (
              <div key={country.slug} style={{ marginBottom: '4rem' }}>
                <div className={styles.sectionHeaderLeft}>
                  <span className={styles.sectionBadge}>Zone Stratégique {country.flag}</span>
                  <h2 className={styles.sectionTitle}>
                    {country.name} — <span className={styles.highlight}>{cities.length} Pôles Couverts</span>
                  </h2>
                  <p className={styles.sectionSubtitle}>{country.description}</p>
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
                            <span>Bassin : <strong>{city.population}</strong></span>
                          </div>
                        )}
                      </div>

                      <Link
                        href={`/territoires/${country.slug}/${city.slug}` as any}
                        className={styles.cardLink}
                      >
                        <span>Voir les 5 solutions à {city.name}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 03 // MATRICE DES SERVICES DISPONIBLES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Expertises Opérationnelles</span>
            <h2 className={styles.sectionTitle}>
              Les 5 Piliers Déployés dans <span className={styles.highlight}>Chaque Territoire</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Chaque ville bénéficie d&apos;un calibrage précis de ces cinq leviers de croissance, adaptés aux réalités économiques locales.
            </p>
          </div>

          <div className={styles.grid3}>
            {TERRITORY_SERVICES.map((service, idx) => (
              <div key={service.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <TerritoryServiceIcon iconType={service.iconType} size={22} />
                  </div>
                  <span className={styles.cardTag}>Pilier 0{idx + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.shortTitle}</h3>
                <p className={styles.cardDesc}>{service.hook.replace('{city}', 'votre ville')}</p>
                <div className={styles.benefitsGrid} style={{ marginTop: '0', gridTemplateColumns: '1fr' }}>
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className={styles.benefitItem} style={{ padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}>
                      <CheckCircle2 size={16} className={styles.benefitIcon} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // ANCRAGE INSTITUTIONNEL */}
      <div className="container">
        <div className={styles.authorityBox}>
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            <span>Garantie Contractuelle SARL & Déploiement Sécurisé</span>
          </div>
          <h2 className={styles.title} style={{ fontSize: '2rem' }}>
            Un Rayonnement Sous-Régional Piloté depuis <span className={styles.highlight}>Bobo-Dioulasso</span>
          </h2>
          <p className={styles.subtitle} style={{ marginBottom: '1.5rem' }}>
            Fondé et dirigé par <strong>Monsieur SAKO BAROU BEN OUMAR</strong>, BAROUBA GROUP combine la réactivité d&apos;un partenaire 
            de proximité avec la rigueur d&apos;une agence technologique d&apos;envergure internationale. 
            Toutes nos prestations sont encadrées par des contrats de service en bonne et due forme.
          </p>

          <div className={styles.authorityGrid}>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Siège Social</span>
              <span className={styles.authorityValue}>Bobo-Dioulasso</span>
              <span className={styles.authorityDesc}>Hauts-Bassins, Burkina Faso</span>
            </div>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Bureau & Relais</span>
              <span className={styles.authorityValue}>Ouagadougou & Abidjan</span>
              <span className={styles.authorityDesc}>Intervention directe & visio VIP</span>
            </div>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Ligne Directe WhatsApp</span>
              <span className={styles.authorityValue}>+226 74 82 66 66</span>
              <span className={styles.authorityDesc}>Réponse sous 24h ouvrées</span>
            </div>
            <div className={styles.authorityItem}>
              <span className={styles.authorityLabel}>Devise Officielle</span>
              <span className={styles.authorityValue}>Franc CFA (XOF)</span>
              <span className={styles.authorityDesc}>Paiements Mobile Money & Virement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
