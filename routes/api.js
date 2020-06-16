const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/api/employeeController');
const workingDayController = require('../controllers/api/workingDaysController');

// Funcionários
router.get('/funcionario', employeeController.index);
router.get('/dias', workingDayController.index);
router.put('/employee-edit', employeeController.update)

module.exports = router;