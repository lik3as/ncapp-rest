const {Client} = require('../models/associations/modelExports.js');

/*
 * findAll em vez de findByPk é dado
 * Em razão da UNIQUE nome
*/

module.exports = {
  async readClient(req, res, next){
    if(typeof req.params.name == undefined)
      next('route');
    else{
      const client = await Client.findAll({
        where: {
          nome: req.params.name
        }
      });
      return res.json(client); 
    }
  },

  async readClients(req, res){
    const clients = await Client.findAll();

    return res.json(clients);
  },
  
  async createClient(req, res, next){
    if(typeof req.get('id') != undefined)
      return next();

    else {
      const client_json = req.body;  
      const client = await Client.create(client_json);

      return res.json(client);
    }
  },

  async updateClient(req, res){
    const client = await Client.update(req.body, {
      where: {
        id: req('id')
      }
    });

    return res.json(client);
  },

}
