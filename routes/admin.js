const express = require('express');

const router = express.Router();

// Importação de Middlewares (trocar para middleware de autenticação de adminstrador)
const sessionVerifier = require('../middleware/sessionVerifier');

// Importação de controllers
const administratorController = require('../controllers/administratorController');
const companyController = require('../controllers/companyController');
const clientController = require('../controllers/clientController');
const employeeController = require('../controllers/employeeController');

router.get('/', sessionVerifier, administratorController.create);
router.post('/admin-register', administratorController.store);
router.post('/company-register', companyController.store);
router.post('/client-register', clientController.store);
router.post('/employee-register', employeeController.store);

module.exports = router;