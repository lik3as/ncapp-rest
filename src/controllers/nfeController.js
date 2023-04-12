const {Nfe} = require('../models/associations/modelExports.js');

module.exports =  {
  async createNfe(req, res, next){
    if(typeof req.get('id') != undefined)
      return next();

    else{
      const nfe_json = req.body;
      const nfe = await Nfe.create(nfe_json);
      return res.json(nfe);
    }
  },

  async updateNfe(req, res){
    const nfe = await Nfe.update(req.body, {
      where: {
        id: req.get('id')
      }
    });
    return res.json(nfe);
  },
  
  async readNfe(req, res, next){
    if(req.params.pk == undefined)
      return next('route')
    else{
      const pk = req.params.pk;
      const nfe = await Nfe.findByPk(pk);
      return res.json(nfe);
    }
  },

  async readNfes(req, res){
    const nfes = await Nfe.findAll();
    return res.json(nfes);
  }
};
