const fs = require('fs');
const p = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/HeroSection/HeroSection.tsx';
let txt = fs.readFileSync(p, 'utf8');

// The corrupted tags block
const newTags = 'const TECH_TAGS = [\n' +
  '  { label: \'\\uD83D\\uDE80 Next.js 16\', x: \'8%\', y: \'20%\', delay: 0.2 },\n' +
  '  { label: \'\\uD83E\\uDD16 Agents IA\', x: \'82%\', y: \'15%\', delay: 0.5 },\n' +
  '  { label: \'\\uD83D\\uDCF1 TikTok Ads\', x: \'5%\', y: \'65%\', delay: 0.8 },\n' +
  '  { label: \'\\uD83D\\uDCC8 Facebook Ads\', x: \'80%\', y: \'72%\', delay: 1.1 },\n' +
  '  { label: \'\\uD83E\\uDDE0 LLM & GPT\', x: \'88%\', y: \'44%\', delay: 0.35 },\n' +
  '  { label: \'\\u2699\\uFE0F Automatisation\', x: \'3%\', y: \'42%\', delay: 0.65 },\n' +
'];';

txt = txt.replace(/const TECH_TAGS = \[[\s\S]*?\];/, newTags);

// The corrupted badge
txt = txt.replace(/.*Agence Digitale Premium.*Alg.rie.*International/g, '          \\u2728 Agence Digitale Premium \\uD83C\\uDF0D Alg\\u00E9rie & International');

fs.writeFileSync(p, txt, 'utf8');
console.log('Fixed tags and badge securely');
