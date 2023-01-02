'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tickets', [
      {
        ticket_number: "1/A/GA-123/DUMMY-001-01",
        type: "Adult",
        seat_number: "E/001",
        schedule_id: 1,
        user_id: 1,
        biodata_id: 1,
        transaction_id: 1,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/gY1f-uPr172-rK6ChodmoeV446hePl3-1tmoFNDQ0BzVXiwmK0-jmp8zgYzQ0NJ_nqdax8o3R0NB8qKbPLcH2hoaG5lM0gXX8ziDfLCcsGhqaM5qVPLLnp5tPbmloaCbajGEXJHhAcPPpLi4NDU2QLqqmZhxKwl1RYKWhodmkSQNN0AAZd0rTW5ZOOWhoaCY1-UBDuqzq66j2PTQ0NJs0QZmq3j6emlrpudDQ0NzXKQwmF4MU0h96BL1VGhqa7Zpqw9Gfi4wfkD6ehobmoKbasQRzTOMnB5UxDTk0NDSbNP3aen-QQdnZ8aChoVmpacEAdNr2qCJQP0VJQ0OzU5PuYoLwUhXA7X1PGhqayXmBPqP0G5jq7DSphzQ0NHs0y4OMQVpJS1cVcmhoaLZr0nOHsb-qeNyS1mhoaKp8k5a4lWnpPu7Q0NDcrEn3PenUY9AurcoZDQ3Nac3kaMOeUaf1vicNDc2kJh1KqOLOymwEDQ3NLZr4w6-3M1X3tA9NNDQ0ZzRp6UqZ1ThVf0xCQ0NzRlNVsj0jUf3oFA0NzWnNZD8z7W6MD0b7QSgaGpq3adLOyORhaVrYaGho3qbpC9YYd1--hoaGZiXf9KeUE5GlOl2hoaHZqOnDRn84UqWa5B00NDR7NF970dDQ0NDQ0NDQ0NDQ0NDQNNcvzbn-4Jfd6NsAAAAASUVORK5CYII__n5MhOPLcl",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/1_A_GA-123_DUMMY-001-01_ZGeVkG6LZ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "2/A/GA-123/DUMMY-001-01",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 1,
        user_id: 1,
        biodata_id: 2,
        transaction_id: 1,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/9stWoHNDQ0BzXPNhMEp_ubXzKDr9HQ0HyH5jrRWVyDhobm9pogRUnTGxoamrtoAmuQ4wRtjRtUazQ0NH2n8fBfH_7c0tDQLIwZwylI8IDg5tNTXBoamqC6qIaacVHy6uY0ktHQ0BzUBEnIS1cwKU1vmexy0NDQpJlNGmqCpmVf1aSnJGhoaM5o0rwimGdeC4OyaGjiQUNDs5gLVHEpCTp10yM4S01DQ3NQk44tq5Fn_oDgP0tDQ3NG059VDnaUbGbtJxQ0NDTjmumotThBGZp40NDQ7HQHgyCWFiDptoKfVaxmNjQ0NFVM61sdwaOqemly7klDQ7PT5UgLkD6BCeqgqp9KQ0MzpKlqirStEWxw_zgkDQ3NkKYaRy7WI_lpy8n6hoaGpoppaecj6Gam7Y_q3KGhofmIpl_9qoj6kw6reRoNDc2iZvu9maNO_3NPGhqa7Zj2CK-rVuXiGnGfhYaGZkbTNzfTeiT9IFDT0NAc1KShK0hv0kMT-elrGhqa05oqklVJTVXBDE1xaWhoduqbIB2JB5Pva57qvAQNDc0NNEHUqvqkqZCGhuZWmvRlijs48aChoRmsb-ou5ULJ0sw_aGhoJjXbxcYOLg2jNDQ0ZzRfe9HQ0NDQ0NDQ0NDQ0NDQ0DTXLzMe_PUCgBiUAAAAAElFTkSuQmCC_sWCqdVV-K",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/2_A_GA-123_DUMMY-001-01__OajRauJd",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "3/C/GA-123/DUMMY-001-01",
        type: "Children",
        seat_number: "E/003",
        schedule_id: 1,
        user_id: 1,
        biodata_id: 3,
        transaction_id: 1,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/TpEWPF7bl90lDQ-MATdXQ3NJpaGiep_mtY_b4dXy2W6OhoZnMOs99_kRyS0ND040Zhx1MsNtJ2523THFpaGiCmUbf8wRfkF4792k0NDTVzibIIoIqA_HkWJWGhma7JhhRphFkMNlMNev7NBoamj2aaomropN_KkpDQ3NGU_WQ47xjOfQI9jM0NDTbNdXGJHhSWnTV89DQ0JzWBK1N2u6kB6rHNy_lHDQ0NCtZZ7q9qVay4J30s1AaGpqdmn4UkvY8wQo1_88UNDQ0ezRpn1Gpq1hj_9yThoZmT9YZDCcmx5tVk0NDQ3NaE6xBaTiSnoioVjcaGprTmqCNSXPIyf3M9m6NhoZmUjOuKC11nGYGu5hNp7tpaGgmTz9Mnlec7G9oaGgepUkzhqrKyQnK7NyThoam1-QnE6rVLT1GHXRYNDQ0ZzTxErIQUqRVbjrXSUNDs5J1ViPP6hR0_mlncktDQ5NqloOLyQA1fRoNDc1bNNVIYnIlS9fSpZSDhobmiCYoqx97pHkHDQ3NUzTB7-oz0tsnHjQ0NO-ob4L7xoFJVTkNDc1pTZ913n5Bj5t9gTQ0NHs0f-aioaGhoaGhoaGhoaGhoaFprm9AFaBqnu95UgAAAABJRU5ErkJggg___FGjVRbSDE4",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/3_C_GA-123_DUMMY-001-01_lmCLFU420",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "4/A/GA-890/DUMMY-001-02",
        type: "Adult",
        seat_number: "E/001",
        schedule_id: 3,
        user_id: 1,
        biodata_id: 1,
        transaction_id: 2,
        flight_id: 3,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/_CFP1REVQG9HQ0KzU9AecBguV9GWcFdHQ0KzR9GVHNd1Ic6ZF9Q0NDc10lyMoMaq9pauli9PQ0OzRpK4qvek7KdU5Kxoamo2a-tRjFfvS0cro3JOGhmZQU7U5q0cZBs9G0NDQ3KIZ7HwE9Uh-qDJ4GoOGhma55nh-XZc7lSs4cz0-96ShoZnObKrZR5UpVWNVGhqamzVBvFkT4oJYmvw8DQ3NBzT9FCSNc33ng4aG5mOaqvORHom6ZX5DQ0MzU9_ko9EgTF2vRkND8wnNdLExGOz6MEpDQ7Nc87UXDQ0NDQ0NDQ0NDQ0NDQ1Nc-0C_1THJyyPaT8AAAAASUVORK5CYII__mFTky-bGN",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/4_A_GA-890_DUMMY-001-02_GGZDvXjvk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "5/A/GA-890/DUMMY-001-02",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 3,
        user_id: 1,
        biodata_id: 2,
        transaction_id: 2,
        flight_id: 3,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/0EzGDg_-6V1n-RHTXFpaGjWGUaQwKx7IEFVEzRGaWhoLmrS0mZID8qd1EVDQ3NRsz2cCMagwUYZREBDQ3NRU3U9g5pnOOc4tKfR0NDszD2DFmQ-C63mIYe6HDQ0NENNkGv0k5H_7XR_Q0NDc_b0Q5qnrOnpP9bPSGhoaE5q_u5jZd05KzXIbGhoaIYVQZp19EORflwaHJWgoaE5pAlGDf2Istq67kxxaWhohnPPNNtZX5yWLGlLhIaG5ramus2woKkqp5OZDQ0NzU6Xo09vhhefrNZoaGj6PS2eNT7PgIKgd8odGhqa45r0uEMQ23CUSUND81pNVbKktUe10vBpaGjuaKotKX00os9x_sMQNDQ0hzT9zlOdcNxua9DQ0NzWDJ92CDqcw-NTW3NPGhqaoaaqPdKWyPCpiP25Jw0NzVCTbkTDS9IVp1o0NDSv0lTpzXYuNM1saGhoTmv60wrV_an1LkhDQ-MtmvTbYIhR-Ttp_DQ0NBc11RCyOsiYftYfiqahoTmk_bWLhoaGhoaGhoaGhoaGhoamWe_nra5AhyxJ-QAAAABJRU5ErkJggg___uNohinXkd",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/5_A_GA-890_DUMMY-001-02_dyxab9pvc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "6/C/GA-890/DUMMY-001-02",
        type: "Children",
        seat_number: "E/003",
        schedule_id: 3,
        user_id: 1,
        biodata_id: 3,
        transaction_id: 2,
        flight_id: 3,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/qKqDolQUNDc0YzObsMXgUPffP8hoaGpupoBHPP5UlGOkahoaH5mCbtbVRN0OqUBA0NzWlNesIxSGCCJwcpT1rk0NDQbNKkQ820wzk5Qdk58aChoZmMacHkoUplqhKoP0VJQ0OzSVPlM2kzY3lQsmnuSUND02c2aVyqItl4b32bk4aGZqemOuAUdD76TCkthmhoaM5oXqQP4XQyCHZVS2SpvqGhoVmZFKatibEraH9U5Q4NDc1pTbpSMPys6pt_cRoamoOaNKYFGUv1to_qNDQ0ZzSTZx2rmmelrUFDQ3NGE98cDkDSU5TVU2hoaA5q_vg12fQIAuCmuScNDc1KfVNFmf5YRNoJpaGh_YSmijfpP5E2RvuDUDQ0NB-TpNuv4lzf_aChobmBpp_ABkOWnRMPGhqajfVN0L5ME5jJfioNDc1BTV9s9M2RqqpJ1qChodmj_dqLhoaGhoaGhoaGhoaGhoamuX4B-k9coKWLgfwAAAAASUVORK5CYII__vBZBix3RI",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/6_C_GA-890_DUMMY-001-02_pkYOuvtn7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "7/A/GA-345/DUMMY-002-01",
        type: "Adult",
        seat_number: "E/005",
        schedule_id: 2,
        user_id: 2,
        biodata_id: 2,
        transaction_id: 3,
        flight_id: 2,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/D713-eHjj8EWHV1UFNDQ0GzXnjeOsrOui-6o8YFb10dDQLNecdrKZeoMP7SugoaF5QpMWfQ1e8-_koaF5VlMdaE7pNDQ0n6cZtAbd7U1ZD5zWaGhoBned_149sbmloaHpYsZwRAnmmesmdkuKS0NDE2Qa-Zkn_ID0WTmn0dDQBD2talhBlYFwMFaloaHZrQmuNQ3eckpnnHTuoaGh2ahJp53qpBPsT_Z3nTQ0NAszgrSxXZ9MqqVHMM-Q0NAs16QNqx9vpqMQGhqaxzTVWiP4s2BX0nc3GhqaRZq0OaURRxqZpCtSGhqaWzTBpmKwAQYdKu2HNDQ0ezTpOSOoKF2H3pJ70tDQzPS0NPIcvPpYHXJoaGh2a9JLCYNZxcyGk4aG5hbN4PLhOhnpZ6Y9pzUaGppKU5WaWqugZOX5hoaGZnqy6SOJ-nxDQ0PzUZq_tjQjCRKUPvykoaFZpJm55zyzCJn_IhoamkWaqsX14WcVoS6610lDQzM4C6QLiWqvGcQZy3edNDQ007vO-pDTL0aDoJOGhuZmzfQKMm1xQS_d2nLQ0NBs0aTNqZ92RvMVGhqaBzRp7xscjRYlHjQ0NHecb6oEtLo-RUND84RmcNfZD0QzpyQaGpo9mq99aGhoaGhoaGhoaGhoaGhomucX9efZI5jqnOkAAAAASUVORK5CYII__QECw38Xje",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/7_A_GA-345_DUMMY-002-01_gNwYqyHbU",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "8/A/GA-345/DUMMY-002-01",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 2,
        user_id: 2,
        biodata_id: 3,
        transaction_id: 3,
        flight_id: 2,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/nwtevVjCL59LV0BDQ3NQM-n08Y-BvckV0NDQnNEEz_wN4wdVK6ChoblXE9S58aunmxUaGpoP0jxdTHUt-z9paGjOaHprtaJxJbu4W6OhoTmXdU6_etPklobmP2gmBo7Dh6R90LtMcWloaIJEI4g_q3vjJDTd99DQ0GzSBFWrCjyDhDOdjNDQ0FynSatW0BalkUiQp872NzQ0NJM1Lc0mA9xKOrqpQtPQ0KzMPashZLCf6echm1IOGhqaybln_t2FIAgZg6u2iIaG5rSmKj-jnUh14nlyRkJDQ7NTU7UYQcWrRiaTexwaGpqdmrShCaaT1R6nGo3S0NCc0aTlZwV3xxSXhoZmJeVIq9b4jeBeGonQ0NCc1qTTjSrH6AtWugIaGprtmuDMQ5dDhppLujUaGpqqvxmXmpV8Ys-xaBoamu2adLxZRaTVKJOGhuZeTbDN6M8qV9fkH6WhodmkCb4CVbU7-VGJdMtDQ0NzRtNXnv5gZBCnTCQpNDQ0ezSTBabveapvT_yce9LQ0KQTj5XeI5iFphHpprknDQ3NytwznX30Rx-TCrqUctDQ0FyhSbuf6tc2ZTY0NDRHNP1phf4sdTpMpaGhOaNJ3w2GGCs9z-rck4aGZvK8QJp1roSg4-zkjokHDQ3Nx140NDQ0NDQ0NDQ0NDQ0NDTN9Q0o-AsAGkyW0QAAAABJRU5ErkJggg___lY0r4_2W7",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/8_A_GA-345_DUMMY-002-01_IA3Iv0L31",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Charles start here
      {
        ticket_number: "9/A/GA-935/DUMMY-003-01",
        type: "Adult",
        seat_number: "B/001",
        schedule_id: 2,
        user_id: 2,
        biodata_id: 3,
        transaction_id: 4,
        flight_id: 5,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/_l60dDQ0NDQ0NDQ0NDQ0NDQ7Gpe76-gZ0dfHP3789n_CmhoaAY1vweO_sXr5R_9rVoBDQ3NhZqjxQTfBjcHTw5WQEND8wBNtY7BHaOhoXmKps9bguMNDQ3NUzSBNTjjBMwHZGs0NDR9pfHiv26u3NLQ0JxoMzYlzfUDgpuv7uLS0NAE2UXV1IyTkvBUFFhpaGjGNVWhIahr9tMPVeyjoaGZ1KyDUxq6_oyompKgoaG5T1OdSYJ2RvDkyY4HDQ1NXx2szhVxAlIXPYLeKg0NzTWadfhZk4KguDMlQUNDc7UmyDPSkagq9gV79yYo0tDQzGj64kO6hKqDMtTxoKGhGawOpnNRwbmn2sV0pIKGhmZS0x9bqlTpE11cGhqabc1OK7NKWfoyJw0NzaQmCCs9PVjg9jgkDQ3NuKYaXlj-Iu14jOc3NDQ0OxnBzvL78keV7tDQ0NysCd5eVTiDAFiFMxoamqs11QxUtTHphMVW35OGhmam1hmUIdY3b89G0NDQ3KKpWplBHeNkkhOUUmloaK7RvN5fFTjtnlb9Vhoamqs1aSTbTobW_7Tf96ShodmegUrjUrAnQc5zctyahobmY5q_TtoXS9PARkND8yhNOkMRbMJkx4OGhmYwv1mvsjrABGUSGhqamzXbycbJYNeHURoamnHNn71oaGhoaGhoaGhoaGhoaGia6xu6jDG9JiwRvwAAAABJRU5ErkJggg___eCPhSJLyU",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/9_A_GA-935_DUMMY-003-01_NBTk1BJF6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "10/A/GA-935/DUMMY-003-01",
        type: "Adult",
        seat_number: "B/003",
        schedule_id: 2,
        user_id: 2,
        biodata_id: 4,
        transaction_id: 4,
        flight_id: 5,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/3POWkxDaKhoblak4Kr4We8wTAy0tDQnNTMxxlBr3MnnA1vsNrrpKGhWdRU5Uk6FJnvd-hM0jqIhobmpCadP6YDi23hfs_Ghoamj2kfQsjnIifIYqpRCA0NzX2aNLoFKUqfBi1GNxoamkOa6jRj-ySqQJl2V2hoaE5q_qljkLEERc78VldXazQ0NKmmD0T9ucbFcoeGhuaQZr5cENgWg2Ja5NDQ0Nyi2ek2pBGvgtDQ0DymSUNcdfQxjZFdgkVDQ3NQM1_zAleBLU2waGhortakbxe-Ny9eqtkqDQ3N1ZqdmFYdmtg_B0FDQ3NSE3Qa_wRm3ggJhiL79Q0NDU0199zuYVbHItL7rZ5_oKGh2Zl7BgGmT1EW-yRBQ0NziyaIZP2ZyLTzETxZGhqaWzRp42K4elAvpXEuedA0NDQPaBaF1ULzu9DQ0DymSdObIOIFbQ0aGponNNUhh8VapspxaGho7tNUvc6_35GOWtNDkDQ0NCc1f-aioaGhoaGhoaGhoaGhoaFprm_bnccn5UvhBgAAAABJRU5ErkJggg___WCL0Ko_Mv",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/10_A_GA-935_DUMMY-003-01_rOV2eo60T",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "11/A/GA-123/DUMMY-004-01",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 1,
        user_id: 2,
        biodata_id: 5,
        transaction_id: 5,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/R0NA8q6kiz7o_0ZdOgiSHhoZmSFPNMaWzjkFJczMZoqGhGdf0Sc66YxmcSdICx-n_DQ0NTR-TqvHotI5xX9_ThoZmZl6gL3qk_U2qTn5ZGhqaGU06s5Q2MNPK5elxSBoamnFNOtaUhp903GE8v6GhodnMb9JV0YMcKkh3aGhontCsTxjVcOPmpMOpvicNDc1gTEvrn2k-JE18aGhobtakd928JLBWpywaGpohTZXVpMXNamIyKH-Q0NBcqOnLFev6ZzVVHZQ_xzseNDQ0m8lL_szUGsxB0NDQ3KwJjiNVBlOVUvtBKBoamic0-Xkmran0lQ8aGppnNZsFjnTcIenD0NDQTGs2ZyOqW6WX0NDQ3Kw5k2wEQazPapJfh4aGZkbzZxcNDQ0NDQ0NDQ0NDQ0NDU2zvgEJ_8cnpntcAQAAAABJRU5ErkJggg___yvDRJhxfK",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/11_A_GA-123_DUMMY-004-01_fBBnLzwyt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "12/A/GA-789/DUMMY-005-01",
        type: "Adult",
        seat_number: "F/002",
        schedule_id: 3,
        user_id: 2,
        biodata_id: 3,
        transaction_id: 6,
        flight_id: 8,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/y_vgUpCs0NDTLNdX5Js0n_t7J_B9NQ0PzqCY4vAQLYP8UGhqaxzR9abR6XnB8oqGh2a0Jrga10KrD4ggHDQ3Nbk2VdaZHltTfN0HS0NCs1PzZQUNDQ0NDQ0NDQ0NDQ0ND04xPo5oxvSY33cwAAAAASUVORK5CYII__CZAcHsGU8",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/12_A_GA-789_DUMMY-005-01_heQK0MK4i",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "13/A/GA-789/DUMMY-005-02",
        type: "Adult",
        seat_number: "F/003",
        schedule_id: 3,
        user_id: 2,
        biodata_id: 5,
        transaction_id: 6,
        flight_id: 8,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/ffrc03-7dNOnT9tcAQ0NzUXN88Lxcfnrpz-93Fe-9iugoaG5rQnWVrm_qlrVe6KhoflRmnTH0lc3Ghqa36EJ9iRBYRu-TxoamouaKpVYJxXpUt-WrdHQ0Gxmnfd_ekdyS0NDs3vgWKcc6z7ovae4NDQ06x5lkn_uSZvbIBoamuOaqogFNa06zkiZNDQ0FzXrahRknZNyth6sOpTc0tDQpDUtuE26vVmv7ennqj6IhobmkGbdbFQPDhaTCkcpBw0NTd-fVIOM-fzj5uEJDQ3N6zRpvakGFa7kpDQ0NMc1QXIZrDxtgYK73JnrpKGhqU48xjuWoMnpXyANDc0dTbXDWCcf6TUJUGloaI5r_v4mHZOaLJ_GhubFmvgO3594TKrWoekHGhqaiWadTW6OPq5fx2b0SUNDc0gziSs2-1ZFJxspBw0NzWY6mO5TJnuhapBit6bR0NDcO-dMR5c3v-fQfcGChobmoKbqW-pNTfrIQzWNhoZmPDVUxZzpsvqoY6Om0dDQHNwLjDuT4Pb9zAMNDc0dzbqSpfFlvCdpZixHmQ0NDc0k5ej3GqkrnZM8mdnQ0NCc0QTdSrC2qgW6WNNoaGg2H5KOLFRjk9VANQ0NzR3N5mxEEkuGpet13RoNDc0k60xblnU4Uk1d0NDQXNT82ouGhoaGhoaGhoaGhoaGhqa5-gMdof-gr1sWdwAAAABJRU5ErkJggg___VHcZcSSUj",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/13_A_GA-789_DUMMY-005-02__8lHFGneb",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "14/A/GA-345/DUMMY-005-01",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 19,
        user_id: 2,
        biodata_id: 3,
        transaction_id: 7,
        flight_id: 2,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/Hi4aGhoaGhoaGhoaGhoaG5q7mdX28u-jn67v-G-5ifkmwAhoamjOaceAYrbeyVv70LA0NzXbNu1Wm6xiGn2GEGn4K4iYNDc1jmvmd5l-33IOGhua3xLR5jTI0zP_KhobmWU1qHZ4NTuypsGhoaLZrgk7j4U8f7tzS0NAsjBnDOwXjjDTYHZzi0tDQBNXFRUS5no_mdVB1Xxoams9p_kHnsKORdkiClggNDc12zbyZkbYl_xBXhUIaGpqDmnSnQx_hqiTpzPyGhoZmceKRhq40GqWz0CAroqGh2a4JQlxadgR7oILraGhontBU25mDjYxpnLtT5NDQ0GzSVE3GFBIExcViiIaGZrvmTt9hHueqTZBBiKOhoTmjqZaQviRRLfD0FJeGhqbvclQ1SvXbVJ08WRoamnOaNOuopqJB6KqKHBoamu2avq1RDTYWn9hqZkNDQ1PVN-2bDUFcSmuofsBKQ0OzXVOtbTE-qh7MmbknDQ1NdeM_T0nnIXueIg0NzRlNmqfcWepiW4OGhuaMpkpWFrc1pQPWrolCQ0OzR-O6PoKlplGwaqCuZjY0NDSLmU2V9wQzkj6LuT-3pKGh2dMXqOJN2s2sYmkQ2GhoaJ7QVGEqqGD6-gkNDc0v0CxWP9V2h6DrSUNDs13TTzsXs5ign0pDQ-NhzZ1iYx4KF6ua5EHT0NDs0fzZg4aGhoaGhoaGhoaGhoaGpjm_ASWDKtKxl6eZAAAAAElFTkSuQmCC_rGDGzI9Km",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/14_A_GA-345_DUMMY-005-01_obnEh6hhn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "15/A/GA-345/DUMMY-005-02",
        type: "Adult",
        seat_number: "E/003",
        schedule_id: 19,
        user_id: 2,
        biodata_id: 5,
        transaction_id: 7,
        flight_id: 2,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/rLs__-N53Px9cMl4BDQ3NQc114KgNl0sI3lO1Phoamu2a4EnjVVb_yRXQ0NC8TTNeUU_-fAYNDc1DNZeXBOut9kw0NDRv06Tfvpqj2gHdl63R0NDsrnUunz2qcktD87c0cZtxWM2cDGxv6_LS0NAEq7wMbJVmnNCMPy71PWloaPqYlnYsx3dc_sfLH79UGhqag5qVeacgJAUPSkMhDQ3NQU0Q0-o9SdXdGF9CQ0Nzi6YvVwSQoG8SRDwaGprTmmr8Kf0vRJAHVXfQ0NAc1KzsdtLSSfV3iWTukoaGZrcmHVNOU5GqMEpDQ-MATRCDqoHlNJfppyNpaGi2a8YLrALR5AR12jOloaE5oxmHn-RssnvalzlpaGjOaCbHGKqZyGreab2LS0NDs9LxSGsgaWMjrWPE19HQ0GzUBJ2MyQmG5ZooDQ3Nac3KjMJKO2NyPJqGhuaMJs0zgj1Jn0NVtQ0aGprtmqACkaYsyyMVKYSGhmanJr65npAah6m0TEJDQ3NaU_UeVeEiyGCCrigNDc0tmnEkG8egapahn5WioaG5T5MOO1edzQq3fQaKhoZmoyZOO8JJqqocSkND8xTN5MakH3cI3h0NDc12TRWhqn5mlf3EzVQaGpqNmqrWGZxVm6TURUNDc0bzYw8aGhoaGhoaGhoaGhoaGprm_AR9ns4SIEvzpQAAAABJRU5ErkJggg___1P66-Whwa",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/15_A_GA-345_DUMMY-005-02_TIzSvQrJ-C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "16/A/GA-123/DUMMY-006-01",
        type: "Adult",
        seat_number: "E/003",
        schedule_id: 1,
        user_id: 3,
        biodata_id: 6,
        transaction_id: 8,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/TcoeGhuaMJpg89EEsnZtMplU0NDQ7NSsNjrSRGbRE0skrDQ3NQU0Quqp3VvSd9Q0NDc1kfbPSyFzZiOjDGQ0NzWlNUGcEy417Eh0aGpo3a9JFhbQ-UYXHtJqioaHZrgmGE_O5RBqIgqbq0iYkDQ3N5AZxcAUnT-8WtWl-ioaGZo8mDTB9E3RcKlVJEg0NzWlNGskmlyGqmBYPVGhoaHZr0qXFatoZkLZXazQ0NOc0K-2OanfyLTGNhoZmMqatlDvp3JOGhuYTmj5PqaYbfaLz4ptpaGg2avpio0_Iqqom_aFpaGj2aP7sRUNDQ0NDQ0NDQ0NDQ0ND01zfwS08zozD8w4AAAAASUVORK5CYII__IK_u5-d0D",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/16_A_GA-123_DUMMY-006-01_zeVP49oia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "17/A/GA-123/DUMMY-006-02",
        type: "Adult",
        seat_number: "E/004",
        schedule_id: 1,
        user_id: 3,
        biodata_id: 5,
        transaction_id: 8,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/GN4g9Keh4aG5qymWZWYQ0o-eW63RkNDs1LrvOWvY5VbGhqaRsMxrHoGWcwbdHFpaGiCfmaQxQSNjWAfFKRBNDQ02zVpEAueWUpg6mUSGhqaezSlXc0wADbDWSla0tDQPKep72_CJCl9J_k_iIaGZpOm1H9cGYao33kpT6OhoSlp6tMKpfnHZvOEhobmOU2QtjRPm-PVNDQ0z2lKFY35pqQepoJPKJbmOmloaJodj3naEmQswSanWWKhoaG5UZNWNErzEuk_qBEPaWho9mjSueRS8rO8fBoammOaUg0kvUvz_wgaGppjmmA_KShcpJMOzdInDQ3NTk29rFEqjKZh7_55aBoamqDpEPQua7uQKb3_nmhoaO7WpM_ck5rfPdQ_sKChodmoKQ0tpglMqa26M6bR0NAsTw2lZc7SsuqljkZMo6Gh2ZgLLO9Mms3UODLS0NBs1MwjWdoZiXOS1yNWSWuFhoZmt6Yeb0oVkjSMxi_ahobmvKbeIwkeNL8LDQ3NMU06txDURYKyBg0NzQlNfTYiLUumAfC53RoNDc1KrTPdsiwPVzxSuaWhofmzBw0NDQ0NDQ0NDQ0NDQ0NTeX4BOvanESwzoIOAAAAAElFTkSuQmCC_P68e_GBOo",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/17_A_GA-123_DUMMY-006-02_kthX2vd2M",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "18/A/GA-890/DUMMY-007-01",
        type: "Adult",
        seat_number: "E/004",
        schedule_id: 4,
        user_id: 3,
        biodata_id: 3,
        transaction_id: 9,
        flight_id: 3,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/fYZNDQ0H6oZ16-xequeiYaG5jFN_turuaoO6H27NRoamsms89ynJ5JbGhqabszY9DNpYXtsiktDQxPMKtLh51gTvI7xfeu7NRoamrSmpUsdV6hb-3j545dKQ0PzPk31KShJwbAjLYU0NDQHNZMjz753GUM2dTY0NDTL6WAVfaYZyO0zgopHQ0NzUNMXrMngIm2I0kyUhoZmuyY9lTR_CUF5TCvo_sSDhoZmUhOEFJNVKx2U0NDQPKEJCsxkdQsSzjRYoaGhOaP5JU8I19H3LsHIc_lcJw0NTTXx6OtNcIwhTUIrCA0NzRlNP8So-schqFpV4ElDQ7NTUyWc6W4lrZZ9OkpDQ7NTUx1Xqo5KjElpJkpDQ3NaE5xvmAwkrubqJ6A0NDQ7Nf2y0tfR5yLxuQoaGpo9mqoJqfZBK2kIDQ3N_zTxH8_lF8E7ScNNGhqaM5qVkwkr26LJk080NDRnNOnGJ_hsVtKLqtGhoaHZrhnXmz4T7SPN9TNQNDQ05zRp-1GdpErjUBoamk-R7GlM9ow9aGhotmtW5iHpOaZ0R7Re02hoaI5knX3tq3qXagJKQ0OzSfNnLxoaGhoaGhoaGhoaGhoamub6BvhZnESM1jjCAAAAAElFTkSuQmCC_qG94rCaEu",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/18_A_GA-890_DUMMY-007-01_jBgdKDGs3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "19/A/GA-456/DUMMY-008-01",
        type: "Adult",
        seat_number: "E/001",
        schedule_id: 5,
        user_id: 3,
        biodata_id: 2,
        transaction_id: 10,
        flight_id: 4,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/GhoaGhoaGhoaGhoaGhoaHZ1Xz_fnzdN--Zb1eHb1tcAQ0NzUHNOHD8qqnUf7ow1AQroKGhOa0J1pYKh1Fr_N5gBTQ0NO9qgt8Gqxye0tDQfHvNML8ZJirxFoWGhuabaBarEnNIdcu9bI2Ghman1nnkr9cqtzQ0NAsNx7rKMc_I3u3i0tDQBP3MYBcTNDaCPCjYBtHQ0JzWDIVpTKvaGSmThobmimYxku2Esypa0tDQnNFUwSQtXKT_ajaChobmsibeYUy3RovCrZoNDQ3NTq1zvo6qwrndPKGhoXlDU5GqsmnVAaWhobmn2UlK_hQo3RU9NAlJQ0NTxbS0ORF83rCzSXoov6GhoVnseFTxZp7uVHnQQjykoaE5okm7Eekg1OLyaWhoXtNUGcxOAyT9J9DQ0FzWVKfVhXk1sy990tDQPKkJnhCsow9swXZpocpBQ0Oz0ylcvBp86DA-7YejaGhoDmp2ahvBzdUD9mMaDQ1NurNJ395vatJXPhTTaGhoFqeG0iWkYwzBpxFV94WGhuaMpgowVSgMHh90QWhoaK5oFusYVbMjjWlp1ZOGhuZxzTPxJshR0jnJrZoNDQ3NOc1wWfO6SDXqdC_m0dDQ9C9JRxaCMJU2RGloaK5ogqsLkWetVkJDQ3NZUzUhq9mIKgVKhyBpaGie1PyzBw0NDQ0NDQ0NDQ0NDQ0NTXP8BNmfY4t3E7qBAAAAAElFTkSuQmCC_p4O8BS1Ie",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/19_A_GA-456_DUMMY-008-01_cTQ2KU8N3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "20/A/GA-456/DUMMY-008-02",
        type: "Adult",
        seat_number: "E/001",
        schedule_id: 21,
        user_id: 3,
        biodata_id: 2,
        transaction_id: 11,
        flight_id: 4,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/Eey5Ue5JC8oAAAAASUVORK5CYII__OXk73F2eg",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/20_A_GA-456_DUMMY-008-02_Mk1AzBa75",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Naufal start here
      {
        ticket_number: "21/A/GA-890/DUMMY-009-01",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 4,
        user_id: 4,
        biodata_id: 7,
        transaction_id: 12,
        flight_id: 3,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/BtLx86fFpzBTQ0NAc148JR1gTvaK6AhobmtCZYW1qNhvcNnxusgIaG5llNWpfq1Y2GhuY7NPP75i_kPQ8NDc2zmnoqEUDSL_Hmbo2GhqaZdZ7764nkloaGpnvgWDn7CPqgZ09xaWho5luUZnULSM1tEA0NzWnNULhy_BkvMKyMNDQ0OzXzz1o5ySh1U5uyThoamo3p4Ap4fnNwmEpDQ-OYppRFlIYhSsKllIOGhmalIyh1NQFp5fCEhobmZs1wqemGI61fKzkpDQ3Ndk19mOlN21EpU8GI1c7zGxoamrh1mIYewY4laHKCB61XaBoammZ-EwSeQViapqjNdoeGhuaMJp1WSJOP5vJpaGju05RCxmY-0vx9BA0NzS2aNNtodjXBpEMz_qShodmkCY4uAnCQhAZl75bpbhoamlK2keYdwexk0AeVhqNoaGjOaAJXcLDR-N1D7QcWNDQ0GzWlocW0USkdq_6saTQ0NMtTQ8EWJShiK99Et6bR0NBs3AukKwpKYXNn0005aGholrPOUgZSKknpSEWQetLQ0GzXpMUp-V8amAT5CQ0NzadoggpVH6QINk40NDQfoDkyFtEcqKahoTmjCV4NTjaD6YdSxEJDQ3OLpnQImbYsQRUsfTE0NDRnNF970dDQ0NDQ0NDQ0NDQ0NDQVK5-K2ScRG2w07YAAAAASUVORK5CYII__Cf15VgBcP",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/21_A_GA-890_DUMMY-009-01_POQCuTlhu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "22/A/GA-890/DUMMY-009-01",
        type: "Adult",
        seat_number: "B/003",
        schedule_id: 4,
        user_id: 4,
        biodata_id: 8,
        transaction_id: 12,
        flight_id: 3,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/ty93K1yR3Q0NAc1FwHjs_aSv3djUtNsAMaGprTmmBvaTS6-N3lusEOaGhontWMvwafxl9paGh_vWb8u-GNNOehoaF5VtNXJQJI_hBuztZoaGhWap1HPj1WuaWhoZloOM6tHlRNnuji0tDQBP3MProFpMljEA0NzXZNKhwXLVeKI2mZhIaG5owmyDMmOxnVqeh05ZaGhmZSE6Qn6bBkUCet8iAaGppNmqC7UfU_9gjXazY0NDTLtc5g-Cmdf5xsntDQ0Nys6WuYFXhPnZSGhma7Js1v4kWaMBUcl85kazQ0NMuu6hWKtL1ZJTk0NDSbNNUJo8pl0gmpyXSHhoZmp6Yaik6rFyvbp6GhuU_TljCWOyMVhIaG5j5NNdHUZzXBpMNk6ZOGhuaMJt1HXxhNByl2zkPT0NCsxLSqExm86JA_kzMRmoaGJtCMzy5pDSRoivTvW9DQ0JzWBJXGPlEJaipnYhoNDc3k1FB-dumDXVXqmIhpNDQ0K2eByR31XcxqRpqGhuYWTRDJ0vpnELX6SSoaGppbNCtjTWm_FITR_EHT0NA8oJksllYLpc_OhobmZk2w5saBKRoamic0acAaH2WCJ1aVWGhoaG7RVE3IapAx8PdDkDQ0NDs1f-aioaGhoaGhoaGhoaGhoaFprnfJ-Gp2N5y1WAAAAABJRU5ErkJggg___CZ_zSj1xe",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/22_A_GA-890_DUMMY-009-01_GVd9BdtXm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "23/A/GA-456/DUMMY-010-01",
        type: "Adult",
        seat_number: "E/002",
        schedule_id: 9,
        user_id: 4,
        biodata_id: 7,
        transaction_id: 13,
        flight_id: 4,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/fvXveu8cHt4x3QENDc1BzHTje7HxsuNzC_D0FO6ChoTmtCf7TZYQaq6s3llppaGhu1oyPGZf0cWCjoaH5Q5qV-VZnJhoamsc06afj8selJjgB3Zet0dDQTNY6z109UbmloaHp2ozDTGcysD3WxaWhoQl2OW5_ppFxnNCMf1zqe9LQ0OypcqSGIPsZb3-8UmloaA5q0kmHIFYFoSutkMxWOWhoaM7FtKrRGXyQllNoaGhOa9IkJ7hv3COp_iY0NDT3aZbjUlq4qAYpkvEJGhqaI5rucPG5dRF0MatuJw0NzS2aNBXpo9Zku5SGhuY_TTq8kA4yBrlMPx1JQ0OzXZN_F_IVrvTsEtRUluY6aWhoqr5nBUnHGNJKaAWhoaHZqamKm0ExciVqVQVPGhqaTZoqfqVjUpO1ku4_GhqaPZrq_elxJCClNVEaGprTmj6-2dPOmByPpqGhOaMJBqCrmmiVQ1W1DRoamu2aoAKRxqoqFE7OPNDQ0GzXxH8cnmzSemVVQKWhoTmoWZlMWE5tgtYKDQ3NLZrlLkjfLUl7pjQ0NPdp_imnlSBWRVAaGppfoOmvqmPLRAGVhobmAc341BFkMBvbHjQ0NNs1-TBEsMHJjGg9ptHQ0BypdaZXVUkzddHQ0JzR-NlFQ0NDQ0NDQ0NDQ0NDQ0PTrG9rZQbaUKK1LwAAAABJRU5ErkJggg___T4TPTu6F1",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/23_A_GA-456_DUMMY-010-01_pzYf5b_Pl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "24/A/GA-935/DUMMY-011-01",
        type: "Adult",
        seat_number: "B/002",
        schedule_id: 2,
        user_id: 4,
        biodata_id: 7,
        transaction_id: 14,
        flight_id: 5,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/9nHT4dMWd0BDQ3NQMw4c0_0P1XP-4g5oaGhOa4K9pcJh1Bo_N9gBDQ3Nu5phmKrUwV1oaGh_qSbISYLAdvt90tDQHNT0VYkAMt-qa6c1GhqaxVrnuU9vVG5paGhWG45rTw8ypTe6uDQ0NPMUZd4BDSoaweuo0iAaGprtmjSIVSMQaSEzZdLQ0JzW9ENPQSejyoo21TppaGh2VweD40nQJJ2D09kIGhqaM5rhXRf3sUd4v2ZDQ0PTZzZVWbKaf1xsntDQ0DynSROY2yNR1cQkDQ3NI5pgyul2UhMMQc4fTkNDc1ATdB2D1ugwpgUXqj4HDQ3Nw5ogEF31ulNApaGhOa2pEpiqgVltn4aG5mFN2oMIwHei1vZZDhoamqrK0Q8tzjV7iiM0NDSPaKohyL73saePSkNDc1BTnXnm5csqZ0pPSTQ0NA9r_mQl7WRUExE-vGgaGpqNmmpoMU1ggkB5JqbR0NAsdjzSrmg6xhD8NWKx80pDQ7NTUwWYoDgSVEKrGWkaGppHNEEkqwYV0qGJKsuioaE5rQniTZCiBGeUdE7yVs2GhobmiKZqU8xron3iREND864mnVtIj0D9OYiGhua0JrgadDarKYkrXDQ0NKc1VRMyPbJUwxXVECQNDc1OzZ9dNDQ0NDQ0NDQ0NDQ0NDQ0zfoGbaIG2lnDx_AAAAAASUVORK5CYII__Mb5e58gv3",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/24_A_GA-935_DUMMY-011-01_R043ah-8R",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "25/A/GA-935/DUMMY-011-02",
        type: "Adult",
        seat_number: "B/003",
        schedule_id: 2,
        user_id: 4,
        biodata_id: 9,
        transaction_id: 14,
        flight_id: 5,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/TpH999rqgPxFkQPdVazQ0NLt7neNPb9W5paH5X5p4zLjsZp4MbC_b4tLQ0ASnPAxslWZd0Ky-juaeNDQ0Y00QiNIyJt1_WNdBNDQ0F2rW552EpGDYkYZCGhqaWzTdA_vcZQ3ZlNnQ0ND03cHJeDOYX-RzExoamvs0-SLjyWwnTYjSnigNDc1OTZB-VEsTJ8Njuj9FQ0NzoaZagpy0NKtxKQ0NzS2aIAZVC8tpLdNvR9LQ0OzUpOGsGl2kuUsw8jzbs6GhoZl0OdLQFbQq005oBaGhodmuSSud8U5kte8034SkoaFJM5vqTWkUTNcd_u4oDQ3NTk3aWag0ASntidLQ0FytWY8y45ZDPc44uR5NQ0NzjaY-dLURkVYw6ciThoZmpyatR8a3BOVOCqGhodmpiX-cHCvoV65nHzQ0NPdpJpsJ49Km6rPQ0NBcqEkLn2pvod9tqhIdGhqa7Zpg82nSzQxKm_07UDQ0NBs1a1faNemD52iKS0NDs1uTdjRORsaq1UFDQ7NdU0Woap7ZV0TzmEZDQ3NJr-Nk7Etzl2oCSkNDs0nzay8aGhoaGhoaGhoaGhoaGprm_gTcHqMvc7QVHAAAAABJRU5ErkJggg___S-VjK5JFX",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/25_A_GA-935_DUMMY-011-02_a9SEBQYsW",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "26/A/GA-935/DUMMY-012-01",
        type: "Adult",
        seat_number: "B/002",
        schedule_id: 18,
        user_id: 4,
        biodata_id: 7,
        transaction_id: 15,
        flight_id: 5,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/OnDnVsaGpqJMeP9-dNxRprsNk5xaWhoguriJqPcz0cDXP25NDQ07ZrLXsTkiXEdNBYGlRMNDU27Jm1XpKVImuJKqZCGhmajJs086e8m2hWNEw8aGprGicfkZnTpSwggNDQ0uzWl6eTKSlR6HQ0Nzas046Qzfvrk1lRa5NDQ0DRplmcVky3NyWKIhoamXRNksqBfWapMJlMmDQ3Nbk0aQlrLpAF_eIpLQ0NTzzJpM7Lx-6qSlUsaGpoeTSnoYBuq1ANZWYekoaFp0gRVTelEvYG6sb6hoaGp9zpXKph6YkvLHRoams9p4t2D8VtHZb86ZdLQ0OzWlHqdpQAnCx8aGppnNaU4Jvei6jsPNDQ07ZpS6pqsedLkmc5IaGhoOjXH-VGabqz0MTrnnjQ0NMu9ziC3pKOLdLWhaYpLQ0OzXN8Ebxil6_q5NOm20tDQPKAJNqSC6mdcL6WJjYaG5i2a_otJkB6DricNDU27ZvnseslSmX3Q0NB0alaKjXEqnKxqkq_ShoamR-O1Bw0NDQ0NDQ0NDQ0NDQ0NTeX4BcYEI_c70XFCAAAAAElFTkSuQmCC_XgdPTyGlE",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/26_A_GA-935_DUMMY-012-01_kRbgMv0G1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "27/A/GA-935/DUMMY-012-02",
        type: "Adult",
        seat_number: "B/003",
        schedule_id: 18,
        user_id: 4,
        biodata_id: 9,
        transaction_id: 15,
        flight_id: 5,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/3Vy5paGhmWgzpjf53M5Ig93GLi4NDU2QXQSLPr0uSIsm70tDQ3OfZtzjrJqf6emHoCRCQ0OzRzNOO6pkKA1xVSikoaHZrUnblpMJTZoRLe-f0NDQ9B2PybPK-VnHoHF6-Tw0DQ1NX_usWhLVg6keIA0Nzc2atMDRfw1i2mSSQ0NDs0iTFiQmSyJpYXR5x4OGhqbf2fTvKYzTneoQZBDiaGho9mj6JaS5TLrA3V1cGhqaKzubyTZosEkaq4MnS0NDs1JTLboKin2FJE1yaGhoFmn63UmahaTHHXZnazQ0NGlM6-uZkych_3SHhoZmt2Y8a8pMJ51k0tDQ3KxJC55VxKsSHxoamic0acZxZamTZQ0aGpo9mip_9XWR9MBU1SOhoaFZqXl9HlX980odY2Xfk4aGpt-ZVPueqnWRHm1Y1MWloaG5nN9UL0Sk7ZEqlgaBjYaG5llN391IY2Qa2GhoaB7TVEXQtPlZpTY0NDR7NP2vV0qfwW6HhobmPs2VZCMIYn1WkzxoGhqaNZo-O2hoaGhoaGhoaGhoaGhoaJrxC-s_KtLZjShpAAAAAElFTkSuQmCC_ZQfy-vbHR",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/27_A_GA-935_DUMMY-012-02_PBJnK56P3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "28/A/GA-567/DUMMY-013-01",
        type: "Adult",
        seat_number: "B/001",
        schedule_id: 7,
        user_id: 1,
        biodata_id: 1,
        transaction_id: 16,
        flight_id: 6,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/98fXe-j78YXxLsgIaG5ozmc_C4XjiwVv70LA0NzXbNu11Wnz5utbpzEDdpaGge01y8awxfYCbXoKGh_VWa8XVBYBuraWhontWk1n6DF0XLB7I1GhqavtJ4_NPNlVsaGpqJNmO4UlodDYLdwS4uDQ1NkF0EFY1x7yPA9evS0NDcpxlPMIxHG8atkOoXO2s2NDQ0VZsiiFXV6FR-_6WYRkNDM1nlSIqMC3ONKz0XGhqa05og2QjeP9JZx6BxulS5paGhmax1TrZBg2BXBUUaGpqbNf18UhCDgji3kuTQ0NBs0kxC0qpnWhg90-GgoaGp3mwmZ5-7zKRvt9DQ0BzUpP9sqHKUaoM3d3FpaGiCXU7WMKsJ6rE6eKg0NDSbNOnMUhJlwnmJvtNCQ0NzUJOWIfo103GHg9kaDQ3N7lrnuPSZNjH6dIeGhuYWzTjtCCof1SPqmTQ0NKc146ZmX8is-inRl1xpaGhOawLc5FYnyxo0NDRnNNXLyuRYUx88N-U9aWhoqo5HEGWqs8v90aX_DQ0NzXKVI4gyk7MMwVQ1DQ3NE5rgdSQtWk6WUqtBKBoamic06cXjiFflRjQ0NL9PM5n9VOlOUPWkoaHZrunP9rdKL6GhoblZs5Js9GlRsFDydGhoaPZo-uxBQ0NDQ0NDQ0NDQ0NDQ0PTHN9I_ZVZn8pFTQAAAABJRU5ErkJggg___7kbywJ77I",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/28_A_GA-567_DUMMY-013-01_gUJQDLpSH",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "29/A/GA-567/DUMMY-013-02",
        type: "Adult",
        seat_number: "B/002",
        schedule_id: 7,
        user_id: 1,
        biodata_id: 10,
        transaction_id: 16,
        flight_id: 6,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/6TBfxxnhfpeDhoZmJ9MWi5xgF1ONQmhoaJ7QBJE0j7ggv4JGCA0Nzfs0-WGm7Wcy-9KTJyFpaGh2Mi0tXvoADEYmxxOahoam0iy2NdKrSsH9TKOhoQl2NukQsipedpZPQ0PzZk3abagGon1qHT-LQUNDk_5s0hPKQUeyP_mweiMaGpozmjRHqrqlOhGx2O_goaE5qQl_7Rc4rFbmvc79TKOhodl_KyLoXqR7kuq9h_4FCxoamoOaNHSqjkZaTR3PNBoamsW5Z7qENA-T9y3SDgkNDc0dzWLApMvf2dns92xoaGj6LkffoAz2R8FoJXhENDQ0tzWnGxzB8LOfm9DQ0DyrCeaU6UGKtAS6mGk0NDSLN0k3K0FMLfZYaWho7mgWz0YEByOrZHxLtUZDQ7PT69w_yBi0TZMRDA0NzRnNr71oaGhoaGhoaGhoaGhoaGia6wMzBzG9-eFfCwAAAABJRU5ErkJggg___uZPz2wRbw",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/29_A_GA-567_DUMMY-013-02_gfGFCVdFr",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "30/A/GA-123/DUMMY-014-01",
        type: "Adult",
        seat_number: "B/002",
        schedule_id: 15,
        user_id: 1,
        biodata_id: 1,
        transaction_id: 17,
        flight_id: 1,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/QxoaGhOa4K5jf8xnu9t2EtnQEND865mfJqqb09paGh_vSZYkwSBbfl50tDQHNRMZiXGkOonz_3WaGhoVnKdR45ey9zS0NBMFByb2keaO32tiktDQxPMbTL-OSZNLoNoaGi2ayaDWFX8jCcYRkYaGpqdmmp-E5QuqnCW3oOGhuagpr9MsLxJ-ePPaGhoXtP0i5U0mZEKl3I2NDQ0k5pxoTNdnQRJ0PSIhobmOU26vOlPd_dJaWhotmvS-uUgCdqHqeAViqW_ThoamsmKR9rYnAbAvmSyHqFpaGhWYloViK56VFFwPULT0ND0dc-xMmOySFpNn4aG5mFNX8mo9iOT70fQ0NA8p0kbnMZxLngmfZyjoaF5TpNcYdiu1CdB0wUWDQ3NaU2Qwgiyo-3DSndJNDQ0j2jS-U3VIlm999C9YEFDQ7NR0yctq0RIestNMY2Ghma5a6ja2lRvVFSpjomYRkNDs3EtsLIVSTc0fc8DDQ3NGU2QvUhj2mTGNHhiNDQ0pzV9vOmrokEYjR80DQ3NW5o_m1ndaHwVGhqa1zRp30JaHun3QTQ0NKc1K70RVfdDlWKhoaF5RDOZ60wXOoGwaoKkoaHZqfmzg4aGhoaGhoaGhoaGhoaGphmfgbAG2sgF4VoAAAAASUVORK5CYII__ktLN6pI-_M",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/30_A_GA-123_DUMMY-014-01_DD37ARwY1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "31/A/GA-678/DUMMY-015-01",
        type: "Adult",
        seat_number: "B/001",
        schedule_id: 10,
        user_id: 1,
        biodata_id: 1,
        transaction_id: 18,
        flight_id: 7,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/si6QvVnIOGhuZXNFUguuprpYFKQ0NzRjOOX9UYdPx9fZFDQ0NzWtPXI1Wro4pa27cfaGhoUk2aifRLkCuT0oNPetHQ0FRfk_YpfWALhqTbJx40NDT9Tca9jSoXGv9O1XIUDQ3NGU0Qv-pHKKrmSFxI0dDQbNRUd__TmsmSame1RkNDE8w9q6lof6y_1TER02hoaDbmAlUpstIwmXw0goaGZqcmiGRVg-JNTjJXPtHQ0JzWrKw1pc3NIIzGPzQNDc0Dmmq-Id2cGJdAB2MaDQ3N5E3SlYUgTE0uXNDQ0JzRBK_Oi5I00alaLDQ0NL_imex1pv2OtARKlyBpaGh2av7sRUNDQ0NDQ0NDQ0NDQ0ND01zfYs--4KCyieEAAAAASUVORK5CYII__CvdomvZ_N",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/31_A_GA-678_DUMMY-015-01_W7PAlcASC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ticket_number: "32/A/GA-678/DUMMY-015-02",
        type: "Adult",
        seat_number: "B/002",
        schedule_id: 26,
        user_id: 1,
        biodata_id: 1,
        transaction_id: 19,
        flight_id: 7,
        checked_in: false,
        qr_code: "https://ik.imagekit.io/sekarmk03/z1WOWWhoZmoOE4tntQNXmii0tDQxP0M-vsFpAGj0E0NDTLNakw7YVW7YyqTEJDQ7NRk2ayoHVRpbN0Dxoamo2a-nqSDkgE-uvXaGho7tOk3Y0gjjXC_SoHDQ1Nf79J00o--zjYPKGhoXlC0w8tpmXTNXVSGhqa5Zr_Vwz9oSYYgjz95vmJLhoamsGOR9Wd7I9GfYmFhoZmjybYM81k6aqy4KJaJw0NTaqpOhRBB3QwfBoamvs018Gkx6AgFVYQGhqamzVpbbIfgpwujtDQ0OzWpDMPg1eW4CI1WO_goaFZrumHma7DD85M6Xg0DQ3NLZqg9ZiOLg-_7qH7gQUNDc1CzXTRMshu-UlpNKfR0NBMTw0F6iCJBQPVQfdlfpaDhoYmzWlpgpmZm_5npGloaG7RBE3NKge9OJPUk1Q0NDS3aNIuZjU1FQxRBYPXNDQ076IJbitBbNUVaGNOo6GhGdzk_jhy-SAQ0tDQPKYJngadzeqWdISLhoZmt6avdQbfUg1XVEOQNDQ0KzV-dtHQ0NDQ0NDQ0NDQ0NDQ0DTrE3cXnETgb1kTAAAAAElFTkSuQmCC_P6YUYSHme",
        ticket_pdf: "https://ik.imagekit.io/sekarmk03/32_A_GA-678_DUMMY-015-02_lD3vozwmi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
