'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Biodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      telp: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.INTEGER
      },
      no_passport: {
        type: Sequelize.STRING
      },
      issue_date: {
        type: Sequelize.DATE
      },
      expire_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Biodata');
  }
};