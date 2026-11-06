import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  Zap,
  Target,
  Clock,
  Compass,
  Layers,
  HelpCircle
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import BaroubaMockup from '@/components/v2/BaroubaMockup';
import { DETAILED_SERVICES, getDetailedServiceBySlug, DetailedService } from '@/lib/servicesData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './service.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const service = getDetailedServiceBySlug(slug);
  if (!service) return {};

  const canonicalUrl = `https://www.baroubagroup.com/services/${service.slug}`;

  return {
    title: `${service.title} | BAROUBA GROUP`,
    description: service.hookSubtitle,
    keywords: [
      service.title,
      'agence web ouagadougou',
      'communication digitale burkina faso',
      'community manager ouagadougou',
      'BAROUBA GROUP'
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | BAROUBA GROUP`,
      description: service.hookSubtitle,
      type: 'website',
      url: canonicalUrl,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [
        {
          url: 'https://www.baroubagroup.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export const dynamic = 'force-dynamic';

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const service = getDetailedServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.baroubagroup.com/services/${service.slug}#service`,
    name: service.title,
    description: service.hookSubtitle,
    provider: {
      '@type': 'ProfessionalService',
      name: 'BAROUBA GROUP',
      url: 'https://www.baroubagroup.com',
      telephone: '+226-74-82-66-66',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bobo-Dioulasso',
        addressRegion: 'Hauts-Bassins',
        addressCountry: 'BF',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Burkina Faso',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.deliverables.map((d, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: d.module,
          description: d.items.join(', '),
        },
      })),
    },
  };

  return (
    <div className={styles.page}>
      {/* Schema.org Service Definition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* 01 // HERO SHOWCASE SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          {/* Back Navigation Button */}
          <div className={styles.backRow}>
            <Link href="/services" className={styles.backBtn}>
              <ArrowLeft size={16} />
              <span>Retour à tous les services</span>
            </Link>
          </div>

          <div className={styles.heroGrid}>
            {/* Left: Persuasive Sales Hook */}
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <span className={styles.badgeDiamond}>◆</span>
                <span>{service.heroBadge}</span>
              </div>

              <h1 className={styles.heroTitle}>
                {service.hookHeadline}
              </h1>

              <p className={styles.heroSubtitle}>
                {service.hookSubtitle}
              </p>

              {/* Avatar Client Persona Callout */}
              <div className={styles.avatarBox}>
                <div className={styles.avatarHeader}>
                  <span className={styles.livePulseDot} aria-hidden="true" />
                  <Target size={15} />
                  <span>DIAGNOSTIC DU PROFIL &amp; ÉVALUATION SITUATION ACTUELLE</span>
                </div>
                <div className={styles.avatarTargetRow}>
                  <span className={styles.avatarTargetLabel}>Cible Identifiée :</span>
                  <span className={styles.avatarTarget}>{service.avatarProfile.target}</span>
                </div>
                <p className={styles.avatarDesc}>{service.avatarProfile.description}</p>
                <div className={styles.avatarStatusBadge}>
                  <span className={styles.statusDot}></span>
                  <span>Situation terrain analysée • Prise en charge sur-mesure</span>
                </div>
              </div>

              {/* CTA Action Row - Qualified Contact */}
              <div className={styles.ctaRow}>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryWaBtn}
                >
                  <WhatsAppIcon size={18} />
                  <span>Demander un audit stratégique sur WhatsApp</span>
                </a>

                <a href="#cadrage-sur-mesure" className={styles.secondaryBtn}>
                  <span>Modalités sur-mesure</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className={styles.trustBar}>
                {service.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className={styles.trustItem}>
                    <span className={styles.trustVal}>{m.value}</span>
                    <span className={styles.trustLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 100% Native Barouba Mockup Preview */}
            <div className={styles.visualCol}>
              <div className={styles.mockupWrapper}>
                <BaroubaMockup type={service.mockupType} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Geometric Ribbon Frieze */}
      <AfricanPatternRibbon label={`EXPERTISE STRATÉGIQUE — ${service.category.toUpperCase()}`} />

      {/* 02 // PAIN POINTS (LE DIAGNOSTIC DU CLIENT AVATAR) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDiamond}>◆</span>
              <span>DIAGNOSTIC TERRAIN &amp; BLOCAGES COURANTS</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Diagnostic Terrain : <span className="text-gold-gradient">Évaluation de votre Situation Actuelle</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              La majorité des entreprises et commerces à Ouagadougou et dans la sous-région se heurtent aux mêmes obstacles structurels qui freinent leur chiffre d’affaires.
            </p>
          </div>

          {/* Diagnostic Alert Box */}
          <div className={styles.diagnosticBanner}>
            <div className={styles.diagBannerLeft}>
              <div className={styles.diagBannerIconWrap}>
                <AlertTriangle size={22} />
              </div>
              <div>
                <div className={styles.diagBannerTitle}>Évaluation Initiale des Points de Friction</div>
                <div className={styles.diagBannerSubtitle}>
                  Identifiez les 4 signaux d’alerte terrain qui pénalisent directement la rentabilité de votre activité :
                </div>
              </div>
            </div>
            <div className={styles.diagBannerBadge}>
              <span className={styles.pulseDotAmber} />
              <span>Diagnostic Opérationnel UEMOA</span>
            </div>
          </div>

          <div className={styles.painGrid}>
            {service.painPoints.map((pain, idx) => (
              <div key={idx} className={styles.painCard}>
                <div className={styles.painCardHeader}>
                  <div className={styles.painNumber}>SIGNAL D’ALERTE #0{idx + 1}</div>
                  <div className={styles.painBadge}>Point Critique</div>
                </div>

                <div className={styles.painBody}>
                  <div className={styles.painIconWrap}>
                    <AlertTriangle size={22} />
                  </div>
                  <div>
                    <h3 className={styles.painTitle}>{pain.title}</h3>
                    <p className={styles.painDesc}>{pain.description}</p>
                  </div>
                </div>

                <div className={styles.painConsequenceRow}>
                  <span className={styles.consequenceDot}>⚠️</span>
                  <span><strong>Impact constaté :</strong> Perte directe d’opportunités commerciales et dégradation de la marge.</span>
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostic Summary & Action Bar */}
          <div className={styles.diagnosticSummaryBox}>
            <div className={styles.diagSummaryLeft}>
              <div className={styles.diagSummaryIcon}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <div className={styles.diagSummaryTitle}>Votre entreprise présente au moins 2 de ces signaux ?</div>
                <p className={styles.diagSummaryText}>
                  Ne laissez pas ces blocages éroder votre position sur le marché. Nos stratèges réalisent une évaluation confidentielle et vous remettent un plan d’action correctif sous 24h.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour BAROUBA GROUP, suite à l'évaluation sur la page ${service.title}, je souhaite un diagnostic approfondi de notre situation actuelle.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.diagSummaryCta}
            >
              <WhatsAppIcon size={18} />
              <span>Demander un diagnostic sans engagement</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03 // MANIFESTO & NOTRE STRATÉGIE EN 5 ÉTAPES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          {/* Manifesto Box */}
          <div className={styles.manifestoBox}>
            <div className={styles.manifestoBadge}>
              <Sparkles size={14} />
              <span>{service.manifesto.badge}</span>
            </div>
            <h2 className={styles.manifestoHeadline}>{service.manifesto.headline}</h2>
            <div className={styles.manifestoParagraphs}>
              {service.manifesto.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* 5-Step Methodology Timeline */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDiamond}>◆</span>
              <span>MÉTHODOLOGIE D'ÉLITE EN 5 ÉTAPES</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Comment nous structurons <span className="text-gold-gradient">votre stratégie de A à Z</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Chaque étape de notre intervention est documentée et orientée vers un seul objectif : accélérer vos ventes et renforcer votre autorité.
            </p>
          </div>

          <div className={styles.strategyGrid}>
            {service.strategySteps.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNumBox}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <span className={styles.stepNumLabel}>Étape</span>
                </div>

                <div className={styles.stepMain}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.stepTagline}>{step.tagline}</div>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>

                <div className={styles.stepDeliverables}>
                  <div className={styles.stepDelivTitle}>Livrables clés :</div>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className={styles.stepDelivRow}>
                      <CheckCircle2 size={15} className={styles.stepDelivCheck} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* African Geometric Ribbon Frieze */}
      <AfricanPatternRibbon label="LIVRABLES CLÉS EN MAIN & ENGAGEMENTS CONTRACTUELS" />

      {/* 04 // DELIVERABLES (CE QUE COMPREND L'ACCOMPAGNEMENT) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDiamond}>◆</span>
              <span>LIVRABLES CLÉS EN MAIN</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Tout ce qui est inclus dans <span className="text-gold-gradient">votre prestation</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Aucun flou artistique. Vous savez exactement ce que nos spécialistes conçoivent et vous livrent chaque semaine.
            </p>
          </div>

          <div className={styles.deliverablesGrid}>
            {service.deliverables.map((del, idx) => (
              <div key={idx} className={styles.deliverableCol}>
                <span className={styles.moduleTag}>Module 0{idx + 1}</span>
                <h3 className={styles.moduleTitle}>{del.module}</h3>

                <div className={styles.itemsList}>
                  {del.items.map((item, i) => (
                    <div key={i} className={styles.itemRow}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 // MODALITÉS SUR-MESURE (SANS AUCUN PRIX FIXE) */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="cadrage-sur-mesure">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDiamond}>◆</span>
              <span>ACCOMPAGNEMENT 100% SUR-MESURE</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Des modalités calibrées selon <span className="text-gold-gradient">votre stade de croissance</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Pas de formule rigide ni de catalogue figé. Chaque marque possède une maturité, une audience et des ambitions propres. Notre proposition est construite sur mesure après un diagnostic approfondi.
            </p>
          </div>

          <div className={styles.levelsGrid}>
            {service.interventionLevels.map((lvl, idx) => {
              const isPop = lvl.isPopular;
              const waText = `Bonjour BAROUBA GROUP, je souhaite planifier un cadrage stratégique sur-mesure pour : ${lvl.name} (Service : ${service.title})`;

              return (
                <div 
                  key={idx} 
                  className={`${styles.levelCard} ${isPop ? styles.popularCard : ''}`}
                >
                  {isPop && (
                    <div className={styles.popularPill}>Recommandé</div>
                  )}

                  <div className={styles.levelHeader}>
                    <h3 className={styles.levelName}>{lvl.name}</h3>
                    <div className={styles.levelBadge}>{lvl.badge}</div>
                    <div className={styles.levelScope}>{lvl.scope}</div>
                    <p className={styles.levelDesc}>{lvl.desc}</p>
                  </div>

                  <div className={styles.featuresList}>
                    {lvl.features.map((feat, fIdx) => (
                      <div key={fIdx} className={styles.featRow}>
                        <span className={styles.featDiamond}>◆</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.levelCtaBtn} ${isPop ? styles.popularCtaBtn : ''}`}
                  >
                    <span>{lvl.ctaText}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Guarantee / Risk Reversal Box */}
          <div className={styles.guaranteeBox}>
            <ShieldCheck size={36} className={styles.guaranteeIcon} />
            <p className={styles.guaranteeText}>
              <strong>Garantie Contractuelle BAROUBA GROUP :</strong> {service.guaranteeText}
            </p>
          </div>
        </div>
      </section>

      {/* 06 // FAQ SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDiamond}>◆</span>
              <span>QUESTIONS FRÉQUENTES</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Tout ce que vous devez savoir <span className="text-gold-gradient">avant de vous décider</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Nous répondons avec transparence aux interrogations les plus fréquentes de nos clients partenaires.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {service.faq.map((item, idx) => (
              <div key={idx} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 // FINAL CALL TO ACTION BOX */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            
            <h2 className={styles.ctaTitle}>
              Prêt à structurer votre stratégie avec BAROUBA GROUP ?
            </h2>
            <p className={styles.ctaDesc}>
              Nos stratèges seniors étudient votre positionnement actuel et vous proposent un plan d’action opérationnel sous 24h ouvrées.
            </p>

            <div className={styles.ctaButtons}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryWaBtn}
              >
                <WhatsAppIcon size={20} />
                <span>Planifier un cadrage gratuit sur WhatsApp</span>
              </a>

              <Link href="/contact" className={styles.secondaryBtn}>
                <span>Demander un échange confidentiel</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      width={size} 
      height={size}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
