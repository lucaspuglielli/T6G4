const Sequelize = require('sequelize')
const { Employee } = require('../../models')


const employeeController = {
    index: async (req, res) => {
        try{
            let employee = await Employee.findAll();
            return res.status(200).json(employee);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    }
}

module.exports = employeeController;