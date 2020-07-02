'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('employees', 
      [
        {
          name: 'Ana',
          lastname: 'Américo',
          email: 'anaamerico@email.com',
          skills: 'Manicure',
          phone: '1112345678',
          photo: 'anaamerico.jpg',
          shiftstart: '8:00',
          shiftend: '18:00',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Marta',
          lastname: 'Silva',
          email: 'martasilva@email.com',
          skills: 'Cabelereira',
          phone: '1112345678',
          photo: 'martasilva.jpg',
          shiftstart: '8:00',
          shiftend: '18:00',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Suellen',
          lastname: 'Rodrigues',
          email: 'suellenr@email.com',
          skills: 'Manicure',
          phone: '1112345678',
          photo: 'suellenrodrigues.jpg',
          shiftstart: '10:00',
          shiftend: '17:00',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
        {
          name: 'Janaina',
          lastname: 'Souza',
          email: 'janainasouza@email.com',
          skills: 'Depiladora',
          phone: '1112345678',
          photo: 'janainasouza.jpg',
          shiftstart: '13:00',
          shiftend: '17:00',
          updatedAt: '2020-06-13 04:11:51',
          createdAt: '2020-06-13 04:11:51',
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('employees', null, {});

  }
};
