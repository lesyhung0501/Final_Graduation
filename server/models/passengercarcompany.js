'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerCarCompany extends Model {
    static associate({Trip, User}) {
      // define association here
      this.hasMany(Trip, {foreignKey: 'company_id', as: 'company'});
      this.hasMany(User, {foreignKey: 'user_company_id'});
    }
  }
  PassengerCarCompany.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    phoneCompany: DataTypes.STRING,
    bedroom: DataTypes.INTEGER,
    wifi: DataTypes.INTEGER,
    toilet: DataTypes.INTEGER,
    airConditioner: DataTypes.INTEGER,
    fastFood: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PassengerCarCompany',
  });
  return PassengerCarCompany;
};