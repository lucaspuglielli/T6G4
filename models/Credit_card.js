'use strict';
module.exports = (sequelize, DataTypes) => {
  const Credit_card = sequelize.define('Credit_card', {
    number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    id_client: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  Credit_card.associate = (models) => {
    Credit_card.belongsTo(models.Client, {foreignKey: 'id_client'});
  };
  return Credit_card;
};