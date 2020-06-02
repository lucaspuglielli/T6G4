const Sequelize = require('sequelize');
const config = require('../config/database');
const { Company } = require('../models');

const companyController = {
    store: async (req, res) => {
        const {
            nomeinfosempresa,
            emailinfosempresa,
            phone1infosempresa,
            phone2infosempresa
        } = req.body;

        const company = await Company.create({
            name: nomeinfosempresa,
            email: emailinfosempresa,
            phone_1: phone1infosempresa,
            phone_2: phone2infosempresa,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return res.redirect('/admin');
    },
};

module.exports = companyController;