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
   await queryInterface.bulkInsert('Airports', [
    {
      code: 'BHM',
      name: 'Birmingham–Shuttlesworth International Airport',
      city_id: 1,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/enso8v4NYs7MzdTa7',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.6516189454164!2d-86.75861067297137!3d33.562426819145294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891aa4f6775025%3A0x9326a00858ed2b68!2sBirmingham-Shuttlesworth%20International%20Airport!5e0!3m2!1sid!2sid!4v1669596017169!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'HSV',
      name: 'Huntsville International Airport',
      city_id: 1,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/Ui8hn5HgmUjoTeiM8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.56890440634!2d-86.77787858479397!3d34.640332880449996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8862652eac68a93d%3A0xfa4cc7b641958656!2sHuntsville%20International%20Airport!5e0!3m2!1sid!2sid!4v1669596225081!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city_id: 2,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/vVop94woBaXYZJMd6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.982085012522!2d-118.41071868481264!3d33.94158888063613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b0d213b24fb5%3A0x77a87b57698badf1!2sBandar%20Udara%20Internasional%20Los%20Angeles!5e0!3m2!1sid!2sid!4v1669596412743!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'ITO',
      name: 'Hilo International Airport',
      city_id: 3,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/w61RmYmo9ceTHdLd9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.8541151584923!2d-155.0438752851169!3d19.71883418672234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79524c78af8cfe03%3A0x2e9bfe4565716c7f!2sBandar%20Udara%20Internasional%20Hilo!5e0!3m2!1sid!2sid!4v1669596579467!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'BFI',
      name: 'King County International Airport',
      city_id: 4,
      country_id: 1,
      maps_link: 'https://g.page/KingCountyAirport?share',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.5869386664735!2d-122.3060441843921!3d47.53690427918012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041f5a1beffb7%3A0x4055c551b7eebeea!2sKing%20County%20International%20Airport!5e0!3m2!1sid!2sid!4v1669596707703!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'BLI',
      name: 'Bellingham International Airport',
      city_id: 4,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/agz8HKYtPwEWnPHH6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.282895429155!2d-122.53525288434754!3d48.7955791792815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485bcccbb6a8459%3A0x37f8f85c209855aa!2sBellingham%20International%20Airport!5e0!3m2!1sid!2sid!4v1669596799249!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city_id: 5,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/FnDzrFXx1A1LxcuC6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.4816830045916!2d-73.78032698461989!3d40.6413112793397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26650d5404947%3A0xec4fb213489f11f0!2sBandar%20Udara%20Internasional%20John%20F.%20Kennedy!5e0!3m2!1sid!2sid!4v1669596991669!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'SWF',
      name: 'New York Stewart International Airport',
      city_id: 5,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/f9GS3ekJ1gPzfKps8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.27093504217!2d-74.10305138459319!3d41.49840317925418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd2c1483ed0f17%3A0x5cd554a560b695dd!2sBandar%20Udara%20Internasional%20Stewart!5e0!3m2!1sid!2sid!4v1669597112897!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'ALB',
      name: 'Albany International Airport',
      city_id: 5,
      country_id: 1,
      maps_link: 'https://goo.gl/maps/qQLr6K17K1qv5qnV6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.9111186546684!2d-73.80474938455333!3d42.747932679162716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0cee2f49259f%3A0xf064a3c7c66b5d9b!2sAlbany%20International%20Airport!5e0!3m2!1sid!2sid!4v1669597206197!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'KIX',
      name: 'Kansai International Airport',
      city_id: 6,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/zta65cZ5WZUiF5Qd8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.7934089846162!2d135.2282052152005!3d34.43200238050431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b91323cdfaf7%3A0xf171a79f8d908f88!2sBandar%20Udara%20Internasional%20Kansai!5e0!3m2!1sid!2sid!4v1669598922089!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'ITM',
      name: 'Osaka International Airport',
      city_id: 6,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/mXm2zXmeMtwCsCsi7',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.78004089911!2d135.43558081521005!3d34.78631228041263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f06df58777b9%3A0x7411a874d9df4cd!2sBandar%20Udara%20Internasional%20Osaka!5e0!3m2!1sid!2sid!4v1669599323330!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'NRT',
      name: 'Narita International Airport',
      city_id: 7,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/86wrbYRX1rkF1E7y9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.137986126651!2d140.390661415237!3d35.77198668017327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022f379d1bd3757%3A0xd56e29a162771aa1!2sBandar%20Udara%20Internasional%20Narita!5e0!3m2!1sid!2sid!4v1669599049898!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'HND',
      name: 'Tokyo International Airport',
      city_id: 8,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/9VrtKuMNq7iN5fJv5',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.1744655211373!2d139.77764991523094!3d35.54939318022529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018640ba43192e3%3A0xd32c3a9d146f8df!2sBandar%20Udara%20Internasional%20Tokyo!5e0!3m2!1sid!2sid!4v1669599200468!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'NGO',
      name: 'Chubu Centrair International Airport',
      city_id: 9,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/pvpewzrrscuAGeBp8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.9074369607056!2d136.80929641521197!3d34.85855308039429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60047d93edcc29cf%3A0x42987d286e2c0025!2sBandar%20Udara%20Internasional%20Centrair%20Chubu!5e0!3m2!1sid!2sid!4v1669599138786!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'CTS',
      name: 'New Chitose Airport',
      city_id: 10,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/q42eHNXc6kYiXvv28',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.291628289336!2d141.68685871544778!3d42.782184379160746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7520459d5c1add%3A0x1aba607ce5f681f6!2sBandar%20Udara%20Chitose%20Baru!5e0!3m2!1sid!2sid!4v1669599641901!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'FUK',
      name: 'Fukuoka Airport',
      city_id: 11,
      country_id: 2,
      maps_link: 'https://goo.gl/maps/VTsmJnhJ8LnZv6LTA',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.577616161475!2d130.44452041517806!3d33.59031448073422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419016426901ad%3A0x16e67f46584e1fb7!2sFukuoka%20Airport!5e0!3m2!1sid!2sid!4v1669599783864!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'AMI',
      name: 'Selaparang Airport',
      city_id: 12,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/a54RpYfd5mCpoxq99',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31690.47855095337!2d107.58482!3d-6.8534177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0ee200e4da1%3A0x79ea7d33c9a79fbd!2sBandar%20Udara%20Selaparang!5e0!3m2!1sid!2sid!4v1669762919810!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'AMQ',
      name: 'Pattimura International Airport',
      city_id: 13,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/eBrgwhyEhWmniF9i7',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.479103956615!2d128.08639261406967!3d-3.7050951440902633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce8402b1df727%3A0xc7acbd0f15fe4b38!2sBandar%20Udara%20Internasional%20Pattimura%20Ambon!5e0!3m2!1sid!2sid!4v1669763052737!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'BDJ',
      name: 'Syamsudin Noor International Airport',
      city_id: 14,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/gcgnuaabgvsCyQbd9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6460120795846!2d114.75659291420429!3d-3.4360195358652823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6837accc01197%3A0x8495c1e820eda6c6!2sBandara%20Internasional%20Syamsudin%20Noor!5e0!3m2!1sid!2sid!4v1669763132171!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'BDO',
      name: 'Husein Sastranegara International Airport',
      city_id: 15,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/AtJmBiDzo8F1TSg38',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.888097738113!2d107.57777461409846!3d-6.903983269482664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76ea2197b7b%3A0x83520de1be07f869!2sBandar%20Udara%20Internasional%20Husein%20Sastranegara!5e0!3m2!1sid!2sid!4v1669763305640!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'BTJ',
      name: 'Sultan Iskandarmuda International Airport',
      city_id: 16,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/DJ9b6usoza8fYHNt8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3304822315718!2d95.41516371404532!3d5.5178765355678605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040477a2b6219cb%3A0x9c36bfdf6cbbbd!2sBandar%20Udara%20Internasional%20Sultan%20Iskandar%20Muda!5e0!3m2!1sid!2sid!4v1669763447627!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'CXP',
      name: 'Tunggul Wulung Airport',
      city_id: 17,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/6WE8gvigbnpzKpJv8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.3755339280733!2d109.03249451410666!3d-7.6427036777173365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656c4a3ee5aa11%3A0x428975d17090c9e8!2sBandar%20Udara%20Tunggul%20Wulung!5e0!3m2!1sid!2sid!4v1669763581669!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'DJB',
      name: 'Sultan Thaha Syarifudin Airport',
      city_id: 18,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/YfYhuuXoLxJxjhxU9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.19832435587!2d103.64088121405649!3d-1.6327990365611265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2585fad6e79e9b%3A0xf039d8194a03080!2sBandara%20Sultan%20Thaha%20Saifuddin!5e0!3m2!1sid!2sid!4v1669763659608!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'DJJ',
      name: 'Sentani Airport',
      city_id: 19,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/A46o5ZhVUGBWXLr38',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.4509196671069!2d140.51242043005993!3d-2.5705194097202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cee1d4cec27d7%3A0x91dadd593724a41b!2sTerminal%20Keberangkatan%20Bandara%20Sentani!5e0!3m2!1sid!2sid!4v1669763829091!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'HLP',
      name: 'Halim Perdana Kusuma International Airport',
      city_id: 20,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/xwE9N52J2DmvmNJ86',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9892363438707!2d106.88180872059891!3d-6.265145080960695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15ca78f42c63%3A0xdc8077d4d6be4249!2sBandar%20Udara%20Halim%20Perdanakusuma!5e0!3m2!1sid!2sid!4v1669763943369!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'CGK',
      name: 'Soekarno-Hatta International Airport',
      city_id: 20,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/mbhgzQRhzJBxjL7P9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.026628000504!2d106.65127081442905!3d-6.127118995563582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02695aaccb09%3A0x61dee98159fa3fe5!2sBandar%20Udara%20Internasional%20Soekarno%E2%80%93Hatta!5e0!3m2!1sid!2sid!4v1669764057015!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'JOG',
      name: 'Adisutjipto Airport',
      city_id: 21,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/2hxDMFtL74JiQcQf6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.02018917054!2d110.42957261443979!3d-7.787683794387733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a50a9f995d21b%3A0xf027a77c64c3df0!2sBandar%20Udara%20Internasional%20Adisutjipto!5e0!3m2!1sid!2sid!4v1669764180501!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'MDC',
      name: 'Sam Ratulangi International Airport',
      city_id: 22,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/SwgqXRKztZ9V3XTX6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3583583466516!2d124.9210087204525!3d1.5500477952540834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287a11a115f8761%3A0x89e46facc8e4f969!2sBandar%20Udara%20Internasional%20Sam%20Ratulangi!5e0!3m2!1sid!2sid!4v1669764398460!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'PKU',
      name: 'Sultan Syarif Kasim II Airport',
      city_id: 23,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/h1sYbV27wxtqNm9i8',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.686964582985!2d101.44611001441189!3d0.46492919966079893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5afd168f25799%3A0xeb2fdddc9da30d93!2sBandar%20Udara%20Internasional%20Sultan%20Syarif%20Kasim%20II!5e0!3m2!1sid!2sid!4v1669764604403!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'PLM',
      name: 'Sultan Mahmud Badaruddin II Airport',
      city_id: 24,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/ZDLoSW1hNcmRfz7A9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7270945123046!2d104.70245841441569!3d-2.8947991978915217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b73125daa86b3%3A0x4894464d532ac87b!2sBandar%20Udara%20Internasional%20Sultan%20Mahmud%20Badaruddin%20II!5e0!3m2!1sid!2sid!4v1669764696610!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'SRG',
      name: 'Jend. Ahmad Yani International Airport',
      city_id: 25,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/9NXCGxSAwdSRAvbt6',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3637438368446!2d110.37280041443414!3d-6.9663453949672025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c9f55796881%3A0x30d916983ba7e760!2sBandar%20Udara%20Internasional%20Jenderal%20Ahmad%20Yani!5e0!3m2!1sid!2sid!4v1669764794184!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'SUB',
      name: 'Juanda International Airport',
      city_id: 26,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/EPwwQe4Y7sLzXv817',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.776876880806!2d112.78510041443694!3d-7.378885094675592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e50b3bf959b9%3A0xc0ff7c58786318e8!2sBandar%20Udara%20Internasional%20Juanda!5e0!3m2!1sid!2sid!4v1669764905790!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'UPG',
      name: 'Sultan Hasanuddin International Airport',
      city_id: 27,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/YX14xcku4EGGLcpb9',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1603413051903!2d119.54729571442375!3d-5.077746996314593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefbcebbcac701%3A0xf030bfcad763610!2sBandar%20Udara%20Internasional%20Sultan%20Hasanuddin!5e0!3m2!1sid!2sid!4v1669764984411!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'DPS',
      name: 'Ngurah Rai International Airport',
      city_id: 28,
      country_id: 3,
      maps_link: 'https://goo.gl/maps/6cBBgrtLoAsXhoa49',
      maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.41763048106!2d115.16459831444715!3d-8.746717193716973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2441650216933%3A0xdf71da6ddd7bcc1f!2sBandar%20Udara%20Internasional%20Ngurah%20Rai!5e0!3m2!1sid!2sid!4v1669765175593!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
