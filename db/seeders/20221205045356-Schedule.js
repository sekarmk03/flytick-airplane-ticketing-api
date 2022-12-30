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
      cost: 4500000,
      departure_time: "2023-01-07 08:00:00",
      arrival_time: "2023-01-07 11:00:00",
      from_airport: 26,
      to_airport: 4,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 5,
      cost: 7000000,
      departure_time: "2023-01-07 09:30:00",
      arrival_time: "2023-01-07 12:30:00",
      from_airport: 26,
      to_airport: 4,
      passenger: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 8,
      cost: 13000000,
      departure_time: "2023-01-07 14:30:00",
      arrival_time: "2023-01-07 17:45:00",
      from_airport: 26,
      to_airport: 4,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 3,
      cost: 5000000,
      departure_time: "2023-01-07 15:00:00",
      arrival_time: "2023-01-07 19:00:00",
      from_airport: 26,
      to_airport: 4,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 4,
      cost: 4500000,
      departure_time: "2023-01-07 08:00:00",
      arrival_time: "2023-01-07 11:00:00",
      from_airport: 20,
      to_airport: 13,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 11,
      cost: 8500000,
      departure_time: "2023-01-07 08:00:00",
      arrival_time: "2023-01-07 11:00:00",
      from_airport: 20,
      to_airport: 13,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 6,
      cost: 6000000,
      departure_time: "2023-01-07 10:00:00",
      arrival_time: "2023-01-07 13:15:00",
      from_airport: 20,
      to_airport: 13,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 8,
      cost: 10000000,
      departure_time: "2023-01-07 13:00:00",
      arrival_time: "2023-01-07 15:45:00",
      from_airport: 20,
      to_airport: 13,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 4,
      cost: 5000000,
      departure_time: "2023-01-07 08:00:00",
      arrival_time: "2023-01-07 10:15:00",
      from_airport: 27,
      to_airport: 34,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 7,
      cost: 7000000,
      departure_time: "2023-01-07 08:00:00",
      arrival_time: "2023-01-07 10:15:00",
      from_airport: 27,
      to_airport: 34,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 9,
      cost: 13000000,
      departure_time: "2023-01-07 10:00:00",
      arrival_time: "2023-01-07 12:15:00",
      from_airport: 27,
      to_airport: 34,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 12,
      cost: 7500000,
      departure_time: "2023-01-07 12:00:00",
      arrival_time: "2023-01-07 14:25:00",
      from_airport: 27,
      to_airport: 34,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 5,
      cost: 5500000,
      departure_time: "2023-01-07 14:00:00",
      arrival_time: "2023-01-07 16:15:00",
      from_airport: 27,
      to_airport: 34,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 2,
      cost: 3000000,
      departure_time: "2023-01-07 08:00:00",
      arrival_time: "2023-01-07 12:15:00",
      from_airport: 26,
      to_airport: 46,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 1,
      cost: 2500000,
      departure_time: "2023-01-07 10:00:00",
      arrival_time: "2023-01-07 13:00:00",
      from_airport: 26,
      to_airport: 46,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 5,
      cost: 5500000,
      departure_time: "2023-01-07 13:00:00",
      arrival_time: "2023-01-07 16:00:00",
      from_airport: 26,
      to_airport: 46,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 1,
      cost: 4500000,
      departure_time: "2023-01-14 08:00:00",
      arrival_time: "2023-01-14 11:00:00",
      from_airport: 4,
      to_airport: 26,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 5,
      cost: 7000000,
      departure_time: "2023-01-14 09:30:00",
      arrival_time: "2023-01-14 12:30:00",
      from_airport: 4,
      to_airport: 26,
      passenger: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 8,
      cost: 13000000,
      departure_time: "2023-01-14 14:30:00",
      arrival_time: "2023-01-14 17:45:00",
      from_airport: 4,
      to_airport: 26,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 3,
      cost: 5000000,
      departure_time: "2023-01-14 15:00:00",
      arrival_time: "2023-01-14 19:00:00",
      from_airport: 4,
      to_airport: 26,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 4,
      cost: 4500000,
      departure_time: "2023-01-14 08:00:00",
      arrival_time: "2023-01-14 11:00:00",
      from_airport: 13,
      to_airport: 20,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 11,
      cost: 8500000,
      departure_time: "2023-01-14 08:00:00",
      arrival_time: "2023-01-14 11:00:00",
      from_airport: 13,
      to_airport: 20,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 6,
      cost: 6000000,
      departure_time: "2023-01-14 10:00:00",
      arrival_time: "2023-01-14 13:15:00",
      from_airport: 13,
      to_airport: 20,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 8,
      cost: 10000000,
      departure_time: "2023-01-14 13:00:00",
      arrival_time: "2023-01-14 15:45:00",
      from_airport: 13,
      to_airport: 20,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 4,
      cost: 5000000,
      departure_time: "2023-01-14 08:00:00",
      arrival_time: "2023-01-14 10:15:00",
      from_airport: 34,
      to_airport: 27,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 7,
      cost: 7000000,
      departure_time: "2023-01-14 08:00:00",
      arrival_time: "2023-01-14 10:15:00",
      from_airport: 34,
      to_airport: 27,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 9,
      cost: 13000000,
      departure_time: "2023-01-14 10:00:00",
      arrival_time: "2023-01-14 12:15:00",
      from_airport: 34,
      to_airport: 27,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 12,
      cost: 7500000,
      departure_time: "2023-01-14 12:00:00",
      arrival_time: "2023-01-14 14:25:00",
      from_airport: 34,
      to_airport: 27,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 5,
      cost: 5500000,
      departure_time: "2023-01-14 14:00:00",
      arrival_time: "2023-01-14 16:15:00",
      from_airport: 34,
      to_airport: 27,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 2,
      cost: 3000000,
      departure_time: "2023-01-14 08:00:00",
      arrival_time: "2023-01-14 12:15:00",
      from_airport: 46,
      to_airport: 26,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 1,
      cost: 2500000,
      departure_time: "2023-01-14 10:00:00",
      arrival_time: "2023-01-14 13:00:00",
      from_airport: 46,
      to_airport: 26,
      passenger: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      flight_id: 5,
      cost: 5500000,
      departure_time: "2023-01-14 13:00:00",
      arrival_time: "2023-01-14 16:00:00",
      from_airport: 46,
      to_airport: 26,
      passenger: 3,
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
    await queryInterface.bulkDelete('Schedules', null, {});
  }
};
