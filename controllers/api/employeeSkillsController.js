const Sequelize = require('sequelize');
const { Employee_skill } = require('../../models');

const employeeSkillsController = {
    index: async (req, res) => {
        try{
            let employee_skills = await Employee_skill.findAll();
            return res.status(200).json(employee_skills);
        } 
        catch(error){
            return res.status(400).json({
                error: true,
                msg: 'Deu erro'
            })
        }
        
    },
};

module.exports = employeeSkillsController;