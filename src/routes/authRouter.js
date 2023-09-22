const {Router} = require('express');
const controller = require('../controllers/authController');

const router = Router();

router.route('/register')
  .post(controller.register);

router.route('/login')
  .post(controller.login);

module.exports = router;