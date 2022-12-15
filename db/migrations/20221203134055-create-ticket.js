'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticket_number: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      seat_number: {
        type: Sequelize.STRING
      },
      schedule_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      biodata_id: {
        type: Sequelize.INTEGER
      },
      transaction_id: {
        type: Sequelize.INTEGER
      },
      flight_id: {
        type: Sequelize.INTEGER
      },
      checked_in: {
        type: Sequelize.BOOLEAN
      },
      qr_code: {
        type: Sequelize.TEXT
      },
      ticket_pdf: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};