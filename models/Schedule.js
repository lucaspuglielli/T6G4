'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
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
  Schedule.associate = (models) => {
    Schedule.belongsTo(models.Client, {foreignKey: 'id_client'});
    Schedule.belongsTo(models.employee, {foreignKey: 'id_employee'});
  };
  return Schedule;
};