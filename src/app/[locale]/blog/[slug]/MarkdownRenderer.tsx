import React from 'react';
import styles from './article.module.css';

interface MarkdownRendererProps {
  content: string;
}

function WhatsAppInlineIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function renderInlineMarkdown(text: string): React.ReactNode {
  if (!text) return null;

  // Regex tokenizing: Markdown links, bold (**...**), inline code (`...`), italic (*...*)
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    // Link: [label](url)
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        const [, label, url] = match;
        const isWa = url.includes('wa.me') || url.includes('whatsapp') || url.startsWith('tel:');
        if (isWa) {
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.proseWaBtn}
            >
              <WhatsAppInlineIcon size={14} />
              <span>{label}</span>
            </a>
          );
        }
        return (
          <a
            key={i}
            href={url}
            target={url.startsWith('http') ? '_blank' : undefined}
            rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={styles.contentLink}
          >
            {label}
          </a>
        );
      }
    }

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      const boldContent = part.slice(2, -2);
      return <strong key={i} className={styles.boldText}>{boldContent}</strong>;
    }

    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      const italicContent = part.slice(1, -1);
      return <em key={i}>{italicContent}</em>;
    }

    // Inline code: `text`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      const codeContent = part.slice(1, -1);
      return <code key={i} className={styles.inlineCode}>{codeContent}</code>;
    }

    // Plain text: remove any accidental leftover asterisks
    const cleaned = part.replace(/\*\*/g, '').replace(/(?<!\w)\*(?!\w)/g, '');
    return <React.Fragment key={i}>{cleaned}</React.Fragment>;
  });
}

