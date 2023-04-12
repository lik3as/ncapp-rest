const {ItemLeave} = require('../models/associations/modelExports.js');

module.exports =  {
  async createLeave(req, res, next){
    if(typeof req.get('id') != undefined)
      return next();

    else{
      const leave = ItemLeave.create(req.body);
      return res.json(leave);
    }
  },

  async updateLeave(req, res){
    const leave = await ItemLeave.update(req.body, {
      where: {
        id: req.get('id')
      }
    });
    return res.json(leave);

  },

  async readLeave(req, res, next){
    if(typeof req.params.pk == undefined)
      return next();

    else{
      const pk = req.body.pk;
      const leave = await ItemLeave.findByPk(pk);
      return res.json(leave);
    }
  },

  async readLeaves(req, res){
    const leave = await ItemLeave.findAll();
    return res.json(leave);
  }
}
