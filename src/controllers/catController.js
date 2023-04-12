const {Categorie} = require('../models/associations/modelExports.js');

module.exports = {
  async getCategories(req, res){
    const categories = await Categorie.findAll();
    return res.json(categories);
  }
}
