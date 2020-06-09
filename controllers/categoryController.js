const Sequelize = require('sequelize');
const config = require('../config/database');
const {Category} = require('../models');

const categoryController = {

    store: async (req, res) => {
       
        const {
            namecategory,
            descriptioncategory,
        } = req.body;
        
        const category = await Category.create({
            name: namecategory,
            description: descriptioncategory,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/administracao');
    }, 
};

module.exports = categoryController;