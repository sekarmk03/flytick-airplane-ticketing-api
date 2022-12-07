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
   await queryInterface.bulkInsert('Schedules', [
    {
      flight_id: 1,
      cost: 4000000,
      departure_time: "2022-12-05 15:00:00",
      arrival_time: "2022-12-05 19:00:00",
      from_airport: 1,
      to_airport: 4,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 2,
      cost: 6000000,
      departure_time: "2022-12-06 06:30:00",
      arrival_time: "2022-12-06 10:30:00",
      from_airport: 2,
      to_airport: 3,
      passenger: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 3,
      cost: 5500000,
      departure_time: "2022-12-10 20:00:00",
      arrival_time: "2022-12-11 01:15:00",
      from_airport: 1,
      to_airport: 4,
      passenger: 3,
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
    await queryInterface.bulkDelete('Schedules', null, {});
  }
};
