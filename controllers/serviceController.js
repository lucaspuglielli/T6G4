const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    Service, Employee, Employee_skill
} = require('../models');

const serviceController = {

    store: async (req, res) => {

        const {
            serviceregistername,
            serviceregistercategory,
            serviceprice,
            serviceduration,
            servicedescription,
            employees
        } = req.body;
        
        console.log(employees);
        
        const service = await Service.create({
            name: serviceregistername,
            duration: serviceduration,
            description: servicedescription,
            price: serviceprice,
            id_category: serviceregistercategory,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        
        if(Array.isArray(employees)) {
            employees.forEach(id => {
                const relationship = Employee_skill.create({
                    id_employee: id,
                    id_service: service.id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }); 
        } else {
            const relationship = Employee_skill.create({
                id_employee: employees,
                id_service: service.id,
                createdAt: new Date(),
                updatedAt: new Date(), 
            });
        };
        return res.redirect('/administracao');
    },
};

module.exports = serviceController;