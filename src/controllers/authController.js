const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');

module.exports.signUp = catchAsync(async (req, res, next) => {
  if (Array.isArray(req.body)) {
    return next(new AppError('This route is not for array data', 400))
  }

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser
    }
  });
});

module.exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  
});