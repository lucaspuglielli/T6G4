const express = require('express');

const router = express.Router();

// Importação de Middlewares (trocar para middleware de autenticação de adminstrador)
const sessionVerifier = require('../middleware/sessionVerifier');

// Importação de controllers
const administratorController = require('../controllers/administratorController');
const companyController = require('../controllers/companyController');
const clientController = require('../controllers/clientController');
const employeeController = require('../controllers/employeeController');

router.get('/', sessionVerifier, administratorController.index);

// *** REGISTROS DE DADOS ***
// Administrador
router.post('/admin-register', administratorController.store);

// Registro manual de Cliente.
router.post('/client-register', clientController.store);

// Funcionário.
router.post('/employee-register', employeeController.store);

// *** EDIÇÃO DE DADOS ***
// Empresa
router.put('/company-register', companyController.update);

module.exports = router;