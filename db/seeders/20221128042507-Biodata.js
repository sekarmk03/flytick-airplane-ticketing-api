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

    // Charles Start
    {
      email: "charlesgunawan32@gmail.com",
      name: "Charles Gunawan",
      nik: "3292929292929292",
      birth_place: "Jakarta",
      birth_date: "2001-12-14",
      telp: "082371511912",
      nationality: 1,
      no_passport: null,
      issue_date: null,
      expire_date: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "udin@gmail.com",
      name: "Udin Herman",
      nik: "3292911111922111",
      birth_place: "Surabaya",
      birth_date: "2000-01-14",
      telp: "083371511112",
      nationality: 1,
      no_passport: null,
      issue_date: null,
      expire_date: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "yuyun@gmail.com",
      name: "Yuyun Eulis",
      nik: "3292921191029225",
      birth_place: "Bogor",
      birth_date: "2001-10-24",
      telp: "081222321212",
      nationality: 1,
      no_passport: null,
      issue_date: null,
      expire_date: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "untung@gmail.com",
      name: "Untung Budiman",
      nik: "3152211132012231",
      birth_place: "Papua",
      birth_date: "2001-02-10",
      telp: "0830212212212",
      nationality: 1,
      no_passport: null,
      issue_date: null,
      expire_date: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    // Charles End
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
