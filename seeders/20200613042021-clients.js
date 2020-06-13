'use strict';

const bcrypt = require('bcrypt');
const defaultPassword = bcrypt.hashSync('123456', 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('clients', 
      [
        {
        name: 'Jane',
        lastname: 'Doe',
        email: 'jane@email.com',
        password: defaultPassword,
        cpf: '12345678901',
        phone: '11111111111',
        birthdate: '2020-06-13',
        createdAt: '2020-06-13 04:11:51',
        updatedAt: '2020-06-13 04:11:51',
      },
      {
        name: 'John',
        lastname: 'Doe',
        email: 'john@email.com',
        password: defaultPassword,
        cpf: '12345678901',
        phone: '11111111111',
        birthdate: '2020-06-13',
        createdAt: '2020-06-13 04:11:51',
        updatedAt: '2020-06-13 04:11:51',
      },
      {
        name: 'Mary',
        lastname: 'Doe',
        email: 'mary@email.com',
        password: defaultPassword,
        cpf: '12345678901',
        phone: '11111111111',
        birthdate: '2020-06-12',
        createdAt: '2020-06-13 04:11:51',
        updatedAt: '2020-06-13 04:11:51',
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('clients', null, {});
  }
};
