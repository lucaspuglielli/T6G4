'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('employees', { 
        id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        skills: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        photo:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        shiftstart: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        shiftend: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('employees');
  }
};
