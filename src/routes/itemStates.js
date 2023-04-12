const Router = require('express');
const ctrl = require('../controllers/itemStateController.js');
const router = new Router();

router.get('/states', ctrl.readStates);

module.exports = router;