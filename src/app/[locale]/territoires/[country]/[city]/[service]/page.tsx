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
  CheckCircle2,
  Clock,
  HelpCircle,
  Award,
  ChevronRight,
  Layers,
  ArrowLeft
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import TerritoryServiceIcon from '@/components/v2/TerritoryServiceIcon';
import { 
  getCountryBySlug, 
  getCityBySlug, 
  getTerritoryServiceBySlug,
  TERRITORY_SERVICES
} from '@/lib/territoriesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from '../../../territoires.module.css';

interface ServiceCityPageProps {
  params: Promise<{ country: string; city: string; service: string; locale: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: ServiceCityPageProps): Promise<Metadata> {
  const { country: countrySlug, city: citySlug, service: serviceSlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(countrySlug, citySlug);
  const service = getTerritoryServiceBySlug(serviceSlug);
  if (!country || !city || !service) return {};

  const cleanTitle = `${service.shortTitle} à ${city.name} (${country.name}) | BAROUBA GROUP`.slice(0, 65);
  const cleanDesc = service.hook.replace('{city}', `${city.name} (${country.name})`).slice(0, 155);

  return {
    title: cleanTitle,
    description: cleanDesc,
    alternates: {
      canonical: `https://www.baroubagroup.com/territoires/${country.slug}/${city.slug}/${service.slug}`,
    },
  };
}

export default async function ServiceCityPage({ params }: ServiceCityPageProps) {
  const { country: countrySlug, city: citySlug, service: serviceSlug, locale } = await params;
  setRequestLocale(locale);

  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(countrySlug, citySlug);
  const service = getTerritoryServiceBySlug(serviceSlug);
  if (!country || !city || !service) notFound();

  const canonicalUrl = `https://www.baroubagroup.com/territoires/${country.slug}/${city.slug}/${service.slug}`;

  // Rich Schema.org : Service + LocalBusiness + FAQPage
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: `${service.name} à ${city.name}`,
        serviceType: service.shortTitle,
        description: service.description.replace(/\{city\}/g, city.name),
        provider: {
          '@type': 'ProfessionalService',
          name: 'BAROUBA GROUP',
          telephone: '+226-74-82-66-66',
          url: 'https://www.baroubagroup.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bobo-Dioulasso',
            addressRegion: 'Hauts-Bassins',
            addressCountry: 'BF',
          },
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: {
            '@type': 'Country',
            name: country.name,
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.shortTitle} — ${city.name}`,
          itemListElement: service.deliverables.map((d) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: d.title,
              description: d.desc.replace(/\{city\}/g, city.name),
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question.replace(/\{city\}/g, city.name),
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer.replace(/\{city\}/g, city.name),
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
            item: `https://www.baroubagroup.com/${locale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Territoires',
            item: `https://www.baroubagroup.com/territoires`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: country.name,
            item: `https://www.baroubagroup.com/territoires/${country.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: city.name,
            item: `https://www.baroubagroup.com/territoires/${country.slug}/${city.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: service.shortTitle,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  const whatsappMessage = `Bonjour Monsieur Sako, je vous contacte depuis ${city.name} (${country.name}) concernant le service "${service.shortTitle}". Pouvons-nous échanger sur mon projet ?`;

  // Get other services in this city
  const otherServices = TERRITORY_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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
            <Link href={`/territoires/${country.slug}/${city.slug}` as any}>{city.name}</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{service.shortTitle}</span>
          </nav>

          <div className={styles.badge}>
            <TerritoryServiceIcon iconType={service.iconType} size={16} />
            <span>{service.badge} — {city.name}, {country.name}</span>
          </div>

          <h1 className={styles.title}>
            {service.shortTitle} à <br />
            <span className={styles.highlight}>{city.name} ({country.name})</span>
          </h1>

          <p className={styles.subtitle}>
            {service.hook.replace(/\{city\}/g, `${city.name} (${country.name})`)}
          </p>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Contacter la Direction sur WhatsApp</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Demander un Devis Personnalisé</span>
            </Link>
          </div>
        </div>
      </section>

      <AfricanPatternRibbon />

      {/* 02 // ANALYSE LOCALE & PROPOSITION DE VALEUR */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Expertise Territoriale</span>
            <h2 className={styles.sectionTitle}>
              Pourquoi ce Service est Crucial pour les Entreprises de <span className={styles.highlight}>{city.name}</span>
            </h2>
            <p className={styles.sectionSubtitle} style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              {service.description.replace(/\{city\}/g, city.name)}
            </p>
          </div>

          <div className={styles.grid2} style={{ marginTop: '2.5rem' }}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <Building2 size={22} />
                </div>
                <span className={styles.cardTag}>Contexte Sectoriel</span>
              </div>
              <h3 className={styles.cardTitle}>Défis Spécifiques à {city.name}</h3>
              <p className={styles.cardDesc}>{city.digitalChallenges}</p>
              <div className={styles.cardMeta}>
                <span>Pôles d&apos;intervention & quartiers desservis :</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                  {city.localAnchors.map((anchor, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.2rem 0.55rem',
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

            <div className={styles.card} style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}>
                  <Award size={22} />
                </div>
                <span className={styles.cardTag} style={{ color: '#10B981' }}>Bénéfices Directs</span>
              </div>
              <h3 className={styles.cardTitle}>Impact Immédiat sur votre Chiffre d&apos;Affaires</h3>
              <div className={styles.benefitsGrid} style={{ marginTop: '0', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {service.benefits.map((b, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <CheckCircle2 size={18} className={styles.benefitIcon} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // LIVRABLES & MODULES INCLUS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Plan d&apos;Exécution</span>
            <h2 className={styles.sectionTitle}>
              Ce Qui Est Livré pour Votre Projet à <span className={styles.highlight}>{city.name}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Une méthodologie éprouvée garantissant une mise en production rapide, sécurisée et performante.
            </p>
          </div>

          <div className={styles.deliverablesList} style={{ maxWidth: '900px', margin: '0 auto' }}>
            {service.deliverables.map((d, index) => (
              <div key={index} className={styles.deliverableItem}>
                <div className={styles.deliverableIcon}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className={styles.deliverableTitle}>{d.title}</h3>
                  <p className={styles.deliverableDesc}>{d.desc.replace(/\{city\}/g, city.name)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // FAQ GÉOLOCALISÉE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Questions Fréquentes</span>
            <h2 className={styles.sectionTitle}>
              Foire Aux Questions — <span className={styles.highlight}>{city.name}</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {service.faq.map((item, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  <HelpCircle size={20} className={styles.faqQuestionIcon} />
                  <span>{item.question.replace(/\{city\}/g, city.name)}</span>
                </h3>
                <p className={styles.faqAnswer}>
                  {item.answer.replace(/\{city\}/g, city.name)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 // AUTRES SERVICES DISPONIBLES À CETTE VILLE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>Solutions Complémentaires</span>
            <h2 className={styles.sectionTitle}>
              Découvrez Aussi nos Autres Pôles à <span className={styles.highlight}>{city.name}</span>
            </h2>
          </div>

          <div className={styles.grid}>
            {otherServices.map((other) => (
              <div key={other.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <TerritoryServiceIcon iconType={other.iconType} size={20} />
                  </div>
                  <span className={styles.cardTag}>{city.name}</span>
                </div>
                <h3 className={styles.cardTitle}>{other.shortTitle}</h3>
                <p className={styles.cardDesc}>{other.hook.replace(/\{city\}/g, city.name)}</p>
                <Link
                  href={`/territoires/${country.slug}/${city.slug}/${other.slug}` as any}
                  className={styles.cardLink}
                >
                  <span>Consulter cette offre</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 // CADRAGE FINAL & CONTACT DIRECTION */}
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            Lancez Votre Projet à <span className={styles.highlight}>{city.name}</span> Dès Aujourd&apos;hui
          </h2>
          <p className={styles.ctaText}>
            Discutez directement avec Monsieur Sako Barou Ben Oumar de votre stratégie digitale à {city.name}. 
            Étude de faisabilité rapide, diagnostic sans engagement et cadrage sous 24 à 48 heures ouvrées.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PhoneCall size={18} />
              <span>Lancer l&apos;Échange WhatsApp VIP</span>
            </a>
            <Link href="/devis" className={styles.btnSecondary}>
              <TrendingUp size={18} />
              <span>Remplir le Formulaire de Devis</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
