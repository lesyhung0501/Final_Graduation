'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tickets', 
    generateTicket(),
      // [
      //   {
      //     seat_id: 1,
      //     trip_id: 1,
      //     user_id: 1,
      //     status: 'Chờ thanh toán',
      //     ticketCode: 'ABCD_111',
      //     createdAt: '2023-02-20 11:50:17',
      //     updatedAt: '2023-02-20 11:50:17',
      //   },
      //   {
      //     seat_id: 2,
      //     trip_id: 1,
      //     user_id: 2,
      //     status: 'Chờ thanh toán',
      //     ticketCode: 'ABCD_111',
      //     createdAt: '2023-02-20 11:50:17',
      //     updatedAt: '2023-02-20 11:50:17',
      //   },
      //   {
      //     seat_id: 3,
      //     trip_id: 1,
      //     user_id: 3,
      //     status: 'Chờ thanh toán',
      //     ticketCode: 'ABCD_111',
      //     createdAt: '2023-02-20 11:50:17',
      //     updatedAt: '2023-02-20 11:50:17',
      //   },
      // ], 
      {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {});
  }
};


const generateTicket = () => {
  let arrayResult = [];
  for(let i = 1; i <= 15840; i++) {
    // auto
    if( Math.random() * 5 <= 3.5 ) continue;

    const userIdRanDom = Math.ceil(Math.random() * 8);
    if(userIdRanDom < 1) {
      userIdRanDom = 1;
    }
    const statusTicket = (Math.random() * 2) < 0.8 ?  "Chưa thanh toán" : "Đã thanh toán";
    let tripId = Math.ceil(i/16);

    const newTicket = {
      seat_id: i,
      trip_id: tripId,
      user_id: userIdRanDom,
      status: statusTicket,
      ticketCode: `VxO_${tripId}${i}${userIdRanDom}`,
      createdAt: '2023-02-20 11:50:17',
      updatedAt: '2023-02-20 11:50:17',        
    }
    arrayResult.push(newTicket);
  }
  return arrayResult;
}
