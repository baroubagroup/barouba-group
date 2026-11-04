const fs = require('fs');
const frPath = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/messages/fr.json';

// Read raw buffer
const buf = fs.readFileSync(frPath);
let content = buf.toString('latin1'); // Because Set-Content used default ansi/latin1

// Fix it by writing it out properly
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Propulsez')) {
    lines[i] = '    "title": "Propulsez votre entreprise grâce à",';
  }
}
fs.writeFileSync(frPath, lines.join('\n'), 'utf8');

const heroPath = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/HeroSection/HeroSection.tsx';
const buf2 = fs.readFileSync(heroPath);
let content2 = buf2.toString('latin1');
let lines2 = content2.split('\n');
let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines2.length; i++) {
  if (lines2[i].includes('const TYPEWRITER_WORDS')) {
    startIdx = i;
  }
  if (startIdx !== -1 && lines2[i].includes('];')) {
    endIdx = i;
    break;
  }
}
if (startIdx !== -1 && endIdx !== -1) {
  lines2.splice(startIdx, endIdx - startIdx + 1, 
    'const TYPEWRITER_WORDS = [',
    '  "l\'Intelligence Artificielle.",',
    '  "la Publicité Digitale.",',
    '  "des Tunnels de Vente.",',
    '  "l\'Automatisation IA.",',
    '  "nos Agents IA."',
    '];'
  );
}
fs.writeFileSync(heroPath, lines2.join('\n'), 'utf8');

console.log('Fixed');
