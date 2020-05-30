const Sequelize = require('sequelize');
const config = require('../config/database');
const bcrypt = require('bcrypt');
const { Administrator } = require('../models');

const administratorController = {
    create: (_req, res) => {
        return res.render('admin-info');
    },
    store: async (req, res) => {
        const {
            nameinfosadm,
            emailinfosadm,
            cpfinfosadm,
            birthdayinfosadm,
            phoneinfosadm,
            passwordinfosadm,
        } = req.body;

        const hashPassword = bcrypt.hashSync(passwordinfosadm, 10);

        const administrator = await Administrator.create({
            fullName: nameinfosadm,
            email: emailinfosadm,
            cpf: cpfinfosadm,
            birthdate: birthdayinfosadm,
            phone: phoneinfosadm,
            password: hashPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/');

    },


};

module.exports = administratorController;