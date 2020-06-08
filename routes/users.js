const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionVerifier = require('../middleware/sessionVerifier');
const auth = require('../middleware/auth');

/* User register routes */
router.get('/', sessionVerifier, userController.create);
router.post('/', userController.store);

router.get('/perfil', auth, userController.index);
router.put('/editar', auth, userController.update);

module.exports = router;