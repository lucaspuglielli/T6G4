const Sequelize = require('sequelize');
const config = require('../config/database');
const { Schedule, Administrator } = require('../models');


const dailyScheduleController = {
index: async (req, res) => {

    const administrator = await Administrator.findByPk(req.session.user.id);
    const user = administrator;


    return res.render('daily-schedule', {user});
},
destroy: async (req, res) => {
		
    const { idschedule } = req.body;

    const deletedSchedule = Schedule.destroy({
        where: {id: idschedule},
    });

    return res.redirect('/administracao/daily')
},
};

module.exports = dailyScheduleController;