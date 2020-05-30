const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const config = require('../config/database');
const {Client} = require('../models');

const clientController = {

    store: async (req, res) => {
       
        const {
            nomeinfoscliente,
            sobrenomeinfoscliente,
            emailinfoscliente,
            cpfinfoscliente,
            birthdateinfoscliente,
            phoneinfoscliente,
        } = req.body;
        
        const defaultPassword = bcrypt.hashSync("Senha Padrão", 10);

        const user = await Client.create({
            name: nomeinfoscliente,
            lastname: sobrenomeinfoscliente,
            email: emailinfoscliente,
            cpf: cpfinfoscliente,
            password: defaultPassword,
            phone: phoneinfoscliente,
            birthdate: birthdateinfoscliente,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/admin');
    }, 
};

module.exports = clientController;