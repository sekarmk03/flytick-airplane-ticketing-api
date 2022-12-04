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
   await queryInterface.bulkInsert('Notifications', [
    {
      user_id: 1,
      topic: 'payment',
      message: 'Payment of IDR 5,000,000 for transaction A-123-T123 has been successful.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'account',
      message: 'Your profile has been successfully updated',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'promotion',
      message: 'Buy tickets before December 30 and get a 20% discount.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'promotion',
      message: 'Buy tickets before December 30 and get a 20% discount.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'account',
      message: 'You have changed your password. Please report if you do not recognize this activity.',
      is_read: false,
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
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};
