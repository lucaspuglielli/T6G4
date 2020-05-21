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

router.get('/contato', function(req, res) {
  res.render('contato')
})

router.get('/agendamento', function(req, res) {
  res.render('agendamento')
})

router.get('/pagamento', function(req, res) {
  res.render('pagamento')
})
module.exports = router;
