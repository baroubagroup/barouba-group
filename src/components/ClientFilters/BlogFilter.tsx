'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';

export default function BlogFilter({ posts, translations, styles }: { posts: any[], translations: any, styles: any }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories from posts
  const uniqueCategories = Array.from(new Set(posts.map(p => p.category?.title).filter(Boolean)));
  const categories = ['all', ...uniqueCategories];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category?.title === activeCategory);

  function formatDate(dateStr: string) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  }

  return (
    <>
      {/* Category filters */}
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filterRow}>
            {categories.map((cat: any) => (
              <button 
                key={cat} 
                className={`tag ${activeCategory === cat ? 'tag--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? translations.all : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className={`section ${styles.articles}`}>
        <div className="container">
          <div className={styles.grid}>
            {filteredPosts.map((post: any, i: number) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current || ''}` as any}
                className={styles.articleCard}
                style={{ '--delay': `${i * 0.07}s` } as React.CSSProperties}
              >
                {/* Image */}
                <div className={styles.imgWrap}>
                  {post.mainImage ? (
                    <img src={post.mainImage} alt={post.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  ) : (
                    <div className={styles.imgPlaceholder}>📝</div>
                  )}
                  {post.category && <span className={styles.catPill}>{post.category.title}</span>}
                </div>
                {/* Content */}
                <div className={styles.articleContent}>
                  <div className={styles.meta}>
                    <span>⏱ {post.readTime || 5} {translations.readTime}</span>
                    <span className={styles.dot}>·</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2 className={styles.articleTitle}>{post.title}</h2>
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                  <div className={styles.readMore}>
                    <span>{translations.published} {formatDate(post.publishedAt)}</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
