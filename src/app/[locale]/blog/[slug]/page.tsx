import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Clock, MessageSquare, ChevronDown, CheckCircle2, Bookmark, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { getPostBySlug } from '@/lib/sanity';
import { mockPosts, WHATSAPP_NUMBER, BlogPost, BlogPostFAQ } from '@/lib/data';
import type { Metadata } from 'next';
import styles from './article.module.css';

interface ArticlePageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);
  if (!post) return {};

  const canonicalUrl = `https://www.baroubagroup.com/${locale}/blog/${post.slug.current}`;

  return {
    title: `${post.title} | BAROUBA GROUP Insights`,
    description: post.excerpt,
    keywords: post.metaKeywords || [
      'création site web burkina faso',
      'agence web ouagadougou',
      'media buying burkina',
      'intelligence artificielle burkina',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author?.name || 'BAROUBA GROUP'],
      url: canonicalUrl,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [
        {
          url: 'https://www.baroubagroup.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://www.baroubagroup.com/og-image.jpg'],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);

  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Extract H2 headings for Table of Contents
  const headings: { id: string; text: string }[] = [];
  if (post.content) {
    const lines = post.content.split('\n');
    let h2Count = 0;
    lines.forEach((line: string) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) {
        h2Count++;
        headings.push({
          id: `section-${h2Count}`,
          text: trimmed.replace('## ', '').trim(),
        });
      }
    });
  }

  // Related posts (excluding current)
  const relatedPosts = mockPosts.filter((p) => p.slug.current !== post.slug.current).slice(0, 3);

  // Schema.org BlogPosting
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author?.name || 'BAROUBA GROUP',
      url: 'https://www.baroubagroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BAROUBA GROUP',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.baroubagroup.com/logo-or.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.baroubagroup.com/${locale}/blog/${post.slug.current}`,
    },
    inLanguage: 'fr-BF',
    keywords: post.metaKeywords?.join(', '),
  };

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
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
        name: 'Blog & Perspectives',
        item: `https://www.baroubagroup.com/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.baroubagroup.com/${locale}/blog/${post.slug.current}`,
      },
    ],
  };

  // Schema.org FAQPage (if post has FAQ)
  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item: BlogPostFAQ) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  let currentH2Index = 0;

  return (
    <div className={styles.page}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            {/* Breadcrumb Navigation */}
            <nav className={styles.breadcrumbNav} aria-label="Fil d'Ariane">
              <Link href="/" className={styles.breadcrumbLink}>
                Accueil
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <Link href="/blog" className={styles.breadcrumbLink}>
                Blog
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbCurrent}>{post.title}</span>
            </nav>

            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>Retour à tous les articles</span>
            </Link>

            <div className={styles.metaRow}>
              <span className={styles.categoryTag}>{post.category.title}</span>
              <span className={styles.readTime}>• {post.readTime} min de lecture</span>
              <span className={styles.pubDate}>• Publié le {formattedDate}</span>
            </div>

            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.authorBox}>
              <div className={styles.authorAvatar}>
                <Image
                  src="/logo-or.svg"
                  alt="Barouba Group"
                  width={22}
                  height={22}
                  style={{ width: 'auto', height: '22px' }}
                />
              </div>
              <div>
                <div className={styles.authorName}>{post.author.name}</div>
                <div className={styles.authorRole}>{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="ANALYSE & PERSPECTIVE OPÉRATIONNELLE" />

      {/* Body Content */}
      <main className={styles.bodySection}>
        <div className="container">
          <div className={styles.bodyContainer}>
            {/* Key Takeaways Box (À retenir) */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className={styles.takeawaysBox}>
                <div className={styles.takeawaysHeader}>
                  <CheckCircle2 size={20} className={styles.takeawaysIcon} />
                  <h3 className={styles.takeawaysTitle}>Les Points Clés à Retenir</h3>
                </div>
                <ul className={styles.takeawaysList}>
                  {post.keyTakeaways.map((item: string, idx: number) => (
                    <li key={idx} className={styles.takeawaysItem}>
                      <span className={styles.takeawaysBullet}>◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Table of Contents (Sommaire) */}
            {headings.length > 0 && (
              <nav className={styles.tocBox} aria-label="Sommaire de l'article">
                <div className={styles.tocTitleRow}>
                  <Bookmark size={17} color="var(--color-gold)" />
                  <h4 className={styles.tocTitle}>Sommaire du Guide</h4>
                </div>
                <ul className={styles.tocList}>
                  {headings.map((h, idx) => (
                    <li key={idx} className={styles.tocItem}>
                      <span className={styles.tocIndex}>{idx + 1}.</span>
                      <a href={`#${h.id}`} className={styles.tocLink}>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Prose Content */}
            <div className={styles.proseContent}>
              {post.content ? (
                post.content.split('\n\n').map((paragraph: string, idx: number) => {
                  const trimmed = paragraph.trim();

                  // Table Parsing
                  if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
                    const tableLines = trimmed
                      .split('\n')
                      .map((l) => l.trim())
                      .filter((l) => l.startsWith('|'));
                    if (tableLines.length >= 2) {
                      const headerCells = tableLines[0]
                        .split('|')
                        .map((c) => c.trim())
                        .filter(Boolean);
                      // Skip index 1 if it's the divider row (:---)
                      const dataRows = tableLines.slice(2).map((row) =>
                        row
                          .split('|')
                          .map((c) => c.trim())
                          .filter(Boolean)
                      );
                      return (
                        <div key={idx} className={styles.tableContainer}>
                          <table className={styles.contentTable}>
                            <thead>
                              <tr>
                                {headerCells.map((h, i) => (
                                  <th key={i}>{h.replace(/\*\*/g, '')}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {dataRows.map((r, rowIdx) => (
                                <tr key={rowIdx}>
                                  {r.map((cell, cellIdx) => (
                                    <td key={cellIdx}>{cell.replace(/\*\*/g, '')}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                  }

                  // H2 Headings
                  if (trimmed.startsWith('## ')) {
                    currentH2Index++;
                    const sectionId = `section-${currentH2Index}`;
                    return (
                      <h2 key={idx} id={sectionId}>
                        {trimmed.replace('## ', '')}
                      </h2>
                    );
                  }

                  // H3 Headings
                  if (trimmed.startsWith('### ')) {
                    return <h3 key={idx}>{trimmed.replace('### ', '')}</h3>;
                  }

                  // Blockquotes
                  if (trimmed.startsWith('> ')) {
                    return <blockquote key={idx}>{trimmed.replace('> ', '')}</blockquote>;
                  }

                  // Unordered Lists
                  if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                    const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
                    return (
                      <ul key={idx}>
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^[-*]|\d+\.\s*/, '').trim()}</li>
                        ))}
                      </ul>
                    );
                  }

                  // Code Blocks
                  if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
                    const code = trimmed.replace(/^```[a-z]*\n?/, '').replace(/```$/, '');
                    return (
                      <pre key={idx} style={{ background: 'var(--bg-surface)', padding: '1.2rem', borderRadius: '12px', overflowX: 'auto', fontSize: '0.88rem', border: '1px solid var(--border-subtle)', margin: '1.8rem 0' }}>
                        <code>{code}</code>
                      </pre>
                    );
                  }

                  // Standard Paragraph
                  return <p key={idx}>{trimmed}</p>;
                })
              ) : (
                <p>{post.excerpt}</p>
              )}
            </div>

            {/* Native FAQ Accordion (W3C standard & 100% crawlable) */}
            {post.faq && post.faq.length > 0 && (
              <section className={styles.faqSection} aria-label="Questions Fréquentes">
                <div className={styles.faqHeader}>
                  <span className={styles.faqBadge}>QUESTIONS FRÉQUEMMENT POSÉES</span>
                  <h3 className={styles.faqTitle}>Foire Aux Questions (FAQ)</h3>
                </div>
                <div className={styles.faqList}>
                  {post.faq.map((item: BlogPostFAQ, idx: number) => (
                    <details key={idx} className={styles.faqItem} open={idx === 0}>
                      <summary className={styles.faqQuestion}>
                        <span>{item.question}</span>
                        <ChevronDown size={18} className={styles.faqIcon} />
                      </summary>
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Conversion & Contact CTA */}
            <div className={styles.ctaBox}>
              <div className={styles.ctaTextCol}>
                <h3 className={styles.ctaTitle}>Vous souhaitez appliquer ces stratégies à votre entreprise ?</h3>
                <p className={styles.ctaDesc}>
                  Discutez directement de votre projet avec la direction de BAROUBA GROUP à Ouagadougou. Diagnostic et plan d'action personnalisé sans engagement.
                </p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Bonjour BAROUBA GROUP, j'ai lu votre article "${post.title}" et je souhaite en discuter pour mon entreprise.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappShareBtn}
              >
                <MessageSquare size={17} />
                <span>Échanger sur WhatsApp</span>
              </a>
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <section className={styles.relatedSection}>
                <h3 className={styles.relatedTitle}>Poursuivre votre lecture stratégique</h3>
                <div className={styles.relatedGrid}>
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel._id}
                      href={`/blog/${rel.slug.current}` as any}
                      className={styles.relatedCard}
                    >
                      <div>
                        <span className={styles.relatedTag}>{rel.category.title}</span>
                        <h4 className={styles.relatedHeading}>{rel.title}</h4>
                        <p className={styles.relatedExcerpt}>{rel.excerpt}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontSize: '0.82rem', fontWeight: 700, marginTop: '1rem' }}>
                        <span>Lire le guide</span>
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
