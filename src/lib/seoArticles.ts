import fs from 'fs';
import path from 'path';
import { BlogPost, BlogPostFAQ } from './data';

interface SeoArticleMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  cluster: string;
  articleNumber: string;
  type: string;
  isPillar: boolean;
  relativePath: string;
  slug: string;
}

// In-memory cache for fast lookups
let articlesCache: Map<string, SeoArticleMetadata> | null = null;
let pillarsCache: SeoArticleMetadata[] | null = null;

function getSeoDirectory(): string | null {
  const candidates = [
    path.join(process.cwd(), 'docs', 'SEO'),
    path.join(process.cwd(), 'SEO'),
    path.join(process.cwd(), '..', 'SEO'),
  ];
  return candidates.find((p) => fs.existsSync(p)) || null;
}

function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; content: string } {
  const frontmatter: Record<string, string> = {};
  let content = raw;

  if (raw.startsWith('---')) {
    const endIdx = raw.indexOf('---', 3);
    if (endIdx !== -1) {
      const header = raw.substring(3, endIdx).trim();
      content = raw.substring(endIdx + 3).trim();

      const lines = header.split('\n');
      for (const line of lines) {
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0) {
          const key = line.substring(0, colonIdx).trim();
          let value = line.substring(colonIdx + 1).trim();
          // Remove wrapping quotes if any
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          frontmatter[key] = value;
        }
      }
    }
  }

  return { frontmatter, content };
}

