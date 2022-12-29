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
   await queryInterface.bulkInsert('Biodata', [
    {
      email: "sekarmadukusumawardani@gmail.com",
      name: "Sekar MK",
      nik: "3175064307020014",
      birth_place: "Jawa Tengah",
      birth_date: "2002-07-03",
      telp: "089691798633",
      nationality: 1,
      no_passport: null,
      issue_date: null,
      expire_date: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "azarnuzy@gmail.com",
      name: "Azar Nuzy",
      nik: "3500064307020000",
      birth_place: "Banten",
      birth_date: "2001-11-06",
      telp: "082246449106",
      nationality: 1,
      no_passport: null,
      issue_date: null,
      expire_date: null,
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
    await queryInterface.bulkDelete('Biodata', null, {});
  }
};
