'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('schedules', 
      [
        {
          start_date: '20/06/2020',
          end_date: '20/06/2020',
          start_time: '8:00',
          end_time: '9:00',
          id_client: '1',
          id_employee: '2',
          id_service: '4',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          start_date: '21/06/2020',
          end_date: '21/06/2020',
          start_time: '8:00',
          end_time: '9:00',
          id_client: '3',
          id_employee: '1',
          id_service: '1',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          start_date: '20/06/2020',
          end_date: '20/06/2020',
          start_time: '10:00',
          end_time: '12:00',
          id_client: '3',
          id_employee: '2',
          id_service: '5',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          start_date: '20/06/2020',
          end_date: '20/06/2020',
          start_time: '17:00',
          end_time: '18:00',
          id_client: '3',
          id_employee: '2',
          id_service: '2',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          start_date: '21/06/2020',
          end_date: '21/06/2020',
          start_time: '9:00',
          end_time: '10:00',
          id_client: '3',
          id_employee: '1',
          id_service: '2',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          start_date: '21/06/2020',
          end_date: '21/06/2020',
          start_time: '10:00',
          end_time: '11:00',
          id_client: '2',
          id_employee: '1',
          id_service: '2',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('schedules', null, {});

  }
};
