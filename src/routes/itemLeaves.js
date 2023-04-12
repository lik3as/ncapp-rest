const Router = require('express');
const ctrl = require('../controllers/itemLeaveController.js');
const router = new Router();

router.post('/leave', ctrl.createLeave, ctrl.updateLeave);
router.get('leave', ctrl.readLeaves);
router.get('leave/:pk', ctrl.readLeave);

module.exports = router;