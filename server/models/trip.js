'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    static associate({Station, Ticket, PassengerCarCompany, Seat}) {
      // define association here
      this.belongsTo(Station, {foreignKey: 'fromStation', as: 'from'});
      this.belongsTo(Station, {foreignKey: 'toStation', as: 'to'});
      this.belongsTo(PassengerCarCompany, {foreignKey: 'company_id', as: 'company'});
      // this.belongsTo(PassengerCarCompany, {foreignKey: 'company_id'});
      this.hasMany(Ticket, {foreignKey: 'trip_id', as: 'tripInfor'});
      this.hasMany(Seat, {foreignKey: 'trip_id'});
    }
  }
  Trip.init({
    hour: DataTypes.STRING,
    startTime: DataTypes.DATE,
    estimatedPeriod: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};