
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

    update: async (req, res) => {
        const {
            editemployeenameselection,
            editemployeename,
            editemployeelastname,
            editemployeeemail,
            editskillsemployee,
            editemployeephone,
            editemployeeshiftstart,
            editemployeeshiftend,
            dominfosfuncionario,
            seginfosfuncionario,
            terinfosfuncionario,
            quainfosfuncionario,
            quiinfosfuncionario,
            sexinfosfuncionario,
            sabinfosfuncionario,
        } = req.body;

        const [newphotoemployee] = req.files;
        
        function verificaDia(dia){
            if(dia == "on"){
                return 1;
            } else{
                return 0;
            }
        }

        try {
            if(!newphotoemployee){
            const employee = await Employee.update(
                {
                name: editemployeename,
                lastname: editemployeelastname,
                email: editemployeeemail,
                skills: editskillsemployee,
                phone: editemployeephone,
                shiftstart: editemployeeshiftstart,
                shiftend: editemployeeshiftend,
                updatedAt: new Date(), 
            },
            {
                where: {id: editemployeenameselection}
            }
            )} else {
                const employee = await Employee.update(
                    {
                    name: editemployeename,
                    lastname: editemployeelastname,
                    email: editemployeeemail,
                    skills: editskillsemployee,
                    phone: editemployeephone,
                    photo: newphotoemployee.filename,
                    shiftstart: editemployeeshiftstart,
                    shiftend: editemployeeshiftend,
                    updatedAt: new Date(), 
                },
                {
                    where: {id: editemployeenameselection}
                }
                )
            }
            const workingDay = await Working_day.update(
                {
                    sunday: verificaDia(dominfosfuncionario),
                    monday: verificaDia(seginfosfuncionario),
                    tuesday: verificaDia(terinfosfuncionario),
                    wednesday: verificaDia(quainfosfuncionario),
                    thursday: verificaDia(quiinfosfuncionario),
                    friday: verificaDia(sexinfosfuncionario),
                    saturday: verificaDia(sabinfosfuncionario),
                    updatedAt: new Date(),
                },
                {
                    where: {id_employee: editemployeenameselection}
                }
            )
            return res.redirect('/administracao')
        } catch(e){
            return res.status(400).json({
              error: true,
              msg: 'Erro na requisição, tente novamente'
            }
            )}
    }
};

module.exports = employeeController;