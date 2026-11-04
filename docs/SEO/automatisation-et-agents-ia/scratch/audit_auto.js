const fs = require('fs');
const path = require('path');

const targetDir = path.resolve('c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia');

const files = fs.readdirSync(targetDir)
  .filter(f => f.endsWith('.md') && f !== 'MASTER_INDEX_100_ARTICLES_AUTOMATISATION_IA.md')
  .sort();

console.log(`Auditing ${files.length} articles for Automatisation & Agents IA...`);

let totalWords = 0;
let minWords = 999999;
let maxWords = 0;
const failed = [];

files.forEach(f => {
  const filePath = path.join(targetDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Word count (excluding YAML frontmatter)
  const body = content.replace(/^---[\s\S]*?---\s*/, '');
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  
  totalWords += words;
  if (words < minWords) minWords = words;
  if (words > maxWords) maxWords = words;
  
  const hasFCFA = content.includes('FCFA');
  const hasFAQ = content.includes('application/ld+json') && content.includes('"@type": "FAQPage"');
  const hasAuth = content.includes('Monsieur SAKO BAROU BEN OUMAR - BAROUBA GROUP');
  const hasPhone = content.includes('+226 74 82 66 66');
  const hasMail = content.includes('baroubagroup@gmail.com');
  const hasWWW = content.includes('https://www.baroubagroup.com');
  const badKabore = /Kabor[eé]/i.test(content);
  
  // Requirement 2: Featured Snippet (40 to 50 words)
  const snippetMatch = content.match(/> \*\*En r[eé]sum[eé] \(D[eé]finition cl[eé] & R[eé]ponse rapide\) :?\*\*\s*[\r\n]+>\s*([\s\S]*?)(?=\r?\n\r?\n|$)/i);
  let snippetWords = 0;
  let hasSnippet = false;
  if (snippetMatch) {
    snippetWords = snippetMatch[1].trim().split(/\s+/).filter(Boolean).length;
    // target is 40 to 50 words (tolerance 38 to 55)
    hasSnippet = snippetWords >= 38 && snippetWords <= 55;
  }
  
  // Requirement 3: Table des Matières interactive
  const hasTOC = content.includes('## Table des Matières') && (content.match(/- \[[^\]]+\]\(#[^)]+\)/g) || []).length >= 5;

  const ok = words >= 2000 && hasFCFA && hasFAQ && hasAuth && hasPhone && hasMail && hasWWW && !badKabore && hasSnippet && hasTOC;
  
  if (!ok) {
    failed.push({ f, words, hasFCFA, hasFAQ, hasAuth, hasPhone, hasMail, hasWWW, badKabore, hasSnippet, snippetWords, hasTOC });
  }
  
  console.log(`${f} | Words: ${words} | Snippet: ${hasSnippet} (${snippetWords}w) | TOC: ${hasTOC} | FCFA: ${hasFCFA} | FAQ: ${hasFAQ} | Auth: ${hasAuth} | Phone: ${hasPhone} | Mail: ${hasMail} | WWW: ${hasWWW} | BadKabore: ${badKabore} -> ${ok ? 'OK' : 'FAIL'}`);
});

console.log(`\nAudited: ${files.length} files`);
console.log(`Total words: ${totalWords}`);
console.log(`Average words: ${Math.round(totalWords / files.length)}`);
console.log(`Min words: ${minWords}`);
console.log(`Max words: ${maxWords}`);
console.log(`Failed count: ${failed.length}`);

if (failed.length > 0) {
  console.log('Failed details:', JSON.stringify(failed, null, 2));
  console.log('Overall Result: PENDING OR FAILED');
} else {
  console.log('Overall Result: ALL PASSED 100% (INCLUDING FEATURED SNIPPET & INTERACTIVE TOC)');
}
