'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    type: DataTypes.STRING,
    schedule_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    biodata_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    checked_in: DataTypes.BOOLEAN,
    qr_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};