const fs = require('fs');

fs.readFile('../md/markdown.md', 'utf8', (err, content) => {
    console.log(content);
})