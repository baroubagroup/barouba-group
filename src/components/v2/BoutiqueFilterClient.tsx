'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { BoutiqueProduct } from '@/lib/boutiqueData';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { 
  Palette, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Layers, 
  Terminal,
  Server
} from 'lucide-react';
import styles from './BoutiqueFilterClient.module.css';

interface BoutiqueFilterClientProps {
  products: BoutiqueProduct[];
}

type CategoryFilter = 'all' | 'template' | 'tool' | 'subscription';

const CATEGORIES: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'Tous les produits', icon: <Layers size={16} /> },
  { id: 'template', label: 'Templates & Codebases', icon: <Palette size={16} /> },
  { id: 'tool', label: 'Outils & Prompts IA', icon: <Sparkles size={16} /> },
  { id: 'subscription', label: 'Abonnements & Sérénité', icon: <ShieldCheck size={16} /> },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function ProductVisualPreview({ slug }: { slug: string }) {
  if (slug === 'pack-tunnel-ecommerce-haute-vente') {
    return (
      <div className={styles.mockupMiniWindow}>
        <div className={styles.mockupMiniHeader}>
          <div className={styles.mockupDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <span className={styles.mockupUrl}>tunnel-nextjs.baroubagroup.com</span>
          <span className={styles.mockupTag}>0.8s ⚡</span>
        </div>
        <div className={styles.mockupMiniBody}>
          <div className={styles.mockupLeft}>
            <div className={styles.mockupPill}>Next.js 16 • Tailwind CSS</div>
            <div className={styles.mockupHeading}>Commande 1-Clic WhatsApp</div>
          </div>
          <div className={styles.mockupBadgeGreen}>+340% CRO</div>
        </div>
      </div>
    );
  }

  if (slug === 'barouba-prompt-engine-2026') {
    return (
      <div className={styles.mockupMiniWindow}>
        <div className={styles.mockupMiniHeader}>
          <div className={styles.mockupDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <span className={styles.mockupUrl}>prompt-engine.ia / sahel-v6</span>
          <span className={styles.mockupTag}>350+ Prompts</span>
        </div>
        <div className={styles.mockupMiniBody}>
          <div className={styles.mockupLeft}>
            <div className={styles.mockupPill}>Midjourney v6 • Flux • Claude</div>
            <div className={styles.mockupHeading}>Teints Sahéliens 8K & AIDA</div>
          </div>
          <div className={styles.mockupBadgeGold}>Studio IA</div>
        </div>
      </div>
    );
  }

  if (slug === 'kit-tracking-serveur-capi-meta-tiktok') {
    return (
      <div className={styles.mockupMiniWindow}>
        <div className={styles.mockupMiniHeader}>
          <div className={styles.mockupDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <span className={styles.mockupUrl}>capi-worker.cloudflare.com</span>
          <span className={styles.mockupTag}>Anti-iOS14</span>
        </div>
        <div className={styles.mockupMiniBody}>
          <div className={styles.mockupLeft}>
            <div className={styles.mockupPill}>Cloudflare Workers • Meta CAPI</div>
            <div className={styles.mockupHeading}>100% Conversions Capturées</div>
          </div>
          <div className={styles.mockupBadgeBlue}>0% Perte</div>
        </div>
      </div>
    );
  }

  // contrat-maintenance-securite-cloud-vip
  return (
    <div className={styles.mockupMiniWindow}>
      <div className={styles.mockupMiniHeader}>
        <div className={styles.mockupDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <span className={styles.mockupUrl}>cloud-shield.baroubagroup.com</span>
        <span className={styles.mockupTag}>99.98% SLA</span>
      </div>
      <div className={styles.mockupMiniBody}>
        <div className={styles.mockupLeft}>
          <div className={styles.mockupPill}>Surveillance 24/7 • Backups</div>
          <div className={styles.mockupHeading}>Intervention Urgente &lt; 1h</div>
        </div>
        <div className={styles.mockupBadgeEmerald}>VIP Shield</div>
      </div>
    </div>
  );
}

export default function BoutiqueFilterClient({ products }: BoutiqueFilterClientProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className={styles.wrapper}>
      {/* Interactive Tabs */}
      <div className={styles.filterBar}>
        <div className={styles.tabsContainer}>
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? products.length
              : products.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                aria-pressed={isActive}
              >
                <span className={styles.tabIcon}>{cat.icon}</span>
                <span className={styles.tabLabel}>{cat.label}</span>
                <span className={styles.tabCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className={styles.grid}>
        {filtered.map((product) => {
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`;

          return (
            <div key={product.id} className={styles.card}>
              {/* Card Header Illustration / Mockup Banner */}
              <div className={styles.cardHeaderGraphic}>
                <div className={styles.cardHeaderTopRow}>
                  <span className={styles.badgeLabel}>{product.badge}</span>
                  <div className={styles.ratingBox}>
                    <Star size={13} fill="#d97706" color="#d97706" />
                    <span>{product.rating}</span>
                    <span className={styles.reviewsText}>({product.reviewsCount} avis)</span>
                  </div>
                </div>

                {/* Interactive UI Mockup Preview */}
                <ProductVisualPreview slug={product.slug} />
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                <div className={styles.categorySub}>
                  <span>{product.categoryLabel}</span>
                </div>

                <h3 className={styles.productTitle}>
                  <Link href={{ pathname: '/boutique/[slug]', params: { slug: product.slug } }} className={styles.titleLink}>
                    {product.title}
                  </Link>
                </h3>

                <p className={styles.shortDesc}>{product.shortDesc}</p>

                {/* Key Deliverables Checkmarks */}
                <div className={styles.deliverablesList}>
                  {product.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className={styles.deliverableItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>

                {/* Price Box */}
                <div className={styles.pricingSection}>
                  <div className={styles.priceContainer}>
                    <div className={styles.currentPriceRow}>
                      <span className={styles.priceMain}>{product.priceFCFA}</span>
                      <span className={styles.priceEur}>({product.priceEUR})</span>
                      {product.originalPriceFCFA && (
                        <span className={styles.discountBadge}>Remise</span>
                      )}
                    </div>
                    {product.originalPriceFCFA && (
                      <span className={styles.originalPrice}>
                        Au lieu de {product.originalPriceFCFA}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actionsRow}>
                  <Link
                    href={{ pathname: '/boutique/[slug]', params: { slug: product.slug } }}
                    className={styles.btnDetails}
                  >
                    <span>Voir la fiche complète</span>
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnWhatsapp}
                    title="Commander directement sur WhatsApp"
                  >
                    <WhatsAppIcon />
                    <span>Commander</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
