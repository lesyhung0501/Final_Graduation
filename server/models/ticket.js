'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate({Trip, User, Seat}) {
      // define association here
      this.belongsTo(Trip, {foreignKey: 'trip_id', as: 'tripInfor'});
      this.belongsTo(User, {foreignKey: 'user_id', as: 'userInfor'});
      this.belongsTo(Seat, {foreignKey: 'seat_id', as: 'seatInfor'});
    }
  }
  Ticket.init({
    status: {
      type: DataTypes.STRING,
    },
    ticketCode: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};