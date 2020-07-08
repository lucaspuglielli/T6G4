'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee_skill = sequelize.define('Employee_skill', {
    id_service: DataTypes.INTEGER,
    id_employee: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  Employee_skill.associate = (models) => {
    Employee_skill.belongsTo(models.employee, {foreignKey: 'id_employee'});
    Employee_skill.belongsTo(models.Service, {foreignKey: 'id_service'});
  };
  return Employee_skill;
};