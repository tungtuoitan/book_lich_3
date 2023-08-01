"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinic_Specialty extends Model {
    
    static associate(models) {

    }
  } // ĐỊNH NGHĨA MODEL SpecialtyS
  Doctor_Clinic_Specialty.init( // ĐỊNH NGHĨA THÔNG TIN
    {
      doctorId: DataTypes.INTEGER,
      clinic: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,

    },
    {
      sequelize,
      modelName: "Doctor_Clinic_Specialty",
    }
  );
 
  return Doctor_Clinic_Specialty;
};
