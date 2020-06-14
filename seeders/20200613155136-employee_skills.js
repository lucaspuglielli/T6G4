'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('employee_skills', 
      [
        {
          id_service: '1',
          id_employee: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '2',
          id_employee: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '5',
          id_employee: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '1',
          id_employee: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '4',
          id_employee: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '3',
          id_employee: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '3',
          id_employee: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '4',
          id_employee: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          id_service: '5',
          id_employee: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('employee_skills', null, {});

  }
};
