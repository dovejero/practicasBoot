const fs = require('fs');

fs.readdir('../md', (err, files) => {
    console.log(files)
    files.forEach((salida) => {
        if (salida.endsWith('.md')) {
            fs.readFile('../md/' + salida, 'utf8', (err, content) => {
                console.log(content);
            })
        }
    })
})

