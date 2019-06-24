require('dotenv').config();
const express = require('express');


const app = express();
// const PORT = 3000;
const PORT = process.env.PORT | 3000;

app.get('/', (req, res) => {
    res.end('Ruta Raiz')
})
app.get('/json', (req, res) => {
    res.json({ Alumnno: 'David', Edad: 37 })
})

app.post('/peticionPost', (req, res) => {
    console.log(req);
    res.end('prueba con petición post')
})

app.listen(PORT, () => {
    console.log(`App escuchando sobre el puerto ${PORT}`);
})