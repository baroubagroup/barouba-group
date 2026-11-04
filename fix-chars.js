const fs = require('fs');
const path = require('path');
const replacements = {
  'Ã©': 'é', 'Ã¨': 'è', 'Ã ': 'à', 'Ã¢': 'â', 'Ãª': 'ê', 'Ã®': 'î', 'Ã´': 'ô', 'Ã»': 'û',
  'Ã§': 'ç', 'Ã¹': 'ù', 'Ã‰': 'É', 'Ã€': 'À', 'Å“': 'œ', 'Â ': ' ', 'â€™': '\'', 'Â©': '©', 'Ã¯': 'ï',
  'Ã': 'é' // fallback for remaining Ã if any (maybe dangerous, but let's see if we can do something better)
};
// I will not use the fallback 'Ã' because it could be anything.
delete replacements['Ã'];

function fixDir(dir) {
  for (let f of fs.readdirSync(dir)) {
    let full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) fixDir(full);
    else if (full.endsWith('.ts') || full.endsWith('.tsx') || full.endsWith('.json') || full.endsWith('.css') || full.endsWith('.md')) {
      let txt = fs.readFileSync(full, 'utf8');
      let changed = false;
      for (let bad in replacements) {
        if (txt.includes(bad)) {
          txt = txt.split(bad).join(replacements[bad]);
          changed = true;
        }
      }
      if (changed) {
        console.log('Fixed', full);
        fs.writeFileSync(full, txt, 'utf8');
      }
    }
  }
}
fixDir('c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src');
fixDir('c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/messages');
console.log('Done!');
