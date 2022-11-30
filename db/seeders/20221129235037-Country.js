'use strict';

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
   await queryInterface.bulkInsert('Countries', [
    {
      code: 'US', //id 1
      name: 'United States',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'JP', //id 2
      name: 'Japan',
      createdAt: new Date(),
      updatedAt: new Date()  
    },
    {
      code: 'ID', //id 3
      name: 'Indonesia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'FR', //id 4
      name: 'France',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'CN', //id 5
      name: 'China',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
