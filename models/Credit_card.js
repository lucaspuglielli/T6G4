'use strict';
module.exports = (sequelize, DataTypes) => {
  const credit_card = sequelize.define('credit_card', {
    number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    id_client: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  credit_card.associate = (models) => {
    credit_card.belongsTo(models.client, {foreignKey: 'id_client'});
  };
  return credit_card;
};