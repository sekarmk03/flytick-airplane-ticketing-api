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
      fClass: "Economy",
      current_airport: 17,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-345",
      capacity: 600,
      fClass: "Economy",
      current_airport: 30,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-890",
      capacity: 500,
      fClass: "Economy",
      current_airport: 34,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-456",
      capacity: 600,
      fClass: "Economy",
      current_airport: 27,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-935",
      capacity: 300,
      fClass: "Business",
      current_airport: 20,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-567",
      capacity: 530,
      fClass: "Business",
      current_airport: 30,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-678",
      capacity: 470,
      fClass: "Business",
      current_airport: 34,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-789",
      capacity: 250,
      fClass: "First",
      current_airport: 25,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-234",
      capacity: 300,
      fClass: "First",
      current_airport: 27,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-012",
      capacity: 400,
      fClass: "Executive",
      current_airport: 25,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-901",
      capacity: 450,
      fClass: "Executive",
      current_airport: 34,
      is_ready: true,
      is_maintain: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "GA-913",
      capacity: 550,
      fClass: "Executive",
      current_airport: 34,
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
