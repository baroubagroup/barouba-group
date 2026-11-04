const fs = require('fs');
const filePath = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia/scratch/generate_028_030.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find all articles and their content strings
// Actually, let's split by "content: `"
const parts = content.split('content: `');
for (let i = 1; i < parts.length; i++) {
  const endIdx = parts[i].indexOf('</script>`');
  if (endIdx !== -1) {
    let body = parts[i].substring(0, endIdx + 9); // up to </script>
    const rest = parts[i].substring(endIdx + 9); // from ` on
    
    // In body, replace all unescaped backticks with escaped backticks
    // First normalize: remove any \` to ` then replace all ` with \`
    body = body.replace(/\\`/g, '`');
    body = body.replace(/`/g, '\\`');
    
    // Also replace any ${ that is not meant for JS template string
    body = body.replace(/\$\{/g, '\\${');
    
    parts[i] = body + rest;
  }
}

fs.writeFileSync(filePath, parts.join('content: `'), 'utf8');
console.log('Normalized backticks in generate_028_030.js');