function extractFaqFromContent(content: string): { cleanContent: string; faq: BlogPostFAQ[] } {
  const faq: BlogPostFAQ[] = [];
  let cleanContent = content;

  // 1. Check for ```json code block containing FAQPage
  const codeBlockRegex = /```(?:json)?\s*(\{[\s\S]*?"@type"\s*:\s*"FAQPage"[\s\S]*?\})\s*```/i;
  const codeMatch = content.match(codeBlockRegex);
  if (codeMatch) {
    try {
      const json = JSON.parse(codeMatch[1]);
      if (json['@type'] === 'FAQPage' && Array.isArray(json.mainEntity)) {
        for (const item of json.mainEntity) {
          if (item['@type'] === 'Question' && item.name && item.acceptedAnswer?.text) {
            faq.push({
              question: item.name,
              answer: item.acceptedAnswer.text,
            });
          }
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
    cleanContent = cleanContent.replace(codeBlockRegex, '').trim();
  }

  // 2. Check for Schema.org JSON script block at bottom
  const scriptRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i;
  const match = cleanContent.match(scriptRegex);

  if (match) {
    try {
      const json = JSON.parse(match[1]);
      if (json['@type'] === 'FAQPage' && Array.isArray(json.mainEntity) && faq.length === 0) {
        for (const item of json.mainEntity) {
          if (item['@type'] === 'Question' && item.name && item.acceptedAnswer?.text) {
            faq.push({
              question: item.name,
              answer: item.acceptedAnswer.text,
            });
          }
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
    // Remove the script tag so it is not rendered as raw markdown
    cleanContent = cleanContent.replace(scriptRegex, '').trim();
  }

  // 3. Remove standalone ## Foire Aux Questions... heading if followed by stripped FAQ schema
  cleanContent = cleanContent.replace(/##\s+Foire Aux Questions[^\n]*\n*/gi, '').trim();

  // 4. Remove duplicate unformatted ## Table des Matières block (page already has a dedicated component)
  cleanContent = cleanContent.replace(/##\s+Table des Matières[\s\S]*?(?=\n##\s+|$)/gi, '').trim();

  // 5. Transform AI-prompt style internal notes into executive synthesis
  cleanContent = cleanContent
    .replace(/>\s*\*\*En résumé\s*:\*\*\s*Ce document d'autorité constitue le guide stratégique[^\n]*/gi, 
      '> **Synthèse Stratégique & Cadrage Exécutif :** Ce guide de référence analyse en profondeur les leviers d\'action, architectures opérationnelles et exigences réglementaires indispensables pour piloter vos initiatives.')
    .replace(/\bce document d'autorité\b/gi, "ce guide d'experts")
    .replace(/\bCe document d'autorité\b/gi, "Ce guide d'experts");

  return { cleanContent, faq };
}

function initializeArticlesCache() {
  if (articlesCache && pillarsCache) return;

  const map = new Map<string, SeoArticleMetadata>();
  const pillars: SeoArticleMetadata[] = [];
  const seoDir = getSeoDirectory();

  if (!seoDir) {
    articlesCache = map;
    pillarsCache = pillars;
    return;
  }

  try {
    const entries = fs.readdirSync(seoDir);
    for (const entry of entries) {
      const fullPath = path.join(seoDir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        const files = fs
          .readdirSync(fullPath)
          .filter((f) => f.endsWith('.md') && !f.startsWith('MASTER_INDEX') && !f.startsWith('GLOBAL_SEO'));

        for (const file of files) {
          const rawSlug = file.replace(/\.md$/, '');
          const slug = rawSlug.toLowerCase();
          const isPillar =
            entry === 'grands-cours-et-piliers-fondamentaux-burkina' ||
            slug.startsWith('guide-ultime-') ||
            slug.startsWith('manuel-') ||
            slug.startsWith('encyclopedie-') ||
            slug.startsWith('cours-complet-') ||
            slug.includes('pilier');

          const meta: SeoArticleMetadata = {
            title: rawSlug.replace(/-/g, ' '),
            description: '',
            keywords: [],
            author: 'Monsieur SAKO BAROU BEN OUMAR — BAROUBA GROUP SARL',
            date: '2026-04-01',
            cluster: entry.replace(/-/g, ' '),
            articleNumber: isPillar ? 'Pilier Majeur' : '',
            type: isPillar ? "Article Pilier / Guide d'Autorité" : 'Article de Maillage Sémantique',
            isPillar,
            relativePath: path.join(entry, file),
            slug,
          };

          map.set(slug, meta);
          // Also set original case slug for flexibility
          map.set(rawSlug, meta);

          if (isPillar) {
            pillars.push(meta);
          }
        }
      }
    }
  } catch (err) {
    console.error('Error scanning SEO directory:', err);
  }

  articlesCache = map;
  pillarsCache = pillars;
}

export function getAllPillars(): SeoArticleMetadata[] {
  initializeArticlesCache();
  return pillarsCache || [];
}

export function getAllSeoArticlesList(): { slug: string; isPillar: boolean; date: string }[] {
  initializeArticlesCache();
  if (!articlesCache) return [];
  const seen = new Set<string>();
  const list: { slug: string; isPillar: boolean; date: string }[] = [];
  for (const meta of articlesCache.values()) {
    if (!seen.has(meta.slug)) {
      seen.add(meta.slug);
      list.push({
        slug: meta.slug,
        isPillar: meta.isPillar,
        date: meta.date,
      });
    }
  }
  return list;
}

export function getAllArticleSlugs(): string[] {
  initializeArticlesCache();
  if (!articlesCache) return [];
  return Array.from(new Set(Array.from(articlesCache.values()).map((m) => m.slug)));
}

export function getSeoArticleBySlug(slug: string): BlogPost | null {
  initializeArticlesCache();
  if (!articlesCache) return null;

  const normalized = slug.toLowerCase();
  let meta = articlesCache.get(normalized) || articlesCache.get(slug);

  // Fallback for legacy numbered slugs (e.g. 001-..., pilier-01-..., 000-pilier-01-...)
  if (!meta) {
    const clean = normalized
      .replace(/^000-pilier-\d+-/i, '')
      .replace(/^pilier-\d+-/i, '')
      .replace(/^\d+-/, '');
    meta = articlesCache.get(clean);
  }

  if (!meta) return null;

  const seoDir = getSeoDirectory();
  if (!seoDir) return null;

  const filePath = path.join(seoDir, meta.relativePath);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, content } = parseFrontmatter(raw);
    const { cleanContent, faq } = extractFaqFromContent(content);

    const title = frontmatter.title || meta.title;
    let excerpt = frontmatter.description || '';
    if (!excerpt || excerpt.toLowerCase().includes('en résumé') || excerpt.toLowerCase().includes("document d'autorité")) {
      excerpt = `Guide stratégique et opérationnel complet sur ${title} au Burkina Faso et en Afrique de l'Ouest : méthodologies d'élite, architectures techniques et cadre réglementaire OHADA/CIL par BAROUBA GROUP.`;
    } else {
      excerpt = excerpt.replace(/\bce document d'autorité\b/gi, "ce guide d'experts").replace(/\bCe document d'autorité\b/gi, "Ce guide d'experts");
    }
    const keywords = frontmatter.keywords
      ? frontmatter.keywords.split(',').map((k) => k.trim()).filter(Boolean)
      : [meta.cluster, 'burkina faso', 'ouagadougou', 'barouba group'];

    // Estimate read time (average 200 words per minute)
    const wordCount = cleanContent.split(/\s+/).length;
    const readTime = Math.max(5, Math.ceil(wordCount / 200));

    return {
      _id: `seo-${meta.slug}`,
      title,
      slug: { current: meta.slug },
      excerpt,
      category: {
        title: frontmatter.cluster || meta.cluster.toUpperCase(),
        slug: { current: meta.relativePath.split(path.sep)[0] },
      },
      publishedAt: frontmatter.date ? `${frontmatter.date}T00:00:00Z` : '2026-04-01T00:00:00Z',
      updatedAt: '2026-04-04T00:00:00Z',
      readTime,
      author: {
        name: frontmatter.author || 'Monsieur SAKO BAROU BEN OUMAR',
        role: 'Fondateur & Directeur de Publication — BAROUBA GROUP SARL',
      },
      isFeatured: meta.isPillar,
      metaKeywords: keywords,
      keyTakeaways: [
        'Document d’autorité stratégique et opérationnel calibré pour le contexte burkinabè et ouest-africain.',
        'Conformité stricte aux réglementations CIL, OHADA et fiscale DGI.',
        'Solutions d’ingénierie logicielle et d’intelligence artificielle pilotées par BAROUBA GROUP SARL.',
        'Accompagnement et cadrage personnalisé disponible directement à Bobo-Dioulasso, Ouagadougou et à l’international.',
      ],
      faq: faq.length > 0 ? faq : undefined,
      content: cleanContent,
    };
  } catch (err) {
    console.error(`Failed to load SEO article for slug "${slug}":`, err);
    return null;
  }
}
