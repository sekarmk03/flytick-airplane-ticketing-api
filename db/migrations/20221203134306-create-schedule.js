'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_id: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.INTEGER
      },
      departure_time: {
        type: Sequelize.DATE
      },
      arrival_time: {
        type: Sequelize.DATE
      },
      from_airport: {
        type: Sequelize.INTEGER
      },
      to_airport: {
        type: Sequelize.INTEGER
      },
      passenger: {
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
    await queryInterface.dropTable('Schedules');
  }
};