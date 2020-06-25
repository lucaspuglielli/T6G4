const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/api/employeeController');
const workingDayController = require('../controllers/api/workingDaysController');
const servicesController = require('../controllers/api/servicesController');
const employeeSkillsController = require('../controllers/api/employeeSkillsController');
const schedulesController = require('../controllers/api/schedulesController');
const categoriesController = require('../controllers/api/categoriesController');

// Funcionários
router.get('/funcionario', employeeController.index);
router.get('/dias', workingDayController.index);


// Serviços
router.get('/services', servicesController.index);

// Category
router.get('/categories', categoriesController.index);

// Serviços do funcionário
router.get('/employee-skills', employeeSkillsController.index);

// Agendamentos
router.get('/schedules', schedulesController.index);

module.exports = router;