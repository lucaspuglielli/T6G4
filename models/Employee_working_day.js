'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee_working_day = sequelize.define('Employee_working_day', {
    id_employee: DataTypes.INTEGER,
    id_working_day: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  Employee_working_day.associate = (models) => {
    Employee_working_day.belongsTo(models.Employee, {foreignKey: 'id_employee'});
    Employee_working_day.belongsTo(models.Working_Day, {foreignKey: 'id_working_day'});
  };
  return Employee_working_day;
};