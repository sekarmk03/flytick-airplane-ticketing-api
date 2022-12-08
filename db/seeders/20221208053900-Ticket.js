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
   await queryInterface.bulkInsert('Tickets', [
    {
      type: "Adult",
      schedule_id: 1,
      user_id: 1,
      biodata_id: 1,
      transaction_id: 1,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Adult",
      schedule_id: 1,
      user_id: 1,
      biodata_id: 2,
      transaction_id: 1,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Children",
      schedule_id: 1,
      user_id: 1,
      biodata_id: 3,
      transaction_id: 1,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Adult",
      schedule_id: 3,
      user_id: 1,
      biodata_id: 1,
      transaction_id: 2,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Adult",
      schedule_id: 3,
      user_id: 1,
      biodata_id: 2,
      transaction_id: 2,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Children",
      schedule_id: 3,
      user_id: 1,
      biodata_id: 3,
      transaction_id: 2,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Adult",
      schedule_id: 2,
      user_id: 2,
      biodata_id: 2,
      transaction_id: 3,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "Adult",
      schedule_id: 2,
      user_id: 2,
      biodata_id: 3,
      transaction_id: 3,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
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
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
