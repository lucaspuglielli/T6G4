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
                error: true,
                msg: 'Deu erro'
            })
        }
        
    },
    update: async (req, res) => {
        const {
            editemployeenameselection,
            editemployeename,
            editemployeelastname,
            editemployeeemail,
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
        
        function verificaDia(dia){
            if(dia == "on"){
                return 1;
            } else{
                return 0;
            }
        }

        try {
            const employee = await Employee.update(
                {
                name: editemployeename,
                lastname: editemployeelastname,
                email: editemployeeemail,
                phone: editemployeephone,
                shiftstart: editemployeeshiftstart,
                shiftend: editemployeeshiftend,
                updatedAt: new Date(), 
            },
            {
                where: {id: editemployeenameselection}
            }
            )
            const workingDay = await Working_day.update(
                {
                    sunday: verificaDia(dominfosfuncionario),
                    monday: verificaDia(seginfosfuncionario),
                    tuesday: verificaDia(terinfosfuncionario),
                    wednesday: verificaDia(quainfosfuncionario),
                    thursday: verificaDia(quiinfosfuncionario),
                    friday: verificaDia(sexinfosfuncionario),
                    saturday: verificaDia(sabinfosfuncionario),
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

}


module.exports = employeeController;