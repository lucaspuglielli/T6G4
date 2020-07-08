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


  Employee.associate = (models) => {
    Employee.belongsToMany(models.Service, {through: 'Employee_skill', foreignKey: 'id_employee'});
  };
  return employee;
};