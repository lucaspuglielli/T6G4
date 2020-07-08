'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    id_client: DataTypes.INTEGER,
    id_employee: DataTypes.INTEGER,
    id_service: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  schedule.associate = (models) => {
    schedule.belongsTo(models.client, {foreignKey: 'id_client'});
    schedule.belongsTo(models.employee, {foreignKey: 'id_employee'});
  };
  return schedule;
};