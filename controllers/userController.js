const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const config = require('../config/database');
const {Client} = require('../models');

const userController = {
    index: async (req, res) => {

        const user = await Client.findByPk(req.session.user.id);
        if(user === null){
            console.log('Not found!');
        }

        function transformarData(date) {
            var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
            let ano = newDate.getFullYear();
            let mes = newDate.getMonth();
            let dia = newDate.getDate();
        
            newDate = `${dia}/${mes + 1}/${ano}`
        
            return newDate;
        }

        const inputValues = {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            cpf: user.cpf,
            birthdate: transformarData(user.birthdate),
            phone: user.phone
        }

        return res.render('perfil', {inputValues});
    },
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

        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
        }
        res.redirect('/usuario/perfil');
        
    }, 
    update: async (req, res) => {

        const client = await Client.findByPk(req.session.user.id);

        const {
            name,
            lastname,
            email,
            cpf,
            birthdate,
            phone,
        } = req.body;

        const user = await Client.update({
            name,
            lastname,
            email,
            cpf,
            birthdate,
            phone,
        },
        {
            where: {
                id: client.id
            }
        });

        return res.redirect('/usuario/perfil');

    },
};

module.exports = userController;