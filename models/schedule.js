'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    flight_id: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    departure_time: DataTypes.DATE,
    arrival_time: DataTypes.DATE,
    from_airport: DataTypes.INTEGER,
    to_airport: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};