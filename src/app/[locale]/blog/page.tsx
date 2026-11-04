import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Clock, BookOpen, Sparkles, Compass } from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { mockPosts } from '@/lib/data';
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

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>PÔLE RECHERCHE, ÉTUDES & EXPERTISE DIGITALE BURKINA FASO</span>
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
                <div className={styles.visualSymbolTitle}>PÔLE INGÉNIERIE & IA</div>
                <div className={styles.visualSymbolSub}>DOSSIER DE RÉFÉRENCE 2026</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="DOSSIERS D'AUTORITÉ & ÉTUDES OPÉRATIONNELLES" />

      {/* Articles Grid */}
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
    </div>
  );
}
