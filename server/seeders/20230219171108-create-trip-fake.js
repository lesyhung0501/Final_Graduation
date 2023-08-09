'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trips', 
    generateTrip().concat(generateTripRound()),
    // [
    //   {
    //     startTime: '2023-04-16 11:33:26',
    //     price: 200000,
    //     fromStation: 1,
    //     toStation: 2,
    //     company_id: 1,
    //     hour: "06-00",
    //     createdAt: '2023-04-01 11:33:26',
    //     updatedAt: '2023-04-01 11:33:26'
    //   },
    // ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trips', null, {});
  }
};


const generateTrip = () => {
  let arrayResult = [];
  for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <=10; j++) {
      if (i === j) {
        continue;
      }
      // const priceRandom = Math.floor(Math.random() * 1000000);
      // let priceCanculate = priceRandom - (priceRandom % 100000);
      // if(priceCanculate < 400000) {
      //   priceCanculate = 400000;
      // }
      let priceCanculate = 600000;
      for(let k = 1; k <= 5; k++) {
        const newTrip = {
          startTime: '2023-05-05 11:33:26',
          price: priceCanculate + (6 - k) * 50000,
          fromStation: i,
          toStation: j,
          company_id: k,
          hour: "12-00",
          estimatedPeriod: "08-00",
          createdAt: '2023-05-05 11:33:26',
          updatedAt: '2023-05-05 11:33:26'
        }
        arrayResult.push(newTrip)
      }
    }
  }
  return arrayResult;
}

const generateTripRound = () => {
  let arrayResult = [];
  for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <=10; j++) {
      if (i === j) {
        continue;
      }
      // const priceRandom = Math.floor(Math.random() * 1000000);
      // let priceCanculate = priceRandom - (priceRandom % 100000);
      // if(priceCanculate < 400000) {
      //   priceCanculate = 400000;
      // }
      let priceCanculate = 600000;
      for(let k = 1; k <= 3; k++) {
        const newTrip1 = {
          startTime: '2023-05-06 11:33:26',
          price: priceCanculate + (6 - k) * 50000,
          fromStation: i,
          toStation: j,
          company_id: k,
          hour: "12-00",
          estimatedPeriod: "08-00",
          createdAt: '2023-05-06 11:33:26',
          updatedAt: '2023-05-06 11:33:26'
        }
        const newTrip2 = {
          startTime: '2023-05-07 11:33:26',
          price: priceCanculate + (6 - k) * 50000,
          fromStation: i,
          toStation: j,
          company_id: k,
          hour: "12-00",
          estimatedPeriod: "08-00",
          createdAt: '2023-05-07 11:33:26',
          updatedAt: '2023-05-07 11:33:26'
        }
        arrayResult.push(newTrip1)
        arrayResult.push(newTrip2)
      }
    }
  }
  return arrayResult;
}
