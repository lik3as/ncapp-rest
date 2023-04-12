const Router = require('express');
const ctrl = require('../controllers/clientController.js');
const router = new Router();

router.get('/clients/:name', ctrl.readClient);
router.get('/clients', ctrl.readClients);
router.post('/clients', ctrl.createClient, ctrl.updateClient);

module.exports = router;