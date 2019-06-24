var express = require('express');
var router = express.Router();
// let mysql = require('mysql');
let db = require('../db');

// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root',
//     database: 'escuela',
//     port: 8889
// })

/* GET home page. */
router.get('/select', (req, res) => {
    // connection.connect((err) => {
    //     if (err) return res.send(err)
    //     console.log('Se ha conectado');
    //     res.send('CONECTADO');
    //     connection.end();
    // })
    db.database().query('SELECT * FROM alumnos', (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
    })
});
router.post('/insert', (req, res) => {
    // res.json(req.body);
    if (req.body.edad < 18) {
        res.send('Error menor de edad')
    } else {
        db.database().query('INSERT INTO alumnos (nombre, apellidos, email, edad, matricula, fecha_matricula, notamedia, sexo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.nombre, req.body.apellidos, req.body.email, req.body.edad, req.body.matricula, req.body.fecha_matricula, req.body.notamedia, req.body.sexo], (err, result) => {
            if (err) return res.send(err);
            res.send(result)
        })
    }
});

router.get('/mayores/:edad', (req, res) => {
    // res.json(req.body);
    console.log('PARÁMETROS: ', req.params)
    db.database().query('select * from alumnos where edad > ?', [req.params.edad], (err, result) => {
        if (err) return res.send(err);
        res.json(result)
    })
});

module.exports = router;