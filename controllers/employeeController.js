
// CRIADO SOMENTE PARA TESTES.


const Sequelize = require('sequelize');
const config = require('../config/database');
const { Employee, Employee_skill, Employee_working_day, Working_day} = require('../models');

const employeeController = {
    store: (req, res) => {
        const {
            dominfosfuncionario,
            seginfosfuncionario,
            shiftstart
        } = req.body;
    console.log(dominfosfuncionario, seginfosfuncionario,shiftstart);
    },
};

module.exports = employeeController;