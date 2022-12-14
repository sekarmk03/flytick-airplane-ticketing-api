'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City, {foreignKey: 'city_id', as: 'city'});
      Airport.belongsTo(models.Country, {foreignKey: 'country_id', as: 'country'});
    }
  }
  Airport.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    maps_link: DataTypes.STRING,
    maps_embed: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};