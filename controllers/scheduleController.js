const Sequelize = require('sequelize');
const config = require('../config/database');
const { Schedule } = require('../models');

const scheduleController = {

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

module.exports = scheduleController;