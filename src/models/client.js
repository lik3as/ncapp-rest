const {
  Model,
  DataTypes
} = require('sequelize');
const con = require('../db/index.js');
class Client extends Model {}
Client.init({
  pkCli: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  },
  uf: {
    type: DataTypes.STRING
  },
  cidade: {
    type: DataTypes.STRING
  },
  cep: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: con,
  tableName: 'clients'
});
module.exports = Client;