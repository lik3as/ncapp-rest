const Router = require('express');
const router = new Router();
const ctrl = require('../controllers/nfeController.js');

router.post('/nfes', ctrl.createNfe, ctrl.updateNfe);
router.get('/nfes', ctrl.readNfes);
router.get('/nfes/:pk', ctrl.readNfe);

module.exports = router;