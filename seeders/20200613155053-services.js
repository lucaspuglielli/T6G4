'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('services', 
      [
        {
          name: 'manicure',
          price: '20,00',
          description: 'Embelezamento das unhas das mãos',
          duration: '45',
          id_category: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Design com tinta',
          price: '50,00',
          description: 'Embelezamento e pigmentação das sobrancelhas',
          duration: '60',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Corte',
          price: '55,00',
          description: 'Corte de cabelo feminino',
          duration: '60',
          id_category: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Axila',
          price: '20,00',
          description: 'Embelezamento das unhas das mãos',
          duration: '35',
          id_category: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Drenagem',
          price: '60,00',
          description: 'Massagem',
          duration: '60',
          id_category: '5',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('services', null, {});

  }
};
