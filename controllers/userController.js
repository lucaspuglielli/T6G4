const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const config = require('../config/database');
const {Client} = require('../models');

const userController = {
    create: (_req, res) => {
        return res.render('cadastro-usuario');
    },

    store: async (req, res) => {
        const {
            name,
            lastname,
            email,
            cpf,
            birthdate,
            phone,
            password,
        } = req.body;

        const con = new Sequelize(config);

        const hashPassword = bcrypt.hashSync(password, 10);

        const user = await Client.create({
            name,
            lastname,
            email,
            cpf,
            password: hashPassword,
            phone,
            birthdate,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        if(!user) {
            return res.render('cadastro-usuario', {
                msg: "Ocorreu um erro ao cadastrar usuário",
            });
        };
        return res.redirect('/');
    }, 
};

module.exports = userController;