'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    shiftstart: DataTypes.STRING,
    shiftend: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  Employee.associate = (models) => {
    Employee.belongsToMany(models.Service, {through: 'Employee_skill', foreignKey: 'id_employee'});
    Employee.belongsToMany(models.Working_day, {through: 'Employee_working_day', foreignKey: 'id_employee'});
  };
  return Employee;
};