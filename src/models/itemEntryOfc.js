const {
  Model,
  DataTypes
} = require('sequelize');
const con = require('../db/index.js');
class ItemEntryOfc extends Model {}
ItemEntryOfc.init({
  pkEntryOfc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATE
  },
  desc: {
    type: DataTypes.STRING
  }
}, {
  sequelize: con,
  tableName: 'itemEntriesOfc'
});
module.exports = ItemEntryOfc;