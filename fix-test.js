const fs = require('fs');
const p = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/Testimonials/Testimonials.tsx';
let txt = fs.readFileSync(p, 'utf8');
txt = txt.replace(/Des R.*Qui Parlent.*d'Eux.*/g, "Des Résultats Qui Parlent <span className={styles.goldText}>d'Eux-Mêmes</span>");
fs.writeFileSync(p, txt, 'utf8');
