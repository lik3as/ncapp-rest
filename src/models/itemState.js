const {
  Model,
  DataTypes
} = require('sequelize');
const con = require('../db/index.js');
class ItemState extends Model {}
ItemState.init({
  pkItemState: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  state: {
    type: DataTypes.STRING
  }
}, {
  sequelize: con,
  tableName: 'itemStates'
});
module.exports = ItemState;