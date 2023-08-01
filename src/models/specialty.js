"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialties extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL SpecialtyS
  Specialties.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      name:DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialties",
    }
  );
 
  return Specialties;
};
