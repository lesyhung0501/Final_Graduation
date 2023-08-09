'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Ticket, PassengerCarCompany}) {
      // define association here
      this.hasMany(Ticket, {foreignKey: 'user_id', as: 'userInfor'});
      this.belongsTo(PassengerCarCompany, {foreignKey: 'user_company_id'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    numberphone: DataTypes.STRING,
    address: DataTypes.STRING,
    birthday: DataTypes.STRING,
    gender: DataTypes.STRING,
    avatar: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};