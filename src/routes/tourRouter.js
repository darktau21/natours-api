const {Router} = require('express');
const controller = require('../controllers/tourController');
const authController = require('../controllers/authController');

const router = Router();

router.route('/top-5-cheap')
  .get(controller.topFiveCheap, controller.getAll);

router.route('/stats')
  .get(authController.protect, controller.getToursStats);

router.route('/monthly-plan/:year')
  .get(controller.getMonthlyPlan);

router.route('/')
  .get(controller.getAll)
  .post(controller.add);

router.route('/:id')
  .get(controller.getById)
  .patch(controller.updateById)
  .delete(controller.deleteById);

module.exports = router;
