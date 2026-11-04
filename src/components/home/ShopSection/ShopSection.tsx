'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { mockProducts, WHATSAPP_NUMBER } from '@/lib/data';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ShoppingBag, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  GraduationCap, 
  Repeat, 
  Wrench,
  Check
} from 'lucide-react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import styles from './ShopSection.module.css';

const CATEGORY_MAP: Record<string, { label: string; icon: any; accent: string }> = {
  template: { label: 'Templates Pro', icon: Layers, accent: '#FFD700' },
  formation: { label: 'Formation', icon: GraduationCap, accent: '#F5A623' },
  subscription: { label: 'Abonnement', icon: Repeat, accent: '#E67814' },
  tool: { label: 'Outil & Script', icon: Wrench, accent: '#FFB834' },
};

export default function ShopSection() {
  const t = useTranslations('shop_section');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.section} id="boutique" aria-labelledby="shop-title" ref={ref}>
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={14} className={styles.badgeSparkle} />
            <span>BOUTIQUE & RESSOURCES DIGITALES</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            id="shop-title"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ressources Prêtes à l’Emploi pour <span className={styles.goldText}>Accélérer Votre Business</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Templates haute conversion, masterclasses et accompagnements pour déployer des tunnels 
            et systèmes rentables en un temps record.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className={styles.grid}>
          {mockProducts.slice(0, 4).map((product, i) => {
            const catInfo = CATEGORY_MAP[product.category] || { label: product.category, icon: ShoppingBag, accent: '#F5A623' };
            const Icon = catInfo.icon;

            return (
              <motion.div
                key={product._id}
                className={styles.cardWrapper}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className={styles.productCard} spotlightColor={`${catInfo.accent}20`}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <div className={styles.productIconBox} style={{ borderColor: `${catInfo.accent}30` }}>
                        <Icon size={20} style={{ color: catInfo.accent }} />
                      </div>
                      <span className={styles.categoryTag} style={{ color: catInfo.accent, borderColor: `${catInfo.accent}35` }}>
                        {catInfo.label}
                      </span>
                    </div>

                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productDesc}>{product.description}</p>

                    <div className={styles.productFooter}>
                      <div className={styles.priceContainer}>
                        <span className={styles.priceLabel}>Investissement</span>
                        <span className={styles.price}>{product.price}</span>
                      </div>

                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.buyBtn}
                      >
                        <span>Commander</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
