const Sequelize = require('sequelize');
const config = require('../config/database');
const { Company } = require('../models');

const companyController = {
    update: async (req, res) => {
        const {
            nomeinfosempresa,
            emailinfosempresa,
            phone1infosempresa,
            phone2infosempresa
        } = req.body;

        const company = await Company.update({
            name: nomeinfosempresa,
            email: emailinfosempresa,
            phone_1: phone1infosempresa,
            phone_2: phone2infosempresa,
            updatedAt: new Date(),
        },
        {
            where: {
                id: 1
            }
        });
        return res.redirect('/administracao');
    },
};

module.exports = companyController;