const fs = require('fs');
const path = require('path');

const targetDir = path.resolve('c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia');

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Generate a tailored 40 to 50 word snippet for an article
function generateSnippet(title, articleNum) {
  const cleanTitle = title.replace(/^#\s*/, '').trim();
  
  // Custom precise 40-50 word snippets based on topic
  let text = "";
  if (cleanTitle.toLowerCase().includes("devis")) {
    text = `L'envoi instantané d'un devis automatisé permet aux PME de Ouagadougou de transmettre une cotation PDF certifiée sur WhatsApp en moins de 60 secondes. BAROUBA GROUP déploie ces architectures n8n pour quadrupler votre taux de closing commercial, éliminer les erreurs de chiffrage et devancer instantanément vos concurrents au Burkina Faso.`;
  } else if (cleanTitle.toLowerCase().includes("reconciliation") || cleanTitle.toLowerCase().includes("orange money") || cleanTitle.toLowerCase().includes("wave") || cleanTitle.toLowerCase().includes("mobile money") || cleanTitle.toLowerCase().includes("facturation dgi")) {
    text = `La réconciliation automatique Mobile Money synchronise vos encaissements Orange Money et Wave avec votre comptabilité et facturation DGI sans saisie manuelle. À Ouagadougou, BAROUBA GROUP sécurise vos flux financiers par webhooks cryptographiques HMAC SHA-256 pour éliminer les fraudes de fausses captures d'écran et garantir une conformité fiscale totale.`;
  } else if (cleanTitle.toLowerCase().includes("crm") || cleanTitle.toLowerCase().includes("lead") || cleanTitle.toLowerCase().includes("pipeline") || cleanTitle.toLowerCase().includes("prospect")) {
    text = `Le CRM commercial automatisé centralise la capture de vos prospects Facebook Lead Ads et WhatsApp dans un pipeline de vente intelligent. Déployée à Ouagadougou par BAROUBA GROUP, cette infrastructure attribue les leads aux vendeurs, qualifie les budgets par IA et automatise les relances pour maximiser votre chiffre d'affaires.`;
  } else if (cleanTitle.toLowerCase().includes("service client") || cleanTitle.toLowerCase().includes("ticket") || cleanTitle.toLowerCase().includes("sav") || cleanTitle.toLowerCase().includes("satisfaction") || cleanTitle.toLowerCase().includes("fermé") || cleanTitle.toLowerCase().includes("nuit")) {
    text = `Le support client automatisé haute fidélité résout 80 % des questions répétitives 24h/24 sur WhatsApp grâce à un agent IA souverain. Conçue à Ouagadougou par BAROUBA GROUP, cette solution gère les réclamations par tickets numérotés, alerte la direction en cas d'insatisfaction et multiplie vos avis 5 étoiles Google Maps.`;
  } else if (cleanTitle.toLowerCase().includes("whatsapp") || cleanTitle.toLowerCase().includes("chatbot") || cleanTitle.toLowerCase().includes("agent ia")) {
    text = `Un agent IA WhatsApp d'entreprise permet aux sociétés burkinabè de qualifier leurs prospects, présenter leur catalogue et conclure des ventes 24h/24 en langage naturel. BAROUBA GROUP conçoit des agents conversationnels intelligents connectés à vos stocks et à vos comptes marchands pour automatiser votre croissance commerciale au Sahel.`;
  } else {
    text = `L'automatisation des processus métier consiste à orchestrer vos flux de travail et logiciels via n8n et des agents IA pour supprimer les tâches manuelles chronophages. À Ouagadougou, BAROUBA GROUP intègre ces solutions souveraines pour réduire vos coûts d'exploitation, sécuriser votre trésorerie Mobile Money et décupler la productivité de votre entreprise.`;
  }

  // Ensure word count is between 40 and 50 words
  let words = text.trim().split(/\s+/);
  if (words.length < 40) {
    text += " Une solution rentable et durable au Burkina Faso.";
    words = text.trim().split(/\s+/);
  }
  if (words.length > 50) {
    words = words.slice(0, 48);
    text = words.join(" ") + ".";
  }

  return text;
}

const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.md') && f !== 'MASTER_INDEX_100_ARTICLES_AUTOMATISATION_IA.md');

let upgradedCount = 0;

files.forEach(f => {
  const filePath = path.join(targetDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if TOC and Snippet already present
  if (content.includes('## Table des Matières') && content.includes('En résumé (Définition clé')) {
    console.log(`Already upgraded: ${f}`);
    return;
  }

  // Extract frontmatter and body
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) {
    console.log(`No frontmatter: ${f}`);
    return;
  }

  const frontmatter = fmMatch[1];
  let body = fmMatch[2].trim();

  // Find H1 title
  const h1Match = body.match(/^#\s+(.+)$/m);
  if (!h1Match) {
    console.log(`No H1 found: ${f}`);
    return;
  }
  const h1Title = h1Match[1].trim();

  // Remove existing snippet if any partial
  body = body.replace(/> \*\*En résumé[\s\S]*?\n\n/g, '');
  // Remove existing TOC if any
  body = body.replace(/## Table des Matières[\s\S]*?\n\n---\n\n/g, '');

  // Extract all ## Headings for TOC (excluding H1 and sub-headings ###)
  const lines = body.split(/\r?\n/);
  const headings = [];
  lines.forEach(line => {
    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      const title = h2Match[1].trim();
      if (!title.toLowerCase().includes('table des matières')) {
        headings.push(title);
      }
    }
  });

  // Build TOC markdown
  let tocMarkdown = `## Table des Matières\n\n`;
  headings.forEach(h => {
    const anchor = slugifyHeading(h);
    tocMarkdown += `- [${h}](#${anchor})\n`;
  });
  tocMarkdown += `\n---\n`;

  // Build Featured Snippet
  const snippetText = generateSnippet(h1Title, f);
  const snippetCount = countWords(snippetText);
  const snippetMarkdown = `> **En résumé (Définition clé & Réponse rapide) :**  \n> ${snippetText}\n\n`;

  // Place Snippet and TOC right under H1
  const h1Full = `# ${h1Title}`;
  const h1Index = body.indexOf(h1Full);
  if (h1Index !== -1) {
    const beforeH1 = body.substring(0, h1Index + h1Full.length);
    const afterH1 = body.substring(h1Index + h1Full.length).trim();
    
    body = `${beforeH1}\n\n${snippetMarkdown}${tocMarkdown}\n${afterH1}`;
  }

  const fullContent = `---\n${frontmatter}\n---\n\n${body}\n`;
  fs.writeFileSync(filePath, fullContent, 'utf8');
  upgradedCount++;
  console.log(`Upgraded [${f}]: Snippet words: ${snippetCount}, Headings: ${headings.length}`);
});

console.log(`\nSuccessfully upgraded ${upgradedCount} articles with Featured Snippet & Interactive TOC!`);
