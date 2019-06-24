var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express', personas: [
      {
        nombre: "nom1", apellido: "ape1"
      },
      {
        nombre: "nom2", apellido: "ape2"
      },
      {
        nombre: "nom3", apellido: "ape3"
      }]
  });
});

module.exports = router;