export function normalizeMarkdownContent(raw: string): string {
  if (!raw) return '';

  let text = raw;

  // 1. Remove json code fences for Schema / FAQPage
  text = text.replace(/```(?:json)?\s*\{[\s\S]*?"@type"\s*:\s*"FAQPage"[\s\S]*?\}\s*```/gi, '');

  // 2. Remove script tags for json-ld
  text = text.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  // 3. Remove standalone ## Foire Aux Questions... heading
  text = text.replace(/##\s+Foire Aux Questions[^\n]*\n*/gi, '');

  // 4. Remove duplicate Table des Matières block
  text = text.replace(/##\s+Table des Matières[\s\S]*?(?=\n##\s+|$)/gi, '');

  // 5. Normalize newlines around headings so headings NEVER swallow paragraphs or lists
  text = text.replace(/([^\n])\n(#{1,4}\s+[^\n]+)/g, '$1\n\n$2');
  text = text.replace(/(#{1,4}\s+[^\n]+)\n([^\n#])/g, '$1\n\n$2');

  // 6. Transform internal prompt wording into clean executive summaries
  text = text.replace(
    />\s*\*\*En résumé\s*:\*\*\s*Ce document d'autorité constitue le guide stratégique[^\n]*/gi,
    '> **Synthèse Stratégique & Cadrage Exécutif :** Ce guide de référence approfondi analyse l\'intégralité des leviers d\'action, architectures techniques, exigences réglementaires et modèles de rentabilité indispensables pour piloter vos projets.'
  );
  text = text.replace(/\bce document d'autorité\b/gi, "ce guide d'experts");
  text = text.replace(/\bCe document d'autorité\b/gi, "Ce guide d'experts");

  return text.trim();
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const normalized = normalizeMarkdownContent(content);
  if (!normalized) return null;

  const blocks = normalized.split(/\n\n+/);
  let h2Count = 0;

  return (
    <div className={styles.proseContent}>
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

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
                        <th key={i}>{renderInlineMarkdown(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((r, rowIdx) => (
                      <tr key={rowIdx}>
                        {r.map((cell, cellIdx) => (
                          <td key={cellIdx}>{renderInlineMarkdown(cell)}</td>
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
          const headingText = trimmed.replace(/^##\s+/, '').trim();
          const lower = headingText.toLowerCase();

          // Check for Contact & Accompagnement Stratégique
          if (lower.includes('contact & accompagnement') || lower.includes('contact direct')) {
            return (
              <div key={idx} className={styles.contactExecutiveCard} id="contact-strategique">
                <div className={styles.contactCardHeader}>
                  <div className={styles.contactCardBadge}>PRISE EN CHARGE CONFIDENTIELLE</div>
                  <h2 className={styles.contactCardTitle}>Direction Générale & Accompagnement Stratégique</h2>
                  <p className={styles.contactCardDesc}>
                    Vous souhaitez franchir un cap décisif et confier le pilotage de votre projet à notre cabinet à Ouagadougou, Bobo-Dioulasso ou à l’international ? Nos équipes seniors vous répondent sous 24h ouvrées.
                  </p>
                </div>

                <div className={styles.contactCardGrid}>
                  <div className={styles.contactCardItem}>
                    <span className={styles.contactCardLabel}>Direction Générale</span>
                    <span className={styles.contactCardValue}>Monsieur SAKO BAROU BEN OUMAR</span>
                  </div>
                  <div className={styles.contactCardItem}>
                    <span className={styles.contactCardLabel}>Cabinet & Siège</span>
                    <span className={styles.contactCardValue}>BAROUBA GROUP SARL — Bobo-Dioulasso</span>
                  </div>
                  <div className={styles.contactCardItem}>
                    <span className={styles.contactCardLabel}>Zone de Déploiement</span>
                    <span className={styles.contactCardValue}>Burkina Faso (Ouaga, Bobo), Espace UEMOA & Diaspora</span>
                  </div>
                  <div className={styles.contactCardItem}>
                    <span className={styles.contactCardLabel}>Ligne Directe & WhatsApp</span>
                    <span className={styles.contactCardValue}>+226 74 82 66 66</span>
                  </div>
                </div>

                <div className={styles.contactCardActionRow}>
                  <a
                    href="https://wa.me/22674826666?text=Bonjour%20BAROUBA%20GROUP,%20je%20souhaite%20planifier%20un%20entretien%20de%20cadrage%20strat%C3%A9gique%20suite%20%C3%A0%20la%20lecture%20du%20guide."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactCardWaBtn}
                  >
                    <WhatsAppInlineIcon size={18} />
                    <span>Contacter Monsieur SAKO sur WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          }

          h2Count++;
          const sectionId = `section-${h2Count}`;
          return (
            <h2 key={idx} id={sectionId} className={styles.heading2}>
              <span className={styles.h2Diamond}>◆</span>
              <span>{renderInlineMarkdown(headingText)}</span>
            </h2>
          );
        }

        // H3 Headings
        if (trimmed.startsWith('### ')) {
          const headingText = trimmed.replace(/^###\s+/, '').trim();
          return (
            <h3 key={idx} className={styles.heading3}>
              <span>{renderInlineMarkdown(headingText)}</span>
            </h3>
          );
        }

        // H4 Headings
        if (trimmed.startsWith('#### ')) {
          const headingText = trimmed.replace(/^####\s+/, '').trim();
          return (
            <h4 key={idx} className={styles.heading4}>
              <span>{renderInlineMarkdown(headingText)}</span>
            </h4>
          );
        }

        // Blockquotes (Executive Callout Notes)
        if (trimmed.startsWith('>')) {
          const quoteText = trimmed.replace(/^>\s*/gm, '').trim();
          return (
            <blockquote key={idx} className={styles.executiveCallout}>
              <div className={styles.calloutBar} />
              <div className={styles.calloutBody}>
                {renderInlineMarkdown(quoteText)}
              </div>
            </blockquote>
          );
        }

        // Ordered List (1. , 2. or lines starting with number)
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
          return (
            <ol key={idx} className={styles.orderedList}>
              {items.map((item, i) => {
                const cleanItem = item.replace(/^\d+\.\s*/, '').trim();
                return (
                  <li key={i} className={styles.orderedItem}>
                    <span className={styles.stepBadge}>{String(i + 1).padStart(2, '0')}</span>
                    <div className={styles.stepContent}>
                      {renderInlineMarkdown(cleanItem)}
                    </div>
                  </li>
                );
              })}
            </ol>
          );
        }

        // Unordered List (- or *)
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
          return (
            <ul key={idx} className={styles.unorderedList}>
              {items.map((item, i) => {
                const cleanItem = item.replace(/^[-*]\s*/, '').trim();
                return (
                  <li key={i} className={styles.unorderedItem}>
                    <span className={styles.bulletDiamond}>◆</span>
                    <div className={styles.bulletContent}>
                      {renderInlineMarkdown(cleanItem)}
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Code Blocks
        if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
          const code = trimmed.replace(/^```[a-z]*\n?/, '').replace(/```$/, '');
          return (
            <pre key={idx} className={styles.codeBlock}>
              <code>{code}</code>
            </pre>
          );
        }

        // Horizontal Rules
        if (trimmed === '---' || trimmed === '***') {
          return <hr key={idx} className={styles.sectionDivider} />;
        }

        // Standard Paragraph
        return (
          <p key={idx} className={styles.paragraph}>
            {renderInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
