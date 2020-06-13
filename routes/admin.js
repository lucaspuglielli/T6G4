const express = require('express');

const router = express.Router();

// Importação de Middlewares (trocar para middleware de autenticação de adminstrador)
const sessionVerifier = require('../middleware/sessionVerifier');

// Importação de controllers
const administratorController = require('../controllers/administratorController');
const companyController = require('../controllers/companyController');
const clientController = require('../controllers/clientController');
const employeeController = require('../controllers/employeeController');
const categoryController = require('../controllers/categoryController');
const serviceController = require('../controllers/serviceController');
const adminAuthController = require('../controllers/adminAuthController');

const adminLoginMiddleware = require('../middleware/adminLoginMiddleware');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

// *** EXIBIÇÃO DA PÁGINA DE ADMINISTRAÇÃO ***
// !!! Após o desenvolvimento incluir o adminLoginMiddleware. !!!
router.get('/', adminAuthMiddleware, administratorController.index);

// *** LOGIN DE ADMINISTRADOR ***
router.get('/login', adminLoginMiddleware, adminAuthController.index);
router.post('/login', adminAuthController.store);

// *** REGISTROS DE DADOS ***
// Administrador
router.post('/admin-register', administratorController.store);

// Registro manual de Cliente.
router.post('/client-register', clientController.store);

// Funcionário.
router.post('/employee-register', employeeController.store);

// Categoria.
router.post('/category-register', categoryController.store);

// Serviço.
router.post('/service-register', serviceController.store);


// *** EDIÇÃO DE DADOS ***
// Empresa
router.put('/company-register', companyController.update);

// Administrador
router.put('/admin-edit', administratorController.update);

module.exports = router;