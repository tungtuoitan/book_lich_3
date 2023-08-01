"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcodes extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL AllcodesS
  Allcodes.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      key: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Allcodes",
    }
  );
 
  return Allcodes;
};
