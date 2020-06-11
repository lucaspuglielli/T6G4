const Sequelize = require('sequelize');
const config = require('../config/database');
const bcrypt = require('bcrypt');
const { Administrator } = require('../models');

const AdminAuthController = {
    index: (_req, res) => {
        return res.render('login-adm');
    },
    store: async (req, res) => {
        const {
            email,
            password
        } = req.body;

        let [user] = await Administrator.findAll({
            where: {email: email}
        });
        console.log(user);
        if(!user || !bcrypt.compareSync(password, user.password)) {
            user = {
                name: "disconnected"
            }
            return res.render('login-adm', {
                user,
                msg: "Email ou senha inválidos."
            });
        }

        req.session.user = {
            id: user.id,
            name: user.fullName,
            email: user.email,
        }
        res.redirect('/administracao')

    },
    update: (req, res) => {
        req.session.user = undefined;
        res.redirect('/');
    }


};

module.exports = AdminAuthController;