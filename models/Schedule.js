'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
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
    Schedule.belongsTo(models.Employee, {foreignKey: 'id_employee'});
  };
  return Schedule;
};