const {
  Model,
  DataTypes
} = require('sequelize');
const con = require('../db/index.js');
class ItemEntry extends Model {}
ItemEntry.init({
  pkItemEntry: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE
  }
}, {
  sequelize: con,
  tableName: 'itemEntries'
});
module.exports = ItemEntry;