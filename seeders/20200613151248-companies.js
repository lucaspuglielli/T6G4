'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('companies', 
      [
        {
        name: 'Casarão Estética & Saúde',
        email: 'casaraodaestetica@gmail.com',
        phone_1: '14996672641',
        phone_2: '14997821222',
        createdAt: '2020-06-13 04:11:51',
        updatedAt: '2020-06-13 04:11:51',
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('companies', null, {});
  }
};
