const Sequelize = require('sequelize');
const { Client } = require('../../models');

const clientsController = {
    index: async (req, res) => {
        try{
            let clients = await Client.findAll();
            return res.status(200).json(clients);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    },
};

module.exports = clientsController;