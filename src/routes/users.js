const Router = require('express');
const ctrl = require('../controllers/userController.js');
const router = Router();

router.get('/users/:nameUser', ctrl.readUser);
router.post('/users', ctrl.createUser);

module.exports = router;