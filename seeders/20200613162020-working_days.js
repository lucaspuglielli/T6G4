'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('working_days', 
      [
        {
          id_employee: '1',
          monday: '1',
          tuesday: '1',
          wednesday: '1',
          thursday: '1',
          friday: '1',
          saturday: '1',
          sunday: '0',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          id_employee: '2',
          monday: '1',
          tuesday: '0',
          wednesday: '1',
          thursday: '0',
          friday: '1',
          saturday: '0',
          sunday: '0',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          id_employee: '3',
          monday: '1',
          tuesday: '1',
          wednesday: '0',
          thursday: '1',
          friday: '1',
          saturday: '1',
          sunday: '0',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('working_days', null, {});
  }
};
