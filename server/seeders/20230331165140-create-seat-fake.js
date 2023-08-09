'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('seats', 
    generateSeat(),
    // [
    //   {
    //     name: 'A1',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A2',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A3',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A4',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A5',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A6',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A7',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A8',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A9',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    //   {
    //     name: 'A10',
    //     trip_id: 1,
    //     createdAt: '2023-04-01 11:50:17',
    //     updatedAt: '2023-04-01 11:50:17'
    //   },
    // ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('seats', null, {});
  }
};


const generateSeat = () => {
  let arrayResult = [];
  for(let i = 1; i <= 990; i++) { 
    for(let j = 1; j <= 16; j++) {
      const newSeat = {
        name: `A${j}`,
        trip_id: i,
        createdAt: '2023-04-01 11:50:17',
        updatedAt: '2023-04-01 11:50:17'
      }
      arrayResult.push(newSeat)
    }  
  }
  return arrayResult;
}
