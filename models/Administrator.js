'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrator = sequelize.define('Administrator', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return Administrator;
};