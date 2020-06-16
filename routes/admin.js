const express = require('express');

const multer = require("multer");
const path = require("path")

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'images'));
    },
    filename: function (req, file, cb) {
        let nomeImg = req.body.nameemployee.replace(/\s/g, "") + req.body.lastnameemployee.replace(/\s/g, "") +
        path.extname(file.originalname);
        cb(null, nomeImg);
    },
});

const upload = multer({ storage: storage });

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
router.post('/employee-register', upload.any(), employeeController.store);

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