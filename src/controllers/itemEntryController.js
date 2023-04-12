const {ItemEntry} = require('../models/associations/modelExports.js');

module.exports = {
  async createEntry(req, res, next){
    if(typeof req.get('id') != undefined)
      return next();

    else{
      const entry = await ItemEntry.create(req.body);
      return res.json(entry);
    }
  },

  async updateEntry(req, res){

    const entry = await ItemEntry.update(req.body, {
      where: {
        id: req.get('id')
      }
    });
    return res.json(entry);
  },
  
  async readEntry(req, res, next){
    if(req.params.pk == undefined)
      return next('route');
    else{
      const pk = req.params.pk;
      const entry = await ItemEntry.findByPk(pk);
      return res.json(entry);
    }
  },

  async readEntries(req, res){
    const entries = ItemEntry.findAll();
    return res.json(entries);
  }
};
