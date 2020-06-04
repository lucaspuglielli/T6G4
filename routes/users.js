const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionVerifier = require('../middleware/sessionVerifier');
const auth = require('../middleware/auth');

/* User register routes */
router.get('/', sessionVerifier, userController.create);
router.post('/', userController.store);

router.get('/perfil', auth, function(req, res) {
    res.render('perfil')
  })

module.exports = router;