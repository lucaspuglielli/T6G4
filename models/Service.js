'use strict';
module.exports = (sequelize, DataTypes) => {
  const service = sequelize.define('service', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  service.associate = (models) => {
    service.belongsTo(models.category, {foreignKey: 'id_category'});
    service.belongsToMany(models.employee, {through: 'employee_skill', foreignKey: 'id_employee'});
  };
  return service;
};