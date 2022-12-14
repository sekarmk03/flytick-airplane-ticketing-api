'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.belongsTo(models.Country, {foreignKey: 'country_id', as: 'country'});
      City.hasMany(models.Airport, {foreignKey: 'city_id', as: 'airports'});
    }
  }
  City.init({
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};