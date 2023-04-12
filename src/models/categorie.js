const {
  Model,
  DataTypes
} = require('sequelize');

const con = require('../db/index.js');

class Categorie extends Model {}
Categorie.init({
  pkCat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoria: {
    type: DataTypes.STRING
  }
}, {
    sequelize: con,
    tableName: 'categories'
  }
);

module.exports = Categorie;