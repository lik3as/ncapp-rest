const {
  Model,
  DataTypes
} = require('sequelize');
const con = require('../db/index.js');

class ClientType extends Model {}
;
ClientType.init({
  pkCliType: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cliType: {
    type: DataTypes.STRING
  }
}, {
  sequelize: con,
  modelName: 'clientType'
});
module.exports = ClientType;