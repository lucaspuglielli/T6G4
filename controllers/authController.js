const Sequelize = require('sequelize');
const config = require('../config/database');
const bcrypt = require('bcrypt');
const { Client } = require('../models');

const authController = {
    create: (_req, res) => {
        return res.render('login');
    },
    store: async (req, res) => {
        const {
            email,
            password
        } = req.body;

        const [user] = await Client.findAll({
            where: {email: email}
        });

        if(!user || !bcrypt.compareSync(password, user.password)) {
            return res.render('login', {
                msg: "Email ou senha inválidos."
            });
        }

        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
        }
        res.redirect('/usuario/perfil')

    },
    update: (req, res) => {
        req.session.user = undefined;
        res.redirect('/');
    }


};

module.exports = authController;