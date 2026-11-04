const fs = require('fs');

// HeroSection Fix
const p1 = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/HeroSection/HeroSection.module.css';
let txt1 = fs.readFileSync(p1, 'utf8');

txt1 = txt1.replace(/\.floatingTag\s*\{[\s\S]*?z-index: 2;/m, `.floatingTag {
  position: absolute;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  backdrop-filter: blur(12px);
  z-index: 2;`);

fs.writeFileSync(p1, txt1, 'utf8');

// ServicesSection Fix
const p2 = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/ServicesSection/ServicesSection.module.css';
let txt2 = fs.readFileSync(p2, 'utf8');

txt2 = txt2.replace(/\.serviceCard\s*\{[\s\S]*?display:\s*flex;/m, `.serviceCard {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  padding: 2.5rem 2rem;
  overflow: hidden;
  transition: transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
  display: flex;`);

// Make sure titles in cards are white or visible
txt2 = txt2.replace(/\.serviceTitle\s*\{[\s\S]*?font-weight:\s*700;/m, `.serviceTitle {
  font-size: var(--text-2xl);
  color: #fff;
  font-weight: 700;`);

txt2 = txt2.replace(/\.serviceDesc\s*\{[\s\S]*?line-height:\s*1.6;/m, `.serviceDesc {
  font-size: var(--text-base);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;`);

fs.writeFileSync(p2, txt2, 'utf8');

// PortfolioSection Fix
const p3 = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src/components/home/PortfolioSection/PortfolioSection.module.css';
if (fs.existsSync(p3)) {
  let txt3 = fs.readFileSync(p3, 'utf8');
  txt3 = txt3.replace(/\.cardContent\s+h3\s*\{[\s\S]*?margin-bottom:\s*0\.5rem;/m, `.cardContent h3 {
  font-size: var(--text-2xl);
  color: #fff;
  margin-bottom: 0.5rem;`);
  
  txt3 = txt3.replace(/\.cardContent\s+p\s*\{[\s\S]*?margin-bottom:\s*1\.5rem;/m, `.cardContent p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;`);
  
  fs.writeFileSync(p3, txt3, 'utf8');
}

console.log('Fixed visibility issues in dark mode.');
