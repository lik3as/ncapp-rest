const {ItemEntryOfc} = require('../models/associations/modelExports.js');

module.exports = {
  async createEntryOfc(req, res, next){
    if(typeof req.get('id') != undefined) 
      return next();
    else{
      const entry_ofc = await ItemEntryOfc.create(req.body);
      return res.json(entry_ofc);
    }
  },

  async updateEntryOfc(req, res){
    const entry_ofc = await ItemEntryOfc.update(req.body, {
      where: {
        id: req.get('id')
      }
    });
    return res.json(entry_ofc);
  },

  async readEntryOfc(req, res){
    if(typeof req.params.pk == undefined)
      return next('route');

    else{
      const entry_ofc = await ItemEntryOfc.findByPk(req.body.pk);
      return res.json(entry_ofc);
    }
  },

  async readEntriesOfc(req, res){
    const entries_ofc = await ItemEntryOfc.findAll();
    return res.json(entries_ofc);
  }
};
