'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('employees', 
      [
        {
        name: 'Jane',
        lastname: 'Doe',
        email: 'jane@email.com',
        skills: 'Manicure',
        phone: '1112345678',
        photo: 'janesphoto.jpg',
        shiftstart: '8:00',
        shiftend: '10:00',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
       },
       {
        name: 'John',
        lastname: 'Doe',
        email: 'john@email.com',
        skills: 'Cabelereiro',
        phone: '1112345678',
        photo: 'johnsphoto.jpg',
        shiftstart: '8:00',
        shiftend: '18:00',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
       },
       {
        name: 'Mary',
        lastname: 'Doe',
        email: 'mary@email.com',
        skills: 'Depiladora',
        phone: '1112345678',
        photo: 'marysphoto.jpg',
        shiftstart: '8:00',
        shiftend: '18:00',
        updatedAt: '2020-06-13 04:11:51',
        createdAt: '2020-06-13 04:11:51',
       },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('employees', null, {});

  }
};
