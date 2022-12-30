'use strict';
const roles = require('../../utils/roles');
const loginType = require('../../utils/login_type');
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
        name: 'Sekar MK',
        email: 'sekarmadukusumawardani@gmail.com',
        password: await bcrypt.hash('secret123', 10),
        avatar_id: 1,
        role: roles.admin,
        balance: 10000000,
        biodata_id: 1,
        login_type: loginType.basic,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Azar Nuzy',
        email: 'azarnuzy@gmail.com',
        password: await bcrypt.hash('secret456', 10),
        avatar_id: 1,
        role: roles.user,
        balance: 10000000,
        biodata_id: 2,
        login_type: loginType.basic,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Charles Gunawan',
        email: 'charlesgunawan32@gmail.com',
        password: await bcrypt.hash('charlesggwp', 10),
        avatar_id: 1,
        role: roles.user,
        balance: 100000000000,
        biodata_id: 3,
        login_type: loginType.basic,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
