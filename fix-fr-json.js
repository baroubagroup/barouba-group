const fs = require('fs');
let content = fs.readFileSync('messages/fr.json', 'utf8');
content = content.replace(/\u00C3\u0080/g, 'À');
content = content.replace(/\u00C3\u0089/g, 'É');
content = content.replace(/c\u00C5\u0093ur/g, 'cœur');
fs.writeFileSync('messages/fr.json', content, 'utf8');
console.log('Fixed fr.json successfully');
