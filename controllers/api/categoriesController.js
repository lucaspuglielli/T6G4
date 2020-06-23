const Sequelize = require('sequelize');
const { Category } = require('../../models');

const categoriesController = {
    index: async (req, res) => {
        try{
            let categories = await Category.findAll();
            return res.status(200).json(categories);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    },
};

module.exports = categoriesController;