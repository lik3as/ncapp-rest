const Router = require('express');
const ctrl = require('../controllers/cliTypeController.js');
const router = new Router();

router.get('/ClientTypes', ctrl.getTypes);

module.exports = router;