"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinics extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL ClinicsS
  Clinics.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.TEXT,
      image:DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Clinics",
    }
  );
 
  return Clinics;
};
