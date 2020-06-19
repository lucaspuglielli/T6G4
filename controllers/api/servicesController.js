const Sequelize = require('sequelize');
const { Service } = require('../../models');

const servicesController = {
    index: async (req, res) => {
        try{
            let services = await Service.findAll();
            return res.status(200).json(services);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    },
};

module.exports = servicesController;