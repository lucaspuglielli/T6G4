'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('credit_cards', 
      [
        {
          number: '3245132423454345',
          name: 'JANE DOE',
          id_client: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          number: '3245132423454345',
          name: 'JOHN DOE',
          id_client: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          number: '3245132423454345',
          name: 'MARY DOE',
          id_client: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('credit_cards', null, {});

  }
};
