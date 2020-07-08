'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    skills: DataTypes.STRING,
    phone: DataTypes.STRING,
    photo: DataTypes.STRING,
    shiftstart: DataTypes.STRING,
    shiftend: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });


  employee.associate = (models) => {
    employee.belongsToMany(models.service, {through: 'employee_skill', foreignKey: 'id_employee'});
  };
  return employee;
};