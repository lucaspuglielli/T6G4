'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee_skill = sequelize.define('employee_skill', {
    id_service: DataTypes.INTEGER,
    id_employee: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  employee_skill.associate = (models) => {
    employee_skill.belongsTo(models.employee, {foreignKey: 'id_employee'});
    employee_skill.belongsTo(models.service, {foreignKey: 'id_service'});
  };
  return employee_skill;
};