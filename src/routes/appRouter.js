const {Router} = require('express');
const tourRouter  = require('./tourRouter');
const userRouter  = require('./userRouter');
const AppError = require('../utils/AppError');

const router = Router();

router.use('/tours', tourRouter);
router.use('/users', userRouter);
router.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

module.exports = router;
