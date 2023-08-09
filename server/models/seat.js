'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate({Ticket, Trip}) {
      // define association here
      this.belongsTo(Trip, {foreignKey: 'trip_id'});
      this.hasOne(Ticket, {foreignKey: 'seat_id', as: 'seatInfor'});
    }
  }
  Seat.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};