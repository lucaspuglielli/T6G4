'use strict';
module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define('Newsletter', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return Newsletter;
};