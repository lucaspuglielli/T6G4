const Sequelize = require('sequelize')
const { Working_day } = require('../../models')


const workingDay = {
    index: async (req, res) => {
        try{
            let workingDay = await Working_day.findAll();
            return res.status(200).json(workingDay);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    }
}

module.exports = workingDay;