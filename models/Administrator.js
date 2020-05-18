'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrator = sequelize.define('Administrator', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return Administrator;
};