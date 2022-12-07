'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    transaction_time: DataTypes.DATE,
    invoice_number: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    paid_time: DataTypes.DATE,
    paid_status: DataTypes.BOOLEAN,
    adult: DataTypes.INTEGER,
    child: DataTypes.INTEGER,
    round_trip: DataTypes.BOOLEAN,
    total_cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};