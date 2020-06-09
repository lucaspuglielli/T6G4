'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  return Category;
};