'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee_working_day = sequelize.define('employee_working_day', {
    id_employee: DataTypes.INTEGER,
    id_working_day: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  employee_working_day.associate = (models) => {
    employee_working_day.belongsTo(models.employee, {foreignKey: 'id_employee'});
    employee_working_day.belongsTo(models.working_day, {foreignKey: 'id_working_day'});
  };
  return employee_working_day;
};