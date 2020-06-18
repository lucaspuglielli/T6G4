const Sequelize = require('sequelize');
const config = require('../config/database');
const bcrypt = require('bcrypt');
const { Administrator, Company, Category, Employee } = require('../models');

const administratorController = {
    index: async (req, res) => {

        const company = await Company.findByPk(1);
        const category = await Category.findAll();
        const employees = await Employee.findAll();
        const administrator = await Administrator.findByPk(req.session.user.id);
        const user = administrator;


        return res.render('administracao', {company, category, employees, administrator, user});
    },
    store: async (req, res) => {
        const {
            admregistername,
            admregisteremail,
            admregistercpf,
            admregisterbirthday,
            admregisterphone,
        } = req.body;

        const defaultPassword = bcrypt.hashSync("1", 10);

        const administrator = await Administrator.create({
            fullName: admregistername,
            email: admregisteremail,
            cpf: admregistercpf,
            birthdate: admregisterbirthday,
            phone: admregisterphone,
            password: defaultPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/administracao');

    },

    update: async (req, res) => {

        const {
            nameinfosadm,
            emailinfosadm,
            cpfinfosadm,
            birthdayinfosadm,
            phoneinfosadm,
        } = req.body;
        
        const administrator = await Administrator.update({
            fullName: nameinfosadm,
            email: emailinfosadm,
            cpf: cpfinfosadm,
            birthdate: birthdayinfosadm,
            phone: phoneinfosadm,
            updatedAt: new Date(),
        },
        {
            where: {
                id: req.session.user.id
            }
        });

        return res.redirect('/administracao');
    },


};

module.exports = administratorController;