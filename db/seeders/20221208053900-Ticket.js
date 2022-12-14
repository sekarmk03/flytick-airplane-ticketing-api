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
      ticket_number: "1/A/GA-123/DUMMY-001-01",
      type: "Adult",
      seat_number: "E/001",
      schedule_id: 1,
      user_id: 1,
      biodata_id: 1,
      transaction_id: 1,
      flight_id: 1,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "2/A/GA-123/DUMMY-001-01",
      type: "Adult",
      seat_number: "E/002",
      schedule_id: 1,
      user_id: 1,
      biodata_id: 2,
      transaction_id: 1,
      flight_id: 1,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "3/C/GA-123/DUMMY-001-01",
      type: "Children",
      seat_number: "E/003",
      schedule_id: 1,
      user_id: 1,
      biodata_id: 3,
      transaction_id: 1,
      flight_id: 1,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "4/A/GA-789/DUMMY-001-02",
      type: "Adult",
      seat_number: "E/001",
      schedule_id: 3,
      user_id: 1,
      biodata_id: 1,
      transaction_id: 2,
      flight_id: 3,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "5/A/GA-789/DUMMY-001-02",
      type: "Adult",
      seat_number: "E/002",
      schedule_id: 3,
      user_id: 1,
      biodata_id: 2,
      transaction_id: 2,
      flight_id: 3,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "6/C/GA-789/DUMMY-001-02",
      type: "Children",
      seat_number: "E/003",
      schedule_id: 3,
      user_id: 1,
      biodata_id: 3,
      transaction_id: 2,
      flight_id: 3,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "7/A/GA-456/DUMMY-002-01",
      type: "Adult",
      seat_number: "B/001",
      schedule_id: 2,
      user_id: 2,
      biodata_id: 2,
      transaction_id: 3,
      flight_id: 2,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ticket_number: "8/A/GA-456/DUMMY-002-01",
      type: "Adult",
      seat_number: "B/002",
      schedule_id: 2,
      user_id: 2,
      biodata_id: 3,
      transaction_id: 3,
      flight_id: 2,
      checked_in: false,
      qr_code: "http://localhost:3000/api/images/default-qr.jpg",
      ticket_pdf: "http://localhost:3000/api/documents/default-ticket.pdf",
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
