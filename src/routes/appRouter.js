const {Router} = require('express');
const tourRouter  = require('./tourRouter');
const userRouter  = require('./userRouter');
const authRouter  = require('./authRouter');
const AppError = require('../utils/AppError');

const router = Router();

router.use('/tours', tourRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;
