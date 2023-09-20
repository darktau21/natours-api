const {Router} = require('express');
const tourRouter  = require('./tourRouter');
const userRouter  = require('./userRouter');

const router = Router();

router.use('/tours', tourRouter);
router.use('/users', userRouter);

module.exports = router;
