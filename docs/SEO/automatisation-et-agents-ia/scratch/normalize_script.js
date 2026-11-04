const fs = require('fs');
const targetFile = process.argv[2];

if (!targetFile) {
  console.error("Please provide target script path.");
  process.exit(1);
}

let content = fs.readFileSync(targetFile, 'utf8');

// Also handle body: ` and content: `
['content: `', 'body: `'].forEach(delimiter => {
  if (content.includes(delimiter)) {
    const parts = content.split(delimiter);
    for (let i = 1; i < parts.length; i++) {
      // find closing ` that ends the string (either before \n      }, or before \n  }, or </script>`)
      let endIdx = parts[i].indexOf('`\n      }');
      if (endIdx === -1) endIdx = parts[i].indexOf('</script>`');
      if (endIdx === -1) endIdx = parts[i].indexOf('`\n  }');
      
      if (endIdx !== -1) {
        let text = parts[i].substring(0, endIdx);
        const rest = parts[i].substring(endIdx);
        
        // Restore all backticks, then escape all backticks
        text = text.replace(/\\`/g, '`');
        text = text.replace(/`/g, '\\`');
        
        // Escape all ${ that are not template interpolations
        text = text.replace(/\$\{/g, '\\${');
        
        parts[i] = text + rest;
      }
    }
    content = parts.join(delimiter);
  }
});

fs.writeFileSync(targetFile, content, 'utf8');
console.log(`Normalized: ${targetFile}`);
