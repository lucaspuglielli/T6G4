'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
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
  return Employee;
};