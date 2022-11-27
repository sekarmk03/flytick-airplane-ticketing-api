'use strict';
const {
  Model
} = require('sequelize');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginType = require('../utils/login_type');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async checkPassword(password) {
      return await bcrypt.compareSync(password, this.password);
    }

    associatedAccount() {
      return this.login_type != loginType.basic;
    }

    generateToken() {
      const payload = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        avatar_id: this.avatar_id,
        role: this.role,
        balance: this.balance,
        biodata_id: this.biodata_id,
        login_type: this.login_type
      };

      return jwt.sign(payload, JWT_SECRET_KEY);
    }

    static authenticate = async ({email, password}) => {
      try {
        const user = await this.findOne({where: {email: email}});
        if(!user) return Promise.reject(new Error('user not found'));

        const associatedAccount = await user.associatedAccount();
        if(associatedAccount) return Promise.reject(new Error(`your account is associated with ${user.login_type} account`));

        const valid = await user.checkPassword(password);
        if(!valid) return Promise.reject(new Error('wrong password'));

        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar_id: DataTypes.INTEGER,
    role: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    biodata_id: DataTypes.INTEGER,
    login_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};