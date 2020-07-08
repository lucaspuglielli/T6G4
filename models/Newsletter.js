'use strict';
module.exports = (sequelize, DataTypes) => {
  const newsletter = sequelize.define('newsletter', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return newsletter;
};