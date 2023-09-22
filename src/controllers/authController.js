const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

const generateAuthToken = async (id) => {

  return await sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

module.exports.register = catchAsync(async (req, res) => {
  if (Array.isArray(req.body)) {
    throw new AppError('This route is not for array data', 400);
  }

  const {email, password, name, passwordChangedAt} = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    passwordChangedAt,
  });

  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
      token: await generateAuthToken(newUser._id)
    }
  });
});

module.exports.login = catchAsync(async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) throw new AppError('Please provide an email and password', 400);


  const user = await User.findOne({email}).select('+password');
  if (!user || !(await user.validatePassword(password))) {
    throw new AppError('Incorrect email or password', 401);
  }

  res.status(200).json({
    status: 'success',
    data: {
      token: await generateAuthToken(user._id)
    }
  });

});

module.exports.protect = catchAsync(async (req, res, next) => {
  if (
    !req.headers.authorization
    || !req.headers.authorization.startsWith('Bearer')
    ) throw new AppError('You are not logged in! Please log in to get access.', 401);

  const token = req.headers.authorization.split(' ')[1];

  const decoded = await verify(token, process.env.JWT_SECRET);
    
  const user = await User.findById(decoded.id);
  if (!user) throw new AppError('The user belonging to this token does no longer exist.', 401);

  if (user.isTokenStale(decoded.iat)) {
    throw new AppError('User recently changed password! Please log in again.', 401);
  }

  req.currentUser = user;
  
  next()
});