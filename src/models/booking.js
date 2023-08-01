"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL BookingsS
  Bookings.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      statusId: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bookings",
    }
  );
 
  return Bookings;
};
