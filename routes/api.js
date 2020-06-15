const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/api/employeeController');
const workingDayController = require('../controllers/api/workingDaysController');

router.get('/funcionario', employeeController.index);
router.get('/dias', workingDayController.index);

module.exports = router;