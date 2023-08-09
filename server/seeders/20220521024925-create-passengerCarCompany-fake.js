'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('passengercarcompanies', 
    [
      {
        name: 'Nhà xe Phương Trang',
        image: 'https://xevati.com/wp-content/uploads/2021/09/Nha-xe-Phuong-Trang.jpg',
        description: 'FUTA - CHẤT LƯỢNG LÀ DANH DỰ',
        phoneCompany: '0000111222',
        bedroom: 1,
        wifi: 1,
        toilet: 1,
        airConditioner: 1,
        fastFood: 1,
        createdAt: '2023-02-20 11:50:17',
        updatedAt: '2023-02-20 11:50:17',
      },
      {
        name: 'Nhà xe Thành Bưởi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlXkRTEggkWFmyNKcyj3EbZzoyNnEOe9miA&usqp=CAU',
        description: 'ĐI ĐẾN NƠI, VỀ ĐẾN CHỐN',
        phoneCompany: '0000222333',
        bedroom: 1,
        wifi: 1,
        toilet: 1,
        airConditioner: 1,
        fastFood: 0,
        createdAt: '2023-02-20 11:50:17',
        updatedAt: '2023-02-20 11:50:17',
      },
      {
        name: 'Nhà xe Mai Linh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7m0a6fZNxyeJoRBtqFhLC_0OGzKBmQCk83Q&usqp=CAU',
        description: 'XE KHỞI HÀNH ĐÚNG GIỜ - KHÔNG KHÓI THUỐC - KHÔNG ĐÓN KHÁCH DỌC ĐƯỜNG',
        phoneCompany: '0000333444',
        bedroom: 1,
        wifi: 1,
        toilet: 1,
        airConditioner: 0,
        fastFood: 0,
        createdAt: '2023-02-20 11:50:17',
        updatedAt: '2023-02-20 11:50:17',
      },
      {
        name: 'Nhà Xe Thuận Thảo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KSxmzLaTAj3LW5-KURRVi5umogkozhLUBw&usqp=CAU',
        description: 'UY TÍN TẠO DỰNG THÀNH CÔNG',
        phoneCompany: '0000444555',
        bedroom: 1,
        wifi: 1,
        toilet: 0,
        airConditioner: 0,
        fastFood: 0,
        createdAt: '2023-02-20 11:50:17',
        updatedAt: '2023-02-20 11:50:17',
      },
      {
        name: 'Nhà Xe Văn Minh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RM7b_xRGivYh-lMjVnEf-pCa8AnfLzzQyA&usqp=CAU',
        description: 'VĂN MINH - CHẤT LƯỢNG TÍCH LŨY NIỀM TIN',
        phoneCompany: '0000555666',
        bedroom: 1,
        wifi: 0,
        toilet: 0,
        airConditioner: 0,
        fastFood: 0,
        createdAt: '2023-02-20 11:50:17',
        updatedAt: '2023-02-20 11:50:17',
      },
      
      
      
      // {
      //   name: 'Nhà xe Kumho Samco',
      //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqN9DRQcXOuP-Jm0GU-896O0_s5u35g5FUg&usqp=CAU',
      //   description: 'ẤM ÁP NHƯ GIA ĐÌNH, THÂN THIỆN NHƯ BẠN BÈ',
      //   createdAt: '2023-02-20 11:50:17',
      //   updatedAt: '2023-02-20 11:50:17',
      // },
      // {
      //   name: 'Nhà xe Hoàng Long',
      //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCX9F5yYUekkQNrK4qc2JcnvDAy8Dufcugw&usqp=CAU',
      //   description: 'HOÀNG LONG - NÂNG TẦM CHẤT LƯỢNG VIỆT NAM',
      //   createdAt: '2023-02-20 11:50:17',
      //   updatedAt: '2023-02-20 11:50:17',
      // },
      // {
      //   name: 'Nhà xe Camel Travel',
      //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTUM30ZY7aCMf2OBhJvdjJJ2GQxp3TNRWyA&usqp=CAU',
      //   description: 'CHẤT LƯỢNG DỊCH VỤ TẠO NIỀM TIN',
      //   createdAt: '2023-02-20 11:50:17',
      //   updatedAt: '2023-02-20 11:50:17',
      // },
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('passengercarcompanies', null, {});
  }
};
