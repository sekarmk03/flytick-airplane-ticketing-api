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
      title: 'Payment successful!',
      message: 'Thank you. Payment of IDR 5,000,000 for transaction A-123-T123 via BNI has been successful.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'account',
      title: 'Profile has been updated!',
      message: 'Your profile has been successfully updated. Keep your biodata always up-to-date.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'promotion',
      title: "Don't miss the discount!",
      message: 'Buy tickets before December 30 and get a 20% discount. Check our other promos and discount here.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'promotion',
      title: "Don't miss the discount!",
      message: 'Buy tickets before December 30 and get a 20% discount. Check our other promos and discount here.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'account',
      title: 'Password has been changed!',
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
