const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionVerifier = require('../middleware/sessionVerifier');
const auth = require('../middleware/auth');
const blockAdm = require('../middleware/blockAdmMiddleware')

/* User register routes */
router.get('/registro', blockAdm, sessionVerifier, userController.create);
router.post('/registro', userController.store);

router.get('/perfil', auth, userController.index);
router.put('/editar', auth, userController.update);

module.exports = router;