const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia';
const testFile = '061-extraction-ocr-automatique-recus-factures-comptabilite-bf.md';
const filePath = path.join(dir, testFile);

let content = fs.readFileSync(filePath, 'utf8');

// 1. Title
const titleMatch = content.match(/^#\s+(.*)$/m);
const title = titleMatch ? titleMatch[1].trim() : '';

// 2. Snippet
const snippetMatch = content.match(/> \*\*En résumé[^\n]*\n>\s*([^\n]+)/i);
const snippet = snippetMatch ? snippetMatch[1].trim() : '';

// 3. Extract core content sections
// They start after TOC (after the second '---')
// and stop before the first occurrence of '## Conclusion' or '## Questions Fréquentes' or '## Foire Aux Questions'
const parts = content.split('---');
// parts[0] is title + snippet
// parts[1] is TOC
// parts[2...] is content
let afterToc = parts.slice(2).join('---').trim();

// Find where conclusion or FAQ starts
let cutIdx = afterToc.search(/## (?:Conclusion|Questions Fréquentes|Foire Aux Questions)/i);
let coreBody = cutIdx !== -1 ? afterToc.substring(0, cutIdx).trim() : afterToc;

console.log('Title:', title);
console.log('Snippet length:', snippet.split(/\s+/).length, 'words');
console.log('Core body length:', coreBody.length, 'chars');
console.log('Core body headings:\n', coreBody.match(/^##\s+.*$/gm));
