const Router = require('express');
const ctrl = require('../controllers/itemController.js');
const router = Router();

router.get('/items/:pk', ctrl.readItem);
router.get('/items', ctrl.readItems);
router.post('/items', ctrl.createItem, ctrl.updateItem);

module.exports = router;