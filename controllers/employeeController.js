
// CRIADO SOMENTE PARA TESTES.


const Sequelize = require('sequelize');
const config = require('../config/database');
const { Employee, Employee_skill, Employee_working_day, Working_day} = require('../models');

function verificarDia(dia){
    if(dia == "on"){
        return 1;
    } else{
        return 0;
    }
}

const employeeController = {
    store: async (req, res) => {
        const {
            nameemployee,
            lastnameemployee,
            emailemployee,
            skillsemployee,
            phoneemployee,
            sunemployee,
            monemployee,
            tueemployee,
            wedemployee,
            thuemployee,
            friemployee,
            satemployee,
            shiftend,
            shiftstart
        } = req.body;

        const [photoemployee] = req.files;

        function verificaDia(dia){
            if(dia == "on"){
                return 1;
            } else{
                return 0;
            }
        }

        try {
            const employee = await Employee.create({
                name: nameemployee,
                lastname: lastnameemployee,
                email: emailemployee,
                skills: skillsemployee,
                phone: phoneemployee,
                photo: photoemployee.filename,
                shiftstart,
                shiftend,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            const workingDay = await Working_day.create({
                id_employee: employee.id,
                monday: verificarDia(monemployee),
                tuesday: verificarDia(tueemployee),
                wednesday: verificarDia(wedemployee),
                thursday: verificarDia(thuemployee),
                friday: verificarDia(friemployee),
                saturday: verificarDia(satemployee),
                sunday: verificarDia(sunemployee),
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            return res.redirect('/administracao');
            // you can now access the newly created user
          } catch (err) {
            // print the error details
            console.log(err);
          }
          
    },

        store: async (req, res) => {
        const {
            nameemployee,
            lastnameemployee,
            emailemployee,
            skillsemployee,
            phoneemployee,
            sunemployee,
            monemployee,
            tueemployee,
            wedemployee,
            thuemployee,
            friemployee,
            satemployee,
            shiftend,
            shiftstart
        } = req.body;

        const [photoemployee] = req.files;

        function verificaDia(dia){
            if(dia == "on"){
                return 1;
            } else{
                return 0;
            }
        }

        try {
            const employee = await Employee.create({
                name: nameemployee,
                lastname: lastnameemployee,
                email: emailemployee,
                skills: skillsemployee,
                phone: phoneemployee,
                photo: photoemployee.filename,
                shiftstart,
                shiftend,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            const workingDay = await Working_day.create({
                id_employee: employee.id,
                monday: verificarDia(monemployee),
                tuesday: verificarDia(tueemployee),
                wednesday: verificarDia(wedemployee),
                thursday: verificarDia(thuemployee),
                friday: verificarDia(friemployee),
                saturday: verificarDia(satemployee),
                sunday: verificarDia(sunemployee),
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            return res.redirect('/administracao');
            // you can now access the newly created user
          } catch (err) {
            // print the error details
            console.log(err);
          }
          
    },
};

module.exports = employeeController;