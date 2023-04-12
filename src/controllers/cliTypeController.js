const {ClientType} = require('../models/associations/modelExports.js');

module.exports = {
  async getTypes(req, res){
    const types = await ClientType.findAll();
    return  res.json(types);
  }
}
