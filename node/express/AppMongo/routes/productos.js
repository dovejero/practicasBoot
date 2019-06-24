var express = require('express');
var router = express.Router();
var Producto = require('../models/producto')

router.get('/igual1500', (req, res) => {
    Producto.find({ precio: 1500 }, (err, productos) => {
        res.json(productos);
    })
})
router.get('/menor1500', (req, res) => {
    Producto.find({ precio: { $lt: 1500 } }, (err, productos) => {
        res.json(productos);
    })
})
router.get('/mismoDepartamento', (req, res) => {
    let prod = new Producto()
    prod.departamento = 'informática'

    prod.mismoDepartamento((err, productos) => {
        res.json(productos);
    })
})

router.get('/activos', (req, res) => {

    Producto.activos((err, productos) => {
        res.json(productos);
    })
})

router.get('/entre300y1500', (req, res) => {
    Producto.find({ precio: { $lte: 1500, $gte: 300 } }, (err, productos) => {
        res.json(productos);
    })
})
router.post('/new', function (req, res) {
    Producto.create(req.body).then((producto) => {
        res.json(producto);
    }).catch(err => res.json(err))
});

module.exports = router;