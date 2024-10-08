'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      trip_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trips',
          key: 'id',
        }
      },
      seat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'seats',
          key: 'id',
        }
      },
      status: {
        type: Sequelize.STRING,
      },
      ticketCode: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Tickets');
  }
};