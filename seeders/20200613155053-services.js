'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('services', 
      [
        {
          name: 'Manicure',
          price: 23.00,
          description: 'Embelezamento das unhas das mãos.',
          duration: '45',
          id_category: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Pedicure',
          price: 27.00,
          description: 'Embelezamento das unhas dos pés.',
          duration: '45',
          id_category: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Manicure e pedicure',
          price: 27.00,
          description: 'Embelezamento das unhas das mãos e dos pés.',
          duration: '90',
          id_category: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Alongamento de unhas',
          price: 70.00,
          description: 'Alongamento das unhas das mãos.',
          duration: '120',
          id_category: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Esmaltação',
          price: 15.00,
          description: 'Esmaltação da unhas das mãos ou pés.',
          duration: '30',
          id_category: '1',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Corte',
          price: 55.00,
          description: 'Corte de cabelo.',
          duration: '60',
          id_category: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Hidratação',
          price: 50.00,
          description: 'Hidratação profunda dos fios.',
          duration: '60',
          id_category: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Escova',
          price: 40.00,
          description: 'Lavagem e escova modeladora dos cabelos.',
          duration: '45',
          id_category: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Tintura',
          price: 70.00,
          description: 'Pigmentação dos cabelos.',
          duration: '90',
          id_category: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Lavagem',
          price: 20.00,
          description: 'Lavagem dos cabelos.',
          duration: '30',
          id_category: '2',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Drenagem',
          price: 60.00,
          description: 'Massagem para drenagem do sistema linfático.',
          duration: '60',
          id_category: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Massagem relaxante',
          price: 60.00,
          description: 'Massagem relaxante.',
          duration: '60',
          id_category: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Limpeza de pele',
          price: 70.00,
          description: 'Eliminação de impurezas e limpeza profunda da pele.',
          duration: '60',
          id_category: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Procedimento estético',
          price: 70.00,
          description: 'Protocolos estéticos com uso de aparelhos.',
          duration: '60',
          id_category: '3',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Buço',
          price: 15.00,
          description: 'Eliminação de pelos do buço.',
          duration: '30',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Queixo',
          price: 15.00,
          description: 'Eliminação de pelos do queixo.',
          duration: '30',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Axila',
          price: 20.00,
          description: 'Eliminação de pelos da axila.',
          duration: '30',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Meia perna',
          price: 25.00,
          description: 'Eliminação de pelos das pernas.',
          duration: '30',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Perna',
          price: 35.00,
          description: 'Eliminação de pelos das pernas.',
          duration: '45',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Virilha',
          price: 50.00,
          description: 'Eliminação de pelos na região da virilha.',
          duration: '45',
          id_category: '4',
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Design simples',
          price: 30.00,
          description: 'Embelezamento e pigmentação das sobrancelhas',
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
