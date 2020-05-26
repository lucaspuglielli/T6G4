'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrator = sequelize.define('Administrator', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return Administrator;
};