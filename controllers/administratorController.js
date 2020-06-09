const Sequelize = require('sequelize');
const config = require('../config/database');
const bcrypt = require('bcrypt');
const { Administrator } = require('../models');

const administratorController = {
    index: (_req, res) => {
        return res.render('administracao');
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

        const defaultPassword = bcrypt.hashSync("Senha Padrão", 10);

        const administrator = await Administrator.create({
            fullName: nameinfosadm,
            email: emailinfosadm,
            cpf: cpfinfosadm,
            birthdate: birthdayinfosadm,
            phone: phoneinfosadm,
            password: defaultPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/administracao');

    },


};

module.exports = administratorController;