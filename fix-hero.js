const fs = require('fs');
const p = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/HeroSection/HeroSection.tsx';
let txt = fs.readFileSync(p, 'utf8');

const newTags = `const TECH_TAGS = [
  { label: '🚀 Next.js 16', x: '8%', y: '20%', delay: 0.2 },
  { label: '🤖 Agents IA', x: '82%', y: '15%', delay: 0.5 },
  { label: '📱 TikTok Ads', x: '5%', y: '65%', delay: 0.8 },
  { label: '📈 Facebook Ads', x: '80%', y: '72%', delay: 1.1 },
  { label: '🧠 LLM & GPT', x: '88%', y: '44%', delay: 0.35 },
  { label: '⚙️ Automatisation', x: '3%', y: '42%', delay: 0.65 },
];`;

txt = txt.replace(/const TECH_TAGS = \[[\s\S]*?\];/, newTags);

// Fix the badge text
txt = txt.replace(/AAYAsA\?\s+Agence\s+Digitale\s+Premium\s+AA\?A\"\s+AlgAcrie\s+&\s+International/g, '✨ Agence Digitale Premium 🌍 Algérie & International');

// Fix words
txt = txt.replace(/PublicitAc/g, 'Publicité');
txt = txt.replace(/RAcalisations/g, 'Réalisations');
txt = txt.replace(/AccompagnAces/g, 'Accompagnées');
txt = txt.replace(/FormAces/g, 'Formées');
txt = txt.replace(/AlgAcrie/g, 'Algérie');
txt = txt.replace(/DAccouvrir/g, 'Découvrir');
txt = txt.replace(/DAcfiler/g, 'Défiler');

fs.writeFileSync(p, txt, 'utf8');
console.log('Fixed Hero texts');
