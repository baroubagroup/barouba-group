const fs = require('fs');
const path = require('path');

const map = {
    'Ã©': 'é',
    'Ã¨': 'è',
    'Ã ': 'à',
    'Ãª': 'ê',
    'Ã¢': 'â',
    'Ã®': 'î',
    'Ã´': 'ô',
    'Ã§': 'ç',
    'Ã¹': 'ù',
    'Ã»': 'û',
    'Å“': 'œ',
    'Â ': ' ',
    'Ã€': 'À',
    'Ã‰': 'É',
    'â ¤ï¸ ': '❤️',
    'â€™': '\'',
    'Â©': '©',
    'Ã¯': 'ï'
};

function fixDir(dir) {
    const files = fs.readdirSync(dir);
    for (let f of files) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            fixDir(full);
        } else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.css') || full.endsWith('.json')) {
            let txt = fs.readFileSync(full, 'utf8');
            let changed = false;
            for (let [bad, good] of Object.entries(map)) {
                if (txt.includes(bad)) {
                    txt = txt.split(bad).join(good);
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
