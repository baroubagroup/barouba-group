const fs = require('fs');
const p = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/HeroSection/HeroSection.tsx';
let txt = fs.readFileSync(p, 'utf8');
txt = txt.replace('{"\\\\u2728 Agence Digitale Premium \\\\uD83C\\\\uDF0D Alg\\\\u00E9rie & International"}', '{"\\u2728 Agence Digitale Premium \\uD83C\\uDF0D Alg\\u00E9rie & International"}');
fs.writeFileSync(p, txt, 'utf8');
console.log('Fixed double backslashes in JSX string');
