const Sequelize = require('sequelize');
const config = require('../config/database');
const bcrypt = require('bcrypt');
const { Administrator, Company, Category, Employee, Client, Service } = require('../models');

const administratorController = {
    index: async (req, res) => {

        const company = await Company.findByPk(1);
        const category = await Category.findAll();
        const employees = await Employee.findAll();
        const services = await Service.findAll();
        const clients = await Client.findAll();
        const administrator = await Administrator.findByPk(req.session.user.id);
        const user = administrator;


        return res.render('administracao', {company, category, employees, administrator, user, clients, services});
    },
    index2: async (req, res) => {

        const administrator = await Administrator.findByPk(req.session.user.id);
        const user = administrator;


        return res.render('daily-schedule', {user});
    },
    store: async (req, res) => {
        const {
            admregistername,
            admregisteremail,
            admregistercpf,
            admregisterbirthdate,
            admregisterphone,
        } = req.body;

        const defaultPassword = bcrypt.hashSync("1", 10);

        const administrator = await Administrator.create({
            fullName: admregistername,
            email: admregisteremail,
            cpf: admregistercpf,
            birthdate: admregisterbirthdate,
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