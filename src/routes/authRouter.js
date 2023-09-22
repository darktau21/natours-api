const {Router} = require('express');
const controller = require('../controllers/authController');

const router = Router();

router.route('/signup')
  .post(controller.signUp);

  module.exports = router;