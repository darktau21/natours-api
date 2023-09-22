const {Router} = require('express');
const tourRouter  = require('./tourRouter');
const userRouter  = require('./userRouter');
const authRouter  = require('./authRouter');
const AppError = require('../utils/AppError');

const router = Router();

router.use('/tours', tourRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = router;
