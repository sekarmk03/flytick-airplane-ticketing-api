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
      Ticket.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
      Ticket.belongsTo(models.Transaction, {foreignKey: 'transaction_id', as: 'transaction'});
      Ticket.belongsTo(models.Schedule, {foreignKey: 'schedule_id', as: 'schedule'});
      Ticket.belongsTo(models.Biodata, {foreignKey: 'biodata_id', as: 'passenger'});
      Ticket.belongsTo(models.Flight, {foreignKey: 'flight_id', as: 'flight'});
    }
  }
  Ticket.init({
    ticket_number: DataTypes.STRING,
    type: DataTypes.STRING,
    seat_number: DataTypes.STRING,
    schedule_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    biodata_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    checked_in: DataTypes.BOOLEAN,
    qr_code: DataTypes.TEXT,
    ticket_pdf: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};