const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    Service, Employee
} = require('../models');

const serviceController = {

    store: async (req, res) => {

        // const employees = await Employee.findAll();
        
        // let employeesId = [];
        
        // for( let i=0; i < employees.length; i++) {
        //     // let idEmployee = employees[i].id;
        //     if(typeof req.body.employees[i] === 'undefined'){
        //         employeesId.push('não definido')
        //     } else{
        //         employeesId.push(req.body.employees[i].id);
        //     }
        // }

        // for( let i=0; i < employeesId.length; i++) {
        //     employeesId[i] = req.body;
        // } 

        // console.log(req.body);
        // console.log(employeesId);

        const {
            serviceregistername,
            serviceregistercategory,
            serviceprice,
            serviceduration,
            servicedescription,
        } = req.body;

        const service = await Service.create({
            name: serviceregistername,
            duration: serviceduration,
            description: servicedescription,
            price: serviceprice,
            id_category: serviceregistercategory,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.redirect('/administracao');
    },
};

module.exports = serviceController;