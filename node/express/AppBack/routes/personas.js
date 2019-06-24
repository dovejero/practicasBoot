var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/personas/new')
});
router.get('/new', function (req, res, next) {
  res.render('personas');
});
router.post('/valores', function (req, res, next) {
  res.json(req.body);
});

module.exports = router;
