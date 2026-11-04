const fs = require('fs');
const p = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/messages/fr.json';
let txt = fs.readFileSync(p, 'utf8');

// The tricky ones
txt = txt.split('Ã ').join('à');
txt = txt.split('Ã ').join('à');
txt = txt.split('Â°').join('°');
txt = txt.split('Å“').join('œ');
txt = txt.split('Ã€').join('À');
txt = txt.split('â ¤ï¸ ').join('❤️');
txt = txt.split('â\x9D¤ï¸\x8F').join('❤️'); // For the weird heart representation
txt = txt.split('â\x9D¤ï¸').join('❤️');
txt = txt.split('Ã©').join('é');
txt = txt.split('Ã¨').join('è');
txt = txt.split('Ã®').join('î');
txt = txt.split('Ã¢').join('â');

fs.writeFileSync(p, txt, 'utf8');

// Do the same for page.tsx and layout.tsx just in case
const p2 = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/app/[locale]/page.tsx';
let txt2 = fs.readFileSync(p2, 'utf8');
txt2 = txt2.split('Ã ').join('à').split('Ã ').join('à').split('Â°').join('°').split('Å“').join('œ').split('Ã€').join('À');
fs.writeFileSync(p2, txt2, 'utf8');

console.log('Fixed fr.json and page.tsx');
