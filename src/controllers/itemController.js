const {Item} = require('../models/associations/modelExports.js');

module.exports = {
  async readItem(req, res, next){
    if(typeof req.params.pk == undefined)
      next('route');
    else {
      const item = await Item.findByPk(req.params.pk);
      return res.json(item);
    }
  },

  async readItems(req, res){
    const items = await Item.findAll();
    return res.json(items);
  },

  async createItem(req, res, next){
    if(typeof req.get('id') != undefined)
      return next();

    else{
      const item_json = req.body;
      const item = await Item.create(item_json)
      return res.json(item);
    }
  },
  
  async updateItem(req, res){
    const item = await Item.update(req.body, {
      where: {
        id: req.get('id')
      }
    });

    return res.json(item);
  }
}
