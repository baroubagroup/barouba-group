import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ArrowRight, BookOpen, Sparkles, Award, Compass, Layers } from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { mockPosts } from '@/lib/data';
import { getAllPillars } from '@/lib/seoArticles';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog Stratégique & Guides Pratiques — Digital, Web & IA au Burkina Faso | BAROUBA GROUP',
  description:
    'Guides d’autorité, benchmarks tarifaires en FCFA et études de cas concrètes sur la création de sites web haute conversion, le Media Buying Meta / TikTok, et l’IA appliquée aux entreprises à Ouagadougou et Bobo-Dioulasso.',
  keywords: [
    'création site web burkina faso',
    'agence web ouagadougou',
    'publicité facebook burkina faso',
    'media buying afrique de louest',
    'formation intelligence artificielle burkina',
    'formation ia ouagadougou',
    'e-commerce burkina faso',
    'tunnel de vente whatsapp burkina',
  ],
  openGraph: {
    title: 'Blog Stratégique & Guides Pratiques — Digital, Web & IA au Burkina Faso | BAROUBA GROUP',
    description:
      'Guides d’autorité et stratégies concrètes pour dominer le digital au Burkina Faso et en Afrique de l’Ouest.',
    url: 'https://www.baroubagroup.com/fr/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const featured = mockPosts.find((p) => p.isFeatured) || mockPosts[0];
  const others = mockPosts.filter((p) => p._id !== featured._id);
  const pillars = getAllPillars();

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>PÔLE RECHERCHE, ÉTUDES &amp; EXPERTISE DIGITALE BURKINA FASO</span>
          </div>
          <h1 className={styles.pageTitle}>
            Les Guides Stratégiques pour <span className="text-gold-gradient">Dominer le Marché</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Pas de bavardage d’initiés ni de théories abstraites. Des guides complets, des benchmarks tarifaires réels en FCFA et des cas pratiques testés à Ouagadougou et Bobo-Dioulasso pour les décideurs ambitieux.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className={styles.featuredSection}>
        <div className="container">
          <Link href={`/blog/${featured.slug.current}` as any} className={styles.featuredCard}>
            <div className={styles.featuredInfo}>
              <div className={styles.featuredTagRow}>
                <span className={styles.featuredStarPill}>GUIDE MAJEUR PILIER</span>
                <span className={styles.categoryText}>{featured.category.title}</span>
                <span className={styles.readTimeText}>• {featured.readTime} min de lecture</span>
              </div>

              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>

              <div className={styles.featuredAction}>
                <span>Lire le guide complet</span>
                <ArrowRight size={18} />
              </div>
            </div>

            <div className={styles.featuredVisualBox}>
              <div className={styles.visualEmblem}>
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className={styles.visualSymbolSvg}>
                  <rect x="24" y="2" width="31" height="31" transform="rotate(45 24 2)" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="24" y="10" width="19.8" height="19.8" transform="rotate(45 24 10)" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="24" cy="24" r="5" fill="currentColor" />
                </svg>
              </div>
              <div className={styles.visualTextBox}>
                <div className={styles.visualSymbolTitle}>PÔLE INGÉNIERIE &amp; IA</div>
                <div className={styles.visualSymbolSub}>DOSSIER DE RÉFÉRENCE 2026</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="DOSSIERS D'AUTORITÉ &amp; ÉTUDES OPÉRATIONNELLES" />

      {/* Core Operational Articles */}
      <section className={styles.articlesSection}>
        <div className="container">
          <div className={styles.articlesGrid}>
            {others.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}` as any}
                className={styles.articleCard}
              >
                <div className={styles.cardTopRow}>
                  <span className={styles.cardCategory}>{post.category.title}</span>
                  <span className={styles.cardReadTime}>{post.readTime} min</span>
                </div>

                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.cardAuthor}>{post.author.name}</span>
                  <div className={styles.cardArrow}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Encyclopedic Pillar Guides Library */}
      {pillars.length > 0 && (
        <section className={styles.pillarsSection}>
          <div className="container">
            <div className={styles.pillarsHeader}>
              <div className={styles.pillarsBadge}>
                <Award size={16} />
                <span>BIBLIOTHÈQUE OFFICIELLE DES 54 GUIDES PILIERS (10 000+ MOTS)</span>
              </div>
              <h2 className={styles.pillarsTitle}>
                Les Ouvrages Majeurs d&apos;Autorité par <span className="text-gold-gradient">Domaine d&apos;Expertise</span>
              </h2>
              <p className={styles.pillarsSub}>
                Conçus sous la direction de <strong>Monsieur SAKO BAROU BEN OUMAR</strong>. Plus de 580 000 mots rédigés, conformité CIL / OHADA / DGI et méthodologies d&apos;élite applicables au Sahel.
              </p>
            </div>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={`/blog/${pillar.slug}` as any}
                  className={styles.pillarCard}
                >
                  <div className={styles.pillarTop}>
                    <span className={styles.pillarCluster}>{pillar.cluster}</span>
                    <span className={styles.pillarTag}>10 000+ Mots</span>
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <div className={styles.pillarBottom}>
                    <span className={styles.pillarAuthor}>Par M. SAKO BAROU BEN OUMAR</span>
                    <div className={styles.pillarCta}>
                      <span>Consulter l&apos;ouvrage</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
