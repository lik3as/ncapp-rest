const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');
const con = require('../db/index.js');
class User extends Model {}
User.init({
  pkUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nameUser: {
    type: DataTypes.STRING,
    unique: true
  },
  pswUser: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: con,
  modelName: 'users'
});
module.exports = User;