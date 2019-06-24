const http = require('http');

let server = http.createServer((req, res) => {
    res.end('Hola, este es mi primer server')
})

server.listen(3000)