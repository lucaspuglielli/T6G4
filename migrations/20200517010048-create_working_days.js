'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('working_days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_employee: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'employees',
          key: 'id',
        },
      },
      monday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tuesday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wednesday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      thursday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      friday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      saturday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sunday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('working_days');
  }
};