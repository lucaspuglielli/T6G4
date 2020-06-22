const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const clientScheduleController = require('../controllers/clientScheduleController');
const sessionVerifier = require('../middleware/sessionVerifier');
const auth = require('../middleware/auth');
const blockAdm = require('../middleware/blockAdmMiddleware')

/* User register routes */
router.get('/registro', blockAdm, sessionVerifier, userController.create);
router.post('/registro', userController.store);

router.get('/perfil', auth, userController.index);
router.get('/perfil/agendamento', auth, userController.index2);
router.put('/editar', auth, userController.update);

// Rotas para agendamento de usuário.agendamento

router.get('/agendamento', blockAdm, auth, clientScheduleController.index);
router.post('/agendamento', clientScheduleController.store);

module.exports = router;