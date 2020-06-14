'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
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

  Service.associate = (models) => {
    Service.belongsTo(models.Category, {foreignKey: 'id_category'});
    Service.belongsToMany(models.Employee, {through: 'Employee_skill', foreignKey: 'id_employee'});
  };
  return Service;
};