const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia';
const files = fs.readdirSync(dir).filter(f => /^\d{3}-.*\.md$/.test(f)).sort();

let fixedCount = 0;
for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('\\n')) {
    // Separate markdown from json-ld if present
    const scriptSplit = content.split('<script type="application/ld+json">');
    let mdPart = scriptSplit[0];
    let jsonPart = scriptSplit[1] || '';

    // In mdPart, replace literal \n with real newline
    mdPart = mdPart.split('\\n').join('\n');

    // In jsonPart, if it also had literal \n instead of real newlines or escaped strings
    if (jsonPart) {
      jsonPart = jsonPart.split('\\n').join('\n');
    }

    content = jsonPart ? mdPart + '<script type="application/ld+json">' + jsonPart : mdPart;
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Cleaned newlines in: ${f}`);
  }
}

console.log(`Total files cleaned: ${fixedCount}`);
