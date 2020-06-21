const Sequelize = require('sequelize');
const config = require('../config/database');
const { Schedule, Category, Employee,  } = require('../models');

const clientScheduleController = {
    index: async (_req, res) => {

    const category = await Category.findAll();
    const employees = await Employee.findAll();

        res.render('agendamento', { category, employees });
    },

    store: async (req, res) => {
       
        const {
            clientschedulename,
            clientscheduleservice,
            clientscheduleemployee,
            clientscheduledate,
            clientscheduletime,
        } = req.body;

        const endTime = `${parseInt(clientscheduletime) + 1}:00`

        const schedule = await Schedule.create({
            start_date: clientscheduledate,
            end_date: clientscheduledate,
            start_time: clientscheduletime,
            end_time: endTime,
            id_client: clientschedulename,
            id_employee: clientscheduleemployee,
            id_service: clientscheduleservice,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/administracao');
    }, 
};

module.exports = clientScheduleController;