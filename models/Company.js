'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_1: DataTypes.STRING,
    phone_2: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return company;
};