var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/new', (req, res, next) => {
  console.log('accede al middleware');
  next();
}, (req, res) => {
  res.end('responde en new');
});
router.get('/:prueba', function (req, res, next) {
  res.send(req.params.prueba);
});
router.post('/peticionPost', (req, res) => {
  res.json(req.body);

})

module.exports = router;
