var express = require('express');
var router = express.Router();
var Persona = require('../models/persona')

router.get('/', function (req, res) {
    let p = new Persona();
    p.nombre = 'Raul';
    p.apellidos = 'García';
    p.edad = 23;
    p.empresa = 'accenture';
    p.coche = true;

    p.save((err) => {
        res.send('Persona insertada')

    })
});

router.get('/v2', (req, res) => {
    Persona.create({ nombre: 'Elena', apellidos: 'García', edad: 22, empresa: 'accenture', coche: false }).then((persona) => {
        res.json(persona);
    })
})
router.post('/v3', (req, res) => {
    Persona.create(req.body).then((persona) => {
        res.json(persona);
    })
})

router.get('/list', (req, res) => {
    Persona.find((err, personas) => {
        // res.json(personas);
        res.render('personas/index', { arrPersonas: personas })
    })
})
router.get('/listOne/:id', (req, res) => {
    Persona.findById(req.params.id, (err, persona) => {
        res.render('personas/show', { persona: persona })
    })
})

router.get('/deleteOne/:id', (req, res) => {
    Persona.findByIdAndRemove(req.params.id, (err, persona) => {
        res.redirect('/personas/list');
    })
})


module.exports = router;