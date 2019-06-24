const fs = require('fs');

fs.readdir('../', (err, files) => {
    console.log(files);
    console.log('error: ', err)
})

try {
    let files2 = fs.readdirSync('../d');
    console.log('files: ', files2)
} catch (error) {
    console.log('Error: ', error)
}
