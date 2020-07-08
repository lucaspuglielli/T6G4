'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return Client;
};