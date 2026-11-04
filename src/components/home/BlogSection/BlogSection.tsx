'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Sparkles, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { mockPosts } from '@/lib/data';
import styles from './BlogSection.module.css';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogSection() {
  const t = useTranslations('blog_section');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.section} id="blog" ref={ref}>
      <div className={styles.bgGlow} aria-hidden="true" />
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
            <span>INSIGHTS, IA & CROISSANCE</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Dernières Analyses Stratégiques & <span className={styles.goldText}>Veille Technologique</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Conseils d’ingénierie, retours d’expérience sur les agents IA et stratégies d’acquisition 
            décortiqués par nos spécialistes.
          </motion.p>
        </div>

        {/* 3 Columns Grid */}
        <div className={styles.grid}>
          {mockPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post._id}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/blog/${post.slug.current}` as any} className={styles.articleLink}>
                <SpotlightCard className={styles.card} spotlightColor="rgba(245, 166, 35, 0.16)">
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <span className={styles.categoryBadge}>{post.category.title}</span>
                      <div className={styles.readTime}>
                        <Clock size={13} />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>

                    <h3 className={styles.articleTitle}>{post.title}</h3>
                    <p className={styles.articleExcerpt}>{post.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <div className={styles.publishDate}>
                        <Calendar size={13} />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className={styles.readMore}>
                        <span>Lire l'article</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/blog" className={styles.seeAllBtn}>
            <span>Accéder à tous les articles</span>
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
