var express = require('express');
var router = express.Router();
const sessionVerifier = require('../middleware/sessionVerifier');

/* GET home page. */
router.get('/', sessionVerifier, function(req, res) {
  res.render('index');
});

router.get('/nossos-servicos', sessionVerifier, function(req, res) {
  res.render('nossos-servicos');
})

router.get('/quem-somos', sessionVerifier, function(req, res) {
  res.render('quem-somos');
})

router.get('/cadastro-usuario', sessionVerifier, function(req, res) {
  res.render('cadastro-usuario')
});

router.get('/profissionais', sessionVerifier, function(req, res) {
  res.render('profissionais')
})

router.get('/contato', sessionVerifier, function(req, res) {
  res.render('contato')
})

router.get('/agendamento', sessionVerifier, function(req, res) {
  res.render('agendamento')
})

router.get('/pagamento', sessionVerifier, function(req, res) {
  res.render('pagamento')
})

router.get('/pagamento-cadastro', sessionVerifier, function(req, res) {
  res.render('pagamento-cadastro')
})

module.exports = router;
