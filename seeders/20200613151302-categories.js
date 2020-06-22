'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', 
      [
        {
        name: 'Unhas',
        description: 'Embelezamento de unhas das mãos e pés.',
        icon: 'unhas.png',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
      },
      {
        name: 'Cabelo',
        description: 'Tratamentos capilares',
        icon: 'cabelo-1.svg',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
      },
      {
        name: 'Depilação',
        description: 'Eliminação de pêlos corporais',
        icon: 'depilacao-1.svg',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
      },
      {
        name: 'Design de sobrancelhas',
        description: 'Embelezamento das sobrancelhas',
        icon: 'sobrancelha.svg',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
      },
      {
        name: 'Estética',
        description: 'Tratamentos estéticos faciais e corporais',
        icon: 'estética.svg',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
      },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});

  }
};
