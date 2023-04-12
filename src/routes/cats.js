const Router = require('express');
const ctrl = require('../controllers/catController.js');
const router = Router();

router.get('/categories', ctrl.getCategories);

module.exports = router;