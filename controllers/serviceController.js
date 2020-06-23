const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    Service,
    Employee,
    Employee_skill
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

        const service = await Service.create({
            name: serviceregistername,
            duration: serviceduration,
            description: servicedescription,
            price: serviceprice,
            id_category: serviceregistercategory,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        if (Array.isArray(employees)) {
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

    update: async (req, res) => {

        const {
            editserviceselectname,
            editservicename,
            editserviceselectcategory,
            editserviceprice,
            editserviceduration,
            editservicedescription,
            editemployees,
            uncheckedemployees
        } = req.body;

        const employeeSkills = await Employee_skill.findAll({});

        const service = await Service.update({
            name: editservicename,
            duration: editserviceduration,
            description: editservicedescription,
            price: editserviceprice,
            id_category: editserviceselectcategory,
            updatedAt: new Date(),
        }, {
            where: {
                id: editserviceselectname
            }
        });


        function registerCheck(registro) {
            if (editemployees != undefined) {
                for (let i = 0; i < editemployees.length; i++) {

                    if (registro.id_employee == editemployees[i]) {} else {
                        const createRelationship = Employee_skill.create({
                                id_employee: editemployees[i],
                                id_service: editserviceselectname,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            }

                        );
                    }
                }
            }
        }

        function deleteRegister(registro) {
            if (uncheckedemployees != undefined) {
                for (let i = 0; i < uncheckedemployees.length; i++) {
                    if (registro.id_employee == parseInt(uncheckedemployees[i])) {
                        const deletedRegisters = Employee_skill.destroy({
                            where: {
                                id_employee: uncheckedemployees[i],
                                id_service: editserviceselectname
                            }
                        })
                    }

                }
            }
        }

        function createNonexistent() {
            if (editemployees != undefined) {
                for (let i = 0; i < editemployees.length; i++) {

                    const createRelationship = Employee_skill.create({
                        id_employee: editemployees[i],
                        id_service: editserviceselectname,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    });
                }
            }
        }

        for (let i = 0; i < employeeSkills.length; i++) {
            if (employeeSkills[i].id_service == editserviceselectname) {
                registerCheck(employeeSkills[i])
            } else {
                createNonexistent();
                break;
            }

        }

        for (let i = 0; i < employeeSkills.length; i++) {
            if (employeeSkills[i].id_service == editserviceselectname) {
                deleteRegister(employeeSkills[i])
            }

        }



        return res.redirect('/administracao');
    },

};

module.exports = serviceController;