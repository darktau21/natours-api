const {Router} = require('express');
const controller = require('../controllers/userController');

const router = Router();

router.route('/')
  .get(controller.getAll)
  .post(controller.add);

router.route('/:id')
  .get(controller.getById)
  .patch(controller.patchById)
  .delete(controller.deleteById);

module.exports = router;
