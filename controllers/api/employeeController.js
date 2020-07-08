const Sequelize = require('sequelize')
const { Employee, Working_day} = require('../../models')


const employeeController = {
    index: async (req, res) => {
        try{
            let employee = await Employee.findAll();
            return res.status(200).json(employee);
        } 
        catch(error){
            return res.status(400).json({
                bananinha: error,
                error: true,
                msg: 'Deu ruim by podolski'
            })
        }
        
    },
    }


module.exports = employeeController;