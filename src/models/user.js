"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL USERS
  User.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      image:DataTypes.STRING,
      roleId: DataTypes.STRING,
      positionId: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "User",
    }
  );
 
  return User;
};
