const fs = require('fs');
const path = require('path');
function fixCss(dir) {
  for (let f of fs.readdirSync(dir)) {
    let full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) fixCss(full);
    else if (full.endsWith('.module.css')) {
      let txt = fs.readFileSync(full, 'utf8');
      let changed = false;
      const replaces = [
        [/var\(--text-primary\)/g, '#fff'],
        [/var\(--text-secondary\)/g, 'rgba(255,255,255,0.45)'],
        [/var\(--bg-base\)/g, '#050508']
      ];
      for (let [regex, good] of replaces) {
        if (regex.test(txt)) {
          txt = txt.replace(regex, good);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(full, txt, 'utf8');
        console.log('Reverted CSS in', full);
      }
    }
  }
}
fixCss('c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/barouba-group/src');
console.log('Done reverting CSS');
