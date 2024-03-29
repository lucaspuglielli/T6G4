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
const scheduleController = require('../controllers/scheduleController');
const dailyScheduleController = require('../controllers/dailyScheduleController');

const adminLoginMiddleware = require('../middleware/adminLoginMiddleware');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');


// Multer config para foto do funcionário
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

// Multer config para atualização de foto do funcionário
const newEmployeeStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'images'));
    },
    filename: function (req, file, cb) {
        let nomeImg = req.body.editemployeename.replace(/\s/g, "") + req.body.editemployeelastname.replace(/\s/g, "") +
        path.extname(file.originalname);
        cb(null, nomeImg);
    },
});

const newEmployeeUpload = multer({ storage: newEmployeeStorage });

// Multer config para ícone da categoria
const storageCategory = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'images'));
    },
    filename: function (req, file, cb) {
        let nomeImg = req.body.namecategory.replace(/\s/g, "") + path.extname(file.originalname);
        cb(null, nomeImg);
    },
});

const uploadCategory = multer({ storage: storageCategory });

// *** EXIBIÇÃO DA PÁGINA DE ADMINISTRAÇÃO ***
router.get('/', adminAuthMiddleware, administratorController.index);
router.get('/daily', adminAuthMiddleware, dailyScheduleController.index);

// *** LOGIN DE ADMINISTRADOR ***
router.get('/login', adminLoginMiddleware, adminAuthController.index);
router.post('/login', adminAuthController.store);

// *** REGISTROS DE DADOS ***
// Administrador
router.post('/admin-register', administratorController.store);

// Registro manual de Cliente.
router.post('/client-register', clientController.store);

// Agendamento manual de Cliente.
router.post('/client-schedule', scheduleController.store);

// Funcionário.
router.post('/employee-register', upload.any(), employeeController.store);

// Categoria.
router.post('/category-register', uploadCategory.any(), categoryController.store);

// Serviço.
router.post('/service-register', serviceController.store);


// *** EDIÇÃO DE DADOS ***
// Empresa
router.put('/company-register', companyController.update);

// Administrador
router.put('/admin-edit', administratorController.update);

// Serviço
router.put('/service-edit', serviceController.update);

// Funcionário
router.put('/employee-edit', newEmployeeUpload.any(), employeeController.update);

// ***** DELETE DE DADOS *****

router.delete('/daily', dailyScheduleController.destroy);

module.exports = router;