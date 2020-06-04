'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
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