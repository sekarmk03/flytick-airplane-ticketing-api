'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_time: {
        type: Sequelize.DATE
      },
      invoice_number: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      // schedule_id: {
      //   type: Sequelize.INTEGER
      // },
      paid_time: {
        type: Sequelize.DATE
      },
      paid_status: {
        type: Sequelize.BOOLEAN
      },
      adult: {
        type: Sequelize.INTEGER
      },
      child: {
        type: Sequelize.INTEGER
      },
      round_trip: {
        type: Sequelize.BOOLEAN
      },
      total_cost: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Transactions');
  }
};