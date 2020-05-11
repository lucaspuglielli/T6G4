var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/teste', function(req, res) {
  res.render('template')
});

module.exports = router;
