'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Biodata.hasOne(models.User, {foreignKey: 'biodata_id', as: 'user'});
    }
  }
  Biodata.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    nik: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    telp: DataTypes.STRING,
    nationality: DataTypes.INTEGER,
    no_passport: DataTypes.STRING,
    issue_date: DataTypes.DATE,
    expire_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Biodata',
  });
  return Biodata;
};