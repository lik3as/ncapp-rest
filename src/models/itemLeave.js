const {
  Model,
  DataTypes
} = require('sequelize');
const con = require('../db/index.js');
class ItemLeave extends Model {}
ItemLeave.init({
  pkLeave: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATE
  }
}, {
  sequelize: con,
  tableName: 'itemLeave'
});
module.exports = ItemLeave;