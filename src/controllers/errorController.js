const AppError = require('../utils/AppError');

const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    err,
    message: err.message,
    stack: err.stack
  });
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    setImmediate(() => {
      console.error('UNHANDLED ERROR!');
      console.error(err);
    })
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
}

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
}

const handleDuplicateFieldsDB = err => {
  const errorMessage = Object.entries(err.keyValue).map(el => `${el[0]}: ${el[1]}`).join(', ')
  const message = `Fields with given values already exists (${errorMessage}). Please use another value.`;
  return new AppError(message, 400);
}

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data: ${errors.join('. ')}`;
  return new AppError(message, 400);
}

const handleInvalidJWTError = () => {
  return new AppError('Invalid token. Please log in again', 401);
};

const handleJWTExpiredError = () => {
  return new AppError('Your token has expired. Please log in again', 401);
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  
  if (process.env.NODE_ENV === 'development') {
    sendDevError(err, res);
  } else {
    let error = { ...err, name: err.name, message: err.message };
    
    if (err.name === 'CastError') error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateFieldsDB(err);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(err);
    if (err.name === 'JsonWebTokenError') error = handleInvalidJWTError();
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendProdError(error, res);
  }

  next();
}