const Sequelize = require('sequelize');
const { Schedule } = require('../../models');

const schedulesController = {
    index: async (req, res) => {
        try{
            let schedules = await Schedule.findAll();
            return res.status(200).json(schedules);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    },
};

module.exports = schedulesController;