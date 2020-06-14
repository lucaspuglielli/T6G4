'use strict';
const bcrypt = require('bcrypt');
const defaultPassword = bcrypt.hashSync('123456', 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('administrators',
      [
        {
        fullName: 'Jane Doe',
        email: 'jane@email.com',
        cpf: '12345678901',
        birthdate: '1980-02-29',
        phone: '1112345678',
        password: defaultPassword,
        createdAt: '2020-06-13 04:11:51',
        updatedAt: '2020-06-13 04:11:51',
        },
        {
          fullName: 'John Doe',
          email: 'john@email.com',
          cpf: '12345678901',
          birthdate: '1980-02-29',
          phone: '1112345678',
          password: defaultPassword,
          createdAt: '2020-06-13 04:11:51',
          updatedAt: '2020-06-13 04:11:51',
          },
          {
            fullName: 'Mary Doe',
            email: 'mary@email.com',
            cpf: '12345678901',
            birthdate: '1980-02-29',
            phone: '1112345678',
            password: defaultPassword,
            createdAt: '2020-06-13 04:11:51',
            updatedAt: '2020-06-13 04:11:51',
            },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('administrators', null, {});
    
  }
};
