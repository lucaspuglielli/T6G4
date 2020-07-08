'use strict';
module.exports = (sequelize, DataTypes) => {
  const administrator = sequelize.define('administrator', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return administrator;
};