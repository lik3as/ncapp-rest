'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemEntryOfc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemEntryOfc.init({
    desc: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ItemEntryOfc',
  });
  return ItemEntryOfc;
};