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
    await queryInterface.bulkInsert('users', 
      [
        {
          name: 'ADMIN1',
          email: 'admin1@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN2',
          email: 'admin2@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN3',
          email: 'admin3@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN4',
          email: 'admin4@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN5',
          email: 'admin5@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN6',
          email: 'admin6@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN7',
          email: 'admin7@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'ADMIN8',
          email: 'admin8@gmail.com',
          password: '$2a$10$VW4rT0ZOYDrFdurIoIaM5OLAvMek6CIiwklHTFQIrl9YgTP/9fTsG',
          numberphone: '0123456789',
          address: 'Ha Noi',
          birthday: '01-01-2001',
          gender: 'Nam',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          user_company_id: null,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
      ], {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
