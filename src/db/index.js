const Sequelize = require('sequelize');
const config = require('../config/database.js');

const sequelize = new Sequelize(config);

try{
  await sequelize.authenticate();
  console.log("DB Connected with Success");
} catch(err){
  console.log(err);
}

module.exports = sequelize;
