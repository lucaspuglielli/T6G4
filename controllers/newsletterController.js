const Sequelize = require('sequelize');
const config = require('../config/database');
const {Newsletter} = require('../models');

const newsletterController = {

    store: async (req, res) => {
       
        const {
            newsname,
            newsemail,
        } = req.body;
        

        const subscriber = await Newsletter.create({
            name: newsname,
            email: newsemail,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/');
    }, 
};

module.exports = newsletterController;