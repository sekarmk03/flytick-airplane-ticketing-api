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
      topic: 'account',
      title: 'Account Created!',
      message: 'Welcome to FlyTick App! Here you can book ticket for your travel plan easily. Fly The Best Part Of The Day',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'payment',
      title: 'Payment Successful!',
      message: 'Thank you. Payment of IDR 5,000,000 for transaction A-123-T123 via BNI has been successful.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'account',
      title: 'Profile has been Updated!',
      message: 'Your profile has been successfully updated. Keep your biodata always up-to-date.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      topic: 'promotion',
      title: "Don't Miss the Discount!",
      message: 'Buy tickets before December 30 and get a 20% discount. Check our other promos and discount here.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'account',
      title: 'Account Created!',
      message: 'Welcome to FlyTick App! Here you can book ticket for your travel plan easily. Fly The Best Part Of The Day',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'payment',
      title: 'Payment Successful!',
      message: 'Thank you. Payment of IDR 5,000,000 for transaction A-123-T123 via BNI has been successful.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'account',
      title: 'Profile has been Updated!',
      message: 'Your profile has been successfully updated. Keep your biodata always up-to-date.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      topic: 'promotion',
      title: "Don't Miss the Discount!",
      message: 'Buy tickets before December 30 and get a 20% discount. Check our other promos and discount here.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      topic: 'account',
      title: 'Account Created!',
      message: 'Welcome to FlyTick App! Here you can book ticket for your travel plan easily. Fly The Best Part Of The Day',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      topic: 'payment',
      title: 'Payment Successful!',
      message: 'Thank you. Payment of IDR 5,000,000 for transaction A-123-T123 via BNI has been successful.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      topic: 'account',
      title: 'Profile has been Updated!',
      message: 'Your profile has been successfully updated. Keep your biodata always up-to-date.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      topic: 'promotion',
      title: "Don't Miss the Discount!",
      message: 'Buy tickets before December 30 and get a 20% discount. Check our other promos and discount here.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      topic: 'account',
      title: 'Account Created!',
      message: 'Welcome to FlyTick App! Here you can book ticket for your travel plan easily. Fly The Best Part Of The Day',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      topic: 'payment',
      title: 'Payment Successful!',
      message: 'Thank you. Payment of IDR 5,000,000 for transaction A-123-T123 via BNI has been successful.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      topic: 'account',
      title: 'Profile has been Updated!',
      message: 'Your profile has been successfully updated. Keep your biodata always up-to-date.',
      is_read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      topic: 'promotion',
      title: "Don't Miss the Discount!",
      message: 'Buy tickets before December 30 and get a 20% discount. Check our other promos and discount here.',
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
