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
   await queryInterface.bulkInsert('Cities', [
    {
      name: 'Alabama', //1
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'California', //2
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hawaii',//3
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Washington', //4
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New York', //5
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Osaka', //6
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chiba', //7
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tokyo', //8
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Aichi', //9
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hokkaido', //10
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fukuoka', //11
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mataram', //12
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ambon', //13
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Banjarmasin', //14
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bandung', //15
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Banda Aceh', //16
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cilacap', //17
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jambi', //18
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jayapura', //19
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jakarta', //20
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Yogyakarta', //21
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Manado', //22
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pekanbaru', //23
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Palembang', //24
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Semarang', //25
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Surabaya', //26
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Makassar', //27
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Denpasar', //28
      country_id: 3,
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
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
