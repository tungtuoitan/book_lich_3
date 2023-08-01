"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL Schedules
  Schedules.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      currentNumber: DataTypes.INTEGER,
      maxNumber: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
      doctorID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Schedules",
    }
  );
 
  return Schedules;
};
