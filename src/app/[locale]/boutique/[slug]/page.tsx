import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import { BOUTIQUE_PRODUCTS, getBoutiqueProductBySlug } from '@/lib/boutiqueData';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  FileText, 
  ArrowRight, 
  ArrowDown, 
  HelpCircle, 
  Package, 
  Sparkles, 
  Lock, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';
import styles from './product.module.css';

interface ProductPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return BOUTIQUE_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getBoutiqueProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.title} | Boutique Officielle BAROUBA GROUP SARL`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.title} — ${product.priceFCFA}`,
      description: product.shortDesc,
    },
  };
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default async function ProductSinglePage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getBoutiqueProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappCheckoutUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <article className={styles.salesPage}>
      {/* Breadcrumb Bar */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav aria-label="Fil d'Ariane" className={styles.breadcrumbNav}>
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={13} className={styles.breadcrumbSep} />
            <Link href="/boutique" className={styles.breadcrumbLink}>Boutique</Link>
            <ChevronRight size={13} className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <div className={styles.heroBadgeRow}>
                <span className={styles.badgeCategory}>{product.categoryLabel}</span>
                <span className={styles.badgeFeatured}>{product.badge}</span>
                <div className={styles.ratingBox}>
                  <Star size={14} fill="#d97706" color="#d97706" />
                  <span>{product.rating} / 5</span>
                  <span style={{ opacity: 0.6 }}>({product.reviewsCount} avis vérifiés)</span>
                </div>
              </div>

              <h1 className={styles.heroTitle}>{product.title}</h1>
              <p className={styles.heroHeadline}>{product.heroHeadline}</p>

              {/* Key Highlights */}
              <div className={styles.heroHighlights}>
                {product.keyHighlights.map((hl, i) => (
                  <div key={i} className={styles.highlightItem}>
                    <CheckCircle2 size={18} className={styles.checkHighlight} />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Instant Purchase Card */}
            <div className={styles.purchaseCard}>
              <div className={styles.priceHeader}>
                <span className={styles.priceTagText}>Tarif Clé-en-main</span>
                {product.originalPriceFCFA && (
                  <span className={styles.discountPill}>Remise Immédiate</span>
                )}
              </div>

              <div className={styles.priceRow}>
                <span className={styles.priceMainBig}>{product.priceFCFA}</span>
                <span className={styles.priceEurBig}>({product.priceEUR})</span>
              </div>

              {product.originalPriceFCFA && (
                <div className={styles.originalPriceBig}>
                  Au lieu de {product.originalPriceFCFA}
                </div>
              )}

              {/* Instant WhatsApp Order CTA */}
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instantWhatsappBtn}
              >
                <WhatsAppIcon />
                <span>Commander via WhatsApp</span>
              </a>

              {/* Scroll to deliverables */}
              <a href="#livrables" className={styles.anchorDeliverablesBtn}>
                <span>Découvrir les 6 livrables inclus</span>
                <ArrowDown size={14} />
              </a>

              {/* Purchase Guarantees Strip */}
              <div className={styles.purchaseGuarantees}>
                <div className={styles.guaranteeRow}>
                  <Zap size={16} className={styles.guaranteeIcon} />
                  <span>Livraison immédiate après validation du paiement</span>
                </div>
                <div className={styles.guaranteeRow}>
                  <CreditCard size={16} className={styles.guaranteeIcon} />
                  <span>Orange Money, Moov Money ou virement bancaire</span>
                </div>
                <div className={styles.guaranteeRow}>
                  <ShieldCheck size={16} className={styles.guaranteeIcon} />
                  <span>Assistance technique directe 30 jours offerte</span>
                </div>
                <div className={styles.guaranteeRow}>
                  <FileText size={16} className={styles.guaranteeIcon} />
                  <span>Facture définitive émise par BAROUBA GROUP SARL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* African Pattern Ribbon */}
      <AfricanPatternRibbon label="DIAGNOSTIC & VALEUR AJOUTÉE VÉRIFIÉE" />

      {/* Section Problem Solved */}
      <section className={styles.sectionProblem}>
        <div className="container">
          <div className={styles.problemHeader}>
            <span className={styles.problemTag}>Le Goulet d'Étranglement</span>
            <h2 className={styles.problemTitle}>{product.problemSolved.title}</h2>
            <p className={styles.problemDesc}>{product.problemSolved.description}</p>
          </div>

          <div className={styles.problemGrid}>
            {product.problemSolved.points.map((pt, i) => (
              <div key={i} className={styles.problemCard}>
                <div className={styles.problemCardNumber}>{i + 1}</div>
                <p className={styles.problemCardText}>{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Deliverables */}
      <section id="livrables" className={styles.sectionDeliverables}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTagGold}>Contenu Complet du Pack</span>
            <h2 className={styles.sectionHeading}>Ce que vous recevez immédiatement</h2>
            <p className={styles.sectionSub}>
              Aucun concept abstrait : des actifs techniques et opérationnels concrets, prêts à être branchés sur votre business dès aujourd’hui.
            </p>
          </div>

          <div className={styles.deliverablesGrid}>
            {product.deliverables.map((d, i) => (
              <div key={i} className={styles.deliverableCard}>
                <div className={styles.deliverableIconBubble}>{d.icon}</div>
                <h3 className={styles.deliverableTitle}>{d.title}</h3>
                <p className={styles.deliverableDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tech Specs & Guarantee */}
      <section className={styles.sectionSpecs}>
        <div className="container">
          <div className={styles.specsLayout}>
            {/* Tech Specs */}
            <div className={styles.specsTableCard}>
              <h3 className={styles.specsTableTitle}>Fiche Technique & Compatibilité</h3>
              <div className={styles.specsList}>
                {product.technicalSpecs.map((spec, i) => (
                  <div key={i} className={styles.specRow}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee Box */}
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeBadge}>
                <Award size={14} />
                <span>Garantie de Sérénité</span>
              </div>
              <h3 className={styles.guaranteeTitle}>Assistance & Engagement Zéro Risque</h3>
              <p className={styles.guaranteeText}>{product.guaranteeText}</p>
              <div className={styles.guaranteeSarlFooter}>
                Engagé contractuellement par <strong>BAROUBA GROUP SARL</strong>, société de droit commercial burkinabè (OHADA), siège social à Bobo-Dioulasso.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className={styles.sectionFaq}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTagGold}>Réponses à vos Questions</span>
            <h2 className={styles.sectionHeading}>Foire Aux Questions</h2>
            <p className={styles.sectionSub}>
              Tout ce que vous devez savoir avant de passer commande.
            </p>
          </div>

          <div className={styles.faqList}>
            {product.faq.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Final Conversion CTA */}
      <section className={styles.sectionFinalCta}>
        <div className="container">
          <div className={styles.finalCtaCard}>
            <div className={styles.finalCtaGlow} aria-hidden="true" />
            <h2 className={styles.finalCtaTitle}>Prêt à intégrer {product.title} ?</h2>
            <div className={styles.finalCtaPriceText}>{product.priceFCFA} ({product.priceEUR})</div>
            <p className={styles.finalCtaSub}>
              Validez votre commande maintenant. Notre équipe vous transmet les accès complets et le guide d’accompagnement directement par WhatsApp et email sous 5 minutes.
            </p>

            <div className={styles.finalCtaActions}>
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnFinalWhatsapp}
              >
                <WhatsAppIcon />
                <span>Commander maintenant sur WhatsApp</span>
              </a>
              <Link href="/boutique" className={styles.btnBackCatalog}>
                <span>← Retourner au catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
