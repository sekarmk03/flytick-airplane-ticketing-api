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
   await queryInterface.bulkInsert('Flights', [
    {
      code: "GA-123",
      capacity: 500,
      current_airport: 1,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-456",
      capacity: 300,
      current_airport: 2,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-789",
      capacity: 600,
      current_airport: 3,
      is_ready: true,
      is_maintain: false,
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
    await queryInterface.bulkDelete('Flights', null, {});
  }
};
