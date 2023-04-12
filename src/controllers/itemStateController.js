const {ItemState} = require( '../models/associations/modelExports.js');

module.exports = {
  async readStates(req, res){
    const states = await ItemState.findAll();
    return res.json(states);
  }
}
