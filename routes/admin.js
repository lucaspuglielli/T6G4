const express = require('express');

const router = express.Router();

const administratorController = require('../controllers/administratorController');
const companyController = require('../controllers/companyController');
const clientController = require('../controllers/clientController');
const employeeController = require('../controllers/employeeController');

router.get('/', administratorController.create);
router.post('/admin-register', administratorController.store);
router.post('/company-register', companyController.store);
router.post('/client-register', clientController.store);
router.post('/employee-register', employeeController.store);

module.exports = router;