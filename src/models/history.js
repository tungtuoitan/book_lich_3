"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Histories extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL HistoriesS
  Histories.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      files: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Histories",
    }
  );
 
  return Histories;
};
