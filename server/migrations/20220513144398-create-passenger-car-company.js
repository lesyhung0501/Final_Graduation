'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PassengerCarCompanies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      phoneCompany: {
        type: Sequelize.STRING
      },
      bedroom: {
        type: Sequelize.INTEGER
      },
      wifi: {
        type: Sequelize.INTEGER
      },
      toilet: {
        type: Sequelize.INTEGER
      },
      airConditioner: {
        type: Sequelize.INTEGER
      },
      fastFood: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PassengerCarCompanies');
  }
};