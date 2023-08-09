'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    static associate({Trip}) {
      // define association here
      this.hasMany(Trip, {foreignKey: 'fromStation', as: 'from'});
      this.hasMany(Trip, {foreignKey: 'toStation', as: 'to'});
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [0,50],
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        checkLen(value) {
          if(value.length >=0 && value.length <=100) {
            return true;
          }
          else {
            throw new Error("Độ dài phải trong khoảng 0-100");
          }
        }
      }
    },
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};