var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/nossos-servicos', function(req, res) {
  res.render('nossos-servicos');
})

router.get('/quem-somos', function(req, res) {
  res.render('quem-somos');
})

router.get('/teste', function(req, res) {
  res.render('cadastro-usuario')
});

router.get('/profissionais', function(req, res) {
  res.render('profissionais')
})

router.get('/teste1', function(req, res) {
  res.render('login-adm')
});
module.exports = router;
