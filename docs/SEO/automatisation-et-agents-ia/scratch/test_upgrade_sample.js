const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia';

function inspectArticle(slug) {
  const filePath = path.join(dir, slug);
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('=== FILE:', slug, '===');
  console.log('Word count:', content.trim().split(/\s+/).length);
  
  // TOC
  const tocMatch = content.match(/## Table des Matières([\s\S]*?)---/);
  if (tocMatch) {
    console.log('TOC sample:\n', tocMatch[1].trim().split('\n').slice(0, 4).join('\n'));
  }
  
  // Conclusion heading
  const conclMatch = content.match(/## Conclusion[^\n]*/i);
  console.log('Conclusion heading:', conclMatch ? conclMatch[0] : 'None');

  // FAQ questions count
  const faqPart = content.split(/## (?:Foire Aux Questions|Questions Fréquentes)/i)[1] || '';
  const faqQuestions = (faqPart.match(/### /g) || []).length;
  console.log('FAQ questions count:', faqQuestions);
}

inspectArticle('001-pourquoi-automatisation-processus-urgence-vitale-pme-bf.md');
inspectArticle('085-onboarding-formation-automatique-nouveaux-salaries-agent-ia-bf.md');
